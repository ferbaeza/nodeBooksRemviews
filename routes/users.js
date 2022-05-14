const express = require('express');
const router = express.Router();
const {getItems, getItem, createItem, updateItem, deleteItem} = require ("../controllers/users")
const customHeader = require('../middlewares/customHeader')
const {validateNewUser, validateId}= require('../validators/users')


//TODO get, post

router.get("/", getItems)
router.get("/:_id", validateId, getItem)
router.post("/", validateNewUser, customHeader, createItem)
router.put("/:_id", validateId, validateNewUser, updateItem)
router.delete("/:_id", validateId, deleteItem)


module.exports = router;


/**
 * !__GET__ALL_ITEMS
 */
/**
 * Get all users
 * @swagger
 * /users:
 *    get:
 *      tags:
 *        - users
 *      summary: "List all users"
 *      description: List all users with details
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
 * /users/{id}:
 *    get:
 *      tags:
 *        - users
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
 * /users:
 *    post:
 *      tags:
 *        - users
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
 *              $ref: "#/definitions/users"
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
  * /users/{id}:
  *    put:
  *      tags:
  *        - users
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
  *              $ref: "#/definitions/users"
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
  * /users/{id}:
  *    delete:
  *      tags:
  *        - users
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
