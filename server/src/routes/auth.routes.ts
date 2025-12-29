import { Router } from "express";
import { login, getMe } from "../controllers/auth.controller"

const authRouter = Router();

authRouter.post("/login", login);
authRouter.get("/me",getMe);

export default authRouter;
