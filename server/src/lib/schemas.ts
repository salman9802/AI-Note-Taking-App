import { z } from "zod";

export const newUserSchema = z.object({
  email: z.string().email("Email must be valid"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/\d/, "Must contain at least one number"),
});
export type NewUser = z.infer<typeof newUserSchema>;

export const loginPayloadSchema = z.object({
  email: z.string().email("Email must be valid"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/\d/, "Must contain at least one number"),
});
export type LoginPayload = z.infer<typeof loginPayloadSchema>;

export const newNoteSchema = z.object({
  title: z.string(),
  content: z.string(),
});
export type NewNote = z.infer<typeof newNoteSchema>;

export const updateUserNotePayloadSchema = z.object({
  title: z.string().optional(),
  content: z.string().optional(),
});
export type UpdateUserNotePayload = z.infer<typeof updateUserNotePayloadSchema>;

export const userNoteTagsPayloadSchema = z.object({
  tags: z.string().array(),
});
export type UserNoteTagsPayload = z.infer<typeof userNoteTagsPayloadSchema>;
