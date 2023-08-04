const express = require('express');
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended:true}));

//const { usersSignupLoginData,curriculumSchema, requirementSchema, curriculumSavedSchema,chats,chatUsersSchema,admin,chatAdminSchema,fetchMessagesFromCollections}=require("../model/schema");
const { usersSignupLoginData,curriculumSchema, requirementSchema, curriculumSavedSchema,chats,chatUsersSchema,admin,chatAdminSchema,findCollectionWithFacultyNameChatDB,findCollectionWithFacultyNameAdminDB}=require("../model/schema");
//const { usersSignupLoginData,curriculumSchema, requirementSchema, curriculumSavedSchema,createCollection }=require("../model/schema");

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
          const name = user.name;
          res.status(200).json({ message: 'Login successful',api:'/faculty-dashboard',user:name});
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

//---------------------------------------------------------------------------------------------------------

// router.get('/login-faculty/:username',async (req,res)=>{
//   try {
//     console.log("here")
//     let username = req.params.username;
//     await createCollection(username);
//     res.json({status:200})
//   } catch (error) {
//     console.log(error)
//     res.json({status:400})
//   }
// })

router.post('/send-message-faculty', async (req, res) => {
  try {
    console.log(`Req: ${req.body}`)
    const { sender, content, timestamp } = req.body;
    console.log(`Req: ${sender} ${content} ${timestamp}`)
    const collectionName = sender; // The collection name will be the same as the sender's username
    console.log(`collection name: ${collectionName}`)
    const userChatModel = chats.model(collectionName, chatUsersSchema);
    console.log(`Model: ${userChatModel}`)

    // Create a new document with the message data
    const newMessage = new userChatModel({
      sender,
      content,
      timestamp
    });
    console.log(`New message ${newMessage}`)
    // Save the new document to the appropriate collection
    await newMessage.save();

    res.json({ message: 'Message saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save message' });
  }
});

router.post('/send-message-admin', async (req, res) => {
  try {
    console.log(`Req: ${req.body}`)
    const { sender, content, recipient, timestamp } = req.body;
    console.log(`Req: ${sender} ${content} ${recipient} ${timestamp}`)
    const newCollection = recipient; // The collection name will be the same as the sender's username
    console.log(`collection name: ${newCollection}`)
    const adminChatModel = admin.model(newCollection, chatAdminSchema);
    console.log(`Model: ${adminChatModel}`)

    // Create a new document with the message data
    const newMessage = new adminChatModel({
      sender,
      content,
      recipient,
      timestamp
    });
   console.log(`New message ${newMessage}`)
    // Save the new document to the appropriate collection
    await newMessage.save();

    res.json({ message: 'Message saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save message' });
  }
});


// Usage in your route handler
router.get('/messages-all/:facultyName', async (req, res) => {
  const facultyName = req.params.facultyName;
  console.log(facultyName)

  try {
    if(facultyName){
      const messages = await findCollectionWithFacultyNameChatDB(facultyName);
      console.log(`Messages are:`)
      console.log(messages)
      res.json({status:200,messages:messages})
    }
    else{
      res.json({messages:"Facultyname not valid"})
    }
  } catch (error) {
    res.status(500).json({status:400,messages:"error"});
  }
});

router.get('/messages-all-admin/:facultyName', async (req, res) => {
  const facultyName = req.params.facultyName;
  console.log(facultyName)

  try {
    if(facultyName){
      const messages = await findCollectionWithFacultyNameAdminDB(facultyName);
      console.log(`Messages are:`)
      console.log(messages)
      res.json({status:200,messages:messages})
    }
    else{
      res.json({messages:"Facultyname not valid"})
    }
  } catch (error) {
    res.status(500).json({status:400,messages:"error"});
  }
});


//---------------------------------------------------------------------------------------------------------

module.exports = router;