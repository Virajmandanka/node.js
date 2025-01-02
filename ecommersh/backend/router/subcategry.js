const express=require("express")
const Subcategorymodel = require("../model/subcatgory")


const Subcategoryroute=express.Router()


Subcategoryroute.post("/add",async(req,res)=>{
    try {

        let data= await Subcategorymodel.create(req.body)

        res.send({data})
        
    } catch (error) {

        console.log(error)
        
    }
})

Subcategoryroute.get("/allget",async(req,res)=>{
    try {

        let data=await Subcategorymodel.find() 
        res.send({data})
        
    } catch (error) {

        console.log(error)
        
    }
})

module.exports=Subcategoryroute