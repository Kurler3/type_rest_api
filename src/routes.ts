import {
  Express,
  Request,
  Response
} from "express";

////////////////////////////////////
// ROUTERS /////////////////////////
////////////////////////////////////

import userRouter from "./router/user.router";

function routes(app: Express) {
    
  // HEALTH CHECK
  app.get("/heathcheck", (
    req: Request,
    res: Response,
  ) => {

    res.sendStatus(200)

  });

  

  ///////////////////////////////////////
  // USERS //////////////////////////////
  ///////////////////////////////////////

  app.use("/api/users", userRouter);


}


export default routes;