// const express = require("express");
// const router = express.Router();
// const AuthController = require("../controllers/AuthController.js");


// // const { Signup, Login, AllUserData ,Logout} = require("../controllers/AuthController.js");
// const { CheckLogin } = require("../middleware/CheckLogin.js");
// const { IsBuyer } = require("../middleware/IsBuyer.js");






// // ------------------- Signup -------------------
// router.post("/signup", AuthController.Signup);

// // ------------------- Verify Account -------------------
// router.post("/verify-account", AuthController.VerifyAccount);

// // ------------------- Login -------------------
// router.post("/login", AuthController.Login);

// // ------------------- Forgot Password OTP -------------------
// router.post("/forgot-password-otp", AuthController.ForgotPasswordSendOtp );


// // ------------------- Reset Password -------------------
// router.post("/reset-password", AuthController.ForgotPassword);

// // ------------------- Logout -------------------
// router.post("/logout", AuthController.Logout);

// // ------------------- All Users -------------------
// router.get("/all-users", AuthController.AllUserData);

// module.exports = router;

// step-1
const express = require("express");

// step-2
const router = express.Router();

// step-3
const {
  Signup,
  VerifyAccount,
  Login,
  ForgotPasswordSendOtp,
  ForgotPassword,
} = require("../controllers/Authentication.js");

// step-4 (Improved routes)
router.post("/auth/signup", Signup);
router.post("/auth/verify", VerifyAccount);
router.post("/auth/login", Login);
router.post("/auth/password/send-otp", ForgotPasswordSendOtp);
router.post("/auth/password/reset", ForgotPassword);

// Optional future routes
// router.post("/auth/logout", AuthController.Logout);
// router.get("/auth/users", AuthController.AllUserData);

// step-5
module.exports = router;
