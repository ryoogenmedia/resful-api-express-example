import express from "express";
import { authMiddleware } from "../middleware/auth-middleware";

export const privateRouter = express.Router();

// PRIVATE API CHECK AUTHENTICATION USING MIDDLEWARE
privateRouter.use(authMiddleware);
