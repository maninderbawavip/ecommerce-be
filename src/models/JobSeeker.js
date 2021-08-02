const mongoose = require('mongoose')

const jobSeekerSchema = new mongoose.Schema({
    // jobSeeker attributes
    name:{
        type: String,
        required: [true, 'name must be required']
    },
    email:{
        type: String,
        required: [true, 'Email must be required']
    },
    pnone:{
        type: Number,
        required: [true, 'Phone number must be required']
    },
    profilePicture:{
        type:Image,
        required:true
    },
    updatePassword:{
        type:String,
    },
    skills:{
        type:[String],
        required: [true, 'skills must be required']
    },
    education:{
        //TODO:
    },
    internShip:{
        profile:{
            type:String,
            required:true
        },
        onranizationName:{
            type:String,
            required:true            
        },
        duration:{
            type:Number,
            required:true            
        },
        startingDate:{
            type:Number,
            required:true 
        },
        endDate:{
            type:Number,
            required:true 
        },
        aboutInternship:{
            type:String,
            required:true
        }
    },
    trainingAndCourse:[String],
    location:String,
    socialLinks:{
        linkedIn:{
            type:String,
            required:true
        },
        github:{
            type:String,
            required:true
        },
        hackerRank:String,
    }
})

const JobSeeker = mongoose.model('JobSeeker', jobSeekerSchema)

module.exports = JobSeeker;