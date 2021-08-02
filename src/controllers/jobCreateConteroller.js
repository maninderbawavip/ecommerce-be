const User = require('../models/JobCategory')

exports.createJob = async (req, res, next) => {

    try {
        const AllAData = await User.create({
            jobTitle: req.body.jobTitle,
            jobLocation: {
                isRemote: req.body.data.isRemote,
                jobLocation: req.body.selectedCities,
            },
            experienceRange: {
                minExp: req.body.data.minExp,
                maxExp: req.body.data.maxExp,
            },
            isPartTime: req.body.isPartTime,

            aboutJoining: {
                joiningType: req.body.data.joiningType,
                joiningDate: req.body.data.joiningDate,
            },

            jobSalary: {
                salaryPaidType: req.body.salaryPaidType,
                salaryCurrency: req.body.data.salaryCurrency,
                minSalary: req.body.data.minSalary,
                maxSalary: req.body.data.maxSalary,
            },
            showSalaryToCandidates: req.body.data.showSalaryToCandidates,

            equityAvailable: req.body.data.equityAvailable,
            allowForWomen: req.body.data.allowForWomen,
            jobDescription: req.body.data.jobDescription,
            numberOfOpenings: req.body.data.numberOfOpenings,
        })

        console.log('AllAData', AllAData)

        res.status(201).json({
            status: 'success',
            token,
            data: newUser
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            data: err
        })
    }

}
