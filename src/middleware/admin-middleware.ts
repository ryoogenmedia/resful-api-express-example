import { NextFunction, Response } from "express";
import { UserRequest } from "../type/user-request";
import { Roles } from "../config/ryoogen";
import { checkRole, checkToken } from "../app/helpers/ryoogen-helper";

const adminMiddleware = async (
  res: Response,
  req: UserRequest,
  next: NextFunction
) => {
  const user = await checkToken(res, req, next);
  await checkRole(user, req, next, Roles.ADMIN);
};
