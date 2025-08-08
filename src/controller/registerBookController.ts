import { Request, Response } from "express";

import RegisterBookUseCase from "../core/book/usecases/registerBook";
import { validateZodBook } from "../service/zodValidations";
import { AppErrorsZod } from "../errors/appErrorsZod";

type ParamsBody = {
  author: string;
  title: string;
  descriptionType: string;
};

class RegisterBookController {
  async handle(req: Request, res: Response) {
    const { author, title, descriptionType } = req.body as ParamsBody;
    const id = req.userId;
    const files = req.files as Express.Multer.File[];
    const fileNames = files.map((file) => ({ pictureName: file.filename })); //alterei aqui por que ImagesBook: { pictureName: string }[];

    // validar os campos cpf, name e email usando a lib zod

    const book = {
      author,
      title,
      descriptionType,
      userId: id,
      ImagesBook: fileNames,
    };
    const resultadoVal = validateZodBook(book);
    if (resultadoVal) {
      throw new AppErrorsZod(resultadoVal.fieldErrors, 400);
    }

    const result = await RegisterBookUseCase.execute(book);

    res.status(result.status).json(result.body);
  }
}

export default new RegisterBookController();
