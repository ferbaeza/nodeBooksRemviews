const express = require('express');
const router = express.Router();
const {getAuthors, getAuthor, createAuthor} = require ("../controllers/authors")


//TODO get, post

router.get("/", getAuthors)
router.get("/:id", getAuthor)
router.post("/", createAuthor)


module.exports = router;