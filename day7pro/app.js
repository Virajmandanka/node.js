
const express=require("express");
const Usermodel = require("./model/schmause");
const connection=require("./mongo")

const app=express();

app.set("view engine","ejs")

app.use(express.urlencoded({extended:true}))

app.use(express.static("public"))



app.get("/",(req,res)=>{

    res.render("form.ejs")

})
app.get("/form",(req,res)=>{

    res.render("form.ejs")
})



app.post("/form", async (req, res) => {
    await Usermodel.create(req.body);
    console.log(req.body);
    res.redirect("datamap");
  });

  /* all data show*/
app.get("/datamap", async (req, res) => {

    const data = await Usermodel.find();
  
    res.render("datamap.ejs", { data });
  
  });

  app.get("/delete/:id", async (req, res) => {
    let { id } = req.params;
    await Usermodel.findByIdAndDelete(id);
    res.redirect("/datamap");
  });



  app.get("/edit/:id", async (req, res) => {
    const { id } = req.params;
    const userData = await Usermodel.findById(id);
    res.render("edit.ejs", { user: userData });
  });
  
  //  updating the user
  
  app.post("/edit/:id", async (req, res) => {
    
    const { id } = req.params;
    await Usermodel.findByIdAndUpdate(id, req.body);
    res.redirect("/datamap");
  
  });
  



app.listen(8080,()=>{

    connection();

    console.log("server is running on port 8080")
})



