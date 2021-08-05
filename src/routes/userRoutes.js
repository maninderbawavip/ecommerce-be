const express = require('express')
const AuthController = require('../controllers/authController')
const CreateJobController = require('../controllers/jobCreateConteroller')
const CreateSeekerController = require('../controllers/seekerController')

const router = express.Router();

//login signUp
router.route("/signup").post(AuthController.signUp)
router.route("/login").post(AuthController.login)

//reset password
router.route("/forgotpassword").post(AuthController.forgotPassword)
router.route("/resetpassword/:token").post(AuthController.resetPassword)

// crateJob
router.route("/craeteJob").post(CreateJobController.createJob)
router.route("/CraeteJobSKills").post(CreateJobController.CraeteSKills)
router.route("/CraeteJobCategry").post(CreateJobController.createJobCategry)
router.route("/listJobCategry").get(CreateJobController.listJobCategry)
router.route("/listJobSkillCategry").get(CreateJobController.listJobSkillCategry)
router.route("/deleteAllJobCategry").delete(CreateJobController.deleteAllJobCategry)
router.route("/deleteOneJobCategry/:id").delete(CreateJobController.deleteOneJobCategry)
router.route("/deleteAllJobSkiilsCategry").delete(CreateJobController.deleteAllJobSkiilsCategry)
router.route("/deleteOneJobSkiilsCategry/:id").delete(CreateJobController.deleteOneJobSkiilsCategry)

//createUserSeekar
router.route("/createUserSeekar").post(CreateSeekerController.CraeteUser)


module.exports = router;