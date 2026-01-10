"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const authRouter = (0, express_1.Router)();
authRouter.post("/login", auth_controller_1.login);
authRouter.get("/me", auth_middleware_1.requireAuth, auth_controller_1.getMe);
authRouter.post("/logout", auth_middleware_1.requireAuth, auth_controller_1.logout);
exports.default = authRouter;
//# sourceMappingURL=auth.routes.js.map