import dotenv from "dotenv";
dotenv.config();

export default {
    port: "1337",
    dbUri: process.env.MONGO_DB_URI,
    saltWorkFactor: 10,
    publicKey: `-----BEGIN PUBLIC KEY-----
    MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDUanpYftgmWQq8unpp/DjwXhFl
    xEdGTbT/99VLWc0PZwmVw25o2brAhi/wb3k1L2WTgl0Jt4cX4QJ3IiURTAl5UI4a
    OCD4i5tDteQZs8bcj5RIxuKiGUdJjXMiRNuZxp6dpVMrV6CGgh+vJXTEqt68fUgC
    R07LzqwOH7mJGWayJwIDAQAB
    -----END PUBLIC KEY-----`,
}