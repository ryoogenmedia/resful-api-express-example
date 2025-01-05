import { PrismaClient } from "@prisma/client";
import { web } from "./app/web";
import { logger } from "./app/logging";

export const prismaClient = new PrismaClient();

web.listen(3000, () => {
  logger.info("Listening on port 3000 👌");
});
