import { User } from "../../generated/prisma";

export type SanitizeUser = Omit<User, "password">;

/** Takes an object and list of keys to remove and returns a clean object */
function sanitize<T extends Record<PropertyKey, any>>(
  obj: T,
  keysToRemove: (keyof T)[]
): Omit<T, (typeof keysToRemove)[number]> {
  const clone = { ...obj };
  for (const key of keysToRemove) {
    delete clone[key];
  }
  return clone;
}

export function sanitizeUser(user: User): SanitizeUser {
  return sanitize(user, ["password"]) as SanitizeUser;
}
