const express = require('express');
const router = express.Router();
const {getItems,getAllItems, getItem, createItem, updateItem, deleteItem} = require ("../controllers/authors")
const customHeader = require('../middlewares/customHeader')
const {validateNewAuthor, validateId} = require('../validators/authors')


//TODO get, post
/**
 * Get all authors
 * @swagger
 * /authors:
 *    get:
 *      tags:
 *        - authors
 *      summary: "List all authors"
 *      description: List all authors with details
 *      responses:
 *        '200':
 *          description: .
 *        '402':
 *          description: Not allow because you need more permissions
 */
router.get("/", getItems)

router.get("/all", getAllItems)






/**
 * Get author
 * @swagger
 * /authors/{id}:
 *    get:
 *      tags:
 *        - authors
 *      summary: "Get author"
 *      description: Get author detail
 *      responses:
 *        '200':
 *          description: Retorna el objeto insertado en la coleccion.
 *        '422':
 *          description: Error de validacion.
 *      parameters:
 *        -  in: "path"
 *           name: "id"
 *           description: "ID author"
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
 * Post new author
 * @swagger
 * /authors:
 *    post:
 *      tags:
 *        - authors
 *      summary: "Add author"
 *      description: Add new author with detail
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
 *              $ref: "#/definitions/authors"
 *    responses:
 *      '201':
 *        description: retorna el objeto insertado en la coleccion con stado '201'
 */
router.post("/", validateNewAuthor, customHeader, createItem)

/**
 * Upadte new author
 * @swagger
 * /authors/{id}:
 *    put:
 *      tags:
 *        - authors
 *      summary: "Update author"
 *      description: Update author with detail
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
 *              $ref: "#/definitions/authors"
 *        -  in: "path"
 *           name: "id"
 *           description: "ID author"
 *           required: true
 *           schema:
 *              type: string
 *    responses:
 *      '201':
 *        description: retorna el objeto insertado en la coleccion con stado '201'
 */
router.put("/:_id", validateId, validateNewAuthor, updateItem)


/**
 * Delete author
 * @swagger
 * /authors/{id}:
 *    delete:
 *      tags:
 *        - authors
 *      summary: "Delete author"
 *      description: Delete author detail
 *      responses:
 *        '200':
 *          description: Retorna el objeto insertado en la coleccion.
 *        '422':
 *          description: Error de validacion.
 *      parameters:
 *        -  in: "path"
 *           name: "id"
 *           description: "ID author"
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