"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRouter = void 0;
const express_1 = __importDefault(require("express"));
const admin_middleware_1 = require("../middleware/admin-middleware");
exports.adminRouter = express_1.default.Router();
// ADMIN API CHECK AUTHENTICATION & ROLES USING MIDDLEWARE
exports.adminRouter.use(admin_middleware_1.adminMiddleware);
