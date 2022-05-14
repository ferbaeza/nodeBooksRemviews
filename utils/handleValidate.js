const {validationResult}= require('express-validator')


const validate=(req, res, next)=>{
    try{
        validationResult(req).throw();
        return next() //TODO si todo corresponde en el validador continua hacia el Controller
    }catch(err){
        res.status(403)
        res.send({errors: err.array()})
    }
}

module.exports= validate