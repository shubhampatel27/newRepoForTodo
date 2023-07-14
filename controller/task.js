import {Task} from '../model/task.js'
import ErrorHandler from "../middlewares/error.js";




export const okay = (req,res,next)=>{
    res.send("");
}


export const newTask = async(req,res,next)=>{
    
    const {title,description} = req.body;

    const task = await Task.create({
        title,
        description,
        user:req.user,
    })
    res.status(201).json({
        success:true,
        message:"task added",
        task,
    })

}

export const allTask = async(req,res,next)=>{

    const all = await Task.find({user:req.user._id})
    res.status(200).json({
        success:true,
        message:"your all task",
        all,
    })
}


export const isCompleted = async (req,res,next)=>{

    const task = await Task.findById(req.params.id);

    if(!task) return next(new ErrorHandler("task in not found",400) );

   task.isCompleted = !task.isCompleted;

   await task.save();
   res.status(200).json({
    success:true,
    message:"updated task",
})


}

export const deleteTask = async (req,res,next)=>{
    const task = await Task.findById(req.params.id);

    if(!task) return next(new ErrorHandler("task in not found",400) );

     task.deleteOne();

   await task.save();
   res.status(200).json({
    success:true,
    message:"deleted task",
})

}