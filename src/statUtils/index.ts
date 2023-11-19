import { Application } from 'oak'
import { RESPONSE_TIME_HEADER } from '../constants.ts'
import { consola } from '~'

// Timing
export const addTimingToApp = (app: Application) =>
  app.use(async (ctx, next) => {
    const start = Date.now()
    await next()
    const ms = Date.now() - start
    ctx.response.headers.set(RESPONSE_TIME_HEADER, `${ms}ms`)
  })

// Logger
export const addLoggingToApp = (app: Application) =>
  app.use(async (ctx, next) => {
    await next()
    const rt = ctx.response.headers.get(RESPONSE_TIME_HEADER)
    consola.info(`${ctx.request.method} ${ctx.request.url} - ${rt}`)
  })
