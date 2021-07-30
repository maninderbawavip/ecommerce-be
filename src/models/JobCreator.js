const mongoose = require('mongoose')

const jobCreatorSchema = new mongoose.Schema({
    // jobCreator attributes
})

const JobCreator = mongoose.model('JobCreator', jobCreatorSchema)

module.exports = JobCreator;