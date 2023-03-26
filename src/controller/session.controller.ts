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
        const user = await validateUserPassword(
            req.body,
        );

        // CREATE A SESSION
        const session = await createSession(
            user._id as unknown as string,
            req.get("user-agend") || "",
        );

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