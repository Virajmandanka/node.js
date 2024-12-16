const mongoose=require("mongoose")

const cat=mongoose.Schema({
    name:String,
})

const Categorymodel=mongoose.model("categories",cat)

module.exports=Categorymodel