import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connectDB from './config/db.js';
connectDB();
let app=express();

app.get('/',(req,res)=>{
    res.send('Hello World!')
});

export default app;