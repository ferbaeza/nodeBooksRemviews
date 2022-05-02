const express = require('express');
const router = express.Router();
const {getBooks, getBook, createBook} = require ("../controllers/books")


//TODO get, post

router.get("/", getBooks)
router.get("/:id", getBook)
router.post("/", createBook)


module.exports = router;