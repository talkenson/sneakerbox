import { Application, Router } from 'oak'
import { consola } from '~'
import { SERVER_PORT } from './constants.ts'
import { addTimingToApp, addLoggingToApp } from './statUtils/index.ts'
import { sneakerRouter } from '$api/sneaker/controller.ts'

consola.info('SneakerBox starting...')

const app = new Application()

addLoggingToApp(app)
addTimingToApp(app)

const router = new Router()
  .get('/', (context) => {
    context.response.body = 'Hello world!'
  })
  .get('/router', (context) => {
    context.response.body = JSON.stringify(router)
  })
  .use('/sneaker', sneakerRouter.routes(), sneakerRouter.allowedMethods())

app.use(router.routes())
app.use(router.allowedMethods())

const abortController = new AbortController()

consola.start(`Listening on port ${SERVER_PORT}`)
app.listen({ port: SERVER_PORT, signal: abortController.signal })

globalThis.addEventListener('unload', () => abortController.abort())
globalThis.addEventListener('error', () => abortController.abort())
globalThis.addEventListener('unhandledrejection', () => abortController.abort())
