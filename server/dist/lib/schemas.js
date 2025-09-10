"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userNoteTagsPayloadSchema = exports.updateUserNotePayloadSchema = exports.newNoteSchema = exports.loginPayloadSchema = exports.newUserSchema = void 0;
const zod_1 = require("zod");
exports.newUserSchema = zod_1.z.object({
    email: zod_1.z.string().email("Email must be valid"),
    password: zod_1.z
        .string()
        .min(8, "Password must be at least 8 characters")
        .regex(/\d/, "Must contain at least one number"),
});
exports.loginPayloadSchema = zod_1.z.object({
    email: zod_1.z.string().email("Email must be valid"),
    password: zod_1.z
        .string()
        .min(8, "Password must be at least 8 characters")
        .regex(/\d/, "Must contain at least one number"),
});
exports.newNoteSchema = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string(),
});
exports.updateUserNotePayloadSchema = zod_1.z.object({
    title: zod_1.z.string().optional(),
    content: zod_1.z.string().optional(),
});
exports.userNoteTagsPayloadSchema = zod_1.z.object({
    tags: zod_1.z.string().array(),
});
