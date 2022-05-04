const express = require('express');
const router = express.Router();
const {getReviews, getReview, createReview} = require ("../controllers/reviews")


//TODO get, post

router.get("/", getReviews)
router.get("/:id", getReview)
router.post("/", createReview)


module.exports = router;