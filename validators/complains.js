const { check } = require('express-validator');
const validate = require('../utils/handleValidate')

const validateNewComplain=[
    check('title').exists().notEmpty(),
    check('user').exists().notEmpty(),
    check('description').exists().notEmpty(),
    check('reviewID').exists().notEmpty().isMongoId(),
    check('complainID').exists().notEmpty().isMongoId(),
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

module.exports={validateNewComplain, validateId};