import mongoose from "mongoose";

const user = mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    createAt:{
        type:Date,
        default:Date.now
    }
})

export const User = mongoose.model("user",user)
