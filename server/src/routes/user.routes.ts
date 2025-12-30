import { Router } from "express";
import { updateSettings, getSettings } from "../controllers/user.controller";
import { requireAuth } from "../middlewares/auth.middleware";

const userRouter = Router();

userRouter.put("/:id/settings", requireAuth, updateSettings);
userRouter.get("/:id/settings", requireAuth, getSettings);

// TODO
// get stats
// post stats

export default userRouter;