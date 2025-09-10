import path from "path";

import dotenv from "dotenv";
dotenv.config({
  path: path.join(__dirname, "..", "..", "..", ".env"),
});

import { z } from "zod";
import { TIME } from "./time";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production"]).default("development"),
  // PORT: z.number().default(80),
  ACCESS_TOKEN_INTERVAL: z.preprocess(
    (val) => (typeof val === "string" ? Number(val) : val),
    z.number().default(15 * TIME.MINUTE)
  ),
  REFRESH_TOKEN_INTERVAL: z.preprocess(
    (val) => (typeof val === "string" ? Number(val) : val),
    z.number().default(30 * TIME.DAY)
  ),
  ACCESS_TOKEN_COOKIE: z.string().optional().default("accssess"),
  REFRESH_TOKEN_COOKIE: z.string().optional().default("refssresh"),
  COOKIE_SECRET: z.string(),
  BCRYPT_SALT_ROUNDS: z.preprocess(
    (val) => (typeof val === "string" ? Number(val) : val),
    z.number().default(10)
  ),
  ACCESS_TOKEN_SECRET: z.string(),
  REFRESH_TOKEN_SECRET: z.string(),
  OPENAI_API_KEY: z.string(),
  HF_TOKEN: z.string(),
  STANDALONE: z.preprocess(
    (val) => (typeof val === "string" ? Boolean(val) : val),
    z.boolean().optional().default(false)
  ),
});

let env;

try {
  env = envSchema.parse(process.env);
} catch (error) {
  if (error instanceof z.ZodError) {
    error.issues.map((issue) =>
      console.error(
        `Invalid environment variable '${String(issue.path[0])}'. ${
          issue.message
        }`
      )
    );
    process.exit(1);
  } else throw error;
}

export const ENV = env!;
