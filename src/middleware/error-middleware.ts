import { Response, Request, NextFunction } from "express";
import { ZodError } from "zod";
import { ResponseError } from "../error/response-error";
import { ErrorCodes } from "../config/ryoogen";

export const errorMiddleware = async (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof ZodError) {
    res.status(ErrorCodes.VALIDATION_ERROR).json({
      errors: `Validation error : ${JSON.stringify(error)}`,
    });
  } else if (error instanceof ResponseError) {
    res.status(error.status).json({
      errors: error.message,
    });
  } else {
    res.status(ErrorCodes.SERVER_ERROR).json({
      errors: error.message,
    });
  }
};
