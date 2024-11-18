const express=require("express")
const bcrypt = require('bcrypt');
const Usermodel = require("../model/usershema");


const UserRoute=express.Router();


UserRoute.get("/register",(req,res)=>{

        res.send("Hello from User Route");
})


UserRoute.post("/register",(req,res)=>{

    const { username, email, password}=req.body

    bcrypt.hash(password,6,async(error,hash)=>{
        console.log(hash)

       await Usermodel.create({
        
        username,
        email,
        password:hash


       })
    })
    


})


UserRoute.post("/login",async(req,res)=>{

    const {email,password}=req.body

    const data=await Usermodel.findOne({email:email})

    if(!data)
    {
        return res.send({err:"not register email"})
    }

    const pass =await bcrypt.compare(password,data.password)

    if(!pass)
    {
        return res.send({error:"incorrect passowrd"})
    }

   return res.send({messege:"user login successfully"})

})


UserRoute.post("/chengepassword",async(req,res)=>{

    const {email,oldpassword,newpassword}=req.body


    const user=await Usermodel.findOne({email:email})

    if(!user)
    {
        return res.send({err:"email not register"})
    }

    const pa= await bcrypt.compare(oldpassword,user.password)

    if(!pa)
    {
        return res.send({error:"incorrect passowrd"})
    }

    const newhashpassword = await bcrypt.hash(newpassword,5)

    user.password=newhashpassword

    await user.save();

    return res.send({messege:"Password updated successfully"})

})




module.exports=UserRoute;