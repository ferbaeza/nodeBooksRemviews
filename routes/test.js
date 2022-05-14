const express = require('express');
const router = express.Router();
const {validateItem, validateId}= require('../validators/test')
const customHeader = require('../middlewares/customHeader');
const app = express.Router();
const {getItems, getItem, createItem, updateItem, deleteItem} = require ("../controllers/test")



router.get('/', getItems)
router.get('/:_id',validateId, getItem)
router.post("/", validateItem, createItem)

module.exports = router;



/**
 * !__GET__ALL_ITEMS
 */
/**
 * Get all test
 * @swagger
 * /test:
 *    get:
 *      tags:
 *        - test
 *      summary: "List all test"
 *      description: List all test with details
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
 * /test/{id}:
 *    get:
 *      tags:
 *        - test
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
 * /test:
 *    post:
 *      tags:
 *        - test
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
 *              $ref: "#/definitions/test"
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
  * /test/{id}:
  *    put:
  *      tags:
  *        - test
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
  *              $ref: "#/definitions/test"
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
  * /test/{id}:
  *    delete:
  *      tags:
  *        - test
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
