import express from "express";

import * as UserController from "../controllers/user.controller";
import { errorCatch } from "../lib/error";
import {
  checkNoteOwnership,
  userHasAccess,
} from "../middlewares/user.middleware";
import {
  limitUserNote,
  limitUserRegistration,
} from "../middlewares/limit.middleware";

const userRouter = express.Router();

userRouter.post(
  "/register",
  errorCatch(limitUserRegistration),
  errorCatch(UserController.registerUser)
);
userRouter.post("/login", errorCatch(UserController.loginUser));
userRouter.delete(
  "/logout",
  errorCatch(userHasAccess),
  errorCatch(UserController.logoutUser)
);
userRouter.get("/access", errorCatch(UserController.newAccessToken)); // Creates new access token (refresh)

// Note Management endpoints
userRouter.get(
  "/note",
  errorCatch(userHasAccess),
  errorCatch(UserController.fetchUserNotes)
);
userRouter.get(
  "/note/:noteId",
  errorCatch(userHasAccess),
  errorCatch(UserController.fetchUserNote)
);
userRouter.post(
  "/note",
  errorCatch(userHasAccess),
  errorCatch(limitUserNote),
  errorCatch(UserController.createUserNote)
);
userRouter.put(
  "/note/:noteId",
  errorCatch(userHasAccess),
  errorCatch(checkNoteOwnership),
  errorCatch(UserController.updateUserNote)
);
userRouter.delete(
  "/note/:noteId",
  errorCatch(userHasAccess),
  errorCatch(checkNoteOwnership),
  errorCatch(UserController.deleteUserNote)
);

userRouter.post(
  "/note/:noteId/tag",
  errorCatch(userHasAccess),
  errorCatch(checkNoteOwnership),
  errorCatch(UserController.createUserNoteTags)
);

userRouter.delete(
  "/note/:noteId/tag/:tagId",
  errorCatch(userHasAccess),
  errorCatch(checkNoteOwnership),
  errorCatch(UserController.deleteUserNoteTag)
);

// AI feat endpoints
userRouter.get(
  "/note/:noteId/summary",
  errorCatch(userHasAccess),
  errorCatch(checkNoteOwnership),
  errorCatch(UserController.generateNoteSummary)
);

userRouter.get(
  "/note/:noteId/improve",
  errorCatch(userHasAccess),
  errorCatch(checkNoteOwnership),
  errorCatch(UserController.improveNoteContent)
);

userRouter.get(
  "/note/:noteId/tags",
  errorCatch(userHasAccess),
  errorCatch(checkNoteOwnership),
  errorCatch(UserController.generateNoteTags)
);

export default userRouter;
