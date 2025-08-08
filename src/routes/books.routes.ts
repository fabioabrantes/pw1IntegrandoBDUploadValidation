import express, { Router } from "express";
import multer from "multer";
import path from "node:path";

import registerBookController from "../controller/registerBookController";
import listAllBookController from "../controller/listAllBookController";

import { verifyToken } from "../middleware/verifyToken";

import configUpaload from "../config/upload";

const upload = multer(configUpaload.upload("./images"));

const booksRoutes = Router();
booksRoutes.post(
  "/books",
  verifyToken,
  upload.array("pictureName"),
  registerBookController.handle
);

booksRoutes.get("/books", verifyToken, listAllBookController.handle);

booksRoutes.use(
  "/images",
  express.static(path.resolve(__dirname, "..", "..", "images"))
); // rota que permite
export { booksRoutes };
