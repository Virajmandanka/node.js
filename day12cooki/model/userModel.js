const mongoose=require("mongoose")

const Sh=new mongoose.Schema({
    username:String,
    email:String,
    password:String
})
const UserModel=mongoose.model("user",Sh)

module.exports=UserModel