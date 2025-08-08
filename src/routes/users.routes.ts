import { Router } from "express";
import RegisterUserController from '../controller/registerController';
import listAllUsersController from "../controller/listAllUsersController";
import updatedUserController from "../controller/updatedUserController";
import removeUserController from "../controller/removeUserController";
import { verifyToken } from "../middleware/verifyToken";
const usersRoutes = Router();
usersRoutes.post("/users",RegisterUserController.handle);
usersRoutes.get("/users",verifyToken,listAllUsersController.handle);
usersRoutes.put("/users/:id",verifyToken,updatedUserController.handle);
usersRoutes.delete("/users/:id",verifyToken, removeUserController.handle );

export {usersRoutes};