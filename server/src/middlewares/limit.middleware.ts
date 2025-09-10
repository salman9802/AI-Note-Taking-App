import express from "express";
import prisma from "../db/client";
import { USER_NOTE_LIMIT, USER_REG_LIMIT } from "../constants/limit";
import { AppError } from "../lib/error";
import { STATUS_CODES } from "../constants/http";

export const limitUserRegistration = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const users = await prisma.user.count();

  if (users >= USER_REG_LIMIT)
    throw new AppError(STATUS_CODES.TOO_MANY_REQUEST, "Max user limit reached");
  else next();
};

export const limitUserNote = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const user = req.user!;

  const notes = await prisma.userNote.count({
    where: {
      userId: user.id,
    },
  });

  if (notes >= USER_NOTE_LIMIT)
    throw new AppError(
      STATUS_CODES.TOO_MANY_REQUEST,
      "Max user note limit reached"
    );
  else next();
};
