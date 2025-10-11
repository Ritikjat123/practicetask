const jwt = require("jsonwebtoken")
const User = require("../modals/UserModel.js");
require("dotenv").config()
exports.Signup = async (req, res) => {
    try {

        // get the data 
        const { name, email, password, roll } = req.body;

        //validate the data 

        if (name === "" && email === "" && password === "") {
            res.status(400).json({
                success: false,
                message: "Name and email and password cant empty",

            })
        }

        const isUserExist = await User.findOne({ email });
        console.log(isUserExist)
        if (isUserExist) {
            return res.status(400).json({
                success: false,
                message: `Ye email se account bna hai jyada hosiyar na bano`
            })
        }


        // db ke information dal do 
        const userData = await User.create({ name, email, password, roll });

        res.status(201).json({
            success: true,
            message: "Signup successfully",
            data: userData
        })


    }
    catch (err) {
        console.log("sign up controller fat gya hai", err);
        res.status(500).json({
            success: false,
            message: "Inter Server Error",
            error: err.message
        })
    }
}


exports.Login = async (req, res) => {
    try {

        // get the data 
        const { email, password } = req.body;

        //validate the data 

        if (email === "" && password === "") {
            res.status(400).json({
                success: false,
                message: "Name and email and password cant empty",

            })
        }

        const isUserExist = await User.findOne({ email });
        if (!isUserExist) {
            res.status(400).json({
                success: false,
                message: `Ye email id ${email} meri webside me registered nhi hai`
            })
        }

        if (password !== isUserExist.password) {
            res.status(400).json({
                success: false,
                message: `enter password galt hai enter shi vala `
            })
        }


        else {
            // token banaunga 

            // payload banao
            const payload = {
                id: isUserExist._id,
                role: isUserExist.role,
                email: isUserExist.email
            }

            // payload ban gya token ko generate karo

            const meriToken = jwt.sign(payload, process.env.JWT_SECRET)


            // this is good way
            res.cookie("token", meriToken);

            return res.status(200).json({
                success: true,
                message: "Login successfully",
                token: meriToken
            })
        }


    }
    catch (err) {
        console.log("Login controller fat gya hai", err);
        res.status(500).json({
            success: false,
            message: "Inter Server Error",
            error: err.message
        })
    }
}


exports.AllUserData = async (req, res) => {
    try {

        const data = await User.find();
        if (data.length === 0) {
            return res.status(200).json({
                success: false,
                message: "No data found  ",
            })

        }


        return res.status(200).json({
            success: true,
            message: "all data of user ",
            data: data
        })



    }
    catch (err) {
        console.log("Login controller fat gya hai", err);
        res.status(500).json({
            success: false,
            message: "Inter Server Error",
            error: err.message
        })
    }
}


exports.Logout = async (req, res) => {
    try {

        console.log("or Paschim")
        // remove the token from the cookie 
        res.clearCookie("token");
        return res.status(200).json({
            success: true,
            message: "Logout successfully ",

        })
    }

    catch (err) {
        console.log("Logout controller fat gya hai", err);
        res.status(500).json({
            success: false,
            message: "Inter Server Error",
            error: err.message
        })
    }
}