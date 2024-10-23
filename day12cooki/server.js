const mongoose=require("mongoose")


const  connection=async=>{

  try{

    await=mongoose.connect(process.env.MONGOURL)
  console.log("database connect")

  }
  catch(error)
  {
    console.log(error)
  }

  
} 
module.exports=connection
