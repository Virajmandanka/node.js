const mongoose=require("mongoose")

const Sch=mongoose.Schema({
    username:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true},
    role:{type:String,require:true,default:"user",enum:["user","admin"]}
})

const Usermodel=mongoose.model("user",Sch)

module.exports=Usermodel