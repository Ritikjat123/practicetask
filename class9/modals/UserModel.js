// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//     name: { type: String },
//     email: { type: String },
//     password: { type: String },
//     role: {
//         type: String,             // The data type must be String (or Number)
//         enum: ["buyer", "admin"], // Allowed values
//         default: "buyer"          // Default value if not provided
//           },
//      otp: { type: Number },
//     verifyStatus: { type: Boolean, default: false }
 
    
// })

// module.exports = mongoose.model("User", userSchema)

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["buyer", "admin","seller"], default: "buyer" },
    otp: { type: Number },
    verifyStatus: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
