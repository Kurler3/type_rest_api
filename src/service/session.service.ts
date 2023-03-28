import { FilterQuery, UpdateQuery } from "mongoose";
import SessionModel, { ISession } from "../models/session.model";
import logger from "../utils/logger";
import { verifyJwt } from '../utils/jwt.utils';
import { get } from "lodash";
import { findUser } from "./user.service";

export async function createSession(
    userId: string,
    userAgent: string,
) {

    try {
        
        const session = await SessionModel.create({
            user: userId,
            userAgent,
        });

        return session.toJSON();

    } catch (error) {
        logger.error(error);

        throw new Error(error as string);
    }

}

export async function findSessions(
    query: FilterQuery<ISession>
) {
    try {
        
        // RETURNS ONLY THE OBJECT DATA, NOT THE FUNCTIONS / IRRELEVANT FIELDS
        return await SessionModel.find(query).lean();
        
    } catch (error: any) {
        logger.error(error);

        throw new Error(error.message);
    }
}

export async function updateSession(
    query: FilterQuery<ISession>,
    update: UpdateQuery<ISession>,
) {

    return SessionModel.updateOne(query, update);

}

export async function reIssueAccessToken(
    {
        refreshToken
    } : {
        refreshToken: string
    }
) {

    const {
        decoded
    } = verifyJwt(refreshToken);

    if(!decoded || get(decoded, "_id", null) === null) {
       throw new Error("Refresh token not valid!")
    }

    const session = await SessionModel.findById(get(decoded, "session"));

    if(!session || !get(session, "valid")) {

        return false;

    }
 
    const user = await findUser({_id: session.user});

    

}