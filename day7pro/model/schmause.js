const mongoose=require("mongoose")

const Schma= new mongoose.Schema({

    Img:String,
    Name:String,
    Price:String,
    Date:String,
    Author:String

})

const Usermodel=mongoose.model("user",Schma)

module.exports = Usermodel;
