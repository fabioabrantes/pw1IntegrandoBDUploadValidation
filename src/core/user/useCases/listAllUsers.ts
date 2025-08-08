import { AppErrosCustom } from "../../../errors/appError";
import repositoryUserPrisma from "../../../repositories/prismaRepository/repositoryUserPrisma";

class LisAllUsersUseCase {
  async execute() {
    const users = await repositoryUserPrisma.findAll();
    if (!users) {
      throw new AppErrosCustom(
        "Error: usuários não existem.",
        400
      );
    }
    return { body: users, status: 200 };
  }
}

export default new LisAllUsersUseCase();
