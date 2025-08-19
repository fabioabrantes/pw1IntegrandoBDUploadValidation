import { Router } from "express";
import RegisterUserController from "../controller/registerController";
import listAllUsersController from "../controller/listAllUsersController";
import updatedUserController from "../controller/updatedUserController";
import removeUserController from "../controller/removeUserController";
import { verifyToken } from "../middleware/verifyToken";
const usersRoutes = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: O ID do usuário (UUID).
 *           readOnly: true
 *         name:
 *           type: string
 *           description: Nome do usuário.
 *         email:
 *           type: string
 *           format: email
 *           description: Email do usuário.
 *       example:
 *         id: "c1b3a2f0-5e6d-4b8c-9d0a-1f2b3c4d5e6f"
 *         name: "John Doe"
 *         email: "john.doe@example.com"
 *     UserInput:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         name:
 *           type: string
 *           description: Nome do usuário.
 *         email:
 *           type: string
 *           format: email
 *           description: Email do usuário.
 *         password:
 *           type: string
 *           format: password
 *           description: Senha do usuário.
 *           writeOnly: true
 *     UserUpdateInput:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Novo nome do usuário.
 *         email:
 *           type: string
 *           format: email
 *           description: Novo email do usuário.
 *         password:
 *           type: string
 *           format: password
 *           description: Nova senha do usuário.
 *           writeOnly: true
 *     Error:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: Mensagem de erro.
 */

/**
 * @swagger
 * tags:
 *   name: Usuários
 *   description: Endpoints para gerenciamento de usuários
 */

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [Usuários]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserInput'
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Dados inválidos ou email já em uso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
usersRoutes.post("/users", RegisterUserController.handle);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Lista todos os usuários
 *     tags: [Usuários]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuários.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       401:
 *         description: Não autorizado.
 */
usersRoutes.get("/users", verifyToken, listAllUsersController.handle);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Atualiza um usuário pelo ID
 *     tags: [Usuários]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserUpdateInput'
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Dados inválidos.
 *       401:
 *         description: Não autorizado.
 *       404:
 *         description: Usuário não encontrado.
 */
usersRoutes.put("/users/:id", verifyToken, updatedUserController.handle);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Remove um usuário pelo ID
 *     tags: [Usuários]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do usuário
 *     responses:
 *       204:
 *         description: Usuário removido com sucesso.
 *       401:
 *         description: Não autorizado.
 *       404:
 *         description: Usuário não encontrado.
 */
usersRoutes.delete("/users/:id", verifyToken, removeUserController.handle);

export { usersRoutes };
