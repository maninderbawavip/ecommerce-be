const mongoose = require('mongoose')

const jobCategorySchema = new mongoose.Schema({
    // jobCategory attributes
    name: { type: String, required: [true, 'jab category name is required'] }
    // name:String
})

const JobCategory = mongoose.model('JobCategory', jobCategorySchema)

module.exports = JobCategory;