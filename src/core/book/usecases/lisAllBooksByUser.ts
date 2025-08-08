import RepositoryBookPrisma from "../../../repositories/prismaRepository/repositoryBookPrisma";
import { AppErrosCustom } from "../../../errors/appError";

class ListAllBookByUserUseCase {
  async execute(userId: string) {
    const allBooksUserBD = await RepositoryBookPrisma.getAllBooks(userId);

    return { body: allBooksUserBD, status: 200 };
  }
}

export default new ListAllBookByUserUseCase();
