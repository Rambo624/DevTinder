const User=require("../Models/userSchema")
const ConnectionRequestModel=require("../Models/ConnectionSchema")


const ConnectionRequest=async(req,res)=>{
try {
    
    const user=req.user
    const from=user._id
    const To=req.params.userid
    const status=req.params.status
    const allowedStatus=["Interested","Ignored"]
    if(!allowedStatus.includes(status)){
        return res.status(404).json({message:"Invalid Status" + status})   
    }

    const toUserExist= await User.findById(To)
    if(!toUserExist){
       return res.status(404).json({message:"User Not Found"}) 
    }
const connectionExist= await ConnectionRequestModel.findOne({$or:[{from:from,To:To},{from:To,To:from}]})
if(connectionExist){
    return res.status(400).json({message:"Connection already exists"}) 
}


    const connectionRequest= new ConnectionRequestModel({
        from,
        To,
        status

    })

    await connectionRequest.save()
    res.status(200).json({message:"Request sent successfully"})
    
} catch (error) {
    res.status(400).json({message:error.message})
}
}

const reviewRequest=async (req,res)=>{
    try {
        const user=req.user
        const {status,requestid}=req.params
        const allowedStatus=["accepted","rejected"]
        if(!allowedStatus.includes(status)){
            return res.status(404).json({message:"Invalid Status"  + status})   
        }

        const connectionRequest= await ConnectionRequestModel.findOne({To:user._id,_id:requestid,status:"Interested"})
       
        if(!connectionRequest){
            return res.status(404).json({message:"No requests found"})   
        }
        connectionRequest.status=status
        await connectionRequest.save()
        res.status(200).json({message:`Request ${status}`})
    } catch (error) {
        return res.status(400).json({message:error.message})  
    }
}



module.exports={ConnectionRequest,reviewRequest}