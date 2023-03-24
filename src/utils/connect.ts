import mongoose from "mongoose";
import config from "config";
import logger from "./logger";

async function connect() {

  // GET DB URI
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);

    logger.info('Db is connected!');

  } catch (error) {
    logger.error("Error while connection to db: ", error);

    // EXIT PROCESS
    process.exit(1);
  }
}

export default connect;
