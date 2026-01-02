import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import authRouter from './routes/auth.routes';
import userRouter from './routes/user.routes';

// create server
const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(cookieParser());

// set env vars
dotenv.config({ path: "./.env" });

// connect to DB
mongoose.connect(process.env.MONGODB_URI!)
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((err) => {
        console.error("MongoDB connection error", err);
    });


// routes
app.use("/", authRouter);
app.use("/user", userRouter);

export default app;