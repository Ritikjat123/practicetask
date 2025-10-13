const jwt = require("jsonwebtoken")
exports.CheckLogin = async (req, res, next) => {
    try {
        // token ko nikal lo body
   
        const { token } = req.cookies || req.body;
        if (!token) {
            return res.status(400).json({
                success: false,
                message: "please login before access this page ",
            })

        }
        // token kee value aa rhi hai es token ko verify karo agar token shi hai
        //  to me payload ko nikal paunga

        const tokenPayload = jwt.verify(token, process.env.JWT_SECRET);

        // agar meri token verify ho gai hai to me token ke payload se role lo nikalumga 
        //  or requset objectke andar daal dunga bcs me request object se role ko nikal saku]

        console.log("YE VHI DATA HAI JO PAYLOAD ME DEAYA HAI", tokenPayload)

        // ab payload vala data requeste object ke andar dalunga
        req.user=tokenPayload;
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