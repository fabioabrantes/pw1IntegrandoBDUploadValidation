import { AppErrosCustom } from "../../../errors/appError";
import repositoryUserPrisma from "../../../repositories/prismaRepository/repositoryUserPrisma";
import { UserModel } from "../entity/User";

class UpdatedUserUseCase {
  async execute(id: string, user: Omit<UserModel, "id">) {
    const userExist = await repositoryUserPrisma.findById(id);
    if (!userExist) {
      throw new AppErrosCustom("Cliente já existe no banco", 400);
    }

    const userBD = await repositoryUserPrisma.updateUser(id, user);
    return { body: userBD, status: 200 };
  }
}

export default new UpdatedUserUseCase();
