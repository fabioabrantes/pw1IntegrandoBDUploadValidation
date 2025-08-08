import { Request, Response } from "express";

import RemoveUserUseCase from "../core/user/useCases/removeUser";

type Params = {
  id: string;
}
class RemoveUserController {
  async handle(req: Request, res: Response) {
    const { id } = req.params as Params;

    // validar os campos cpf, name e email usando a lib zod

    const result = await RemoveUserUseCase.execute(id);

    res.status(result.status).json(result.body);
  }
}

export default new RemoveUserController();