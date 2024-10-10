const express=require("express")
const app=express()
const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config()
const userRoute=require("./Routes/userRoute")
const uri = process.env.MONGO_URL;

mongoose.connect(uri)
  .then(() => {
    console.log('Connected successfully to MongoDB with Mongoose');
    app.listen(3000,(req,res)=>{
        console.log("server running on 3000")
    })
  })
  
  .catch((err) => {
    console.error('Mongoose connection error:', err);
  });

app.use(express.json())
app.use("/",userRoute)
