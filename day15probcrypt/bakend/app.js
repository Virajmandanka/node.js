const express=require("express");
const connection  = require("./server");
const UserRoute = require("./routes/userroutes");
const bcrypt = require('bcrypt');
var cors = require('cors')

const app=express();
app.use(cors())

app.use(express.json())

app.use("/user",UserRoute)

app.get("/",(req,res)=>{
    res.send("Hello World");
})


app.listen(8080,()=>{
    connection()
    console.log("server is running on port 8080")

})


