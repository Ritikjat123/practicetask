const jwt = require("jsonwebtoken")
exports.IsAdmin = async (req, res, next) => {
    try {
        console.log("Buyer me aaya ");
        // console.log(req, "Buyer me check karo login vali middleware se user ko body me dala hai")
        const { role } = req.user;
        console.log(role) //ye DB ka role 
        if (role === "admin") {
            console.log("yha aae ho")
            next();
            return;
        }

        return res.status(500).json({
            success: false,
            message: `App ek ${role} hai aap es controller ko access karne ke layak nhi hai, login kro correct role ke sath`,

        })

    }
    catch (err) {
        console.log("check Buyer middleware me code fat gya hai", err);
        return res.status(500).json({
            success: false,
            message: "Token ko verify nhi kar paa rha hai hamara JWT_SECRET",
            error: err.message
        })
    }
}