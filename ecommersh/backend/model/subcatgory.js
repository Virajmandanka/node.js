const mongoose=require("mongoose")

const sub=mongoose.Schema({
    name:String,
})

const Subcategorymodel=mongoose.model("subcategories",sub)

module.exports=Subcategorymodel