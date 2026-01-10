"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = requireAuth;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jsonwebtoken_2 = require("jsonwebtoken");
function requireAuth(req, res, next) {
    const token = req.cookies.access_token;
    if (!token) {
        return res.status(401).json("Not authenticated: JWT missing");
    }
    try {
        // verify JWT
        const secret = process.env.JWT_SECRET;
        const payload = jsonwebtoken_1.default.verify(token, secret);
        // attach user info (JWT payload) to request
        req.user = payload;
        console.log("requireAuth: token verified");
        next();
    }
    catch (err) {
        if (err instanceof jsonwebtoken_2.TokenExpiredError || err instanceof jsonwebtoken_2.JsonWebTokenError || err instanceof jsonwebtoken_2.NotBeforeError) {
            res.status(401);
            res.json(`Not authenticated: ${err}`);
        }
        else {
            res.status(500);
            res.json(`Internal server error ${err}`);
        }
    }
}
//# sourceMappingURL=auth.middleware.js.map