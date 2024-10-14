const express=require("express")
const router=express.Router()
const ProfileController=require("../Controllers/ProfileController")
const {userAuth}=require("../middlewares/userAuth")



router.get("/view",userAuth,ProfileController.getUser)
router.patch("/edit",userAuth,ProfileController.EditUser)
router.patch("/password",userAuth,ProfileController.ChangePassword)



module.exports=router