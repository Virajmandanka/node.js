const jwt = require('jsonwebtoken');

const verify = (req, res, next) => {
    const authHeader = req.headers.authorization;
    
    // Check if the Authorization header exists
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ msg: "Unauthorized: Missing token" });
    }
  
    const token = authHeader.split(" ")[1]; // Correctly extract the token
  
    try {
      const decode = jwt.verify(token, "viraj"); // Replace "viraj" with your secret key
      req.user = decode; // Attach the decoded user data to `req.user`
      next(); // Move to the next middleware
    } catch (err) {
      return res.status(401).json({ msg: "Unauthorized: Invalid token" });
    }
  };

const auth=(req,res,next)=>{
    console.log(req.user)
    if(req.user.userRole=="admin")
    {
        next()
    }else{
        res.send({msg : "unuothorized"})
     }
}
module.exports={verify,auth}