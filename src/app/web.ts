import express from "express";
import { publicRouter } from "../router/public-api";
import { privateRouter } from "../router/private-api";
import { errorMiddleware } from "../middleware/error-middleware";
import { adminRouter } from "../router/admin-api";
import { superadminRouter } from "../router/superadmin-api";
import { userRouter } from "../router/user-api";

export const web = express();
web.use(express.json());
web.use(publicRouter);
web.use(privateRouter);
web.use(errorMiddleware);
