import express from 'express';
import  dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import userRoutes from './routes/user.js';
import mongoose from 'mongoose';
import connectdb from './config/db.js';


 
dotenv.config();
const app =express();

connectdb(); 

app.use(express.json());
app.use(cors());
  
//routes
app.use('/api/v1',userRoutes);

const port=process.env.PORT||5000;
app.get("/",(req,res)=>{
    res.send("hello niraj how are you");
})

app.listen(port,()=>{
    console.log(`server Connected successfullyi on port no ${port}`);
});

