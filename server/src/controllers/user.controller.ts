import { Request, Response } from "express";
import jwt, { JsonWebTokenError, NotBeforeError, TokenExpiredError } from 'jsonwebtoken';


interface Settings {
    amount: number;
    category: string;
    difficulty: string;
}

// TODO replace with DB calls in functions
const savedSettings = {
    amount: 5,
    category: "",
    difficulty: "",
};

export function updateSettings(req: Request<{}, {}, Settings>, res: Response) {

    try {

        const settings = req.body;
        savedSettings.amount = settings.amount;
        savedSettings.category = settings.category;
        savedSettings.difficulty = settings.difficulty;

        res.status(200);
        res.json(`settings updated: ${settings}`);

        console.log(`updateSettings, amount: ${settings.amount}`);

    } catch (err) {

        res.status(500);
        res.json(`Internal server error ${err}`);
    }
}

export function getSettings(req: Request, res: Response) {

    try {
        res.status(200);
        res.json(savedSettings);
        console.log("getSettings");

    } catch (err) {
        res.status(500);
        res.json(`Internal server error ${err}`);
    }
}


