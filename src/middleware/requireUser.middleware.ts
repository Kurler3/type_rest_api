import {
    Request,
    Response,
    NextFunction
} from "express";

export default function requireUserMiddleware(
    req: Request,
    res: Response,
    next: NextFunction,
) {

    try {

        const user = res.locals.user;

        if(!user) {

            return res.sendStatus(403);

        }

    } catch (error) {
        
        return res.sendStatus(500);

    }

}