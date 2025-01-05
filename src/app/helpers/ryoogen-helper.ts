import { prismaClient } from "../database";
import { User } from "@prisma/client";
import { BadRequest } from "../../error/exceptions/bad-request";
import { ErrorCodes } from "../../config/ryoogen";
import { UserRequest } from "../../type/user-request";
import { Response, NextFunction } from "express";

export const checkToken = async (
  res: Response,
  req: UserRequest,
  next: NextFunction
): Promise<User> => {
  const token = req.get("X-API-TOKEN");

  if (!token) {
    res
      .status(ErrorCodes.UNAUTHENTICATED)
      .json({
        errors: "Unauthenticated",
      })
      .end();
  }

  const user = await prismaClient.user.findFirst({
    where: {
      token: token,
    },
  });

  if (!user) {
    throw new BadRequest("Unauthorized", ErrorCodes.UNAUTHORIZED);
  }

  next();
  return user;
};

export const checkRole = async (
  user: User,
  req: UserRequest,
  next: NextFunction,
  role: string
) => {
  if (user && role == "superadmin") {
    req.user = user;
    next();
    return;
  }
};
