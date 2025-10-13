
const mongoose=require("mongoose");
require("dotenv").config()
async function DbConnect() {
    try{
        await mongoose.connect(process.env.DBURL);
        console.log("DB connected successfully");

    }
    catch(er){
        console.log("Error db ka code fat gya hai",er)
    }
}

module.exports=DbConnect;