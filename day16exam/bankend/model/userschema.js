const mongoose=require("mongoose")


const sha=mongoose.Schema({
    
    username:String,
    email:String,
    password:String
})

const Usermodel=mongoose.model("user",sha)

module.exports=Usermodel