import jwt from "jsonwebtoken";
import { SanitizeUser } from "../lib/sanitize";

declare global {
  namespace Express {
    interface Request {
      user?: SanitizeUser;
    }
  }
}

export type RefreshTokenJwtPayload = jwt.JwtPayload & {
  id: string;
};

export type AccessTokenJwtPayload = jwt.JwtPayload & {
  id: string;
  uid: string;
};
