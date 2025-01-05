"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequest = void 0;
const root_1 = require("./root");
class BadRequest extends root_1.HttpException {
    constructor(message, errorCode) {
        super(message, errorCode, 400, null);
    }
}
exports.BadRequest = BadRequest;
