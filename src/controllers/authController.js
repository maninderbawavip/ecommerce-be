const User = require("../models/User")
const jwt = require('jsonwebtoken');
const crypto = require('crypto')

const bcrypt = require('bcryptjs');
const AppError = require("../utils/AppError");
const CatchError = require("../utils/CatchError");

const signToken = (data) => {
    return jwt.sign(data, process.env.MY_SECRET, {
        expiresIn: '30d'
    })
}

exports.protect = async (req, res, next) => {

    // 1.) try to extract the token from request
    let token = null;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1]
    }

    if (!token) {

        const err = new Error("unauthenticated, no token found")
        err.status = 'fail';
        err.statusCode = 402;
        return next(err)

        // return res.status(401).json({
        //     status: "fail",
        //     message: "unauthenticated, no token found"
        // })
    }

    // 2.) if token is there verify 
    try {
        const data = jwt.verify(token, process.env.MY_SECRET)
        // req.user = data;

        req.user = await User.findById(data.id)

        next()
    } catch (err) {
        return next(new AppError("token invalid, please login again", 401))
    }
}

exports.retrictAccess = (...allowedRoles) => {
    // role = admin
    // req.user.role -> what is the role of the loggedin user
    // roles array of all arguments passed
    return (req, res, next) => {
        console.log(req.user)
        if(allowedRoles.includes(req.user.role)) {
            next()
        } else {
            return next(new AppError("User does not have permissions", 403))
        } 
    }
}

exports.signUp = async (req, res) => {

    try {
        const { email, fullName, password, phone, passwordConfirm } = req.body;
        const newUser = await User.create({ email, fullName, password, passwordConfirm, phone });

        // jwt -> json web token

        // generate a token and send it back to the new user
        const token = signToken({ id: newUser._id, fullName: newUser.fullName, email })

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


exports.login = CatchError(async (req, res, next) => {
    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        const result = await bcrypt.compare(password, user.password);

        if (result) {
            const token = signToken({ id: user._id, fullName: user.fullName })

            res.status(200).json({
                status: 'success',
                token,
                data: user
            })
        } else {

            return next(new Error("Invalid Password"))
            // res.status(403).json({
            //     status: 'fail',
            //     data: "Invalid Password"
            // })
        }
    } catch (err) {
        return next(err)
        // res.status(500).json({
        //     status: 'fail',
        //     data: err
        // })
    }
})

exports.forgotPassword = CatchError(async (req, res, next) => {

    // 1. get user email id and find if the user exists or not
    const user = await User.findOne({ email: req.body.email})    

    if(!user) {
        return next(new AppError("Email id is not registered. please signup First", 404))
    }

    // 2. genrate a unique token 

    const token = user.createPasswordToken()
    await user.save({ validateBeforeSave: false })
    
    const resetUrl = `http://${req.get('host')}/api/users/resetPassword/${token}`

    // 3. send it in a mail

    // sendMail(user.email, resetUrl)

    //nodemailer -> transpotcreate(email user name pass)
    // send - mail options

    res.send({
        status: "success",
        resetUrl
    })

})


exports.resetPassword = CatchError(async (req, res, next) => {
    //receive the token and verify it

    const encryptedToken = crypto.createHash('sha256').update(req.params.token).digest('hex')

    const user = await User.findOne({ passwordResetToken: encryptedToken })

    if(!user) {
        return next(new AppError("Token is invalid please check again", 400))
    }

    user.password = req.body.password;
    user.passwordConfirm = req.body.passwordConfirm;
    user.passwordResetToken = undefined;

    await user.save();

    res.send({
        status: "success",
        message: "Password chnaged successfully, please login again."
    })    
    // if correct then i will update the password
})