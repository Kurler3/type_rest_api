import { omit } from "lodash";
import UserModel, { IUser } from "../models/user.model";
import logger from "../utils/logger";


export async function createUser(
    input: Omit<IUser, 'createdAt' | 'updatedAt' | 'comparePassword'>
) {
    try {
        
        const newUser = await UserModel.create(input);

        // OMIT THE PASSWORD FROM THE USER
        return omit(newUser.toJSON(), "password");

    } catch (error) {
        logger.error(error);

        throw new Error(error as string);
    }
}

export async function validateUserPassword({
    email,
    password,
}: {email: string; password: string}) {
    try {

        const user = await UserModel.findOne({email: email});

        // IF DIDN'T FIND USER WITH THAT EMAIL => ERROR
        if(!user) {
            throw new Error(`User with email "${email}" doesn't exist!`);
        }

        // COMPARE PASSWORD
        const isPasswordCorrect = await user.comparePassword(password);

        // IF NOT CORRECT => THROW ERROR
        if(!isPasswordCorrect) {
            throw new Error('Incorrect credentials');
        }

        return omit(user.toJSON(), "password");

    } catch (error) {
        logger.error(error);

        throw new Error(error as string);
    }
}