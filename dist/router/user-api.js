"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_middleware_1 = require("../middleware/user-middleware");
exports.userRouter = express_1.default.Router();
// USER API CHECK AUTHENTICATION USING MIDDLEWARE
exports.userRouter.use(user_middleware_1.userMiddleware);
