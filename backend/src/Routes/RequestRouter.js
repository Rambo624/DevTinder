const express=require("express")
const router=express.Router()
const ConnectionController=require("../Controllers/ConnectionController")
const {userAuth}=require("../middlewares/userAuth")



router.post("/send/:status/:userid",userAuth,ConnectionController.ConnectionRequest)

router.post("/send/review/:status/:requestid",userAuth,ConnectionController.reviewRequest)









module.exports=router