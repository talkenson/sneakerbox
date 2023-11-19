import { Router } from 'oak'
import { consola } from '~'
import { getPayload } from '$utils/getPayload.ts'
import { CreateSneaker } from '$domain/models/sneaker.ts'
import { SneakerRepository } from '$domain/repos/sneaker.ts'

const sneakerRepository = new SneakerRepository()

export const sneakerRouter = new Router()
  .get('/', (context) => {
    consola.log(context.params.id)
    context.response.body = 'Sneakers'
  })
  .get('/:sneakerId', async (context) => {
    consola.log(context.params.sneakerId)
    if (!context.params.sneakerId) {
      return (context.response.status = 400)
    }

    const result = await sneakerRepository.get(context.params.sneakerId)

    if (!result) {
      return (context.response.status = 404)
    }

    context.response.body = result
  })
  .post('/create', async (context) => {
    const payload = await getPayload(context)
    const parsed = CreateSneaker.safeParse(payload)
    if (!parsed.success) {
      console.log(parsed.error)
      return (context.response.status = 400)
    }

    consola.log(parsed.data)

    const result = await sneakerRepository.add(parsed.data)

    context.response.body = result
  })
