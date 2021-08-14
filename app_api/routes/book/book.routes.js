const express = require('express')
const router = express.Router()
const ctrl = require('../../controllers/book/book.ctrl')

const checkAuth = require('../../middleware/check-auth.mdwr')


router.post('/', checkAuth, ctrl.createBook)
router.get('/', checkAuth, ctrl.findAllBooks)
router.get('/bookmarked', checkAuth, ctrl.findTypesOfBooks)
router.get('/archived', checkAuth, ctrl.findTypesOfBooks)
router.get('/deleted', checkAuth, ctrl.findTypesOfBooks)
router.get('/:id', checkAuth, ctrl.findOneBook)
router.put('/:id', checkAuth, ctrl.updateBook)
router.delete('/:id', checkAuth, ctrl.deleteBook)


module.exports = router
