import { Request, Response } from "express";
import { AuthUserService } from "../../services/user/AuthUserService";

interface AuthRequest {
  name: string;
  password: string;
}


export class AuthUserControler  {

  async handle(req: Request, res: Response){

    const {email, password } = req.body;

    const authUserService = new AuthUserService();

    const auth = await authUserService.execute({email, password});

    return res.json(auth);
  }
}
