import {
    HydratedDocument  
} from "mongoose";
import UserModel, { IUser } from "../models/user.model";
import logger from "../utils/logger";


export async function createUser(
    input: Omit<IUser, 'createdAt' | 'updatedAt' | 'comparePassword'>
) {
    try {
        
        return await UserModel.create(input);

    } catch (error) {
        logger.error(error);

        throw new Error(error as string);
    }
}