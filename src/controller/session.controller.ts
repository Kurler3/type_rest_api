import {
    Request,
    Response,
} from "express";
import logger from "../utils/logger";
import { createSession } from "../service/session.service";
import { validateUserPassword } from "../service/user.service";

export async function createSessionHandler(
    req: Request,
    res: Response,
) {
    try {
        
        // VALIDATE THE USERS PASSWORD
        const isPasswordCorrect = await validateUserPassword(

        );

        if(!isPasswordCorrect) {
            return res.status(403).json({
                message: "Incorrect password!"
            })
        }

        // CREATE A SESSION

        // CREATE AN ACCESS TOKEN

        // CREATE A REFRESH TOKEN

        // RETURN ACCESS + REFRESH TOKENS
        

    } catch (error: any) {
        logger.error(error);

        return res.status(400).json({
            message: error.message,
        });
    }
}