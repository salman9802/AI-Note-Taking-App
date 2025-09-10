"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REFRESH_TOKEN_COOKIE_PATH = exports.DEFAULT_COOKIE_OPTIONS = void 0;
const env_1 = require("./env");
exports.DEFAULT_COOKIE_OPTIONS = {
    sameSite: env_1.ENV.NODE_ENV === "production" ? "none" : "lax",
    httpOnly: true,
    secure: env_1.ENV.NODE_ENV === "production",
    signed: true,
};
exports.REFRESH_TOKEN_COOKIE_PATH = "/user/access";
