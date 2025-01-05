import { PrismaClient } from "@prisma/client";
import { web } from "./app/web";
import { logger } from "./app/logging";
import { NAME_APP, PORT } from "./config/ryoogen";

export const prismaClient = new PrismaClient();

web.listen(PORT, () => {
  logger.info(`Listening on port ${PORT} ${NAME_APP} 👌`);
});
