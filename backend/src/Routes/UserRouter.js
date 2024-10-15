const express=require("express")
const router=express.Router()
const userController=require("../Controllers/userController")
const {userAuth}=require("../middlewares/userAuth")



router.get("/connections",userAuth,userController.getConnections)
router.get("/requests",userAuth,userController.getRequests)
router.get("/feed",userAuth,userController.getFeed)



module.exports=router