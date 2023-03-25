import mongoose from "mongoose";

// HASH USER PWD
import bcrypt from "bcrypt";

import config from 'config';
import logger from "../utils/logger";
import { HydratedDocument } from 'mongoose';

export interface IUser {
    email: string,
    name: string,
    password: string,
    createdAt: Date,
    updatedAt: Date,
    comparePassword: (candidatePassword: string) => Promise<boolean>
}

const userSchema = new mongoose.Schema<IUser>({
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
    let user = this as HydratedDocument<IUser>;

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
});

// ADD A METHOD TO COMPARE PASSWORD
userSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {

    const user = this as HydratedDocument<IUser>;

    return await bcrypt.compare(candidatePassword, user.password).catch((e) => {
        logger.error(e);
        return false;
    });
}

const UserModel = mongoose.model<IUser>("User", userSchema);

export default UserModel;