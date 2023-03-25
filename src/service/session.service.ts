import SessionModel from "../models/session.model";
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