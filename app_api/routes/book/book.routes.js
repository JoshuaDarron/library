const express = require('express')
const router = express.Router()
const ctrl = require('../../controllers/book.ctrl')


router.post('/', ctrl.createBook)
router.get('/', ctrl.findAllBooks)
router.get('/bookmarked', ctrl.findTypesOfBooks)
router.get('/archived', ctrl.findTypesOfBooks)
router.get('/deleted', ctrl.findTypesOfBooks)
router.get('/:id', ctrl.findOneBook)
router.put('/:id', ctrl.updateBook)
router.delete('/:id', ctrl.deleteBook)


module.exports = router
