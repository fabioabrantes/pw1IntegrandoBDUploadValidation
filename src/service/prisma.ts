// prisma.ts
import { PrismaClient } from "@prisma/client";

const prismaService = new PrismaClient({
  log: ["query"],
  errorFormat: "pretty",
});

export { prismaService };
