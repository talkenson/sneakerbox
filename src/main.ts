import { Application, Router } from 'oak'
import { consola } from '~'
import { SERVER_PORT } from './constants.ts'

consola.info('SneakerBox starting...')

const app = new Application()

// Logger
app.use(async (ctx, next) => {
  await next()
  const rt = ctx.response.headers.get('X-Response-Time')
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`)
})

// Timing
app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  ctx.response.headers.set('X-Response-Time', `${ms}ms`)
})

const router = new Router()

router.get('/', (context) => {
  context.response.body = 'Hello world!'
})

app.use(router.routes())
app.use(router.allowedMethods())

const abortController = new AbortController()

consola.start(`Listening on port ${SERVER_PORT}`)
app.listen({ port: SERVER_PORT, signal: abortController.signal })

globalThis.addEventListener('unload', () => abortController.abort())
