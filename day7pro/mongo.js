const mongoose=require("mongoose")


const connection=async=>{
    await=mongoose.connect("mongodb://127.0.0.1:27017/bookmark")
    console.log("connect mongoDB")
 }
 
module.exports=connection;


