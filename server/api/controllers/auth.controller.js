"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = login;
exports.getMe = getMe;
exports.logout = logout;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = require("../models/User");
async function login(req, res) {
    // get user info from req
    const { username, password } = req.body;
    console.log(`login ran for ${username} with pw: ${password}`);
    try {
        // get user info from db
        const query = { name: username, password: password };
        const dbUser = await User_1.User.findOne(query);
        if (dbUser && (username === dbUser.name) && (password === dbUser.password)) {
            // response code
            res.status(200);
            // payload
            const payload = { username: dbUser.name, id: 1, settings: dbUser.settings }; // TODO replace id
            console.log(payload.settings);
            // create jwt
            const secret = process.env.JWT_SECRET;
            const token = jsonwebtoken_1.default.sign(payload, secret, { expiresIn: "3m" });
            // set cookie
            res.cookie(process.env.ACCESS_TOKEN, token, { maxAge: 180000, httpOnly: true });
            // set body and send
            res.json(payload);
        }
        else {
            res.status(401);
            res.json("Unauthorized");
        }
    }
    catch (err) {
        console.log(`error fetching from DB: ${err}`);
    }
}
async function getMe(req, res) {
    try {
        const userinfo = req.user;
        console.log(`getMe: ${userinfo.id}`);
        const query = { name: userinfo.username };
        const user = await User_1.User.findOne();
        const settings = user.settings;
        const payload = { userinfo, settings };
        //const payload = { userinfo, savedSettings };
        res.status(200);
        res.json(payload);
    }
    catch (err) {
        console.log(`error fetching from DB: ${err}`);
    }
}
function logout(req, res) {
    // set cookie expired
    res.cookie(process.env.ACCESS_TOKEN, "", {
        httpOnly: true,
        expires: new Date(0)
    });
    const user = req.user;
    res.status(200);
    res.json({ message: `logged out user ${user.username}` });
}
// // replace with check in db
// if (username === "John" && password === "doe") {
//     // response code
//     res.status(200);
//     // payload
//     const payload = { username: "John", id: 1 }
//     // create jwt
//     const secret = process.env.JWT_SECRET!;
//     const token = jwt.sign(payload, secret, { expiresIn: "3m" });
//     // set cookie
//     res.cookie(process.env.ACCESS_TOKEN!, token, { maxAge: 180000, httpOnly: true });
//     // TODO remove this
//     testDB();
//     // set body and send
//     res.json(payload);
// } else {
//     res.status(401);
//     res.json("Unauthorized");
// }
//# sourceMappingURL=auth.controller.js.map