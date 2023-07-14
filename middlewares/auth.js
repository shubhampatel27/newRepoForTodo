import jwt from "jsonwebtoken"
import { User } from "../model/user.js"



export const  isAuthenticate = async(req,res,next)=>{

   let { token } = req.cookies;
   
    if(!token){
       return res.status(400).json({
            success:false,
            message:"please login"
        })
    }

    let decoded = jwt.verify(token,process.env.JWT_SECRET)

    req.user = await User.findById(decoded);

    next();

}