import {
    Request,
    Response,
} from "express";
import logger from "../utils/logger";
import { createSession } from "../service/session.service";
import { validateUserPassword } from "../service/user.service";
import { signJwt } from "../utils/jwt.utils";
import config from "config";

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
            req.get("user-agent") || "",
        );

        // CREATE AN ACCESS TOKEN
        const accessToken = signJwt(
            // PAYLOAD
            {
                ...user,
                session: session._id,
            },
            {
                expiresIn: config.get<string>("accessTokenTtl") // 15 minutes
            }
        );

        // CREATE A REFRESH TOKEN
        const refreshToken = signJwt(
            {
                ...user,
                session: session._id,
            }, 
            {
                expiresIn: config.get<string>("refreshTokenTtl") // 1 year
            }
        );

        // RETURN ACCESS + REFRESH TOKENS
        return res.status(200).json({
            accessToken,
            refreshToken,
        })

    } catch (error: any) {
        logger.error(error);

        return res.status(400).json({
            message: error.message,
        });
    }
}

export async function getUserSessionsHandler(
    req: Request,
    res: Response
) {
    try {
        
        /////////////////
        // GET USER /////
        /////////////////

        ///////////////////////
        // GET USER SESSIONS //
        ///////////////////////

        // RETURN
        

    } catch (error) {
        
    }
}