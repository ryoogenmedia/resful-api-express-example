import express from "express";
import { authMiddleware } from "../middleware/auth-middleware";
import { userMiddleware } from "../middleware/user-middleware";

export const userRouter = express.Router();

// USER API CHECK AUTHENTICATION USING MIDDLEWARE
userRouter.use(authMiddleware);
userRouter.use(userMiddleware);
