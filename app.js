require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const mongoose = require('mongoose')
const path = require('path')
const serveStatic = require('serve-static')

const app = express()

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/googlebooks'

const apiRoutes = require('./app_api/routes/index.routes')


mongoose.Promise = Promise
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Successfully connected to Mongo database'))
    .catch(err => console.error(err))


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(logger('dev'))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    )
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS'
    )
    next()
})

app.use('/api', apiRoutes)
app.use('/', serveStatic(path.join(__dirname, 'app_client/dist')))

app.get(/.*/, function (req, res) {
    res.sendFile(path.join(__dirname, 'app_client/dist/'))
})


module.exports = app