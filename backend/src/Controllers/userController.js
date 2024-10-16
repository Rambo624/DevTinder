const User=require("../Models/userSchema")
const ConnectionRequestModel=require("../Models/ConnectionSchema")
const { equals } = require("validator")


const getRequests=async(req,res)=>{
try {
    const user=req.user
    const connectionRequest= await ConnectionRequestModel.find({To:user._id,status:"Interested"}).populate("from","-password -email").populate("_id")
   
    if(!connectionRequest.length){
        return res.status(404).json({message:"No Requests found"})
    }
  const data=  connectionRequest.map((key)=>({
from:key.from,
id:key._id
  }
  ))
    res.status(200).json({data})
} catch (error) {
    res.status(500).json({message:`Error:${error.message}`})
}
}

const getConnections=async(req,res)=>{
    try {
    const user=req.user
   const connectionRequest=await ConnectionRequestModel.find({$or:[{To:user._id,status:"accepted"},{from:user._id,status:"accepted"}]}).populate("from","-password -email").populate("To","-password -email")
   //console.log(connectionRequest)
    if(!connectionRequest.length){
        return res.status(404).json({message:"No Connections found"})
    }
 const data= connectionRequest.map((connection)=>{
    if(connection.from.equals(user._id)){
        return {To:connection.To,
            id:connection._id
        }
    }else{
        return {from:connection.from,
            id:connection._id
        }
    }
 })
  
    res.status(200).json({data})
    } catch (error) {
        res.status(500).json({message:`Error:${error.message}`}) 
    }
}

const getFeed=async(req,res)=>{
try {
    const user=req.user
    let page=req.query.page || 1
    let limit=req.query.limit || 10
    let skip=(page-1)*limit
    const connectionRequest=await ConnectionRequestModel.find({$or:[{from:user._id},{To:user._id}]})
    if(connectionRequest.length){
        const hideusersfeed=new Set()
connectionRequest.forEach((key)=>{
    hideusersfeed.add(key.from.toString())
    hideusersfeed.add(key.To.toString())
})  
const users= await User.find({$and:[{_id:{$nin:Array.from(hideusersfeed)}},{_id:{$ne:user._id}}]}).select("firstname lastname photo age gender skills about").skip(skip).limit(limit)

if(!users.length){
    return res.status(404).json({message:"No Users found"})
}
  return res.status(200).json({data:users})
    }else{
        const users= await User.find({_id:{$ne:user._id}}).select("firstname lastname photo age gender skills about").skip(skip).limit(limit)
        if(!users.length){
            return res.status(404).json({message:"No Users found"})
        }
          return res.status(200).json({data:users})
    }


} catch (error) {
    res.status(500).json({message:`Error:${error.message}`}) 
}
}


module.exports={getRequests,getConnections,getFeed}