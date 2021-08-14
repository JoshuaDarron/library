const express = require('express')
const router = express.Router()

const userRoutes = require('./user/user.routes')
const bookRoutes = require('./book/book.routes')
const googleRoutes = require('./api/google.routes')


router.use('/google', googleRoutes)
router.use('/user', userRoutes)
router.use('/book', bookRoutes)


module.exports = router