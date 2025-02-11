import express from "express";
import * as dotenv from "dotenv";
import {
  checkAuth,
  login,
  logout,
  signup,
  updateProfile,
} from "../controllers/auth.controller.js";
import { protectedRoute } from "../middleware/auth.middleware.js";

dotenv.config();
const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.post("/logout", logout);

authRouter.put("/update-profile", protectedRoute, updateProfile);
authRouter.get("/check", protectedRoute, checkAuth);

export default authRouter;
