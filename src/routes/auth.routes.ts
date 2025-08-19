import { Router } from "express";
import authenticateController from "../controller/authenticateController";
const authRoutes = Router();
/**
 * @swagger
 * tags:
 *   name: Autenticação
 *   description: Endpoint para autenticação de usuário
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Autentica um usuário e retorna um token JWT
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *                 format: password
 *     responses:
 *       200:
 *         description: Autenticação bem-sucedida, retornando o token.
 *       400:
 *         description: Credenciais inválidas.
 */
authRoutes.post("/login", authenticateController.handle);

export { authRoutes };
