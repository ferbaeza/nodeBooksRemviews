const { check } = require('express-validator');
const validate = require('../utils/handleValidate')

const validateNewAuthor=[
    check('name').exists().notEmpty(),
    check('nickname').exists().notEmpty(),
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
module.exports={validateNewAuthor, validateId};