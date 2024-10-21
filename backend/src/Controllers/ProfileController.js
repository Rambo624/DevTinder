const User=require("../Models/userSchema")
const { validateEditProfile, validateChangePassword } = require("../utils/Validator")
const bcrypt=require("bcrypt")
const {Cloudinary}=require("../utils/cloudinary")

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
    let uploadUrl;
    if(req.file){
        const uploadResult = await Cloudinary.uploader.upload(req.file.path)
        
        .catch((error) => {
            console.log(error,"===============");
        });



    uploadUrl = uploadResult.url
    
    }
    const user=req.user
  Object.keys(req.body).forEach((key)=>user[key]=req.body[key])
 if(req.file){
    user.photo=uploadUrl
 }
 const userWithoutSensitiveData = user.toObject(); // Convert to plain JS object
 delete userWithoutSensitiveData.password; // Remove password
 delete userWithoutSensitiveData.email; // Remove email
  await user.save()
  
  res.status(200).json({message:`${user.firstname},Your profile was updated successfully`,data:userWithoutSensitiveData})
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