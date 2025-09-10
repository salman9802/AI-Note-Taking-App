"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
exports.generateNoteTags = exports.improveNoteContent = exports.generateNoteSummary = exports.deleteUserNoteTag = exports.createUserNoteTags = exports.deleteUserNote = exports.updateUserNote = exports.createUserNote = exports.fetchUserNote = exports.fetchUserNotes = exports.newAccessToken = exports.logoutUser = exports.loginUser = exports.registerUser = void 0;
const UserService = __importStar(require("../services/user.service"));
// import * as OpenAIService from "../services/openai.service";
const HuggingfaceAIService = __importStar(require("../services/huggingface.service"));
const client_1 = __importDefault(require("../db/client"));
const schemas_1 = require("../lib/schemas");
const error_1 = require("../lib/error");
const http_1 = require("../constants/http");
const env_1 = require("../constants/env");
const registerUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = schemas_1.newUserSchema.parse(req.body);
    //   check for existing user
    const existingUser = yield client_1.default.user.findFirst({
        where: {
            email: data.email,
        },
    });
    if (existingUser !== null)
        throw new error_1.AppError(http_1.STATUS_CODES.CONFLICT, "Email already exists");
    const user = yield UserService.createUser(data);
    const userSession = yield UserService.createUserSession(user.id);
    const { accessToken, refreshToken } = UserService.createAccessAndRefreshTokens(userSession);
    UserService.setRefreshTokenCookie(res, refreshToken)
        .status(http_1.STATUS_CODES.OK)
        .json({
        user,
        accessToken,
    });
});
exports.registerUser = registerUser;
const loginUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = schemas_1.loginPayloadSchema.parse(req.body);
    const existingUser = yield UserService.validateUser(data);
    if (existingUser === null)
        throw new error_1.AppError(http_1.STATUS_CODES.NOT_FOUND, "User not found");
    if (existingUser === false)
        throw new error_1.AppError(http_1.STATUS_CODES.BAD_REQUEST, "Invalid credentials");
    const userSession = yield UserService.createUserSession(existingUser.id);
    const { accessToken, refreshToken } = UserService.createAccessAndRefreshTokens(userSession);
    UserService.setRefreshTokenCookie(res, refreshToken)
        .status(http_1.STATUS_CODES.OK)
        .json({
        user: existingUser,
        accessToken,
    });
});
exports.loginUser = loginUser;
const logoutUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    yield UserService.deleteUserSession(user.id);
    UserService.unsetRefreshTokenCookie(res).sendStatus(http_1.STATUS_CODES.OK);
});
exports.logoutUser = logoutUser;
const newAccessToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const refreshToken = req.signedCookies[env_1.ENV.REFRESH_TOKEN_COOKIE];
    if (!refreshToken)
        throw new error_1.AppError(http_1.STATUS_CODES.UNAUTHORIZED, "Unauthorized");
    const userSession = yield UserService.validateSession(refreshToken);
    if (!userSession)
        throw new error_1.AppError(http_1.STATUS_CODES.UNAUTHORIZED, "Session expired or does not exists");
    const accessToken = UserService.createAccessToken(userSession);
    const user = yield client_1.default.user.findFirst({
        where: {
            id: userSession.userId,
        },
        select: {
            id: true,
            email: true,
        },
    });
    if (user === null)
        throw new error_1.AppError(http_1.STATUS_CODES.NOT_FOUND);
    res.status(http_1.STATUS_CODES.OK).json(Object.assign({ accessToken }, user));
});
exports.newAccessToken = newAccessToken;
const fetchUserNotes = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const userNotes = yield client_1.default.userNote.findMany({
        where: {
            userId: user.id,
        },
    });
    res.status(http_1.STATUS_CODES.OK).json({
        notes: userNotes,
    });
});
exports.fetchUserNotes = fetchUserNotes;
const fetchUserNote = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { noteId } = req.params;
    const userNote = yield client_1.default.userNote.findFirst({
        where: {
            id: noteId,
        },
        select: {
            id: true,
            title: true,
            content: true,
            noteTags: {
                select: {
                    id: true,
                    name: true,
                },
            },
        },
    });
    res.status(http_1.STATUS_CODES.OK).json({
        note: userNote,
    });
});
exports.fetchUserNote = fetchUserNote;
const createUserNote = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const data = schemas_1.newNoteSchema.parse(req.body);
    const newNote = yield UserService.createUserNote(data, user.id);
    res.status(http_1.STATUS_CODES.OK).json({
        note: newNote,
    });
});
exports.createUserNote = createUserNote;
const updateUserNote = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = schemas_1.updateUserNotePayloadSchema.parse(req.body);
    const updatedNote = yield UserService.updateUserNote(data, req.params.noteId);
    res.status(http_1.STATUS_CODES.OK).json({
        note: updatedNote,
    });
});
exports.updateUserNote = updateUserNote;
const deleteUserNote = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteNote = yield UserService.deleteUserNote(req.params.noteId);
    res.status(http_1.STATUS_CODES.OK).json({
        note: deleteNote,
    });
});
exports.deleteUserNote = deleteUserNote;
const createUserNoteTags = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const parsed = schemas_1.userNoteTagsPayloadSchema.parse(req.body);
    const { noteId } = req.params;
    // for (const tag of parsed.tags) {
    // await prisma.userNoteTag.createMany({
    //   data: parsed.tags.map((tag) => ({
    //     name: tag,
    //     noteId,
    //   })),
    // });
    // }
    const tags = yield Promise.all(parsed.tags.map((tag) => client_1.default.userNoteTag.create({
        data: {
            name: tag,
            noteId,
        },
    })));
    res.status(http_1.STATUS_CODES.OK).json({
        tags,
    });
});
exports.createUserNoteTags = createUserNoteTags;
const deleteUserNoteTag = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { noteId, tagId } = req.params;
    const deleteNote = yield UserService.deleteUserNoteTag(noteId, tagId);
    res.status(http_1.STATUS_CODES.OK).json({
        note: deleteNote,
    });
});
exports.deleteUserNoteTag = deleteUserNoteTag;
const generateNoteSummary = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const noteId = req.params.noteId;
    const note = yield client_1.default.userNote.findFirst({
        where: {
            id: noteId,
        },
    });
    if (note == null)
        throw new error_1.AppError(http_1.STATUS_CODES.NOT_FOUND, "Note not found");
    const summary = yield HuggingfaceAIService.generateNoteContentSummary(note.content);
    res.status(http_1.STATUS_CODES.OK).json({
        summary,
    });
});
exports.generateNoteSummary = generateNoteSummary;
const improveNoteContent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const noteId = req.params.noteId;
    const note = yield client_1.default.userNote.findFirst({
        where: {
            id: noteId,
        },
    });
    if (note == null)
        throw new error_1.AppError(http_1.STATUS_CODES.NOT_FOUND, "Note not found");
    const improved = yield HuggingfaceAIService.improveNoteContent(note.content);
    res.status(http_1.STATUS_CODES.OK).json({
        improved,
    });
});
exports.improveNoteContent = improveNoteContent;
const generateNoteTags = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const noteId = req.params.noteId;
    const note = yield client_1.default.userNote.findFirst({
        where: {
            id: noteId,
        },
    });
    if (note == null)
        throw new error_1.AppError(http_1.STATUS_CODES.NOT_FOUND, "Note not found");
    const tags = yield HuggingfaceAIService.generateNoteTags(note.content);
    res.status(http_1.STATUS_CODES.OK).json({
        tags,
    });
});
exports.generateNoteTags = generateNoteTags;
