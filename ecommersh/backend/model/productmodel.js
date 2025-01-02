const mongoose = require("mongoose");


const pro=mongoose.Schema({

    title:{type:String,require:true},
    description :{type:String,require:true},
    image:{type:String,require:true},
    price:{type:String,require:true},
    adminId:{type:mongoose.Schema.Types.ObjectId, ref:"user"},
    category:{type:mongoose.Schema.Types.ObjectId, ref:"categories"},
    subCategory:{type:mongoose.Schema.Types.ObjectId, ref:"subcategories"}

})

const Productmodel=mongoose.model("product",pro)

module.exports=Productmodel