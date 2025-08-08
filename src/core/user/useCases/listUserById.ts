import { AppErrosCustom } from "../../../errors/appError";
import repositoryUserPrisma from "../../../repositories/prismaRepository/repositoryUserPrisma";

class ListUserByIdUseCase {
  async execute(id: string) {
    const userExist = await repositoryUserPrisma.findById(id);
    if (!userExist) {
      throw new AppErrosCustom("usuários já existe no banco", 400);
    }

    return { body: userExist, status: 200 };
  }
}

export default new ListUserByIdUseCase();
