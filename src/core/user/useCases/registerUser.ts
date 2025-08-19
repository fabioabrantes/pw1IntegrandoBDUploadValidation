import { AppErrosCustom } from "../../../errors/appError";
import repositoryUserPrisma from "../../../repositories/prismaRepository/repositoryUserPrisma";
import { UserModel } from "../entity/User";

class RegisterUserUseCase {
  async execute(user: Omit<UserModel, "id">) {
    let userExistCpf = await repositoryUserPrisma.findByCpf(user.cpf);
    if (userExistCpf !== null) {
      throw new AppErrosCustom("Cliente já existe no banco com esse cpf", 400);
    }

    let userExistEmail = await repositoryUserPrisma.findByEmail(user.email);

    if (userExistEmail !== null) {
      throw new AppErrosCustom(
        "Cliente já existe no banco com esse email",
        400
      );
    }

    const userBD = await repositoryUserPrisma.registerUser(user);
    return { body: userBD, status: 201 };
  }
}

export default new RegisterUserUseCase();
