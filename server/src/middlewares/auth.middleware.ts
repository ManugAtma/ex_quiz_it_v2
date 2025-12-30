import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { JsonWebTokenError, NotBeforeError, TokenExpiredError } from 'jsonwebtoken';

import type { UserPayload } from "../types/express";



export function requireAuth(req: Request, res: Response, next: NextFunction) {

    const token = req.cookies.access_token;

    if (!token) {
        return res.status(401).json("Not authenticated: JWT missing");
    }

    try {
        // verify JWT
        const secret = process.env.JWT_SECRET!;
        const payload = jwt.verify(token, secret) as UserPayload;

        // attach user info (JWT payload) to request
        req.user = payload;

        console.log("requireAuth: token verified");

        next();

    } catch (err) {

        if (err instanceof TokenExpiredError || err instanceof JsonWebTokenError || err instanceof NotBeforeError) {
            res.status(401);
            res.json(`Not authenticated: ${err}`);
        } else {
            res.status(500);
            res.json(`Internal server error ${err}`);
        }
    }
}