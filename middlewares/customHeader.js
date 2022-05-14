const customHeader=(req, res, next)=>{
    console.log("Middleware");
    try{
        const apikey= req.headers.api_key;
        if(apikey === "fer01"){
            console.log(req.body)
            console.log({"This is my Api Key":req.headers.api_key})
            console.log("Middleware ha funcionado")
            next()

        }else{
            res.status(403).send({"error":"Api Key no es Correcta"})
        }

    }catch(e){
        res.status(403);
        res.send({"error":"Algo ocurrio en el Header"})
    }

} 

module.exports= customHeader