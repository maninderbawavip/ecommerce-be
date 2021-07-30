const mongoose = require('mongoose')

const jobSeekerSchema = new mongoose.Schema({
    // jobSeeker attributes
})

const JobSeeker = mongoose.model('JobSeeker', jobSeekerSchema)

module.exports = JobSeeker;