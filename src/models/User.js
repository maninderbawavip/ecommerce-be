const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'Name must be present']
    },
    email: {
        type: String,
        required: [true, 'Email must be present'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'please enter a valid email address']
    },
    phone: {
        type: Number
    },
    password: {
        type: String,
        required: [true, 'Password must be there'],
        minlength: 8
    },
    passwordConfirm: {
        type: String,
        required: [true, 'confirm your password'],
        validate: {
            validator: function (passwordConfirm) {
                // console.log(this.password, passwordConfirm)
                return passwordConfirm === this.password
            },
            message: "Passwords must be same"
        }
    },
    passwordResetToken: String,
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }

})

userSchema.methods.createPasswordToken = function() {

    // token generation and assignement to the attribute // here 
    const resetToken = crypto.randomBytes(32).toString('hex')

    // encrypt the token and assign its value to passwordResetToken attribute of user object
    this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');

    console.log({ resetToken }, this.passwordResetToken)

    return resetToken
}

userSchema.pre('save', async function (next) {
    
    this.password = await bcrypt.hash(this.password, 10);
    this.passwordConfirm = undefined;
    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User