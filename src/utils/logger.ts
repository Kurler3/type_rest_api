
import pino from "pino";

import dayjs from "dayjs";

// TRANSPORT
const transport = pino.transport({
    target: "pino-pretty",
    options: {colorize: true}
})

const logger = pino({
    base: {
        // PROCESS ID
        pid: false,
    },
    timestamp: () => `,"time":"${dayjs().format()}"`
}, transport)


export default logger;