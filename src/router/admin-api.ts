import express from "express";
import { authMiddleware } from "../middleware/auth-middleware";
import { adminMiddleware } from "../middleware/admin-middleware";

export const adminRouter = express.Router();

// ADMIN API CHECK AUTHENTICATION & ROLES USING MIDDLEWARE
adminRouter.use(authMiddleware);
adminRouter.use(adminMiddleware);
