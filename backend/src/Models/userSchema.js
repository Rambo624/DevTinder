const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({

firstname:{
    type:String,
    required:true
},
lastname:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true,
    unique:true
},
password:{
    type:String,
    required:true,
    minlength: 8
},
age:{
    type:Number,
    required:true,
},
gender:{
    type:String,
    enum:["Male","Female"],
    required:true,
}




})

module.exports=mongoose.model("user",userSchema)