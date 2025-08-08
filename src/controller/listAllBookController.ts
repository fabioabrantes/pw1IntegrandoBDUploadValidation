import { Request, Response } from "express";
import lisAllBooksByUser from "../core/book/usecases/lisAllBooksByUser";

class ListAllBooksByUserController {
  async handle(req: Request, res: Response) {
    // validar os campos cpf, name e email usando a lib zod

    const id = req.userId;

    const result = await lisAllBooksByUser.execute(id);
    const books = result.body;

    const booksViews = books.map((book) => {
      const ImagesBook = book.ImagesBook.map(
        (image) => `${process.env.URL_IMG_BOOK}/${image.pictureName}`
      );
      return {
        ...book,
        ImagesBook,
      };
    });

    res.status(result.status).json({
      books: booksViews,
    });
  }
}

export default new ListAllBooksByUserController();
