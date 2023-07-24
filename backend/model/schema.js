const mongoose = require('mongoose');
const SignupSchema = mongoose.Schema({                                              
    name:{
        type:String,                                                         
        required:true
    },
    email:{
        type:String,                                                         
        required:true
    },
    ph:{
        type:String,                                                         
        required:true
    },
    password:{
        type:String,                                                          
        required:true
    }
})
const CurriculumSchema = mongoose.Schema({
    name:{
        type:String,                                                         
        required:true        
    },
    area:{
        type:String,                                                         
        required:true            
    },
    refernceLink:{
        type:String,
        required:true
    }
})
const RequirementSchema=mongoose.Schema({
    requirementName:{
        type:String,
        required:true
    },
    trainingArea:{
        type:String,
        required:true,
        enum: ['FSD', 'ML-AI', 'DSA', 'RPA', 'ST', 'CSA'],
    },
    institution:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true,
        enum: ['Retail', 'Academic', 'Corporate', 'Govt'],
    },
    trainingHours:{
        type:Number,
        required:true
    },

})


const usersSignupLoginData = mongoose.model('users',SignupSchema);
const curriculumSchema = mongoose.model('curriculums',CurriculumSchema)
const requirementSchema =mongoose.model('requirements',RequirementSchema)

module.exports = {usersSignupLoginData,curriculumSchema,requirementSchema};