import express, { Router } from "express";
import multer from "multer";
import path from "node:path";

import registerBookController from "../controller/registerBookController";
import listAllBookController from "../controller/listAllBookController";

import { verifyToken } from "../middleware/verifyToken";

import configUpaload from "../config/upload";

const upload = multer(configUpaload.upload("./images"));

/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: O ID do livro (UUID).
 *           readOnly: true
 *         title:
 *           type: string
 *           description: Título do livro.
 *         author:
 *           type: string
 *           description: Autor do livro.
 *         releaseDate:
 *           type: string
 *           format: date-time
 *           description: Data de lançamento do livro.
 *         pictureName:
 *           type: array
 *           items:
 *             type: string
 *           description: Nomes dos arquivos de imagem associados ao livro.
 *       example:
 *         id: "a1b2c3d4-e5f6-7890-1234-567890abcdef"
 *         title: "O Guia do Mochileiro das Galáxias"
 *         author: "Douglas Adams"
 *         releaseDate: "1979-10-12T00:00:00.000Z"
 *         pictureName: ["galaxy-cover.jpg", "towel.png"]
 */

/**
 * @swagger
 * tags:
 *   name: Livros
 *   description: Endpoints para gerenciamento de livros
 */

const booksRoutes = Router();

/**
 * @swagger
 * /books:
 *   post:
 *     summary: Cadastra um novo livro com upload de imagens
 *     tags: [Livros]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - author
 *               - releaseDate
 *               - pictureName
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               releaseDate:
 *                 type: string
 *                 format: date
 *                 description: Data de lançamento no formato YYYY-MM-DD.
 *               pictureName:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *                 description: Arquivos de imagem para o livro.
 *     responses:
 *       201:
 *         description: Livro cadastrado com sucesso.
 *       400:
 *         description: Dados inválidos.
 *       401:
 *         description: Não autorizado.
 */
booksRoutes.post(
  "/books",
  verifyToken,
  upload.array("pictureName"),
  registerBookController.handle
);

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Lista todos os livros cadastrados
 *     tags: [Livros]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de livros.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 *       401:
 *         description: Não autorizado.
 */
booksRoutes.get("/books", verifyToken, listAllBookController.handle);

booksRoutes.use(
  "/images",
  express.static(path.resolve(__dirname, "..", "..", "images"))
); // rota que permite
export { booksRoutes };
