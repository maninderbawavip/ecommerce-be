const mongoose = require('mongoose')

const jobSeekerSchema = new mongoose.Schema({
    // jobSeeker attributes
    name: {
        type: String,
        required: [true, 'name must be required']
    },
    email: {
        type: String,
        required: [true, 'Email must be required']
    },
    phone: {
        type: Number,
        required: [true, 'Phone number must be required']
    },
    profilePicture: {
        type: String,
        required: true
    },
    // updatePassword:{
    //     type:String,
    // },
    skills: {
        type: [String],
        required: [true, 'skills must be required']
    },
    //TODO:
    higherEducation: {
        isComplited: Boolean,
        Name: String,
        cgpa: Number,
        startingDate:Date,
        endDate:Date,
        stream:String
    },
    interMediat: {
        Name: String,
        cgpa: Number,
        startingDate:Date,
        endDate:Date,
        stream:String
    },
    highSchool: {
        Name: String,
        cgpa: Number,
        startingDate:Date,
        endDate:Date,
        stream:String
    },
    internShip: {
        profile: {
            type: String,
            required: true
        },
        onranizationName: {
            type: String,
            required: true
        },
        duration: {
            type: Number,
            required: true
        },
        location: {
            type: Number,
            required: true
        },
        startingDate: {
            type: Number,
            required: true
        },
        endDate: {
            type: Number,
        },
        isCurrently: {
            type: Boolean,
            default: false
        },
        // aboutInternship:{
        //     type:String,
        //     required:true
        // }
    },
    // trainingAndCourse:[String],
    location: {
        countryName: String,
        //ToDo:reamining part
        // stateName:String,
        // cityName:String,
    },
    socialLinks: {
        linkedIn: {
            type: String,
            required: true
        },
        github: {
            type: String,
            required: true
        },
        hackerRank: String,
    }
})

const JobSeeker = mongoose.model('JobSeeker', jobSeekerSchema)

module.exports = JobSeeker;