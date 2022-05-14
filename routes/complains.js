const express = require('express');
const router = express.Router();
const {getItems, getItem, createItem, updateItem, deleteItem} = require ("../controllers/complains")
const {validateNewComplain, validateId}= require('../validators/complains')
const customHeader = require('../middlewares/customHeader') //check the api key

//TODO get, post

router.get("/", getItems)
router.get("/:id", validateId, getItem)
router.post("/", validateNewComplain ,createItem)
router.put("/:_id", validateId, validateNewComplain, updateItem)
router.delete("/:_id", validateId, deleteItem)

module.exports = router;



/**
 * !__GET__ALL_ITEMS
 */
/**
 * Get all complains
 * @swagger
 * /complains:
 *    get:
 *      tags:
 *        - complains
 *      summary: "List all complains"
 *      description: List all complains with details
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
 * /complains/{id}:
 *    get:
 *      tags:
 *        - complains
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
 * /complains:
 *    post:
 *      tags:
 *        - complains
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
 *              $ref: "#/definitions/complains"
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
  * /complains/{id}:
  *    put:
  *      tags:
  *        - complains
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
  *              $ref: "#/definitions/complains"
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
  * /complains/{id}:
  *    delete:
  *      tags:
  *        - complains
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
