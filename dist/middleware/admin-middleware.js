"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminMiddleware = void 0;
const database_1 = require("../app/database");
const ryoogen_1 = require("../config/ryoogen");
const adminMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.get("X-API-TOKEN");
    if (token) {
        const user = yield database_1.prismaClient.user.findFirst({
            where: {
                token: token,
            },
        });
        if (user && user.roles == ryoogen_1.Roles.ADMIN) {
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
});
exports.adminMiddleware = adminMiddleware;
