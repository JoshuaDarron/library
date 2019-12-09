require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const mongoose = require('mongoose')
const path = require('path')

const app = express()

const port = process.env.PORT || 3001
const MONGODB_URI = 'mongodb://localhost/googlebooks'

const apiRoutes = require('./app_api/routes/index.routes')


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(logger('dev'))


mongoose.Promise = Promise
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
    .then(() => console.log('Successfully connected to Mongo database'))
    .catch(err => console.error(err))


app.use('/api', apiRoutes)
app.use('*', express.static(path.join(__dirname, 'public')))


app.listen(port, () => console.log(`http://localhost:${port}`))
