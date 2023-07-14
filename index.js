import express from 'express'
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import bodyParser from 'body-parser';
import {config}from 'dotenv';
import cookieParser from 'cookie-parser';
import cros from 'cors'
import { errorFind } from './middlewares/error.js';

export const app = express();

config({
    path:"./database/config.env",
});

 app.use(bodyParser.json());
 app.use(cookieParser());

 app.use(cros({
    origin:[process.env.FRONTEND_URL],
    methode:["GET","POST","PUT","DELETE"]
 }))

 app.use("/api/v1/user",userRouter);
 app.use("/api/v1/task",taskRouter)



app.get("/",(req,res)=>{
    res.status(201).send("hii")
})


app.use(errorFind)

// export default app ;

