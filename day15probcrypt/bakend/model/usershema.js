const mongoose=require("mongoose")


const Shema=mongoose.Schema({
    username:String,    
    email:String,
    password:String
})
const Usermodel=mongoose.model("user",Shema)

module.exports=Usermodel