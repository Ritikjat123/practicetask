const User = require("../modals/UserModel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const EmailSender = require("../utils/EmailSender.js");
const OtpGenerator = require("../utils/OtpGenerator.js");
require("dotenv").config();

// ------------------- Signup -------------------
exports.Signup = async (req, res) => {
    try {
        const { name, email, password, confirm_password, role } = req.body;

        if (!name || !email || !password || !confirm_password) {
            return res.status(422).json({ success: false, message: "All fields are required" });
        }

        if (password !== confirm_password) {
            return res.status(422).json({ success: false, message: "Password and confirm password mismatch" });
        }
        
        if ((password.length !== confirm_password.length)) {
            return res.status(422).json({
                success: false,
                message: "Password and confirm Password length not equal ",
            })
        }


        const isUserExist = await User.findOne({ userEmail: email }) || await User.findOne({ email });
        if (isUserExist) {
            return res.status(400).json({ success: false, message: "Email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const otp = OtpGenerator();

        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
            role,
            otp
        });

        await EmailSender(name, email, otp, "Registration successfully");

        res.status(201).json({ success: true, message: "User registered! OTP sent to email", data: newUser });

    } catch (error) {
        console.log("Signup error:", error);
        res.status(500).json({ success: false, message: "Internal server error", error: error.message });
    }
};

// ------------------- Verify Account -------------------
exports.VerifyAccount = async (req, res) => {
    try {
        const { email, otp } = req.body;
        if (!email || !otp) return res.status(422).json({ success: false, message: "Email and OTP required" });

        const user = await User.findOne({ userEmail: email }) || await User.findOne({ email });
        if (!user) return res.status(400).json({ success: false, message: "User not found" });
        if (user.verifyStatus) return res.status(400).json({ success: false, message: "Already verified" });
        if (user.otp != otp) return res.status(400).json({ success: false, message: "OTP mismatch" });

        user.verifyStatus = true;
        user.otp = undefined;
        await user.save();

        res.status(201).json({ success: true, message: "User verified successfully" });

    } catch (error) {
        console.log("Verify error:", error);
        res.status(500).json({ success: false, message: "Internal server error", error: error.message });
    }
};

// ------------------- Login -------------------
exports.Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) 
            return res.status(422).json
        ({ success: false, 
            message: "Email and password required" });
             
        const user = await User.findOne({ email });
        if (!user) 
            return res.status(400).json
        ({ success: false,
             message: "User not registered" });
  // ❌ if not verified — restrict login
                 if (!user.verifyStatus) {
            return res.status(403).json({
                success: false,
                message: "Please verify your account first (check your email for OTP)"
            });
        }

        // const isMatch = await bcrypt.compare(password, user.userPassword && user.password);
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) 
            return res.status(400).json
        ({ success: false, 
            message: "Incorrect password" });
         
        const token = jwt.sign(
            { id: user._id, role: user.role, email: user.email },
             process.env.JWT_SECRET);

        res.cookie("token", token);

        res.status(200).json
        ({ success: true,
             message: "Login successful", token });
      
    } catch (error) {
        console.log("Login error:", error);
        res.status(500).json({ success: false, message: "Internal server error", error: error.message });
    }
};

// ------------------- Forgot Password OTP -------------------
exports.ForgotPasswordSendOtp = async (req, res) => {
    try {
        const { email } = req.body;

        // 1️ Validation
        if (!email) {
            return res.status(422).json({ success: false, message: "Email is required" });
        }

        // 2️ Check if user exists
        const user = await User.findOne({ userEmail: email }) || await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: "User not registered" });
        }

        // 3️ Generate OTP
        const otp = OtpGenerator();
        user.otp = otp;
        await user.save();

        // 4️ Send email
        await EmailSender(user.name, email, otp, "Reset password OTP");

        // 5️Response
        res.status(200).json({ success: true, message: "OTP sent successfully to email" });


    } catch (error) {
        console.log("ForgotPassword error:", error);
        res.status(500).json({ success: false, message: "Internal server error", error: error.message });
    }
};

// ------------------- Reset Password -------------------
exports.ForgotPassword = async (req, res) => {
    try {
        const { email, otp, new_password, confirm_password } = req.body;
        if (!email || !otp || !new_password || !confirm_password) {
            return res.status(422).json({ success: false, message: "All fields required" });
        }

        if (new_password !== confirm_password) {
            return res.status(422).json({ success: false, message: "Password mismatch" });
        }

        const user = await User.findOne({ userEmail: email }) || await User.findOne({ email });
        if (!user) return res.status(400).json({ success: false, message: "User not registered" });

        if (user.otp != otp) return res.status(400).json({ success: false, message: "OTP mismatch" });

        user.userPassword = await bcrypt.hash(new_password, 10);
        user.password = user.userPassword; // for backward compatibility
        user.otp = undefined;
        await user.save();

        await EmailSender(user.name, email, otp, "Password reset successfully");

        res.status(201).json({ success: true, message: "Password reset successfully" });

    } catch (error) {
        console.log("Reset password error:", error);
        res.status(500).json({ success: false, message: "Internal server error", error: error.message });
    }
};

// ------------------- Logout -------------------
exports.Logout = async (req, res) => {
    try {
        res.clearCookie("token");
        res.status(200).json({ success: true, message: "Logout successful" });
    } catch (err) {
        console.log("Logout error:", err);
        res.status(500).json({ success: false, message: "Internal server error", error: err.message });
    }
};

// ------------------- All Users -------------------
exports.AllUserData = async (req, res) => {
    try {
        const data = await User.find();
        if (data.length === 0) {
            return res.status(200).json({ success: false, message: "No data found" });
        }
        res.status(200).json({ success: true, message: "All users data", data });
    } catch (err) {
        console.log("AllUserData error:", err);
        res.status(500).json({ success: false, message: "Internal server error", error: err.message });
    }
};
