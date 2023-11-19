
/**
 * Client
**/

import * as runtime from './runtime/library.d.ts';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model SneakerImage
 * 
 */
export type SneakerImage = $Result.DefaultSelection<Prisma.$SneakerImagePayload>
/**
 * Model Sneaker
 * 
 */
export type Sneaker = $Result.DefaultSelection<Prisma.$SneakerPayload>

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
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

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
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.sneakerImage`: Exposes CRUD operations for the **SneakerImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SneakerImages
    * const sneakerImages = await prisma.sneakerImage.findMany()
    * ```
    */
  get sneakerImage(): Prisma.SneakerImageDelegate<ExtArgs>;

  /**
   * `prisma.sneaker`: Exposes CRUD operations for the **Sneaker** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sneakers
    * const sneakers = await prisma.sneaker.findMany()
    * ```
    */
  get sneaker(): Prisma.SneakerDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.6.0
   * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
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
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

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


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'sneakerImage' | 'sneaker'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      SneakerImage: {
        payload: Prisma.$SneakerImagePayload<ExtArgs>
        fields: Prisma.SneakerImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SneakerImageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SneakerImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SneakerImageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SneakerImagePayload>
          }
          findFirst: {
            args: Prisma.SneakerImageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SneakerImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SneakerImageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SneakerImagePayload>
          }
          findMany: {
            args: Prisma.SneakerImageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SneakerImagePayload>[]
          }
          create: {
            args: Prisma.SneakerImageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SneakerImagePayload>
          }
          createMany: {
            args: Prisma.SneakerImageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SneakerImageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SneakerImagePayload>
          }
          update: {
            args: Prisma.SneakerImageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SneakerImagePayload>
          }
          deleteMany: {
            args: Prisma.SneakerImageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SneakerImageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SneakerImageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SneakerImagePayload>
          }
          aggregate: {
            args: Prisma.SneakerImageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSneakerImage>
          }
          groupBy: {
            args: Prisma.SneakerImageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SneakerImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.SneakerImageCountArgs<ExtArgs>,
            result: $Utils.Optional<SneakerImageCountAggregateOutputType> | number
          }
        }
      }
      Sneaker: {
        payload: Prisma.$SneakerPayload<ExtArgs>
        fields: Prisma.SneakerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SneakerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SneakerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SneakerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SneakerPayload>
          }
          findFirst: {
            args: Prisma.SneakerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SneakerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SneakerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SneakerPayload>
          }
          findMany: {
            args: Prisma.SneakerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SneakerPayload>[]
          }
          create: {
            args: Prisma.SneakerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SneakerPayload>
          }
          createMany: {
            args: Prisma.SneakerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SneakerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SneakerPayload>
          }
          update: {
            args: Prisma.SneakerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SneakerPayload>
          }
          deleteMany: {
            args: Prisma.SneakerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SneakerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SneakerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SneakerPayload>
          }
          aggregate: {
            args: Prisma.SneakerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSneaker>
          }
          groupBy: {
            args: Prisma.SneakerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SneakerGroupByOutputType>[]
          }
          count: {
            args: Prisma.SneakerCountArgs<ExtArgs>,
            result: $Utils.Optional<SneakerCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
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
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

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

  export type SneakerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | SneakerCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes

  /**
   * SneakerCountOutputType without action
   */
  export type SneakerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SneakerCountOutputType
     */
    select?: SneakerCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * SneakerCountOutputType without action
   */
  export type SneakerCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SneakerImageWhereInput
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

  export type SneakerImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SneakerImage to aggregate.
     */
    where?: SneakerImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SneakerImages to fetch.
     */
    orderBy?: SneakerImageOrderByWithRelationInput | SneakerImageOrderByWithRelationInput[]
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




  export type SneakerImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SneakerImageWhereInput
    orderBy?: SneakerImageOrderByWithAggregationInput | SneakerImageOrderByWithAggregationInput[]
    by: SneakerImageScalarFieldEnum[] | SneakerImageScalarFieldEnum
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
      PickEnumerable<SneakerImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SneakerImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SneakerImageGroupByOutputType[P]>
            : GetScalarType<T[P], SneakerImageGroupByOutputType[P]>
        }
      >
    >


  export type SneakerImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    url?: boolean
    sneakerId?: boolean
    sneaker?: boolean | SneakerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sneakerImage"]>

  export type SneakerImageSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    url?: boolean
    sneakerId?: boolean
  }

  export type SneakerImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sneaker?: boolean | SneakerDefaultArgs<ExtArgs>
  }


  export type $SneakerImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SneakerImage"
    objects: {
      sneaker: Prisma.$SneakerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      url: string
      sneakerId: string
    }, ExtArgs["result"]["sneakerImage"]>
    composites: {}
  }


  type SneakerImageGetPayload<S extends boolean | null | undefined | SneakerImageDefaultArgs> = $Result.GetResult<Prisma.$SneakerImagePayload, S>

  type SneakerImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SneakerImageFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: SneakerImageCountAggregateInputType | true
    }

  export interface SneakerImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SneakerImage'], meta: { name: 'SneakerImage' } }
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
    findUnique<T extends SneakerImageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SneakerImageFindUniqueArgs<ExtArgs>>
    ): Prisma__SneakerImageClient<$Result.GetResult<Prisma.$SneakerImagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends SneakerImageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SneakerImageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SneakerImageClient<$Result.GetResult<Prisma.$SneakerImagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    findFirst<T extends SneakerImageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SneakerImageFindFirstArgs<ExtArgs>>
    ): Prisma__SneakerImageClient<$Result.GetResult<Prisma.$SneakerImagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SneakerImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
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
    findFirstOrThrow<T extends SneakerImageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SneakerImageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SneakerImageClient<$Result.GetResult<Prisma.$SneakerImagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

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
    findMany<T extends SneakerImageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SneakerImageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SneakerImagePayload<ExtArgs>, T, 'findMany'>>

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
    create<T extends SneakerImageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SneakerImageCreateArgs<ExtArgs>>
    ): Prisma__SneakerImageClient<$Result.GetResult<Prisma.$SneakerImagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

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
    createMany<T extends SneakerImageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SneakerImageCreateManyArgs<ExtArgs>>
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
    delete<T extends SneakerImageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SneakerImageDeleteArgs<ExtArgs>>
    ): Prisma__SneakerImageClient<$Result.GetResult<Prisma.$SneakerImagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    update<T extends SneakerImageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SneakerImageUpdateArgs<ExtArgs>>
    ): Prisma__SneakerImageClient<$Result.GetResult<Prisma.$SneakerImagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    deleteMany<T extends SneakerImageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SneakerImageDeleteManyArgs<ExtArgs>>
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
    updateMany<T extends SneakerImageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SneakerImageUpdateManyArgs<ExtArgs>>
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
    upsert<T extends SneakerImageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SneakerImageUpsertArgs<ExtArgs>>
    ): Prisma__SneakerImageClient<$Result.GetResult<Prisma.$SneakerImagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
      T extends $Utils.Record<'select', any>
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
      ByFields extends MaybeTupleToUnion<T['by']>,
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
  /**
   * Fields of the SneakerImage model
   */
  readonly fields: SneakerImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SneakerImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SneakerImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    sneaker<T extends SneakerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SneakerDefaultArgs<ExtArgs>>): Prisma__SneakerClient<$Result.GetResult<Prisma.$SneakerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SneakerImage model
   */ 
  interface SneakerImageFieldRefs {
    readonly id: FieldRef<"SneakerImage", 'String'>
    readonly createdAt: FieldRef<"SneakerImage", 'DateTime'>
    readonly updatedAt: FieldRef<"SneakerImage", 'DateTime'>
    readonly url: FieldRef<"SneakerImage", 'String'>
    readonly sneakerId: FieldRef<"SneakerImage", 'String'>
  }
    

  // Custom InputTypes

  /**
   * SneakerImage findUnique
   */
  export type SneakerImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SneakerImage
     */
    select?: SneakerImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SneakerImageInclude<ExtArgs> | null
    /**
     * Filter, which SneakerImage to fetch.
     */
    where: SneakerImageWhereUniqueInput
  }


  /**
   * SneakerImage findUniqueOrThrow
   */
  export type SneakerImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SneakerImage
     */
    select?: SneakerImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SneakerImageInclude<ExtArgs> | null
    /**
     * Filter, which SneakerImage to fetch.
     */
    where: SneakerImageWhereUniqueInput
  }


  /**
   * SneakerImage findFirst
   */
  export type SneakerImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SneakerImage
     */
    select?: SneakerImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SneakerImageInclude<ExtArgs> | null
    /**
     * Filter, which SneakerImage to fetch.
     */
    where?: SneakerImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SneakerImages to fetch.
     */
    orderBy?: SneakerImageOrderByWithRelationInput | SneakerImageOrderByWithRelationInput[]
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
    distinct?: SneakerImageScalarFieldEnum | SneakerImageScalarFieldEnum[]
  }


  /**
   * SneakerImage findFirstOrThrow
   */
  export type SneakerImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SneakerImage
     */
    select?: SneakerImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SneakerImageInclude<ExtArgs> | null
    /**
     * Filter, which SneakerImage to fetch.
     */
    where?: SneakerImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SneakerImages to fetch.
     */
    orderBy?: SneakerImageOrderByWithRelationInput | SneakerImageOrderByWithRelationInput[]
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
    distinct?: SneakerImageScalarFieldEnum | SneakerImageScalarFieldEnum[]
  }


  /**
   * SneakerImage findMany
   */
  export type SneakerImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SneakerImage
     */
    select?: SneakerImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SneakerImageInclude<ExtArgs> | null
    /**
     * Filter, which SneakerImages to fetch.
     */
    where?: SneakerImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SneakerImages to fetch.
     */
    orderBy?: SneakerImageOrderByWithRelationInput | SneakerImageOrderByWithRelationInput[]
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
    distinct?: SneakerImageScalarFieldEnum | SneakerImageScalarFieldEnum[]
  }


  /**
   * SneakerImage create
   */
  export type SneakerImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SneakerImage
     */
    select?: SneakerImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SneakerImageInclude<ExtArgs> | null
    /**
     * The data needed to create a SneakerImage.
     */
    data: XOR<SneakerImageCreateInput, SneakerImageUncheckedCreateInput>
  }


  /**
   * SneakerImage createMany
   */
  export type SneakerImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SneakerImages.
     */
    data: SneakerImageCreateManyInput | SneakerImageCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * SneakerImage update
   */
  export type SneakerImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SneakerImage
     */
    select?: SneakerImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SneakerImageInclude<ExtArgs> | null
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
  export type SneakerImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type SneakerImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SneakerImage
     */
    select?: SneakerImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SneakerImageInclude<ExtArgs> | null
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
  export type SneakerImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SneakerImage
     */
    select?: SneakerImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SneakerImageInclude<ExtArgs> | null
    /**
     * Filter which SneakerImage to delete.
     */
    where: SneakerImageWhereUniqueInput
  }


  /**
   * SneakerImage deleteMany
   */
  export type SneakerImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SneakerImages to delete
     */
    where?: SneakerImageWhereInput
  }


  /**
   * SneakerImage without action
   */
  export type SneakerImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SneakerImage
     */
    select?: SneakerImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SneakerImageInclude<ExtArgs> | null
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
    sizes: number[]
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

  export type SneakerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sneaker to aggregate.
     */
    where?: SneakerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sneakers to fetch.
     */
    orderBy?: SneakerOrderByWithRelationInput | SneakerOrderByWithRelationInput[]
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




  export type SneakerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SneakerWhereInput
    orderBy?: SneakerOrderByWithAggregationInput | SneakerOrderByWithAggregationInput[]
    by: SneakerScalarFieldEnum[] | SneakerScalarFieldEnum
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
      PickEnumerable<SneakerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SneakerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SneakerGroupByOutputType[P]>
            : GetScalarType<T[P], SneakerGroupByOutputType[P]>
        }
      >
    >


  export type SneakerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
    images?: boolean | Sneaker$imagesArgs<ExtArgs>
    _count?: boolean | SneakerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sneaker"]>

  export type SneakerSelectScalar = {
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
  }

  export type SneakerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | Sneaker$imagesArgs<ExtArgs>
    _count?: boolean | SneakerCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $SneakerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sneaker"
    objects: {
      images: Prisma.$SneakerImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
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
    }, ExtArgs["result"]["sneaker"]>
    composites: {}
  }


  type SneakerGetPayload<S extends boolean | null | undefined | SneakerDefaultArgs> = $Result.GetResult<Prisma.$SneakerPayload, S>

  type SneakerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SneakerFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: SneakerCountAggregateInputType | true
    }

  export interface SneakerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sneaker'], meta: { name: 'Sneaker' } }
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
    findUnique<T extends SneakerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SneakerFindUniqueArgs<ExtArgs>>
    ): Prisma__SneakerClient<$Result.GetResult<Prisma.$SneakerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends SneakerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SneakerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SneakerClient<$Result.GetResult<Prisma.$SneakerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    findFirst<T extends SneakerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SneakerFindFirstArgs<ExtArgs>>
    ): Prisma__SneakerClient<$Result.GetResult<Prisma.$SneakerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Sneaker that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
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
    findFirstOrThrow<T extends SneakerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SneakerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SneakerClient<$Result.GetResult<Prisma.$SneakerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

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
    findMany<T extends SneakerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SneakerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SneakerPayload<ExtArgs>, T, 'findMany'>>

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
    create<T extends SneakerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SneakerCreateArgs<ExtArgs>>
    ): Prisma__SneakerClient<$Result.GetResult<Prisma.$SneakerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

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
    createMany<T extends SneakerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SneakerCreateManyArgs<ExtArgs>>
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
    delete<T extends SneakerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SneakerDeleteArgs<ExtArgs>>
    ): Prisma__SneakerClient<$Result.GetResult<Prisma.$SneakerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    update<T extends SneakerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SneakerUpdateArgs<ExtArgs>>
    ): Prisma__SneakerClient<$Result.GetResult<Prisma.$SneakerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    deleteMany<T extends SneakerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SneakerDeleteManyArgs<ExtArgs>>
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
    updateMany<T extends SneakerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SneakerUpdateManyArgs<ExtArgs>>
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
    upsert<T extends SneakerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SneakerUpsertArgs<ExtArgs>>
    ): Prisma__SneakerClient<$Result.GetResult<Prisma.$SneakerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
      T extends $Utils.Record<'select', any>
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
      ByFields extends MaybeTupleToUnion<T['by']>,
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
  /**
   * Fields of the Sneaker model
   */
  readonly fields: SneakerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sneaker.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SneakerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    images<T extends Sneaker$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Sneaker$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SneakerImagePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Sneaker model
   */ 
  interface SneakerFieldRefs {
    readonly id: FieldRef<"Sneaker", 'String'>
    readonly createdAt: FieldRef<"Sneaker", 'DateTime'>
    readonly updatedAt: FieldRef<"Sneaker", 'DateTime'>
    readonly name: FieldRef<"Sneaker", 'String'>
    readonly description: FieldRef<"Sneaker", 'String'>
    readonly brand: FieldRef<"Sneaker", 'String'>
    readonly colorway: FieldRef<"Sneaker", 'String'>
    readonly releaseDate: FieldRef<"Sneaker", 'DateTime'>
    readonly retailPrice: FieldRef<"Sneaker", 'Float'>
    readonly silhouette: FieldRef<"Sneaker", 'String'>
    readonly sizes: FieldRef<"Sneaker", 'Float[]'>
    readonly quantity: FieldRef<"Sneaker", 'Float'>
  }
    

  // Custom InputTypes

  /**
   * Sneaker findUnique
   */
  export type SneakerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sneaker
     */
    select?: SneakerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SneakerInclude<ExtArgs> | null
    /**
     * Filter, which Sneaker to fetch.
     */
    where: SneakerWhereUniqueInput
  }


  /**
   * Sneaker findUniqueOrThrow
   */
  export type SneakerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sneaker
     */
    select?: SneakerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SneakerInclude<ExtArgs> | null
    /**
     * Filter, which Sneaker to fetch.
     */
    where: SneakerWhereUniqueInput
  }


  /**
   * Sneaker findFirst
   */
  export type SneakerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sneaker
     */
    select?: SneakerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SneakerInclude<ExtArgs> | null
    /**
     * Filter, which Sneaker to fetch.
     */
    where?: SneakerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sneakers to fetch.
     */
    orderBy?: SneakerOrderByWithRelationInput | SneakerOrderByWithRelationInput[]
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
    distinct?: SneakerScalarFieldEnum | SneakerScalarFieldEnum[]
  }


  /**
   * Sneaker findFirstOrThrow
   */
  export type SneakerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sneaker
     */
    select?: SneakerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SneakerInclude<ExtArgs> | null
    /**
     * Filter, which Sneaker to fetch.
     */
    where?: SneakerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sneakers to fetch.
     */
    orderBy?: SneakerOrderByWithRelationInput | SneakerOrderByWithRelationInput[]
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
    distinct?: SneakerScalarFieldEnum | SneakerScalarFieldEnum[]
  }


  /**
   * Sneaker findMany
   */
  export type SneakerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sneaker
     */
    select?: SneakerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SneakerInclude<ExtArgs> | null
    /**
     * Filter, which Sneakers to fetch.
     */
    where?: SneakerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sneakers to fetch.
     */
    orderBy?: SneakerOrderByWithRelationInput | SneakerOrderByWithRelationInput[]
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
    distinct?: SneakerScalarFieldEnum | SneakerScalarFieldEnum[]
  }


  /**
   * Sneaker create
   */
  export type SneakerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sneaker
     */
    select?: SneakerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SneakerInclude<ExtArgs> | null
    /**
     * The data needed to create a Sneaker.
     */
    data: XOR<SneakerCreateInput, SneakerUncheckedCreateInput>
  }


  /**
   * Sneaker createMany
   */
  export type SneakerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sneakers.
     */
    data: SneakerCreateManyInput | SneakerCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Sneaker update
   */
  export type SneakerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sneaker
     */
    select?: SneakerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SneakerInclude<ExtArgs> | null
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
  export type SneakerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type SneakerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sneaker
     */
    select?: SneakerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SneakerInclude<ExtArgs> | null
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
  export type SneakerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sneaker
     */
    select?: SneakerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SneakerInclude<ExtArgs> | null
    /**
     * Filter which Sneaker to delete.
     */
    where: SneakerWhereUniqueInput
  }


  /**
   * Sneaker deleteMany
   */
  export type SneakerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sneakers to delete
     */
    where?: SneakerWhereInput
  }


  /**
   * Sneaker.images
   */
  export type Sneaker$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SneakerImage
     */
    select?: SneakerImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SneakerImageInclude<ExtArgs> | null
    where?: SneakerImageWhereInput
    orderBy?: SneakerImageOrderByWithRelationInput | SneakerImageOrderByWithRelationInput[]
    cursor?: SneakerImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SneakerImageScalarFieldEnum | SneakerImageScalarFieldEnum[]
  }


  /**
   * Sneaker without action
   */
  export type SneakerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sneaker
     */
    select?: SneakerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SneakerInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


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


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type SneakerImageWhereInput = {
    AND?: SneakerImageWhereInput | SneakerImageWhereInput[]
    OR?: SneakerImageWhereInput[]
    NOT?: SneakerImageWhereInput | SneakerImageWhereInput[]
    id?: StringFilter<"SneakerImage"> | string
    createdAt?: DateTimeFilter<"SneakerImage"> | Date | string
    updatedAt?: DateTimeFilter<"SneakerImage"> | Date | string
    url?: StringFilter<"SneakerImage"> | string
    sneakerId?: StringFilter<"SneakerImage"> | string
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

  export type SneakerImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SneakerImageWhereInput | SneakerImageWhereInput[]
    OR?: SneakerImageWhereInput[]
    NOT?: SneakerImageWhereInput | SneakerImageWhereInput[]
    createdAt?: DateTimeFilter<"SneakerImage"> | Date | string
    updatedAt?: DateTimeFilter<"SneakerImage"> | Date | string
    url?: StringFilter<"SneakerImage"> | string
    sneakerId?: StringFilter<"SneakerImage"> | string
    sneaker?: XOR<SneakerRelationFilter, SneakerWhereInput>
  }, "id">

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
    AND?: SneakerImageScalarWhereWithAggregatesInput | SneakerImageScalarWhereWithAggregatesInput[]
    OR?: SneakerImageScalarWhereWithAggregatesInput[]
    NOT?: SneakerImageScalarWhereWithAggregatesInput | SneakerImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SneakerImage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SneakerImage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SneakerImage"> | Date | string
    url?: StringWithAggregatesFilter<"SneakerImage"> | string
    sneakerId?: StringWithAggregatesFilter<"SneakerImage"> | string
  }

  export type SneakerWhereInput = {
    AND?: SneakerWhereInput | SneakerWhereInput[]
    OR?: SneakerWhereInput[]
    NOT?: SneakerWhereInput | SneakerWhereInput[]
    id?: StringFilter<"Sneaker"> | string
    createdAt?: DateTimeFilter<"Sneaker"> | Date | string
    updatedAt?: DateTimeFilter<"Sneaker"> | Date | string
    name?: StringFilter<"Sneaker"> | string
    description?: StringFilter<"Sneaker"> | string
    brand?: StringFilter<"Sneaker"> | string
    colorway?: StringFilter<"Sneaker"> | string
    releaseDate?: DateTimeFilter<"Sneaker"> | Date | string
    retailPrice?: FloatFilter<"Sneaker"> | number
    silhouette?: StringFilter<"Sneaker"> | string
    sizes?: FloatNullableListFilter<"Sneaker">
    quantity?: FloatFilter<"Sneaker"> | number
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

  export type SneakerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SneakerWhereInput | SneakerWhereInput[]
    OR?: SneakerWhereInput[]
    NOT?: SneakerWhereInput | SneakerWhereInput[]
    createdAt?: DateTimeFilter<"Sneaker"> | Date | string
    updatedAt?: DateTimeFilter<"Sneaker"> | Date | string
    name?: StringFilter<"Sneaker"> | string
    description?: StringFilter<"Sneaker"> | string
    brand?: StringFilter<"Sneaker"> | string
    colorway?: StringFilter<"Sneaker"> | string
    releaseDate?: DateTimeFilter<"Sneaker"> | Date | string
    retailPrice?: FloatFilter<"Sneaker"> | number
    silhouette?: StringFilter<"Sneaker"> | string
    sizes?: FloatNullableListFilter<"Sneaker">
    quantity?: FloatFilter<"Sneaker"> | number
    images?: SneakerImageListRelationFilter
  }, "id">

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
    AND?: SneakerScalarWhereWithAggregatesInput | SneakerScalarWhereWithAggregatesInput[]
    OR?: SneakerScalarWhereWithAggregatesInput[]
    NOT?: SneakerScalarWhereWithAggregatesInput | SneakerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sneaker"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Sneaker"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Sneaker"> | Date | string
    name?: StringWithAggregatesFilter<"Sneaker"> | string
    description?: StringWithAggregatesFilter<"Sneaker"> | string
    brand?: StringWithAggregatesFilter<"Sneaker"> | string
    colorway?: StringWithAggregatesFilter<"Sneaker"> | string
    releaseDate?: DateTimeWithAggregatesFilter<"Sneaker"> | Date | string
    retailPrice?: FloatWithAggregatesFilter<"Sneaker"> | number
    silhouette?: StringWithAggregatesFilter<"Sneaker"> | string
    sizes?: FloatNullableListFilter<"Sneaker">
    quantity?: FloatWithAggregatesFilter<"Sneaker"> | number
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
    sizes?: SneakerCreatesizesInput | number[]
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
    sizes?: SneakerCreatesizesInput | number[]
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
    sizes?: SneakerUpdatesizesInput | number[]
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
    sizes?: SneakerUpdatesizesInput | number[]
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
    sizes?: SneakerCreatesizesInput | number[]
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
    sizes?: SneakerUpdatesizesInput | number[]
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
    sizes?: SneakerUpdatesizesInput | number[]
    quantity?: FloatFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    has?: number | FloatFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListFloatFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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
    update?: XOR<XOR<SneakerUpdateToOneWithWhereWithoutImagesInput, SneakerUpdateWithoutImagesInput>, SneakerUncheckedUpdateWithoutImagesInput>
  }

  export type SneakerCreatesizesInput = {
    set: number[]
  }

  export type SneakerImageCreateNestedManyWithoutSneakerInput = {
    create?: XOR<SneakerImageCreateWithoutSneakerInput, SneakerImageUncheckedCreateWithoutSneakerInput> | SneakerImageCreateWithoutSneakerInput[] | SneakerImageUncheckedCreateWithoutSneakerInput[]
    connectOrCreate?: SneakerImageCreateOrConnectWithoutSneakerInput | SneakerImageCreateOrConnectWithoutSneakerInput[]
    createMany?: SneakerImageCreateManySneakerInputEnvelope
    connect?: SneakerImageWhereUniqueInput | SneakerImageWhereUniqueInput[]
  }

  export type SneakerImageUncheckedCreateNestedManyWithoutSneakerInput = {
    create?: XOR<SneakerImageCreateWithoutSneakerInput, SneakerImageUncheckedCreateWithoutSneakerInput> | SneakerImageCreateWithoutSneakerInput[] | SneakerImageUncheckedCreateWithoutSneakerInput[]
    connectOrCreate?: SneakerImageCreateOrConnectWithoutSneakerInput | SneakerImageCreateOrConnectWithoutSneakerInput[]
    createMany?: SneakerImageCreateManySneakerInputEnvelope
    connect?: SneakerImageWhereUniqueInput | SneakerImageWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SneakerUpdatesizesInput = {
    set?: number[]
    push?: number | number[]
  }

  export type SneakerImageUpdateManyWithoutSneakerNestedInput = {
    create?: XOR<SneakerImageCreateWithoutSneakerInput, SneakerImageUncheckedCreateWithoutSneakerInput> | SneakerImageCreateWithoutSneakerInput[] | SneakerImageUncheckedCreateWithoutSneakerInput[]
    connectOrCreate?: SneakerImageCreateOrConnectWithoutSneakerInput | SneakerImageCreateOrConnectWithoutSneakerInput[]
    upsert?: SneakerImageUpsertWithWhereUniqueWithoutSneakerInput | SneakerImageUpsertWithWhereUniqueWithoutSneakerInput[]
    createMany?: SneakerImageCreateManySneakerInputEnvelope
    set?: SneakerImageWhereUniqueInput | SneakerImageWhereUniqueInput[]
    disconnect?: SneakerImageWhereUniqueInput | SneakerImageWhereUniqueInput[]
    delete?: SneakerImageWhereUniqueInput | SneakerImageWhereUniqueInput[]
    connect?: SneakerImageWhereUniqueInput | SneakerImageWhereUniqueInput[]
    update?: SneakerImageUpdateWithWhereUniqueWithoutSneakerInput | SneakerImageUpdateWithWhereUniqueWithoutSneakerInput[]
    updateMany?: SneakerImageUpdateManyWithWhereWithoutSneakerInput | SneakerImageUpdateManyWithWhereWithoutSneakerInput[]
    deleteMany?: SneakerImageScalarWhereInput | SneakerImageScalarWhereInput[]
  }

  export type SneakerImageUncheckedUpdateManyWithoutSneakerNestedInput = {
    create?: XOR<SneakerImageCreateWithoutSneakerInput, SneakerImageUncheckedCreateWithoutSneakerInput> | SneakerImageCreateWithoutSneakerInput[] | SneakerImageUncheckedCreateWithoutSneakerInput[]
    connectOrCreate?: SneakerImageCreateOrConnectWithoutSneakerInput | SneakerImageCreateOrConnectWithoutSneakerInput[]
    upsert?: SneakerImageUpsertWithWhereUniqueWithoutSneakerInput | SneakerImageUpsertWithWhereUniqueWithoutSneakerInput[]
    createMany?: SneakerImageCreateManySneakerInputEnvelope
    set?: SneakerImageWhereUniqueInput | SneakerImageWhereUniqueInput[]
    disconnect?: SneakerImageWhereUniqueInput | SneakerImageWhereUniqueInput[]
    delete?: SneakerImageWhereUniqueInput | SneakerImageWhereUniqueInput[]
    connect?: SneakerImageWhereUniqueInput | SneakerImageWhereUniqueInput[]
    update?: SneakerImageUpdateWithWhereUniqueWithoutSneakerInput | SneakerImageUpdateWithWhereUniqueWithoutSneakerInput[]
    updateMany?: SneakerImageUpdateManyWithWhereWithoutSneakerInput | SneakerImageUpdateManyWithWhereWithoutSneakerInput[]
    deleteMany?: SneakerImageScalarWhereInput | SneakerImageScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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
    sizes?: SneakerCreatesizesInput | number[]
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
    sizes?: SneakerCreatesizesInput | number[]
    quantity: number
  }

  export type SneakerCreateOrConnectWithoutImagesInput = {
    where: SneakerWhereUniqueInput
    create: XOR<SneakerCreateWithoutImagesInput, SneakerUncheckedCreateWithoutImagesInput>
  }

  export type SneakerUpsertWithoutImagesInput = {
    update: XOR<SneakerUpdateWithoutImagesInput, SneakerUncheckedUpdateWithoutImagesInput>
    create: XOR<SneakerCreateWithoutImagesInput, SneakerUncheckedCreateWithoutImagesInput>
    where?: SneakerWhereInput
  }

  export type SneakerUpdateToOneWithWhereWithoutImagesInput = {
    where?: SneakerWhereInput
    data: XOR<SneakerUpdateWithoutImagesInput, SneakerUncheckedUpdateWithoutImagesInput>
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
    sizes?: SneakerUpdatesizesInput | number[]
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
    sizes?: SneakerUpdatesizesInput | number[]
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
    data: SneakerImageCreateManySneakerInput | SneakerImageCreateManySneakerInput[]
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
    data: XOR<SneakerImageUpdateManyMutationInput, SneakerImageUncheckedUpdateManyWithoutSneakerInput>
  }

  export type SneakerImageScalarWhereInput = {
    AND?: SneakerImageScalarWhereInput | SneakerImageScalarWhereInput[]
    OR?: SneakerImageScalarWhereInput[]
    NOT?: SneakerImageScalarWhereInput | SneakerImageScalarWhereInput[]
    id?: StringFilter<"SneakerImage"> | string
    createdAt?: DateTimeFilter<"SneakerImage"> | Date | string
    updatedAt?: DateTimeFilter<"SneakerImage"> | Date | string
    url?: StringFilter<"SneakerImage"> | string
    sneakerId?: StringFilter<"SneakerImage"> | string
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

  export type SneakerImageUncheckedUpdateManyWithoutSneakerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use SneakerCountOutputTypeDefaultArgs instead
     */
    export type SneakerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SneakerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SneakerImageDefaultArgs instead
     */
    export type SneakerImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SneakerImageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SneakerDefaultArgs instead
     */
    export type SneakerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SneakerDefaultArgs<ExtArgs>

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