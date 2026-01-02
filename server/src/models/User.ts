import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    settings: {
        type: Object,
    }
});

export const User = mongoose.model("User", userSchema);

