import { Router } from "express";

import { login, getMe, logout } from "../controllers/auth.controller"
import { requireAuth } from "../middlewares/auth.middleware";


const authRouter = Router();

authRouter.post("/login", login);
authRouter.get("/me", requireAuth, getMe);
authRouter.post("/logout", requireAuth, logout)

export default authRouter;
