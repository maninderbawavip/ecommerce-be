const express = require('express')
const AuthController = require('../controllers/authController')

const router = express.Router();

router.route("/signup").post(AuthController.signUp)
router.route("/login").post(AuthController.login)

router.route("/forgotpassword").post(AuthController.forgotPassword)
router.route("/resetpassword/:token").post(AuthController.resetPassword)

module.exports = router;