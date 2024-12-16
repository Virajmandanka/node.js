const express =require("express")
const connection = require("./server")
const Userroute = require("./router/userroute")
const cors = require('cors')



const app=express()
 
app.use(express.json())
app.use(cors())
app.use("/user",Userroute)


//  app.get("/",(req,res)=>{
//     res.send("hello")
//  })
app.listen(8080,()=>{
    connection()
    console.log("server runing port 8080")
})