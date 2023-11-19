import { type PrismaClient } from '../client/index.d.ts'
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
const Prisma = require('../client/index.js')

try {
  new Prisma.PrismaClient()
} catch (e) {
  console.log(e)
}

export const prisma: PrismaClient = new Prisma.PrismaClient()
