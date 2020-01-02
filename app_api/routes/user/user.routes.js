const express = require('express')

const router = express.Router()

const userCtrl = require('../../controllers/user/user.ctrl')
const checkAuth = require('../../middleware/check-auth.mdwr')


router.get('/info', checkAuth, userCtrl.getUserInfo)
router.post('/signup', userCtrl.createUser)
router.post('/login', userCtrl.getUser)
router.delete('/:id', userCtrl.deleteUser)


module.exports = router
