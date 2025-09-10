import express from "express";

import { ENV } from "../constants/env";
import { Prisma } from "../../generated/prisma";
import { AppError, prettifyError } from "../lib/error";
import { STATUS_CODES } from "../constants/http";
import { z } from "zod";

export const errorMiddleware: express.ErrorRequestHandler = (
  error: Error,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  // handle prisma initialization error
  if (error instanceof Prisma.PrismaClientInitializationError) {
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
      stack: prettifyError(error),
      message: "Could not connect to the database.",
    });
    return;
  } else if (error instanceof z.ZodError) {
    const issues = error.issues.map((issue) => ({
      path: issue.path.join(", "),
      message: issue.message,
    }));

    res.status(STATUS_CODES.BAD_REQUEST).json({
      message: issues
        .map((i) => ({ [i.path]: i.message }))
        .reduce((prev, current) => ({ ...current, ...prev }), {}),
      issues: ENV.NODE_ENV !== "production" ? issues : undefined,
      stack: prettifyError(error),
    });
    return;
  } else if (error instanceof AppError) {
    // custom error
    res.status(error.httpStatusCode).json({
      stack: prettifyError(error),
      message: error.message,
    });
    return;
  }

  // Server-related error. (default)
  res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
    message: "Something went wrong",
    stack: prettifyError(error),
  });
};
