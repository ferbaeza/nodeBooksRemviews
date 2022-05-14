/**Importamos el Modelo */
const storageModel =require("../models/storage");
const {handleHttpError} = require('../utils/handleError')
const { matchedData } = require('express-validator')
const fs = require('fs')

const PUBLIC_URL = process.env.PUBLIC_URL
const MEDIA_PATH = `${__dirname}/../storage`

/**
 * Obtener datos de BBDD
 */
const getItems = async (req, res)=>{
    try{
        const data = await storageModel.find({})
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
        const data = await storageModel.findById(id);
        res.send({data});
    }catch(e){
        handleHttpError(res, ERROR_GET_ITEM)
    }
}

/**
 * Subir un archivo nuevo
 */
const createItem = async(req, res)=>{
    const { body, file } = req;
    const fileData={
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }
    console.log(fileData)
    const data = await storageModel.create(fileData);
    console.log(data)
    res.send({data})
}

/**
 * Borrar un item
 */
const deleteItem =async (req, res)=>{
    try{
        req= matchedData(req);
        const id = req;
        console.log(id)
        const data = await storageModel.findById(id);
        const {filename}= data
        await storageModel.deleteOne(id);
        
        
        const filePath= `${MEDIA_PATH}/${filename}`
        fs.unlinkSync(filePath)
        const dataSto ={
            filePath,
            deleted:1,
            fullDeleted:"OK"
        }
        res.status(200).send({dataSto})
    }catch(e){
        console.log(e)
        handleHttpError(res, ERROR_DELETE_ITEM)
    }

}


module.exports={ getItems, getItem, createItem, deleteItem }