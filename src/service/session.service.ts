import { FilterQuery } from "mongoose";
import SessionModel, { ISession } from "../models/session.model";
import logger from "../utils/logger";

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
