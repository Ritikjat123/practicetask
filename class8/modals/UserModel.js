const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    role: {
        type: String,             // The data type must be String (or Number)
        enum: ["buyer", "admin"], // Allowed values
        default: "buyer"          // Default value if not provided
    }
})

module.exports = mongoose.model("User", userSchema)