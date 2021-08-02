const mongoose = require('mongoose')

const organizationSchema = new mongoose.Schema({
    // organization attributes
    name: {
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
    requiredProfile: [String],
    strength: {
        type: Number,
        required: [true, 'strength must be required']
    },
    foundationYear: {
        type: Number,
        required: [true, 'foundation Year must be required']
    },
    address: {
        streetAddres: {
            type: String,
            required: [true, 'streetAddres must be required']
        },
        zipCode:{
            type: Number,
            required: [true, 'zipCode must be required']            
        },
        city:{
            type: String,
            required: [true, 'city must be required']
        },
        state:{
            type: String,
            required: [true, 'streetAddres must be required']
        },
        country:{
            type: String,
            required: [true, 'country must be required']
        }
    },
})

const Organization = mongoose.model('Organization', organizationSchema)

module.exports = Organization;