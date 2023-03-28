import {
    Router
} from "express";

import {
    createSessionHandler, getUserSessionsHandler
} from "../controller/session.controller";
import validate from "../middleware/validateResource.middleware";
import { createSessionSchema } from '../schema/session.schema';
import requireUserMiddleware from "../middleware/requireUser.middleware";


const sessionRouter = Router();

///////////////////////
// CREATE SESSION /////
///////////////////////

sessionRouter.post("/create", validate(createSessionSchema), createSessionHandler);

///////////////////////
// GET SESSIONS ///////
///////////////////////

sessionRouter.get("/list", requireUserMiddleware, getUserSessionsHandler);

///////////////////////
// DELETE SESSION /////
///////////////////////

sessionRouter.delete("/delete", requireUserMiddleware, getUserSessionsHandler);

///////////////////////
// EXPORT /////////////
///////////////////////

export default sessionRouter;