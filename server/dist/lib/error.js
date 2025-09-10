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
Object.defineProperty(exports, "__esModule", { value: true });
exports.prettifyError = exports.errorCatch = exports.AppError = void 0;
const env_1 = require("../constants/env");
/** Custom error */
class AppError extends Error {
    constructor(httpStatusCode, message = "Server Error") {
        super(message);
        this.httpStatusCode = httpStatusCode;
    }
}
exports.AppError = AppError;
/** Error handling wrapper for controller */
const errorCatch = (asyncController) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield asyncController(req, res, next);
    }
    catch (error) {
        next(error);
    }
});
exports.errorCatch = errorCatch;
/** Prettifies stack traces as an array */
const prettifyError = (error) => {
    var _a;
    return env_1.ENV.NODE_ENV !== "production"
        ? (_a = error.stack) === null || _a === void 0 ? void 0 : _a.replace(/(\r\n|\n|\r)+/gm, ":::").split(":::").filter((l) => l.length)
        : undefined;
};
exports.prettifyError = prettifyError;
