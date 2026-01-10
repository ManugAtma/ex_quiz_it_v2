"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const allowedOrigins = [
    "http://localhost:5173", // local dev
    process.env.FRONTEND_URL // deployed frontend
];
// create server
const app = (0, express_1.default)();
app.use(express_1.default.json());
// app.use(cors({
//     origin: "http://localhost:5173",
//     credentials: true
// }));
app.use((0, cors_1.default)({
    origin: (origin, callback) => {
        if (!origin)
            return callback(null, true); // allow Postman/server-to-server
        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        }
        else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true
}));
app.use((0, cookie_parser_1.default)());
// set env vars
dotenv_1.default.config({ path: "./.env" });
// connect to DB
mongoose_1.default.connect(process.env.MONGODB_URI)
    .then(() => {
    console.log("MongoDB connected successfully");
})
    .catch((err) => {
    console.error("MongoDB connection error", err);
});
// routes
app.use("/", auth_routes_1.default);
app.use("/user", user_routes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map