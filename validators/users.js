const { check } = require('express-validator');
const validate = require('../utils/handleValidate')

const validateNewUser=[
    check('name').exists().notEmpty(),
    check('username').exists().notEmpty(),
    check('email').exists().notEmpty(),
    check('password').exists().notEmpty(),
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
module.exports={validateNewUser, validateId};