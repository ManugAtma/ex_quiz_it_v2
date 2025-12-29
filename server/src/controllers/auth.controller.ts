import { Request, Response } from "express";
import jwt from "jsonwebtoken";

interface LoginPayload {
    username: string;
    password: string;
}

export async function login(req: Request<{}, {}, LoginPayload>, res: Response) {
    const { username, password } = req.body;
    console.log(`login ran for ${username} with pw: ${password}`);

    // replace with check in db
    if (username === "g" && password === "g") {
        
        // response code
        res.status(200);

        // payload
        const payload = {username: "g", id: 1}
       
        
        // create jwt
        const secret = process.env.JWT_SECRET!;
        const token = jwt.sign(payload, secret, { expiresIn: "3m" });

        // set cookie
        res.cookie("access_token", token, {maxAge: 180000, httpOnly: false } );

        // set body and send
        res.json(payload);

    } else {
        res.status(401);
        res.json("Unauthorized");
    }
}

export async function getMe(req: Request, res: Response) { }