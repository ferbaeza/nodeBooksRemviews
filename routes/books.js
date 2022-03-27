const express = require('express');
const router = express.Router();


//TODO get, post

router.get("/", (req, res)=>{
    const data = ["hola","fer"]
    res.send({data})
});


module.exports = router;