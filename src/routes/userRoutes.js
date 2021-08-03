const express = require('express')
const AuthController = require('../controllers/authController')
const CreateJobController = require('../controllers/jobCreateConteroller')
const CreateSeekerController = require('../controllers/seekerController')

const router = express.Router();

router.route("/signup").post(AuthController.signUp)
router.route("/login").post(AuthController.login)

router.route("/forgotpassword").post(AuthController.forgotPassword)
router.route("/resetpassword/:token").post(AuthController.resetPassword)

// crateJob
router.route("/craeteJob").post(CreateJobController.createJob)
router.route("/CraeteSKills").post(CreateJobController.CraeteSKills)

//createUserSeekar
router.route("/createUserSeekar").post(CreateSeekerController.CraeteUser)


module.exports = router;