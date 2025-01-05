import express from "express";
import { adminMiddleware } from "../middleware/admin-middleware";

export const adminRouter = express.Router();

// ADMIN API CHECK AUTHENTICATION & ROLES USING MIDDLEWARE
adminRouter.use(adminMiddleware);
