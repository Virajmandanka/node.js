

const mongoose = require('mongoose');

const Schm= new mongoose.Schema({
        
    Email:String,
    password:String
})
const Usemodel=mongoose.model("user",Schm)

module.exports=Usemodel


