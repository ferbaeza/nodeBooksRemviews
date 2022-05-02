/**Importamos el Modelo */
const { booksModel} =require("../models");



/**
 * Obtener datos de BBDD
 */
const getBooks = async (req, res)=>{
    //const data = await booksModel.find({})
    //res.send({data})
    const data = ["hola","fer"]
    res.send({data})

}



/**
 * Obtener detalle del Libro
 */
const getBook =(req, res)=>{
}


/**
 * Crear un libro nuevo
 */
const createBook = async(req, res)=>{
    const { body } = req;
    console.log(body)
    res.send(body)
}


/**
 * Modificar un libro
 */
const updateBook =(req, res)=>{}


/**
 * Borrar un libro
 */
const deleteBook =(req, res)=>{}


module.exports={ getBooks, getBook, createBook, updateBook, deleteBook }