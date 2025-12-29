import { Router } from "express";
import { updateSettings, getSettings } from "../controllers/user.controller";

const userRouter = Router();

userRouter.put("/:id/settings", updateSettings);
userRouter.get("/:id/settings", getSettings);

// TODO
// get stats
// post stats

export default userRouter;