
/**
 * Client
**/

import * as runtime from './runtime/library.d.ts';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model SneakerImage
 * 
 */
export type SneakerImage = {
  id: string
  createdAt: Date
  updatedAt: Date
  url: string
  sneakerId: string
}

/**
 * Model Sneaker
 * 
 */
export type Sneaker = {
  id: string
  createdAt: Date
  updatedAt: Date
  name: string
  description: string
  brand: string
  colorway: string
  releaseDate: Date
  retailPrice: number
  silhouette: string
  sizes: number[]
  quantity: number
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more SneakerImages
 * const sneakerImages = await prisma.sneakerImage.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more SneakerImages
   * const sneakerImages = await prisma.sneakerImage.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.sneakerImage`: Exposes CRUD operations for the **SneakerImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SneakerImages
    * const sneakerImages = await prisma.sneakerImage.findMany()
    * ```
    */
  get sneakerImage(): Prisma.SneakerImageDelegate<GlobalReject>;

  /**
   * `prisma.sneaker`: Exposes CRUD operations for the **Sneaker** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sneakers
    * const sneakers = await prisma.sneaker.findMany()
    * ```
    */
  get sneaker(): Prisma.SneakerDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.12.0
   * Query Engine version: 659ef412370fa3b41cd7bf6e94587c1dfb7f67e7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    SneakerImage: 'SneakerImage',
    Sneaker: 'Sneaker'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type SneakerCountOutputType
   */


  export type SneakerCountOutputType = {
    images: number
  }

  export type SneakerCountOutputTypeSelect = {
    images?: boolean
  }

  export type SneakerCountOutputTypeGetPayload<S extends boolean | null | undefined | SneakerCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? SneakerCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (SneakerCountOutputTypeArgs)
    ? SneakerCountOutputType 
    : S extends { select: any } & (SneakerCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof SneakerCountOutputType ? SneakerCountOutputType[P] : never
  } 
      : SneakerCountOutputType




  // Custom InputTypes

  /**
   * SneakerCountOutputType without action
   */
  export type SneakerCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the SneakerCountOutputType
     */
    select?: SneakerCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model SneakerImage
   */


  export type AggregateSneakerImage = {
    _count: SneakerImageCountAggregateOutputType | null
    _min: SneakerImageMinAggregateOutputType | null
    _max: SneakerImageMaxAggregateOutputType | null
  }

  export type SneakerImageMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    url: string | null
    sneakerId: string | null
  }

  export type SneakerImageMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    url: string | null
    sneakerId: string | null
  }

  export type SneakerImageCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    url: number
    sneakerId: number
    _all: number
  }


  export type SneakerImageMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    url?: true
    sneakerId?: true
  }

  export type SneakerImageMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    url?: true
    sneakerId?: true
  }

  export type SneakerImageCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    url?: true
    sneakerId?: true
    _all?: true
  }

  export type SneakerImageAggregateArgs = {
    /**
     * Filter which SneakerImage to aggregate.
     */
    where?: SneakerImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SneakerImages to fetch.
     */
    orderBy?: Enumerable<SneakerImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SneakerImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SneakerImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SneakerImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SneakerImages
    **/
    _count?: true | SneakerImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SneakerImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SneakerImageMaxAggregateInputType
  }

  export type GetSneakerImageAggregateType<T extends SneakerImageAggregateArgs> = {
        [P in keyof T & keyof AggregateSneakerImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSneakerImage[P]>
      : GetScalarType<T[P], AggregateSneakerImage[P]>
  }




  export type SneakerImageGroupByArgs = {
    where?: SneakerImageWhereInput
    orderBy?: Enumerable<SneakerImageOrderByWithAggregationInput>
    by: SneakerImageScalarFieldEnum[]
    having?: SneakerImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SneakerImageCountAggregateInputType | true
    _min?: SneakerImageMinAggregateInputType
    _max?: SneakerImageMaxAggregateInputType
  }


  export type SneakerImageGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    url: string
    sneakerId: string
    _count: SneakerImageCountAggregateOutputType | null
    _min: SneakerImageMinAggregateOutputType | null
    _max: SneakerImageMaxAggregateOutputType | null
  }

  type GetSneakerImageGroupByPayload<T extends SneakerImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<SneakerImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SneakerImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SneakerImageGroupByOutputType[P]>
            : GetScalarType<T[P], SneakerImageGroupByOutputType[P]>
        }
      >
    >


  export type SneakerImageSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    url?: boolean
    sneakerId?: boolean
    sneaker?: boolean | SneakerArgs
  }


  export type SneakerImageInclude = {
    sneaker?: boolean | SneakerArgs
  }

  export type SneakerImageGetPayload<S extends boolean | null | undefined | SneakerImageArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? SneakerImage :
    S extends undefined ? never :
    S extends { include: any } & (SneakerImageArgs | SneakerImageFindManyArgs)
    ? SneakerImage  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'sneaker' ? SneakerGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (SneakerImageArgs | SneakerImageFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'sneaker' ? SneakerGetPayload<S['select'][P]> :  P extends keyof SneakerImage ? SneakerImage[P] : never
  } 
      : SneakerImage


  type SneakerImageCountArgs = 
    Omit<SneakerImageFindManyArgs, 'select' | 'include'> & {
      select?: SneakerImageCountAggregateInputType | true
    }

  export interface SneakerImageDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one SneakerImage that matches the filter.
     * @param {SneakerImageFindUniqueArgs} args - Arguments to find a SneakerImage
     * @example
     * // Get one SneakerImage
     * const sneakerImage = await prisma.sneakerImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SneakerImageFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SneakerImageFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'SneakerImage'> extends True ? Prisma__SneakerImageClient<SneakerImageGetPayload<T>> : Prisma__SneakerImageClient<SneakerImageGetPayload<T> | null, null>

    /**
     * Find one SneakerImage that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SneakerImageFindUniqueOrThrowArgs} args - Arguments to find a SneakerImage
     * @example
     * // Get one SneakerImage
     * const sneakerImage = await prisma.sneakerImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SneakerImageFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SneakerImageFindUniqueOrThrowArgs>
    ): Prisma__SneakerImageClient<SneakerImageGetPayload<T>>

    /**
     * Find the first SneakerImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SneakerImageFindFirstArgs} args - Arguments to find a SneakerImage
     * @example
     * // Get one SneakerImage
     * const sneakerImage = await prisma.sneakerImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SneakerImageFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SneakerImageFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'SneakerImage'> extends True ? Prisma__SneakerImageClient<SneakerImageGetPayload<T>> : Prisma__SneakerImageClient<SneakerImageGetPayload<T> | null, null>

    /**
     * Find the first SneakerImage that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SneakerImageFindFirstOrThrowArgs} args - Arguments to find a SneakerImage
     * @example
     * // Get one SneakerImage
     * const sneakerImage = await prisma.sneakerImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SneakerImageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SneakerImageFindFirstOrThrowArgs>
    ): Prisma__SneakerImageClient<SneakerImageGetPayload<T>>

    /**
     * Find zero or more SneakerImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SneakerImageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SneakerImages
     * const sneakerImages = await prisma.sneakerImage.findMany()
     * 
     * // Get first 10 SneakerImages
     * const sneakerImages = await prisma.sneakerImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sneakerImageWithIdOnly = await prisma.sneakerImage.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SneakerImageFindManyArgs>(
      args?: SelectSubset<T, SneakerImageFindManyArgs>
    ): Prisma.PrismaPromise<Array<SneakerImageGetPayload<T>>>

    /**
     * Create a SneakerImage.
     * @param {SneakerImageCreateArgs} args - Arguments to create a SneakerImage.
     * @example
     * // Create one SneakerImage
     * const SneakerImage = await prisma.sneakerImage.create({
     *   data: {
     *     // ... data to create a SneakerImage
     *   }
     * })
     * 
    **/
    create<T extends SneakerImageCreateArgs>(
      args: SelectSubset<T, SneakerImageCreateArgs>
    ): Prisma__SneakerImageClient<SneakerImageGetPayload<T>>

    /**
     * Create many SneakerImages.
     *     @param {SneakerImageCreateManyArgs} args - Arguments to create many SneakerImages.
     *     @example
     *     // Create many SneakerImages
     *     const sneakerImage = await prisma.sneakerImage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SneakerImageCreateManyArgs>(
      args?: SelectSubset<T, SneakerImageCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SneakerImage.
     * @param {SneakerImageDeleteArgs} args - Arguments to delete one SneakerImage.
     * @example
     * // Delete one SneakerImage
     * const SneakerImage = await prisma.sneakerImage.delete({
     *   where: {
     *     // ... filter to delete one SneakerImage
     *   }
     * })
     * 
    **/
    delete<T extends SneakerImageDeleteArgs>(
      args: SelectSubset<T, SneakerImageDeleteArgs>
    ): Prisma__SneakerImageClient<SneakerImageGetPayload<T>>

    /**
     * Update one SneakerImage.
     * @param {SneakerImageUpdateArgs} args - Arguments to update one SneakerImage.
     * @example
     * // Update one SneakerImage
     * const sneakerImage = await prisma.sneakerImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SneakerImageUpdateArgs>(
      args: SelectSubset<T, SneakerImageUpdateArgs>
    ): Prisma__SneakerImageClient<SneakerImageGetPayload<T>>

    /**
     * Delete zero or more SneakerImages.
     * @param {SneakerImageDeleteManyArgs} args - Arguments to filter SneakerImages to delete.
     * @example
     * // Delete a few SneakerImages
     * const { count } = await prisma.sneakerImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SneakerImageDeleteManyArgs>(
      args?: SelectSubset<T, SneakerImageDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SneakerImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SneakerImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SneakerImages
     * const sneakerImage = await prisma.sneakerImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SneakerImageUpdateManyArgs>(
      args: SelectSubset<T, SneakerImageUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SneakerImage.
     * @param {SneakerImageUpsertArgs} args - Arguments to update or create a SneakerImage.
     * @example
     * // Update or create a SneakerImage
     * const sneakerImage = await prisma.sneakerImage.upsert({
     *   create: {
     *     // ... data to create a SneakerImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SneakerImage we want to update
     *   }
     * })
    **/
    upsert<T extends SneakerImageUpsertArgs>(
      args: SelectSubset<T, SneakerImageUpsertArgs>
    ): Prisma__SneakerImageClient<SneakerImageGetPayload<T>>

    /**
     * Count the number of SneakerImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SneakerImageCountArgs} args - Arguments to filter SneakerImages to count.
     * @example
     * // Count the number of SneakerImages
     * const count = await prisma.sneakerImage.count({
     *   where: {
     *     // ... the filter for the SneakerImages we want to count
     *   }
     * })
    **/
    count<T extends SneakerImageCountArgs>(
      args?: Subset<T, SneakerImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SneakerImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SneakerImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SneakerImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SneakerImageAggregateArgs>(args: Subset<T, SneakerImageAggregateArgs>): Prisma.PrismaPromise<GetSneakerImageAggregateType<T>>

    /**
     * Group by SneakerImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SneakerImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SneakerImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SneakerImageGroupByArgs['orderBy'] }
        : { orderBy?: SneakerImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SneakerImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSneakerImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for SneakerImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SneakerImageClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    sneaker<T extends SneakerArgs= {}>(args?: Subset<T, SneakerArgs>): Prisma__SneakerClient<SneakerGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * SneakerImage base type for findUnique actions
   */
  export type SneakerImageFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the SneakerImage
     */
    select?: SneakerImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SneakerImageInclude | null
    /**
     * Filter, which SneakerImage to fetch.
     */
    where: SneakerImageWhereUniqueInput
  }

  /**
   * SneakerImage findUnique
   */
  export interface SneakerImageFindUniqueArgs extends SneakerImageFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SneakerImage findUniqueOrThrow
   */
  export type SneakerImageFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the SneakerImage
     */
    select?: SneakerImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SneakerImageInclude | null
    /**
     * Filter, which SneakerImage to fetch.
     */
    where: SneakerImageWhereUniqueInput
  }


  /**
   * SneakerImage base type for findFirst actions
   */
  export type SneakerImageFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the SneakerImage
     */
    select?: SneakerImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SneakerImageInclude | null
    /**
     * Filter, which SneakerImage to fetch.
     */
    where?: SneakerImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SneakerImages to fetch.
     */
    orderBy?: Enumerable<SneakerImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SneakerImages.
     */
    cursor?: SneakerImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SneakerImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SneakerImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SneakerImages.
     */
    distinct?: Enumerable<SneakerImageScalarFieldEnum>
  }

  /**
   * SneakerImage findFirst
   */
  export interface SneakerImageFindFirstArgs extends SneakerImageFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SneakerImage findFirstOrThrow
   */
  export type SneakerImageFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the SneakerImage
     */
    select?: SneakerImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SneakerImageInclude | null
    /**
     * Filter, which SneakerImage to fetch.
     */
    where?: SneakerImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SneakerImages to fetch.
     */
    orderBy?: Enumerable<SneakerImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SneakerImages.
     */
    cursor?: SneakerImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SneakerImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SneakerImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SneakerImages.
     */
    distinct?: Enumerable<SneakerImageScalarFieldEnum>
  }


  /**
   * SneakerImage findMany
   */
  export type SneakerImageFindManyArgs = {
    /**
     * Select specific fields to fetch from the SneakerImage
     */
    select?: SneakerImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SneakerImageInclude | null
    /**
     * Filter, which SneakerImages to fetch.
     */
    where?: SneakerImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SneakerImages to fetch.
     */
    orderBy?: Enumerable<SneakerImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SneakerImages.
     */
    cursor?: SneakerImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SneakerImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SneakerImages.
     */
    skip?: number
    distinct?: Enumerable<SneakerImageScalarFieldEnum>
  }


  /**
   * SneakerImage create
   */
  export type SneakerImageCreateArgs = {
    /**
     * Select specific fields to fetch from the SneakerImage
     */
    select?: SneakerImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SneakerImageInclude | null
    /**
     * The data needed to create a SneakerImage.
     */
    data: XOR<SneakerImageCreateInput, SneakerImageUncheckedCreateInput>
  }


  /**
   * SneakerImage createMany
   */
  export type SneakerImageCreateManyArgs = {
    /**
     * The data used to create many SneakerImages.
     */
    data: Enumerable<SneakerImageCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * SneakerImage update
   */
  export type SneakerImageUpdateArgs = {
    /**
     * Select specific fields to fetch from the SneakerImage
     */
    select?: SneakerImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SneakerImageInclude | null
    /**
     * The data needed to update a SneakerImage.
     */
    data: XOR<SneakerImageUpdateInput, SneakerImageUncheckedUpdateInput>
    /**
     * Choose, which SneakerImage to update.
     */
    where: SneakerImageWhereUniqueInput
  }


  /**
   * SneakerImage updateMany
   */
  export type SneakerImageUpdateManyArgs = {
    /**
     * The data used to update SneakerImages.
     */
    data: XOR<SneakerImageUpdateManyMutationInput, SneakerImageUncheckedUpdateManyInput>
    /**
     * Filter which SneakerImages to update
     */
    where?: SneakerImageWhereInput
  }


  /**
   * SneakerImage upsert
   */
  export type SneakerImageUpsertArgs = {
    /**
     * Select specific fields to fetch from the SneakerImage
     */
    select?: SneakerImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SneakerImageInclude | null
    /**
     * The filter to search for the SneakerImage to update in case it exists.
     */
    where: SneakerImageWhereUniqueInput
    /**
     * In case the SneakerImage found by the `where` argument doesn't exist, create a new SneakerImage with this data.
     */
    create: XOR<SneakerImageCreateInput, SneakerImageUncheckedCreateInput>
    /**
     * In case the SneakerImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SneakerImageUpdateInput, SneakerImageUncheckedUpdateInput>
  }


  /**
   * SneakerImage delete
   */
  export type SneakerImageDeleteArgs = {
    /**
     * Select specific fields to fetch from the SneakerImage
     */
    select?: SneakerImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SneakerImageInclude | null
    /**
     * Filter which SneakerImage to delete.
     */
    where: SneakerImageWhereUniqueInput
  }


  /**
   * SneakerImage deleteMany
   */
  export type SneakerImageDeleteManyArgs = {
    /**
     * Filter which SneakerImages to delete
     */
    where?: SneakerImageWhereInput
  }


  /**
   * SneakerImage without action
   */
  export type SneakerImageArgs = {
    /**
     * Select specific fields to fetch from the SneakerImage
     */
    select?: SneakerImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SneakerImageInclude | null
  }



  /**
   * Model Sneaker
   */


  export type AggregateSneaker = {
    _count: SneakerCountAggregateOutputType | null
    _avg: SneakerAvgAggregateOutputType | null
    _sum: SneakerSumAggregateOutputType | null
    _min: SneakerMinAggregateOutputType | null
    _max: SneakerMaxAggregateOutputType | null
  }

  export type SneakerAvgAggregateOutputType = {
    retailPrice: number | null
    sizes: number | null
    quantity: number | null
  }

  export type SneakerSumAggregateOutputType = {
    retailPrice: number | null
    sizes: number[] | null
    quantity: number | null
  }

  export type SneakerMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    description: string | null
    brand: string | null
    colorway: string | null
    releaseDate: Date | null
    retailPrice: number | null
    silhouette: string | null
    quantity: number | null
  }

  export type SneakerMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    description: string | null
    brand: string | null
    colorway: string | null
    releaseDate: Date | null
    retailPrice: number | null
    silhouette: string | null
    quantity: number | null
  }

  export type SneakerCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    description: number
    brand: number
    colorway: number
    releaseDate: number
    retailPrice: number
    silhouette: number
    sizes: number
    quantity: number
    _all: number
  }


  export type SneakerAvgAggregateInputType = {
    retailPrice?: true
    sizes?: true
    quantity?: true
  }

  export type SneakerSumAggregateInputType = {
    retailPrice?: true
    sizes?: true
    quantity?: true
  }

  export type SneakerMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    description?: true
    brand?: true
    colorway?: true
    releaseDate?: true
    retailPrice?: true
    silhouette?: true
    quantity?: true
  }

  export type SneakerMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    description?: true
    brand?: true
    colorway?: true
    releaseDate?: true
    retailPrice?: true
    silhouette?: true
    quantity?: true
  }

  export type SneakerCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    description?: true
    brand?: true
    colorway?: true
    releaseDate?: true
    retailPrice?: true
    silhouette?: true
    sizes?: true
    quantity?: true
    _all?: true
  }

  export type SneakerAggregateArgs = {
    /**
     * Filter which Sneaker to aggregate.
     */
    where?: SneakerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sneakers to fetch.
     */
    orderBy?: Enumerable<SneakerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SneakerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sneakers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sneakers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sneakers
    **/
    _count?: true | SneakerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SneakerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SneakerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SneakerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SneakerMaxAggregateInputType
  }

  export type GetSneakerAggregateType<T extends SneakerAggregateArgs> = {
        [P in keyof T & keyof AggregateSneaker]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSneaker[P]>
      : GetScalarType<T[P], AggregateSneaker[P]>
  }




  export type SneakerGroupByArgs = {
    where?: SneakerWhereInput
    orderBy?: Enumerable<SneakerOrderByWithAggregationInput>
    by: SneakerScalarFieldEnum[]
    having?: SneakerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SneakerCountAggregateInputType | true
    _avg?: SneakerAvgAggregateInputType
    _sum?: SneakerSumAggregateInputType
    _min?: SneakerMinAggregateInputType
    _max?: SneakerMaxAggregateInputType
  }


  export type SneakerGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    description: string
    brand: string
    colorway: string
    releaseDate: Date
    retailPrice: number
    silhouette: string
    sizes: number[]
    quantity: number
    _count: SneakerCountAggregateOutputType | null
    _avg: SneakerAvgAggregateOutputType | null
    _sum: SneakerSumAggregateOutputType | null
    _min: SneakerMinAggregateOutputType | null
    _max: SneakerMaxAggregateOutputType | null
  }

  type GetSneakerGroupByPayload<T extends SneakerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<SneakerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SneakerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SneakerGroupByOutputType[P]>
            : GetScalarType<T[P], SneakerGroupByOutputType[P]>
        }
      >
    >


  export type SneakerSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    description?: boolean
    brand?: boolean
    colorway?: boolean
    releaseDate?: boolean
    retailPrice?: boolean
    silhouette?: boolean
    sizes?: boolean
    quantity?: boolean
    images?: boolean | Sneaker$imagesArgs
    _count?: boolean | SneakerCountOutputTypeArgs
  }


  export type SneakerInclude = {
    images?: boolean | Sneaker$imagesArgs
    _count?: boolean | SneakerCountOutputTypeArgs
  }

  export type SneakerGetPayload<S extends boolean | null | undefined | SneakerArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Sneaker :
    S extends undefined ? never :
    S extends { include: any } & (SneakerArgs | SneakerFindManyArgs)
    ? Sneaker  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'images' ? Array < SneakerImageGetPayload<S['include'][P]>>  :
        P extends '_count' ? SneakerCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (SneakerArgs | SneakerFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'images' ? Array < SneakerImageGetPayload<S['select'][P]>>  :
        P extends '_count' ? SneakerCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Sneaker ? Sneaker[P] : never
  } 
      : Sneaker


  type SneakerCountArgs = 
    Omit<SneakerFindManyArgs, 'select' | 'include'> & {
      select?: SneakerCountAggregateInputType | true
    }

  export interface SneakerDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Sneaker that matches the filter.
     * @param {SneakerFindUniqueArgs} args - Arguments to find a Sneaker
     * @example
     * // Get one Sneaker
     * const sneaker = await prisma.sneaker.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SneakerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SneakerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Sneaker'> extends True ? Prisma__SneakerClient<SneakerGetPayload<T>> : Prisma__SneakerClient<SneakerGetPayload<T> | null, null>

    /**
     * Find one Sneaker that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SneakerFindUniqueOrThrowArgs} args - Arguments to find a Sneaker
     * @example
     * // Get one Sneaker
     * const sneaker = await prisma.sneaker.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SneakerFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SneakerFindUniqueOrThrowArgs>
    ): Prisma__SneakerClient<SneakerGetPayload<T>>

    /**
     * Find the first Sneaker that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SneakerFindFirstArgs} args - Arguments to find a Sneaker
     * @example
     * // Get one Sneaker
     * const sneaker = await prisma.sneaker.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SneakerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SneakerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Sneaker'> extends True ? Prisma__SneakerClient<SneakerGetPayload<T>> : Prisma__SneakerClient<SneakerGetPayload<T> | null, null>

    /**
     * Find the first Sneaker that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SneakerFindFirstOrThrowArgs} args - Arguments to find a Sneaker
     * @example
     * // Get one Sneaker
     * const sneaker = await prisma.sneaker.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SneakerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SneakerFindFirstOrThrowArgs>
    ): Prisma__SneakerClient<SneakerGetPayload<T>>

    /**
     * Find zero or more Sneakers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SneakerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sneakers
     * const sneakers = await prisma.sneaker.findMany()
     * 
     * // Get first 10 Sneakers
     * const sneakers = await prisma.sneaker.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sneakerWithIdOnly = await prisma.sneaker.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SneakerFindManyArgs>(
      args?: SelectSubset<T, SneakerFindManyArgs>
    ): Prisma.PrismaPromise<Array<SneakerGetPayload<T>>>

    /**
     * Create a Sneaker.
     * @param {SneakerCreateArgs} args - Arguments to create a Sneaker.
     * @example
     * // Create one Sneaker
     * const Sneaker = await prisma.sneaker.create({
     *   data: {
     *     // ... data to create a Sneaker
     *   }
     * })
     * 
    **/
    create<T extends SneakerCreateArgs>(
      args: SelectSubset<T, SneakerCreateArgs>
    ): Prisma__SneakerClient<SneakerGetPayload<T>>

    /**
     * Create many Sneakers.
     *     @param {SneakerCreateManyArgs} args - Arguments to create many Sneakers.
     *     @example
     *     // Create many Sneakers
     *     const sneaker = await prisma.sneaker.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SneakerCreateManyArgs>(
      args?: SelectSubset<T, SneakerCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sneaker.
     * @param {SneakerDeleteArgs} args - Arguments to delete one Sneaker.
     * @example
     * // Delete one Sneaker
     * const Sneaker = await prisma.sneaker.delete({
     *   where: {
     *     // ... filter to delete one Sneaker
     *   }
     * })
     * 
    **/
    delete<T extends SneakerDeleteArgs>(
      args: SelectSubset<T, SneakerDeleteArgs>
    ): Prisma__SneakerClient<SneakerGetPayload<T>>

    /**
     * Update one Sneaker.
     * @param {SneakerUpdateArgs} args - Arguments to update one Sneaker.
     * @example
     * // Update one Sneaker
     * const sneaker = await prisma.sneaker.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SneakerUpdateArgs>(
      args: SelectSubset<T, SneakerUpdateArgs>
    ): Prisma__SneakerClient<SneakerGetPayload<T>>

    /**
     * Delete zero or more Sneakers.
     * @param {SneakerDeleteManyArgs} args - Arguments to filter Sneakers to delete.
     * @example
     * // Delete a few Sneakers
     * const { count } = await prisma.sneaker.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SneakerDeleteManyArgs>(
      args?: SelectSubset<T, SneakerDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sneakers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SneakerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sneakers
     * const sneaker = await prisma.sneaker.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SneakerUpdateManyArgs>(
      args: SelectSubset<T, SneakerUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sneaker.
     * @param {SneakerUpsertArgs} args - Arguments to update or create a Sneaker.
     * @example
     * // Update or create a Sneaker
     * const sneaker = await prisma.sneaker.upsert({
     *   create: {
     *     // ... data to create a Sneaker
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sneaker we want to update
     *   }
     * })
    **/
    upsert<T extends SneakerUpsertArgs>(
      args: SelectSubset<T, SneakerUpsertArgs>
    ): Prisma__SneakerClient<SneakerGetPayload<T>>

    /**
     * Count the number of Sneakers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SneakerCountArgs} args - Arguments to filter Sneakers to count.
     * @example
     * // Count the number of Sneakers
     * const count = await prisma.sneaker.count({
     *   where: {
     *     // ... the filter for the Sneakers we want to count
     *   }
     * })
    **/
    count<T extends SneakerCountArgs>(
      args?: Subset<T, SneakerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SneakerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sneaker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SneakerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SneakerAggregateArgs>(args: Subset<T, SneakerAggregateArgs>): Prisma.PrismaPromise<GetSneakerAggregateType<T>>

    /**
     * Group by Sneaker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SneakerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SneakerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SneakerGroupByArgs['orderBy'] }
        : { orderBy?: SneakerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SneakerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSneakerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Sneaker.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SneakerClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    images<T extends Sneaker$imagesArgs= {}>(args?: Subset<T, Sneaker$imagesArgs>): Prisma.PrismaPromise<Array<SneakerImageGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Sneaker base type for findUnique actions
   */
  export type SneakerFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Sneaker
     */
    select?: SneakerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SneakerInclude | null
    /**
     * Filter, which Sneaker to fetch.
     */
    where: SneakerWhereUniqueInput
  }

  /**
   * Sneaker findUnique
   */
  export interface SneakerFindUniqueArgs extends SneakerFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Sneaker findUniqueOrThrow
   */
  export type SneakerFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Sneaker
     */
    select?: SneakerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SneakerInclude | null
    /**
     * Filter, which Sneaker to fetch.
     */
    where: SneakerWhereUniqueInput
  }


  /**
   * Sneaker base type for findFirst actions
   */
  export type SneakerFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Sneaker
     */
    select?: SneakerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SneakerInclude | null
    /**
     * Filter, which Sneaker to fetch.
     */
    where?: SneakerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sneakers to fetch.
     */
    orderBy?: Enumerable<SneakerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sneakers.
     */
    cursor?: SneakerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sneakers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sneakers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sneakers.
     */
    distinct?: Enumerable<SneakerScalarFieldEnum>
  }

  /**
   * Sneaker findFirst
   */
  export interface SneakerFindFirstArgs extends SneakerFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Sneaker findFirstOrThrow
   */
  export type SneakerFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Sneaker
     */
    select?: SneakerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SneakerInclude | null
    /**
     * Filter, which Sneaker to fetch.
     */
    where?: SneakerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sneakers to fetch.
     */
    orderBy?: Enumerable<SneakerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sneakers.
     */
    cursor?: SneakerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sneakers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sneakers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sneakers.
     */
    distinct?: Enumerable<SneakerScalarFieldEnum>
  }


  /**
   * Sneaker findMany
   */
  export type SneakerFindManyArgs = {
    /**
     * Select specific fields to fetch from the Sneaker
     */
    select?: SneakerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SneakerInclude | null
    /**
     * Filter, which Sneakers to fetch.
     */
    where?: SneakerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sneakers to fetch.
     */
    orderBy?: Enumerable<SneakerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sneakers.
     */
    cursor?: SneakerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sneakers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sneakers.
     */
    skip?: number
    distinct?: Enumerable<SneakerScalarFieldEnum>
  }


  /**
   * Sneaker create
   */
  export type SneakerCreateArgs = {
    /**
     * Select specific fields to fetch from the Sneaker
     */
    select?: SneakerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SneakerInclude | null
    /**
     * The data needed to create a Sneaker.
     */
    data: XOR<SneakerCreateInput, SneakerUncheckedCreateInput>
  }


  /**
   * Sneaker createMany
   */
  export type SneakerCreateManyArgs = {
    /**
     * The data used to create many Sneakers.
     */
    data: Enumerable<SneakerCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Sneaker update
   */
  export type SneakerUpdateArgs = {
    /**
     * Select specific fields to fetch from the Sneaker
     */
    select?: SneakerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SneakerInclude | null
    /**
     * The data needed to update a Sneaker.
     */
    data: XOR<SneakerUpdateInput, SneakerUncheckedUpdateInput>
    /**
     * Choose, which Sneaker to update.
     */
    where: SneakerWhereUniqueInput
  }


  /**
   * Sneaker updateMany
   */
  export type SneakerUpdateManyArgs = {
    /**
     * The data used to update Sneakers.
     */
    data: XOR<SneakerUpdateManyMutationInput, SneakerUncheckedUpdateManyInput>
    /**
     * Filter which Sneakers to update
     */
    where?: SneakerWhereInput
  }


  /**
   * Sneaker upsert
   */
  export type SneakerUpsertArgs = {
    /**
     * Select specific fields to fetch from the Sneaker
     */
    select?: SneakerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SneakerInclude | null
    /**
     * The filter to search for the Sneaker to update in case it exists.
     */
    where: SneakerWhereUniqueInput
    /**
     * In case the Sneaker found by the `where` argument doesn't exist, create a new Sneaker with this data.
     */
    create: XOR<SneakerCreateInput, SneakerUncheckedCreateInput>
    /**
     * In case the Sneaker was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SneakerUpdateInput, SneakerUncheckedUpdateInput>
  }


  /**
   * Sneaker delete
   */
  export type SneakerDeleteArgs = {
    /**
     * Select specific fields to fetch from the Sneaker
     */
    select?: SneakerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SneakerInclude | null
    /**
     * Filter which Sneaker to delete.
     */
    where: SneakerWhereUniqueInput
  }


  /**
   * Sneaker deleteMany
   */
  export type SneakerDeleteManyArgs = {
    /**
     * Filter which Sneakers to delete
     */
    where?: SneakerWhereInput
  }


  /**
   * Sneaker.images
   */
  export type Sneaker$imagesArgs = {
    /**
     * Select specific fields to fetch from the SneakerImage
     */
    select?: SneakerImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SneakerImageInclude | null
    where?: SneakerImageWhereInput
    orderBy?: Enumerable<SneakerImageOrderByWithRelationInput>
    cursor?: SneakerImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<SneakerImageScalarFieldEnum>
  }


  /**
   * Sneaker without action
   */
  export type SneakerArgs = {
    /**
     * Select specific fields to fetch from the Sneaker
     */
    select?: SneakerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SneakerInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SneakerImageScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    url: 'url',
    sneakerId: 'sneakerId'
  };

  export type SneakerImageScalarFieldEnum = (typeof SneakerImageScalarFieldEnum)[keyof typeof SneakerImageScalarFieldEnum]


  export const SneakerScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    description: 'description',
    brand: 'brand',
    colorway: 'colorway',
    releaseDate: 'releaseDate',
    retailPrice: 'retailPrice',
    silhouette: 'silhouette',
    sizes: 'sizes',
    quantity: 'quantity'
  };

  export type SneakerScalarFieldEnum = (typeof SneakerScalarFieldEnum)[keyof typeof SneakerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type SneakerImageWhereInput = {
    AND?: Enumerable<SneakerImageWhereInput>
    OR?: Enumerable<SneakerImageWhereInput>
    NOT?: Enumerable<SneakerImageWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    url?: StringFilter | string
    sneakerId?: StringFilter | string
    sneaker?: XOR<SneakerRelationFilter, SneakerWhereInput>
  }

  export type SneakerImageOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    url?: SortOrder
    sneakerId?: SortOrder
    sneaker?: SneakerOrderByWithRelationInput
  }

  export type SneakerImageWhereUniqueInput = {
    id?: string
  }

  export type SneakerImageOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    url?: SortOrder
    sneakerId?: SortOrder
    _count?: SneakerImageCountOrderByAggregateInput
    _max?: SneakerImageMaxOrderByAggregateInput
    _min?: SneakerImageMinOrderByAggregateInput
  }

  export type SneakerImageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SneakerImageScalarWhereWithAggregatesInput>
    OR?: Enumerable<SneakerImageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SneakerImageScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    url?: StringWithAggregatesFilter | string
    sneakerId?: StringWithAggregatesFilter | string
  }

  export type SneakerWhereInput = {
    AND?: Enumerable<SneakerWhereInput>
    OR?: Enumerable<SneakerWhereInput>
    NOT?: Enumerable<SneakerWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    name?: StringFilter | string
    description?: StringFilter | string
    brand?: StringFilter | string
    colorway?: StringFilter | string
    releaseDate?: DateTimeFilter | Date | string
    retailPrice?: FloatFilter | number
    silhouette?: StringFilter | string
    sizes?: FloatNullableListFilter
    quantity?: FloatFilter | number
    images?: SneakerImageListRelationFilter
  }

  export type SneakerOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    brand?: SortOrder
    colorway?: SortOrder
    releaseDate?: SortOrder
    retailPrice?: SortOrder
    silhouette?: SortOrder
    sizes?: SortOrder
    quantity?: SortOrder
    images?: SneakerImageOrderByRelationAggregateInput
  }

  export type SneakerWhereUniqueInput = {
    id?: string
  }

  export type SneakerOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    brand?: SortOrder
    colorway?: SortOrder
    releaseDate?: SortOrder
    retailPrice?: SortOrder
    silhouette?: SortOrder
    sizes?: SortOrder
    quantity?: SortOrder
    _count?: SneakerCountOrderByAggregateInput
    _avg?: SneakerAvgOrderByAggregateInput
    _max?: SneakerMaxOrderByAggregateInput
    _min?: SneakerMinOrderByAggregateInput
    _sum?: SneakerSumOrderByAggregateInput
  }

  export type SneakerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SneakerScalarWhereWithAggregatesInput>
    OR?: Enumerable<SneakerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SneakerScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    name?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    brand?: StringWithAggregatesFilter | string
    colorway?: StringWithAggregatesFilter | string
    releaseDate?: DateTimeWithAggregatesFilter | Date | string
    retailPrice?: FloatWithAggregatesFilter | number
    silhouette?: StringWithAggregatesFilter | string
    sizes?: FloatNullableListFilter
    quantity?: FloatWithAggregatesFilter | number
  }

  export type SneakerImageCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    url: string
    sneaker: SneakerCreateNestedOneWithoutImagesInput
  }

  export type SneakerImageUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    url: string
    sneakerId: string
  }

  export type SneakerImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    sneaker?: SneakerUpdateOneRequiredWithoutImagesNestedInput
  }

  export type SneakerImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    sneakerId?: StringFieldUpdateOperationsInput | string
  }

  export type SneakerImageCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    url: string
    sneakerId: string
  }

  export type SneakerImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type SneakerImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    sneakerId?: StringFieldUpdateOperationsInput | string
  }

  export type SneakerCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
    brand: string
    colorway: string
    releaseDate: Date | string
    retailPrice: number
    silhouette: string
    sizes?: SneakerCreatesizesInput | Enumerable<number>
    quantity: number
    images?: SneakerImageCreateNestedManyWithoutSneakerInput
  }

  export type SneakerUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
    brand: string
    colorway: string
    releaseDate: Date | string
    retailPrice: number
    silhouette: string
    sizes?: SneakerCreatesizesInput | Enumerable<number>
    quantity: number
    images?: SneakerImageUncheckedCreateNestedManyWithoutSneakerInput
  }

  export type SneakerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    colorway?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    retailPrice?: FloatFieldUpdateOperationsInput | number
    silhouette?: StringFieldUpdateOperationsInput | string
    sizes?: SneakerUpdatesizesInput | Enumerable<number>
    quantity?: FloatFieldUpdateOperationsInput | number
    images?: SneakerImageUpdateManyWithoutSneakerNestedInput
  }

  export type SneakerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    colorway?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    retailPrice?: FloatFieldUpdateOperationsInput | number
    silhouette?: StringFieldUpdateOperationsInput | string
    sizes?: SneakerUpdatesizesInput | Enumerable<number>
    quantity?: FloatFieldUpdateOperationsInput | number
    images?: SneakerImageUncheckedUpdateManyWithoutSneakerNestedInput
  }

  export type SneakerCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
    brand: string
    colorway: string
    releaseDate: Date | string
    retailPrice: number
    silhouette: string
    sizes?: SneakerCreatesizesInput | Enumerable<number>
    quantity: number
  }

  export type SneakerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    colorway?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    retailPrice?: FloatFieldUpdateOperationsInput | number
    silhouette?: StringFieldUpdateOperationsInput | string
    sizes?: SneakerUpdatesizesInput | Enumerable<number>
    quantity?: FloatFieldUpdateOperationsInput | number
  }

  export type SneakerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    colorway?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    retailPrice?: FloatFieldUpdateOperationsInput | number
    silhouette?: StringFieldUpdateOperationsInput | string
    sizes?: SneakerUpdatesizesInput | Enumerable<number>
    quantity?: FloatFieldUpdateOperationsInput | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type SneakerRelationFilter = {
    is?: SneakerWhereInput
    isNot?: SneakerWhereInput
  }

  export type SneakerImageCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    url?: SortOrder
    sneakerId?: SortOrder
  }

  export type SneakerImageMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    url?: SortOrder
    sneakerId?: SortOrder
  }

  export type SneakerImageMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    url?: SortOrder
    sneakerId?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type FloatNullableListFilter = {
    equals?: Enumerable<number> | null
    has?: number | null
    hasEvery?: Enumerable<number>
    hasSome?: Enumerable<number>
    isEmpty?: boolean
  }

  export type SneakerImageListRelationFilter = {
    every?: SneakerImageWhereInput
    some?: SneakerImageWhereInput
    none?: SneakerImageWhereInput
  }

  export type SneakerImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SneakerCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    brand?: SortOrder
    colorway?: SortOrder
    releaseDate?: SortOrder
    retailPrice?: SortOrder
    silhouette?: SortOrder
    sizes?: SortOrder
    quantity?: SortOrder
  }

  export type SneakerAvgOrderByAggregateInput = {
    retailPrice?: SortOrder
    sizes?: SortOrder
    quantity?: SortOrder
  }

  export type SneakerMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    brand?: SortOrder
    colorway?: SortOrder
    releaseDate?: SortOrder
    retailPrice?: SortOrder
    silhouette?: SortOrder
    quantity?: SortOrder
  }

  export type SneakerMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    brand?: SortOrder
    colorway?: SortOrder
    releaseDate?: SortOrder
    retailPrice?: SortOrder
    silhouette?: SortOrder
    quantity?: SortOrder
  }

  export type SneakerSumOrderByAggregateInput = {
    retailPrice?: SortOrder
    sizes?: SortOrder
    quantity?: SortOrder
  }

  export type FloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type SneakerCreateNestedOneWithoutImagesInput = {
    create?: XOR<SneakerCreateWithoutImagesInput, SneakerUncheckedCreateWithoutImagesInput>
    connectOrCreate?: SneakerCreateOrConnectWithoutImagesInput
    connect?: SneakerWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SneakerUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<SneakerCreateWithoutImagesInput, SneakerUncheckedCreateWithoutImagesInput>
    connectOrCreate?: SneakerCreateOrConnectWithoutImagesInput
    upsert?: SneakerUpsertWithoutImagesInput
    connect?: SneakerWhereUniqueInput
    update?: XOR<SneakerUpdateWithoutImagesInput, SneakerUncheckedUpdateWithoutImagesInput>
  }

  export type SneakerCreatesizesInput = {
    set: Enumerable<number>
  }

  export type SneakerImageCreateNestedManyWithoutSneakerInput = {
    create?: XOR<Enumerable<SneakerImageCreateWithoutSneakerInput>, Enumerable<SneakerImageUncheckedCreateWithoutSneakerInput>>
    connectOrCreate?: Enumerable<SneakerImageCreateOrConnectWithoutSneakerInput>
    createMany?: SneakerImageCreateManySneakerInputEnvelope
    connect?: Enumerable<SneakerImageWhereUniqueInput>
  }

  export type SneakerImageUncheckedCreateNestedManyWithoutSneakerInput = {
    create?: XOR<Enumerable<SneakerImageCreateWithoutSneakerInput>, Enumerable<SneakerImageUncheckedCreateWithoutSneakerInput>>
    connectOrCreate?: Enumerable<SneakerImageCreateOrConnectWithoutSneakerInput>
    createMany?: SneakerImageCreateManySneakerInputEnvelope
    connect?: Enumerable<SneakerImageWhereUniqueInput>
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SneakerUpdatesizesInput = {
    set?: Enumerable<number>
    push?: number | Enumerable<number>
  }

  export type SneakerImageUpdateManyWithoutSneakerNestedInput = {
    create?: XOR<Enumerable<SneakerImageCreateWithoutSneakerInput>, Enumerable<SneakerImageUncheckedCreateWithoutSneakerInput>>
    connectOrCreate?: Enumerable<SneakerImageCreateOrConnectWithoutSneakerInput>
    upsert?: Enumerable<SneakerImageUpsertWithWhereUniqueWithoutSneakerInput>
    createMany?: SneakerImageCreateManySneakerInputEnvelope
    set?: Enumerable<SneakerImageWhereUniqueInput>
    disconnect?: Enumerable<SneakerImageWhereUniqueInput>
    delete?: Enumerable<SneakerImageWhereUniqueInput>
    connect?: Enumerable<SneakerImageWhereUniqueInput>
    update?: Enumerable<SneakerImageUpdateWithWhereUniqueWithoutSneakerInput>
    updateMany?: Enumerable<SneakerImageUpdateManyWithWhereWithoutSneakerInput>
    deleteMany?: Enumerable<SneakerImageScalarWhereInput>
  }

  export type SneakerImageUncheckedUpdateManyWithoutSneakerNestedInput = {
    create?: XOR<Enumerable<SneakerImageCreateWithoutSneakerInput>, Enumerable<SneakerImageUncheckedCreateWithoutSneakerInput>>
    connectOrCreate?: Enumerable<SneakerImageCreateOrConnectWithoutSneakerInput>
    upsert?: Enumerable<SneakerImageUpsertWithWhereUniqueWithoutSneakerInput>
    createMany?: SneakerImageCreateManySneakerInputEnvelope
    set?: Enumerable<SneakerImageWhereUniqueInput>
    disconnect?: Enumerable<SneakerImageWhereUniqueInput>
    delete?: Enumerable<SneakerImageWhereUniqueInput>
    connect?: Enumerable<SneakerImageWhereUniqueInput>
    update?: Enumerable<SneakerImageUpdateWithWhereUniqueWithoutSneakerInput>
    updateMany?: Enumerable<SneakerImageUpdateManyWithWhereWithoutSneakerInput>
    deleteMany?: Enumerable<SneakerImageScalarWhereInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type SneakerCreateWithoutImagesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
    brand: string
    colorway: string
    releaseDate: Date | string
    retailPrice: number
    silhouette: string
    sizes?: SneakerCreatesizesInput | Enumerable<number>
    quantity: number
  }

  export type SneakerUncheckedCreateWithoutImagesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
    brand: string
    colorway: string
    releaseDate: Date | string
    retailPrice: number
    silhouette: string
    sizes?: SneakerCreatesizesInput | Enumerable<number>
    quantity: number
  }

  export type SneakerCreateOrConnectWithoutImagesInput = {
    where: SneakerWhereUniqueInput
    create: XOR<SneakerCreateWithoutImagesInput, SneakerUncheckedCreateWithoutImagesInput>
  }

  export type SneakerUpsertWithoutImagesInput = {
    update: XOR<SneakerUpdateWithoutImagesInput, SneakerUncheckedUpdateWithoutImagesInput>
    create: XOR<SneakerCreateWithoutImagesInput, SneakerUncheckedCreateWithoutImagesInput>
  }

  export type SneakerUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    colorway?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    retailPrice?: FloatFieldUpdateOperationsInput | number
    silhouette?: StringFieldUpdateOperationsInput | string
    sizes?: SneakerUpdatesizesInput | Enumerable<number>
    quantity?: FloatFieldUpdateOperationsInput | number
  }

  export type SneakerUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    colorway?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    retailPrice?: FloatFieldUpdateOperationsInput | number
    silhouette?: StringFieldUpdateOperationsInput | string
    sizes?: SneakerUpdatesizesInput | Enumerable<number>
    quantity?: FloatFieldUpdateOperationsInput | number
  }

  export type SneakerImageCreateWithoutSneakerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    url: string
  }

  export type SneakerImageUncheckedCreateWithoutSneakerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    url: string
  }

  export type SneakerImageCreateOrConnectWithoutSneakerInput = {
    where: SneakerImageWhereUniqueInput
    create: XOR<SneakerImageCreateWithoutSneakerInput, SneakerImageUncheckedCreateWithoutSneakerInput>
  }

  export type SneakerImageCreateManySneakerInputEnvelope = {
    data: Enumerable<SneakerImageCreateManySneakerInput>
    skipDuplicates?: boolean
  }

  export type SneakerImageUpsertWithWhereUniqueWithoutSneakerInput = {
    where: SneakerImageWhereUniqueInput
    update: XOR<SneakerImageUpdateWithoutSneakerInput, SneakerImageUncheckedUpdateWithoutSneakerInput>
    create: XOR<SneakerImageCreateWithoutSneakerInput, SneakerImageUncheckedCreateWithoutSneakerInput>
  }

  export type SneakerImageUpdateWithWhereUniqueWithoutSneakerInput = {
    where: SneakerImageWhereUniqueInput
    data: XOR<SneakerImageUpdateWithoutSneakerInput, SneakerImageUncheckedUpdateWithoutSneakerInput>
  }

  export type SneakerImageUpdateManyWithWhereWithoutSneakerInput = {
    where: SneakerImageScalarWhereInput
    data: XOR<SneakerImageUpdateManyMutationInput, SneakerImageUncheckedUpdateManyWithoutImagesInput>
  }

  export type SneakerImageScalarWhereInput = {
    AND?: Enumerable<SneakerImageScalarWhereInput>
    OR?: Enumerable<SneakerImageScalarWhereInput>
    NOT?: Enumerable<SneakerImageScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    url?: StringFilter | string
    sneakerId?: StringFilter | string
  }

  export type SneakerImageCreateManySneakerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    url: string
  }

  export type SneakerImageUpdateWithoutSneakerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type SneakerImageUncheckedUpdateWithoutSneakerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type SneakerImageUncheckedUpdateManyWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}