const handleHttpError = (res, message="Algo malo sucedio", code=403)=>{
    res.status(code);
    res.send({Error:message});
};
module.exports= {handleHttpError};