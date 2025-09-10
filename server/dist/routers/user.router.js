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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController = __importStar(require("../controllers/user.controller"));
const error_1 = require("../lib/error");
const user_middleware_1 = require("../middlewares/user.middleware");
const limit_middleware_1 = require("../middlewares/limit.middleware");
const userRouter = express_1.default.Router();
userRouter.post("/register", (0, error_1.errorCatch)(limit_middleware_1.limitUserRegistration), (0, error_1.errorCatch)(UserController.registerUser));
userRouter.post("/login", (0, error_1.errorCatch)(UserController.loginUser));
userRouter.delete("/logout", (0, error_1.errorCatch)(user_middleware_1.userHasAccess), (0, error_1.errorCatch)(UserController.logoutUser));
userRouter.get("/access", (0, error_1.errorCatch)(UserController.newAccessToken)); // Creates new access token (refresh)
// Note Management endpoints
userRouter.get("/note", (0, error_1.errorCatch)(user_middleware_1.userHasAccess), (0, error_1.errorCatch)(UserController.fetchUserNotes));
userRouter.get("/note/:noteId", (0, error_1.errorCatch)(user_middleware_1.userHasAccess), (0, error_1.errorCatch)(UserController.fetchUserNote));
userRouter.post("/note", (0, error_1.errorCatch)(user_middleware_1.userHasAccess), (0, error_1.errorCatch)(limit_middleware_1.limitUserNote), (0, error_1.errorCatch)(UserController.createUserNote));
userRouter.put("/note/:noteId", (0, error_1.errorCatch)(user_middleware_1.userHasAccess), (0, error_1.errorCatch)(user_middleware_1.checkNoteOwnership), (0, error_1.errorCatch)(UserController.updateUserNote));
userRouter.delete("/note/:noteId", (0, error_1.errorCatch)(user_middleware_1.userHasAccess), (0, error_1.errorCatch)(user_middleware_1.checkNoteOwnership), (0, error_1.errorCatch)(UserController.deleteUserNote));
userRouter.post("/note/:noteId/tag", (0, error_1.errorCatch)(user_middleware_1.userHasAccess), (0, error_1.errorCatch)(user_middleware_1.checkNoteOwnership), (0, error_1.errorCatch)(UserController.createUserNoteTags));
userRouter.delete("/note/:noteId/tag/:tagId", (0, error_1.errorCatch)(user_middleware_1.userHasAccess), (0, error_1.errorCatch)(user_middleware_1.checkNoteOwnership), (0, error_1.errorCatch)(UserController.deleteUserNoteTag));
// AI feat endpoints
userRouter.get("/note/:noteId/summary", (0, error_1.errorCatch)(user_middleware_1.userHasAccess), (0, error_1.errorCatch)(user_middleware_1.checkNoteOwnership), (0, error_1.errorCatch)(UserController.generateNoteSummary));
userRouter.get("/note/:noteId/improve", (0, error_1.errorCatch)(user_middleware_1.userHasAccess), (0, error_1.errorCatch)(user_middleware_1.checkNoteOwnership), (0, error_1.errorCatch)(UserController.improveNoteContent));
userRouter.get("/note/:noteId/tags", (0, error_1.errorCatch)(user_middleware_1.userHasAccess), (0, error_1.errorCatch)(user_middleware_1.checkNoteOwnership), (0, error_1.errorCatch)(UserController.generateNoteTags));
exports.default = userRouter;
