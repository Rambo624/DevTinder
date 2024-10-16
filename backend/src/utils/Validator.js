const validator=require("validator")
const User= require("../Models/userSchema")

const validateEditProfile=  (req)=>{
try {
    const allowedUpdates=["firstname","lastname","about","age","gender","skills","photo"]

   const isEditAllowed= Object.keys(req.body).every(field=>allowedUpdates.includes(field))
 
   return isEditAllowed
} catch (error) {
    console.log(error)
}
}





module.exports={validateEditProfile}
