import mongoose from 'mongoose';

const userSchemsa= new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true}
})

const User =mongoose.model("User", userSchemsa);
export default User;