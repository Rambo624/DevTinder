
const User=require("../Models/userSchema")


const Signup=async(req,res)=>{
    try {
        const user=new User(req.body)
        res.status(200).json({success:true,message:"User added Successfully"})
        await user.save()
    } catch (error) {
        console.log(error)
    }
}

const getUsers=async(req,res)=>{
    try {
        const user= await User.find()
        res.status(200).json({data:user})
    } catch (error) {
        console.log(error)
    }
}


module.exports={Signup,getUsers}