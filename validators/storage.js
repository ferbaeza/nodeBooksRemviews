const { check } = require('express-validator');
const validate = require('../utils/handleValidate')


const validateId=[
    check('_id').exists().notEmpty(),
    (req, res, next)=>{
        return validate(req, res, next)
    } 
        
];
module.exports={validateId};