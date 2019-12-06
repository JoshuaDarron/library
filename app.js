require("dotenv").config()
const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const mongoose = require('mongoose')
const path = require('path')
const port = process.env.PORT || 3001
const MONGODB_URI = 'mongodb://localhost/googlebooks'
const app = express()
const apiRoutes = require('./app_api/routes/book.routes')
const googlebooksRoutes = require("./app_api/routes/googlebooks.routes")


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(logger('dev'))


mongoose.Promise = Promise
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
    .then(() => console.log('Successfully connected to Mongo database'))
    .catch(err => console.error(err))


app.get('*', function (req, res) {
    res.status(200).json({message: "Hello? Is it me you're looking for?"})
})


app.use('/api', apiRoutes)
app.use('/', googlebooksRoutes)


app.listen(port, () => console.log(`http://localhost:${port}`))
