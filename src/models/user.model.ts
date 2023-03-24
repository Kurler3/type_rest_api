import mongoose from "mongoose";

// HASH USER PWD
import bcrypt from "bcrypt";

import config from 'config';

export interface UserDocument extends mongoose.Document{
    email: string,
    name: string,
    password: string,
    createdAt: Date,
    updatedAt: Date,
};

const userSchema = new mongoose.Schema({
    // EMAIL => TYPE STRING, REQUIRED AND UNIQUE
    email: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});

// ADD PRE SAVE HOOK TO THE SCHEMA
// TO ENCRYPT THE PASSWORD BEFORE SAVING IT
userSchema.pre("save", async function(
    next: any
) {
    // INIT USER AS USER DOCUMENT
    let user = this as UserDocument;

    // IF NOT MODIFYING THE PASSWORD => SKIP
    if(!user.isModified('password')) {
        return next();
    }

    // CREATE SALT
    const salt = await bcrypt.genSalt(config.get<number>("saltWorkFactor"));

    // HASH
    const hash = await bcrypt.hash(user.password, salt);

    // REPLACE PWD
    user.password = hash;

    // NEXT
    return next();
})

const UserModel = mongoose.model("User", userSchema);

export default UserModel;