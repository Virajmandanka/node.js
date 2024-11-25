const express=require("express");
const connection = require("./server");
const Userroute = require("./route/userraute");
const cors = require('cors')

const app=express();

app.use(express.json())
app.use(cors())

app.use("/user",Userroute)


app.listen(8080,()=>{
    connection()
    console.log("server is running on port 8080")
})