const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
    // job attributes

    // maintained a reference of the relation of Job model with its category
    jobCategory: {
        type: mongoose.Schema.ObjectId,
        ref: 'JobCategory'
    },
    jobTitle: {
        type: String,
        required: [true, 'Job Title length must be of 5-70 characters'],
        minLength: 5,
        maxLength: 70
    },
    // jobFunction - add later on
    desiredSkills: {
        type: mongoose.Schema.ObjectId,
        ref: 'Skill'
    },
    // TODO: add musthave and optional skills
    jobLocation: {
        isRemote: Boolean,
        cities: [String]
    },
    experienceRange: {
        minExp: Number,
        maxExp: Number
    },
    isPartTime:Boolean,
    aboutJoining: {    //description about joining:- immidate or later
        joiningType:String,
        joiningDate:Date
    },
    jobSalary: {
        salaryPaidType:{
            type: String,
            required: [true, 'Job Title length must be of 5-70 characters'],
        },
        salaryCurrency: {
            type: String,
            enum: ["INR", "USD", "GBP", "YEN"]
        },
        minSalary: Number,
        maxSalary: Number
    },
    showSalaryToCandidates: {
        type: String,
        // default: true
    },
    equityAvailable: {
        type: String,
        // default: false
    },
    allowForWomen: {
        type: String,
        // default: false
    },
    jobDescription: {
        type: String,
        minLength: 50
    },
    numberOfOpenings: {
        type: Number,
        default: 1
    }

    //TODO: add job preferences 
    //TODO: add job screening questions and skill assessments
})

const Job = mongoose.model('Job', jobSchema)

module.exports = Job;