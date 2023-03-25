import mongoose from "mongoose";
import { IUser } from './user.model';
import { HydratedDocument } from 'mongoose';

export interface ISession {
    user: HydratedDocument<IUser>['_id'];
    valid: boolean;
    userAgent: string;
    createdAt: Date;
    updatedAt: Date;
}

// SCHEMA
const SessionSchema = new mongoose.Schema<ISession>({
    // OBJECT ID => REFERENCE TO User MODEL
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    valid: {
        type: Boolean,
        default: true,
    },
    // DEVICE WHERE USER LOGGED IN 
    userAgent: {
        type: String,
    }
}, {
    timestamps: true,
});

// MODEL
const SessionModel =  mongoose.model<ISession>("Session", SessionSchema);

// EXPORT MODEL
export default SessionModel;