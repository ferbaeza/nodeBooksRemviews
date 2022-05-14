const { check } = require('express-validator');
const validate = require('../utils/handleValidate')

const validateNewBook=[
    check('title').exists().notEmpty(),
    check('author').exists().notEmpty(),
    check('author.name').exists().notEmpty(),
    check('author.nickname').exists().notEmpty(),
    check('author.nacionalidad').exists().notEmpty(),
    check('editorial').exists().notEmpty(),
    check('synopsis').exists().notEmpty(),
    check('isbn').exists().notEmpty(),
    check('authorId').exists().notEmpty().isMongoId(),
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

module.exports={validateNewBook, validateId};