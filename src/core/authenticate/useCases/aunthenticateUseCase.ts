import { sign } from "jsonwebtoken";
import { compare } from "bcryptjs";

import repositoryUserPrisma from "../../../repositories/prismaRepository/repositoryUserPrisma";
import { AuthenticateModel } from "../entity/Authenticate";
import { AppErrosCustom } from "../../../errors/appError";

type ParamsBody = {
  email: string;
  password: string;
};

class Authenticate {
  async execute({ email, password }: ParamsBody) {
    ///validação verificando se o usario já está cadastrrado
    const userExist = await repositoryUserPrisma.findByEmail(email);
    if (!userExist) {
      throw new AppErrosCustom(
        "Error Authentications: email or password not is register",
        401
      );
    }

    const passwordExist = await compare(password, userExist.password);
    if (!passwordExist) {
      throw new AppErrosCustom(
        "Error Authentications: email or password not is register",
        401
      );
    }
    const token = sign({ sub: userExist.id }, process.env.TOKEN_KEY!, {
      expiresIn: "1d",
    });

    return { body: { token }, status: 200 };
  }
}

export default new Authenticate();
