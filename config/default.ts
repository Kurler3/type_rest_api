import dotenv from "dotenv";
dotenv.config();

export default {
    port: "1337",
    dbUri: process.env.MONGO_DB_URI,
    saltWorkFactor: 10,
    accessTokenTtl: '15m',
    refreshTokenTtl: '1y',
    publicKey: `-----BEGIN PUBLIC KEY-----
    MIIBITANBgkqhkiG9w0BAQEFAAOCAQ4AMIIBCQKCAQBfK1SknclZnfDg5wkodhat
    zC1LARJsgYm7F7VbWiDT1IfsX4hfqh6lo0nNSTWrDRYDzwXOIfSb8reiz/J/L/C9
    YMoX3SpBcHO+PA6x0MF8XsDFlw18xqdFDYSMF/X/vUkoiBSXYy6v5oi2eG92B/Sn
    eeO/BZzZ7ds5bgLe4g30uXAcYqhzXKBrJXN59VE6M/XzLODpFfcy1eoT1zmZ194P
    6sGSNj4s0Fj0IV/549FAVSCG/dkPL5suD8gxwpEYXTAZVYpYeI5PsD01LP8xcuWF
    GNTlNpzrtD3FD3kddzg/99E5Jcntu2GE3kbLfffgm/3ajT0iYxJ5svsgdNciEyYP
    AgMBAAE=
    -----END PUBLIC KEY-----`,
}