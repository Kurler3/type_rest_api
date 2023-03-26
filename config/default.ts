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
    // privateKey: `-----BEGIN RSA PRIVATE KEY-----
    // MIICXQIBAAKBgQDUanpYftgmWQq8unpp/DjwXhFlxEdGTbT/99VLWc0PZwmVw25o
    // 2brAhi/wb3k1L2WTgl0Jt4cX4QJ3IiURTAl5UI4aOCD4i5tDteQZs8bcj5RIxuKi
    // GUdJjXMiRNuZxp6dpVMrV6CGgh+vJXTEqt68fUgCR07LzqwOH7mJGWayJwIDAQAB
    // AoGBAI020GlewnIUBhhb3J/zJyNdVjGSoFOzu13kNC+o3rObq3qd9xvLi+UMEHjG
    // kwzxmpTLOPEJyszsMMhkscHjC/QdKUZOj8hNEQ6qDRXlIesGD0YCrGktIuWDnLnl
    // q89ZjEOs6nCTArzYLK5PS2uEq5kICqac7wT+jzjLdXgA4fpxAkEA92ZjFjeNoxKk
    // pIT1VeEdrjiwrQhpPlA+esCYbhGqmzguiNT8vlmadMs3aiGDGBRUteA7SFjIstIS
    // /RYkcATICQJBANvMxJhBJig/gVkFmJxwnKR7wGus68kzxWPB9xKQfK8/gYZZeTHH
    // rA3Wirvok83GyCSkuPYUO0KDN8BUaipHVK8CQAECBsdRZJ9UdR1CeWlnKGLMUlPy
    // I9OgKhD/9d8E7WgCe5YNIBZ6cPmm1kv1ZP5VHt860aMC0ZaA6pjjXTSjoFkCQQC7
    // JaGqpaYQlOnUW4ByiyvEnR3cUHK+cNc7tjZh1yZirObi9qHLceCcM7USg9f9WKin
    // Ep3t4JIIcuNwXi+66ds/AkAA5OKQSpVMrEJt9LYaxOtk63QTOKoWBHAuDMdNXilT
    // 7+elF+zVPmpQCMGLjZ5cGBnHKXdsTATIaA5nCaz07bfa
    // -----END RSA PRIVATE KEY-----`
}