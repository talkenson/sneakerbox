import { RouterContext } from 'https://deno.land/x/oak@v12.6.1/router.ts'

export const getPayload = async <T extends string>(context: RouterContext<T>) => {
  return await context.request.body({ type: 'json' }).value
}
