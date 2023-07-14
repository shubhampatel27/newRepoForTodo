import mongoose from "mongoose";



export const connectionDB = async ()=>{
    try {
        
   await mongoose.connect("mongodb+srv://newTodo:newTodo@cluster0.lkik6xn.mongodb.net/?retryWrites=true&w=majority")
   console.log("hiii connected to the db")
    } catch (error) {
        console.log(error);
    }
}

// export default connectionDB