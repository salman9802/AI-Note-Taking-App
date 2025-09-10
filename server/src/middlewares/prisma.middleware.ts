import { Prisma } from "../../generated/prisma";
import { hashPassword } from "../lib/hash";

/** Prisma middleware to hash password before being saved / updated */
export const hashedPasswordMiddleware: Prisma.Middleware = async (
  params,
  next
) => {
  if (
    params.model === "User" &&
    (params.action === "create" || params.action === "update")
  ) {
    const password = params.args.data.password as string;
    if (password) {
      const hashedPassword = await hashPassword(password);
      params.args.data.password = hashedPassword;
    }
  }
  return next(params);
};
