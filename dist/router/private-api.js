"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.privateRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_middleware_1 = require("../middleware/auth-middleware");
exports.privateRouter = express_1.default.Router();
// PRIVATE API CHECK AUTHENTICATION USING MIDDLEWARE
exports.privateRouter.use(auth_middleware_1.authMiddleware);
