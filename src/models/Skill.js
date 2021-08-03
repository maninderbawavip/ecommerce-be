const mongoose = require('mongoose')

const skillSchema = new mongoose.Schema({
    // skill attributes
    name: [String]
    // name: { type: String, required: [true, 'skill name is required'] }
})

const Skill = mongoose.model('Skill', skillSchema)

module.exports = Skill;