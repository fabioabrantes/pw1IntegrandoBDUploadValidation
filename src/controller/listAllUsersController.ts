import { Request, Response } from "express";

import ListAllUserUseCase from "../core/user/useCases/listAllUsers";


class ListAllUsersController {
  async handle(req: Request, res: Response) {


    const result = await ListAllUserUseCase.execute();

    res.status(result.status).json(result.body);
  }
}

export default new ListAllUsersController();