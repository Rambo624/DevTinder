const express=require("express")
const router=express.Router()
const userController=require("../Controllers/userController")

router.post("/signup",userController.Signup)
router.get("/getusers",userController.getUsers)



module.exports=router