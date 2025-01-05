import { Response, NextFunction } from "express";
import { UserRequest } from "../type/user-request";
import { prismaClient } from "../app/database";
import { Roles } from "../config/ryoogen";

export const superadminMiddleware = async (
  req: UserRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.get("X-API-TOKEN");

  if (token) {
    const user = await prismaClient.user.findFirst({
      where: {
        token: token,
      },
    });

    if (user && user.roles == Roles.SUPERADMIN) {
      req.user = user;
      next();
      return;
    }
  }

  res
    .status(401)
    .json({
      errors: "Unauthorized",
    })
    .end();
};
