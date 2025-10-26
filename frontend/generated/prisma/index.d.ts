
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserMatura
 * 
 */
export type UserMatura = $Result.DefaultSelection<Prisma.$UserMaturaPayload>
/**
 * Model Matura
 * 
 */
export type Matura = $Result.DefaultSelection<Prisma.$MaturaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userMatura`: Exposes CRUD operations for the **UserMatura** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserMaturas
    * const userMaturas = await prisma.userMatura.findMany()
    * ```
    */
  get userMatura(): Prisma.UserMaturaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.matura`: Exposes CRUD operations for the **Matura** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Maturas
    * const maturas = await prisma.matura.findMany()
    * ```
    */
  get matura(): Prisma.MaturaDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
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
    User: 'User',
    UserMatura: 'UserMatura',
    Matura: 'Matura'
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
      modelProps: "user" | "userMatura" | "matura"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserMatura: {
        payload: Prisma.$UserMaturaPayload<ExtArgs>
        fields: Prisma.UserMaturaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserMaturaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMaturaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserMaturaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMaturaPayload>
          }
          findFirst: {
            args: Prisma.UserMaturaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMaturaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserMaturaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMaturaPayload>
          }
          findMany: {
            args: Prisma.UserMaturaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMaturaPayload>[]
          }
          create: {
            args: Prisma.UserMaturaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMaturaPayload>
          }
          createMany: {
            args: Prisma.UserMaturaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserMaturaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMaturaPayload>[]
          }
          delete: {
            args: Prisma.UserMaturaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMaturaPayload>
          }
          update: {
            args: Prisma.UserMaturaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMaturaPayload>
          }
          deleteMany: {
            args: Prisma.UserMaturaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserMaturaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserMaturaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMaturaPayload>[]
          }
          upsert: {
            args: Prisma.UserMaturaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMaturaPayload>
          }
          aggregate: {
            args: Prisma.UserMaturaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserMatura>
          }
          groupBy: {
            args: Prisma.UserMaturaGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserMaturaGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserMaturaCountArgs<ExtArgs>
            result: $Utils.Optional<UserMaturaCountAggregateOutputType> | number
          }
        }
      }
      Matura: {
        payload: Prisma.$MaturaPayload<ExtArgs>
        fields: Prisma.MaturaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaturaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaturaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaturaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaturaPayload>
          }
          findFirst: {
            args: Prisma.MaturaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaturaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaturaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaturaPayload>
          }
          findMany: {
            args: Prisma.MaturaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaturaPayload>[]
          }
          create: {
            args: Prisma.MaturaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaturaPayload>
          }
          createMany: {
            args: Prisma.MaturaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaturaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaturaPayload>[]
          }
          delete: {
            args: Prisma.MaturaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaturaPayload>
          }
          update: {
            args: Prisma.MaturaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaturaPayload>
          }
          deleteMany: {
            args: Prisma.MaturaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaturaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MaturaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaturaPayload>[]
          }
          upsert: {
            args: Prisma.MaturaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaturaPayload>
          }
          aggregate: {
            args: Prisma.MaturaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatura>
          }
          groupBy: {
            args: Prisma.MaturaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaturaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaturaCountArgs<ExtArgs>
            result: $Utils.Optional<MaturaCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    user?: UserOmit
    userMatura?: UserMaturaOmit
    matura?: MaturaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    userMaturas: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userMaturas?: boolean | UserCountOutputTypeCountUserMaturasArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserMaturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserMaturaWhereInput
  }


  /**
   * Count Type MaturaCountOutputType
   */

  export type MaturaCountOutputType = {
    userMaturas: number
  }

  export type MaturaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userMaturas?: boolean | MaturaCountOutputTypeCountUserMaturasArgs
  }

  // Custom InputTypes
  /**
   * MaturaCountOutputType without action
   */
  export type MaturaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaturaCountOutputType
     */
    select?: MaturaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MaturaCountOutputType without action
   */
  export type MaturaCountOutputTypeCountUserMaturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserMaturaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    clerkId: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    createDate: Date | null
    updateDate: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    clerkId: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    createDate: Date | null
    updateDate: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clerkId: number
    firstName: number
    lastName: number
    email: number
    createDate: number
    updateDate: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    clerkId?: true
    firstName?: true
    lastName?: true
    email?: true
    createDate?: true
    updateDate?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clerkId?: true
    firstName?: true
    lastName?: true
    email?: true
    createDate?: true
    updateDate?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clerkId?: true
    firstName?: true
    lastName?: true
    email?: true
    createDate?: true
    updateDate?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    clerkId: string
    firstName: string | null
    lastName: string | null
    email: string
    createDate: Date
    updateDate: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    createDate?: boolean
    updateDate?: boolean
    userMaturas?: boolean | User$userMaturasArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    createDate?: boolean
    updateDate?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    createDate?: boolean
    updateDate?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    clerkId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    createDate?: boolean
    updateDate?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkId" | "firstName" | "lastName" | "email" | "createDate" | "updateDate", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userMaturas?: boolean | User$userMaturasArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      userMaturas: Prisma.$UserMaturaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkId: string
      firstName: string | null
      lastName: string | null
      email: string
      createDate: Date
      updateDate: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userMaturas<T extends User$userMaturasArgs<ExtArgs> = {}>(args?: Subset<T, User$userMaturasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMaturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly clerkId: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly createDate: FieldRef<"User", 'DateTime'>
    readonly updateDate: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.userMaturas
   */
  export type User$userMaturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMatura
     */
    select?: UserMaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMatura
     */
    omit?: UserMaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMaturaInclude<ExtArgs> | null
    where?: UserMaturaWhereInput
    orderBy?: UserMaturaOrderByWithRelationInput | UserMaturaOrderByWithRelationInput[]
    cursor?: UserMaturaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserMaturaScalarFieldEnum | UserMaturaScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserMatura
   */

  export type AggregateUserMatura = {
    _count: UserMaturaCountAggregateOutputType | null
    _min: UserMaturaMinAggregateOutputType | null
    _max: UserMaturaMaxAggregateOutputType | null
  }

  export type UserMaturaMinAggregateOutputType = {
    id: string | null
    userId: string | null
    maturaId: string | null
    status: string | null
    createdAt: Date | null
    finishedAt: Date | null
  }

  export type UserMaturaMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    maturaId: string | null
    status: string | null
    createdAt: Date | null
    finishedAt: Date | null
  }

  export type UserMaturaCountAggregateOutputType = {
    id: number
    userId: number
    maturaId: number
    snapshot: number
    status: number
    createdAt: number
    finishedAt: number
    _all: number
  }


  export type UserMaturaMinAggregateInputType = {
    id?: true
    userId?: true
    maturaId?: true
    status?: true
    createdAt?: true
    finishedAt?: true
  }

  export type UserMaturaMaxAggregateInputType = {
    id?: true
    userId?: true
    maturaId?: true
    status?: true
    createdAt?: true
    finishedAt?: true
  }

  export type UserMaturaCountAggregateInputType = {
    id?: true
    userId?: true
    maturaId?: true
    snapshot?: true
    status?: true
    createdAt?: true
    finishedAt?: true
    _all?: true
  }

  export type UserMaturaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserMatura to aggregate.
     */
    where?: UserMaturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMaturas to fetch.
     */
    orderBy?: UserMaturaOrderByWithRelationInput | UserMaturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserMaturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMaturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMaturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserMaturas
    **/
    _count?: true | UserMaturaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMaturaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaturaMaxAggregateInputType
  }

  export type GetUserMaturaAggregateType<T extends UserMaturaAggregateArgs> = {
        [P in keyof T & keyof AggregateUserMatura]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserMatura[P]>
      : GetScalarType<T[P], AggregateUserMatura[P]>
  }




  export type UserMaturaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserMaturaWhereInput
    orderBy?: UserMaturaOrderByWithAggregationInput | UserMaturaOrderByWithAggregationInput[]
    by: UserMaturaScalarFieldEnum[] | UserMaturaScalarFieldEnum
    having?: UserMaturaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserMaturaCountAggregateInputType | true
    _min?: UserMaturaMinAggregateInputType
    _max?: UserMaturaMaxAggregateInputType
  }

  export type UserMaturaGroupByOutputType = {
    id: string
    userId: string
    maturaId: string
    snapshot: JsonValue
    status: string
    createdAt: Date
    finishedAt: Date | null
    _count: UserMaturaCountAggregateOutputType | null
    _min: UserMaturaMinAggregateOutputType | null
    _max: UserMaturaMaxAggregateOutputType | null
  }

  type GetUserMaturaGroupByPayload<T extends UserMaturaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserMaturaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserMaturaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserMaturaGroupByOutputType[P]>
            : GetScalarType<T[P], UserMaturaGroupByOutputType[P]>
        }
      >
    >


  export type UserMaturaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    maturaId?: boolean
    snapshot?: boolean
    status?: boolean
    createdAt?: boolean
    finishedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    matura?: boolean | MaturaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userMatura"]>

  export type UserMaturaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    maturaId?: boolean
    snapshot?: boolean
    status?: boolean
    createdAt?: boolean
    finishedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    matura?: boolean | MaturaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userMatura"]>

  export type UserMaturaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    maturaId?: boolean
    snapshot?: boolean
    status?: boolean
    createdAt?: boolean
    finishedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    matura?: boolean | MaturaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userMatura"]>

  export type UserMaturaSelectScalar = {
    id?: boolean
    userId?: boolean
    maturaId?: boolean
    snapshot?: boolean
    status?: boolean
    createdAt?: boolean
    finishedAt?: boolean
  }

  export type UserMaturaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "maturaId" | "snapshot" | "status" | "createdAt" | "finishedAt", ExtArgs["result"]["userMatura"]>
  export type UserMaturaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    matura?: boolean | MaturaDefaultArgs<ExtArgs>
  }
  export type UserMaturaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    matura?: boolean | MaturaDefaultArgs<ExtArgs>
  }
  export type UserMaturaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    matura?: boolean | MaturaDefaultArgs<ExtArgs>
  }

  export type $UserMaturaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserMatura"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      matura: Prisma.$MaturaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      maturaId: string
      snapshot: Prisma.JsonValue
      status: string
      createdAt: Date
      finishedAt: Date | null
    }, ExtArgs["result"]["userMatura"]>
    composites: {}
  }

  type UserMaturaGetPayload<S extends boolean | null | undefined | UserMaturaDefaultArgs> = $Result.GetResult<Prisma.$UserMaturaPayload, S>

  type UserMaturaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserMaturaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserMaturaCountAggregateInputType | true
    }

  export interface UserMaturaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserMatura'], meta: { name: 'UserMatura' } }
    /**
     * Find zero or one UserMatura that matches the filter.
     * @param {UserMaturaFindUniqueArgs} args - Arguments to find a UserMatura
     * @example
     * // Get one UserMatura
     * const userMatura = await prisma.userMatura.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserMaturaFindUniqueArgs>(args: SelectSubset<T, UserMaturaFindUniqueArgs<ExtArgs>>): Prisma__UserMaturaClient<$Result.GetResult<Prisma.$UserMaturaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserMatura that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserMaturaFindUniqueOrThrowArgs} args - Arguments to find a UserMatura
     * @example
     * // Get one UserMatura
     * const userMatura = await prisma.userMatura.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserMaturaFindUniqueOrThrowArgs>(args: SelectSubset<T, UserMaturaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserMaturaClient<$Result.GetResult<Prisma.$UserMaturaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserMatura that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMaturaFindFirstArgs} args - Arguments to find a UserMatura
     * @example
     * // Get one UserMatura
     * const userMatura = await prisma.userMatura.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserMaturaFindFirstArgs>(args?: SelectSubset<T, UserMaturaFindFirstArgs<ExtArgs>>): Prisma__UserMaturaClient<$Result.GetResult<Prisma.$UserMaturaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserMatura that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMaturaFindFirstOrThrowArgs} args - Arguments to find a UserMatura
     * @example
     * // Get one UserMatura
     * const userMatura = await prisma.userMatura.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserMaturaFindFirstOrThrowArgs>(args?: SelectSubset<T, UserMaturaFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserMaturaClient<$Result.GetResult<Prisma.$UserMaturaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserMaturas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMaturaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserMaturas
     * const userMaturas = await prisma.userMatura.findMany()
     * 
     * // Get first 10 UserMaturas
     * const userMaturas = await prisma.userMatura.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userMaturaWithIdOnly = await prisma.userMatura.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserMaturaFindManyArgs>(args?: SelectSubset<T, UserMaturaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMaturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserMatura.
     * @param {UserMaturaCreateArgs} args - Arguments to create a UserMatura.
     * @example
     * // Create one UserMatura
     * const UserMatura = await prisma.userMatura.create({
     *   data: {
     *     // ... data to create a UserMatura
     *   }
     * })
     * 
     */
    create<T extends UserMaturaCreateArgs>(args: SelectSubset<T, UserMaturaCreateArgs<ExtArgs>>): Prisma__UserMaturaClient<$Result.GetResult<Prisma.$UserMaturaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserMaturas.
     * @param {UserMaturaCreateManyArgs} args - Arguments to create many UserMaturas.
     * @example
     * // Create many UserMaturas
     * const userMatura = await prisma.userMatura.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserMaturaCreateManyArgs>(args?: SelectSubset<T, UserMaturaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserMaturas and returns the data saved in the database.
     * @param {UserMaturaCreateManyAndReturnArgs} args - Arguments to create many UserMaturas.
     * @example
     * // Create many UserMaturas
     * const userMatura = await prisma.userMatura.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserMaturas and only return the `id`
     * const userMaturaWithIdOnly = await prisma.userMatura.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserMaturaCreateManyAndReturnArgs>(args?: SelectSubset<T, UserMaturaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMaturaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserMatura.
     * @param {UserMaturaDeleteArgs} args - Arguments to delete one UserMatura.
     * @example
     * // Delete one UserMatura
     * const UserMatura = await prisma.userMatura.delete({
     *   where: {
     *     // ... filter to delete one UserMatura
     *   }
     * })
     * 
     */
    delete<T extends UserMaturaDeleteArgs>(args: SelectSubset<T, UserMaturaDeleteArgs<ExtArgs>>): Prisma__UserMaturaClient<$Result.GetResult<Prisma.$UserMaturaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserMatura.
     * @param {UserMaturaUpdateArgs} args - Arguments to update one UserMatura.
     * @example
     * // Update one UserMatura
     * const userMatura = await prisma.userMatura.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserMaturaUpdateArgs>(args: SelectSubset<T, UserMaturaUpdateArgs<ExtArgs>>): Prisma__UserMaturaClient<$Result.GetResult<Prisma.$UserMaturaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserMaturas.
     * @param {UserMaturaDeleteManyArgs} args - Arguments to filter UserMaturas to delete.
     * @example
     * // Delete a few UserMaturas
     * const { count } = await prisma.userMatura.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserMaturaDeleteManyArgs>(args?: SelectSubset<T, UserMaturaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserMaturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMaturaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserMaturas
     * const userMatura = await prisma.userMatura.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserMaturaUpdateManyArgs>(args: SelectSubset<T, UserMaturaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserMaturas and returns the data updated in the database.
     * @param {UserMaturaUpdateManyAndReturnArgs} args - Arguments to update many UserMaturas.
     * @example
     * // Update many UserMaturas
     * const userMatura = await prisma.userMatura.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserMaturas and only return the `id`
     * const userMaturaWithIdOnly = await prisma.userMatura.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserMaturaUpdateManyAndReturnArgs>(args: SelectSubset<T, UserMaturaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMaturaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserMatura.
     * @param {UserMaturaUpsertArgs} args - Arguments to update or create a UserMatura.
     * @example
     * // Update or create a UserMatura
     * const userMatura = await prisma.userMatura.upsert({
     *   create: {
     *     // ... data to create a UserMatura
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserMatura we want to update
     *   }
     * })
     */
    upsert<T extends UserMaturaUpsertArgs>(args: SelectSubset<T, UserMaturaUpsertArgs<ExtArgs>>): Prisma__UserMaturaClient<$Result.GetResult<Prisma.$UserMaturaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserMaturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMaturaCountArgs} args - Arguments to filter UserMaturas to count.
     * @example
     * // Count the number of UserMaturas
     * const count = await prisma.userMatura.count({
     *   where: {
     *     // ... the filter for the UserMaturas we want to count
     *   }
     * })
    **/
    count<T extends UserMaturaCountArgs>(
      args?: Subset<T, UserMaturaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserMaturaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserMatura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMaturaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserMaturaAggregateArgs>(args: Subset<T, UserMaturaAggregateArgs>): Prisma.PrismaPromise<GetUserMaturaAggregateType<T>>

    /**
     * Group by UserMatura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMaturaGroupByArgs} args - Group by arguments.
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
      T extends UserMaturaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserMaturaGroupByArgs['orderBy'] }
        : { orderBy?: UserMaturaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserMaturaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserMaturaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserMatura model
   */
  readonly fields: UserMaturaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserMatura.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserMaturaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    matura<T extends MaturaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MaturaDefaultArgs<ExtArgs>>): Prisma__MaturaClient<$Result.GetResult<Prisma.$MaturaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserMatura model
   */
  interface UserMaturaFieldRefs {
    readonly id: FieldRef<"UserMatura", 'String'>
    readonly userId: FieldRef<"UserMatura", 'String'>
    readonly maturaId: FieldRef<"UserMatura", 'String'>
    readonly snapshot: FieldRef<"UserMatura", 'Json'>
    readonly status: FieldRef<"UserMatura", 'String'>
    readonly createdAt: FieldRef<"UserMatura", 'DateTime'>
    readonly finishedAt: FieldRef<"UserMatura", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserMatura findUnique
   */
  export type UserMaturaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMatura
     */
    select?: UserMaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMatura
     */
    omit?: UserMaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMaturaInclude<ExtArgs> | null
    /**
     * Filter, which UserMatura to fetch.
     */
    where: UserMaturaWhereUniqueInput
  }

  /**
   * UserMatura findUniqueOrThrow
   */
  export type UserMaturaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMatura
     */
    select?: UserMaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMatura
     */
    omit?: UserMaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMaturaInclude<ExtArgs> | null
    /**
     * Filter, which UserMatura to fetch.
     */
    where: UserMaturaWhereUniqueInput
  }

  /**
   * UserMatura findFirst
   */
  export type UserMaturaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMatura
     */
    select?: UserMaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMatura
     */
    omit?: UserMaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMaturaInclude<ExtArgs> | null
    /**
     * Filter, which UserMatura to fetch.
     */
    where?: UserMaturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMaturas to fetch.
     */
    orderBy?: UserMaturaOrderByWithRelationInput | UserMaturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserMaturas.
     */
    cursor?: UserMaturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMaturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMaturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserMaturas.
     */
    distinct?: UserMaturaScalarFieldEnum | UserMaturaScalarFieldEnum[]
  }

  /**
   * UserMatura findFirstOrThrow
   */
  export type UserMaturaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMatura
     */
    select?: UserMaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMatura
     */
    omit?: UserMaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMaturaInclude<ExtArgs> | null
    /**
     * Filter, which UserMatura to fetch.
     */
    where?: UserMaturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMaturas to fetch.
     */
    orderBy?: UserMaturaOrderByWithRelationInput | UserMaturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserMaturas.
     */
    cursor?: UserMaturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMaturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMaturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserMaturas.
     */
    distinct?: UserMaturaScalarFieldEnum | UserMaturaScalarFieldEnum[]
  }

  /**
   * UserMatura findMany
   */
  export type UserMaturaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMatura
     */
    select?: UserMaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMatura
     */
    omit?: UserMaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMaturaInclude<ExtArgs> | null
    /**
     * Filter, which UserMaturas to fetch.
     */
    where?: UserMaturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMaturas to fetch.
     */
    orderBy?: UserMaturaOrderByWithRelationInput | UserMaturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserMaturas.
     */
    cursor?: UserMaturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMaturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMaturas.
     */
    skip?: number
    distinct?: UserMaturaScalarFieldEnum | UserMaturaScalarFieldEnum[]
  }

  /**
   * UserMatura create
   */
  export type UserMaturaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMatura
     */
    select?: UserMaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMatura
     */
    omit?: UserMaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMaturaInclude<ExtArgs> | null
    /**
     * The data needed to create a UserMatura.
     */
    data: XOR<UserMaturaCreateInput, UserMaturaUncheckedCreateInput>
  }

  /**
   * UserMatura createMany
   */
  export type UserMaturaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserMaturas.
     */
    data: UserMaturaCreateManyInput | UserMaturaCreateManyInput[]
  }

  /**
   * UserMatura createManyAndReturn
   */
  export type UserMaturaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMatura
     */
    select?: UserMaturaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserMatura
     */
    omit?: UserMaturaOmit<ExtArgs> | null
    /**
     * The data used to create many UserMaturas.
     */
    data: UserMaturaCreateManyInput | UserMaturaCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMaturaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserMatura update
   */
  export type UserMaturaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMatura
     */
    select?: UserMaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMatura
     */
    omit?: UserMaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMaturaInclude<ExtArgs> | null
    /**
     * The data needed to update a UserMatura.
     */
    data: XOR<UserMaturaUpdateInput, UserMaturaUncheckedUpdateInput>
    /**
     * Choose, which UserMatura to update.
     */
    where: UserMaturaWhereUniqueInput
  }

  /**
   * UserMatura updateMany
   */
  export type UserMaturaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserMaturas.
     */
    data: XOR<UserMaturaUpdateManyMutationInput, UserMaturaUncheckedUpdateManyInput>
    /**
     * Filter which UserMaturas to update
     */
    where?: UserMaturaWhereInput
    /**
     * Limit how many UserMaturas to update.
     */
    limit?: number
  }

  /**
   * UserMatura updateManyAndReturn
   */
  export type UserMaturaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMatura
     */
    select?: UserMaturaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserMatura
     */
    omit?: UserMaturaOmit<ExtArgs> | null
    /**
     * The data used to update UserMaturas.
     */
    data: XOR<UserMaturaUpdateManyMutationInput, UserMaturaUncheckedUpdateManyInput>
    /**
     * Filter which UserMaturas to update
     */
    where?: UserMaturaWhereInput
    /**
     * Limit how many UserMaturas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMaturaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserMatura upsert
   */
  export type UserMaturaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMatura
     */
    select?: UserMaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMatura
     */
    omit?: UserMaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMaturaInclude<ExtArgs> | null
    /**
     * The filter to search for the UserMatura to update in case it exists.
     */
    where: UserMaturaWhereUniqueInput
    /**
     * In case the UserMatura found by the `where` argument doesn't exist, create a new UserMatura with this data.
     */
    create: XOR<UserMaturaCreateInput, UserMaturaUncheckedCreateInput>
    /**
     * In case the UserMatura was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserMaturaUpdateInput, UserMaturaUncheckedUpdateInput>
  }

  /**
   * UserMatura delete
   */
  export type UserMaturaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMatura
     */
    select?: UserMaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMatura
     */
    omit?: UserMaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMaturaInclude<ExtArgs> | null
    /**
     * Filter which UserMatura to delete.
     */
    where: UserMaturaWhereUniqueInput
  }

  /**
   * UserMatura deleteMany
   */
  export type UserMaturaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserMaturas to delete
     */
    where?: UserMaturaWhereInput
    /**
     * Limit how many UserMaturas to delete.
     */
    limit?: number
  }

  /**
   * UserMatura without action
   */
  export type UserMaturaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMatura
     */
    select?: UserMaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMatura
     */
    omit?: UserMaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMaturaInclude<ExtArgs> | null
  }


  /**
   * Model Matura
   */

  export type AggregateMatura = {
    _count: MaturaCountAggregateOutputType | null
    _min: MaturaMinAggregateOutputType | null
    _max: MaturaMaxAggregateOutputType | null
  }

  export type MaturaMinAggregateOutputType = {
    id: string | null
  }

  export type MaturaMaxAggregateOutputType = {
    id: string | null
  }

  export type MaturaCountAggregateOutputType = {
    id: number
    sections: number
    _all: number
  }


  export type MaturaMinAggregateInputType = {
    id?: true
  }

  export type MaturaMaxAggregateInputType = {
    id?: true
  }

  export type MaturaCountAggregateInputType = {
    id?: true
    sections?: true
    _all?: true
  }

  export type MaturaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matura to aggregate.
     */
    where?: MaturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maturas to fetch.
     */
    orderBy?: MaturaOrderByWithRelationInput | MaturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Maturas
    **/
    _count?: true | MaturaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaturaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaturaMaxAggregateInputType
  }

  export type GetMaturaAggregateType<T extends MaturaAggregateArgs> = {
        [P in keyof T & keyof AggregateMatura]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatura[P]>
      : GetScalarType<T[P], AggregateMatura[P]>
  }




  export type MaturaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaturaWhereInput
    orderBy?: MaturaOrderByWithAggregationInput | MaturaOrderByWithAggregationInput[]
    by: MaturaScalarFieldEnum[] | MaturaScalarFieldEnum
    having?: MaturaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaturaCountAggregateInputType | true
    _min?: MaturaMinAggregateInputType
    _max?: MaturaMaxAggregateInputType
  }

  export type MaturaGroupByOutputType = {
    id: string
    sections: JsonValue
    _count: MaturaCountAggregateOutputType | null
    _min: MaturaMinAggregateOutputType | null
    _max: MaturaMaxAggregateOutputType | null
  }

  type GetMaturaGroupByPayload<T extends MaturaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaturaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaturaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaturaGroupByOutputType[P]>
            : GetScalarType<T[P], MaturaGroupByOutputType[P]>
        }
      >
    >


  export type MaturaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sections?: boolean
    userMaturas?: boolean | Matura$userMaturasArgs<ExtArgs>
    _count?: boolean | MaturaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matura"]>

  export type MaturaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sections?: boolean
  }, ExtArgs["result"]["matura"]>

  export type MaturaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sections?: boolean
  }, ExtArgs["result"]["matura"]>

  export type MaturaSelectScalar = {
    id?: boolean
    sections?: boolean
  }

  export type MaturaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sections", ExtArgs["result"]["matura"]>
  export type MaturaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userMaturas?: boolean | Matura$userMaturasArgs<ExtArgs>
    _count?: boolean | MaturaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MaturaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MaturaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MaturaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Matura"
    objects: {
      userMaturas: Prisma.$UserMaturaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sections: Prisma.JsonValue
    }, ExtArgs["result"]["matura"]>
    composites: {}
  }

  type MaturaGetPayload<S extends boolean | null | undefined | MaturaDefaultArgs> = $Result.GetResult<Prisma.$MaturaPayload, S>

  type MaturaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaturaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaturaCountAggregateInputType | true
    }

  export interface MaturaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Matura'], meta: { name: 'Matura' } }
    /**
     * Find zero or one Matura that matches the filter.
     * @param {MaturaFindUniqueArgs} args - Arguments to find a Matura
     * @example
     * // Get one Matura
     * const matura = await prisma.matura.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaturaFindUniqueArgs>(args: SelectSubset<T, MaturaFindUniqueArgs<ExtArgs>>): Prisma__MaturaClient<$Result.GetResult<Prisma.$MaturaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Matura that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaturaFindUniqueOrThrowArgs} args - Arguments to find a Matura
     * @example
     * // Get one Matura
     * const matura = await prisma.matura.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaturaFindUniqueOrThrowArgs>(args: SelectSubset<T, MaturaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaturaClient<$Result.GetResult<Prisma.$MaturaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Matura that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaturaFindFirstArgs} args - Arguments to find a Matura
     * @example
     * // Get one Matura
     * const matura = await prisma.matura.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaturaFindFirstArgs>(args?: SelectSubset<T, MaturaFindFirstArgs<ExtArgs>>): Prisma__MaturaClient<$Result.GetResult<Prisma.$MaturaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Matura that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaturaFindFirstOrThrowArgs} args - Arguments to find a Matura
     * @example
     * // Get one Matura
     * const matura = await prisma.matura.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaturaFindFirstOrThrowArgs>(args?: SelectSubset<T, MaturaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaturaClient<$Result.GetResult<Prisma.$MaturaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Maturas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaturaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Maturas
     * const maturas = await prisma.matura.findMany()
     * 
     * // Get first 10 Maturas
     * const maturas = await prisma.matura.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const maturaWithIdOnly = await prisma.matura.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaturaFindManyArgs>(args?: SelectSubset<T, MaturaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Matura.
     * @param {MaturaCreateArgs} args - Arguments to create a Matura.
     * @example
     * // Create one Matura
     * const Matura = await prisma.matura.create({
     *   data: {
     *     // ... data to create a Matura
     *   }
     * })
     * 
     */
    create<T extends MaturaCreateArgs>(args: SelectSubset<T, MaturaCreateArgs<ExtArgs>>): Prisma__MaturaClient<$Result.GetResult<Prisma.$MaturaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Maturas.
     * @param {MaturaCreateManyArgs} args - Arguments to create many Maturas.
     * @example
     * // Create many Maturas
     * const matura = await prisma.matura.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaturaCreateManyArgs>(args?: SelectSubset<T, MaturaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Maturas and returns the data saved in the database.
     * @param {MaturaCreateManyAndReturnArgs} args - Arguments to create many Maturas.
     * @example
     * // Create many Maturas
     * const matura = await prisma.matura.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Maturas and only return the `id`
     * const maturaWithIdOnly = await prisma.matura.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaturaCreateManyAndReturnArgs>(args?: SelectSubset<T, MaturaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaturaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Matura.
     * @param {MaturaDeleteArgs} args - Arguments to delete one Matura.
     * @example
     * // Delete one Matura
     * const Matura = await prisma.matura.delete({
     *   where: {
     *     // ... filter to delete one Matura
     *   }
     * })
     * 
     */
    delete<T extends MaturaDeleteArgs>(args: SelectSubset<T, MaturaDeleteArgs<ExtArgs>>): Prisma__MaturaClient<$Result.GetResult<Prisma.$MaturaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Matura.
     * @param {MaturaUpdateArgs} args - Arguments to update one Matura.
     * @example
     * // Update one Matura
     * const matura = await prisma.matura.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaturaUpdateArgs>(args: SelectSubset<T, MaturaUpdateArgs<ExtArgs>>): Prisma__MaturaClient<$Result.GetResult<Prisma.$MaturaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Maturas.
     * @param {MaturaDeleteManyArgs} args - Arguments to filter Maturas to delete.
     * @example
     * // Delete a few Maturas
     * const { count } = await prisma.matura.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaturaDeleteManyArgs>(args?: SelectSubset<T, MaturaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Maturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaturaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Maturas
     * const matura = await prisma.matura.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaturaUpdateManyArgs>(args: SelectSubset<T, MaturaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Maturas and returns the data updated in the database.
     * @param {MaturaUpdateManyAndReturnArgs} args - Arguments to update many Maturas.
     * @example
     * // Update many Maturas
     * const matura = await prisma.matura.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Maturas and only return the `id`
     * const maturaWithIdOnly = await prisma.matura.updateManyAndReturn({
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
    updateManyAndReturn<T extends MaturaUpdateManyAndReturnArgs>(args: SelectSubset<T, MaturaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaturaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Matura.
     * @param {MaturaUpsertArgs} args - Arguments to update or create a Matura.
     * @example
     * // Update or create a Matura
     * const matura = await prisma.matura.upsert({
     *   create: {
     *     // ... data to create a Matura
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Matura we want to update
     *   }
     * })
     */
    upsert<T extends MaturaUpsertArgs>(args: SelectSubset<T, MaturaUpsertArgs<ExtArgs>>): Prisma__MaturaClient<$Result.GetResult<Prisma.$MaturaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Maturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaturaCountArgs} args - Arguments to filter Maturas to count.
     * @example
     * // Count the number of Maturas
     * const count = await prisma.matura.count({
     *   where: {
     *     // ... the filter for the Maturas we want to count
     *   }
     * })
    **/
    count<T extends MaturaCountArgs>(
      args?: Subset<T, MaturaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaturaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Matura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaturaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaturaAggregateArgs>(args: Subset<T, MaturaAggregateArgs>): Prisma.PrismaPromise<GetMaturaAggregateType<T>>

    /**
     * Group by Matura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaturaGroupByArgs} args - Group by arguments.
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
      T extends MaturaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaturaGroupByArgs['orderBy'] }
        : { orderBy?: MaturaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MaturaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaturaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Matura model
   */
  readonly fields: MaturaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Matura.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaturaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userMaturas<T extends Matura$userMaturasArgs<ExtArgs> = {}>(args?: Subset<T, Matura$userMaturasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMaturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Matura model
   */
  interface MaturaFieldRefs {
    readonly id: FieldRef<"Matura", 'String'>
    readonly sections: FieldRef<"Matura", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Matura findUnique
   */
  export type MaturaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matura
     */
    select?: MaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matura
     */
    omit?: MaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaturaInclude<ExtArgs> | null
    /**
     * Filter, which Matura to fetch.
     */
    where: MaturaWhereUniqueInput
  }

  /**
   * Matura findUniqueOrThrow
   */
  export type MaturaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matura
     */
    select?: MaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matura
     */
    omit?: MaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaturaInclude<ExtArgs> | null
    /**
     * Filter, which Matura to fetch.
     */
    where: MaturaWhereUniqueInput
  }

  /**
   * Matura findFirst
   */
  export type MaturaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matura
     */
    select?: MaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matura
     */
    omit?: MaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaturaInclude<ExtArgs> | null
    /**
     * Filter, which Matura to fetch.
     */
    where?: MaturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maturas to fetch.
     */
    orderBy?: MaturaOrderByWithRelationInput | MaturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Maturas.
     */
    cursor?: MaturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Maturas.
     */
    distinct?: MaturaScalarFieldEnum | MaturaScalarFieldEnum[]
  }

  /**
   * Matura findFirstOrThrow
   */
  export type MaturaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matura
     */
    select?: MaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matura
     */
    omit?: MaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaturaInclude<ExtArgs> | null
    /**
     * Filter, which Matura to fetch.
     */
    where?: MaturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maturas to fetch.
     */
    orderBy?: MaturaOrderByWithRelationInput | MaturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Maturas.
     */
    cursor?: MaturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Maturas.
     */
    distinct?: MaturaScalarFieldEnum | MaturaScalarFieldEnum[]
  }

  /**
   * Matura findMany
   */
  export type MaturaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matura
     */
    select?: MaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matura
     */
    omit?: MaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaturaInclude<ExtArgs> | null
    /**
     * Filter, which Maturas to fetch.
     */
    where?: MaturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maturas to fetch.
     */
    orderBy?: MaturaOrderByWithRelationInput | MaturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Maturas.
     */
    cursor?: MaturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maturas.
     */
    skip?: number
    distinct?: MaturaScalarFieldEnum | MaturaScalarFieldEnum[]
  }

  /**
   * Matura create
   */
  export type MaturaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matura
     */
    select?: MaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matura
     */
    omit?: MaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaturaInclude<ExtArgs> | null
    /**
     * The data needed to create a Matura.
     */
    data: XOR<MaturaCreateInput, MaturaUncheckedCreateInput>
  }

  /**
   * Matura createMany
   */
  export type MaturaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Maturas.
     */
    data: MaturaCreateManyInput | MaturaCreateManyInput[]
  }

  /**
   * Matura createManyAndReturn
   */
  export type MaturaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matura
     */
    select?: MaturaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Matura
     */
    omit?: MaturaOmit<ExtArgs> | null
    /**
     * The data used to create many Maturas.
     */
    data: MaturaCreateManyInput | MaturaCreateManyInput[]
  }

  /**
   * Matura update
   */
  export type MaturaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matura
     */
    select?: MaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matura
     */
    omit?: MaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaturaInclude<ExtArgs> | null
    /**
     * The data needed to update a Matura.
     */
    data: XOR<MaturaUpdateInput, MaturaUncheckedUpdateInput>
    /**
     * Choose, which Matura to update.
     */
    where: MaturaWhereUniqueInput
  }

  /**
   * Matura updateMany
   */
  export type MaturaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Maturas.
     */
    data: XOR<MaturaUpdateManyMutationInput, MaturaUncheckedUpdateManyInput>
    /**
     * Filter which Maturas to update
     */
    where?: MaturaWhereInput
    /**
     * Limit how many Maturas to update.
     */
    limit?: number
  }

  /**
   * Matura updateManyAndReturn
   */
  export type MaturaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matura
     */
    select?: MaturaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Matura
     */
    omit?: MaturaOmit<ExtArgs> | null
    /**
     * The data used to update Maturas.
     */
    data: XOR<MaturaUpdateManyMutationInput, MaturaUncheckedUpdateManyInput>
    /**
     * Filter which Maturas to update
     */
    where?: MaturaWhereInput
    /**
     * Limit how many Maturas to update.
     */
    limit?: number
  }

  /**
   * Matura upsert
   */
  export type MaturaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matura
     */
    select?: MaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matura
     */
    omit?: MaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaturaInclude<ExtArgs> | null
    /**
     * The filter to search for the Matura to update in case it exists.
     */
    where: MaturaWhereUniqueInput
    /**
     * In case the Matura found by the `where` argument doesn't exist, create a new Matura with this data.
     */
    create: XOR<MaturaCreateInput, MaturaUncheckedCreateInput>
    /**
     * In case the Matura was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaturaUpdateInput, MaturaUncheckedUpdateInput>
  }

  /**
   * Matura delete
   */
  export type MaturaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matura
     */
    select?: MaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matura
     */
    omit?: MaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaturaInclude<ExtArgs> | null
    /**
     * Filter which Matura to delete.
     */
    where: MaturaWhereUniqueInput
  }

  /**
   * Matura deleteMany
   */
  export type MaturaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Maturas to delete
     */
    where?: MaturaWhereInput
    /**
     * Limit how many Maturas to delete.
     */
    limit?: number
  }

  /**
   * Matura.userMaturas
   */
  export type Matura$userMaturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMatura
     */
    select?: UserMaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMatura
     */
    omit?: UserMaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMaturaInclude<ExtArgs> | null
    where?: UserMaturaWhereInput
    orderBy?: UserMaturaOrderByWithRelationInput | UserMaturaOrderByWithRelationInput[]
    cursor?: UserMaturaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserMaturaScalarFieldEnum | UserMaturaScalarFieldEnum[]
  }

  /**
   * Matura without action
   */
  export type MaturaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matura
     */
    select?: MaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matura
     */
    omit?: MaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaturaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    clerkId: 'clerkId',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    createDate: 'createDate',
    updateDate: 'updateDate'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserMaturaScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    maturaId: 'maturaId',
    snapshot: 'snapshot',
    status: 'status',
    createdAt: 'createdAt',
    finishedAt: 'finishedAt'
  };

  export type UserMaturaScalarFieldEnum = (typeof UserMaturaScalarFieldEnum)[keyof typeof UserMaturaScalarFieldEnum]


  export const MaturaScalarFieldEnum: {
    id: 'id',
    sections: 'sections'
  };

  export type MaturaScalarFieldEnum = (typeof MaturaScalarFieldEnum)[keyof typeof MaturaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    clerkId?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    createDate?: DateTimeFilter<"User"> | Date | string
    updateDate?: DateTimeFilter<"User"> | Date | string
    userMaturas?: UserMaturaListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
    userMaturas?: UserMaturaOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    createDate?: DateTimeFilter<"User"> | Date | string
    updateDate?: DateTimeFilter<"User"> | Date | string
    userMaturas?: UserMaturaListRelationFilter
  }, "id" | "clerkId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    clerkId?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    createDate?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updateDate?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserMaturaWhereInput = {
    AND?: UserMaturaWhereInput | UserMaturaWhereInput[]
    OR?: UserMaturaWhereInput[]
    NOT?: UserMaturaWhereInput | UserMaturaWhereInput[]
    id?: StringFilter<"UserMatura"> | string
    userId?: StringFilter<"UserMatura"> | string
    maturaId?: StringFilter<"UserMatura"> | string
    snapshot?: JsonFilter<"UserMatura">
    status?: StringFilter<"UserMatura"> | string
    createdAt?: DateTimeFilter<"UserMatura"> | Date | string
    finishedAt?: DateTimeNullableFilter<"UserMatura"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    matura?: XOR<MaturaScalarRelationFilter, MaturaWhereInput>
  }

  export type UserMaturaOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    maturaId?: SortOrder
    snapshot?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    finishedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    matura?: MaturaOrderByWithRelationInput
  }

  export type UserMaturaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserMaturaWhereInput | UserMaturaWhereInput[]
    OR?: UserMaturaWhereInput[]
    NOT?: UserMaturaWhereInput | UserMaturaWhereInput[]
    userId?: StringFilter<"UserMatura"> | string
    maturaId?: StringFilter<"UserMatura"> | string
    snapshot?: JsonFilter<"UserMatura">
    status?: StringFilter<"UserMatura"> | string
    createdAt?: DateTimeFilter<"UserMatura"> | Date | string
    finishedAt?: DateTimeNullableFilter<"UserMatura"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    matura?: XOR<MaturaScalarRelationFilter, MaturaWhereInput>
  }, "id">

  export type UserMaturaOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    maturaId?: SortOrder
    snapshot?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    finishedAt?: SortOrderInput | SortOrder
    _count?: UserMaturaCountOrderByAggregateInput
    _max?: UserMaturaMaxOrderByAggregateInput
    _min?: UserMaturaMinOrderByAggregateInput
  }

  export type UserMaturaScalarWhereWithAggregatesInput = {
    AND?: UserMaturaScalarWhereWithAggregatesInput | UserMaturaScalarWhereWithAggregatesInput[]
    OR?: UserMaturaScalarWhereWithAggregatesInput[]
    NOT?: UserMaturaScalarWhereWithAggregatesInput | UserMaturaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserMatura"> | string
    userId?: StringWithAggregatesFilter<"UserMatura"> | string
    maturaId?: StringWithAggregatesFilter<"UserMatura"> | string
    snapshot?: JsonWithAggregatesFilter<"UserMatura">
    status?: StringWithAggregatesFilter<"UserMatura"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserMatura"> | Date | string
    finishedAt?: DateTimeNullableWithAggregatesFilter<"UserMatura"> | Date | string | null
  }

  export type MaturaWhereInput = {
    AND?: MaturaWhereInput | MaturaWhereInput[]
    OR?: MaturaWhereInput[]
    NOT?: MaturaWhereInput | MaturaWhereInput[]
    id?: StringFilter<"Matura"> | string
    sections?: JsonFilter<"Matura">
    userMaturas?: UserMaturaListRelationFilter
  }

  export type MaturaOrderByWithRelationInput = {
    id?: SortOrder
    sections?: SortOrder
    userMaturas?: UserMaturaOrderByRelationAggregateInput
  }

  export type MaturaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MaturaWhereInput | MaturaWhereInput[]
    OR?: MaturaWhereInput[]
    NOT?: MaturaWhereInput | MaturaWhereInput[]
    sections?: JsonFilter<"Matura">
    userMaturas?: UserMaturaListRelationFilter
  }, "id">

  export type MaturaOrderByWithAggregationInput = {
    id?: SortOrder
    sections?: SortOrder
    _count?: MaturaCountOrderByAggregateInput
    _max?: MaturaMaxOrderByAggregateInput
    _min?: MaturaMinOrderByAggregateInput
  }

  export type MaturaScalarWhereWithAggregatesInput = {
    AND?: MaturaScalarWhereWithAggregatesInput | MaturaScalarWhereWithAggregatesInput[]
    OR?: MaturaScalarWhereWithAggregatesInput[]
    NOT?: MaturaScalarWhereWithAggregatesInput | MaturaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Matura"> | string
    sections?: JsonWithAggregatesFilter<"Matura">
  }

  export type UserCreateInput = {
    id?: string
    clerkId: string
    firstName?: string | null
    lastName?: string | null
    email: string
    createDate?: Date | string
    updateDate?: Date | string
    userMaturas?: UserMaturaCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    clerkId: string
    firstName?: string | null
    lastName?: string | null
    email: string
    createDate?: Date | string
    updateDate?: Date | string
    userMaturas?: UserMaturaUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userMaturas?: UserMaturaUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userMaturas?: UserMaturaUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    clerkId: string
    firstName?: string | null
    lastName?: string | null
    email: string
    createDate?: Date | string
    updateDate?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMaturaCreateInput = {
    id?: string
    snapshot: JsonNullValueInput | InputJsonValue
    status?: string
    createdAt?: Date | string
    finishedAt?: Date | string | null
    user: UserCreateNestedOneWithoutUserMaturasInput
    matura: MaturaCreateNestedOneWithoutUserMaturasInput
  }

  export type UserMaturaUncheckedCreateInput = {
    id?: string
    userId: string
    maturaId: string
    snapshot: JsonNullValueInput | InputJsonValue
    status?: string
    createdAt?: Date | string
    finishedAt?: Date | string | null
  }

  export type UserMaturaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    snapshot?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutUserMaturasNestedInput
    matura?: MaturaUpdateOneRequiredWithoutUserMaturasNestedInput
  }

  export type UserMaturaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    maturaId?: StringFieldUpdateOperationsInput | string
    snapshot?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserMaturaCreateManyInput = {
    id?: string
    userId: string
    maturaId: string
    snapshot: JsonNullValueInput | InputJsonValue
    status?: string
    createdAt?: Date | string
    finishedAt?: Date | string | null
  }

  export type UserMaturaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    snapshot?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserMaturaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    maturaId?: StringFieldUpdateOperationsInput | string
    snapshot?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MaturaCreateInput = {
    id?: string
    sections: JsonNullValueInput | InputJsonValue
    userMaturas?: UserMaturaCreateNestedManyWithoutMaturaInput
  }

  export type MaturaUncheckedCreateInput = {
    id?: string
    sections: JsonNullValueInput | InputJsonValue
    userMaturas?: UserMaturaUncheckedCreateNestedManyWithoutMaturaInput
  }

  export type MaturaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sections?: JsonNullValueInput | InputJsonValue
    userMaturas?: UserMaturaUpdateManyWithoutMaturaNestedInput
  }

  export type MaturaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sections?: JsonNullValueInput | InputJsonValue
    userMaturas?: UserMaturaUncheckedUpdateManyWithoutMaturaNestedInput
  }

  export type MaturaCreateManyInput = {
    id?: string
    sections: JsonNullValueInput | InputJsonValue
  }

  export type MaturaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sections?: JsonNullValueInput | InputJsonValue
  }

  export type MaturaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sections?: JsonNullValueInput | InputJsonValue
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserMaturaListRelationFilter = {
    every?: UserMaturaWhereInput
    some?: UserMaturaWhereInput
    none?: UserMaturaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserMaturaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MaturaScalarRelationFilter = {
    is?: MaturaWhereInput
    isNot?: MaturaWhereInput
  }

  export type UserMaturaCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    maturaId?: SortOrder
    snapshot?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    finishedAt?: SortOrder
  }

  export type UserMaturaMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    maturaId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    finishedAt?: SortOrder
  }

  export type UserMaturaMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    maturaId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    finishedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
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

  export type MaturaCountOrderByAggregateInput = {
    id?: SortOrder
    sections?: SortOrder
  }

  export type MaturaMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MaturaMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaturaCreateNestedManyWithoutUserInput = {
    create?: XOR<UserMaturaCreateWithoutUserInput, UserMaturaUncheckedCreateWithoutUserInput> | UserMaturaCreateWithoutUserInput[] | UserMaturaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMaturaCreateOrConnectWithoutUserInput | UserMaturaCreateOrConnectWithoutUserInput[]
    createMany?: UserMaturaCreateManyUserInputEnvelope
    connect?: UserMaturaWhereUniqueInput | UserMaturaWhereUniqueInput[]
  }

  export type UserMaturaUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserMaturaCreateWithoutUserInput, UserMaturaUncheckedCreateWithoutUserInput> | UserMaturaCreateWithoutUserInput[] | UserMaturaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMaturaCreateOrConnectWithoutUserInput | UserMaturaCreateOrConnectWithoutUserInput[]
    createMany?: UserMaturaCreateManyUserInputEnvelope
    connect?: UserMaturaWhereUniqueInput | UserMaturaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserMaturaUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserMaturaCreateWithoutUserInput, UserMaturaUncheckedCreateWithoutUserInput> | UserMaturaCreateWithoutUserInput[] | UserMaturaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMaturaCreateOrConnectWithoutUserInput | UserMaturaCreateOrConnectWithoutUserInput[]
    upsert?: UserMaturaUpsertWithWhereUniqueWithoutUserInput | UserMaturaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserMaturaCreateManyUserInputEnvelope
    set?: UserMaturaWhereUniqueInput | UserMaturaWhereUniqueInput[]
    disconnect?: UserMaturaWhereUniqueInput | UserMaturaWhereUniqueInput[]
    delete?: UserMaturaWhereUniqueInput | UserMaturaWhereUniqueInput[]
    connect?: UserMaturaWhereUniqueInput | UserMaturaWhereUniqueInput[]
    update?: UserMaturaUpdateWithWhereUniqueWithoutUserInput | UserMaturaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserMaturaUpdateManyWithWhereWithoutUserInput | UserMaturaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserMaturaScalarWhereInput | UserMaturaScalarWhereInput[]
  }

  export type UserMaturaUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserMaturaCreateWithoutUserInput, UserMaturaUncheckedCreateWithoutUserInput> | UserMaturaCreateWithoutUserInput[] | UserMaturaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMaturaCreateOrConnectWithoutUserInput | UserMaturaCreateOrConnectWithoutUserInput[]
    upsert?: UserMaturaUpsertWithWhereUniqueWithoutUserInput | UserMaturaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserMaturaCreateManyUserInputEnvelope
    set?: UserMaturaWhereUniqueInput | UserMaturaWhereUniqueInput[]
    disconnect?: UserMaturaWhereUniqueInput | UserMaturaWhereUniqueInput[]
    delete?: UserMaturaWhereUniqueInput | UserMaturaWhereUniqueInput[]
    connect?: UserMaturaWhereUniqueInput | UserMaturaWhereUniqueInput[]
    update?: UserMaturaUpdateWithWhereUniqueWithoutUserInput | UserMaturaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserMaturaUpdateManyWithWhereWithoutUserInput | UserMaturaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserMaturaScalarWhereInput | UserMaturaScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserMaturasInput = {
    create?: XOR<UserCreateWithoutUserMaturasInput, UserUncheckedCreateWithoutUserMaturasInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserMaturasInput
    connect?: UserWhereUniqueInput
  }

  export type MaturaCreateNestedOneWithoutUserMaturasInput = {
    create?: XOR<MaturaCreateWithoutUserMaturasInput, MaturaUncheckedCreateWithoutUserMaturasInput>
    connectOrCreate?: MaturaCreateOrConnectWithoutUserMaturasInput
    connect?: MaturaWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutUserMaturasNestedInput = {
    create?: XOR<UserCreateWithoutUserMaturasInput, UserUncheckedCreateWithoutUserMaturasInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserMaturasInput
    upsert?: UserUpsertWithoutUserMaturasInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserMaturasInput, UserUpdateWithoutUserMaturasInput>, UserUncheckedUpdateWithoutUserMaturasInput>
  }

  export type MaturaUpdateOneRequiredWithoutUserMaturasNestedInput = {
    create?: XOR<MaturaCreateWithoutUserMaturasInput, MaturaUncheckedCreateWithoutUserMaturasInput>
    connectOrCreate?: MaturaCreateOrConnectWithoutUserMaturasInput
    upsert?: MaturaUpsertWithoutUserMaturasInput
    connect?: MaturaWhereUniqueInput
    update?: XOR<XOR<MaturaUpdateToOneWithWhereWithoutUserMaturasInput, MaturaUpdateWithoutUserMaturasInput>, MaturaUncheckedUpdateWithoutUserMaturasInput>
  }

  export type UserMaturaCreateNestedManyWithoutMaturaInput = {
    create?: XOR<UserMaturaCreateWithoutMaturaInput, UserMaturaUncheckedCreateWithoutMaturaInput> | UserMaturaCreateWithoutMaturaInput[] | UserMaturaUncheckedCreateWithoutMaturaInput[]
    connectOrCreate?: UserMaturaCreateOrConnectWithoutMaturaInput | UserMaturaCreateOrConnectWithoutMaturaInput[]
    createMany?: UserMaturaCreateManyMaturaInputEnvelope
    connect?: UserMaturaWhereUniqueInput | UserMaturaWhereUniqueInput[]
  }

  export type UserMaturaUncheckedCreateNestedManyWithoutMaturaInput = {
    create?: XOR<UserMaturaCreateWithoutMaturaInput, UserMaturaUncheckedCreateWithoutMaturaInput> | UserMaturaCreateWithoutMaturaInput[] | UserMaturaUncheckedCreateWithoutMaturaInput[]
    connectOrCreate?: UserMaturaCreateOrConnectWithoutMaturaInput | UserMaturaCreateOrConnectWithoutMaturaInput[]
    createMany?: UserMaturaCreateManyMaturaInputEnvelope
    connect?: UserMaturaWhereUniqueInput | UserMaturaWhereUniqueInput[]
  }

  export type UserMaturaUpdateManyWithoutMaturaNestedInput = {
    create?: XOR<UserMaturaCreateWithoutMaturaInput, UserMaturaUncheckedCreateWithoutMaturaInput> | UserMaturaCreateWithoutMaturaInput[] | UserMaturaUncheckedCreateWithoutMaturaInput[]
    connectOrCreate?: UserMaturaCreateOrConnectWithoutMaturaInput | UserMaturaCreateOrConnectWithoutMaturaInput[]
    upsert?: UserMaturaUpsertWithWhereUniqueWithoutMaturaInput | UserMaturaUpsertWithWhereUniqueWithoutMaturaInput[]
    createMany?: UserMaturaCreateManyMaturaInputEnvelope
    set?: UserMaturaWhereUniqueInput | UserMaturaWhereUniqueInput[]
    disconnect?: UserMaturaWhereUniqueInput | UserMaturaWhereUniqueInput[]
    delete?: UserMaturaWhereUniqueInput | UserMaturaWhereUniqueInput[]
    connect?: UserMaturaWhereUniqueInput | UserMaturaWhereUniqueInput[]
    update?: UserMaturaUpdateWithWhereUniqueWithoutMaturaInput | UserMaturaUpdateWithWhereUniqueWithoutMaturaInput[]
    updateMany?: UserMaturaUpdateManyWithWhereWithoutMaturaInput | UserMaturaUpdateManyWithWhereWithoutMaturaInput[]
    deleteMany?: UserMaturaScalarWhereInput | UserMaturaScalarWhereInput[]
  }

  export type UserMaturaUncheckedUpdateManyWithoutMaturaNestedInput = {
    create?: XOR<UserMaturaCreateWithoutMaturaInput, UserMaturaUncheckedCreateWithoutMaturaInput> | UserMaturaCreateWithoutMaturaInput[] | UserMaturaUncheckedCreateWithoutMaturaInput[]
    connectOrCreate?: UserMaturaCreateOrConnectWithoutMaturaInput | UserMaturaCreateOrConnectWithoutMaturaInput[]
    upsert?: UserMaturaUpsertWithWhereUniqueWithoutMaturaInput | UserMaturaUpsertWithWhereUniqueWithoutMaturaInput[]
    createMany?: UserMaturaCreateManyMaturaInputEnvelope
    set?: UserMaturaWhereUniqueInput | UserMaturaWhereUniqueInput[]
    disconnect?: UserMaturaWhereUniqueInput | UserMaturaWhereUniqueInput[]
    delete?: UserMaturaWhereUniqueInput | UserMaturaWhereUniqueInput[]
    connect?: UserMaturaWhereUniqueInput | UserMaturaWhereUniqueInput[]
    update?: UserMaturaUpdateWithWhereUniqueWithoutMaturaInput | UserMaturaUpdateWithWhereUniqueWithoutMaturaInput[]
    updateMany?: UserMaturaUpdateManyWithWhereWithoutMaturaInput | UserMaturaUpdateManyWithWhereWithoutMaturaInput[]
    deleteMany?: UserMaturaScalarWhereInput | UserMaturaScalarWhereInput[]
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type UserMaturaCreateWithoutUserInput = {
    id?: string
    snapshot: JsonNullValueInput | InputJsonValue
    status?: string
    createdAt?: Date | string
    finishedAt?: Date | string | null
    matura: MaturaCreateNestedOneWithoutUserMaturasInput
  }

  export type UserMaturaUncheckedCreateWithoutUserInput = {
    id?: string
    maturaId: string
    snapshot: JsonNullValueInput | InputJsonValue
    status?: string
    createdAt?: Date | string
    finishedAt?: Date | string | null
  }

  export type UserMaturaCreateOrConnectWithoutUserInput = {
    where: UserMaturaWhereUniqueInput
    create: XOR<UserMaturaCreateWithoutUserInput, UserMaturaUncheckedCreateWithoutUserInput>
  }

  export type UserMaturaCreateManyUserInputEnvelope = {
    data: UserMaturaCreateManyUserInput | UserMaturaCreateManyUserInput[]
  }

  export type UserMaturaUpsertWithWhereUniqueWithoutUserInput = {
    where: UserMaturaWhereUniqueInput
    update: XOR<UserMaturaUpdateWithoutUserInput, UserMaturaUncheckedUpdateWithoutUserInput>
    create: XOR<UserMaturaCreateWithoutUserInput, UserMaturaUncheckedCreateWithoutUserInput>
  }

  export type UserMaturaUpdateWithWhereUniqueWithoutUserInput = {
    where: UserMaturaWhereUniqueInput
    data: XOR<UserMaturaUpdateWithoutUserInput, UserMaturaUncheckedUpdateWithoutUserInput>
  }

  export type UserMaturaUpdateManyWithWhereWithoutUserInput = {
    where: UserMaturaScalarWhereInput
    data: XOR<UserMaturaUpdateManyMutationInput, UserMaturaUncheckedUpdateManyWithoutUserInput>
  }

  export type UserMaturaScalarWhereInput = {
    AND?: UserMaturaScalarWhereInput | UserMaturaScalarWhereInput[]
    OR?: UserMaturaScalarWhereInput[]
    NOT?: UserMaturaScalarWhereInput | UserMaturaScalarWhereInput[]
    id?: StringFilter<"UserMatura"> | string
    userId?: StringFilter<"UserMatura"> | string
    maturaId?: StringFilter<"UserMatura"> | string
    snapshot?: JsonFilter<"UserMatura">
    status?: StringFilter<"UserMatura"> | string
    createdAt?: DateTimeFilter<"UserMatura"> | Date | string
    finishedAt?: DateTimeNullableFilter<"UserMatura"> | Date | string | null
  }

  export type UserCreateWithoutUserMaturasInput = {
    id?: string
    clerkId: string
    firstName?: string | null
    lastName?: string | null
    email: string
    createDate?: Date | string
    updateDate?: Date | string
  }

  export type UserUncheckedCreateWithoutUserMaturasInput = {
    id?: string
    clerkId: string
    firstName?: string | null
    lastName?: string | null
    email: string
    createDate?: Date | string
    updateDate?: Date | string
  }

  export type UserCreateOrConnectWithoutUserMaturasInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserMaturasInput, UserUncheckedCreateWithoutUserMaturasInput>
  }

  export type MaturaCreateWithoutUserMaturasInput = {
    id?: string
    sections: JsonNullValueInput | InputJsonValue
  }

  export type MaturaUncheckedCreateWithoutUserMaturasInput = {
    id?: string
    sections: JsonNullValueInput | InputJsonValue
  }

  export type MaturaCreateOrConnectWithoutUserMaturasInput = {
    where: MaturaWhereUniqueInput
    create: XOR<MaturaCreateWithoutUserMaturasInput, MaturaUncheckedCreateWithoutUserMaturasInput>
  }

  export type UserUpsertWithoutUserMaturasInput = {
    update: XOR<UserUpdateWithoutUserMaturasInput, UserUncheckedUpdateWithoutUserMaturasInput>
    create: XOR<UserCreateWithoutUserMaturasInput, UserUncheckedCreateWithoutUserMaturasInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserMaturasInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserMaturasInput, UserUncheckedUpdateWithoutUserMaturasInput>
  }

  export type UserUpdateWithoutUserMaturasInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutUserMaturasInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaturaUpsertWithoutUserMaturasInput = {
    update: XOR<MaturaUpdateWithoutUserMaturasInput, MaturaUncheckedUpdateWithoutUserMaturasInput>
    create: XOR<MaturaCreateWithoutUserMaturasInput, MaturaUncheckedCreateWithoutUserMaturasInput>
    where?: MaturaWhereInput
  }

  export type MaturaUpdateToOneWithWhereWithoutUserMaturasInput = {
    where?: MaturaWhereInput
    data: XOR<MaturaUpdateWithoutUserMaturasInput, MaturaUncheckedUpdateWithoutUserMaturasInput>
  }

  export type MaturaUpdateWithoutUserMaturasInput = {
    id?: StringFieldUpdateOperationsInput | string
    sections?: JsonNullValueInput | InputJsonValue
  }

  export type MaturaUncheckedUpdateWithoutUserMaturasInput = {
    id?: StringFieldUpdateOperationsInput | string
    sections?: JsonNullValueInput | InputJsonValue
  }

  export type UserMaturaCreateWithoutMaturaInput = {
    id?: string
    snapshot: JsonNullValueInput | InputJsonValue
    status?: string
    createdAt?: Date | string
    finishedAt?: Date | string | null
    user: UserCreateNestedOneWithoutUserMaturasInput
  }

  export type UserMaturaUncheckedCreateWithoutMaturaInput = {
    id?: string
    userId: string
    snapshot: JsonNullValueInput | InputJsonValue
    status?: string
    createdAt?: Date | string
    finishedAt?: Date | string | null
  }

  export type UserMaturaCreateOrConnectWithoutMaturaInput = {
    where: UserMaturaWhereUniqueInput
    create: XOR<UserMaturaCreateWithoutMaturaInput, UserMaturaUncheckedCreateWithoutMaturaInput>
  }

  export type UserMaturaCreateManyMaturaInputEnvelope = {
    data: UserMaturaCreateManyMaturaInput | UserMaturaCreateManyMaturaInput[]
  }

  export type UserMaturaUpsertWithWhereUniqueWithoutMaturaInput = {
    where: UserMaturaWhereUniqueInput
    update: XOR<UserMaturaUpdateWithoutMaturaInput, UserMaturaUncheckedUpdateWithoutMaturaInput>
    create: XOR<UserMaturaCreateWithoutMaturaInput, UserMaturaUncheckedCreateWithoutMaturaInput>
  }

  export type UserMaturaUpdateWithWhereUniqueWithoutMaturaInput = {
    where: UserMaturaWhereUniqueInput
    data: XOR<UserMaturaUpdateWithoutMaturaInput, UserMaturaUncheckedUpdateWithoutMaturaInput>
  }

  export type UserMaturaUpdateManyWithWhereWithoutMaturaInput = {
    where: UserMaturaScalarWhereInput
    data: XOR<UserMaturaUpdateManyMutationInput, UserMaturaUncheckedUpdateManyWithoutMaturaInput>
  }

  export type UserMaturaCreateManyUserInput = {
    id?: string
    maturaId: string
    snapshot: JsonNullValueInput | InputJsonValue
    status?: string
    createdAt?: Date | string
    finishedAt?: Date | string | null
  }

  export type UserMaturaUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    snapshot?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    matura?: MaturaUpdateOneRequiredWithoutUserMaturasNestedInput
  }

  export type UserMaturaUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    maturaId?: StringFieldUpdateOperationsInput | string
    snapshot?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserMaturaUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    maturaId?: StringFieldUpdateOperationsInput | string
    snapshot?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserMaturaCreateManyMaturaInput = {
    id?: string
    userId: string
    snapshot: JsonNullValueInput | InputJsonValue
    status?: string
    createdAt?: Date | string
    finishedAt?: Date | string | null
  }

  export type UserMaturaUpdateWithoutMaturaInput = {
    id?: StringFieldUpdateOperationsInput | string
    snapshot?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutUserMaturasNestedInput
  }

  export type UserMaturaUncheckedUpdateWithoutMaturaInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    snapshot?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserMaturaUncheckedUpdateManyWithoutMaturaInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    snapshot?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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