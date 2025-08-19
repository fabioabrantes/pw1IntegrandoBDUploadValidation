import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de livros de usuários", // Título da sua API
      version: "1.0.0",
      description: "Documentação da API para o projeto de livros de usuários",
    },
    servers: [
      {
        url: "http://localhost:3000", // Altere para a URL base da sua API
        description: "Servidor de Desenvolvimento",
      },
    ],
  },
  // Caminho para os arquivos que contêm as anotações da API
  apis: ["./src/routes/*.ts", "./src/server.ts"],
};

export const specs = swaggerJsdoc(options);
