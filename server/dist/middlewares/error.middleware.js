"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
const env_1 = require("../constants/env");
const prisma_1 = require("../../generated/prisma");
const error_1 = require("../lib/error");
const http_1 = require("../constants/http");
const zod_1 = require("zod");
const errorMiddleware = (error, req, res, next) => {
    // handle prisma initialization error
    if (error instanceof prisma_1.Prisma.PrismaClientInitializationError) {
        res.status(http_1.STATUS_CODES.INTERNAL_SERVER_ERROR).json({
            stack: (0, error_1.prettifyError)(error),
            message: "Could not connect to the database.",
        });
        return;
    }
    else if (error instanceof zod_1.z.ZodError) {
        const issues = error.issues.map((issue) => ({
            path: issue.path.join(", "),
            message: issue.message,
        }));
        res.status(http_1.STATUS_CODES.BAD_REQUEST).json({
            message: issues
                .map((i) => ({ [i.path]: i.message }))
                .reduce((prev, current) => (Object.assign(Object.assign({}, current), prev)), {}),
            issues: env_1.ENV.NODE_ENV !== "production" ? issues : undefined,
            stack: (0, error_1.prettifyError)(error),
        });
        return;
    }
    else if (error instanceof error_1.AppError) {
        // custom error
        res.status(error.httpStatusCode).json({
            stack: (0, error_1.prettifyError)(error),
            message: error.message,
        });
        return;
    }
    // Server-related error. (default)
    res.status(http_1.STATUS_CODES.INTERNAL_SERVER_ERROR).json({
        message: "Something went wrong",
        stack: (0, error_1.prettifyError)(error),
    });
};
exports.errorMiddleware = errorMiddleware;
