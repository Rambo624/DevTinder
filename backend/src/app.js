const express=require("express")
const app=express()

app.use((req,res)=>{
    res.send("hello")
})
app.listen(3000,(req,res)=>{
    console.log("server running on 3000")
})