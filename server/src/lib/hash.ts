import bcrypt from "bcrypt";

import { ENV } from "../constants/env";

export const hashPassword = async (password: string) =>
  await bcrypt.hash(password, ENV.BCRYPT_SALT_ROUNDS);

export const comparePassword = async (
  password: string,
  hashedPassword: string
) => await bcrypt.compare(password, hashedPassword);
