import express from "express";
import { userMiddleware } from "../middleware/user-middleware";

export const userRouter = express.Router();

// USER API CHECK AUTHENTICATION USING MIDDLEWARE
userRouter.use(userMiddleware);
