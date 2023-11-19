import { type PrismaClient } from '../client/index.d.ts'
import { createRequire } from 'node:module'
// import { createRequire } from 'https://deno.land/std@0.207.0/node/module.ts'
const require = createRequire(import.meta.url)
const Prisma = require('../client/index.js')

try {
  new Prisma.PrismaClient()
} catch (e) {
  console.log(e)
}

export const prisma: PrismaClient = new Prisma.PrismaClient()
