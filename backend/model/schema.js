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
const CurriculumSavedSchema = mongoose.Schema({
    s_no:{
        type:String,                                                         
        required:true        
    },
    name:{
        type:String,                                                         
        required:true            
    },
    description:{
        type:String,
        required:true
    },
    approvedStatus:{
        type:Boolean
    },
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
const CurriculumSchema = mongoose.Schema({
    s_no:{
        type:String,                                                         
        required:true        
    },
    name:{
        type:String,                                                         
        required:true            
    },
    description:{
        type:String,
        required:true
    },
    approvedStatus:{
        type:Boolean
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
const curriculumSavedSchema = mongoose.model('curriculum-save',CurriculumSavedSchema) 
const curriculumSchema = mongoose.model('curriculums',CurriculumSchema) //final curriculum model
const requirementSchema =mongoose.model('requirements',RequirementSchema)

module.exports = {usersSignupLoginData,curriculumSchema,requirementSchema,curriculumSavedSchema};