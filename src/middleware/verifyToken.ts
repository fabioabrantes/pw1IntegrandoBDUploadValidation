import { Request, Response, NextFunction, response } from "express";
import { verify } from "jsonwebtoken";
export function verifyToken(req: Request, res: Response, next: NextFunction) {
  const header = req.headers.authorization;

  if (!header) {
    res.status(401).json({ message: "Error Unauthorized: token not provided" });
    return;
  }

  try {
    const [bearer, token] = header.split(" "); /* Bearer lmfsfssfmfsmfsç */
    const payload = verify(token, process.env.TOKEN_KEY!);
    req.userId = payload.sub as string;
    next();
  } catch (error) {
    res.status(401).json({ message: "Error Unauthorized: token invalid" });
  }
}
