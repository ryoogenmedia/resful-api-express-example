import express from "express";
import { publicRouter } from "../router/public-api";
import { privateRouter } from "../router/private-api";
import { errorMiddleware } from "../middleware/error-middleware";

export const web = express();
web.use(express.json());
web.use(publicRouter);
web.use(privateRouter);
web.use(errorMiddleware);
