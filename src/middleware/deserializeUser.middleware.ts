import {
    Request,
    Response,
    NextFunction,
} from "express";
import logger from "../utils/logger";
import {
    get
} from "lodash";
import { verifyJwt } from "../utils/jwt.utils";

export default function deserializeUser(
    req: Request,
    res: Response,
    next: NextFunction,
) {

    try {
        
        // GET ACCESS TOKEN FROM REQUEST HEADERS
        const accessToken = get(req, "headers.authorization", "").replace(/^Bearer\s/, "");

        // IF NO ACCESS TOKEN => RETURN NEXT
        if(!accessToken) {
            return next();
        }

        // OTHERWISE, VERIFY THE TOKEN
        const {
            expired,
            decoded,
        } = verifyJwt(accessToken);

        // IF EXPIRED => ERROR BACK TO CLIENT AS TOKEN EXPIRED
        if(expired) {

          // TRY TO FIND A REFRESH TOKEN
          const refreshToken = (get(req, "headers.x-refresh-token", "") as string).replace(/^Bearer\s/, "");

          if(refreshToken) {

            // VERIFY
            const {
                expired,
                decoded  
            } = verifyJwt(refreshToken);

            // IF IS EXPIRED 
            if(expired) {
                return res.status(400).json({
                    message: "Access token and refresh token expired!"
                })
            }

            // IF VALID => RE-ISSUE A ACCESS TOKEN
            if(decoded) {

            }

          } else {
            return res.status(400).json({
                message: "token expired"
            })
          }
          
        }

        // IF VALID 
        if(decoded) {
            res.locals.user = decoded;
        }

        return next();

    } catch (error: any) {

        logger.error(error);

        return res.status(400).json({
            message: error.message
        })

    }

}