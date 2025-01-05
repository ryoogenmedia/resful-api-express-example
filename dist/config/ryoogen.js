"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NAME_APP = exports.PORT = exports.ErrorCodes = exports.Roles = void 0;
var Roles;
(function (Roles) {
    Roles["SUPERADMIN"] = "superadmin";
    Roles["ADMIN"] = "admin";
    Roles["USER"] = "user";
})(Roles || (exports.Roles = Roles = {}));
var ErrorCodes;
(function (ErrorCodes) {
    ErrorCodes[ErrorCodes["UNAUTHENTICATED"] = 401] = "UNAUTHENTICATED";
    ErrorCodes[ErrorCodes["UNAUTHORIZED"] = 403] = "UNAUTHORIZED";
    ErrorCodes[ErrorCodes["PAGE_EXPIRED"] = 419] = "PAGE_EXPIRED";
    ErrorCodes[ErrorCodes["VALIDATION_ERROR"] = 400] = "VALIDATION_ERROR";
    ErrorCodes[ErrorCodes["SERVER_ERROR"] = 500] = "SERVER_ERROR";
})(ErrorCodes || (exports.ErrorCodes = ErrorCodes = {}));
exports.PORT = (_a = Number(process.env.LISTENING_PORT)) !== null && _a !== void 0 ? _a : 3000;
exports.NAME_APP = (_b = String(process.env.NAME_APP)) !== null && _b !== void 0 ? _b : "Ryoogen Media";
