const express=require("express")
const router=express.Router()
const userController=require("../Controllers/userController")
const {userAuth}=require("../middlewares/userAuth")

router.post("/signup",userController.Signup)
router.get("/profile",userAuth,userController.getUser)
router.post("/login",userController.Login)



module.exports=router