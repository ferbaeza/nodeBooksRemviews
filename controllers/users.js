/**Importamos el Modelo */
const { matchedData } = require('express-validator')
const usersModel = require('../models/users')
const {handleHttpError} = require('../utils/handleError')

/**
 * Obtener datos de BBDD
 */
const getItems = async (req, res)=>{
    try{
        const data = await usersModel.find({})
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
        const data = await usersModel.findById(id);
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
    const data = new usersModel(body);
    try{
        await data.save();
        res.status(200).send({data})
    }catch(error){
        console.log(error)
        handleHttpError(res, ERROR_CREATE_USER)
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
        const data = await usersModel.findByIdAndUpdate(id, body);
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
        const data = await usersModel.delete(id);
        res.status(200).send({data})
    }catch(e){
        //console.log(e)
        handleHttpError(res, ERROR_DELETE_ITEM)
    }

}


module.exports={ getItems, getItem, createItem, updateItem, deleteItem }