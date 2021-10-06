// api/context.ts
import { db } from "./database";
import { PrismaClient } from "@prisma/client"

export interface Context {
  db: PrismaClient
}

export const context = {
  db
}