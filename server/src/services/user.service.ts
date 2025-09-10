import express from "express";
import jwt from "jsonwebtoken";

import prisma from "../db/client";
import {
  LoginPayload,
  NewNote,
  NewUser,
  UpdateUserNotePayload,
} from "../lib/schemas";
import { sanitizeUser } from "../lib/sanitize";
import { ENV } from "../constants/env";
import { UserSession } from "../../generated/prisma";
import {
  DEFAULT_COOKIE_OPTIONS,
  REFRESH_TOKEN_COOKIE_PATH,
} from "../constants/cookie";
import { comparePassword } from "../lib/hash";
import { AccessTokenJwtPayload, RefreshTokenJwtPayload } from "../types/auth";
import { AppError } from "../lib/error";
import { STATUS_CODES } from "../constants/http";

/** create new user */
export const createUser = async (newUser: NewUser) => {
  const user = await prisma.user.create({
    data: newUser,
  });

  return sanitizeUser(user);
};

/** create new session or update existing one */
export const createUserSession = async (userId: string) => {
  const existingUserSession = await prisma.userSession.findFirst({
    where: {
      userId,
    },
  });

  if (existingUserSession === null) {
    // create new session
    const userSession = await prisma.userSession.create({
      data: {
        userId,
        expiresAt: new Date(Date.now() + ENV.REFRESH_TOKEN_INTERVAL),
      },
    });
    return userSession;
  } else {
    // update existing one
    const userSession = await prisma.userSession.update({
      data: {
        userId,
        expiresAt: new Date(Date.now() + ENV.REFRESH_TOKEN_INTERVAL),
      },
      where: {
        userId,
      },
    });
    return userSession;
  }
};

/** Creates access token from user session */
export const createAccessToken = (userSession: UserSession) => {
  const accessToken = jwt.sign(
    { id: userSession.id, uid: userSession.userId },
    ENV.ACCESS_TOKEN_SECRET,
    {
      expiresIn: ENV.ACCESS_TOKEN_INTERVAL / 1000,
    }
  );
  return accessToken;
};

/** Creates access & refresh tokens from user session */
export const createAccessAndRefreshTokens = (userSession: UserSession) => {
  const refreshToken = jwt.sign(
    {
      id: userSession.id,
    },
    ENV.REFRESH_TOKEN_SECRET,
    {
      expiresIn: ENV.REFRESH_TOKEN_INTERVAL / 1000,
    }
  );
  return { refreshToken, accessToken: createAccessToken(userSession) };
};

export const setRefreshTokenCookie = (
  res: express.Response,
  refreshToken: string
) =>
  res.cookie(ENV.REFRESH_TOKEN_COOKIE, refreshToken, {
    ...DEFAULT_COOKIE_OPTIONS,
    path: REFRESH_TOKEN_COOKIE_PATH,
    expires: new Date(Date.now() + ENV.REFRESH_TOKEN_INTERVAL),
  });

export const unsetRefreshTokenCookie = (res: express.Response) =>
  res.clearCookie(ENV.REFRESH_TOKEN_COOKIE, {
    ...DEFAULT_COOKIE_OPTIONS,
    path: REFRESH_TOKEN_COOKIE_PATH,
    expires: new Date(Date.now() + ENV.REFRESH_TOKEN_INTERVAL),
  });

/** Check if user is an existing user with valid credentials */
export const validateUser = async (payload: LoginPayload) => {
  const existingUser = await prisma.user.findFirst({
    where: {
      email: payload.email,
    },
  });

  if (existingUser === null) return null;

  const hasValidPassword = await comparePassword(
    payload.password,
    existingUser.password
  );
  if (hasValidPassword) return sanitizeUser(existingUser);
  else return false;
};

export const validateAccessToken = (accessToken: string) => {
  try {
    const accesssTokenPayload = jwt.verify(
      accessToken,
      ENV.ACCESS_TOKEN_SECRET
    ) as AccessTokenJwtPayload;
    return accesssTokenPayload;
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      throw new AppError(STATUS_CODES.UNAUTHORIZED, "Access token expired");
    } else {
      throw new AppError(
        STATUS_CODES.INTERNAL_SERVER_ERROR,
        "Something went wrong"
      );
    }
  }
};

export const deleteUserSession = async (userId: string) => {
  await prisma.userSession.deleteMany({
    where: {
      userId: userId,
    },
  });
};

/** Returns refresh token payload if valid or throws App error if expired */
export const validateRefreshToken = (refreshToken: any) => {
  try {
    const refreshPayload = jwt.verify(
      refreshToken,
      ENV.REFRESH_TOKEN_SECRET
    ) as RefreshTokenJwtPayload;
    return refreshPayload;
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError)
      throw new AppError(STATUS_CODES.UNAUTHORIZED, "Refresh token expired");
    else
      throw new AppError(
        STATUS_CODES.INTERNAL_SERVER_ERROR,
        "Something went wrong"
      );
  }
};

/** Validates if a session is valid & deletes expired session */
export const validateSession = async (refreshToken: any) => {
  const refreshPayload = validateRefreshToken(refreshToken);

  const userSession = await prisma.userSession.findFirst({
    where: {
      id: refreshPayload.id,
    },
  });

  if (userSession === null) return null;

  if (Date.now() < userSession.expiresAt.getTime()) {
    // if not expired

    await prisma.userSession.update({
      data: {
        expiresAt: new Date(Date.now() + ENV.REFRESH_TOKEN_INTERVAL),
      },
      where: {
        id: refreshPayload.id,
      },
    });

    return userSession;
  } else {
    // if expired

    await prisma.userSession.delete({
      where: {
        id: refreshPayload.id,
      },
    });

    return false;
  }
};

export const createUserNote = async (note: NewNote, userId: string) => {
  return await prisma.userNote.create({
    data: { ...note, userId },
  });
};

export const updateUserNote = async (
  note: UpdateUserNotePayload,
  noteId: string
) => {
  return await prisma.userNote.update({
    data: { title: note.title, content: note.content },
    where: {
      id: noteId,
    },
  });
};

export const deleteUserNote = async (noteId: string) => {
  // Before deleting the UserNote, manually delete the associated UserNoteTags
  await prisma.userNoteTag.deleteMany({
    where: {
      noteId,
    },
  });

  return await prisma.userNote.delete({
    where: {
      id: noteId,
    },
  });
};

export const deleteUserNoteTag = async (noteId: string, tagId: string) => {
  return await prisma.userNoteTag.delete({
    where: {
      id: tagId,
      noteId,
    },
  });
};
