import express from 'express'
import { allTask, deleteTask, isCompleted, newTask, okay } from '../controller/task.js';
import { isAuthenticate } from '../middlewares/auth.js';



const router = express.Router();

console.log("working fine");

router.get("/okay",okay)



router.post("/newTask",isAuthenticate,newTask);



router.get("/allTask",isAuthenticate,allTask);




router.route("/:id").put(isAuthenticate,isCompleted).delete(isAuthenticate,deleteTask);

// new task
// update task
// delete task
// all task


export default router;