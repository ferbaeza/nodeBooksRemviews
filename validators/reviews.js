const { check } = require('express-validator');
const validate = require('../utils/handleValidate')

const validateNewReview=[
    check('title').exists().notEmpty(),
    check('user').exists().notEmpty(),
    check('description').exists().notEmpty(),
    check('bookId').exists().notEmpty().isMongoId(),
    check('reviewID').exists().notEmpty().isMongoId(),
    (req, res, next)=>{
        return validate(req, res, next)
    }       
];
const validateId=[
    check('_id').exists().notEmpty(),
    (req, res, next)=>{
        return validate(req, res, next)
    } 
        
];
module.exports={validateNewReview, validateId};