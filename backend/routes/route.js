const express = require('express');
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended:true}));

const { usersSignupLoginData,curriculumSchema, requirementSchema, curriculumSavedSchema }=require("../model/schema")

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
          res.status(200).json({ message: 'Login successful',api:'/faculty-dashboard'});
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
      let data = await curriculumSavedSchema.find({});
      res.set('Cache-Control', 'no-store');
      console.log(data)
      res.json({data:data,status:200}).status(201);
    } catch (error) {
      res.status(400).json({ message: "GET request CANNOT be completed" });       
    }
    })

    router.post('/curriculumform', async (req, res) => {
      try {
        const newCurriculum = req.body;
        console.log(newCurriculum)
        const createdCurriculum = await curriculumSavedSchema(newCurriculum);
        createdCurriculum.save();   
        res.status(201).json({ data: createdCurriculum, message: 'Curriculum created successfully' });
      } catch (error) {
        res.status(500).json({ error: 'Failed to create curriculum' });
      }
    });

    router.get('/curriculum/:id',async(req,res)=>{
      try {
        let id = req.params.id;
        let data = await curriculumSavedSchema.findById(id);
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

          const updated = await curriculumSavedSchema.findByIdAndUpdate(id,updateData);  
          console.log(updated)
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
        let data = await curriculumSavedSchema.findByIdAndRemove(id);
        // res.set('Cache-Control', 'no-store');      
        res.json({data:data,status:200}).status(201);
    } catch (error) {
        res.status(400).json({ message: "DELETE request CANNOT be completed" });       
    }
})



router.post('/rform', async (req, res) => {
  try {
    const newRequirement = req.body;
    const createdRequirement = await requirementSchema.create(newRequirement);
    res.status(201).json({ data: createdRequirement, message: 'Requirement created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create requirement' });
  }
});

// API to fetch all requirements
router.get('/rlist', async (req, res) => {
  try {
    const requirements = await requirementSchema.find();
    res.status(200).json(requirements);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch requirements' });
  }
});

router.get('/requirement/:id',async(req,res)=>{
  try {
    let id = req.params.id;
    let data = await requirementSchema.findById(id);
    res.set('Cache-Control', 'no-store');
    console.log(data)
    res.json({data:data,status:200}).status(200);
  } catch (error) {
    res.status(400).json({ message: "GET request CANNOT be completed" });       
  }
  }
) 

// Add a new route for curriculum approval
router.put('/approve/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = { approvedStatus: true }; // Set the approvedStatus to 'Approved'
    const updatedCurriculum = await curriculumSavedSchema.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );
    console.log('Curriculum approved:', updatedCurriculum);
    res.json({ data: updatedCurriculum, message: 'Curriculum approved successfully' });
  } catch (error) {
    console.error('Error while approving curriculum:', error);
    res.status(500).json({ error: 'Failed to approve curriculum' });
  }
});
router.get('/pendingCurriculums', async (req, res) => {
  try {
    const pendingCurriculums = await curriculumSavedSchema.find({ approvedStatus: false });
    res.set('Cache-Control', 'no-store');
    res.status(200).json({ data: pendingCurriculums });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch pending curriculum approvals' });
  }
});








module.exports = router;