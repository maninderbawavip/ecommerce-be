const User = require('../models/JobCategory');
const UserSkill = require('../models/Skill');

// createJob
exports.createJob = async (req, res, next) => {
    try {
        // console.log('AllAData', req.body)
        const data = new User(req.body)
        data.save()

        .then((result) => {
            console.log("wellcome", result)
            res.status(200)
        })
        .catch(err => console.log("err", err))
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            data: err
        })
    }
}
// createSkill
exports.CraeteSKills = async (req, res, next) => {
    try {
        // console.log('skill:-', req.body)
        const data = new UserSkill({ name: req.body })
        data.save()
            .then((result) => {
                console.log("wellcome", result)
                res.status(200)
            })
            .catch(err => console.log("err", err))
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            data: err
        })
    }
}

