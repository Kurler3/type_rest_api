import {
    Router
} from "express";
import { createUserHandler } from "../controller/user.controller";

import validate from "../middleware/validateResource";
import { createUserSchema } from '../schema/user.schema';

const userRouter = Router();

/////////////////////////////////
// CREATE USER //////////////////
/////////////////////////////////

userRouter.post("/createUser", validate(createUserSchema), createUserHandler);

/////////////////////////////////
// EXPORT ROUTER ////////////////
/////////////////////////////////

export default userRouter;