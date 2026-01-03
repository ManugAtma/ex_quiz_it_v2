import { Request, Response } from "express";

import { User } from "../models/User";


interface Settings {
    amount: number;
    category: string;
    difficulty: string;
}


export async function updateSettings(req: Request<{}, {}, Settings>, res: Response) {

    try {

        // get user name from request
        const name = req.user!.username;

        // save new settings in DB
        const query = { name };
        const settings = req.body;
        const update = { settings: settings };
        const dbUser = await User.findOneAndUpdate(query, update);

        res.status(200);
        res.json(`settings updated: ${dbUser?.settings}`);

        console.log(`updateSettings, amount: ${dbUser?.settings.amount}`);

    } catch (err) {

        res.status(500);
        res.json(`Internal server error ${err}`);
    }
}

export async function getSettings(req: Request, res: Response) {

    try {

        const user = req.user!;
        const name = user.username;

        const query = { name };
        const dbUser = await User.findOne(query);
        const settings = dbUser?.settings;

        res.status(200);
        res.json(settings);

    } catch (err) {
        res.status(500);
        res.json(`Internal server error ${err}`);
    }
}

 let n = "x";


