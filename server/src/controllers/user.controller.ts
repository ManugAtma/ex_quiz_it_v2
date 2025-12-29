import { Request, Response } from "express";
import jwt from 'jsonwebtoken';


interface Settings {
    amount: number;
    category: string;
    difficulty: string;
}


const savedSettings = {
    amount: 5,
    category: "",
    difficulty: "",
};

export function updateSettings(req: Request<{}, {}, Settings>, res: Response) {

    try {
        const token = req.cookies.access_token;
        _verifyToken(token);

        const settings = req.body;
        savedSettings.amount = settings.amount;
        savedSettings.category = settings.category;
        savedSettings.difficulty = settings.difficulty;

        console.log(`updateSettings amount: ${settings.amount}`);

    } catch (err) {
        res.status(401);
        res.json(`Unauthorized ${err}`);
    }
}

export function getSettings(req: Request, res: Response) {

    try {
        const token = req.cookies.access_token;
        _verifyToken(token);

        res.json(savedSettings);
        console.log("getSettings");

    } catch (err) {
        res.status(401);
        res.json(`Unauthorized ${err}`);
    }
}


function _verifyToken(token: any) {
    const secret = process.env.JWT_SECRET!;
    jwt.verify(token, secret);
}