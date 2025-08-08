import { Router } from "express";
import { usersRoutes } from "./users.routes";
import { booksRoutes } from "./books.routes";
import { authRoutes } from "./auth.routes";

const routes = Router();
routes.use(booksRoutes);
routes.use(usersRoutes);
routes.use(authRoutes);


export {routes};
