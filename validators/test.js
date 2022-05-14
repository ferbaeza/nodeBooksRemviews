const { check } = require('express-validator');
const validate = require('../utils/handleValidate')

const validateItem=[
    check('name').exists().notEmpty().isString(),
    check('age').exists().notEmpty().isNumeric(),
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


module.exports={validateItem, validateId};