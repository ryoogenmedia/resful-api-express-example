import { ErrorCodes } from "../../config/ryoogen";
import { HttpException } from "./root";

export class BadRequest extends HttpException {
  constructor(message: string, errorCode: ErrorCodes) {
    super(message, errorCode, 400, null);
  }
}
