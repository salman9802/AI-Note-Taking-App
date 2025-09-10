"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENV = void 0;
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({
    path: path_1.default.join(__dirname, "..", "..", "..", ".env"),
});
const zod_1 = require("zod");
const time_1 = require("./time");
const envSchema = zod_1.z.object({
    NODE_ENV: zod_1.z.enum(["development", "production"]).default("development"),
    // PORT: z.number().default(80),
    ACCESS_TOKEN_INTERVAL: zod_1.z.preprocess((val) => (typeof val === "string" ? Number(val) : val), zod_1.z.number().default(15 * time_1.TIME.MINUTE)),
    REFRESH_TOKEN_INTERVAL: zod_1.z.preprocess((val) => (typeof val === "string" ? Number(val) : val), zod_1.z.number().default(30 * time_1.TIME.DAY)),
    ACCESS_TOKEN_COOKIE: zod_1.z.string().optional().default("accssess"),
    REFRESH_TOKEN_COOKIE: zod_1.z.string().optional().default("refssresh"),
    COOKIE_SECRET: zod_1.z.string(),
    BCRYPT_SALT_ROUNDS: zod_1.z.preprocess((val) => (typeof val === "string" ? Number(val) : val), zod_1.z.number().default(10)),
    ACCESS_TOKEN_SECRET: zod_1.z.string(),
    REFRESH_TOKEN_SECRET: zod_1.z.string(),
    OPENAI_API_KEY: zod_1.z.string(),
    HF_TOKEN: zod_1.z.string(),
    STANDALONE: zod_1.z.preprocess((val) => (typeof val === "string" ? Boolean(val) : val), zod_1.z.boolean().optional().default(false)),
});
let env;
try {
    env = envSchema.parse(process.env);
}
catch (error) {
    if (error instanceof zod_1.z.ZodError) {
        error.issues.map((issue) => console.error(`Invalid environment variable '${String(issue.path[0])}'. ${issue.message}`));
        process.exit(1);
    }
    else
        throw error;
}
exports.ENV = env;
