const mongoose = require("mongoose");


const pro=mongoose.Schema({

    title:{type:String,require:true},
    description :{type:String,require:true},
    image:{type:String,require:true},
    price:{type:String,require:true},
    adminId:{type:String},
    category:{type:String},
    subCategory:{type:String}

})

const Productmodel=mongoose.model("product",pro)

module.exports=Productmodel