/**Importamos el Modelo */
const reviewsModel =require("../models/reviews");
const {handleHttpError} = require('../utils/handleError')
const { matchedData } = require('express-validator')


/**
 * Obtener datos de BBDD
 */
 const getItems = async (req, res)=>{
    try{
        const data = await reviewsModel.find({})
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
        const data = await reviewsModel.findById(id);
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
    const data = new reviewsModel(body);
    try{
        await data.save();
        res.status(200).send({data})
    }catch(error){
        handleHttpError(res, ERROR_GET_ITEMS)
    }
}

/**
 * Modificar un item
 */
const updateItem = async (req, res)=>{
    console.log(req.body)
    console.log(req.params)
    const body = (req.body);
    const id = (req.params);
    try{
        const data = await reviewsModel.findByIdAndUpdate(id, body);
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
        const data = await reviewsModel.delete(id);
        res.status(200).send({data})
    }catch(e){
        //console.log(e)
        handleHttpError(res, ERROR_DELETE_ITEM)
    }

}


module.exports={ getItems, getItem, createItem, updateItem, deleteItem }