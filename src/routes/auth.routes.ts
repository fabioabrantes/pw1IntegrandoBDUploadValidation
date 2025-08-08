import { Router } from "express";
import authenticateController from "../controller/authenticateController";
const authRoutes = Router();
authRoutes.post("/login", authenticateController.handle);

export {authRoutes};
