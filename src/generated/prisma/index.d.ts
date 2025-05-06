
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model BannerItem
 * 
 */
export type BannerItem = $Result.DefaultSelection<Prisma.$BannerItemPayload>
/**
 * Model MapItem
 * 
 */
export type MapItem = $Result.DefaultSelection<Prisma.$MapItemPayload>
/**
 * Model ExhibitionItem
 * 
 */
export type ExhibitionItem = $Result.DefaultSelection<Prisma.$ExhibitionItemPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more BannerItems
 * const bannerItems = await prisma.bannerItem.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more BannerItems
   * const bannerItems = await prisma.bannerItem.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.bannerItem`: Exposes CRUD operations for the **BannerItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BannerItems
    * const bannerItems = await prisma.bannerItem.findMany()
    * ```
    */
  get bannerItem(): Prisma.BannerItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mapItem`: Exposes CRUD operations for the **MapItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MapItems
    * const mapItems = await prisma.mapItem.findMany()
    * ```
    */
  get mapItem(): Prisma.MapItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exhibitionItem`: Exposes CRUD operations for the **ExhibitionItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExhibitionItems
    * const exhibitionItems = await prisma.exhibitionItem.findMany()
    * ```
    */
  get exhibitionItem(): Prisma.ExhibitionItemDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    BannerItem: 'BannerItem',
    MapItem: 'MapItem',
    ExhibitionItem: 'ExhibitionItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "bannerItem" | "mapItem" | "exhibitionItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      BannerItem: {
        payload: Prisma.$BannerItemPayload<ExtArgs>
        fields: Prisma.BannerItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BannerItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BannerItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerItemPayload>
          }
          findFirst: {
            args: Prisma.BannerItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BannerItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerItemPayload>
          }
          findMany: {
            args: Prisma.BannerItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerItemPayload>[]
          }
          create: {
            args: Prisma.BannerItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerItemPayload>
          }
          createMany: {
            args: Prisma.BannerItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BannerItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerItemPayload>[]
          }
          delete: {
            args: Prisma.BannerItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerItemPayload>
          }
          update: {
            args: Prisma.BannerItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerItemPayload>
          }
          deleteMany: {
            args: Prisma.BannerItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BannerItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BannerItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerItemPayload>[]
          }
          upsert: {
            args: Prisma.BannerItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerItemPayload>
          }
          aggregate: {
            args: Prisma.BannerItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBannerItem>
          }
          groupBy: {
            args: Prisma.BannerItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<BannerItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.BannerItemCountArgs<ExtArgs>
            result: $Utils.Optional<BannerItemCountAggregateOutputType> | number
          }
        }
      }
      MapItem: {
        payload: Prisma.$MapItemPayload<ExtArgs>
        fields: Prisma.MapItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MapItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MapItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapItemPayload>
          }
          findFirst: {
            args: Prisma.MapItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MapItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapItemPayload>
          }
          findMany: {
            args: Prisma.MapItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapItemPayload>[]
          }
          create: {
            args: Prisma.MapItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapItemPayload>
          }
          createMany: {
            args: Prisma.MapItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MapItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapItemPayload>[]
          }
          delete: {
            args: Prisma.MapItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapItemPayload>
          }
          update: {
            args: Prisma.MapItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapItemPayload>
          }
          deleteMany: {
            args: Prisma.MapItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MapItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MapItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapItemPayload>[]
          }
          upsert: {
            args: Prisma.MapItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapItemPayload>
          }
          aggregate: {
            args: Prisma.MapItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMapItem>
          }
          groupBy: {
            args: Prisma.MapItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<MapItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.MapItemCountArgs<ExtArgs>
            result: $Utils.Optional<MapItemCountAggregateOutputType> | number
          }
        }
      }
      ExhibitionItem: {
        payload: Prisma.$ExhibitionItemPayload<ExtArgs>
        fields: Prisma.ExhibitionItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExhibitionItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExhibitionItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExhibitionItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExhibitionItemPayload>
          }
          findFirst: {
            args: Prisma.ExhibitionItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExhibitionItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExhibitionItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExhibitionItemPayload>
          }
          findMany: {
            args: Prisma.ExhibitionItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExhibitionItemPayload>[]
          }
          create: {
            args: Prisma.ExhibitionItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExhibitionItemPayload>
          }
          createMany: {
            args: Prisma.ExhibitionItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExhibitionItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExhibitionItemPayload>[]
          }
          delete: {
            args: Prisma.ExhibitionItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExhibitionItemPayload>
          }
          update: {
            args: Prisma.ExhibitionItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExhibitionItemPayload>
          }
          deleteMany: {
            args: Prisma.ExhibitionItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExhibitionItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExhibitionItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExhibitionItemPayload>[]
          }
          upsert: {
            args: Prisma.ExhibitionItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExhibitionItemPayload>
          }
          aggregate: {
            args: Prisma.ExhibitionItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExhibitionItem>
          }
          groupBy: {
            args: Prisma.ExhibitionItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExhibitionItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExhibitionItemCountArgs<ExtArgs>
            result: $Utils.Optional<ExhibitionItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    bannerItem?: BannerItemOmit
    mapItem?: MapItemOmit
    exhibitionItem?: ExhibitionItemOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Models
   */

  /**
   * Model BannerItem
   */

  export type AggregateBannerItem = {
    _count: BannerItemCountAggregateOutputType | null
    _avg: BannerItemAvgAggregateOutputType | null
    _sum: BannerItemSumAggregateOutputType | null
    _min: BannerItemMinAggregateOutputType | null
    _max: BannerItemMaxAggregateOutputType | null
  }

  export type BannerItemAvgAggregateOutputType = {
    id: number | null
  }

  export type BannerItemSumAggregateOutputType = {
    id: number | null
  }

  export type BannerItemMinAggregateOutputType = {
    id: number | null
    imageUrl: string | null
  }

  export type BannerItemMaxAggregateOutputType = {
    id: number | null
    imageUrl: string | null
  }

  export type BannerItemCountAggregateOutputType = {
    id: number
    imageUrl: number
    _all: number
  }


  export type BannerItemAvgAggregateInputType = {
    id?: true
  }

  export type BannerItemSumAggregateInputType = {
    id?: true
  }

  export type BannerItemMinAggregateInputType = {
    id?: true
    imageUrl?: true
  }

  export type BannerItemMaxAggregateInputType = {
    id?: true
    imageUrl?: true
  }

  export type BannerItemCountAggregateInputType = {
    id?: true
    imageUrl?: true
    _all?: true
  }

  export type BannerItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BannerItem to aggregate.
     */
    where?: BannerItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BannerItems to fetch.
     */
    orderBy?: BannerItemOrderByWithRelationInput | BannerItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BannerItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BannerItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BannerItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BannerItems
    **/
    _count?: true | BannerItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BannerItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BannerItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BannerItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BannerItemMaxAggregateInputType
  }

  export type GetBannerItemAggregateType<T extends BannerItemAggregateArgs> = {
        [P in keyof T & keyof AggregateBannerItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBannerItem[P]>
      : GetScalarType<T[P], AggregateBannerItem[P]>
  }




  export type BannerItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BannerItemWhereInput
    orderBy?: BannerItemOrderByWithAggregationInput | BannerItemOrderByWithAggregationInput[]
    by: BannerItemScalarFieldEnum[] | BannerItemScalarFieldEnum
    having?: BannerItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BannerItemCountAggregateInputType | true
    _avg?: BannerItemAvgAggregateInputType
    _sum?: BannerItemSumAggregateInputType
    _min?: BannerItemMinAggregateInputType
    _max?: BannerItemMaxAggregateInputType
  }

  export type BannerItemGroupByOutputType = {
    id: number
    imageUrl: string
    _count: BannerItemCountAggregateOutputType | null
    _avg: BannerItemAvgAggregateOutputType | null
    _sum: BannerItemSumAggregateOutputType | null
    _min: BannerItemMinAggregateOutputType | null
    _max: BannerItemMaxAggregateOutputType | null
  }

  type GetBannerItemGroupByPayload<T extends BannerItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BannerItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BannerItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BannerItemGroupByOutputType[P]>
            : GetScalarType<T[P], BannerItemGroupByOutputType[P]>
        }
      >
    >


  export type BannerItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
  }, ExtArgs["result"]["bannerItem"]>

  export type BannerItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
  }, ExtArgs["result"]["bannerItem"]>

  export type BannerItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
  }, ExtArgs["result"]["bannerItem"]>

  export type BannerItemSelectScalar = {
    id?: boolean
    imageUrl?: boolean
  }

  export type BannerItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imageUrl", ExtArgs["result"]["bannerItem"]>

  export type $BannerItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BannerItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      imageUrl: string
    }, ExtArgs["result"]["bannerItem"]>
    composites: {}
  }

  type BannerItemGetPayload<S extends boolean | null | undefined | BannerItemDefaultArgs> = $Result.GetResult<Prisma.$BannerItemPayload, S>

  type BannerItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BannerItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BannerItemCountAggregateInputType | true
    }

  export interface BannerItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BannerItem'], meta: { name: 'BannerItem' } }
    /**
     * Find zero or one BannerItem that matches the filter.
     * @param {BannerItemFindUniqueArgs} args - Arguments to find a BannerItem
     * @example
     * // Get one BannerItem
     * const bannerItem = await prisma.bannerItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BannerItemFindUniqueArgs>(args: SelectSubset<T, BannerItemFindUniqueArgs<ExtArgs>>): Prisma__BannerItemClient<$Result.GetResult<Prisma.$BannerItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BannerItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BannerItemFindUniqueOrThrowArgs} args - Arguments to find a BannerItem
     * @example
     * // Get one BannerItem
     * const bannerItem = await prisma.bannerItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BannerItemFindUniqueOrThrowArgs>(args: SelectSubset<T, BannerItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BannerItemClient<$Result.GetResult<Prisma.$BannerItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BannerItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerItemFindFirstArgs} args - Arguments to find a BannerItem
     * @example
     * // Get one BannerItem
     * const bannerItem = await prisma.bannerItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BannerItemFindFirstArgs>(args?: SelectSubset<T, BannerItemFindFirstArgs<ExtArgs>>): Prisma__BannerItemClient<$Result.GetResult<Prisma.$BannerItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BannerItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerItemFindFirstOrThrowArgs} args - Arguments to find a BannerItem
     * @example
     * // Get one BannerItem
     * const bannerItem = await prisma.bannerItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BannerItemFindFirstOrThrowArgs>(args?: SelectSubset<T, BannerItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__BannerItemClient<$Result.GetResult<Prisma.$BannerItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BannerItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BannerItems
     * const bannerItems = await prisma.bannerItem.findMany()
     * 
     * // Get first 10 BannerItems
     * const bannerItems = await prisma.bannerItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bannerItemWithIdOnly = await prisma.bannerItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BannerItemFindManyArgs>(args?: SelectSubset<T, BannerItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannerItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BannerItem.
     * @param {BannerItemCreateArgs} args - Arguments to create a BannerItem.
     * @example
     * // Create one BannerItem
     * const BannerItem = await prisma.bannerItem.create({
     *   data: {
     *     // ... data to create a BannerItem
     *   }
     * })
     * 
     */
    create<T extends BannerItemCreateArgs>(args: SelectSubset<T, BannerItemCreateArgs<ExtArgs>>): Prisma__BannerItemClient<$Result.GetResult<Prisma.$BannerItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BannerItems.
     * @param {BannerItemCreateManyArgs} args - Arguments to create many BannerItems.
     * @example
     * // Create many BannerItems
     * const bannerItem = await prisma.bannerItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BannerItemCreateManyArgs>(args?: SelectSubset<T, BannerItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BannerItems and returns the data saved in the database.
     * @param {BannerItemCreateManyAndReturnArgs} args - Arguments to create many BannerItems.
     * @example
     * // Create many BannerItems
     * const bannerItem = await prisma.bannerItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BannerItems and only return the `id`
     * const bannerItemWithIdOnly = await prisma.bannerItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BannerItemCreateManyAndReturnArgs>(args?: SelectSubset<T, BannerItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannerItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BannerItem.
     * @param {BannerItemDeleteArgs} args - Arguments to delete one BannerItem.
     * @example
     * // Delete one BannerItem
     * const BannerItem = await prisma.bannerItem.delete({
     *   where: {
     *     // ... filter to delete one BannerItem
     *   }
     * })
     * 
     */
    delete<T extends BannerItemDeleteArgs>(args: SelectSubset<T, BannerItemDeleteArgs<ExtArgs>>): Prisma__BannerItemClient<$Result.GetResult<Prisma.$BannerItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BannerItem.
     * @param {BannerItemUpdateArgs} args - Arguments to update one BannerItem.
     * @example
     * // Update one BannerItem
     * const bannerItem = await prisma.bannerItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BannerItemUpdateArgs>(args: SelectSubset<T, BannerItemUpdateArgs<ExtArgs>>): Prisma__BannerItemClient<$Result.GetResult<Prisma.$BannerItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BannerItems.
     * @param {BannerItemDeleteManyArgs} args - Arguments to filter BannerItems to delete.
     * @example
     * // Delete a few BannerItems
     * const { count } = await prisma.bannerItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BannerItemDeleteManyArgs>(args?: SelectSubset<T, BannerItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BannerItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BannerItems
     * const bannerItem = await prisma.bannerItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BannerItemUpdateManyArgs>(args: SelectSubset<T, BannerItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BannerItems and returns the data updated in the database.
     * @param {BannerItemUpdateManyAndReturnArgs} args - Arguments to update many BannerItems.
     * @example
     * // Update many BannerItems
     * const bannerItem = await prisma.bannerItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BannerItems and only return the `id`
     * const bannerItemWithIdOnly = await prisma.bannerItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BannerItemUpdateManyAndReturnArgs>(args: SelectSubset<T, BannerItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannerItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BannerItem.
     * @param {BannerItemUpsertArgs} args - Arguments to update or create a BannerItem.
     * @example
     * // Update or create a BannerItem
     * const bannerItem = await prisma.bannerItem.upsert({
     *   create: {
     *     // ... data to create a BannerItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BannerItem we want to update
     *   }
     * })
     */
    upsert<T extends BannerItemUpsertArgs>(args: SelectSubset<T, BannerItemUpsertArgs<ExtArgs>>): Prisma__BannerItemClient<$Result.GetResult<Prisma.$BannerItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BannerItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerItemCountArgs} args - Arguments to filter BannerItems to count.
     * @example
     * // Count the number of BannerItems
     * const count = await prisma.bannerItem.count({
     *   where: {
     *     // ... the filter for the BannerItems we want to count
     *   }
     * })
    **/
    count<T extends BannerItemCountArgs>(
      args?: Subset<T, BannerItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BannerItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BannerItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BannerItemAggregateArgs>(args: Subset<T, BannerItemAggregateArgs>): Prisma.PrismaPromise<GetBannerItemAggregateType<T>>

    /**
     * Group by BannerItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerItemGroupByArgs} args - Group by arguments.
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
      T extends BannerItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BannerItemGroupByArgs['orderBy'] }
        : { orderBy?: BannerItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BannerItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBannerItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BannerItem model
   */
  readonly fields: BannerItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BannerItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BannerItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BannerItem model
   */
  interface BannerItemFieldRefs {
    readonly id: FieldRef<"BannerItem", 'Int'>
    readonly imageUrl: FieldRef<"BannerItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BannerItem findUnique
   */
  export type BannerItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannerItem
     */
    select?: BannerItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BannerItem
     */
    omit?: BannerItemOmit<ExtArgs> | null
    /**
     * Filter, which BannerItem to fetch.
     */
    where: BannerItemWhereUniqueInput
  }

  /**
   * BannerItem findUniqueOrThrow
   */
  export type BannerItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannerItem
     */
    select?: BannerItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BannerItem
     */
    omit?: BannerItemOmit<ExtArgs> | null
    /**
     * Filter, which BannerItem to fetch.
     */
    where: BannerItemWhereUniqueInput
  }

  /**
   * BannerItem findFirst
   */
  export type BannerItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannerItem
     */
    select?: BannerItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BannerItem
     */
    omit?: BannerItemOmit<ExtArgs> | null
    /**
     * Filter, which BannerItem to fetch.
     */
    where?: BannerItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BannerItems to fetch.
     */
    orderBy?: BannerItemOrderByWithRelationInput | BannerItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BannerItems.
     */
    cursor?: BannerItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BannerItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BannerItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BannerItems.
     */
    distinct?: BannerItemScalarFieldEnum | BannerItemScalarFieldEnum[]
  }

  /**
   * BannerItem findFirstOrThrow
   */
  export type BannerItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannerItem
     */
    select?: BannerItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BannerItem
     */
    omit?: BannerItemOmit<ExtArgs> | null
    /**
     * Filter, which BannerItem to fetch.
     */
    where?: BannerItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BannerItems to fetch.
     */
    orderBy?: BannerItemOrderByWithRelationInput | BannerItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BannerItems.
     */
    cursor?: BannerItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BannerItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BannerItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BannerItems.
     */
    distinct?: BannerItemScalarFieldEnum | BannerItemScalarFieldEnum[]
  }

  /**
   * BannerItem findMany
   */
  export type BannerItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannerItem
     */
    select?: BannerItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BannerItem
     */
    omit?: BannerItemOmit<ExtArgs> | null
    /**
     * Filter, which BannerItems to fetch.
     */
    where?: BannerItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BannerItems to fetch.
     */
    orderBy?: BannerItemOrderByWithRelationInput | BannerItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BannerItems.
     */
    cursor?: BannerItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BannerItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BannerItems.
     */
    skip?: number
    distinct?: BannerItemScalarFieldEnum | BannerItemScalarFieldEnum[]
  }

  /**
   * BannerItem create
   */
  export type BannerItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannerItem
     */
    select?: BannerItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BannerItem
     */
    omit?: BannerItemOmit<ExtArgs> | null
    /**
     * The data needed to create a BannerItem.
     */
    data: XOR<BannerItemCreateInput, BannerItemUncheckedCreateInput>
  }

  /**
   * BannerItem createMany
   */
  export type BannerItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BannerItems.
     */
    data: BannerItemCreateManyInput | BannerItemCreateManyInput[]
  }

  /**
   * BannerItem createManyAndReturn
   */
  export type BannerItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannerItem
     */
    select?: BannerItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BannerItem
     */
    omit?: BannerItemOmit<ExtArgs> | null
    /**
     * The data used to create many BannerItems.
     */
    data: BannerItemCreateManyInput | BannerItemCreateManyInput[]
  }

  /**
   * BannerItem update
   */
  export type BannerItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannerItem
     */
    select?: BannerItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BannerItem
     */
    omit?: BannerItemOmit<ExtArgs> | null
    /**
     * The data needed to update a BannerItem.
     */
    data: XOR<BannerItemUpdateInput, BannerItemUncheckedUpdateInput>
    /**
     * Choose, which BannerItem to update.
     */
    where: BannerItemWhereUniqueInput
  }

  /**
   * BannerItem updateMany
   */
  export type BannerItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BannerItems.
     */
    data: XOR<BannerItemUpdateManyMutationInput, BannerItemUncheckedUpdateManyInput>
    /**
     * Filter which BannerItems to update
     */
    where?: BannerItemWhereInput
    /**
     * Limit how many BannerItems to update.
     */
    limit?: number
  }

  /**
   * BannerItem updateManyAndReturn
   */
  export type BannerItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannerItem
     */
    select?: BannerItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BannerItem
     */
    omit?: BannerItemOmit<ExtArgs> | null
    /**
     * The data used to update BannerItems.
     */
    data: XOR<BannerItemUpdateManyMutationInput, BannerItemUncheckedUpdateManyInput>
    /**
     * Filter which BannerItems to update
     */
    where?: BannerItemWhereInput
    /**
     * Limit how many BannerItems to update.
     */
    limit?: number
  }

  /**
   * BannerItem upsert
   */
  export type BannerItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannerItem
     */
    select?: BannerItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BannerItem
     */
    omit?: BannerItemOmit<ExtArgs> | null
    /**
     * The filter to search for the BannerItem to update in case it exists.
     */
    where: BannerItemWhereUniqueInput
    /**
     * In case the BannerItem found by the `where` argument doesn't exist, create a new BannerItem with this data.
     */
    create: XOR<BannerItemCreateInput, BannerItemUncheckedCreateInput>
    /**
     * In case the BannerItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BannerItemUpdateInput, BannerItemUncheckedUpdateInput>
  }

  /**
   * BannerItem delete
   */
  export type BannerItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannerItem
     */
    select?: BannerItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BannerItem
     */
    omit?: BannerItemOmit<ExtArgs> | null
    /**
     * Filter which BannerItem to delete.
     */
    where: BannerItemWhereUniqueInput
  }

  /**
   * BannerItem deleteMany
   */
  export type BannerItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BannerItems to delete
     */
    where?: BannerItemWhereInput
    /**
     * Limit how many BannerItems to delete.
     */
    limit?: number
  }

  /**
   * BannerItem without action
   */
  export type BannerItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannerItem
     */
    select?: BannerItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BannerItem
     */
    omit?: BannerItemOmit<ExtArgs> | null
  }


  /**
   * Model MapItem
   */

  export type AggregateMapItem = {
    _count: MapItemCountAggregateOutputType | null
    _avg: MapItemAvgAggregateOutputType | null
    _sum: MapItemSumAggregateOutputType | null
    _min: MapItemMinAggregateOutputType | null
    _max: MapItemMaxAggregateOutputType | null
  }

  export type MapItemAvgAggregateOutputType = {
    id: number | null
    x: number | null
    y: number | null
  }

  export type MapItemSumAggregateOutputType = {
    id: number | null
    x: number | null
    y: number | null
  }

  export type MapItemMinAggregateOutputType = {
    id: number | null
    name: string | null
    x: number | null
    y: number | null
    description: string | null
  }

  export type MapItemMaxAggregateOutputType = {
    id: number | null
    name: string | null
    x: number | null
    y: number | null
    description: string | null
  }

  export type MapItemCountAggregateOutputType = {
    id: number
    name: number
    x: number
    y: number
    description: number
    _all: number
  }


  export type MapItemAvgAggregateInputType = {
    id?: true
    x?: true
    y?: true
  }

  export type MapItemSumAggregateInputType = {
    id?: true
    x?: true
    y?: true
  }

  export type MapItemMinAggregateInputType = {
    id?: true
    name?: true
    x?: true
    y?: true
    description?: true
  }

  export type MapItemMaxAggregateInputType = {
    id?: true
    name?: true
    x?: true
    y?: true
    description?: true
  }

  export type MapItemCountAggregateInputType = {
    id?: true
    name?: true
    x?: true
    y?: true
    description?: true
    _all?: true
  }

  export type MapItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MapItem to aggregate.
     */
    where?: MapItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapItems to fetch.
     */
    orderBy?: MapItemOrderByWithRelationInput | MapItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MapItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MapItems
    **/
    _count?: true | MapItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MapItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MapItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MapItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MapItemMaxAggregateInputType
  }

  export type GetMapItemAggregateType<T extends MapItemAggregateArgs> = {
        [P in keyof T & keyof AggregateMapItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMapItem[P]>
      : GetScalarType<T[P], AggregateMapItem[P]>
  }




  export type MapItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapItemWhereInput
    orderBy?: MapItemOrderByWithAggregationInput | MapItemOrderByWithAggregationInput[]
    by: MapItemScalarFieldEnum[] | MapItemScalarFieldEnum
    having?: MapItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MapItemCountAggregateInputType | true
    _avg?: MapItemAvgAggregateInputType
    _sum?: MapItemSumAggregateInputType
    _min?: MapItemMinAggregateInputType
    _max?: MapItemMaxAggregateInputType
  }

  export type MapItemGroupByOutputType = {
    id: number
    name: string
    x: number
    y: number
    description: string
    _count: MapItemCountAggregateOutputType | null
    _avg: MapItemAvgAggregateOutputType | null
    _sum: MapItemSumAggregateOutputType | null
    _min: MapItemMinAggregateOutputType | null
    _max: MapItemMaxAggregateOutputType | null
  }

  type GetMapItemGroupByPayload<T extends MapItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MapItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MapItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MapItemGroupByOutputType[P]>
            : GetScalarType<T[P], MapItemGroupByOutputType[P]>
        }
      >
    >


  export type MapItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    x?: boolean
    y?: boolean
    description?: boolean
  }, ExtArgs["result"]["mapItem"]>

  export type MapItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    x?: boolean
    y?: boolean
    description?: boolean
  }, ExtArgs["result"]["mapItem"]>

  export type MapItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    x?: boolean
    y?: boolean
    description?: boolean
  }, ExtArgs["result"]["mapItem"]>

  export type MapItemSelectScalar = {
    id?: boolean
    name?: boolean
    x?: boolean
    y?: boolean
    description?: boolean
  }

  export type MapItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "x" | "y" | "description", ExtArgs["result"]["mapItem"]>

  export type $MapItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MapItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      x: number
      y: number
      description: string
    }, ExtArgs["result"]["mapItem"]>
    composites: {}
  }

  type MapItemGetPayload<S extends boolean | null | undefined | MapItemDefaultArgs> = $Result.GetResult<Prisma.$MapItemPayload, S>

  type MapItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MapItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MapItemCountAggregateInputType | true
    }

  export interface MapItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MapItem'], meta: { name: 'MapItem' } }
    /**
     * Find zero or one MapItem that matches the filter.
     * @param {MapItemFindUniqueArgs} args - Arguments to find a MapItem
     * @example
     * // Get one MapItem
     * const mapItem = await prisma.mapItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MapItemFindUniqueArgs>(args: SelectSubset<T, MapItemFindUniqueArgs<ExtArgs>>): Prisma__MapItemClient<$Result.GetResult<Prisma.$MapItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MapItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MapItemFindUniqueOrThrowArgs} args - Arguments to find a MapItem
     * @example
     * // Get one MapItem
     * const mapItem = await prisma.mapItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MapItemFindUniqueOrThrowArgs>(args: SelectSubset<T, MapItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MapItemClient<$Result.GetResult<Prisma.$MapItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MapItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapItemFindFirstArgs} args - Arguments to find a MapItem
     * @example
     * // Get one MapItem
     * const mapItem = await prisma.mapItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MapItemFindFirstArgs>(args?: SelectSubset<T, MapItemFindFirstArgs<ExtArgs>>): Prisma__MapItemClient<$Result.GetResult<Prisma.$MapItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MapItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapItemFindFirstOrThrowArgs} args - Arguments to find a MapItem
     * @example
     * // Get one MapItem
     * const mapItem = await prisma.mapItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MapItemFindFirstOrThrowArgs>(args?: SelectSubset<T, MapItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__MapItemClient<$Result.GetResult<Prisma.$MapItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MapItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MapItems
     * const mapItems = await prisma.mapItem.findMany()
     * 
     * // Get first 10 MapItems
     * const mapItems = await prisma.mapItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mapItemWithIdOnly = await prisma.mapItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MapItemFindManyArgs>(args?: SelectSubset<T, MapItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MapItem.
     * @param {MapItemCreateArgs} args - Arguments to create a MapItem.
     * @example
     * // Create one MapItem
     * const MapItem = await prisma.mapItem.create({
     *   data: {
     *     // ... data to create a MapItem
     *   }
     * })
     * 
     */
    create<T extends MapItemCreateArgs>(args: SelectSubset<T, MapItemCreateArgs<ExtArgs>>): Prisma__MapItemClient<$Result.GetResult<Prisma.$MapItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MapItems.
     * @param {MapItemCreateManyArgs} args - Arguments to create many MapItems.
     * @example
     * // Create many MapItems
     * const mapItem = await prisma.mapItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MapItemCreateManyArgs>(args?: SelectSubset<T, MapItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MapItems and returns the data saved in the database.
     * @param {MapItemCreateManyAndReturnArgs} args - Arguments to create many MapItems.
     * @example
     * // Create many MapItems
     * const mapItem = await prisma.mapItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MapItems and only return the `id`
     * const mapItemWithIdOnly = await prisma.mapItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MapItemCreateManyAndReturnArgs>(args?: SelectSubset<T, MapItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MapItem.
     * @param {MapItemDeleteArgs} args - Arguments to delete one MapItem.
     * @example
     * // Delete one MapItem
     * const MapItem = await prisma.mapItem.delete({
     *   where: {
     *     // ... filter to delete one MapItem
     *   }
     * })
     * 
     */
    delete<T extends MapItemDeleteArgs>(args: SelectSubset<T, MapItemDeleteArgs<ExtArgs>>): Prisma__MapItemClient<$Result.GetResult<Prisma.$MapItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MapItem.
     * @param {MapItemUpdateArgs} args - Arguments to update one MapItem.
     * @example
     * // Update one MapItem
     * const mapItem = await prisma.mapItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MapItemUpdateArgs>(args: SelectSubset<T, MapItemUpdateArgs<ExtArgs>>): Prisma__MapItemClient<$Result.GetResult<Prisma.$MapItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MapItems.
     * @param {MapItemDeleteManyArgs} args - Arguments to filter MapItems to delete.
     * @example
     * // Delete a few MapItems
     * const { count } = await prisma.mapItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MapItemDeleteManyArgs>(args?: SelectSubset<T, MapItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MapItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MapItems
     * const mapItem = await prisma.mapItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MapItemUpdateManyArgs>(args: SelectSubset<T, MapItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MapItems and returns the data updated in the database.
     * @param {MapItemUpdateManyAndReturnArgs} args - Arguments to update many MapItems.
     * @example
     * // Update many MapItems
     * const mapItem = await prisma.mapItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MapItems and only return the `id`
     * const mapItemWithIdOnly = await prisma.mapItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MapItemUpdateManyAndReturnArgs>(args: SelectSubset<T, MapItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MapItem.
     * @param {MapItemUpsertArgs} args - Arguments to update or create a MapItem.
     * @example
     * // Update or create a MapItem
     * const mapItem = await prisma.mapItem.upsert({
     *   create: {
     *     // ... data to create a MapItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MapItem we want to update
     *   }
     * })
     */
    upsert<T extends MapItemUpsertArgs>(args: SelectSubset<T, MapItemUpsertArgs<ExtArgs>>): Prisma__MapItemClient<$Result.GetResult<Prisma.$MapItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MapItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapItemCountArgs} args - Arguments to filter MapItems to count.
     * @example
     * // Count the number of MapItems
     * const count = await prisma.mapItem.count({
     *   where: {
     *     // ... the filter for the MapItems we want to count
     *   }
     * })
    **/
    count<T extends MapItemCountArgs>(
      args?: Subset<T, MapItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MapItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MapItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MapItemAggregateArgs>(args: Subset<T, MapItemAggregateArgs>): Prisma.PrismaPromise<GetMapItemAggregateType<T>>

    /**
     * Group by MapItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapItemGroupByArgs} args - Group by arguments.
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
      T extends MapItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MapItemGroupByArgs['orderBy'] }
        : { orderBy?: MapItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MapItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMapItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MapItem model
   */
  readonly fields: MapItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MapItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MapItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MapItem model
   */
  interface MapItemFieldRefs {
    readonly id: FieldRef<"MapItem", 'Int'>
    readonly name: FieldRef<"MapItem", 'String'>
    readonly x: FieldRef<"MapItem", 'Int'>
    readonly y: FieldRef<"MapItem", 'Int'>
    readonly description: FieldRef<"MapItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MapItem findUnique
   */
  export type MapItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapItem
     */
    select?: MapItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapItem
     */
    omit?: MapItemOmit<ExtArgs> | null
    /**
     * Filter, which MapItem to fetch.
     */
    where: MapItemWhereUniqueInput
  }

  /**
   * MapItem findUniqueOrThrow
   */
  export type MapItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapItem
     */
    select?: MapItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapItem
     */
    omit?: MapItemOmit<ExtArgs> | null
    /**
     * Filter, which MapItem to fetch.
     */
    where: MapItemWhereUniqueInput
  }

  /**
   * MapItem findFirst
   */
  export type MapItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapItem
     */
    select?: MapItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapItem
     */
    omit?: MapItemOmit<ExtArgs> | null
    /**
     * Filter, which MapItem to fetch.
     */
    where?: MapItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapItems to fetch.
     */
    orderBy?: MapItemOrderByWithRelationInput | MapItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MapItems.
     */
    cursor?: MapItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MapItems.
     */
    distinct?: MapItemScalarFieldEnum | MapItemScalarFieldEnum[]
  }

  /**
   * MapItem findFirstOrThrow
   */
  export type MapItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapItem
     */
    select?: MapItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapItem
     */
    omit?: MapItemOmit<ExtArgs> | null
    /**
     * Filter, which MapItem to fetch.
     */
    where?: MapItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapItems to fetch.
     */
    orderBy?: MapItemOrderByWithRelationInput | MapItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MapItems.
     */
    cursor?: MapItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MapItems.
     */
    distinct?: MapItemScalarFieldEnum | MapItemScalarFieldEnum[]
  }

  /**
   * MapItem findMany
   */
  export type MapItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapItem
     */
    select?: MapItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapItem
     */
    omit?: MapItemOmit<ExtArgs> | null
    /**
     * Filter, which MapItems to fetch.
     */
    where?: MapItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapItems to fetch.
     */
    orderBy?: MapItemOrderByWithRelationInput | MapItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MapItems.
     */
    cursor?: MapItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapItems.
     */
    skip?: number
    distinct?: MapItemScalarFieldEnum | MapItemScalarFieldEnum[]
  }

  /**
   * MapItem create
   */
  export type MapItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapItem
     */
    select?: MapItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapItem
     */
    omit?: MapItemOmit<ExtArgs> | null
    /**
     * The data needed to create a MapItem.
     */
    data: XOR<MapItemCreateInput, MapItemUncheckedCreateInput>
  }

  /**
   * MapItem createMany
   */
  export type MapItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MapItems.
     */
    data: MapItemCreateManyInput | MapItemCreateManyInput[]
  }

  /**
   * MapItem createManyAndReturn
   */
  export type MapItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapItem
     */
    select?: MapItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MapItem
     */
    omit?: MapItemOmit<ExtArgs> | null
    /**
     * The data used to create many MapItems.
     */
    data: MapItemCreateManyInput | MapItemCreateManyInput[]
  }

  /**
   * MapItem update
   */
  export type MapItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapItem
     */
    select?: MapItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapItem
     */
    omit?: MapItemOmit<ExtArgs> | null
    /**
     * The data needed to update a MapItem.
     */
    data: XOR<MapItemUpdateInput, MapItemUncheckedUpdateInput>
    /**
     * Choose, which MapItem to update.
     */
    where: MapItemWhereUniqueInput
  }

  /**
   * MapItem updateMany
   */
  export type MapItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MapItems.
     */
    data: XOR<MapItemUpdateManyMutationInput, MapItemUncheckedUpdateManyInput>
    /**
     * Filter which MapItems to update
     */
    where?: MapItemWhereInput
    /**
     * Limit how many MapItems to update.
     */
    limit?: number
  }

  /**
   * MapItem updateManyAndReturn
   */
  export type MapItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapItem
     */
    select?: MapItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MapItem
     */
    omit?: MapItemOmit<ExtArgs> | null
    /**
     * The data used to update MapItems.
     */
    data: XOR<MapItemUpdateManyMutationInput, MapItemUncheckedUpdateManyInput>
    /**
     * Filter which MapItems to update
     */
    where?: MapItemWhereInput
    /**
     * Limit how many MapItems to update.
     */
    limit?: number
  }

  /**
   * MapItem upsert
   */
  export type MapItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapItem
     */
    select?: MapItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapItem
     */
    omit?: MapItemOmit<ExtArgs> | null
    /**
     * The filter to search for the MapItem to update in case it exists.
     */
    where: MapItemWhereUniqueInput
    /**
     * In case the MapItem found by the `where` argument doesn't exist, create a new MapItem with this data.
     */
    create: XOR<MapItemCreateInput, MapItemUncheckedCreateInput>
    /**
     * In case the MapItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MapItemUpdateInput, MapItemUncheckedUpdateInput>
  }

  /**
   * MapItem delete
   */
  export type MapItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapItem
     */
    select?: MapItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapItem
     */
    omit?: MapItemOmit<ExtArgs> | null
    /**
     * Filter which MapItem to delete.
     */
    where: MapItemWhereUniqueInput
  }

  /**
   * MapItem deleteMany
   */
  export type MapItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MapItems to delete
     */
    where?: MapItemWhereInput
    /**
     * Limit how many MapItems to delete.
     */
    limit?: number
  }

  /**
   * MapItem without action
   */
  export type MapItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapItem
     */
    select?: MapItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapItem
     */
    omit?: MapItemOmit<ExtArgs> | null
  }


  /**
   * Model ExhibitionItem
   */

  export type AggregateExhibitionItem = {
    _count: ExhibitionItemCountAggregateOutputType | null
    _avg: ExhibitionItemAvgAggregateOutputType | null
    _sum: ExhibitionItemSumAggregateOutputType | null
    _min: ExhibitionItemMinAggregateOutputType | null
    _max: ExhibitionItemMaxAggregateOutputType | null
  }

  export type ExhibitionItemAvgAggregateOutputType = {
    id: number | null
  }

  export type ExhibitionItemSumAggregateOutputType = {
    id: number | null
  }

  export type ExhibitionItemMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    date: Date | null
    imageUrl: string | null
  }

  export type ExhibitionItemMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    date: Date | null
    imageUrl: string | null
  }

  export type ExhibitionItemCountAggregateOutputType = {
    id: number
    title: number
    description: number
    date: number
    imageUrl: number
    _all: number
  }


  export type ExhibitionItemAvgAggregateInputType = {
    id?: true
  }

  export type ExhibitionItemSumAggregateInputType = {
    id?: true
  }

  export type ExhibitionItemMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    date?: true
    imageUrl?: true
  }

  export type ExhibitionItemMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    date?: true
    imageUrl?: true
  }

  export type ExhibitionItemCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    date?: true
    imageUrl?: true
    _all?: true
  }

  export type ExhibitionItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExhibitionItem to aggregate.
     */
    where?: ExhibitionItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExhibitionItems to fetch.
     */
    orderBy?: ExhibitionItemOrderByWithRelationInput | ExhibitionItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExhibitionItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExhibitionItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExhibitionItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExhibitionItems
    **/
    _count?: true | ExhibitionItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExhibitionItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExhibitionItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExhibitionItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExhibitionItemMaxAggregateInputType
  }

  export type GetExhibitionItemAggregateType<T extends ExhibitionItemAggregateArgs> = {
        [P in keyof T & keyof AggregateExhibitionItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExhibitionItem[P]>
      : GetScalarType<T[P], AggregateExhibitionItem[P]>
  }




  export type ExhibitionItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExhibitionItemWhereInput
    orderBy?: ExhibitionItemOrderByWithAggregationInput | ExhibitionItemOrderByWithAggregationInput[]
    by: ExhibitionItemScalarFieldEnum[] | ExhibitionItemScalarFieldEnum
    having?: ExhibitionItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExhibitionItemCountAggregateInputType | true
    _avg?: ExhibitionItemAvgAggregateInputType
    _sum?: ExhibitionItemSumAggregateInputType
    _min?: ExhibitionItemMinAggregateInputType
    _max?: ExhibitionItemMaxAggregateInputType
  }

  export type ExhibitionItemGroupByOutputType = {
    id: number
    title: string
    description: string
    date: Date | null
    imageUrl: string
    _count: ExhibitionItemCountAggregateOutputType | null
    _avg: ExhibitionItemAvgAggregateOutputType | null
    _sum: ExhibitionItemSumAggregateOutputType | null
    _min: ExhibitionItemMinAggregateOutputType | null
    _max: ExhibitionItemMaxAggregateOutputType | null
  }

  type GetExhibitionItemGroupByPayload<T extends ExhibitionItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExhibitionItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExhibitionItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExhibitionItemGroupByOutputType[P]>
            : GetScalarType<T[P], ExhibitionItemGroupByOutputType[P]>
        }
      >
    >


  export type ExhibitionItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    imageUrl?: boolean
  }, ExtArgs["result"]["exhibitionItem"]>

  export type ExhibitionItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    imageUrl?: boolean
  }, ExtArgs["result"]["exhibitionItem"]>

  export type ExhibitionItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    imageUrl?: boolean
  }, ExtArgs["result"]["exhibitionItem"]>

  export type ExhibitionItemSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    imageUrl?: boolean
  }

  export type ExhibitionItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "date" | "imageUrl", ExtArgs["result"]["exhibitionItem"]>

  export type $ExhibitionItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExhibitionItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      date: Date | null
      imageUrl: string
    }, ExtArgs["result"]["exhibitionItem"]>
    composites: {}
  }

  type ExhibitionItemGetPayload<S extends boolean | null | undefined | ExhibitionItemDefaultArgs> = $Result.GetResult<Prisma.$ExhibitionItemPayload, S>

  type ExhibitionItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExhibitionItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExhibitionItemCountAggregateInputType | true
    }

  export interface ExhibitionItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExhibitionItem'], meta: { name: 'ExhibitionItem' } }
    /**
     * Find zero or one ExhibitionItem that matches the filter.
     * @param {ExhibitionItemFindUniqueArgs} args - Arguments to find a ExhibitionItem
     * @example
     * // Get one ExhibitionItem
     * const exhibitionItem = await prisma.exhibitionItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExhibitionItemFindUniqueArgs>(args: SelectSubset<T, ExhibitionItemFindUniqueArgs<ExtArgs>>): Prisma__ExhibitionItemClient<$Result.GetResult<Prisma.$ExhibitionItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExhibitionItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExhibitionItemFindUniqueOrThrowArgs} args - Arguments to find a ExhibitionItem
     * @example
     * // Get one ExhibitionItem
     * const exhibitionItem = await prisma.exhibitionItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExhibitionItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ExhibitionItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExhibitionItemClient<$Result.GetResult<Prisma.$ExhibitionItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExhibitionItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExhibitionItemFindFirstArgs} args - Arguments to find a ExhibitionItem
     * @example
     * // Get one ExhibitionItem
     * const exhibitionItem = await prisma.exhibitionItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExhibitionItemFindFirstArgs>(args?: SelectSubset<T, ExhibitionItemFindFirstArgs<ExtArgs>>): Prisma__ExhibitionItemClient<$Result.GetResult<Prisma.$ExhibitionItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExhibitionItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExhibitionItemFindFirstOrThrowArgs} args - Arguments to find a ExhibitionItem
     * @example
     * // Get one ExhibitionItem
     * const exhibitionItem = await prisma.exhibitionItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExhibitionItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ExhibitionItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExhibitionItemClient<$Result.GetResult<Prisma.$ExhibitionItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExhibitionItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExhibitionItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExhibitionItems
     * const exhibitionItems = await prisma.exhibitionItem.findMany()
     * 
     * // Get first 10 ExhibitionItems
     * const exhibitionItems = await prisma.exhibitionItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exhibitionItemWithIdOnly = await prisma.exhibitionItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExhibitionItemFindManyArgs>(args?: SelectSubset<T, ExhibitionItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExhibitionItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExhibitionItem.
     * @param {ExhibitionItemCreateArgs} args - Arguments to create a ExhibitionItem.
     * @example
     * // Create one ExhibitionItem
     * const ExhibitionItem = await prisma.exhibitionItem.create({
     *   data: {
     *     // ... data to create a ExhibitionItem
     *   }
     * })
     * 
     */
    create<T extends ExhibitionItemCreateArgs>(args: SelectSubset<T, ExhibitionItemCreateArgs<ExtArgs>>): Prisma__ExhibitionItemClient<$Result.GetResult<Prisma.$ExhibitionItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExhibitionItems.
     * @param {ExhibitionItemCreateManyArgs} args - Arguments to create many ExhibitionItems.
     * @example
     * // Create many ExhibitionItems
     * const exhibitionItem = await prisma.exhibitionItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExhibitionItemCreateManyArgs>(args?: SelectSubset<T, ExhibitionItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExhibitionItems and returns the data saved in the database.
     * @param {ExhibitionItemCreateManyAndReturnArgs} args - Arguments to create many ExhibitionItems.
     * @example
     * // Create many ExhibitionItems
     * const exhibitionItem = await prisma.exhibitionItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExhibitionItems and only return the `id`
     * const exhibitionItemWithIdOnly = await prisma.exhibitionItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExhibitionItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ExhibitionItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExhibitionItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExhibitionItem.
     * @param {ExhibitionItemDeleteArgs} args - Arguments to delete one ExhibitionItem.
     * @example
     * // Delete one ExhibitionItem
     * const ExhibitionItem = await prisma.exhibitionItem.delete({
     *   where: {
     *     // ... filter to delete one ExhibitionItem
     *   }
     * })
     * 
     */
    delete<T extends ExhibitionItemDeleteArgs>(args: SelectSubset<T, ExhibitionItemDeleteArgs<ExtArgs>>): Prisma__ExhibitionItemClient<$Result.GetResult<Prisma.$ExhibitionItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExhibitionItem.
     * @param {ExhibitionItemUpdateArgs} args - Arguments to update one ExhibitionItem.
     * @example
     * // Update one ExhibitionItem
     * const exhibitionItem = await prisma.exhibitionItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExhibitionItemUpdateArgs>(args: SelectSubset<T, ExhibitionItemUpdateArgs<ExtArgs>>): Prisma__ExhibitionItemClient<$Result.GetResult<Prisma.$ExhibitionItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExhibitionItems.
     * @param {ExhibitionItemDeleteManyArgs} args - Arguments to filter ExhibitionItems to delete.
     * @example
     * // Delete a few ExhibitionItems
     * const { count } = await prisma.exhibitionItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExhibitionItemDeleteManyArgs>(args?: SelectSubset<T, ExhibitionItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExhibitionItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExhibitionItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExhibitionItems
     * const exhibitionItem = await prisma.exhibitionItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExhibitionItemUpdateManyArgs>(args: SelectSubset<T, ExhibitionItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExhibitionItems and returns the data updated in the database.
     * @param {ExhibitionItemUpdateManyAndReturnArgs} args - Arguments to update many ExhibitionItems.
     * @example
     * // Update many ExhibitionItems
     * const exhibitionItem = await prisma.exhibitionItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExhibitionItems and only return the `id`
     * const exhibitionItemWithIdOnly = await prisma.exhibitionItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExhibitionItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ExhibitionItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExhibitionItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExhibitionItem.
     * @param {ExhibitionItemUpsertArgs} args - Arguments to update or create a ExhibitionItem.
     * @example
     * // Update or create a ExhibitionItem
     * const exhibitionItem = await prisma.exhibitionItem.upsert({
     *   create: {
     *     // ... data to create a ExhibitionItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExhibitionItem we want to update
     *   }
     * })
     */
    upsert<T extends ExhibitionItemUpsertArgs>(args: SelectSubset<T, ExhibitionItemUpsertArgs<ExtArgs>>): Prisma__ExhibitionItemClient<$Result.GetResult<Prisma.$ExhibitionItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExhibitionItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExhibitionItemCountArgs} args - Arguments to filter ExhibitionItems to count.
     * @example
     * // Count the number of ExhibitionItems
     * const count = await prisma.exhibitionItem.count({
     *   where: {
     *     // ... the filter for the ExhibitionItems we want to count
     *   }
     * })
    **/
    count<T extends ExhibitionItemCountArgs>(
      args?: Subset<T, ExhibitionItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExhibitionItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExhibitionItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExhibitionItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExhibitionItemAggregateArgs>(args: Subset<T, ExhibitionItemAggregateArgs>): Prisma.PrismaPromise<GetExhibitionItemAggregateType<T>>

    /**
     * Group by ExhibitionItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExhibitionItemGroupByArgs} args - Group by arguments.
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
      T extends ExhibitionItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExhibitionItemGroupByArgs['orderBy'] }
        : { orderBy?: ExhibitionItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExhibitionItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExhibitionItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExhibitionItem model
   */
  readonly fields: ExhibitionItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExhibitionItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExhibitionItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExhibitionItem model
   */
  interface ExhibitionItemFieldRefs {
    readonly id: FieldRef<"ExhibitionItem", 'Int'>
    readonly title: FieldRef<"ExhibitionItem", 'String'>
    readonly description: FieldRef<"ExhibitionItem", 'String'>
    readonly date: FieldRef<"ExhibitionItem", 'DateTime'>
    readonly imageUrl: FieldRef<"ExhibitionItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ExhibitionItem findUnique
   */
  export type ExhibitionItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExhibitionItem
     */
    select?: ExhibitionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExhibitionItem
     */
    omit?: ExhibitionItemOmit<ExtArgs> | null
    /**
     * Filter, which ExhibitionItem to fetch.
     */
    where: ExhibitionItemWhereUniqueInput
  }

  /**
   * ExhibitionItem findUniqueOrThrow
   */
  export type ExhibitionItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExhibitionItem
     */
    select?: ExhibitionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExhibitionItem
     */
    omit?: ExhibitionItemOmit<ExtArgs> | null
    /**
     * Filter, which ExhibitionItem to fetch.
     */
    where: ExhibitionItemWhereUniqueInput
  }

  /**
   * ExhibitionItem findFirst
   */
  export type ExhibitionItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExhibitionItem
     */
    select?: ExhibitionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExhibitionItem
     */
    omit?: ExhibitionItemOmit<ExtArgs> | null
    /**
     * Filter, which ExhibitionItem to fetch.
     */
    where?: ExhibitionItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExhibitionItems to fetch.
     */
    orderBy?: ExhibitionItemOrderByWithRelationInput | ExhibitionItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExhibitionItems.
     */
    cursor?: ExhibitionItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExhibitionItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExhibitionItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExhibitionItems.
     */
    distinct?: ExhibitionItemScalarFieldEnum | ExhibitionItemScalarFieldEnum[]
  }

  /**
   * ExhibitionItem findFirstOrThrow
   */
  export type ExhibitionItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExhibitionItem
     */
    select?: ExhibitionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExhibitionItem
     */
    omit?: ExhibitionItemOmit<ExtArgs> | null
    /**
     * Filter, which ExhibitionItem to fetch.
     */
    where?: ExhibitionItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExhibitionItems to fetch.
     */
    orderBy?: ExhibitionItemOrderByWithRelationInput | ExhibitionItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExhibitionItems.
     */
    cursor?: ExhibitionItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExhibitionItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExhibitionItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExhibitionItems.
     */
    distinct?: ExhibitionItemScalarFieldEnum | ExhibitionItemScalarFieldEnum[]
  }

  /**
   * ExhibitionItem findMany
   */
  export type ExhibitionItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExhibitionItem
     */
    select?: ExhibitionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExhibitionItem
     */
    omit?: ExhibitionItemOmit<ExtArgs> | null
    /**
     * Filter, which ExhibitionItems to fetch.
     */
    where?: ExhibitionItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExhibitionItems to fetch.
     */
    orderBy?: ExhibitionItemOrderByWithRelationInput | ExhibitionItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExhibitionItems.
     */
    cursor?: ExhibitionItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExhibitionItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExhibitionItems.
     */
    skip?: number
    distinct?: ExhibitionItemScalarFieldEnum | ExhibitionItemScalarFieldEnum[]
  }

  /**
   * ExhibitionItem create
   */
  export type ExhibitionItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExhibitionItem
     */
    select?: ExhibitionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExhibitionItem
     */
    omit?: ExhibitionItemOmit<ExtArgs> | null
    /**
     * The data needed to create a ExhibitionItem.
     */
    data: XOR<ExhibitionItemCreateInput, ExhibitionItemUncheckedCreateInput>
  }

  /**
   * ExhibitionItem createMany
   */
  export type ExhibitionItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExhibitionItems.
     */
    data: ExhibitionItemCreateManyInput | ExhibitionItemCreateManyInput[]
  }

  /**
   * ExhibitionItem createManyAndReturn
   */
  export type ExhibitionItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExhibitionItem
     */
    select?: ExhibitionItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExhibitionItem
     */
    omit?: ExhibitionItemOmit<ExtArgs> | null
    /**
     * The data used to create many ExhibitionItems.
     */
    data: ExhibitionItemCreateManyInput | ExhibitionItemCreateManyInput[]
  }

  /**
   * ExhibitionItem update
   */
  export type ExhibitionItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExhibitionItem
     */
    select?: ExhibitionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExhibitionItem
     */
    omit?: ExhibitionItemOmit<ExtArgs> | null
    /**
     * The data needed to update a ExhibitionItem.
     */
    data: XOR<ExhibitionItemUpdateInput, ExhibitionItemUncheckedUpdateInput>
    /**
     * Choose, which ExhibitionItem to update.
     */
    where: ExhibitionItemWhereUniqueInput
  }

  /**
   * ExhibitionItem updateMany
   */
  export type ExhibitionItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExhibitionItems.
     */
    data: XOR<ExhibitionItemUpdateManyMutationInput, ExhibitionItemUncheckedUpdateManyInput>
    /**
     * Filter which ExhibitionItems to update
     */
    where?: ExhibitionItemWhereInput
    /**
     * Limit how many ExhibitionItems to update.
     */
    limit?: number
  }

  /**
   * ExhibitionItem updateManyAndReturn
   */
  export type ExhibitionItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExhibitionItem
     */
    select?: ExhibitionItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExhibitionItem
     */
    omit?: ExhibitionItemOmit<ExtArgs> | null
    /**
     * The data used to update ExhibitionItems.
     */
    data: XOR<ExhibitionItemUpdateManyMutationInput, ExhibitionItemUncheckedUpdateManyInput>
    /**
     * Filter which ExhibitionItems to update
     */
    where?: ExhibitionItemWhereInput
    /**
     * Limit how many ExhibitionItems to update.
     */
    limit?: number
  }

  /**
   * ExhibitionItem upsert
   */
  export type ExhibitionItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExhibitionItem
     */
    select?: ExhibitionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExhibitionItem
     */
    omit?: ExhibitionItemOmit<ExtArgs> | null
    /**
     * The filter to search for the ExhibitionItem to update in case it exists.
     */
    where: ExhibitionItemWhereUniqueInput
    /**
     * In case the ExhibitionItem found by the `where` argument doesn't exist, create a new ExhibitionItem with this data.
     */
    create: XOR<ExhibitionItemCreateInput, ExhibitionItemUncheckedCreateInput>
    /**
     * In case the ExhibitionItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExhibitionItemUpdateInput, ExhibitionItemUncheckedUpdateInput>
  }

  /**
   * ExhibitionItem delete
   */
  export type ExhibitionItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExhibitionItem
     */
    select?: ExhibitionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExhibitionItem
     */
    omit?: ExhibitionItemOmit<ExtArgs> | null
    /**
     * Filter which ExhibitionItem to delete.
     */
    where: ExhibitionItemWhereUniqueInput
  }

  /**
   * ExhibitionItem deleteMany
   */
  export type ExhibitionItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExhibitionItems to delete
     */
    where?: ExhibitionItemWhereInput
    /**
     * Limit how many ExhibitionItems to delete.
     */
    limit?: number
  }

  /**
   * ExhibitionItem without action
   */
  export type ExhibitionItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExhibitionItem
     */
    select?: ExhibitionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExhibitionItem
     */
    omit?: ExhibitionItemOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BannerItemScalarFieldEnum: {
    id: 'id',
    imageUrl: 'imageUrl'
  };

  export type BannerItemScalarFieldEnum = (typeof BannerItemScalarFieldEnum)[keyof typeof BannerItemScalarFieldEnum]


  export const MapItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    x: 'x',
    y: 'y',
    description: 'description'
  };

  export type MapItemScalarFieldEnum = (typeof MapItemScalarFieldEnum)[keyof typeof MapItemScalarFieldEnum]


  export const ExhibitionItemScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    date: 'date',
    imageUrl: 'imageUrl'
  };

  export type ExhibitionItemScalarFieldEnum = (typeof ExhibitionItemScalarFieldEnum)[keyof typeof ExhibitionItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type BannerItemWhereInput = {
    AND?: BannerItemWhereInput | BannerItemWhereInput[]
    OR?: BannerItemWhereInput[]
    NOT?: BannerItemWhereInput | BannerItemWhereInput[]
    id?: IntFilter<"BannerItem"> | number
    imageUrl?: StringFilter<"BannerItem"> | string
  }

  export type BannerItemOrderByWithRelationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
  }

  export type BannerItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BannerItemWhereInput | BannerItemWhereInput[]
    OR?: BannerItemWhereInput[]
    NOT?: BannerItemWhereInput | BannerItemWhereInput[]
    imageUrl?: StringFilter<"BannerItem"> | string
  }, "id">

  export type BannerItemOrderByWithAggregationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    _count?: BannerItemCountOrderByAggregateInput
    _avg?: BannerItemAvgOrderByAggregateInput
    _max?: BannerItemMaxOrderByAggregateInput
    _min?: BannerItemMinOrderByAggregateInput
    _sum?: BannerItemSumOrderByAggregateInput
  }

  export type BannerItemScalarWhereWithAggregatesInput = {
    AND?: BannerItemScalarWhereWithAggregatesInput | BannerItemScalarWhereWithAggregatesInput[]
    OR?: BannerItemScalarWhereWithAggregatesInput[]
    NOT?: BannerItemScalarWhereWithAggregatesInput | BannerItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BannerItem"> | number
    imageUrl?: StringWithAggregatesFilter<"BannerItem"> | string
  }

  export type MapItemWhereInput = {
    AND?: MapItemWhereInput | MapItemWhereInput[]
    OR?: MapItemWhereInput[]
    NOT?: MapItemWhereInput | MapItemWhereInput[]
    id?: IntFilter<"MapItem"> | number
    name?: StringFilter<"MapItem"> | string
    x?: IntFilter<"MapItem"> | number
    y?: IntFilter<"MapItem"> | number
    description?: StringFilter<"MapItem"> | string
  }

  export type MapItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    x?: SortOrder
    y?: SortOrder
    description?: SortOrder
  }

  export type MapItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MapItemWhereInput | MapItemWhereInput[]
    OR?: MapItemWhereInput[]
    NOT?: MapItemWhereInput | MapItemWhereInput[]
    name?: StringFilter<"MapItem"> | string
    x?: IntFilter<"MapItem"> | number
    y?: IntFilter<"MapItem"> | number
    description?: StringFilter<"MapItem"> | string
  }, "id">

  export type MapItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    x?: SortOrder
    y?: SortOrder
    description?: SortOrder
    _count?: MapItemCountOrderByAggregateInput
    _avg?: MapItemAvgOrderByAggregateInput
    _max?: MapItemMaxOrderByAggregateInput
    _min?: MapItemMinOrderByAggregateInput
    _sum?: MapItemSumOrderByAggregateInput
  }

  export type MapItemScalarWhereWithAggregatesInput = {
    AND?: MapItemScalarWhereWithAggregatesInput | MapItemScalarWhereWithAggregatesInput[]
    OR?: MapItemScalarWhereWithAggregatesInput[]
    NOT?: MapItemScalarWhereWithAggregatesInput | MapItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MapItem"> | number
    name?: StringWithAggregatesFilter<"MapItem"> | string
    x?: IntWithAggregatesFilter<"MapItem"> | number
    y?: IntWithAggregatesFilter<"MapItem"> | number
    description?: StringWithAggregatesFilter<"MapItem"> | string
  }

  export type ExhibitionItemWhereInput = {
    AND?: ExhibitionItemWhereInput | ExhibitionItemWhereInput[]
    OR?: ExhibitionItemWhereInput[]
    NOT?: ExhibitionItemWhereInput | ExhibitionItemWhereInput[]
    id?: IntFilter<"ExhibitionItem"> | number
    title?: StringFilter<"ExhibitionItem"> | string
    description?: StringFilter<"ExhibitionItem"> | string
    date?: DateTimeNullableFilter<"ExhibitionItem"> | Date | string | null
    imageUrl?: StringFilter<"ExhibitionItem"> | string
  }

  export type ExhibitionItemOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrderInput | SortOrder
    imageUrl?: SortOrder
  }

  export type ExhibitionItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExhibitionItemWhereInput | ExhibitionItemWhereInput[]
    OR?: ExhibitionItemWhereInput[]
    NOT?: ExhibitionItemWhereInput | ExhibitionItemWhereInput[]
    title?: StringFilter<"ExhibitionItem"> | string
    description?: StringFilter<"ExhibitionItem"> | string
    date?: DateTimeNullableFilter<"ExhibitionItem"> | Date | string | null
    imageUrl?: StringFilter<"ExhibitionItem"> | string
  }, "id">

  export type ExhibitionItemOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrderInput | SortOrder
    imageUrl?: SortOrder
    _count?: ExhibitionItemCountOrderByAggregateInput
    _avg?: ExhibitionItemAvgOrderByAggregateInput
    _max?: ExhibitionItemMaxOrderByAggregateInput
    _min?: ExhibitionItemMinOrderByAggregateInput
    _sum?: ExhibitionItemSumOrderByAggregateInput
  }

  export type ExhibitionItemScalarWhereWithAggregatesInput = {
    AND?: ExhibitionItemScalarWhereWithAggregatesInput | ExhibitionItemScalarWhereWithAggregatesInput[]
    OR?: ExhibitionItemScalarWhereWithAggregatesInput[]
    NOT?: ExhibitionItemScalarWhereWithAggregatesInput | ExhibitionItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ExhibitionItem"> | number
    title?: StringWithAggregatesFilter<"ExhibitionItem"> | string
    description?: StringWithAggregatesFilter<"ExhibitionItem"> | string
    date?: DateTimeNullableWithAggregatesFilter<"ExhibitionItem"> | Date | string | null
    imageUrl?: StringWithAggregatesFilter<"ExhibitionItem"> | string
  }

  export type BannerItemCreateInput = {
    imageUrl: string
  }

  export type BannerItemUncheckedCreateInput = {
    id?: number
    imageUrl: string
  }

  export type BannerItemUpdateInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type BannerItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type BannerItemCreateManyInput = {
    id?: number
    imageUrl: string
  }

  export type BannerItemUpdateManyMutationInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type BannerItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type MapItemCreateInput = {
    name: string
    x: number
    y: number
    description: string
  }

  export type MapItemUncheckedCreateInput = {
    id?: number
    name: string
    x: number
    y: number
    description: string
  }

  export type MapItemUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type MapItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type MapItemCreateManyInput = {
    id?: number
    name: string
    x: number
    y: number
    description: string
  }

  export type MapItemUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type MapItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ExhibitionItemCreateInput = {
    title: string
    description: string
    date?: Date | string | null
    imageUrl: string
  }

  export type ExhibitionItemUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    date?: Date | string | null
    imageUrl: string
  }

  export type ExhibitionItemUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type ExhibitionItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type ExhibitionItemCreateManyInput = {
    id?: number
    title: string
    description: string
    date?: Date | string | null
    imageUrl: string
  }

  export type ExhibitionItemUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type ExhibitionItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BannerItemCountOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
  }

  export type BannerItemAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BannerItemMaxOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
  }

  export type BannerItemMinOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
  }

  export type BannerItemSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type MapItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    x?: SortOrder
    y?: SortOrder
    description?: SortOrder
  }

  export type MapItemAvgOrderByAggregateInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
  }

  export type MapItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    x?: SortOrder
    y?: SortOrder
    description?: SortOrder
  }

  export type MapItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    x?: SortOrder
    y?: SortOrder
    description?: SortOrder
  }

  export type MapItemSumOrderByAggregateInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ExhibitionItemCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    imageUrl?: SortOrder
  }

  export type ExhibitionItemAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ExhibitionItemMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    imageUrl?: SortOrder
  }

  export type ExhibitionItemMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    imageUrl?: SortOrder
  }

  export type ExhibitionItemSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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