import jwt from 'jsonwebtoken';
import config from 'config';

import dotenv from "dotenv";
import logger from './logger';
dotenv.config();


const publicKey = config.get<string>("publicKey");
const privateKey = JSON.parse(process.env.PRIVATE_KEY!).privateKey

export const signJwt = (
    object: Object, options?: jwt.SignOptions | undefined
) => jwt.sign(
        object,
        privateKey!,
        {
            ...(options && options),
            algorithm: 'RS256'
        }
)


export const verifyJwt = (token: string) => {
    
    try {

        const decoded = jwt.verify(
            token,
            publicKey,
        );

        return {
            valid: true,
            expired: false,
            decoded,
        }

    } catch (error: any) {
        logger.error("Error while verifying jwt: ", error);

        return {
            valid: false,
            expired: error.message === "jwt expired",
            decoded: null,
        }
    }
}