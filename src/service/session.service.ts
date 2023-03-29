import { FilterQuery, UpdateQuery } from "mongoose";
import SessionModel, { ISession } from "../models/session.model";
import logger from "../utils/logger";
import { signJwt, verifyJwt } from '../utils/jwt.utils';
import { get } from "lodash";
import { findUser } from "./user.service";
import config from "config";

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

    // DECODE REFRESH TOKEN
    const {
        decoded
    } = verifyJwt(refreshToken);

    // CHECK IF REFRESH TOKEN IS VALID
    if(!decoded || get(decoded, "_id", null) === null) {
       throw new Error("Refresh token not valid!")
    }

    // GET SESSION
    const session = await SessionModel.findById(get(decoded, "session"));

    // IF NO SESSION => RETURN FALSE
    if(!session || !get(session, "valid")) return false;
    
    
    // FIND USER FOR THAT SESSION
    const user = await findUser({_id: session.user});

    // IF NOT FOUND => RETURN FALSE
    if(!user) return false;


    // CREATE NEW ACCESS TOKEN
    const newAccessToken = signJwt(
        {...user, session: session._id},
        {expiresIn: config.get<string>("accessTokenTtl")}
    );

  
    return newAccessToken;
    
}