import { Router } from "express";

import { login, getMe } from "../controllers/auth.controller"
import { requireAuth } from "../middlewares/auth.middleware";


const authRouter = Router();

authRouter.post("/login", login);
authRouter.get("/me", requireAuth, getMe);

export default authRouter;
