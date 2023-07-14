import mongoose from "mongoose";



export const connectionDB = async ()=>{
    try {
        
   await mongoose.connect(process.env.MONGO_URL)
   console.log("hiii connected to the db")
    } catch (error) {
        console.log(error);
    }
}

// export default connectionDB