import express from "express";
import User from "../models/user.js";

export const createUser=async(req,res)=>{
    try{
         console.log("hii")
        const {name,email,password}=req.body;
        const newuser = new User({
            name,email,
            password
        });
        await newuser.save();
        console.log("hii")
    return     res.status(201).json({message:"user created successfully", user:newuser
        })

    }catch(err){
        res.status(500).json({message:"error in creating user", error:err.message});

    }
}

export const getUsers=async(req,res)=>{
    
    try{
        const users= await User.find({});
     return    res.status(200).json({success:true,message:"user fetched successfully ", users})

    }catch(err){
        res.status(500).json({message:"error in fetching users", error:err.message});
    }
}

export const getUserById=async(req,res)=>{
    try{
        const {id}=req.params;
        const user= await User.findById(id);
        if(!user){
           return res.status(404).json({message:"user not found"});
        }                                                                   
     return    res.status(200).json({message:"user fetched successfully", user});
    }catch(err){
        res.status(500).json({message:"error in fetching user", error:err.message});
    }   
}

export const updateUser=async(req,res)=>{
   try{
    const {id}=req.params;
    const {name,email,password}=req.body;
    const user = await User.findByIdAndUpdate(id,
        {name,email,password},
        {new:true}
    );
    if(!user){
      return  res.status(404).json({message:"user not found"});
    }
   return  res.status(200).json({message:"user updated successfully", user});


   }catch(err){
     res.status(500).json({message:"error in updating user", error:err.message});
   }
}

export const deleteUser=async(req,res)=>{
    try{
        const {id}=req.params;
        const user= await User.findByIdAndDelete(id);
        if(!user){
            return res.status(404).json({message:"user not found"});
        }
        return   res.status(200).json({message:"user deleted successfully", user});
    }catch(err){
        res.status(500).json({message:"error in deleting user", error:err.message});
    }
}

