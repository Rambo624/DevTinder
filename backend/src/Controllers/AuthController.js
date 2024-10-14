
const User=require("../Models/userSchema")
const bcrypt = require('bcrypt');
const jwt=require("jsonwebtoken")
const Signup=async(req,res)=>{
    try {
        const {firstname,email,password,lastname}=req.body
        if(!firstname||!email||!password||!lastname){
            throw new Error("All fields are required")
        }
        const passwordHash=await bcrypt.hash(password, 10)
        
        const user=new User({
            firstname,
            lastname,
            email,
            password:passwordHash
        })
        await user.save()
        res.status(200).json({success:true,message:"User added Successfully"})
   
    } catch (error) {
      res.status(400).json(error.message)
    }
}

const Login=async(req,res)=>{
    try {
      const {email,password}=req.body
      const user= await User.findOne({email:email})
      if(!user){
        throw new Error("User not found");
        }
      const isPasswordValid=  await user.isPasswordValid(password)
      if(!isPasswordValid){
        throw new Error("Invalid Credentials");
          }
          const token=await user.getJWT()
          res.cookie("token",token)
          res.status(200).json({success:true,message:"Login Successful"})

    } catch (error) {
      res.status(400).json(error.message)
    }
}





const Logout=async (req,res)=>{

  try {
    res.clearCookie("token")
    res.status(200).send("Logout Successfull")
  } catch (error) {
    console.log(error)
  }
 
}

module.exports={Signup,Login,Logout}