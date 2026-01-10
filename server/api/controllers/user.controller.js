"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSettings = updateSettings;
exports.getSettings = getSettings;
const User_1 = require("../models/User");
async function updateSettings(req, res) {
    try {
        // get user name from request
        const name = req.user.username;
        // save new settings in DB
        const query = { name };
        const settings = req.body;
        const update = { settings: settings };
        const dbUser = await User_1.User.findOneAndUpdate(query, update);
        res.status(200);
        res.json(`settings updated: ${dbUser?.settings}`);
        console.log(`updateSettings, amount: ${dbUser?.settings.amount}`);
    }
    catch (err) {
        res.status(500);
        res.json(`Internal server error ${err}`);
    }
}
async function getSettings(req, res) {
    try {
        const user = req.user;
        const name = user.username;
        const query = { name };
        const dbUser = await User_1.User.findOne(query);
        const settings = dbUser?.settings;
        res.status(200);
        res.json(settings);
    }
    catch (err) {
        res.status(500);
        res.json(`Internal server error ${err}`);
    }
}
let n = "x";
//# sourceMappingURL=user.controller.js.map