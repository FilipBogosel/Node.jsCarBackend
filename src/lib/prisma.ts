import { PrismaClient } from '../generated/prisma/client';
// One shared instance for the whole application.
// Import this wherever you need database access.
export const prisma = new PrismaClient();