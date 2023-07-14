import express from 'express'
import { getMy, login, logout, register } from '../controller/user.js';
import { isAuthenticate } from '../middlewares/auth.js';


const router = express.Router();

router.post("/login",login)

router.post("/new",register)

router.get("/logout", isAuthenticate, logout)


router.get("/my", isAuthenticate, getMy)


router.get("/testing",(req,res,next)=>{
    res.send("hii there testing")
})

export default router;


 


