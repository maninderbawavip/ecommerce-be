const UserJobSeeker = require('../models/JobSeeker')


//createUser
exports.CraeteUser = async (req, res, next) => {
    try {
        console.log('skill:-', req.body)
        const data = new UserJobSeeker(req.body)
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