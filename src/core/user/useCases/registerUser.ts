import { AppErrosCustom } from "../../../errors/appError";
import repositoryUserPrisma from "../../../repositories/prismaRepository/repositoryUserPrisma";
import { UserModel } from "../entity/User";

class RegisterUserUseCase {
  async execute(user: Omit<UserModel, "id">) {
    let userExist = await repositoryUserPrisma.findByCpf(user.cpf);

    if (userExist !== null) {
      throw new AppErrosCustom("Cliente já existe no banco", 400);
    }

    const userBD = await repositoryUserPrisma.registerUser(user);
    return { body: userBD, status: 201 };
  }
}

export default new RegisterUserUseCase();
