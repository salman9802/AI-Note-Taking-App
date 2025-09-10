"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserNoteTag = exports.deleteUserNote = exports.updateUserNote = exports.createUserNote = exports.validateSession = exports.validateRefreshToken = exports.deleteUserSession = exports.validateAccessToken = exports.validateUser = exports.unsetRefreshTokenCookie = exports.setRefreshTokenCookie = exports.createAccessAndRefreshTokens = exports.createAccessToken = exports.createUserSession = exports.createUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const client_1 = __importDefault(require("../db/client"));
const sanitize_1 = require("../lib/sanitize");
const env_1 = require("../constants/env");
const cookie_1 = require("../constants/cookie");
const hash_1 = require("../lib/hash");
const error_1 = require("../lib/error");
const http_1 = require("../constants/http");
/** create new user */
const createUser = (newUser) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield client_1.default.user.create({
        data: newUser,
    });
    return (0, sanitize_1.sanitizeUser)(user);
});
exports.createUser = createUser;
/** create new session or update existing one */
const createUserSession = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const existingUserSession = yield client_1.default.userSession.findFirst({
        where: {
            userId,
        },
    });
    if (existingUserSession === null) {
        // create new session
        const userSession = yield client_1.default.userSession.create({
            data: {
                userId,
                expiresAt: new Date(Date.now() + env_1.ENV.REFRESH_TOKEN_INTERVAL),
            },
        });
        return userSession;
    }
    else {
        // update existing one
        const userSession = yield client_1.default.userSession.update({
            data: {
                userId,
                expiresAt: new Date(Date.now() + env_1.ENV.REFRESH_TOKEN_INTERVAL),
            },
            where: {
                userId,
            },
        });
        return userSession;
    }
});
exports.createUserSession = createUserSession;
/** Creates access token from user session */
const createAccessToken = (userSession) => {
    const accessToken = jsonwebtoken_1.default.sign({ id: userSession.id, uid: userSession.userId }, env_1.ENV.ACCESS_TOKEN_SECRET, {
        expiresIn: env_1.ENV.ACCESS_TOKEN_INTERVAL / 1000,
    });
    return accessToken;
};
exports.createAccessToken = createAccessToken;
/** Creates access & refresh tokens from user session */
const createAccessAndRefreshTokens = (userSession) => {
    const refreshToken = jsonwebtoken_1.default.sign({
        id: userSession.id,
    }, env_1.ENV.REFRESH_TOKEN_SECRET, {
        expiresIn: env_1.ENV.REFRESH_TOKEN_INTERVAL / 1000,
    });
    return { refreshToken, accessToken: (0, exports.createAccessToken)(userSession) };
};
exports.createAccessAndRefreshTokens = createAccessAndRefreshTokens;
const setRefreshTokenCookie = (res, refreshToken) => res.cookie(env_1.ENV.REFRESH_TOKEN_COOKIE, refreshToken, Object.assign(Object.assign({}, cookie_1.DEFAULT_COOKIE_OPTIONS), { path: cookie_1.REFRESH_TOKEN_COOKIE_PATH, expires: new Date(Date.now() + env_1.ENV.REFRESH_TOKEN_INTERVAL) }));
exports.setRefreshTokenCookie = setRefreshTokenCookie;
const unsetRefreshTokenCookie = (res) => res.clearCookie(env_1.ENV.REFRESH_TOKEN_COOKIE, Object.assign(Object.assign({}, cookie_1.DEFAULT_COOKIE_OPTIONS), { path: cookie_1.REFRESH_TOKEN_COOKIE_PATH, expires: new Date(Date.now() + env_1.ENV.REFRESH_TOKEN_INTERVAL) }));
exports.unsetRefreshTokenCookie = unsetRefreshTokenCookie;
/** Check if user is an existing user with valid credentials */
const validateUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const existingUser = yield client_1.default.user.findFirst({
        where: {
            email: payload.email,
        },
    });
    if (existingUser === null)
        return null;
    const hasValidPassword = yield (0, hash_1.comparePassword)(payload.password, existingUser.password);
    if (hasValidPassword)
        return (0, sanitize_1.sanitizeUser)(existingUser);
    else
        return false;
});
exports.validateUser = validateUser;
const validateAccessToken = (accessToken) => {
    try {
        const accesssTokenPayload = jsonwebtoken_1.default.verify(accessToken, env_1.ENV.ACCESS_TOKEN_SECRET);
        return accesssTokenPayload;
    }
    catch (error) {
        if (error instanceof jsonwebtoken_1.default.TokenExpiredError) {
            throw new error_1.AppError(http_1.STATUS_CODES.UNAUTHORIZED, "Access token expired");
        }
        else {
            throw new error_1.AppError(http_1.STATUS_CODES.INTERNAL_SERVER_ERROR, "Something went wrong");
        }
    }
};
exports.validateAccessToken = validateAccessToken;
const deleteUserSession = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    yield client_1.default.userSession.deleteMany({
        where: {
            userId: userId,
        },
    });
});
exports.deleteUserSession = deleteUserSession;
/** Returns refresh token payload if valid or throws App error if expired */
const validateRefreshToken = (refreshToken) => {
    try {
        const refreshPayload = jsonwebtoken_1.default.verify(refreshToken, env_1.ENV.REFRESH_TOKEN_SECRET);
        return refreshPayload;
    }
    catch (error) {
        if (error instanceof jsonwebtoken_1.default.TokenExpiredError)
            throw new error_1.AppError(http_1.STATUS_CODES.UNAUTHORIZED, "Refresh token expired");
        else
            throw new error_1.AppError(http_1.STATUS_CODES.INTERNAL_SERVER_ERROR, "Something went wrong");
    }
};
exports.validateRefreshToken = validateRefreshToken;
/** Validates if a session is valid & deletes expired session */
const validateSession = (refreshToken) => __awaiter(void 0, void 0, void 0, function* () {
    const refreshPayload = (0, exports.validateRefreshToken)(refreshToken);
    const userSession = yield client_1.default.userSession.findFirst({
        where: {
            id: refreshPayload.id,
        },
    });
    if (userSession === null)
        return null;
    if (Date.now() < userSession.expiresAt.getTime()) {
        // if not expired
        yield client_1.default.userSession.update({
            data: {
                expiresAt: new Date(Date.now() + env_1.ENV.REFRESH_TOKEN_INTERVAL),
            },
            where: {
                id: refreshPayload.id,
            },
        });
        return userSession;
    }
    else {
        // if expired
        yield client_1.default.userSession.delete({
            where: {
                id: refreshPayload.id,
            },
        });
        return false;
    }
});
exports.validateSession = validateSession;
const createUserNote = (note, userId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.default.userNote.create({
        data: Object.assign(Object.assign({}, note), { userId }),
    });
});
exports.createUserNote = createUserNote;
const updateUserNote = (note, noteId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.default.userNote.update({
        data: { title: note.title, content: note.content },
        where: {
            id: noteId,
        },
    });
});
exports.updateUserNote = updateUserNote;
const deleteUserNote = (noteId) => __awaiter(void 0, void 0, void 0, function* () {
    // Before deleting the UserNote, manually delete the associated UserNoteTags
    yield client_1.default.userNoteTag.deleteMany({
        where: {
            noteId,
        },
    });
    return yield client_1.default.userNote.delete({
        where: {
            id: noteId,
        },
    });
});
exports.deleteUserNote = deleteUserNote;
const deleteUserNoteTag = (noteId, tagId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.default.userNoteTag.delete({
        where: {
            id: tagId,
            noteId,
        },
    });
});
exports.deleteUserNoteTag = deleteUserNoteTag;
