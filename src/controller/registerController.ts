import { Request, Response } from "express";
import { hash } from "bcryptjs";

import RegisterUserUseCase from "../core/user/useCases/registerUser";

type Params = {
  cpf: string;
  name: string;
  email: string;
  password: string;
};
class RegisterUserController {
  async handle(req: Request, res: Response) {
    const { cpf, name, email, password } = req.body as Params;
    console.log(cpf)
    // validar os campos cpf, name e email usando a lib zod

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
