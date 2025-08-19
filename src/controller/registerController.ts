import { Request, Response } from "express";
import { hash } from "bcryptjs";

import RegisterUserUseCase from "../core/user/useCases/registerUser";
import { validateZodUser } from "../service/zodValidations";
import { AppErrorsZod } from "../errors/appErrorsZod";

type Params = {
  cpf: string;
  name: string;
  email: string;
  password: string;
};
class RegisterUserController {
  async handle(req: Request, res: Response) {
    const { cpf, name, email, password } = req.body as Params;
    console.log(process.env.DATABASE_URL)
    // validar os campos cpf, name e email usando a lib zod
    const resultValidation = validateZodUser({ cpf, name, email, password });
    if (resultValidation) {
      throw new AppErrorsZod(resultValidation.fieldErrors, 400);
    }

    let passwordCRiptografado = await hash(password, 4);

    const result = await RegisterUserUseCase.execute({
      cpf,
      name,
      email,
      password: passwordCRiptografado,
    });

    res.status(result.status).json(result.body);
  }
}

export default new RegisterUserController();
