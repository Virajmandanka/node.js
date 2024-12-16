const express=require("express")
const jwt = require('jsonwebtoken');
const Usermodel = require("../model/usershema");
const verify=require("../middlerware/midal")
const adminseckretkey="node"

const Userroute=express.Router();

Userroute.post("/register",async(req,res)=>{

    const d= {username,email,password,role,secretKey}=req.body

    if(role=="admin")
    {
        if(secretKey!=adminseckretkey)
        {
            return res.send({messege:"Admin Authorization Needed "})
        }
    }

    let obj={

        username,
        email,
        password

    }
    if(role)
    {
        obj.role=role
    }

    const data=new Usermodel(obj)
   await data.save();

   return res.send({meg:"user register successfully"})

})

Userroute.post("/login",async(req,res)=>{
    try {
        const {email,password}=req.body
        const user=await Usermodel.findOne({email:email})
    
        if(!user)
        {
            return res.send({me:"user not register"})
        }
        if(user.password!=password)
        {
            return res.send({mess:"password incorrect"})
        }
    
        let token=jwt.sign({userid:user._id,userRole:user.role},"viraj")
        // res.send({token})
    
        return res.send({token,messege:"login successfully"})
    
    } catch (error) {

        console.log(error)
        
    }
})

module.exports=Userroute