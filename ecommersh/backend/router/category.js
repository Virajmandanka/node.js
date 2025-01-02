const express=require("express")
const Categorymodel = require("../model/catogrory")

const Categoryroute=express.Router()


Categoryroute.post("/add",async(req,res)=>{
    try {

        let data= await Categorymodel.create(req.body)

        res.send({data})
        
    } catch (error) {

        console.log(error)
        
    }
})

Categoryroute.get("/getall",async(req,res)=>{
    try {

        let data= await Categorymodel.find()

        res.send({data})
        
    } catch (error) {

        console.log(error)
        
    }
})

module.exports=Categoryroute

