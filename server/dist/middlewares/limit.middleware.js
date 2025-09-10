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
exports.limitUserNote = exports.limitUserRegistration = void 0;
const client_1 = __importDefault(require("../db/client"));
const limit_1 = require("../constants/limit");
const error_1 = require("../lib/error");
const http_1 = require("../constants/http");
const limitUserRegistration = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield client_1.default.user.count();
    if (users >= limit_1.USER_REG_LIMIT)
        throw new error_1.AppError(http_1.STATUS_CODES.TOO_MANY_REQUEST, "Max user limit reached");
    else
        next();
});
exports.limitUserRegistration = limitUserRegistration;
const limitUserNote = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const notes = yield client_1.default.userNote.count({
        where: {
            userId: user.id,
        },
    });
    if (notes >= limit_1.USER_NOTE_LIMIT)
        throw new error_1.AppError(http_1.STATUS_CODES.TOO_MANY_REQUEST, "Max user note limit reached");
    else
        next();
});
exports.limitUserNote = limitUserNote;
