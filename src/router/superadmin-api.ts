import express from "express";
import { superadminMiddleware } from "../middleware/superadmin-middleware";

export const superadminRouter = express.Router();

// SUPERADMIN API CHECK AUTHENTICATION USING MIDDLEWARE
superadminRouter.use(superadminMiddleware);
