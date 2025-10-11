const jwt = require("jsonwebtoken")
exports.CheckLogin = async (req, res, next) => {
    try {
        // token ko nikal lo body
        console.log("check login middleware ke andar vala request", req)
        const { token } = req.cookies || req.body;
        if (!token) {
            return res.status(400).json({
                success: false,
                message: "please login before access all the data ofr the user ",
            })

        }
        // token kee value aa rhi hai es token ko verify karo agar token shi hai
        //  to me payload ko nikal paunga

        const tokenPayload = jwt.verify(token, process.env.JWT_SECRET);
        console.log("YE VHI DATA HAI JO PAYLOAD ME DEAYA HAI")
        if (!tokenPayload) {
            console.log("bade chalak ho galt token ko veruify kar rhe ho")
            return res.status(500).json({
                success: false,
                message: "bade chalak ho galt token ko veruify kar rhe ho mere secret ka use karke",

            })
        }


        // sab kuch shi hai to tum aage request bhej do 
        next();



    }
    catch (err) {
        console.log("check login middleware me fat gya hai", err);
        return res.status(500).json({
            success: false,
            message: "Token ko verify nhi kar paa rha hai hamara JWT_SECRET",
            error: err.message
        })
    }
}