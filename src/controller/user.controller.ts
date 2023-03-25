import {
    Request,
    Response
} from "express";
import logger from "../utils/logger";
import { createUser } from "../service/user.service";
import { CreateUserInput } from "../schema/user.schema";

export async function createUserHandler(
    req: Request<{}, {}, CreateUserInput["body"]>,
    res: Response,
) {
    try {   

        // CREATE USER USING SERVICE
        const user = await createUser(req.body);

        return res.status(201).json({
            message: "User created successfuly!",
            data: user,
        })

    } catch (error: any) {
        logger.error(error);

        return res.status(400).send(error.message);
    }
}