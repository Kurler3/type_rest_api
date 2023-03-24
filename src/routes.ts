import {
  Express,
  Request,
  Response
} from "express";

function routes(app: Express) {
    
  // HEALTH CHECK
  app.get("/heathcheck", (
    req: Request,
    res: Response,
  ) => {

    res.sendStatus(200)

  })

}


export default routes;