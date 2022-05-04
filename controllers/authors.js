/**Importamos el Modelo */
const { authorsModel} =require("../models");



/**
 * Obtener datos de BBDD
 */
const getAuthors = async (req, res)=>{
    //const data = await booksModel.find({})
    //res.send({data})
    const data = ["hola","fer"]
    res.send({data})
    console.log(data)

}



/**
 * Obtener detalle del Libro
 */
const getAuthor =(req, res)=>{
}


/**
 * Crear un libro nuevo
 */
const createAuthor = async(req, res)=>{
    const { body } = req;
    console.log(body)
    res.send(body)
}


/**
 * Modificar un libro
 */
const updateAuthor =(req, res)=>{}


/**
 * Borrar un libro
 */
const deleteAuthor =(req, res)=>{}


module.exports={ getAuthors, getAuthor, createAuthor, updateAuthor, deleteAuthor }