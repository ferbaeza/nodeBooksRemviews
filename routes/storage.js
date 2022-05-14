const express = require("express");
const router = express.Router();
const path = require("path");
const upploadMiddleware= require('../utils/handleStorage')
const {getItems, getItem, createItem, deleteItem} = require("../controllers/storage")
const {validateId}= require('../validators/storage')

//TODO ==> http://localhost:3000/api/storage

/**
 * 
 */

router.get('', getItems)
router.get('/:_id', validateId, getItem)
router.post('',upploadMiddleware.single("myfile"), createItem)
router.delete('/:_id', validateId, deleteItem)

module.exports= router;


/**
 * !__GET__ALL_ITEMS
 */
/**
 * Get all storage
 * @swagger
 * /storage:
 *    get:
 *      tags:
 *        - storage
 *      summary: "List all storage"
 *      description: List all storage with details
 *      responses:
 *        '200':
 *          description: .
 *        '402':
 *          description: Not allow because you need more permissions
 */

/**
 * !__GET___ITEM___ID
 */

/**
 * Get book
 * @swagger
 * /storage/{id}:
 *    get:
 *      tags:
 *        - storage
 *      summary: "Get book"
 *      description: Get book detail
 *      responses:
 *        '200':
 *          description: Retorna el objeto insertado en la coleccion.
 *        '422':
 *          description: Error de validacion.
 *      parameters:
 *        -  in: "path"
 *           name: "id"
 *           description: "ID book"
 *           required: true
 *           schema:
 *              type: string
 *    responses:
 *      '201':
 *        description: retorna el objeto insertado en la coleccion con stado '201'
 * 
 */

/**
 * !__POST__NEW_ITEM
 */

/**
 * Post new book
 * @swagger
 * /storage:
 *    post:
 *      tags:
 *        - storage
 *      summary: "Add book"
 *      description: Add new book with detail
 *      responses:
 *        '200':
 *          description: Retorna el objeto insertado en la coleccion.
 *        '422':
 *          description: Error de validacion.
 *      parameters:
 *        -  in: "body"
 *           name: "body"
 *           description: "parametros requeridos para insertar comentrario"
 *           required: true
 *           schema:
 *              $ref: "#/definitions/storage"
 *    responses:
 *      '201':
 *        description: retorna el objeto insertado en la coleccion con stado '201'
 */



/**
 * !__UPDATE___ITEM
 */
 /**
  * Upadte new book
  * @swagger
  * /storage/{id}:
  *    put:
  *      tags:
  *        - storage
  *      summary: "Update book"
  *      description: Update book with detail
  *      responses:
  *        '200':
  *          description: Retorna el objeto insertado en la coleccion.
  *        '422':
  *          description: Error de validacion.
  *      parameters:
  *        -  in: "body"
  *           name: "body"
  *           description: "parametros requeridos para insertar comentrario"
  *           required: true
  *           schema:
  *              $ref: "#/definitions/storage"
  *        -  in: "path"
  *           name: "id"
  *           description: "ID book"
  *           required: true
  *           schema:
  *              type: string
  *    responses:
  *      '201':
  *        description: retorna el objeto insertado en la coleccion con stado '201'
  */
 
 /**
 * !__DELETE___ITEM__ID
 */
 /**
  * Delete book
  * @swagger
  * /storage/{id}:
  *    delete:
  *      tags:
  *        - storage
  *      summary: "Delete book"
  *      description: Delete book detail
  *      responses:
  *        '200':
  *          description: Retorna el objeto insertado en la coleccion.
  *        '422':
  *          description: Error de validacion.
  *      parameters:
  *        -  in: "path"
  *           name: "id"
  *           description: "ID book"
  *           required: true
  *           schema:
  *              type: string
  *    responses:
  *      '201':
  *        description: retorna el objeto insertado en la coleccion con stado '201'
  * 
  */
