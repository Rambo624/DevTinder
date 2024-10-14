const User=require("../Models/userSchema")
const { validateEditProfile, validateChangePassword } = require("../utils/Validator")
const bcrypt=require("bcrypt")


const getUser=async(req,res)=>{
    try {
        const user= req.user
        res.status(200).json({data:user})
    } catch (error) {
        console.log(error)
    }
}

const EditUser=async(req,res)=>{

try {
    if(!validateEditProfile(req)){
        throw new Error("Invalid Edit Request")
    }
    const user=req.user
  Object.keys(req.body).forEach((key)=>user[key]=req.body[key])
  await user.save()
  res.status(200).json(`${user.firstname},Your profile was updated successfully`)
} catch (error) {
  res.status(400).send(`Error:${error.message}`)
}
}

const ChangePassword=async(req,res)=>{
    const user=req.user
    const {password}=req.body
    
 const valid= await user.isPasswordValid(password)
 if(valid){
    return res.status(400).json("New password shouldnt be same as Old Password")
 }

 const passwordHash=await bcrypt.hash(password, 10)

 user.password=passwordHash

 await user.save()
 res.status(200).json("Password Changed Successfully")

}


module.exports= {getUser,EditUser,ChangePassword}