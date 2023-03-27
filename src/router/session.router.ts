import {
    Router
} from "express";

import {
    createSessionHandler
} from "../controller/session.controller";
import validate from "../middleware/validateResource.middleware";
import { createSessionSchema } from '../schema/session.schema';


const sessionRouter = Router();

///////////////////////
// CREATE SESSION /////
///////////////////////

sessionRouter.post("/create", validate(createSessionSchema), createSessionHandler);

///////////////////////
// GET SESSIONS ///////
///////////////////////



///////////////////////
// EXPORT /////////////
///////////////////////

export default sessionRouter;