const express = require('express');
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended:true}));

const { usersSignupLoginData,curriculumSchema }=require("../model/schema")

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
    console.log(email,password)
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

  
  router.get('/fetchCurriculums',async(req,res)=>{
    try {
      res.set('Cache-Control', 'no-store');   
      let data = await curriculumSchema.find({});
      res.set('Cache-Control', 'no-store');
      console.log(data)
      res.json({data:data,status:200}).status(201);
    } catch (error) {
      res.status(400).json({ message: "GET request CANNOT be completed" });       
    }
    })

    router.get('/curriculum/:id',async(req,res)=>{
      try {
        let id = req.params.id;
        let data = await curriculumSchema.findById(id);
        res.set('Cache-Control', 'no-store');
        console.log(data)
        res.json({data:data,status:200}).status(200);
      } catch (error) {
        res.status(400).json({ message: "GET request CANNOT be completed" });       
      }
      }
    ) 
    
    router.put("/editdetails/:id",async (req,res)=>{                               
      try{
          let id = req.params.id;
          let updateData = {$set: req.body};
          const updated = await curriculumSchema.findByIdAndUpdate(id,updateData);  
          res.set('Cache-Control', 'no-store');                            
          res.status(200).json("UPDATE Successful");                                                                          
      }catch(error){
          res.status(400).json("Cannot /UPDATE data");                            
          console.log(`Cannot POST data`);                               
      }
  })

  router.delete("/delete-curriculum/:id",async (req,res)=>{
    try {
        let id = req.params.id;
        console.log(id);  
        let data = await curriculumSchema.findByIdAndRemove(id);
        // res.set('Cache-Control', 'no-store');      
        res.json({data:data,status:200}).status(201);
    } catch (error) {
        res.status(400).json({ message: "DELETE request CANNOT be completed" });       
    }
})


module.exports = router;