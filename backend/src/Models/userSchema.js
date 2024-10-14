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
photo:{
    type:String,
    default:"https://static.vecteezy.com/system/resources/previews/036/594/092/original/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg"
},
age:{
    type:Number,
  
},
gender:{
    type:String,
    enum:["Male","Female"],
    
},
about:{
    type:String,

},
skills:{
    type:[String],
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