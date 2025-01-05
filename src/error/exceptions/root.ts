import { ErrorCodes } from "../../config/ryoogen";

export class HttpException extends Error {
  message: string;
  errorCode: ErrorCodes;
  statusCode: number;
  error: any;

  constructor(
    message: string,
    errorCode: ErrorCodes,
    statusCode: number,
    error: any
  ) {
    super(message);
    this.message = message;
    this.errorCode = errorCode;
    this.statusCode = statusCode;
    this.error = error;
  }
}
