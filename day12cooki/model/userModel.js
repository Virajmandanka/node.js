const mongoose=require("mongoose")

const Sh=new mongoose.Schema({
    username:String,
    email:String,
    password:String
})
const UserModel=mongoose.model("users",Sh)

module.exports=UserModel