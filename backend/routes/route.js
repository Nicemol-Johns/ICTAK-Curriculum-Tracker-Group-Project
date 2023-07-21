const express = require('express');
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended:true}));

const usersSignupLoginData=require("../model/schema")

router.post("/user-signup",async (req,res)=>{                              
    try{
        //console.log(req.headers.authorization)
        console.log(req.body);
        const user = req.body;                                               
        const newdata = await usersSignupLoginData(user);                               
        newdata.save();                                
        res.status(200).json({message:"POST Successful",api:'/signupstatus'});                                                                             
    }catch(error){
        res.status(400).json("Cannot /POST data");                            
        console.log(`Cannot POST data`);                                      
    }
})

router.post('/login', (req, res) => {
    const { email, password } = req.body;

    if(email==="admin@org.in" && password==="admin123"){
      res.status(200).json({ message: 'Admin Login successful',api:'/dashboard'});
    }else{
      usersSignupLoginData.findOne({ email, password })
      .then(user => {
        if (user) {
          res.status(200).json({ message: 'Login successful',api:''});
        } else {
          res.status(401).json({ error: 'Invalid username or password' });
        }
      })
      .catch(error => {
        res.status(500).json({ error: error.message });
      });

    }
  

  });


module.exports = router;