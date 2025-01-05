import { Response, NextFunction } from "express";
import { UserRequest } from "../type/user-request";
import { ErrorCodes } from "../config/ryoogen";
import { checkToken } from "../app/helpers/ryoogen-helper";

export const authMiddleware = async (
  req: UserRequest,
  res: Response,
  next: NextFunction
) => {
  await checkToken(res, req, next);

  res
    .status(ErrorCodes.UNAUTHORIZED)
    .json({
      errors: "Unauthorized",
    })
    .end();
};
