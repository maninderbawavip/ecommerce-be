const mongoose = require('mongoose')

const jobApplicationSchema = new mongoose.Schema({
    // jobApplication attributes
})

const JobApplication = mongoose.model('JobApplication', jobApplicationSchema)

module.exports = JobApplication;