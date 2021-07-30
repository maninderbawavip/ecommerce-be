const mongoose = require('mongoose')

const organizationSchema = new mongoose.Schema({
    // organization attributes
})

const Organization = mongoose.model('Organization', organizationSchema)

module.exports = Organization;