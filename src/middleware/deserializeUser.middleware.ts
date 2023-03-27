import {
    Request,
    Response,
    NextFunction,
} from "express";
import logger from "../utils/logger";
import {
    get
} from "lodash";

export default function deserializeUser(
    req: Request,
    res: Response,
    next: NextFunction,
) {

    try {
        
        // GET ACCESS TOKEN FROM REQUEST HEADERS
        const accessToken = get(req, "headers.authorization", "").replace(/^Bearer\s/);



        next();

    } catch (error: any) {

        logger.error(error);

        return res.status(400).json({
            message: error.message
        })

    }

}