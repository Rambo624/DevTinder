const mongoose=require("mongoose")


const ConnectionSchema= new mongoose.Schema({
    from:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    To:{
        type:mongoose.Schema.Types.ObjectId ,
        ref:"user",
        required:true
    },
    status:{
        type:String,
        enum:{
            values:["Interested","accepted","rejected","Ignored"],
            message:`{VALUE} is incorrect status type`
        },
        
    }
},{
    timestamps:true
})

ConnectionSchema.pre("save",function(next){
const connectionRequest=this
if(connectionRequest.from.equals(connectionRequest.To)){
  throw new Error("User cannot sent request to themselves")
}
next()
})
module.exports=mongoose.model("ConnectionRequest",ConnectionSchema)