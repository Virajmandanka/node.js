const express=require("express")
const Productmodel = require("../model/productmodel")
const { verify } = require("../middlerware/midal")



const Productroute=express.Router()


Productroute.post("/add",verify,async(req,res)=>{
    try {

        let  {title,description,image,price,category,subCategory}=req.body

        let obj= {
            title,
            description,
            image,
            price,
            adminId:req.user.userId,
            category,
            subCategory

        }

        // console.log(product)

        let dat=await Productmodel.create(obj)

        res.status(200).send({messe:"product add successfully"})
        
    } catch (error) {

        res.status(401).send({mes:error.messe})
        
    }
})

Productroute.get("/getall",async(req,res)=>{
    try {

        let data= await Productmodel.find().populate('adminId','email').populate('category').populate('subCategory')

        res.status(200).send({data})
        
    } catch (error) {

        res.status(401).send({meg:error.messege})
        
    }
})

Productroute.delete("/delete/:id", async (req, res) => {
    try {
        const productId = req.params.id;
        const userId = req.body.userId;

      

        await Productmodel.findByIdAndDelete(productId);
        res.status(200).send({ msg: "Blog deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Failed to delete blog" });
    }
});

Productroute.get("/edit/:id",async(req,res)=>{
    try {

        const {id}=req.params

        const data=await Productmodel.findById(id)

        console.log(data)

        res.send({data})
        
    } catch (error) {
         console.log(error)
    }
})

Productroute.put("/edit/:id",async(req,res)=>{

   try {
     const {id}=req.params
 
     const data=await Productmodel.findByIdAndUpdate(id,req.body)
 
     res.send({data})
   } catch (error) {
    
    console.log(error)
   }
})

Productroute.get("/singal/:id", async (req, res) => {
    try {
      const product = await Productmodel.findById(req.params.id)
        .populate("category", "name") 
        .populate("subCategory", "name"); 
  
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.status(200).json({ data: product });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  });

module.exports=Productroute