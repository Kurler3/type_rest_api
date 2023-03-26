import jwt from 'jsonwebtoken';
import config from 'config';

import dotenv from "dotenv";
import logger from './logger';
dotenv.config();


const publicKey = config.get<string>("publicKey");
const privateKey = process.env.PRIVATE_KEY

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
        
    } catch (error) {
        logger.error()
    }
}