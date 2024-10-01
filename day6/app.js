

const express=require("express")

const app=express();

app.set("view engine","ejs")

app.use(express.urlencoded({extended:true}))

app.use(express.static("public"))



app.get("/",(req,res)=>{
    res.render("index.ejs")
})

app.get("/form",(req,res)=>{

      res.render("form.ejs")

})

app.post("/form",(req,res)=>{
   
    console.log(req.body)
})

app.listen(8080,()=>{
    console.log("server is running on port 8080")
})