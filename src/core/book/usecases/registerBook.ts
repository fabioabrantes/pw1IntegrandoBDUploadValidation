import { AppErrosCustom } from "../../../errors/appError";
import RepositoryBookPrisma from "../../../repositories/prismaRepository/repositoryBookPrisma";
import repositoryUserPrisma from "../../../repositories/prismaRepository/repositoryUserPrisma";

import { BookModel } from "../entity/Book";

class RegisterBookUseCase {
  async execute(book: Omit<BookModel, "id">) {
    const userExists = await repositoryUserPrisma.findById(book.userId);
    if (!userExists) {
      throw new AppErrosCustom(
        "Error: usuário não existe cadastrado no banco de dados",
        400
      );
    }
    let bookExist = await RepositoryBookPrisma.findByTitle(book.title);
    if (bookExist) {
      throw new AppErrosCustom(
        "Error: livro já está cadastrado no banco de dados",
        400
      );
    }
    const bookBD = await RepositoryBookPrisma.registerBook(book);
    return {
      body: bookBD,
      status: 201,
    };
  }
}

export default new RegisterBookUseCase();
