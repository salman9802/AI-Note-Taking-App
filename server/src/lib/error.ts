import express from "express";

import { ENV } from "../constants/env";
import { StatusCode } from "../constants/http";

/** Custom error */
export class AppError extends Error {
  httpStatusCode: StatusCode;

  constructor(httpStatusCode: StatusCode, message: string = "Server Error") {
    super(message);
    this.httpStatusCode = httpStatusCode;
  }
}

type AsyncController = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => void | Promise<void>;

/** Error handling wrapper for controller */
export const errorCatch =
  (asyncController: AsyncController) =>
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      await asyncController(req, res, next);
    } catch (error) {
      next(error);
    }
  };

/** Prettifies stack traces as an array */
export const prettifyError = (error: Error) =>
  ENV.NODE_ENV !== "production"
    ? error.stack
        ?.replace(/(\r\n|\n|\r)+/gm, ":::")
        .split(":::")
        .filter((l) => l.length)
    : undefined;
