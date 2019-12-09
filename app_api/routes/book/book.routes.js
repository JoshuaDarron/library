const express = require('express')
const ctrl = require('../../controllers/book.ctrl')
const router = express.Router()

router.post('/', ctrl.createBook)
router.get('/', ctrl.findAllBooks)
router.get('/:id', ctrl.findOneBook)
router.put('/:id', ctrl.updateBook)
router.delete('/:id', ctrl.deleteBook)

module.exports = router
