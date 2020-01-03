const express = require('express')

const router = express.Router()

const userCtrl = require('../../controllers/user/user.ctrl')
const checkAuth = require('../../middleware/check-auth.mdwr')

const extractFile = require('../../middleware/file.mdwr')


router.get('/info', checkAuth, userCtrl.getUserInfo)
router.put('/info', checkAuth, userCtrl.updateUser)
router.post('/signup', userCtrl.createUser)
router.post('/login', userCtrl.getUser)
router.delete('/:id', userCtrl.deleteUser)


module.exports = router
