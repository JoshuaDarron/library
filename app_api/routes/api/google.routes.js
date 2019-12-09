const express = require('express')
const ctrl = require('../../controllers/google.ctrl')
const router = express.Router()


router.get('/', ctrl.googleBooksSearch)


module.exports = router
