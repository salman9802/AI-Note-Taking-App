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
exports.checkNoteOwnership = exports.userHasAccess = void 0;
const UserService = __importStar(require("../services/user.service"));
const error_1 = require("../lib/error");
const http_1 = require("../constants/http");
const client_1 = __importDefault(require("../db/client"));
const userHasAccess = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const accessToken = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    if (accessToken === undefined)
        throw new error_1.AppError(http_1.STATUS_CODES.UNAUTHORIZED, "Unauthorized");
    const accessTokenPayload = UserService.validateAccessToken(accessToken);
    // validate user
    const user = yield client_1.default.user.findFirst({
        where: {
            id: accessTokenPayload.uid,
        },
    });
    if (user === null)
        throw new error_1.AppError(http_1.STATUS_CODES.UNAUTHORIZED, "Unauthorized");
    req.user = user;
    next();
});
exports.userHasAccess = userHasAccess;
const checkNoteOwnership = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    if (user === undefined)
        throw new error_1.AppError(http_1.STATUS_CODES.UNAUTHORIZED, "Unauthorized");
    const noteId = req.params.noteId;
    const userNote = yield client_1.default.userNote.findFirst({
        where: {
            id: noteId,
            userId: user.id,
        },
    });
    if (userNote === null)
        throw new error_1.AppError(http_1.STATUS_CODES.NOT_FOUND, "Note not found");
    next();
});
exports.checkNoteOwnership = checkNoteOwnership;
