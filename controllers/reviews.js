/**Importamos el Modelo */
const { reviewsModel} =require("../models");



/**
 * Obtener datos de BBDD
 */
const getReviews = async (req, res)=>{
    //const data = await booksModel.find({})
    //res.send({data})
    const data = ["hola","Melon"]
    res.send({data})
    console.log(data)

}



/**
 * Obtener detalle del Libro
 */
const getReview =(req, res)=>{
}


/**
 * Crear un libro nuevo
 */
const createReview = async(req, res)=>{
    const { body } = req;
    console.log(body)
    res.send(body)
}


/**
 * Modificar un libro
 */
const updateReview =(req, res)=>{}


/**
 * Borrar un libro
 */
const deleteReview =(req, res)=>{}


module.exports={ getReviews, getReview, createReview, updateReview, deleteReview }