"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../generated/prisma");
const prisma_middleware_1 = require("../middlewares/prisma.middleware");
const prisma = new prisma_1.PrismaClient();
prisma.$use(prisma_middleware_1.hashedPasswordMiddleware);
exports.default = prisma;
