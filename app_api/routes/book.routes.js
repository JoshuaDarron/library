const express = require("express");
const ctrl = require("../controllers/book.ctrl");
const router = express.Router();

router.post("/book", ctrl.createBook);
router.get("/books", ctrl.findAllBooks);
router.get("/book/:id", ctrl.findOneBook);
router.put("/book/:id", ctrl.updateBook);
router.delete("/book/:id", ctrl.deleteBook);

module.exports = router;
