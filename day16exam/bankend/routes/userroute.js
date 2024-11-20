const express=require("express")
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");
const Usermodel = require("../model/userschema");

const Userroute=express.Router()


Userroute.get("/register",(req,res)=>{
    res.send("ram")
})

Userroute.post("/register",async(req,res)=>{

    const {username,email,password}=req.body

    const che=await Usermodel.findOne({email})

    if(che)
    {
       return res.send({me:"User already registered"})
    }

    bcrypt.hash(password,5,async(error,hash)=>{
    
         
         console.log(hash)
         
         
          await Usermodel.create({

                username,
                email,
                password:hash
    
            })

           

          return  res.send({messege:"user register successefully"})

    })

})


Userroute.post("/login",async(req,res)=>{

    const {email,password}=req.body

    const user=await Usermodel.findOne({email:email})

    if(!user)
    {
        return res.send({err:"email not register"})
    }

    const data=await bcrypt.compare(password,user.password)

    if(!data)
    {
        return res.send({error:"password is incorrect"})
    }
    
    return res.send({messege:"user login successefully"})
    

})

const otpstore = {};

Userroute.post("/forgatepassword",async(req,res)=>{

    const {email}=req.body

    const user= await Usermodel.findOne({email})

    console.log(user)

    if(user){
        let otp=Math.floor(100000+Math.random()*900000).toString()

      otpstore[email]=otp
        console.log(otpstore[email])
        const transporter=nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:"virajmandanka6@gmail.com",
                pass:"hnoc poue iysd bpuy"
            }


        })

        let main={

            from:"virajmandanka6@gmail.com",
            to:email,
            subject:"OTP for password reset",
            text:`Your OTP is ${otp}`


        }
        transporter.sendMail(main,(error,info)=>{
            if(error)
            {
               return res.send({messeg:"faild genrate OTP"})
            }
             res.send({messege:"otp genrate successefully"})
        })
    }

})


Userroute.post("/resetpassword",async(req,res)=>{

    const {email,otp,newpassword}=req.body

    try {

       
    
        if(otpstore[email]==otp)
        {
            bcrypt.hash(newpassword,5,async(error,hash)=>{
    
                await Usermodel.updateOne({email},{password:hash})
    
                return res.send({mes:"password updated successefully"})
    
            })
        }else{
            return res.send({messege:"invalid otp"})
        }
        
    } catch (error) {

        console.log(error)
        
    }

   

})





module.exports=Userroute