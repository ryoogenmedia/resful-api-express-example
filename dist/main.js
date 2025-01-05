"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaClient = void 0;
const client_1 = require("@prisma/client");
const web_1 = require("./app/web");
const logging_1 = require("./app/logging");
const ryoogen_1 = require("./config/ryoogen");
exports.prismaClient = new client_1.PrismaClient();
web_1.web.listen(ryoogen_1.PORT, () => {
    logging_1.logger.info(`Listening on port ${ryoogen_1.PORT} ${ryoogen_1.NAME_APP}👌`);
});
