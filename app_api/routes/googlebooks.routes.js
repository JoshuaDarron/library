const express = require("express");
const ctrl = require("../controllers/googlebooks.ctrl");
const router = express.Router();

router.get("/google/books", ctrl.findGooglebooks);

module.exports = router;
