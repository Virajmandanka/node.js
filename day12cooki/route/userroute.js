const express=require("express");
const UserModel =require("../model/userModel");


const UserRoute=express.Router();


UserRoute.get("/rgister",(req,res)=>{
    res.render("rgister.ejs")
})

UserRoute.post("/rgister",async(req,res)=>{

    await UserModel.create(req.body)
    // res.send({messege:"user rgister successfully"})
    res.redirect("login")

})

UserRoute.get("/login",(req,res)=>{
    console.log(req.cookies)
    res.render("login.ejs")
 })

UserRoute.post("/login",async(req,res)=>{

  let data= await UserModel.findOne({email:req.body.email})
  console.log(data)

  if(!data)
  {
    res.send({messege:"rgister fist"})
    res.redirect("/user/rgister")
  }
  if(data && data.password != req.body.password)
  {
    res.send({messege:"password wrong"})
  }
  if(data && data.password == req.body.password)
  {
    res.cookie("username",data.username).send({messege:"user logn successfull"})
  }
})







UserRoute.get("/product",(req,res)=>{
    res.render("product.ejs")
})

module.exports=UserRoute