// whatever is related to server configuration
const app = require('./app')
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// adds all the variables into process.env -> default variable provided by Node.js
dotenv.config({ path: `${__dirname}/config.env` })

const DBURL = process.env.DB_URL.replace('<password>', process.env.PASSWORD)

mongoose.connect(DBURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true 
}).then(() => {
    console.log('connected successfully')
}).catch((err) => {
    console.log(err)
})


// // console.log(process.env)
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log("server is running on ", "http://localhost:" + PORT)
})
