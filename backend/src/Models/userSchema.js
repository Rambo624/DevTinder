const mongoose=require("mongoose")
var validator = require('validator');
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const userSchema=new mongoose.Schema({

firstname:{
    type:String,
    required:true,
    trim:true,
    maxlength:50
},
lastname:{
    type:String,
    maxlength:50
    
},
email:{
    type:String,
    required:true,
    lowercase:true,
    unique:true,
    trim:true,
    validate(value){
        if(!validator.isEmail(value)){
            throw new Error(`Invalid Email address ${value}`);
            
        }
    }
},
password:{
    type:String,
    required:true,
    minlength: 8
},
age:{
    type:Number,
  
},
gender:{
    type:String,
    enum:["Male","Female"],
    
}




},
{
    timestamps:true
})

userSchema.methods.getJWT=async function (){
    const user=this
 
    const token=await jwt.sign({ id:user._id}, process.env.JWT_KEY)
    return token
}

userSchema.methods.isPasswordValid=async function (passwordInput){
    const user=this
    const isPasswordValid=  bcrypt.compare(passwordInput, user.password)
    return isPasswordValid
}

module.exports=mongoose.model("user",userSchema)