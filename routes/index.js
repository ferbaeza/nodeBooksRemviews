const express = require('express');
const router = express.Router();
const fs = require("fs");

// Se crea una constante que es el nombre del directorio
const PATH_ROUTES = __dirname; 

/**
 * Con fs podemos leer el directorio de nuestro pproyecto
 * y nos va a mostrar todos los archivos que hay en dicha
 * ruta
 * @param a= directory field with all the docs in path
 *? const a = fs.readdirSync(PATH_ROUTES);
 * ? console.log({a});
 */
/**
 * 
 *  
 * * Una funcion para quitar la extension del archivo 
 * * Con ello lo que conseguimos es que cada ruta sea el nombre 
 */
//
const removeExtension = (fileName)=>{
    return fileName.split(".").shift()
}
/**
 * Solo nos interesan las routes que no sean index
 */
fs.readdirSync(PATH_ROUTES).filter((file)=>{
    const name= removeExtension(file)
    if (name !== 'index'){
        console.log(`Cargando la Ruta de : ${name}`)
        router.use(`/${name}`, require(`./${file}`))
    }
});

module.exports = router
 