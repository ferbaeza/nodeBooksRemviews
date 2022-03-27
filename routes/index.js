const express = require('express');
const router = express.Router();
const fs = require("fs");

// Se crea una constante que es el nombre del directorio
const PATH_ROUTES = __dirname; 

//Una funcion para quitar la extension del archi vo
const removeExtension = (fileName)=>{
    return fileName.split(".").shift()
}

fs.readdirSync(PATH_ROUTES).filter((file)=>{
    const name= removeExtension(file)
    if (name != 'index'){
        console.log(`Cargando la Ruta de : ${name}`)
        router.use(`/${name}`, require(`./${file}`))
    }
});

module.exports = router
 