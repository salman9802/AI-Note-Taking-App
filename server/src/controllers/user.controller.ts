import express from "express";

import * as UserService from "../services/user.service";
// import * as OpenAIService from "../services/openai.service";
import * as HuggingfaceAIService from "../services/huggingface.service";

import prisma from "../db/client";
import {
  loginPayloadSchema,
  newNoteSchema,
  newUserSchema,
  updateUserNotePayloadSchema,
  userNoteTagsPayloadSchema,
} from "../lib/schemas";
import { AppError } from "../lib/error";
import { STATUS_CODES } from "../constants/http";
import { ENV } from "../constants/env";

export const registerUser = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const data = newUserSchema.parse(req.body);

  //   check for existing user
  const existingUser = await prisma.user.findFirst({
    where: {
      email: data.email,
    },
  });

  if (existingUser !== null)
    throw new AppError(STATUS_CODES.CONFLICT, "Email already exists");

  const user = await UserService.createUser(data);

  const userSession = await UserService.createUserSession(user.id);

  const { accessToken, refreshToken } =
    UserService.createAccessAndRefreshTokens(userSession);

  UserService.setRefreshTokenCookie(res, refreshToken)
    .status(STATUS_CODES.OK)
    .json({
      user,
      accessToken,
    });
};

export const loginUser = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const data = loginPayloadSchema.parse(req.body);

  const existingUser = await UserService.validateUser(data);
  if (existingUser === null)
    throw new AppError(STATUS_CODES.NOT_FOUND, "User not found");
  if (existingUser === false)
    throw new AppError(STATUS_CODES.BAD_REQUEST, "Invalid credentials");

  const userSession = await UserService.createUserSession(existingUser.id);

  const { accessToken, refreshToken } =
    UserService.createAccessAndRefreshTokens(userSession);

  UserService.setRefreshTokenCookie(res, refreshToken)
    .status(STATUS_CODES.OK)
    .json({
      user: existingUser,
      accessToken,
    });
};

export const logoutUser = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const user = req.user!;

  await UserService.deleteUserSession(user.id);

  UserService.unsetRefreshTokenCookie(res).sendStatus(STATUS_CODES.OK);
};

export const newAccessToken = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const refreshToken = req.signedCookies[ENV.REFRESH_TOKEN_COOKIE];

  if (!refreshToken)
    throw new AppError(STATUS_CODES.UNAUTHORIZED, "Unauthorized");

  const userSession = await UserService.validateSession(refreshToken);

  if (!userSession)
    throw new AppError(
      STATUS_CODES.UNAUTHORIZED,
      "Session expired or does not exists"
    );

  const accessToken = UserService.createAccessToken(userSession);

  const user = await prisma.user.findFirst({
    where: {
      id: userSession.userId,
    },
    select: {
      id: true,
      email: true,
    },
  });

  if (user === null) throw new AppError(STATUS_CODES.NOT_FOUND);

  res.status(STATUS_CODES.OK).json({
    accessToken,
    ...user,
  });
};

export const fetchUserNotes = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const user = req.user!;

  const userNotes = await prisma.userNote.findMany({
    where: {
      userId: user.id,
    },
  });

  res.status(STATUS_CODES.OK).json({
    notes: userNotes,
  });
};

export const fetchUserNote = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const { noteId } = req.params;

  const userNote = await prisma.userNote.findFirst({
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

  res.status(STATUS_CODES.OK).json({
    note: userNote,
  });
};

export const createUserNote = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const user = req.user!;
  const data = newNoteSchema.parse(req.body);

  const newNote = await UserService.createUserNote(data, user.id);

  res.status(STATUS_CODES.OK).json({
    note: newNote,
  });
};

export const updateUserNote = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const data = updateUserNotePayloadSchema.parse(req.body);

  const updatedNote = await UserService.updateUserNote(data, req.params.noteId);

  res.status(STATUS_CODES.OK).json({
    note: updatedNote,
  });
};

export const deleteUserNote = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const deleteNote = await UserService.deleteUserNote(req.params.noteId);

  res.status(STATUS_CODES.OK).json({
    note: deleteNote,
  });
};

export const createUserNoteTags = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const parsed = userNoteTagsPayloadSchema.parse(req.body);
  const { noteId } = req.params;

  // for (const tag of parsed.tags) {
  // await prisma.userNoteTag.createMany({
  //   data: parsed.tags.map((tag) => ({
  //     name: tag,
  //     noteId,
  //   })),
  // });
  // }

  const tags = await Promise.all(
    parsed.tags.map((tag) =>
      prisma.userNoteTag.create({
        data: {
          name: tag,
          noteId,
        },
      })
    )
  );

  res.status(STATUS_CODES.OK).json({
    tags,
  });
};

export const deleteUserNoteTag = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const { noteId, tagId } = req.params;

  const deleteNote = await UserService.deleteUserNoteTag(noteId, tagId);

  res.status(STATUS_CODES.OK).json({
    note: deleteNote,
  });
};

export const generateNoteSummary = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const noteId = req.params.noteId;

  const note = await prisma.userNote.findFirst({
    where: {
      id: noteId,
    },
  });

  if (note == null)
    throw new AppError(STATUS_CODES.NOT_FOUND, "Note not found");

  const summary = await HuggingfaceAIService.generateNoteContentSummary(
    note.content
  );

  res.status(STATUS_CODES.OK).json({
    summary,
  });
};

export const improveNoteContent = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const noteId = req.params.noteId;

  const note = await prisma.userNote.findFirst({
    where: {
      id: noteId,
    },
  });

  if (note == null)
    throw new AppError(STATUS_CODES.NOT_FOUND, "Note not found");

  const improved = await HuggingfaceAIService.improveNoteContent(note.content);

  res.status(STATUS_CODES.OK).json({
    improved,
  });
};

export const generateNoteTags = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const noteId = req.params.noteId;

  const note = await prisma.userNote.findFirst({
    where: {
      id: noteId,
    },
  });

  if (note == null)
    throw new AppError(STATUS_CODES.NOT_FOUND, "Note not found");

  const tags = await HuggingfaceAIService.generateNoteTags(note.content);

  res.status(STATUS_CODES.OK).json({
    tags,
  });
};
