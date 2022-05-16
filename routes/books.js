const express = require('express');
const router = express.Router();
const {getItems, getItem, createItem, updateItem, deleteItem} = require ("../controllers/books")
const {validateNewBook, validateId}= require('../validators/books')
const customHeader = require('../middlewares/customHeader')


//TODO get, post

/**
 * Get all books
 * @swagger
 * /books:
 *    get:
 *      tags:
 *        - books
 *      summary: "List all books"
 *      description: List all books with details
 *      responses:
 *        '200':
 *          description: .
 *        '402':
 *          description: Not allow because you need more permissions
 */
router.get("/", getItems)



/**
 * !__GET___BOOK___ID
 */

/**
 * Get book
 * @swagger
 * /books/{id}:
 *    get:
 *      tags:
 *        - books
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

router.get("/:_id", validateId, getItem)




/**
 * !__POST__NEW_BOOK
 */

/**
 * Post new book
 * @swagger
 * /books:
 *    post:
 *      tags:
 *        - books
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
 *              $ref: "#/definitions/books"
 *    responses:
 *      '201':
 *        description: retorna el objeto insertado en la coleccion con stado '201'
 */

router.post("/", validateNewBook, createItem)


/**
 * !__UPDATE___BOOK
 */
 /**
  * Upadte new book
  * @swagger
  * /books/{id}:
  *    put:
  *      tags:
  *        - books
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
  *              $ref: "#/definitions/books"
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
 
router.put("/:_id", validateId, validateNewBook, updateItem)



/**
 * !__DELETE___BOOK__ID
 */
 /**
  * Delete book
  * @swagger
  * /books/{id}:
  *    delete:
  *      tags:
  *        - books
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

router.delete("/:_id", validateId, deleteItem)


module.exports = router;

