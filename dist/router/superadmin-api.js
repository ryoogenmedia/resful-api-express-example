"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.superadminRouter = void 0;
const express_1 = __importDefault(require("express"));
const superadmin_middleware_1 = require("../middleware/superadmin-middleware");
exports.superadminRouter = express_1.default.Router();
// SUPERADMIN API CHECK AUTHENTICATION USING MIDDLEWARE
exports.superadminRouter.use(superadmin_middleware_1.superadminMiddleware);
