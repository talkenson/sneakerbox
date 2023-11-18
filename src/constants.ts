import 'https://deno.land/x/dotenv@v3.2.2/load.ts'
import { pipe } from 'fp-ts/function.ts'
import * as O from 'fp-ts/Option.ts'

const DEFAULT_PORT = 8080

const optionize = <A = string>(as: A | undefined): O.Option<A> => (as !== undefined ? O.some(as) : O.none)
const stringNumberParseWithDefaults = (defaults: number) => (strNumber: string) => {
  const result = parseInt(strNumber)
  if (Number.isNaN(result)) return DEFAULT_PORT
  return result
}

export const SERVER_PORT = pipe(
  Deno.env.get('SERVER_PORT'),
  optionize,
  O.match(
    () => DEFAULT_PORT,
    (port) => stringNumberParseWithDefaults(DEFAULT_PORT)(port),
  ),
)

export const RESPONSE_TIME_HEADER = 'X-Response-Time'
