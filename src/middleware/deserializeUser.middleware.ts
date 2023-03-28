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

        if(expired) {
          return res.status(400).json({
            message: "token expired"
          })
        }

        // IF VALID 
        if(decoded) {

            res.locals.user = decoded;

            return next();

        } else {
            return res.status(400).json({
                message: "Invalid token",
            });
        }

        return next();

    } catch (error: any) {

        logger.error(error);

        return res.status(400).json({
            message: error.message
        })

    }

}