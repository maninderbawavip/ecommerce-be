const craeteSkillModel = require('../models/Skill');
const craeteJobCategryModel = require('../models/JobCategory');
const craeteJobModel = require('../models/Job');


//creajob categry
exports.createJobCategry = async (req, res, next) => {
    try {
        const data = new craeteJobCategryModel(req.body)
        data.save()

        .then((result) => {
            console.log("wellcome job categry", result)
            res.status(200).json({
                status: 'succes',
                data: result
            })      
        })
        .catch(err => console.log("err", err))
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            data: err
        })
    }
}

// createJob
exports.createJob = async (req, res, next) => {
    try {
        const data = new craeteJobModel(req.body)
        data.save()

        .then((result) => {
            console.log("wellcome createJob", result)
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
        const data = new craeteSkillModel({ name: req.body })
        data.save()
            .then((result) => {
                console.log("wellcome skill", result)
                res.status(200).json({
                    status: 'succes',
                    data: result
                })      
            })
            .catch(err => console.log("err", err))
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            data: err
        })
    }
}

//list of all job
exports.listJobCategry = async (req, res, next) => {
    try {
        const data = craeteJobModel.find()
            .then((result) => {
                res.status(201).json({
                    status: 'success',
                    data: result
                })
            })
            .catch(err => console.log("err", err))
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            data: err
        })
    }
}

// delete one job
exports.deleteOneJobCategry = async (req, res, next) => {
    try {
        craeteJobModel.deleteOne({ _id: req.params.id }).then((result) => {
            console.log("data deleted")
            res.status(200).json(result)
        }).catch(err => console.log("err"))
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            data: err
        })
    }
}

// delete all job
exports.deleteAllJobCategry = async (req, res, next) => {
    try {
        craeteJobModel.deleteMany()
        .then((result) => {
            console.log("data deleted")
            res.status(200).json(result)
        }).catch(err => console.log("err"))
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            data: err
        })
    }
}

// delete one skills
exports.deleteOneJobSkiilsCategry = async (req, res, next) => {
    try {
        craeteSkillModel.deleteOne({ _id: req.params.id }).then((result) => {
            console.log("data deleted")
            res.status(200).json(result)
        }).catch(err => console.log("err"))
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            data: err
        })
    }
}

// delete all skills
exports.deleteAllJobSkiilsCategry = async (req, res, next) => {
    try {
        craeteSkillModel.deleteMany()
        .then((result) => {
            console.log("data deleted")
            res.status(200).json(result)
        }).catch(err => console.log("err"))
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            data: err
        })
    }
}

// find all skills
exports.listJobSkillCategry = async (req, res, next) => {
    try {
        const data = craeteSkillModel.find()
            .then((result) => {
                res.status(201).json({
                    status: 'success',
                    data: result
                })
            })
            .catch(err => console.log("err", err))
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            data: err
        })
    }
}