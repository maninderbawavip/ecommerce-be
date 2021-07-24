const express = require('express');
const morgan = require('morgan');

const userRouter = require('./routes/userRoutes');
const ErrorController = require('./controllers/errorController');
const cors = require('cors')
// cross origin resource sharing

const app = express();

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send('hello World How Are you')
})


app.use('/api/users', userRouter)

app.all('*', (req, res, next) => {
    const error = new Error(req.originalUrl + "url not found on server")
    next(error)
})

// error handling middleware is the error object
app.use(ErrorController)

module.exports = app;