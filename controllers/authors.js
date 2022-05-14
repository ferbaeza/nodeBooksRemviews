/**Importamos el Modelo */
const authorsModel =require("../models/authors");
const {handleHttpError} = require('../utils/handleError')
const { matchedData } = require('express-validator')

// const db = mongoose.connection;
// const mongoose = require("mongoose");



/**
 * Obtener datos de BBDD
 */
const getAllItems = async(req, res)=>{
    try {
        // const data = await db.getCollection('authors').aggregate([
        //     {
        //         $lookup: {
        //             from: "books",
        //             localField: "bookId",
        //             foreignField: "name",
        //             as: "inventory_docs"
        //         }
        //     },
        //     {
        //         $match: {
        //             "inventory_docs": {$ne: []}
        //         }
        //     }
        // ])
        // res.send({data})
        res.send({data:1})
    } catch (error) {
        console.log(error)
        handleHttpError(res)
        
    }
}
const getItems = async (req, res)=>{
    try{
        //const data = await authorsModel.findAllData({})
        const data = await authorsModel.find({})
        res.send({data})
        console.log(data)
    }catch(error){
        handleHttpError(res)
    }
}
const getItem= async(req, res)=>{
    try{
        req= matchedData(req);
        const id = req;
        console.log(id)
        const data = await authorsModel.findById(id);
        res.send({data});
    }catch(e){
        handleHttpError(res, ERROR_GET_ITEM)
    }
}
/**
 * Crear un item nuevo
 */
const createItem = async(req, res)=>{
    const body = matchedData(req)
    console.log(body)
    const data = new authorsModel(body);
    try{
        await data.save();
        res.status(200).send({data})
    }catch(error){
        console.log(error)
        handleHttpError(res, ERROR_GET_ITEMS)
    }
}
/**
 *const body = req.body
 *const bodyClean = matchedData(req)
 * try{
 *res.send({body, bodyClean})

 * @param {body} req.body Nos devuelve el Objeto con todos los datos que se estan enviando desde el body,
 * con lo que si no le ponemos filtros, dejamos pasar todo a nuestro modelo 
 * @param {bodyClean} res Nos devuelve el Objeto con todos los datos ya filtrados que nosotros hemos 
 * establecido anteriormente en nuestro validador 
 */



/**
 * Modificar un item
 */
const updateItem = async (req, res)=>{
    console.log(req.body)
    console.log(req.params)
    const body = (req.body);
    const id = (req.params);
    try{
        const data = await authorsModel.findByIdAndUpdate(id, body);
        res.status(200).send({data})
    }catch(error){
        handleHttpError(res, ERROR_UPDATE_ITEM)
    }
}



/**
 * Borrar un item
 */
const deleteItem =async (req, res)=>{
    try{
        req= matchedData(req);
        const id = req;
        console.log(id)
        const data = await authorsModel.delete(id);
        res.status(200).send({data})
    }catch(e){
        //console.log(e)
        handleHttpError(res, ERROR_DELETE_ITEM)
    }

}


module.exports={ getAllItems, getItems, getItem, createItem, updateItem, deleteItem }