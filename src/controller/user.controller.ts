import {
    Request,
    Response
} from "express";
import logger from "../utils/logger";
import { createUser } from "../service/user.service";
import { CreateUserInput } from "../schema/user.schema";
import {
    omit
} from 'lodash';

export async function createUserHandler(
    req: Request<{}, {}, CreateUserInput["body"]>,
    res: Response,
) {
    try {   

        // CREATE USER USING SERVICE
        const user = await createUser(req.body);

        // OMIT PASSWORD
        

        return res.status(201).json({
            message: "User created successfuly!",
            data: omit(user.toJSON(), "password"),
        })

    } catch (error: any) {
        logger.error(error);

        return res.status(400).json({
            message: error.message,
        });
    }
}