import { User } from "../model/user.js";
import bcrypt from "bcryptjs";
import { sendCookie } from "../utils/feature.js";
import ErrorHandler from "../middlewares/error.js";



export const login = async (req,res,next)=>{
 
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
      return next(new ErrorHandler("invalid id or password",400))
    } 


    let isMatch = await bcrypt.compare(password,user.password);

    if (!isMatch) {
     return next(new ErrorHandler("invalid id or password",400))
    }
    else{
      sendCookie(user,res,`welcome mere dost ${user.name}`,200);
     
    }
}

export const register = async (req, res, next) => {
  const { name, email, password } = req.body;
  let user = await User.findOne({ email });
  if (user) {
    return next(new ErrorHandler("already exits",401))
  } 
    const hasPassword = await bcrypt.hash(password, 10);
    user = await User.create({
      name,
      email,
      password: hasPassword,
    });
    sendCookie(user,res,"registered successfully",200);
};



export const logout = (req,res,next) => {
  res
    .status(201)
    .cookie("token", "", {
      httpOnly: true,
      expire: new Date(Date.now()),
    })
    .json({
      success: true,
      message: ` logout mere dost see you soon `,
    });
};

export const getMy = (req,res,next) => {
  res.status(201).json({
    success:true,
    user:req.user
  })
};

