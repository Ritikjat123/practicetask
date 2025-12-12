import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectdb= async()=>{
   try{
    await mongoose.connect(process.env.MONGO_URL);
    console.log("database connected successfully!!")

   }catch(err){
    console.log("error in db connection", err);
   }
}
export default connectdb;