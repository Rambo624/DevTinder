const express=require("express")
const router=express.Router()
const ProfileController=require("../Controllers/ProfileController")
const {userAuth}=require("../middlewares/userAuth")
const {upload}= require("../middlewares/multer")


router.get("/view",userAuth,ProfileController.getUser)
router.patch("/edit",userAuth,upload.single("photo"),ProfileController.EditUser)
router.patch("/password",userAuth,ProfileController.ChangePassword)



module.exports=router