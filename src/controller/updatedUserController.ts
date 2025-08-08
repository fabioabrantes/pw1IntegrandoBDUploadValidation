import { Request, Response } from "express";
import { hash } from "bcryptjs";

import UpdatedUserUseCase from "../core/user/useCases/updatedUser";

type ParamsBody = {
  cpf: string;
  name: string;
  email: string;
  password: string;
};
type Params = {
  id: string;
};

class UpdatedUserController {
  async handle(req: Request, res: Response) {
    const { cpf, name, email, password } = req.body as ParamsBody;
    const { id } = req.params as Params;

    // validar os campos cpf, name e email usando a lib zod

    let passwordCRiptografado = await hash(password, 4);
    const user = {
      cpf,
      name,
      email,
      password: passwordCRiptografado,
    };

    const result = await UpdatedUserUseCase.execute(id, user);

    res.status(result.status).json(result.body);
  }
}

export default new UpdatedUserController();
