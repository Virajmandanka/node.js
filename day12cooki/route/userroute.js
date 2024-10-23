const express=require("express");
const UserModel =require("../model/userModel");


const UserRoute=express.Router();


UserRoute.get("/rgister",(req,res)=>{
    res.render("rgister.ejs")
})

UserRoute.post("/rgister",async(req,res)=>{

    await UserModel.create(req.body)
    res.send({messege:"user rgister successfully"})

})





UserRoute.get("/product",(req,res)=>{
    res.render("product.ejs")
})

module.exports=UserRoute