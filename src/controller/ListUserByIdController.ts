import { Request, Response } from "express";
import ListUserByIdUseCase from "../core/user/useCases/listUserById";


type Params = {
  id: string;
}

class ListUserByIdController {
  async handle(req: Request, res: Response) {
    const { id } = req.params as Params;

    // validar os campos cpf, name e email usando a lib zod
    
    const result = await ListUserByIdUseCase.execute(id);

    res.status(result.status).json(result.body);
  }
}

export default new ListUserByIdController();