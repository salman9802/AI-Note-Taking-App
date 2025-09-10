import { PrismaClient } from "../../generated/prisma";

import { hashedPasswordMiddleware } from "../middlewares/prisma.middleware";

const prisma = new PrismaClient();

prisma.$use(hashedPasswordMiddleware);

export default prisma;
