const express=require("express")
const jwt=require("jsonwebtoken")
const Blogsmodel = require("../model/blogsshema")
const auth = require("../midelware/auth")

const UserBlogss=express.Router()


UserBlogss.get("/",auth,async(req,res)=>{
    let Blogs = await Blogsmodel.find().populate('userID','username email')
   res.send({blogs : Blogs})
})

UserBlogss.post("/add",auth,async(req,res)=>{
    let {title,image,description,userId} = req.body
    console.log(userId)
    let obj = {
        title ,
        image ,
        description,
        userID : userId
    }
    let data = await Blogsmodel.create(obj)
    res.status(200).send({msg : "Blog added Succesfully", blog : data})
})
// UserBlogss.get("/:id",auth,async(req,res)=>{
//     try {
//         let data = await Blogsmodel.findById(req.params.id)
//         res.status(200).json(data)
//     } catch (error) {
//         res.status(401).json(error)
//     }
// })


UserBlogss.get("/getmine", auth, async (req, res) => {
    
    try {

        let blogs = await Blogsmodel.find({ userID: req.body.userId }).populate('userID', 'username email');
        console.log(blogs);
        
        res.send({ blogs : blogs});
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Failed to retrieve blogs' });
    }
});


UserBlogss.delete("/delete/:id", auth, async (req, res) => {
    try {
        const blogId = req.params.id;
        const userId = req.body.userId; // Extract from auth middleware

        // const blog = await Blogsmodel.findById(blogId);

        // if (!blog) {
        //     return res.status(404).send({ error: "Blog not found" });
        // }

        // // Ensure the user owns the blog
        // if (blog.userID.toString() !== userId) {
        //     return res.status(403).send({ error: "Unauthorized to delete this blog" });
        // }

        await Blogsmodel.findByIdAndDelete(blogId);
        res.status(200).send({ msg: "Blog deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Failed to delete blog" });
    }
});




module.exports=UserBlogss