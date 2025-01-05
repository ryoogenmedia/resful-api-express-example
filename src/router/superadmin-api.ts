import express from "express";
import { authMiddleware } from "../middleware/auth-middleware";
import { superadminMiddleware } from "../middleware/superadmin-middleware";

export const superadminRouter = express.Router();

// SUPERADMIN API CHECK AUTHENTICATION USING MIDDLEWARE
superadminRouter.use(authMiddleware);
superadminRouter.use(superadminMiddleware);
