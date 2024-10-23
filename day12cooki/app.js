const express=require("express");
const connection= require("./server");
const UserRoute = require("./route/userroute");
const cookie=require("cookie-parser")
require('dotenv').config()


const app=express();
app.use(cookie())
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}))

app.use("/user",UserRoute)


app.listen(process.env.PORT,()=>{

    connection();

    console.log("server runing")
})