const swaggerJsdoc = require("swagger-jsdoc");

/**
 *     {
      url: "https://staging.gigantic-server.com/v1",
      description: "Staging server",
    }
 */

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "NodeBackend Biblio Fernando Baeza Hurtado",
    description: "Esta documentación se genera automaticamente, recogiendo la informacion de los endpoint generados y mostrando una interfaz para interactuar con las API de Node_Biblio_App",
    contact: {
      name: "Backend NodeJs",
      url: "",
      email: "fbaezahurtado@gmail.com",
    }
  },
  servers: [
    {
      url: "http://localhost:3000/api",
      description: "Development backend_server",
    },
    {
      url: "http://localhost:3000/api",
      description: "Development Fernando Baeza",
    },

  ],
  definitions: {
    authors: {
      type: "object",
      required: ["name", "nickname", "bookId"],
      properties: {
        name: {
          type: "string",
        },
        nickname: {
          type: "string",
        },
        bookId: {
          type: "string",
        },
      },
    },
    books: {
        type: "object",
        required: ["titile", "author", "editorial", "synopsis", "isbn", "authorId"],
        properties: {
            title: {
            type: "string",
          },
          author:{
                name:{
                    type: "string",
                },
                nickname:{
                    type: "string",
                },
                nacionalidad:{
                    type: "string",
                }
            },
          editorial: {
            type: "string",
          },
          synopsis: {
            type: "string",
          },
          isbn: {
            type: "string",
          },
          authorId: {
            type: "string",
          },
        },
      },
    complains: {
      type: "object",
      required: ["title", "user", "description", "reviewID", "complainID"],
      properties: {
        title: {
          type: "string",
        },
        user: {
          type: "string",
        },
        description: {
          type: "string",
        },
        reviewID: {
          type: "string",
        },
        complainID: {
          type: "string",
        },

      },
    },
    reviews: {
      type: "object",
      required: ["title", "user", "description","bookId", "reviewID"],
      properties: {
        title: {
          type: "string",
        },
        user: {
          type: "string",
        },
        description: {
          type: "string",
        },
        bookId: {
          type: "string",
        },
        complainID: {
          type: "string",
        },

      },
    },
    storage: {
      type: "object",
      required: ["url", "filename"],
      properties: {
        url: {
          type: "string",
        },
        filename: {
          type: "string",
        },
      },
    },
    test: {
      type: "object",
      required: ["name", "age"],
      properties: {
        name: {
          type: "string",
        },
        age: {
          type: "string",
        },
      },
    },
    users: {
      type: "object",
      required: ["name", "username", "email", "password", "role"],
      properties: {
        name: {
          type: "string",
        },
        username: {
          type: "string",
        },
        email: {
          type: "string",
        },
        password: {
          type: "string",
        },
        role: {
          type: "string",
        },

      },
    }




  
  },
};

const options = {
  swaggerDefinition,
  apis: ["./routes/*.js"],
};

const openapiSpecification = swaggerJsdoc(options);
module.exports = openapiSpecification;