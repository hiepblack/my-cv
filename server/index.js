import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';



import userrouter from "./router/user.js";
import authrouter from './router/auth.js';
import skillRouter from "./router/skill.js";
import testimonialRouter from "./router/testimonial.js";
import projectRouter from "./router/project.js";
import {verifyAdmin} from "./utils/verifyToken.js"
//connect mongodb

const corsOptions = {
  origin:true,
  credentials:true
}
dotenv.config();
const port = process.env.PORT ||8000;
const app = express();

// database connect
mongoose.set('strictQuery',false)
const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        console.log('mongodb connect successful');
    }catch(err) {
        console.log(err)
    }
}

// middleware
app.use(express.json())
app.use(morgan("tiny"));
app.use(cors(corsOptions));
app.use('/api/v1/auth',authrouter)
app.use('/api/v1/user',userrouter)
app.use('/api/v1/skill',skillRouter)
app.use('/api/v1/testimonial',testimonialRouter)
app.use('/api/v1/project',projectRouter)



app.get("/api/v1/admin",verifyAdmin,(req,res)=>{
    res.json({success:true,message:"chao mung admin"})
})

app.listen(port, () => {
    console.log("server run on port",port);
    connect();
});
