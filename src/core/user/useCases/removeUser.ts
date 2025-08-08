import { AppErrosCustom } from "../../../errors/appError";
import repositoryUserPrisma from "../../../repositories/prismaRepository/repositoryUserPrisma";

class RemoveUserUseCase {
  async execute(id: string) {
    const userExist = await repositoryUserPrisma.findById(id);
    if (!userExist) {
      throw new AppErrosCustom("Cliente já existe no banco", 400);
    }

    const userBD = await repositoryUserPrisma.removeUser(id);
    return { body: userBD, status: 200 };
  }
}

export default new RemoveUserUseCase();
