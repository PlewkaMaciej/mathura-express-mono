
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
 * Model Video
 * 
 */
export type Video = $Result.DefaultSelection<Prisma.$VideoPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model Answer
 * 
 */
export type Answer = $Result.DefaultSelection<Prisma.$AnswerPayload>
/**
 * Model Alltasks
 * 
 */
export type Alltasks = $Result.DefaultSelection<Prisma.$AlltasksPayload>
/**
 * Model Section
 * 
 */
export type Section = $Result.DefaultSelection<Prisma.$SectionPayload>
/**
 * Model SubSection
 * 
 */
export type SubSection = $Result.DefaultSelection<Prisma.$SubSectionPayload>
/**
 * Model OpenTasks
 * 
 */
export type OpenTasks = $Result.DefaultSelection<Prisma.$OpenTasksPayload>
/**
 * Model ClosedTasks
 * 
 */
export type ClosedTasks = $Result.DefaultSelection<Prisma.$ClosedTasksPayload>
/**
 * Model Answers
 * 
 */
export type Answers = $Result.DefaultSelection<Prisma.$AnswersPayload>

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
   * `prisma.video`: Exposes CRUD operations for the **Video** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Videos
    * const videos = await prisma.video.findMany()
    * ```
    */
  get video(): Prisma.VideoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.answer`: Exposes CRUD operations for the **Answer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Answers
    * const answers = await prisma.answer.findMany()
    * ```
    */
  get answer(): Prisma.AnswerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alltasks`: Exposes CRUD operations for the **Alltasks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alltasks
    * const alltasks = await prisma.alltasks.findMany()
    * ```
    */
  get alltasks(): Prisma.AlltasksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.section`: Exposes CRUD operations for the **Section** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sections
    * const sections = await prisma.section.findMany()
    * ```
    */
  get section(): Prisma.SectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subSection`: Exposes CRUD operations for the **SubSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubSections
    * const subSections = await prisma.subSection.findMany()
    * ```
    */
  get subSection(): Prisma.SubSectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.openTasks`: Exposes CRUD operations for the **OpenTasks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OpenTasks
    * const openTasks = await prisma.openTasks.findMany()
    * ```
    */
  get openTasks(): Prisma.OpenTasksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.closedTasks`: Exposes CRUD operations for the **ClosedTasks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClosedTasks
    * const closedTasks = await prisma.closedTasks.findMany()
    * ```
    */
  get closedTasks(): Prisma.ClosedTasksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.answers`: Exposes CRUD operations for the **Answers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Answers
    * const answers = await prisma.answers.findMany()
    * ```
    */
  get answers(): Prisma.AnswersDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Video: 'Video',
    Question: 'Question',
    Answer: 'Answer',
    Alltasks: 'Alltasks',
    Section: 'Section',
    SubSection: 'SubSection',
    OpenTasks: 'OpenTasks',
    ClosedTasks: 'ClosedTasks',
    Answers: 'Answers'
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
      modelProps: "user" | "video" | "question" | "answer" | "alltasks" | "section" | "subSection" | "openTasks" | "closedTasks" | "answers"
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
      Video: {
        payload: Prisma.$VideoPayload<ExtArgs>
        fields: Prisma.VideoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findFirst: {
            args: Prisma.VideoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findMany: {
            args: Prisma.VideoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          create: {
            args: Prisma.VideoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          createMany: {
            args: Prisma.VideoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VideoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          delete: {
            args: Prisma.VideoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          update: {
            args: Prisma.VideoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          deleteMany: {
            args: Prisma.VideoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VideoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          upsert: {
            args: Prisma.VideoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          aggregate: {
            args: Prisma.VideoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideo>
          }
          groupBy: {
            args: Prisma.VideoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoCountArgs<ExtArgs>
            result: $Utils.Optional<VideoCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      Answer: {
        payload: Prisma.$AnswerPayload<ExtArgs>
        fields: Prisma.AnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findFirst: {
            args: Prisma.AnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findMany: {
            args: Prisma.AnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          create: {
            args: Prisma.AnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          createMany: {
            args: Prisma.AnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          delete: {
            args: Prisma.AnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          update: {
            args: Prisma.AnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          deleteMany: {
            args: Prisma.AnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnswerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          upsert: {
            args: Prisma.AnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          aggregate: {
            args: Prisma.AnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnswer>
          }
          groupBy: {
            args: Prisma.AnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnswerCountArgs<ExtArgs>
            result: $Utils.Optional<AnswerCountAggregateOutputType> | number
          }
        }
      }
      Alltasks: {
        payload: Prisma.$AlltasksPayload<ExtArgs>
        fields: Prisma.AlltasksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlltasksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlltasksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlltasksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlltasksPayload>
          }
          findFirst: {
            args: Prisma.AlltasksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlltasksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlltasksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlltasksPayload>
          }
          findMany: {
            args: Prisma.AlltasksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlltasksPayload>[]
          }
          create: {
            args: Prisma.AlltasksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlltasksPayload>
          }
          createMany: {
            args: Prisma.AlltasksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlltasksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlltasksPayload>[]
          }
          delete: {
            args: Prisma.AlltasksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlltasksPayload>
          }
          update: {
            args: Prisma.AlltasksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlltasksPayload>
          }
          deleteMany: {
            args: Prisma.AlltasksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlltasksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlltasksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlltasksPayload>[]
          }
          upsert: {
            args: Prisma.AlltasksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlltasksPayload>
          }
          aggregate: {
            args: Prisma.AlltasksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlltasks>
          }
          groupBy: {
            args: Prisma.AlltasksGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlltasksGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlltasksCountArgs<ExtArgs>
            result: $Utils.Optional<AlltasksCountAggregateOutputType> | number
          }
        }
      }
      Section: {
        payload: Prisma.$SectionPayload<ExtArgs>
        fields: Prisma.SectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          findFirst: {
            args: Prisma.SectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          findMany: {
            args: Prisma.SectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          create: {
            args: Prisma.SectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          createMany: {
            args: Prisma.SectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          delete: {
            args: Prisma.SectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          update: {
            args: Prisma.SectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          deleteMany: {
            args: Prisma.SectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          upsert: {
            args: Prisma.SectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          aggregate: {
            args: Prisma.SectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSection>
          }
          groupBy: {
            args: Prisma.SectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SectionCountArgs<ExtArgs>
            result: $Utils.Optional<SectionCountAggregateOutputType> | number
          }
        }
      }
      SubSection: {
        payload: Prisma.$SubSectionPayload<ExtArgs>
        fields: Prisma.SubSectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubSectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubSectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubSectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubSectionPayload>
          }
          findFirst: {
            args: Prisma.SubSectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubSectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubSectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubSectionPayload>
          }
          findMany: {
            args: Prisma.SubSectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubSectionPayload>[]
          }
          create: {
            args: Prisma.SubSectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubSectionPayload>
          }
          createMany: {
            args: Prisma.SubSectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubSectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubSectionPayload>[]
          }
          delete: {
            args: Prisma.SubSectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubSectionPayload>
          }
          update: {
            args: Prisma.SubSectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubSectionPayload>
          }
          deleteMany: {
            args: Prisma.SubSectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubSectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubSectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubSectionPayload>[]
          }
          upsert: {
            args: Prisma.SubSectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubSectionPayload>
          }
          aggregate: {
            args: Prisma.SubSectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubSection>
          }
          groupBy: {
            args: Prisma.SubSectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubSectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubSectionCountArgs<ExtArgs>
            result: $Utils.Optional<SubSectionCountAggregateOutputType> | number
          }
        }
      }
      OpenTasks: {
        payload: Prisma.$OpenTasksPayload<ExtArgs>
        fields: Prisma.OpenTasksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OpenTasksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpenTasksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OpenTasksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpenTasksPayload>
          }
          findFirst: {
            args: Prisma.OpenTasksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpenTasksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OpenTasksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpenTasksPayload>
          }
          findMany: {
            args: Prisma.OpenTasksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpenTasksPayload>[]
          }
          create: {
            args: Prisma.OpenTasksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpenTasksPayload>
          }
          createMany: {
            args: Prisma.OpenTasksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OpenTasksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpenTasksPayload>[]
          }
          delete: {
            args: Prisma.OpenTasksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpenTasksPayload>
          }
          update: {
            args: Prisma.OpenTasksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpenTasksPayload>
          }
          deleteMany: {
            args: Prisma.OpenTasksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OpenTasksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OpenTasksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpenTasksPayload>[]
          }
          upsert: {
            args: Prisma.OpenTasksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpenTasksPayload>
          }
          aggregate: {
            args: Prisma.OpenTasksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOpenTasks>
          }
          groupBy: {
            args: Prisma.OpenTasksGroupByArgs<ExtArgs>
            result: $Utils.Optional<OpenTasksGroupByOutputType>[]
          }
          count: {
            args: Prisma.OpenTasksCountArgs<ExtArgs>
            result: $Utils.Optional<OpenTasksCountAggregateOutputType> | number
          }
        }
      }
      ClosedTasks: {
        payload: Prisma.$ClosedTasksPayload<ExtArgs>
        fields: Prisma.ClosedTasksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClosedTasksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClosedTasksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClosedTasksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClosedTasksPayload>
          }
          findFirst: {
            args: Prisma.ClosedTasksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClosedTasksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClosedTasksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClosedTasksPayload>
          }
          findMany: {
            args: Prisma.ClosedTasksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClosedTasksPayload>[]
          }
          create: {
            args: Prisma.ClosedTasksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClosedTasksPayload>
          }
          createMany: {
            args: Prisma.ClosedTasksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClosedTasksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClosedTasksPayload>[]
          }
          delete: {
            args: Prisma.ClosedTasksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClosedTasksPayload>
          }
          update: {
            args: Prisma.ClosedTasksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClosedTasksPayload>
          }
          deleteMany: {
            args: Prisma.ClosedTasksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClosedTasksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClosedTasksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClosedTasksPayload>[]
          }
          upsert: {
            args: Prisma.ClosedTasksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClosedTasksPayload>
          }
          aggregate: {
            args: Prisma.ClosedTasksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClosedTasks>
          }
          groupBy: {
            args: Prisma.ClosedTasksGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClosedTasksGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClosedTasksCountArgs<ExtArgs>
            result: $Utils.Optional<ClosedTasksCountAggregateOutputType> | number
          }
        }
      }
      Answers: {
        payload: Prisma.$AnswersPayload<ExtArgs>
        fields: Prisma.AnswersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnswersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnswersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswersPayload>
          }
          findFirst: {
            args: Prisma.AnswersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnswersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswersPayload>
          }
          findMany: {
            args: Prisma.AnswersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswersPayload>[]
          }
          create: {
            args: Prisma.AnswersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswersPayload>
          }
          createMany: {
            args: Prisma.AnswersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnswersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswersPayload>[]
          }
          delete: {
            args: Prisma.AnswersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswersPayload>
          }
          update: {
            args: Prisma.AnswersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswersPayload>
          }
          deleteMany: {
            args: Prisma.AnswersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnswersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnswersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswersPayload>[]
          }
          upsert: {
            args: Prisma.AnswersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswersPayload>
          }
          aggregate: {
            args: Prisma.AnswersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnswers>
          }
          groupBy: {
            args: Prisma.AnswersGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnswersGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnswersCountArgs<ExtArgs>
            result: $Utils.Optional<AnswersCountAggregateOutputType> | number
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
    video?: VideoOmit
    question?: QuestionOmit
    answer?: AnswerOmit
    alltasks?: AlltasksOmit
    section?: SectionOmit
    subSection?: SubSectionOmit
    openTasks?: OpenTasksOmit
    closedTasks?: ClosedTasksOmit
    answers?: AnswersOmit
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
    questions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | UserCountOutputTypeCountQuestionsArgs
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
  export type UserCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }


  /**
   * Count Type VideoCountOutputType
   */

  export type VideoCountOutputType = {
    questions: number
  }

  export type VideoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | VideoCountOutputTypeCountQuestionsArgs
  }

  // Custom InputTypes
  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCountOutputType
     */
    select?: VideoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    answers: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | QuestionCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
  }


  /**
   * Count Type AlltasksCountOutputType
   */

  export type AlltasksCountOutputType = {
    sections: number
  }

  export type AlltasksCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sections?: boolean | AlltasksCountOutputTypeCountSectionsArgs
  }

  // Custom InputTypes
  /**
   * AlltasksCountOutputType without action
   */
  export type AlltasksCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlltasksCountOutputType
     */
    select?: AlltasksCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlltasksCountOutputType without action
   */
  export type AlltasksCountOutputTypeCountSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionWhereInput
  }


  /**
   * Count Type SectionCountOutputType
   */

  export type SectionCountOutputType = {
    subsections: number
  }

  export type SectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subsections?: boolean | SectionCountOutputTypeCountSubsectionsArgs
  }

  // Custom InputTypes
  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionCountOutputType
     */
    select?: SectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeCountSubsectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubSectionWhereInput
  }


  /**
   * Count Type SubSectionCountOutputType
   */

  export type SubSectionCountOutputType = {
    openTasks: number
    closedTasks: number
  }

  export type SubSectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    openTasks?: boolean | SubSectionCountOutputTypeCountOpenTasksArgs
    closedTasks?: boolean | SubSectionCountOutputTypeCountClosedTasksArgs
  }

  // Custom InputTypes
  /**
   * SubSectionCountOutputType without action
   */
  export type SubSectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubSectionCountOutputType
     */
    select?: SubSectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubSectionCountOutputType without action
   */
  export type SubSectionCountOutputTypeCountOpenTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpenTasksWhereInput
  }

  /**
   * SubSectionCountOutputType without action
   */
  export type SubSectionCountOutputTypeCountClosedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClosedTasksWhereInput
  }


  /**
   * Count Type ClosedTasksCountOutputType
   */

  export type ClosedTasksCountOutputType = {
    answers: number
  }

  export type ClosedTasksCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | ClosedTasksCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * ClosedTasksCountOutputType without action
   */
  export type ClosedTasksCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedTasksCountOutputType
     */
    select?: ClosedTasksCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClosedTasksCountOutputType without action
   */
  export type ClosedTasksCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswersWhereInput
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
    questions?: boolean | User$questionsArgs<ExtArgs>
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
    questions?: boolean | User$questionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      questions: Prisma.$QuestionPayload<ExtArgs>[]
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
    questions<T extends User$questionsArgs<ExtArgs> = {}>(args?: Subset<T, User$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * User.questions
   */
  export type User$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
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
   * Model Video
   */

  export type AggregateVideo = {
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  export type VideoAvgAggregateOutputType = {
    id: number | null
  }

  export type VideoSumAggregateOutputType = {
    id: number | null
  }

  export type VideoMinAggregateOutputType = {
    id: number | null
    url: string | null
  }

  export type VideoMaxAggregateOutputType = {
    id: number | null
    url: string | null
  }

  export type VideoCountAggregateOutputType = {
    id: number
    url: number
    _all: number
  }


  export type VideoAvgAggregateInputType = {
    id?: true
  }

  export type VideoSumAggregateInputType = {
    id?: true
  }

  export type VideoMinAggregateInputType = {
    id?: true
    url?: true
  }

  export type VideoMaxAggregateInputType = {
    id?: true
    url?: true
  }

  export type VideoCountAggregateInputType = {
    id?: true
    url?: true
    _all?: true
  }

  export type VideoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Video to aggregate.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Videos
    **/
    _count?: true | VideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoMaxAggregateInputType
  }

  export type GetVideoAggregateType<T extends VideoAggregateArgs> = {
        [P in keyof T & keyof AggregateVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideo[P]>
      : GetScalarType<T[P], AggregateVideo[P]>
  }




  export type VideoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithAggregationInput | VideoOrderByWithAggregationInput[]
    by: VideoScalarFieldEnum[] | VideoScalarFieldEnum
    having?: VideoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoCountAggregateInputType | true
    _avg?: VideoAvgAggregateInputType
    _sum?: VideoSumAggregateInputType
    _min?: VideoMinAggregateInputType
    _max?: VideoMaxAggregateInputType
  }

  export type VideoGroupByOutputType = {
    id: number
    url: string
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  type GetVideoGroupByPayload<T extends VideoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoGroupByOutputType[P]>
            : GetScalarType<T[P], VideoGroupByOutputType[P]>
        }
      >
    >


  export type VideoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    questions?: boolean | Video$questionsArgs<ExtArgs>
    _count?: boolean | VideoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type VideoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
  }, ExtArgs["result"]["video"]>

  export type VideoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
  }, ExtArgs["result"]["video"]>

  export type VideoSelectScalar = {
    id?: boolean
    url?: boolean
  }

  export type VideoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url", ExtArgs["result"]["video"]>
  export type VideoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | Video$questionsArgs<ExtArgs>
    _count?: boolean | VideoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VideoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VideoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VideoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Video"
    objects: {
      questions: Prisma.$QuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
    }, ExtArgs["result"]["video"]>
    composites: {}
  }

  type VideoGetPayload<S extends boolean | null | undefined | VideoDefaultArgs> = $Result.GetResult<Prisma.$VideoPayload, S>

  type VideoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoCountAggregateInputType | true
    }

  export interface VideoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Video'], meta: { name: 'Video' } }
    /**
     * Find zero or one Video that matches the filter.
     * @param {VideoFindUniqueArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoFindUniqueArgs>(args: SelectSubset<T, VideoFindUniqueArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Video that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoFindUniqueOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoFindFirstArgs>(args?: SelectSubset<T, VideoFindFirstArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videos
     * const videos = await prisma.video.findMany()
     * 
     * // Get first 10 Videos
     * const videos = await prisma.video.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoWithIdOnly = await prisma.video.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideoFindManyArgs>(args?: SelectSubset<T, VideoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Video.
     * @param {VideoCreateArgs} args - Arguments to create a Video.
     * @example
     * // Create one Video
     * const Video = await prisma.video.create({
     *   data: {
     *     // ... data to create a Video
     *   }
     * })
     * 
     */
    create<T extends VideoCreateArgs>(args: SelectSubset<T, VideoCreateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Videos.
     * @param {VideoCreateManyArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoCreateManyArgs>(args?: SelectSubset<T, VideoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Videos and returns the data saved in the database.
     * @param {VideoCreateManyAndReturnArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Videos and only return the `id`
     * const videoWithIdOnly = await prisma.video.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VideoCreateManyAndReturnArgs>(args?: SelectSubset<T, VideoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Video.
     * @param {VideoDeleteArgs} args - Arguments to delete one Video.
     * @example
     * // Delete one Video
     * const Video = await prisma.video.delete({
     *   where: {
     *     // ... filter to delete one Video
     *   }
     * })
     * 
     */
    delete<T extends VideoDeleteArgs>(args: SelectSubset<T, VideoDeleteArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Video.
     * @param {VideoUpdateArgs} args - Arguments to update one Video.
     * @example
     * // Update one Video
     * const video = await prisma.video.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoUpdateArgs>(args: SelectSubset<T, VideoUpdateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Videos.
     * @param {VideoDeleteManyArgs} args - Arguments to filter Videos to delete.
     * @example
     * // Delete a few Videos
     * const { count } = await prisma.video.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoDeleteManyArgs>(args?: SelectSubset<T, VideoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoUpdateManyArgs>(args: SelectSubset<T, VideoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos and returns the data updated in the database.
     * @param {VideoUpdateManyAndReturnArgs} args - Arguments to update many Videos.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Videos and only return the `id`
     * const videoWithIdOnly = await prisma.video.updateManyAndReturn({
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
    updateManyAndReturn<T extends VideoUpdateManyAndReturnArgs>(args: SelectSubset<T, VideoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Video.
     * @param {VideoUpsertArgs} args - Arguments to update or create a Video.
     * @example
     * // Update or create a Video
     * const video = await prisma.video.upsert({
     *   create: {
     *     // ... data to create a Video
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Video we want to update
     *   }
     * })
     */
    upsert<T extends VideoUpsertArgs>(args: SelectSubset<T, VideoUpsertArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCountArgs} args - Arguments to filter Videos to count.
     * @example
     * // Count the number of Videos
     * const count = await prisma.video.count({
     *   where: {
     *     // ... the filter for the Videos we want to count
     *   }
     * })
    **/
    count<T extends VideoCountArgs>(
      args?: Subset<T, VideoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideoAggregateArgs>(args: Subset<T, VideoAggregateArgs>): Prisma.PrismaPromise<GetVideoAggregateType<T>>

    /**
     * Group by Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoGroupByArgs} args - Group by arguments.
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
      T extends VideoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoGroupByArgs['orderBy'] }
        : { orderBy?: VideoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Video model
   */
  readonly fields: VideoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Video.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questions<T extends Video$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Video$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Video model
   */
  interface VideoFieldRefs {
    readonly id: FieldRef<"Video", 'Int'>
    readonly url: FieldRef<"Video", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Video findUnique
   */
  export type VideoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findUniqueOrThrow
   */
  export type VideoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findFirst
   */
  export type VideoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findFirstOrThrow
   */
  export type VideoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findMany
   */
  export type VideoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Videos to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video create
   */
  export type VideoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to create a Video.
     */
    data: XOR<VideoCreateInput, VideoUncheckedCreateInput>
  }

  /**
   * Video createMany
   */
  export type VideoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Videos.
     */
    data: VideoCreateManyInput | VideoCreateManyInput[]
  }

  /**
   * Video createManyAndReturn
   */
  export type VideoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * The data used to create many Videos.
     */
    data: VideoCreateManyInput | VideoCreateManyInput[]
  }

  /**
   * Video update
   */
  export type VideoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to update a Video.
     */
    data: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
    /**
     * Choose, which Video to update.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video updateMany
   */
  export type VideoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Videos.
     */
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to update.
     */
    limit?: number
  }

  /**
   * Video updateManyAndReturn
   */
  export type VideoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * The data used to update Videos.
     */
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to update.
     */
    limit?: number
  }

  /**
   * Video upsert
   */
  export type VideoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The filter to search for the Video to update in case it exists.
     */
    where: VideoWhereUniqueInput
    /**
     * In case the Video found by the `where` argument doesn't exist, create a new Video with this data.
     */
    create: XOR<VideoCreateInput, VideoUncheckedCreateInput>
    /**
     * In case the Video was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
  }

  /**
   * Video delete
   */
  export type VideoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter which Video to delete.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video deleteMany
   */
  export type VideoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Videos to delete
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to delete.
     */
    limit?: number
  }

  /**
   * Video.questions
   */
  export type Video$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Video without action
   */
  export type VideoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    id: number | null
    videoId: number | null
    time: number | null
  }

  export type QuestionSumAggregateOutputType = {
    id: number | null
    videoId: number | null
    time: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: number | null
    title: string | null
    text: string | null
    videoId: number | null
    time: number | null
    userId: string | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: number | null
    title: string | null
    text: string | null
    videoId: number | null
    time: number | null
    userId: string | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    title: number
    text: number
    videoId: number
    time: number
    userId: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    id?: true
    videoId?: true
    time?: true
  }

  export type QuestionSumAggregateInputType = {
    id?: true
    videoId?: true
    time?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    title?: true
    text?: true
    videoId?: true
    time?: true
    userId?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    title?: true
    text?: true
    videoId?: true
    time?: true
    userId?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    title?: true
    text?: true
    videoId?: true
    time?: true
    userId?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: number
    title: string
    text: string
    videoId: number
    time: number
    userId: string
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    text?: boolean
    videoId?: boolean
    time?: boolean
    userId?: boolean
    answers?: boolean | Question$answersArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    text?: boolean
    videoId?: boolean
    time?: boolean
    userId?: boolean
    video?: boolean | VideoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    text?: boolean
    videoId?: boolean
    time?: boolean
    userId?: boolean
    video?: boolean | VideoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    title?: boolean
    text?: boolean
    videoId?: boolean
    time?: boolean
    userId?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "text" | "videoId" | "time" | "userId", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | Question$answersArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | VideoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | VideoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      answers: Prisma.$AnswerPayload<ExtArgs>[]
      video: Prisma.$VideoPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      text: string
      videoId: number
      time: number
      userId: string
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {QuestionUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
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
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    answers<T extends Question$answersArgs<ExtArgs> = {}>(args?: Subset<T, Question$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    video<T extends VideoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VideoDefaultArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'Int'>
    readonly title: FieldRef<"Question", 'String'>
    readonly text: FieldRef<"Question", 'String'>
    readonly videoId: FieldRef<"Question", 'Int'>
    readonly time: FieldRef<"Question", 'Int'>
    readonly userId: FieldRef<"Question", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question updateManyAndReturn
   */
  export type QuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question.answers
   */
  export type Question$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model Answer
   */

  export type AggregateAnswer = {
    _count: AnswerCountAggregateOutputType | null
    _avg: AnswerAvgAggregateOutputType | null
    _sum: AnswerSumAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  export type AnswerAvgAggregateOutputType = {
    id: number | null
    questionId: number | null
  }

  export type AnswerSumAggregateOutputType = {
    id: number | null
    questionId: number | null
  }

  export type AnswerMinAggregateOutputType = {
    id: number | null
    text: string | null
    questionId: number | null
  }

  export type AnswerMaxAggregateOutputType = {
    id: number | null
    text: string | null
    questionId: number | null
  }

  export type AnswerCountAggregateOutputType = {
    id: number
    text: number
    questionId: number
    _all: number
  }


  export type AnswerAvgAggregateInputType = {
    id?: true
    questionId?: true
  }

  export type AnswerSumAggregateInputType = {
    id?: true
    questionId?: true
  }

  export type AnswerMinAggregateInputType = {
    id?: true
    text?: true
    questionId?: true
  }

  export type AnswerMaxAggregateInputType = {
    id?: true
    text?: true
    questionId?: true
  }

  export type AnswerCountAggregateInputType = {
    id?: true
    text?: true
    questionId?: true
    _all?: true
  }

  export type AnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answer to aggregate.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Answers
    **/
    _count?: true | AnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnswerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnswerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnswerMaxAggregateInputType
  }

  export type GetAnswerAggregateType<T extends AnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswer[P]>
      : GetScalarType<T[P], AggregateAnswer[P]>
  }




  export type AnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithAggregationInput | AnswerOrderByWithAggregationInput[]
    by: AnswerScalarFieldEnum[] | AnswerScalarFieldEnum
    having?: AnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnswerCountAggregateInputType | true
    _avg?: AnswerAvgAggregateInputType
    _sum?: AnswerSumAggregateInputType
    _min?: AnswerMinAggregateInputType
    _max?: AnswerMaxAggregateInputType
  }

  export type AnswerGroupByOutputType = {
    id: number
    text: string
    questionId: number
    _count: AnswerCountAggregateOutputType | null
    _avg: AnswerAvgAggregateOutputType | null
    _sum: AnswerSumAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  type GetAnswerGroupByPayload<T extends AnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnswerGroupByOutputType[P]>
            : GetScalarType<T[P], AnswerGroupByOutputType[P]>
        }
      >
    >


  export type AnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    questionId?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    questionId?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    questionId?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectScalar = {
    id?: boolean
    text?: boolean
    questionId?: boolean
  }

  export type AnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "questionId", ExtArgs["result"]["answer"]>
  export type AnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type AnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type AnswerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $AnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Answer"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      text: string
      questionId: number
    }, ExtArgs["result"]["answer"]>
    composites: {}
  }

  type AnswerGetPayload<S extends boolean | null | undefined | AnswerDefaultArgs> = $Result.GetResult<Prisma.$AnswerPayload, S>

  type AnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnswerCountAggregateInputType | true
    }

  export interface AnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Answer'], meta: { name: 'Answer' } }
    /**
     * Find zero or one Answer that matches the filter.
     * @param {AnswerFindUniqueArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnswerFindUniqueArgs>(args: SelectSubset<T, AnswerFindUniqueArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Answer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnswerFindUniqueOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, AnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnswerFindFirstArgs>(args?: SelectSubset<T, AnswerFindFirstArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, AnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Answers
     * const answers = await prisma.answer.findMany()
     * 
     * // Get first 10 Answers
     * const answers = await prisma.answer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const answerWithIdOnly = await prisma.answer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnswerFindManyArgs>(args?: SelectSubset<T, AnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Answer.
     * @param {AnswerCreateArgs} args - Arguments to create a Answer.
     * @example
     * // Create one Answer
     * const Answer = await prisma.answer.create({
     *   data: {
     *     // ... data to create a Answer
     *   }
     * })
     * 
     */
    create<T extends AnswerCreateArgs>(args: SelectSubset<T, AnswerCreateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Answers.
     * @param {AnswerCreateManyArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnswerCreateManyArgs>(args?: SelectSubset<T, AnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Answers and returns the data saved in the database.
     * @param {AnswerCreateManyAndReturnArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Answers and only return the `id`
     * const answerWithIdOnly = await prisma.answer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, AnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Answer.
     * @param {AnswerDeleteArgs} args - Arguments to delete one Answer.
     * @example
     * // Delete one Answer
     * const Answer = await prisma.answer.delete({
     *   where: {
     *     // ... filter to delete one Answer
     *   }
     * })
     * 
     */
    delete<T extends AnswerDeleteArgs>(args: SelectSubset<T, AnswerDeleteArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Answer.
     * @param {AnswerUpdateArgs} args - Arguments to update one Answer.
     * @example
     * // Update one Answer
     * const answer = await prisma.answer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnswerUpdateArgs>(args: SelectSubset<T, AnswerUpdateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Answers.
     * @param {AnswerDeleteManyArgs} args - Arguments to filter Answers to delete.
     * @example
     * // Delete a few Answers
     * const { count } = await prisma.answer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnswerDeleteManyArgs>(args?: SelectSubset<T, AnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnswerUpdateManyArgs>(args: SelectSubset<T, AnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers and returns the data updated in the database.
     * @param {AnswerUpdateManyAndReturnArgs} args - Arguments to update many Answers.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Answers and only return the `id`
     * const answerWithIdOnly = await prisma.answer.updateManyAndReturn({
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
    updateManyAndReturn<T extends AnswerUpdateManyAndReturnArgs>(args: SelectSubset<T, AnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Answer.
     * @param {AnswerUpsertArgs} args - Arguments to update or create a Answer.
     * @example
     * // Update or create a Answer
     * const answer = await prisma.answer.upsert({
     *   create: {
     *     // ... data to create a Answer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Answer we want to update
     *   }
     * })
     */
    upsert<T extends AnswerUpsertArgs>(args: SelectSubset<T, AnswerUpsertArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerCountArgs} args - Arguments to filter Answers to count.
     * @example
     * // Count the number of Answers
     * const count = await prisma.answer.count({
     *   where: {
     *     // ... the filter for the Answers we want to count
     *   }
     * })
    **/
    count<T extends AnswerCountArgs>(
      args?: Subset<T, AnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnswerAggregateArgs>(args: Subset<T, AnswerAggregateArgs>): Prisma.PrismaPromise<GetAnswerAggregateType<T>>

    /**
     * Group by Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerGroupByArgs} args - Group by arguments.
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
      T extends AnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnswerGroupByArgs['orderBy'] }
        : { orderBy?: AnswerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Answer model
   */
  readonly fields: AnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Answer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Answer model
   */
  interface AnswerFieldRefs {
    readonly id: FieldRef<"Answer", 'Int'>
    readonly text: FieldRef<"Answer", 'String'>
    readonly questionId: FieldRef<"Answer", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Answer findUnique
   */
  export type AnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findUniqueOrThrow
   */
  export type AnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findFirst
   */
  export type AnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findFirstOrThrow
   */
  export type AnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findMany
   */
  export type AnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answers to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer create
   */
  export type AnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a Answer.
     */
    data: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
  }

  /**
   * Answer createMany
   */
  export type AnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
  }

  /**
   * Answer createManyAndReturn
   */
  export type AnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answer update
   */
  export type AnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a Answer.
     */
    data: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
    /**
     * Choose, which Answer to update.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer updateMany
   */
  export type AnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to update.
     */
    limit?: number
  }

  /**
   * Answer updateManyAndReturn
   */
  export type AnswerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answer upsert
   */
  export type AnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the Answer to update in case it exists.
     */
    where: AnswerWhereUniqueInput
    /**
     * In case the Answer found by the `where` argument doesn't exist, create a new Answer with this data.
     */
    create: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
    /**
     * In case the Answer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
  }

  /**
   * Answer delete
   */
  export type AnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter which Answer to delete.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer deleteMany
   */
  export type AnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answers to delete
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to delete.
     */
    limit?: number
  }

  /**
   * Answer without action
   */
  export type AnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
  }


  /**
   * Model Alltasks
   */

  export type AggregateAlltasks = {
    _count: AlltasksCountAggregateOutputType | null
    _min: AlltasksMinAggregateOutputType | null
    _max: AlltasksMaxAggregateOutputType | null
  }

  export type AlltasksMinAggregateOutputType = {
    id: string | null
  }

  export type AlltasksMaxAggregateOutputType = {
    id: string | null
  }

  export type AlltasksCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type AlltasksMinAggregateInputType = {
    id?: true
  }

  export type AlltasksMaxAggregateInputType = {
    id?: true
  }

  export type AlltasksCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type AlltasksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alltasks to aggregate.
     */
    where?: AlltasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alltasks to fetch.
     */
    orderBy?: AlltasksOrderByWithRelationInput | AlltasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlltasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alltasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alltasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alltasks
    **/
    _count?: true | AlltasksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlltasksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlltasksMaxAggregateInputType
  }

  export type GetAlltasksAggregateType<T extends AlltasksAggregateArgs> = {
        [P in keyof T & keyof AggregateAlltasks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlltasks[P]>
      : GetScalarType<T[P], AggregateAlltasks[P]>
  }




  export type AlltasksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlltasksWhereInput
    orderBy?: AlltasksOrderByWithAggregationInput | AlltasksOrderByWithAggregationInput[]
    by: AlltasksScalarFieldEnum[] | AlltasksScalarFieldEnum
    having?: AlltasksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlltasksCountAggregateInputType | true
    _min?: AlltasksMinAggregateInputType
    _max?: AlltasksMaxAggregateInputType
  }

  export type AlltasksGroupByOutputType = {
    id: string
    _count: AlltasksCountAggregateOutputType | null
    _min: AlltasksMinAggregateOutputType | null
    _max: AlltasksMaxAggregateOutputType | null
  }

  type GetAlltasksGroupByPayload<T extends AlltasksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlltasksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlltasksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlltasksGroupByOutputType[P]>
            : GetScalarType<T[P], AlltasksGroupByOutputType[P]>
        }
      >
    >


  export type AlltasksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sections?: boolean | Alltasks$sectionsArgs<ExtArgs>
    _count?: boolean | AlltasksCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alltasks"]>

  export type AlltasksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["alltasks"]>

  export type AlltasksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["alltasks"]>

  export type AlltasksSelectScalar = {
    id?: boolean
  }

  export type AlltasksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id", ExtArgs["result"]["alltasks"]>
  export type AlltasksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sections?: boolean | Alltasks$sectionsArgs<ExtArgs>
    _count?: boolean | AlltasksCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AlltasksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AlltasksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AlltasksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alltasks"
    objects: {
      sections: Prisma.$SectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
    }, ExtArgs["result"]["alltasks"]>
    composites: {}
  }

  type AlltasksGetPayload<S extends boolean | null | undefined | AlltasksDefaultArgs> = $Result.GetResult<Prisma.$AlltasksPayload, S>

  type AlltasksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlltasksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlltasksCountAggregateInputType | true
    }

  export interface AlltasksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alltasks'], meta: { name: 'Alltasks' } }
    /**
     * Find zero or one Alltasks that matches the filter.
     * @param {AlltasksFindUniqueArgs} args - Arguments to find a Alltasks
     * @example
     * // Get one Alltasks
     * const alltasks = await prisma.alltasks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlltasksFindUniqueArgs>(args: SelectSubset<T, AlltasksFindUniqueArgs<ExtArgs>>): Prisma__AlltasksClient<$Result.GetResult<Prisma.$AlltasksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alltasks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlltasksFindUniqueOrThrowArgs} args - Arguments to find a Alltasks
     * @example
     * // Get one Alltasks
     * const alltasks = await prisma.alltasks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlltasksFindUniqueOrThrowArgs>(args: SelectSubset<T, AlltasksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlltasksClient<$Result.GetResult<Prisma.$AlltasksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alltasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlltasksFindFirstArgs} args - Arguments to find a Alltasks
     * @example
     * // Get one Alltasks
     * const alltasks = await prisma.alltasks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlltasksFindFirstArgs>(args?: SelectSubset<T, AlltasksFindFirstArgs<ExtArgs>>): Prisma__AlltasksClient<$Result.GetResult<Prisma.$AlltasksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alltasks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlltasksFindFirstOrThrowArgs} args - Arguments to find a Alltasks
     * @example
     * // Get one Alltasks
     * const alltasks = await prisma.alltasks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlltasksFindFirstOrThrowArgs>(args?: SelectSubset<T, AlltasksFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlltasksClient<$Result.GetResult<Prisma.$AlltasksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alltasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlltasksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alltasks
     * const alltasks = await prisma.alltasks.findMany()
     * 
     * // Get first 10 Alltasks
     * const alltasks = await prisma.alltasks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alltasksWithIdOnly = await prisma.alltasks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlltasksFindManyArgs>(args?: SelectSubset<T, AlltasksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlltasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alltasks.
     * @param {AlltasksCreateArgs} args - Arguments to create a Alltasks.
     * @example
     * // Create one Alltasks
     * const Alltasks = await prisma.alltasks.create({
     *   data: {
     *     // ... data to create a Alltasks
     *   }
     * })
     * 
     */
    create<T extends AlltasksCreateArgs>(args: SelectSubset<T, AlltasksCreateArgs<ExtArgs>>): Prisma__AlltasksClient<$Result.GetResult<Prisma.$AlltasksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alltasks.
     * @param {AlltasksCreateManyArgs} args - Arguments to create many Alltasks.
     * @example
     * // Create many Alltasks
     * const alltasks = await prisma.alltasks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlltasksCreateManyArgs>(args?: SelectSubset<T, AlltasksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alltasks and returns the data saved in the database.
     * @param {AlltasksCreateManyAndReturnArgs} args - Arguments to create many Alltasks.
     * @example
     * // Create many Alltasks
     * const alltasks = await prisma.alltasks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alltasks and only return the `id`
     * const alltasksWithIdOnly = await prisma.alltasks.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlltasksCreateManyAndReturnArgs>(args?: SelectSubset<T, AlltasksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlltasksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Alltasks.
     * @param {AlltasksDeleteArgs} args - Arguments to delete one Alltasks.
     * @example
     * // Delete one Alltasks
     * const Alltasks = await prisma.alltasks.delete({
     *   where: {
     *     // ... filter to delete one Alltasks
     *   }
     * })
     * 
     */
    delete<T extends AlltasksDeleteArgs>(args: SelectSubset<T, AlltasksDeleteArgs<ExtArgs>>): Prisma__AlltasksClient<$Result.GetResult<Prisma.$AlltasksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alltasks.
     * @param {AlltasksUpdateArgs} args - Arguments to update one Alltasks.
     * @example
     * // Update one Alltasks
     * const alltasks = await prisma.alltasks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlltasksUpdateArgs>(args: SelectSubset<T, AlltasksUpdateArgs<ExtArgs>>): Prisma__AlltasksClient<$Result.GetResult<Prisma.$AlltasksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alltasks.
     * @param {AlltasksDeleteManyArgs} args - Arguments to filter Alltasks to delete.
     * @example
     * // Delete a few Alltasks
     * const { count } = await prisma.alltasks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlltasksDeleteManyArgs>(args?: SelectSubset<T, AlltasksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alltasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlltasksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alltasks
     * const alltasks = await prisma.alltasks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlltasksUpdateManyArgs>(args: SelectSubset<T, AlltasksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alltasks and returns the data updated in the database.
     * @param {AlltasksUpdateManyAndReturnArgs} args - Arguments to update many Alltasks.
     * @example
     * // Update many Alltasks
     * const alltasks = await prisma.alltasks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Alltasks and only return the `id`
     * const alltasksWithIdOnly = await prisma.alltasks.updateManyAndReturn({
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
    updateManyAndReturn<T extends AlltasksUpdateManyAndReturnArgs>(args: SelectSubset<T, AlltasksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlltasksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Alltasks.
     * @param {AlltasksUpsertArgs} args - Arguments to update or create a Alltasks.
     * @example
     * // Update or create a Alltasks
     * const alltasks = await prisma.alltasks.upsert({
     *   create: {
     *     // ... data to create a Alltasks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alltasks we want to update
     *   }
     * })
     */
    upsert<T extends AlltasksUpsertArgs>(args: SelectSubset<T, AlltasksUpsertArgs<ExtArgs>>): Prisma__AlltasksClient<$Result.GetResult<Prisma.$AlltasksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alltasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlltasksCountArgs} args - Arguments to filter Alltasks to count.
     * @example
     * // Count the number of Alltasks
     * const count = await prisma.alltasks.count({
     *   where: {
     *     // ... the filter for the Alltasks we want to count
     *   }
     * })
    **/
    count<T extends AlltasksCountArgs>(
      args?: Subset<T, AlltasksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlltasksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alltasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlltasksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlltasksAggregateArgs>(args: Subset<T, AlltasksAggregateArgs>): Prisma.PrismaPromise<GetAlltasksAggregateType<T>>

    /**
     * Group by Alltasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlltasksGroupByArgs} args - Group by arguments.
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
      T extends AlltasksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlltasksGroupByArgs['orderBy'] }
        : { orderBy?: AlltasksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlltasksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlltasksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alltasks model
   */
  readonly fields: AlltasksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alltasks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlltasksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sections<T extends Alltasks$sectionsArgs<ExtArgs> = {}>(args?: Subset<T, Alltasks$sectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Alltasks model
   */
  interface AlltasksFieldRefs {
    readonly id: FieldRef<"Alltasks", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Alltasks findUnique
   */
  export type AlltasksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alltasks
     */
    select?: AlltasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alltasks
     */
    omit?: AlltasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlltasksInclude<ExtArgs> | null
    /**
     * Filter, which Alltasks to fetch.
     */
    where: AlltasksWhereUniqueInput
  }

  /**
   * Alltasks findUniqueOrThrow
   */
  export type AlltasksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alltasks
     */
    select?: AlltasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alltasks
     */
    omit?: AlltasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlltasksInclude<ExtArgs> | null
    /**
     * Filter, which Alltasks to fetch.
     */
    where: AlltasksWhereUniqueInput
  }

  /**
   * Alltasks findFirst
   */
  export type AlltasksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alltasks
     */
    select?: AlltasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alltasks
     */
    omit?: AlltasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlltasksInclude<ExtArgs> | null
    /**
     * Filter, which Alltasks to fetch.
     */
    where?: AlltasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alltasks to fetch.
     */
    orderBy?: AlltasksOrderByWithRelationInput | AlltasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alltasks.
     */
    cursor?: AlltasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alltasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alltasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alltasks.
     */
    distinct?: AlltasksScalarFieldEnum | AlltasksScalarFieldEnum[]
  }

  /**
   * Alltasks findFirstOrThrow
   */
  export type AlltasksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alltasks
     */
    select?: AlltasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alltasks
     */
    omit?: AlltasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlltasksInclude<ExtArgs> | null
    /**
     * Filter, which Alltasks to fetch.
     */
    where?: AlltasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alltasks to fetch.
     */
    orderBy?: AlltasksOrderByWithRelationInput | AlltasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alltasks.
     */
    cursor?: AlltasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alltasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alltasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alltasks.
     */
    distinct?: AlltasksScalarFieldEnum | AlltasksScalarFieldEnum[]
  }

  /**
   * Alltasks findMany
   */
  export type AlltasksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alltasks
     */
    select?: AlltasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alltasks
     */
    omit?: AlltasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlltasksInclude<ExtArgs> | null
    /**
     * Filter, which Alltasks to fetch.
     */
    where?: AlltasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alltasks to fetch.
     */
    orderBy?: AlltasksOrderByWithRelationInput | AlltasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alltasks.
     */
    cursor?: AlltasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alltasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alltasks.
     */
    skip?: number
    distinct?: AlltasksScalarFieldEnum | AlltasksScalarFieldEnum[]
  }

  /**
   * Alltasks create
   */
  export type AlltasksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alltasks
     */
    select?: AlltasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alltasks
     */
    omit?: AlltasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlltasksInclude<ExtArgs> | null
    /**
     * The data needed to create a Alltasks.
     */
    data?: XOR<AlltasksCreateInput, AlltasksUncheckedCreateInput>
  }

  /**
   * Alltasks createMany
   */
  export type AlltasksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alltasks.
     */
    data: AlltasksCreateManyInput | AlltasksCreateManyInput[]
  }

  /**
   * Alltasks createManyAndReturn
   */
  export type AlltasksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alltasks
     */
    select?: AlltasksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alltasks
     */
    omit?: AlltasksOmit<ExtArgs> | null
    /**
     * The data used to create many Alltasks.
     */
    data: AlltasksCreateManyInput | AlltasksCreateManyInput[]
  }

  /**
   * Alltasks update
   */
  export type AlltasksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alltasks
     */
    select?: AlltasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alltasks
     */
    omit?: AlltasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlltasksInclude<ExtArgs> | null
    /**
     * The data needed to update a Alltasks.
     */
    data: XOR<AlltasksUpdateInput, AlltasksUncheckedUpdateInput>
    /**
     * Choose, which Alltasks to update.
     */
    where: AlltasksWhereUniqueInput
  }

  /**
   * Alltasks updateMany
   */
  export type AlltasksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alltasks.
     */
    data: XOR<AlltasksUpdateManyMutationInput, AlltasksUncheckedUpdateManyInput>
    /**
     * Filter which Alltasks to update
     */
    where?: AlltasksWhereInput
    /**
     * Limit how many Alltasks to update.
     */
    limit?: number
  }

  /**
   * Alltasks updateManyAndReturn
   */
  export type AlltasksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alltasks
     */
    select?: AlltasksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alltasks
     */
    omit?: AlltasksOmit<ExtArgs> | null
    /**
     * The data used to update Alltasks.
     */
    data: XOR<AlltasksUpdateManyMutationInput, AlltasksUncheckedUpdateManyInput>
    /**
     * Filter which Alltasks to update
     */
    where?: AlltasksWhereInput
    /**
     * Limit how many Alltasks to update.
     */
    limit?: number
  }

  /**
   * Alltasks upsert
   */
  export type AlltasksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alltasks
     */
    select?: AlltasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alltasks
     */
    omit?: AlltasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlltasksInclude<ExtArgs> | null
    /**
     * The filter to search for the Alltasks to update in case it exists.
     */
    where: AlltasksWhereUniqueInput
    /**
     * In case the Alltasks found by the `where` argument doesn't exist, create a new Alltasks with this data.
     */
    create: XOR<AlltasksCreateInput, AlltasksUncheckedCreateInput>
    /**
     * In case the Alltasks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlltasksUpdateInput, AlltasksUncheckedUpdateInput>
  }

  /**
   * Alltasks delete
   */
  export type AlltasksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alltasks
     */
    select?: AlltasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alltasks
     */
    omit?: AlltasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlltasksInclude<ExtArgs> | null
    /**
     * Filter which Alltasks to delete.
     */
    where: AlltasksWhereUniqueInput
  }

  /**
   * Alltasks deleteMany
   */
  export type AlltasksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alltasks to delete
     */
    where?: AlltasksWhereInput
    /**
     * Limit how many Alltasks to delete.
     */
    limit?: number
  }

  /**
   * Alltasks.sections
   */
  export type Alltasks$sectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    where?: SectionWhereInput
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    cursor?: SectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Alltasks without action
   */
  export type AlltasksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alltasks
     */
    select?: AlltasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alltasks
     */
    omit?: AlltasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlltasksInclude<ExtArgs> | null
  }


  /**
   * Model Section
   */

  export type AggregateSection = {
    _count: SectionCountAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  export type SectionMinAggregateOutputType = {
    id: string | null
    name: string | null
    alltasksId: string | null
  }

  export type SectionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    alltasksId: string | null
  }

  export type SectionCountAggregateOutputType = {
    id: number
    name: number
    alltasksId: number
    _all: number
  }


  export type SectionMinAggregateInputType = {
    id?: true
    name?: true
    alltasksId?: true
  }

  export type SectionMaxAggregateInputType = {
    id?: true
    name?: true
    alltasksId?: true
  }

  export type SectionCountAggregateInputType = {
    id?: true
    name?: true
    alltasksId?: true
    _all?: true
  }

  export type SectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Section to aggregate.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sections
    **/
    _count?: true | SectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SectionMaxAggregateInputType
  }

  export type GetSectionAggregateType<T extends SectionAggregateArgs> = {
        [P in keyof T & keyof AggregateSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSection[P]>
      : GetScalarType<T[P], AggregateSection[P]>
  }




  export type SectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionWhereInput
    orderBy?: SectionOrderByWithAggregationInput | SectionOrderByWithAggregationInput[]
    by: SectionScalarFieldEnum[] | SectionScalarFieldEnum
    having?: SectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SectionCountAggregateInputType | true
    _min?: SectionMinAggregateInputType
    _max?: SectionMaxAggregateInputType
  }

  export type SectionGroupByOutputType = {
    id: string
    name: string
    alltasksId: string
    _count: SectionCountAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  type GetSectionGroupByPayload<T extends SectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SectionGroupByOutputType[P]>
            : GetScalarType<T[P], SectionGroupByOutputType[P]>
        }
      >
    >


  export type SectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    alltasksId?: boolean
    alltasks?: boolean | AlltasksDefaultArgs<ExtArgs>
    subsections?: boolean | Section$subsectionsArgs<ExtArgs>
    _count?: boolean | SectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["section"]>

  export type SectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    alltasksId?: boolean
    alltasks?: boolean | AlltasksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["section"]>

  export type SectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    alltasksId?: boolean
    alltasks?: boolean | AlltasksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["section"]>

  export type SectionSelectScalar = {
    id?: boolean
    name?: boolean
    alltasksId?: boolean
  }

  export type SectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "alltasksId", ExtArgs["result"]["section"]>
  export type SectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alltasks?: boolean | AlltasksDefaultArgs<ExtArgs>
    subsections?: boolean | Section$subsectionsArgs<ExtArgs>
    _count?: boolean | SectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alltasks?: boolean | AlltasksDefaultArgs<ExtArgs>
  }
  export type SectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alltasks?: boolean | AlltasksDefaultArgs<ExtArgs>
  }

  export type $SectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Section"
    objects: {
      alltasks: Prisma.$AlltasksPayload<ExtArgs>
      subsections: Prisma.$SubSectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      alltasksId: string
    }, ExtArgs["result"]["section"]>
    composites: {}
  }

  type SectionGetPayload<S extends boolean | null | undefined | SectionDefaultArgs> = $Result.GetResult<Prisma.$SectionPayload, S>

  type SectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SectionCountAggregateInputType | true
    }

  export interface SectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Section'], meta: { name: 'Section' } }
    /**
     * Find zero or one Section that matches the filter.
     * @param {SectionFindUniqueArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SectionFindUniqueArgs>(args: SelectSubset<T, SectionFindUniqueArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Section that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SectionFindUniqueOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SectionFindUniqueOrThrowArgs>(args: SelectSubset<T, SectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Section that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindFirstArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SectionFindFirstArgs>(args?: SelectSubset<T, SectionFindFirstArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Section that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindFirstOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SectionFindFirstOrThrowArgs>(args?: SelectSubset<T, SectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sections
     * const sections = await prisma.section.findMany()
     * 
     * // Get first 10 Sections
     * const sections = await prisma.section.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sectionWithIdOnly = await prisma.section.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SectionFindManyArgs>(args?: SelectSubset<T, SectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Section.
     * @param {SectionCreateArgs} args - Arguments to create a Section.
     * @example
     * // Create one Section
     * const Section = await prisma.section.create({
     *   data: {
     *     // ... data to create a Section
     *   }
     * })
     * 
     */
    create<T extends SectionCreateArgs>(args: SelectSubset<T, SectionCreateArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sections.
     * @param {SectionCreateManyArgs} args - Arguments to create many Sections.
     * @example
     * // Create many Sections
     * const section = await prisma.section.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SectionCreateManyArgs>(args?: SelectSubset<T, SectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sections and returns the data saved in the database.
     * @param {SectionCreateManyAndReturnArgs} args - Arguments to create many Sections.
     * @example
     * // Create many Sections
     * const section = await prisma.section.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sections and only return the `id`
     * const sectionWithIdOnly = await prisma.section.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SectionCreateManyAndReturnArgs>(args?: SelectSubset<T, SectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Section.
     * @param {SectionDeleteArgs} args - Arguments to delete one Section.
     * @example
     * // Delete one Section
     * const Section = await prisma.section.delete({
     *   where: {
     *     // ... filter to delete one Section
     *   }
     * })
     * 
     */
    delete<T extends SectionDeleteArgs>(args: SelectSubset<T, SectionDeleteArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Section.
     * @param {SectionUpdateArgs} args - Arguments to update one Section.
     * @example
     * // Update one Section
     * const section = await prisma.section.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SectionUpdateArgs>(args: SelectSubset<T, SectionUpdateArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sections.
     * @param {SectionDeleteManyArgs} args - Arguments to filter Sections to delete.
     * @example
     * // Delete a few Sections
     * const { count } = await prisma.section.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SectionDeleteManyArgs>(args?: SelectSubset<T, SectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sections
     * const section = await prisma.section.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SectionUpdateManyArgs>(args: SelectSubset<T, SectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sections and returns the data updated in the database.
     * @param {SectionUpdateManyAndReturnArgs} args - Arguments to update many Sections.
     * @example
     * // Update many Sections
     * const section = await prisma.section.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sections and only return the `id`
     * const sectionWithIdOnly = await prisma.section.updateManyAndReturn({
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
    updateManyAndReturn<T extends SectionUpdateManyAndReturnArgs>(args: SelectSubset<T, SectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Section.
     * @param {SectionUpsertArgs} args - Arguments to update or create a Section.
     * @example
     * // Update or create a Section
     * const section = await prisma.section.upsert({
     *   create: {
     *     // ... data to create a Section
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Section we want to update
     *   }
     * })
     */
    upsert<T extends SectionUpsertArgs>(args: SelectSubset<T, SectionUpsertArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionCountArgs} args - Arguments to filter Sections to count.
     * @example
     * // Count the number of Sections
     * const count = await prisma.section.count({
     *   where: {
     *     // ... the filter for the Sections we want to count
     *   }
     * })
    **/
    count<T extends SectionCountArgs>(
      args?: Subset<T, SectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SectionAggregateArgs>(args: Subset<T, SectionAggregateArgs>): Prisma.PrismaPromise<GetSectionAggregateType<T>>

    /**
     * Group by Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionGroupByArgs} args - Group by arguments.
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
      T extends SectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SectionGroupByArgs['orderBy'] }
        : { orderBy?: SectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Section model
   */
  readonly fields: SectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Section.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alltasks<T extends AlltasksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlltasksDefaultArgs<ExtArgs>>): Prisma__AlltasksClient<$Result.GetResult<Prisma.$AlltasksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subsections<T extends Section$subsectionsArgs<ExtArgs> = {}>(args?: Subset<T, Section$subsectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Section model
   */
  interface SectionFieldRefs {
    readonly id: FieldRef<"Section", 'String'>
    readonly name: FieldRef<"Section", 'String'>
    readonly alltasksId: FieldRef<"Section", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Section findUnique
   */
  export type SectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section findUniqueOrThrow
   */
  export type SectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section findFirst
   */
  export type SectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section findFirstOrThrow
   */
  export type SectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section findMany
   */
  export type SectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Sections to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section create
   */
  export type SectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Section.
     */
    data: XOR<SectionCreateInput, SectionUncheckedCreateInput>
  }

  /**
   * Section createMany
   */
  export type SectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sections.
     */
    data: SectionCreateManyInput | SectionCreateManyInput[]
  }

  /**
   * Section createManyAndReturn
   */
  export type SectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * The data used to create many Sections.
     */
    data: SectionCreateManyInput | SectionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Section update
   */
  export type SectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Section.
     */
    data: XOR<SectionUpdateInput, SectionUncheckedUpdateInput>
    /**
     * Choose, which Section to update.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section updateMany
   */
  export type SectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sections.
     */
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyInput>
    /**
     * Filter which Sections to update
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to update.
     */
    limit?: number
  }

  /**
   * Section updateManyAndReturn
   */
  export type SectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * The data used to update Sections.
     */
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyInput>
    /**
     * Filter which Sections to update
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Section upsert
   */
  export type SectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Section to update in case it exists.
     */
    where: SectionWhereUniqueInput
    /**
     * In case the Section found by the `where` argument doesn't exist, create a new Section with this data.
     */
    create: XOR<SectionCreateInput, SectionUncheckedCreateInput>
    /**
     * In case the Section was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SectionUpdateInput, SectionUncheckedUpdateInput>
  }

  /**
   * Section delete
   */
  export type SectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter which Section to delete.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section deleteMany
   */
  export type SectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sections to delete
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to delete.
     */
    limit?: number
  }

  /**
   * Section.subsections
   */
  export type Section$subsectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubSection
     */
    select?: SubSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubSection
     */
    omit?: SubSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubSectionInclude<ExtArgs> | null
    where?: SubSectionWhereInput
    orderBy?: SubSectionOrderByWithRelationInput | SubSectionOrderByWithRelationInput[]
    cursor?: SubSectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubSectionScalarFieldEnum | SubSectionScalarFieldEnum[]
  }

  /**
   * Section without action
   */
  export type SectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
  }


  /**
   * Model SubSection
   */

  export type AggregateSubSection = {
    _count: SubSectionCountAggregateOutputType | null
    _avg: SubSectionAvgAggregateOutputType | null
    _sum: SubSectionSumAggregateOutputType | null
    _min: SubSectionMinAggregateOutputType | null
    _max: SubSectionMaxAggregateOutputType | null
  }

  export type SubSectionAvgAggregateOutputType = {
    closedTasksToShuffle: number | null
    openTasksToShuffle: number | null
  }

  export type SubSectionSumAggregateOutputType = {
    closedTasksToShuffle: number | null
    openTasksToShuffle: number | null
  }

  export type SubSectionMinAggregateOutputType = {
    id: string | null
    name: string | null
    sectionId: string | null
    mustBeShuffle: boolean | null
    closedTasksToShuffle: number | null
    openTasksToShuffle: number | null
  }

  export type SubSectionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    sectionId: string | null
    mustBeShuffle: boolean | null
    closedTasksToShuffle: number | null
    openTasksToShuffle: number | null
  }

  export type SubSectionCountAggregateOutputType = {
    id: number
    name: number
    sectionId: number
    mustBeShuffle: number
    closedTasksToShuffle: number
    openTasksToShuffle: number
    _all: number
  }


  export type SubSectionAvgAggregateInputType = {
    closedTasksToShuffle?: true
    openTasksToShuffle?: true
  }

  export type SubSectionSumAggregateInputType = {
    closedTasksToShuffle?: true
    openTasksToShuffle?: true
  }

  export type SubSectionMinAggregateInputType = {
    id?: true
    name?: true
    sectionId?: true
    mustBeShuffle?: true
    closedTasksToShuffle?: true
    openTasksToShuffle?: true
  }

  export type SubSectionMaxAggregateInputType = {
    id?: true
    name?: true
    sectionId?: true
    mustBeShuffle?: true
    closedTasksToShuffle?: true
    openTasksToShuffle?: true
  }

  export type SubSectionCountAggregateInputType = {
    id?: true
    name?: true
    sectionId?: true
    mustBeShuffle?: true
    closedTasksToShuffle?: true
    openTasksToShuffle?: true
    _all?: true
  }

  export type SubSectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubSection to aggregate.
     */
    where?: SubSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubSections to fetch.
     */
    orderBy?: SubSectionOrderByWithRelationInput | SubSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubSections
    **/
    _count?: true | SubSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubSectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubSectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubSectionMaxAggregateInputType
  }

  export type GetSubSectionAggregateType<T extends SubSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubSection[P]>
      : GetScalarType<T[P], AggregateSubSection[P]>
  }




  export type SubSectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubSectionWhereInput
    orderBy?: SubSectionOrderByWithAggregationInput | SubSectionOrderByWithAggregationInput[]
    by: SubSectionScalarFieldEnum[] | SubSectionScalarFieldEnum
    having?: SubSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubSectionCountAggregateInputType | true
    _avg?: SubSectionAvgAggregateInputType
    _sum?: SubSectionSumAggregateInputType
    _min?: SubSectionMinAggregateInputType
    _max?: SubSectionMaxAggregateInputType
  }

  export type SubSectionGroupByOutputType = {
    id: string
    name: string
    sectionId: string
    mustBeShuffle: boolean
    closedTasksToShuffle: number | null
    openTasksToShuffle: number | null
    _count: SubSectionCountAggregateOutputType | null
    _avg: SubSectionAvgAggregateOutputType | null
    _sum: SubSectionSumAggregateOutputType | null
    _min: SubSectionMinAggregateOutputType | null
    _max: SubSectionMaxAggregateOutputType | null
  }

  type GetSubSectionGroupByPayload<T extends SubSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubSectionGroupByOutputType[P]>
            : GetScalarType<T[P], SubSectionGroupByOutputType[P]>
        }
      >
    >


  export type SubSectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sectionId?: boolean
    mustBeShuffle?: boolean
    closedTasksToShuffle?: boolean
    openTasksToShuffle?: boolean
    section?: boolean | SectionDefaultArgs<ExtArgs>
    openTasks?: boolean | SubSection$openTasksArgs<ExtArgs>
    closedTasks?: boolean | SubSection$closedTasksArgs<ExtArgs>
    _count?: boolean | SubSectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subSection"]>

  export type SubSectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sectionId?: boolean
    mustBeShuffle?: boolean
    closedTasksToShuffle?: boolean
    openTasksToShuffle?: boolean
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subSection"]>

  export type SubSectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sectionId?: boolean
    mustBeShuffle?: boolean
    closedTasksToShuffle?: boolean
    openTasksToShuffle?: boolean
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subSection"]>

  export type SubSectionSelectScalar = {
    id?: boolean
    name?: boolean
    sectionId?: boolean
    mustBeShuffle?: boolean
    closedTasksToShuffle?: boolean
    openTasksToShuffle?: boolean
  }

  export type SubSectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "sectionId" | "mustBeShuffle" | "closedTasksToShuffle" | "openTasksToShuffle", ExtArgs["result"]["subSection"]>
  export type SubSectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | SectionDefaultArgs<ExtArgs>
    openTasks?: boolean | SubSection$openTasksArgs<ExtArgs>
    closedTasks?: boolean | SubSection$closedTasksArgs<ExtArgs>
    _count?: boolean | SubSectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubSectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }
  export type SubSectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }

  export type $SubSectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubSection"
    objects: {
      section: Prisma.$SectionPayload<ExtArgs>
      openTasks: Prisma.$OpenTasksPayload<ExtArgs>[]
      closedTasks: Prisma.$ClosedTasksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      sectionId: string
      mustBeShuffle: boolean
      closedTasksToShuffle: number | null
      openTasksToShuffle: number | null
    }, ExtArgs["result"]["subSection"]>
    composites: {}
  }

  type SubSectionGetPayload<S extends boolean | null | undefined | SubSectionDefaultArgs> = $Result.GetResult<Prisma.$SubSectionPayload, S>

  type SubSectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubSectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubSectionCountAggregateInputType | true
    }

  export interface SubSectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubSection'], meta: { name: 'SubSection' } }
    /**
     * Find zero or one SubSection that matches the filter.
     * @param {SubSectionFindUniqueArgs} args - Arguments to find a SubSection
     * @example
     * // Get one SubSection
     * const subSection = await prisma.subSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubSectionFindUniqueArgs>(args: SelectSubset<T, SubSectionFindUniqueArgs<ExtArgs>>): Prisma__SubSectionClient<$Result.GetResult<Prisma.$SubSectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubSection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubSectionFindUniqueOrThrowArgs} args - Arguments to find a SubSection
     * @example
     * // Get one SubSection
     * const subSection = await prisma.subSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubSectionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubSectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubSectionClient<$Result.GetResult<Prisma.$SubSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubSectionFindFirstArgs} args - Arguments to find a SubSection
     * @example
     * // Get one SubSection
     * const subSection = await prisma.subSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubSectionFindFirstArgs>(args?: SelectSubset<T, SubSectionFindFirstArgs<ExtArgs>>): Prisma__SubSectionClient<$Result.GetResult<Prisma.$SubSectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubSection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubSectionFindFirstOrThrowArgs} args - Arguments to find a SubSection
     * @example
     * // Get one SubSection
     * const subSection = await prisma.subSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubSectionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubSectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubSectionClient<$Result.GetResult<Prisma.$SubSectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubSectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubSections
     * const subSections = await prisma.subSection.findMany()
     * 
     * // Get first 10 SubSections
     * const subSections = await prisma.subSection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subSectionWithIdOnly = await prisma.subSection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubSectionFindManyArgs>(args?: SelectSubset<T, SubSectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubSection.
     * @param {SubSectionCreateArgs} args - Arguments to create a SubSection.
     * @example
     * // Create one SubSection
     * const SubSection = await prisma.subSection.create({
     *   data: {
     *     // ... data to create a SubSection
     *   }
     * })
     * 
     */
    create<T extends SubSectionCreateArgs>(args: SelectSubset<T, SubSectionCreateArgs<ExtArgs>>): Prisma__SubSectionClient<$Result.GetResult<Prisma.$SubSectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubSections.
     * @param {SubSectionCreateManyArgs} args - Arguments to create many SubSections.
     * @example
     * // Create many SubSections
     * const subSection = await prisma.subSection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubSectionCreateManyArgs>(args?: SelectSubset<T, SubSectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubSections and returns the data saved in the database.
     * @param {SubSectionCreateManyAndReturnArgs} args - Arguments to create many SubSections.
     * @example
     * // Create many SubSections
     * const subSection = await prisma.subSection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubSections and only return the `id`
     * const subSectionWithIdOnly = await prisma.subSection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubSectionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubSectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubSectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubSection.
     * @param {SubSectionDeleteArgs} args - Arguments to delete one SubSection.
     * @example
     * // Delete one SubSection
     * const SubSection = await prisma.subSection.delete({
     *   where: {
     *     // ... filter to delete one SubSection
     *   }
     * })
     * 
     */
    delete<T extends SubSectionDeleteArgs>(args: SelectSubset<T, SubSectionDeleteArgs<ExtArgs>>): Prisma__SubSectionClient<$Result.GetResult<Prisma.$SubSectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubSection.
     * @param {SubSectionUpdateArgs} args - Arguments to update one SubSection.
     * @example
     * // Update one SubSection
     * const subSection = await prisma.subSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubSectionUpdateArgs>(args: SelectSubset<T, SubSectionUpdateArgs<ExtArgs>>): Prisma__SubSectionClient<$Result.GetResult<Prisma.$SubSectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubSections.
     * @param {SubSectionDeleteManyArgs} args - Arguments to filter SubSections to delete.
     * @example
     * // Delete a few SubSections
     * const { count } = await prisma.subSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubSectionDeleteManyArgs>(args?: SelectSubset<T, SubSectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubSections
     * const subSection = await prisma.subSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubSectionUpdateManyArgs>(args: SelectSubset<T, SubSectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubSections and returns the data updated in the database.
     * @param {SubSectionUpdateManyAndReturnArgs} args - Arguments to update many SubSections.
     * @example
     * // Update many SubSections
     * const subSection = await prisma.subSection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubSections and only return the `id`
     * const subSectionWithIdOnly = await prisma.subSection.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubSectionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubSectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubSectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubSection.
     * @param {SubSectionUpsertArgs} args - Arguments to update or create a SubSection.
     * @example
     * // Update or create a SubSection
     * const subSection = await prisma.subSection.upsert({
     *   create: {
     *     // ... data to create a SubSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubSection we want to update
     *   }
     * })
     */
    upsert<T extends SubSectionUpsertArgs>(args: SelectSubset<T, SubSectionUpsertArgs<ExtArgs>>): Prisma__SubSectionClient<$Result.GetResult<Prisma.$SubSectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubSectionCountArgs} args - Arguments to filter SubSections to count.
     * @example
     * // Count the number of SubSections
     * const count = await prisma.subSection.count({
     *   where: {
     *     // ... the filter for the SubSections we want to count
     *   }
     * })
    **/
    count<T extends SubSectionCountArgs>(
      args?: Subset<T, SubSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubSectionAggregateArgs>(args: Subset<T, SubSectionAggregateArgs>): Prisma.PrismaPromise<GetSubSectionAggregateType<T>>

    /**
     * Group by SubSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubSectionGroupByArgs} args - Group by arguments.
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
      T extends SubSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubSectionGroupByArgs['orderBy'] }
        : { orderBy?: SubSectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubSection model
   */
  readonly fields: SubSectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubSectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    section<T extends SectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SectionDefaultArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    openTasks<T extends SubSection$openTasksArgs<ExtArgs> = {}>(args?: Subset<T, SubSection$openTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpenTasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    closedTasks<T extends SubSection$closedTasksArgs<ExtArgs> = {}>(args?: Subset<T, SubSection$closedTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClosedTasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SubSection model
   */
  interface SubSectionFieldRefs {
    readonly id: FieldRef<"SubSection", 'String'>
    readonly name: FieldRef<"SubSection", 'String'>
    readonly sectionId: FieldRef<"SubSection", 'String'>
    readonly mustBeShuffle: FieldRef<"SubSection", 'Boolean'>
    readonly closedTasksToShuffle: FieldRef<"SubSection", 'Int'>
    readonly openTasksToShuffle: FieldRef<"SubSection", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SubSection findUnique
   */
  export type SubSectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubSection
     */
    select?: SubSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubSection
     */
    omit?: SubSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubSectionInclude<ExtArgs> | null
    /**
     * Filter, which SubSection to fetch.
     */
    where: SubSectionWhereUniqueInput
  }

  /**
   * SubSection findUniqueOrThrow
   */
  export type SubSectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubSection
     */
    select?: SubSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubSection
     */
    omit?: SubSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubSectionInclude<ExtArgs> | null
    /**
     * Filter, which SubSection to fetch.
     */
    where: SubSectionWhereUniqueInput
  }

  /**
   * SubSection findFirst
   */
  export type SubSectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubSection
     */
    select?: SubSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubSection
     */
    omit?: SubSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubSectionInclude<ExtArgs> | null
    /**
     * Filter, which SubSection to fetch.
     */
    where?: SubSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubSections to fetch.
     */
    orderBy?: SubSectionOrderByWithRelationInput | SubSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubSections.
     */
    cursor?: SubSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubSections.
     */
    distinct?: SubSectionScalarFieldEnum | SubSectionScalarFieldEnum[]
  }

  /**
   * SubSection findFirstOrThrow
   */
  export type SubSectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubSection
     */
    select?: SubSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubSection
     */
    omit?: SubSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubSectionInclude<ExtArgs> | null
    /**
     * Filter, which SubSection to fetch.
     */
    where?: SubSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubSections to fetch.
     */
    orderBy?: SubSectionOrderByWithRelationInput | SubSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubSections.
     */
    cursor?: SubSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubSections.
     */
    distinct?: SubSectionScalarFieldEnum | SubSectionScalarFieldEnum[]
  }

  /**
   * SubSection findMany
   */
  export type SubSectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubSection
     */
    select?: SubSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubSection
     */
    omit?: SubSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubSectionInclude<ExtArgs> | null
    /**
     * Filter, which SubSections to fetch.
     */
    where?: SubSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubSections to fetch.
     */
    orderBy?: SubSectionOrderByWithRelationInput | SubSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubSections.
     */
    cursor?: SubSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubSections.
     */
    skip?: number
    distinct?: SubSectionScalarFieldEnum | SubSectionScalarFieldEnum[]
  }

  /**
   * SubSection create
   */
  export type SubSectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubSection
     */
    select?: SubSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubSection
     */
    omit?: SubSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubSectionInclude<ExtArgs> | null
    /**
     * The data needed to create a SubSection.
     */
    data: XOR<SubSectionCreateInput, SubSectionUncheckedCreateInput>
  }

  /**
   * SubSection createMany
   */
  export type SubSectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubSections.
     */
    data: SubSectionCreateManyInput | SubSectionCreateManyInput[]
  }

  /**
   * SubSection createManyAndReturn
   */
  export type SubSectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubSection
     */
    select?: SubSectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubSection
     */
    omit?: SubSectionOmit<ExtArgs> | null
    /**
     * The data used to create many SubSections.
     */
    data: SubSectionCreateManyInput | SubSectionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubSectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubSection update
   */
  export type SubSectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubSection
     */
    select?: SubSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubSection
     */
    omit?: SubSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubSectionInclude<ExtArgs> | null
    /**
     * The data needed to update a SubSection.
     */
    data: XOR<SubSectionUpdateInput, SubSectionUncheckedUpdateInput>
    /**
     * Choose, which SubSection to update.
     */
    where: SubSectionWhereUniqueInput
  }

  /**
   * SubSection updateMany
   */
  export type SubSectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubSections.
     */
    data: XOR<SubSectionUpdateManyMutationInput, SubSectionUncheckedUpdateManyInput>
    /**
     * Filter which SubSections to update
     */
    where?: SubSectionWhereInput
    /**
     * Limit how many SubSections to update.
     */
    limit?: number
  }

  /**
   * SubSection updateManyAndReturn
   */
  export type SubSectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubSection
     */
    select?: SubSectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubSection
     */
    omit?: SubSectionOmit<ExtArgs> | null
    /**
     * The data used to update SubSections.
     */
    data: XOR<SubSectionUpdateManyMutationInput, SubSectionUncheckedUpdateManyInput>
    /**
     * Filter which SubSections to update
     */
    where?: SubSectionWhereInput
    /**
     * Limit how many SubSections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubSectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubSection upsert
   */
  export type SubSectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubSection
     */
    select?: SubSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubSection
     */
    omit?: SubSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubSectionInclude<ExtArgs> | null
    /**
     * The filter to search for the SubSection to update in case it exists.
     */
    where: SubSectionWhereUniqueInput
    /**
     * In case the SubSection found by the `where` argument doesn't exist, create a new SubSection with this data.
     */
    create: XOR<SubSectionCreateInput, SubSectionUncheckedCreateInput>
    /**
     * In case the SubSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubSectionUpdateInput, SubSectionUncheckedUpdateInput>
  }

  /**
   * SubSection delete
   */
  export type SubSectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubSection
     */
    select?: SubSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubSection
     */
    omit?: SubSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubSectionInclude<ExtArgs> | null
    /**
     * Filter which SubSection to delete.
     */
    where: SubSectionWhereUniqueInput
  }

  /**
   * SubSection deleteMany
   */
  export type SubSectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubSections to delete
     */
    where?: SubSectionWhereInput
    /**
     * Limit how many SubSections to delete.
     */
    limit?: number
  }

  /**
   * SubSection.openTasks
   */
  export type SubSection$openTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpenTasks
     */
    select?: OpenTasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpenTasks
     */
    omit?: OpenTasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpenTasksInclude<ExtArgs> | null
    where?: OpenTasksWhereInput
    orderBy?: OpenTasksOrderByWithRelationInput | OpenTasksOrderByWithRelationInput[]
    cursor?: OpenTasksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OpenTasksScalarFieldEnum | OpenTasksScalarFieldEnum[]
  }

  /**
   * SubSection.closedTasks
   */
  export type SubSection$closedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedTasks
     */
    select?: ClosedTasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedTasks
     */
    omit?: ClosedTasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClosedTasksInclude<ExtArgs> | null
    where?: ClosedTasksWhereInput
    orderBy?: ClosedTasksOrderByWithRelationInput | ClosedTasksOrderByWithRelationInput[]
    cursor?: ClosedTasksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClosedTasksScalarFieldEnum | ClosedTasksScalarFieldEnum[]
  }

  /**
   * SubSection without action
   */
  export type SubSectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubSection
     */
    select?: SubSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubSection
     */
    omit?: SubSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubSectionInclude<ExtArgs> | null
  }


  /**
   * Model OpenTasks
   */

  export type AggregateOpenTasks = {
    _count: OpenTasksCountAggregateOutputType | null
    _avg: OpenTasksAvgAggregateOutputType | null
    _sum: OpenTasksSumAggregateOutputType | null
    _min: OpenTasksMinAggregateOutputType | null
    _max: OpenTasksMaxAggregateOutputType | null
  }

  export type OpenTasksAvgAggregateOutputType = {
    answer: number | null
  }

  export type OpenTasksSumAggregateOutputType = {
    answer: number | null
  }

  export type OpenTasksMinAggregateOutputType = {
    id: string | null
    name: string | null
    content: string | null
    answer: number | null
    subSectionId: string | null
    openTaskId: string | null
  }

  export type OpenTasksMaxAggregateOutputType = {
    id: string | null
    name: string | null
    content: string | null
    answer: number | null
    subSectionId: string | null
    openTaskId: string | null
  }

  export type OpenTasksCountAggregateOutputType = {
    id: number
    name: number
    content: number
    answer: number
    subSectionId: number
    openTaskId: number
    _all: number
  }


  export type OpenTasksAvgAggregateInputType = {
    answer?: true
  }

  export type OpenTasksSumAggregateInputType = {
    answer?: true
  }

  export type OpenTasksMinAggregateInputType = {
    id?: true
    name?: true
    content?: true
    answer?: true
    subSectionId?: true
    openTaskId?: true
  }

  export type OpenTasksMaxAggregateInputType = {
    id?: true
    name?: true
    content?: true
    answer?: true
    subSectionId?: true
    openTaskId?: true
  }

  export type OpenTasksCountAggregateInputType = {
    id?: true
    name?: true
    content?: true
    answer?: true
    subSectionId?: true
    openTaskId?: true
    _all?: true
  }

  export type OpenTasksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OpenTasks to aggregate.
     */
    where?: OpenTasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpenTasks to fetch.
     */
    orderBy?: OpenTasksOrderByWithRelationInput | OpenTasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OpenTasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpenTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpenTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OpenTasks
    **/
    _count?: true | OpenTasksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OpenTasksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OpenTasksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OpenTasksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OpenTasksMaxAggregateInputType
  }

  export type GetOpenTasksAggregateType<T extends OpenTasksAggregateArgs> = {
        [P in keyof T & keyof AggregateOpenTasks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOpenTasks[P]>
      : GetScalarType<T[P], AggregateOpenTasks[P]>
  }




  export type OpenTasksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpenTasksWhereInput
    orderBy?: OpenTasksOrderByWithAggregationInput | OpenTasksOrderByWithAggregationInput[]
    by: OpenTasksScalarFieldEnum[] | OpenTasksScalarFieldEnum
    having?: OpenTasksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OpenTasksCountAggregateInputType | true
    _avg?: OpenTasksAvgAggregateInputType
    _sum?: OpenTasksSumAggregateInputType
    _min?: OpenTasksMinAggregateInputType
    _max?: OpenTasksMaxAggregateInputType
  }

  export type OpenTasksGroupByOutputType = {
    id: string
    name: string
    content: string
    answer: number
    subSectionId: string
    openTaskId: string | null
    _count: OpenTasksCountAggregateOutputType | null
    _avg: OpenTasksAvgAggregateOutputType | null
    _sum: OpenTasksSumAggregateOutputType | null
    _min: OpenTasksMinAggregateOutputType | null
    _max: OpenTasksMaxAggregateOutputType | null
  }

  type GetOpenTasksGroupByPayload<T extends OpenTasksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OpenTasksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OpenTasksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OpenTasksGroupByOutputType[P]>
            : GetScalarType<T[P], OpenTasksGroupByOutputType[P]>
        }
      >
    >


  export type OpenTasksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    content?: boolean
    answer?: boolean
    subSectionId?: boolean
    openTaskId?: boolean
    subSection?: boolean | SubSectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["openTasks"]>

  export type OpenTasksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    content?: boolean
    answer?: boolean
    subSectionId?: boolean
    openTaskId?: boolean
    subSection?: boolean | SubSectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["openTasks"]>

  export type OpenTasksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    content?: boolean
    answer?: boolean
    subSectionId?: boolean
    openTaskId?: boolean
    subSection?: boolean | SubSectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["openTasks"]>

  export type OpenTasksSelectScalar = {
    id?: boolean
    name?: boolean
    content?: boolean
    answer?: boolean
    subSectionId?: boolean
    openTaskId?: boolean
  }

  export type OpenTasksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "content" | "answer" | "subSectionId" | "openTaskId", ExtArgs["result"]["openTasks"]>
  export type OpenTasksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subSection?: boolean | SubSectionDefaultArgs<ExtArgs>
  }
  export type OpenTasksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subSection?: boolean | SubSectionDefaultArgs<ExtArgs>
  }
  export type OpenTasksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subSection?: boolean | SubSectionDefaultArgs<ExtArgs>
  }

  export type $OpenTasksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OpenTasks"
    objects: {
      subSection: Prisma.$SubSectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      content: string
      answer: number
      subSectionId: string
      openTaskId: string | null
    }, ExtArgs["result"]["openTasks"]>
    composites: {}
  }

  type OpenTasksGetPayload<S extends boolean | null | undefined | OpenTasksDefaultArgs> = $Result.GetResult<Prisma.$OpenTasksPayload, S>

  type OpenTasksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OpenTasksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OpenTasksCountAggregateInputType | true
    }

  export interface OpenTasksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OpenTasks'], meta: { name: 'OpenTasks' } }
    /**
     * Find zero or one OpenTasks that matches the filter.
     * @param {OpenTasksFindUniqueArgs} args - Arguments to find a OpenTasks
     * @example
     * // Get one OpenTasks
     * const openTasks = await prisma.openTasks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OpenTasksFindUniqueArgs>(args: SelectSubset<T, OpenTasksFindUniqueArgs<ExtArgs>>): Prisma__OpenTasksClient<$Result.GetResult<Prisma.$OpenTasksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OpenTasks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OpenTasksFindUniqueOrThrowArgs} args - Arguments to find a OpenTasks
     * @example
     * // Get one OpenTasks
     * const openTasks = await prisma.openTasks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OpenTasksFindUniqueOrThrowArgs>(args: SelectSubset<T, OpenTasksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OpenTasksClient<$Result.GetResult<Prisma.$OpenTasksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OpenTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpenTasksFindFirstArgs} args - Arguments to find a OpenTasks
     * @example
     * // Get one OpenTasks
     * const openTasks = await prisma.openTasks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OpenTasksFindFirstArgs>(args?: SelectSubset<T, OpenTasksFindFirstArgs<ExtArgs>>): Prisma__OpenTasksClient<$Result.GetResult<Prisma.$OpenTasksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OpenTasks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpenTasksFindFirstOrThrowArgs} args - Arguments to find a OpenTasks
     * @example
     * // Get one OpenTasks
     * const openTasks = await prisma.openTasks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OpenTasksFindFirstOrThrowArgs>(args?: SelectSubset<T, OpenTasksFindFirstOrThrowArgs<ExtArgs>>): Prisma__OpenTasksClient<$Result.GetResult<Prisma.$OpenTasksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OpenTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpenTasksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OpenTasks
     * const openTasks = await prisma.openTasks.findMany()
     * 
     * // Get first 10 OpenTasks
     * const openTasks = await prisma.openTasks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const openTasksWithIdOnly = await prisma.openTasks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OpenTasksFindManyArgs>(args?: SelectSubset<T, OpenTasksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpenTasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OpenTasks.
     * @param {OpenTasksCreateArgs} args - Arguments to create a OpenTasks.
     * @example
     * // Create one OpenTasks
     * const OpenTasks = await prisma.openTasks.create({
     *   data: {
     *     // ... data to create a OpenTasks
     *   }
     * })
     * 
     */
    create<T extends OpenTasksCreateArgs>(args: SelectSubset<T, OpenTasksCreateArgs<ExtArgs>>): Prisma__OpenTasksClient<$Result.GetResult<Prisma.$OpenTasksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OpenTasks.
     * @param {OpenTasksCreateManyArgs} args - Arguments to create many OpenTasks.
     * @example
     * // Create many OpenTasks
     * const openTasks = await prisma.openTasks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OpenTasksCreateManyArgs>(args?: SelectSubset<T, OpenTasksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OpenTasks and returns the data saved in the database.
     * @param {OpenTasksCreateManyAndReturnArgs} args - Arguments to create many OpenTasks.
     * @example
     * // Create many OpenTasks
     * const openTasks = await prisma.openTasks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OpenTasks and only return the `id`
     * const openTasksWithIdOnly = await prisma.openTasks.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OpenTasksCreateManyAndReturnArgs>(args?: SelectSubset<T, OpenTasksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpenTasksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OpenTasks.
     * @param {OpenTasksDeleteArgs} args - Arguments to delete one OpenTasks.
     * @example
     * // Delete one OpenTasks
     * const OpenTasks = await prisma.openTasks.delete({
     *   where: {
     *     // ... filter to delete one OpenTasks
     *   }
     * })
     * 
     */
    delete<T extends OpenTasksDeleteArgs>(args: SelectSubset<T, OpenTasksDeleteArgs<ExtArgs>>): Prisma__OpenTasksClient<$Result.GetResult<Prisma.$OpenTasksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OpenTasks.
     * @param {OpenTasksUpdateArgs} args - Arguments to update one OpenTasks.
     * @example
     * // Update one OpenTasks
     * const openTasks = await prisma.openTasks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OpenTasksUpdateArgs>(args: SelectSubset<T, OpenTasksUpdateArgs<ExtArgs>>): Prisma__OpenTasksClient<$Result.GetResult<Prisma.$OpenTasksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OpenTasks.
     * @param {OpenTasksDeleteManyArgs} args - Arguments to filter OpenTasks to delete.
     * @example
     * // Delete a few OpenTasks
     * const { count } = await prisma.openTasks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OpenTasksDeleteManyArgs>(args?: SelectSubset<T, OpenTasksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OpenTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpenTasksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OpenTasks
     * const openTasks = await prisma.openTasks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OpenTasksUpdateManyArgs>(args: SelectSubset<T, OpenTasksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OpenTasks and returns the data updated in the database.
     * @param {OpenTasksUpdateManyAndReturnArgs} args - Arguments to update many OpenTasks.
     * @example
     * // Update many OpenTasks
     * const openTasks = await prisma.openTasks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OpenTasks and only return the `id`
     * const openTasksWithIdOnly = await prisma.openTasks.updateManyAndReturn({
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
    updateManyAndReturn<T extends OpenTasksUpdateManyAndReturnArgs>(args: SelectSubset<T, OpenTasksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpenTasksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OpenTasks.
     * @param {OpenTasksUpsertArgs} args - Arguments to update or create a OpenTasks.
     * @example
     * // Update or create a OpenTasks
     * const openTasks = await prisma.openTasks.upsert({
     *   create: {
     *     // ... data to create a OpenTasks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OpenTasks we want to update
     *   }
     * })
     */
    upsert<T extends OpenTasksUpsertArgs>(args: SelectSubset<T, OpenTasksUpsertArgs<ExtArgs>>): Prisma__OpenTasksClient<$Result.GetResult<Prisma.$OpenTasksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OpenTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpenTasksCountArgs} args - Arguments to filter OpenTasks to count.
     * @example
     * // Count the number of OpenTasks
     * const count = await prisma.openTasks.count({
     *   where: {
     *     // ... the filter for the OpenTasks we want to count
     *   }
     * })
    **/
    count<T extends OpenTasksCountArgs>(
      args?: Subset<T, OpenTasksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OpenTasksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OpenTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpenTasksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OpenTasksAggregateArgs>(args: Subset<T, OpenTasksAggregateArgs>): Prisma.PrismaPromise<GetOpenTasksAggregateType<T>>

    /**
     * Group by OpenTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpenTasksGroupByArgs} args - Group by arguments.
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
      T extends OpenTasksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OpenTasksGroupByArgs['orderBy'] }
        : { orderBy?: OpenTasksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OpenTasksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOpenTasksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OpenTasks model
   */
  readonly fields: OpenTasksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OpenTasks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OpenTasksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subSection<T extends SubSectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubSectionDefaultArgs<ExtArgs>>): Prisma__SubSectionClient<$Result.GetResult<Prisma.$SubSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OpenTasks model
   */
  interface OpenTasksFieldRefs {
    readonly id: FieldRef<"OpenTasks", 'String'>
    readonly name: FieldRef<"OpenTasks", 'String'>
    readonly content: FieldRef<"OpenTasks", 'String'>
    readonly answer: FieldRef<"OpenTasks", 'Int'>
    readonly subSectionId: FieldRef<"OpenTasks", 'String'>
    readonly openTaskId: FieldRef<"OpenTasks", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OpenTasks findUnique
   */
  export type OpenTasksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpenTasks
     */
    select?: OpenTasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpenTasks
     */
    omit?: OpenTasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpenTasksInclude<ExtArgs> | null
    /**
     * Filter, which OpenTasks to fetch.
     */
    where: OpenTasksWhereUniqueInput
  }

  /**
   * OpenTasks findUniqueOrThrow
   */
  export type OpenTasksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpenTasks
     */
    select?: OpenTasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpenTasks
     */
    omit?: OpenTasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpenTasksInclude<ExtArgs> | null
    /**
     * Filter, which OpenTasks to fetch.
     */
    where: OpenTasksWhereUniqueInput
  }

  /**
   * OpenTasks findFirst
   */
  export type OpenTasksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpenTasks
     */
    select?: OpenTasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpenTasks
     */
    omit?: OpenTasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpenTasksInclude<ExtArgs> | null
    /**
     * Filter, which OpenTasks to fetch.
     */
    where?: OpenTasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpenTasks to fetch.
     */
    orderBy?: OpenTasksOrderByWithRelationInput | OpenTasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OpenTasks.
     */
    cursor?: OpenTasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpenTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpenTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OpenTasks.
     */
    distinct?: OpenTasksScalarFieldEnum | OpenTasksScalarFieldEnum[]
  }

  /**
   * OpenTasks findFirstOrThrow
   */
  export type OpenTasksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpenTasks
     */
    select?: OpenTasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpenTasks
     */
    omit?: OpenTasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpenTasksInclude<ExtArgs> | null
    /**
     * Filter, which OpenTasks to fetch.
     */
    where?: OpenTasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpenTasks to fetch.
     */
    orderBy?: OpenTasksOrderByWithRelationInput | OpenTasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OpenTasks.
     */
    cursor?: OpenTasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpenTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpenTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OpenTasks.
     */
    distinct?: OpenTasksScalarFieldEnum | OpenTasksScalarFieldEnum[]
  }

  /**
   * OpenTasks findMany
   */
  export type OpenTasksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpenTasks
     */
    select?: OpenTasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpenTasks
     */
    omit?: OpenTasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpenTasksInclude<ExtArgs> | null
    /**
     * Filter, which OpenTasks to fetch.
     */
    where?: OpenTasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpenTasks to fetch.
     */
    orderBy?: OpenTasksOrderByWithRelationInput | OpenTasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OpenTasks.
     */
    cursor?: OpenTasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpenTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpenTasks.
     */
    skip?: number
    distinct?: OpenTasksScalarFieldEnum | OpenTasksScalarFieldEnum[]
  }

  /**
   * OpenTasks create
   */
  export type OpenTasksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpenTasks
     */
    select?: OpenTasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpenTasks
     */
    omit?: OpenTasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpenTasksInclude<ExtArgs> | null
    /**
     * The data needed to create a OpenTasks.
     */
    data: XOR<OpenTasksCreateInput, OpenTasksUncheckedCreateInput>
  }

  /**
   * OpenTasks createMany
   */
  export type OpenTasksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OpenTasks.
     */
    data: OpenTasksCreateManyInput | OpenTasksCreateManyInput[]
  }

  /**
   * OpenTasks createManyAndReturn
   */
  export type OpenTasksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpenTasks
     */
    select?: OpenTasksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OpenTasks
     */
    omit?: OpenTasksOmit<ExtArgs> | null
    /**
     * The data used to create many OpenTasks.
     */
    data: OpenTasksCreateManyInput | OpenTasksCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpenTasksIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OpenTasks update
   */
  export type OpenTasksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpenTasks
     */
    select?: OpenTasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpenTasks
     */
    omit?: OpenTasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpenTasksInclude<ExtArgs> | null
    /**
     * The data needed to update a OpenTasks.
     */
    data: XOR<OpenTasksUpdateInput, OpenTasksUncheckedUpdateInput>
    /**
     * Choose, which OpenTasks to update.
     */
    where: OpenTasksWhereUniqueInput
  }

  /**
   * OpenTasks updateMany
   */
  export type OpenTasksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OpenTasks.
     */
    data: XOR<OpenTasksUpdateManyMutationInput, OpenTasksUncheckedUpdateManyInput>
    /**
     * Filter which OpenTasks to update
     */
    where?: OpenTasksWhereInput
    /**
     * Limit how many OpenTasks to update.
     */
    limit?: number
  }

  /**
   * OpenTasks updateManyAndReturn
   */
  export type OpenTasksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpenTasks
     */
    select?: OpenTasksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OpenTasks
     */
    omit?: OpenTasksOmit<ExtArgs> | null
    /**
     * The data used to update OpenTasks.
     */
    data: XOR<OpenTasksUpdateManyMutationInput, OpenTasksUncheckedUpdateManyInput>
    /**
     * Filter which OpenTasks to update
     */
    where?: OpenTasksWhereInput
    /**
     * Limit how many OpenTasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpenTasksIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OpenTasks upsert
   */
  export type OpenTasksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpenTasks
     */
    select?: OpenTasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpenTasks
     */
    omit?: OpenTasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpenTasksInclude<ExtArgs> | null
    /**
     * The filter to search for the OpenTasks to update in case it exists.
     */
    where: OpenTasksWhereUniqueInput
    /**
     * In case the OpenTasks found by the `where` argument doesn't exist, create a new OpenTasks with this data.
     */
    create: XOR<OpenTasksCreateInput, OpenTasksUncheckedCreateInput>
    /**
     * In case the OpenTasks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OpenTasksUpdateInput, OpenTasksUncheckedUpdateInput>
  }

  /**
   * OpenTasks delete
   */
  export type OpenTasksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpenTasks
     */
    select?: OpenTasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpenTasks
     */
    omit?: OpenTasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpenTasksInclude<ExtArgs> | null
    /**
     * Filter which OpenTasks to delete.
     */
    where: OpenTasksWhereUniqueInput
  }

  /**
   * OpenTasks deleteMany
   */
  export type OpenTasksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OpenTasks to delete
     */
    where?: OpenTasksWhereInput
    /**
     * Limit how many OpenTasks to delete.
     */
    limit?: number
  }

  /**
   * OpenTasks without action
   */
  export type OpenTasksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpenTasks
     */
    select?: OpenTasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpenTasks
     */
    omit?: OpenTasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpenTasksInclude<ExtArgs> | null
  }


  /**
   * Model ClosedTasks
   */

  export type AggregateClosedTasks = {
    _count: ClosedTasksCountAggregateOutputType | null
    _min: ClosedTasksMinAggregateOutputType | null
    _max: ClosedTasksMaxAggregateOutputType | null
  }

  export type ClosedTasksMinAggregateOutputType = {
    id: string | null
    name: string | null
    content: string | null
    correctAnswer: string | null
    subSectionId: string | null
  }

  export type ClosedTasksMaxAggregateOutputType = {
    id: string | null
    name: string | null
    content: string | null
    correctAnswer: string | null
    subSectionId: string | null
  }

  export type ClosedTasksCountAggregateOutputType = {
    id: number
    name: number
    content: number
    correctAnswer: number
    subSectionId: number
    _all: number
  }


  export type ClosedTasksMinAggregateInputType = {
    id?: true
    name?: true
    content?: true
    correctAnswer?: true
    subSectionId?: true
  }

  export type ClosedTasksMaxAggregateInputType = {
    id?: true
    name?: true
    content?: true
    correctAnswer?: true
    subSectionId?: true
  }

  export type ClosedTasksCountAggregateInputType = {
    id?: true
    name?: true
    content?: true
    correctAnswer?: true
    subSectionId?: true
    _all?: true
  }

  export type ClosedTasksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClosedTasks to aggregate.
     */
    where?: ClosedTasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClosedTasks to fetch.
     */
    orderBy?: ClosedTasksOrderByWithRelationInput | ClosedTasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClosedTasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClosedTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClosedTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClosedTasks
    **/
    _count?: true | ClosedTasksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClosedTasksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClosedTasksMaxAggregateInputType
  }

  export type GetClosedTasksAggregateType<T extends ClosedTasksAggregateArgs> = {
        [P in keyof T & keyof AggregateClosedTasks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClosedTasks[P]>
      : GetScalarType<T[P], AggregateClosedTasks[P]>
  }




  export type ClosedTasksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClosedTasksWhereInput
    orderBy?: ClosedTasksOrderByWithAggregationInput | ClosedTasksOrderByWithAggregationInput[]
    by: ClosedTasksScalarFieldEnum[] | ClosedTasksScalarFieldEnum
    having?: ClosedTasksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClosedTasksCountAggregateInputType | true
    _min?: ClosedTasksMinAggregateInputType
    _max?: ClosedTasksMaxAggregateInputType
  }

  export type ClosedTasksGroupByOutputType = {
    id: string
    name: string
    content: string
    correctAnswer: string
    subSectionId: string
    _count: ClosedTasksCountAggregateOutputType | null
    _min: ClosedTasksMinAggregateOutputType | null
    _max: ClosedTasksMaxAggregateOutputType | null
  }

  type GetClosedTasksGroupByPayload<T extends ClosedTasksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClosedTasksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClosedTasksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClosedTasksGroupByOutputType[P]>
            : GetScalarType<T[P], ClosedTasksGroupByOutputType[P]>
        }
      >
    >


  export type ClosedTasksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    content?: boolean
    correctAnswer?: boolean
    subSectionId?: boolean
    answers?: boolean | ClosedTasks$answersArgs<ExtArgs>
    subSection?: boolean | SubSectionDefaultArgs<ExtArgs>
    _count?: boolean | ClosedTasksCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["closedTasks"]>

  export type ClosedTasksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    content?: boolean
    correctAnswer?: boolean
    subSectionId?: boolean
    subSection?: boolean | SubSectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["closedTasks"]>

  export type ClosedTasksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    content?: boolean
    correctAnswer?: boolean
    subSectionId?: boolean
    subSection?: boolean | SubSectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["closedTasks"]>

  export type ClosedTasksSelectScalar = {
    id?: boolean
    name?: boolean
    content?: boolean
    correctAnswer?: boolean
    subSectionId?: boolean
  }

  export type ClosedTasksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "content" | "correctAnswer" | "subSectionId", ExtArgs["result"]["closedTasks"]>
  export type ClosedTasksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | ClosedTasks$answersArgs<ExtArgs>
    subSection?: boolean | SubSectionDefaultArgs<ExtArgs>
    _count?: boolean | ClosedTasksCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClosedTasksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subSection?: boolean | SubSectionDefaultArgs<ExtArgs>
  }
  export type ClosedTasksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subSection?: boolean | SubSectionDefaultArgs<ExtArgs>
  }

  export type $ClosedTasksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClosedTasks"
    objects: {
      answers: Prisma.$AnswersPayload<ExtArgs>[]
      subSection: Prisma.$SubSectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      content: string
      correctAnswer: string
      subSectionId: string
    }, ExtArgs["result"]["closedTasks"]>
    composites: {}
  }

  type ClosedTasksGetPayload<S extends boolean | null | undefined | ClosedTasksDefaultArgs> = $Result.GetResult<Prisma.$ClosedTasksPayload, S>

  type ClosedTasksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClosedTasksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClosedTasksCountAggregateInputType | true
    }

  export interface ClosedTasksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClosedTasks'], meta: { name: 'ClosedTasks' } }
    /**
     * Find zero or one ClosedTasks that matches the filter.
     * @param {ClosedTasksFindUniqueArgs} args - Arguments to find a ClosedTasks
     * @example
     * // Get one ClosedTasks
     * const closedTasks = await prisma.closedTasks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClosedTasksFindUniqueArgs>(args: SelectSubset<T, ClosedTasksFindUniqueArgs<ExtArgs>>): Prisma__ClosedTasksClient<$Result.GetResult<Prisma.$ClosedTasksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClosedTasks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClosedTasksFindUniqueOrThrowArgs} args - Arguments to find a ClosedTasks
     * @example
     * // Get one ClosedTasks
     * const closedTasks = await prisma.closedTasks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClosedTasksFindUniqueOrThrowArgs>(args: SelectSubset<T, ClosedTasksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClosedTasksClient<$Result.GetResult<Prisma.$ClosedTasksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClosedTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClosedTasksFindFirstArgs} args - Arguments to find a ClosedTasks
     * @example
     * // Get one ClosedTasks
     * const closedTasks = await prisma.closedTasks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClosedTasksFindFirstArgs>(args?: SelectSubset<T, ClosedTasksFindFirstArgs<ExtArgs>>): Prisma__ClosedTasksClient<$Result.GetResult<Prisma.$ClosedTasksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClosedTasks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClosedTasksFindFirstOrThrowArgs} args - Arguments to find a ClosedTasks
     * @example
     * // Get one ClosedTasks
     * const closedTasks = await prisma.closedTasks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClosedTasksFindFirstOrThrowArgs>(args?: SelectSubset<T, ClosedTasksFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClosedTasksClient<$Result.GetResult<Prisma.$ClosedTasksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClosedTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClosedTasksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClosedTasks
     * const closedTasks = await prisma.closedTasks.findMany()
     * 
     * // Get first 10 ClosedTasks
     * const closedTasks = await prisma.closedTasks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const closedTasksWithIdOnly = await prisma.closedTasks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClosedTasksFindManyArgs>(args?: SelectSubset<T, ClosedTasksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClosedTasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClosedTasks.
     * @param {ClosedTasksCreateArgs} args - Arguments to create a ClosedTasks.
     * @example
     * // Create one ClosedTasks
     * const ClosedTasks = await prisma.closedTasks.create({
     *   data: {
     *     // ... data to create a ClosedTasks
     *   }
     * })
     * 
     */
    create<T extends ClosedTasksCreateArgs>(args: SelectSubset<T, ClosedTasksCreateArgs<ExtArgs>>): Prisma__ClosedTasksClient<$Result.GetResult<Prisma.$ClosedTasksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClosedTasks.
     * @param {ClosedTasksCreateManyArgs} args - Arguments to create many ClosedTasks.
     * @example
     * // Create many ClosedTasks
     * const closedTasks = await prisma.closedTasks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClosedTasksCreateManyArgs>(args?: SelectSubset<T, ClosedTasksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClosedTasks and returns the data saved in the database.
     * @param {ClosedTasksCreateManyAndReturnArgs} args - Arguments to create many ClosedTasks.
     * @example
     * // Create many ClosedTasks
     * const closedTasks = await prisma.closedTasks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClosedTasks and only return the `id`
     * const closedTasksWithIdOnly = await prisma.closedTasks.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClosedTasksCreateManyAndReturnArgs>(args?: SelectSubset<T, ClosedTasksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClosedTasksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClosedTasks.
     * @param {ClosedTasksDeleteArgs} args - Arguments to delete one ClosedTasks.
     * @example
     * // Delete one ClosedTasks
     * const ClosedTasks = await prisma.closedTasks.delete({
     *   where: {
     *     // ... filter to delete one ClosedTasks
     *   }
     * })
     * 
     */
    delete<T extends ClosedTasksDeleteArgs>(args: SelectSubset<T, ClosedTasksDeleteArgs<ExtArgs>>): Prisma__ClosedTasksClient<$Result.GetResult<Prisma.$ClosedTasksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClosedTasks.
     * @param {ClosedTasksUpdateArgs} args - Arguments to update one ClosedTasks.
     * @example
     * // Update one ClosedTasks
     * const closedTasks = await prisma.closedTasks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClosedTasksUpdateArgs>(args: SelectSubset<T, ClosedTasksUpdateArgs<ExtArgs>>): Prisma__ClosedTasksClient<$Result.GetResult<Prisma.$ClosedTasksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClosedTasks.
     * @param {ClosedTasksDeleteManyArgs} args - Arguments to filter ClosedTasks to delete.
     * @example
     * // Delete a few ClosedTasks
     * const { count } = await prisma.closedTasks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClosedTasksDeleteManyArgs>(args?: SelectSubset<T, ClosedTasksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClosedTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClosedTasksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClosedTasks
     * const closedTasks = await prisma.closedTasks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClosedTasksUpdateManyArgs>(args: SelectSubset<T, ClosedTasksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClosedTasks and returns the data updated in the database.
     * @param {ClosedTasksUpdateManyAndReturnArgs} args - Arguments to update many ClosedTasks.
     * @example
     * // Update many ClosedTasks
     * const closedTasks = await prisma.closedTasks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClosedTasks and only return the `id`
     * const closedTasksWithIdOnly = await prisma.closedTasks.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClosedTasksUpdateManyAndReturnArgs>(args: SelectSubset<T, ClosedTasksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClosedTasksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClosedTasks.
     * @param {ClosedTasksUpsertArgs} args - Arguments to update or create a ClosedTasks.
     * @example
     * // Update or create a ClosedTasks
     * const closedTasks = await prisma.closedTasks.upsert({
     *   create: {
     *     // ... data to create a ClosedTasks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClosedTasks we want to update
     *   }
     * })
     */
    upsert<T extends ClosedTasksUpsertArgs>(args: SelectSubset<T, ClosedTasksUpsertArgs<ExtArgs>>): Prisma__ClosedTasksClient<$Result.GetResult<Prisma.$ClosedTasksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClosedTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClosedTasksCountArgs} args - Arguments to filter ClosedTasks to count.
     * @example
     * // Count the number of ClosedTasks
     * const count = await prisma.closedTasks.count({
     *   where: {
     *     // ... the filter for the ClosedTasks we want to count
     *   }
     * })
    **/
    count<T extends ClosedTasksCountArgs>(
      args?: Subset<T, ClosedTasksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClosedTasksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClosedTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClosedTasksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClosedTasksAggregateArgs>(args: Subset<T, ClosedTasksAggregateArgs>): Prisma.PrismaPromise<GetClosedTasksAggregateType<T>>

    /**
     * Group by ClosedTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClosedTasksGroupByArgs} args - Group by arguments.
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
      T extends ClosedTasksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClosedTasksGroupByArgs['orderBy'] }
        : { orderBy?: ClosedTasksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClosedTasksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClosedTasksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClosedTasks model
   */
  readonly fields: ClosedTasksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClosedTasks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClosedTasksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    answers<T extends ClosedTasks$answersArgs<ExtArgs> = {}>(args?: Subset<T, ClosedTasks$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subSection<T extends SubSectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubSectionDefaultArgs<ExtArgs>>): Prisma__SubSectionClient<$Result.GetResult<Prisma.$SubSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ClosedTasks model
   */
  interface ClosedTasksFieldRefs {
    readonly id: FieldRef<"ClosedTasks", 'String'>
    readonly name: FieldRef<"ClosedTasks", 'String'>
    readonly content: FieldRef<"ClosedTasks", 'String'>
    readonly correctAnswer: FieldRef<"ClosedTasks", 'String'>
    readonly subSectionId: FieldRef<"ClosedTasks", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ClosedTasks findUnique
   */
  export type ClosedTasksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedTasks
     */
    select?: ClosedTasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedTasks
     */
    omit?: ClosedTasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClosedTasksInclude<ExtArgs> | null
    /**
     * Filter, which ClosedTasks to fetch.
     */
    where: ClosedTasksWhereUniqueInput
  }

  /**
   * ClosedTasks findUniqueOrThrow
   */
  export type ClosedTasksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedTasks
     */
    select?: ClosedTasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedTasks
     */
    omit?: ClosedTasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClosedTasksInclude<ExtArgs> | null
    /**
     * Filter, which ClosedTasks to fetch.
     */
    where: ClosedTasksWhereUniqueInput
  }

  /**
   * ClosedTasks findFirst
   */
  export type ClosedTasksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedTasks
     */
    select?: ClosedTasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedTasks
     */
    omit?: ClosedTasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClosedTasksInclude<ExtArgs> | null
    /**
     * Filter, which ClosedTasks to fetch.
     */
    where?: ClosedTasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClosedTasks to fetch.
     */
    orderBy?: ClosedTasksOrderByWithRelationInput | ClosedTasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClosedTasks.
     */
    cursor?: ClosedTasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClosedTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClosedTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClosedTasks.
     */
    distinct?: ClosedTasksScalarFieldEnum | ClosedTasksScalarFieldEnum[]
  }

  /**
   * ClosedTasks findFirstOrThrow
   */
  export type ClosedTasksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedTasks
     */
    select?: ClosedTasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedTasks
     */
    omit?: ClosedTasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClosedTasksInclude<ExtArgs> | null
    /**
     * Filter, which ClosedTasks to fetch.
     */
    where?: ClosedTasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClosedTasks to fetch.
     */
    orderBy?: ClosedTasksOrderByWithRelationInput | ClosedTasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClosedTasks.
     */
    cursor?: ClosedTasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClosedTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClosedTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClosedTasks.
     */
    distinct?: ClosedTasksScalarFieldEnum | ClosedTasksScalarFieldEnum[]
  }

  /**
   * ClosedTasks findMany
   */
  export type ClosedTasksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedTasks
     */
    select?: ClosedTasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedTasks
     */
    omit?: ClosedTasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClosedTasksInclude<ExtArgs> | null
    /**
     * Filter, which ClosedTasks to fetch.
     */
    where?: ClosedTasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClosedTasks to fetch.
     */
    orderBy?: ClosedTasksOrderByWithRelationInput | ClosedTasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClosedTasks.
     */
    cursor?: ClosedTasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClosedTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClosedTasks.
     */
    skip?: number
    distinct?: ClosedTasksScalarFieldEnum | ClosedTasksScalarFieldEnum[]
  }

  /**
   * ClosedTasks create
   */
  export type ClosedTasksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedTasks
     */
    select?: ClosedTasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedTasks
     */
    omit?: ClosedTasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClosedTasksInclude<ExtArgs> | null
    /**
     * The data needed to create a ClosedTasks.
     */
    data: XOR<ClosedTasksCreateInput, ClosedTasksUncheckedCreateInput>
  }

  /**
   * ClosedTasks createMany
   */
  export type ClosedTasksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClosedTasks.
     */
    data: ClosedTasksCreateManyInput | ClosedTasksCreateManyInput[]
  }

  /**
   * ClosedTasks createManyAndReturn
   */
  export type ClosedTasksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedTasks
     */
    select?: ClosedTasksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedTasks
     */
    omit?: ClosedTasksOmit<ExtArgs> | null
    /**
     * The data used to create many ClosedTasks.
     */
    data: ClosedTasksCreateManyInput | ClosedTasksCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClosedTasksIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClosedTasks update
   */
  export type ClosedTasksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedTasks
     */
    select?: ClosedTasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedTasks
     */
    omit?: ClosedTasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClosedTasksInclude<ExtArgs> | null
    /**
     * The data needed to update a ClosedTasks.
     */
    data: XOR<ClosedTasksUpdateInput, ClosedTasksUncheckedUpdateInput>
    /**
     * Choose, which ClosedTasks to update.
     */
    where: ClosedTasksWhereUniqueInput
  }

  /**
   * ClosedTasks updateMany
   */
  export type ClosedTasksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClosedTasks.
     */
    data: XOR<ClosedTasksUpdateManyMutationInput, ClosedTasksUncheckedUpdateManyInput>
    /**
     * Filter which ClosedTasks to update
     */
    where?: ClosedTasksWhereInput
    /**
     * Limit how many ClosedTasks to update.
     */
    limit?: number
  }

  /**
   * ClosedTasks updateManyAndReturn
   */
  export type ClosedTasksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedTasks
     */
    select?: ClosedTasksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedTasks
     */
    omit?: ClosedTasksOmit<ExtArgs> | null
    /**
     * The data used to update ClosedTasks.
     */
    data: XOR<ClosedTasksUpdateManyMutationInput, ClosedTasksUncheckedUpdateManyInput>
    /**
     * Filter which ClosedTasks to update
     */
    where?: ClosedTasksWhereInput
    /**
     * Limit how many ClosedTasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClosedTasksIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClosedTasks upsert
   */
  export type ClosedTasksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedTasks
     */
    select?: ClosedTasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedTasks
     */
    omit?: ClosedTasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClosedTasksInclude<ExtArgs> | null
    /**
     * The filter to search for the ClosedTasks to update in case it exists.
     */
    where: ClosedTasksWhereUniqueInput
    /**
     * In case the ClosedTasks found by the `where` argument doesn't exist, create a new ClosedTasks with this data.
     */
    create: XOR<ClosedTasksCreateInput, ClosedTasksUncheckedCreateInput>
    /**
     * In case the ClosedTasks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClosedTasksUpdateInput, ClosedTasksUncheckedUpdateInput>
  }

  /**
   * ClosedTasks delete
   */
  export type ClosedTasksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedTasks
     */
    select?: ClosedTasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedTasks
     */
    omit?: ClosedTasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClosedTasksInclude<ExtArgs> | null
    /**
     * Filter which ClosedTasks to delete.
     */
    where: ClosedTasksWhereUniqueInput
  }

  /**
   * ClosedTasks deleteMany
   */
  export type ClosedTasksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClosedTasks to delete
     */
    where?: ClosedTasksWhereInput
    /**
     * Limit how many ClosedTasks to delete.
     */
    limit?: number
  }

  /**
   * ClosedTasks.answers
   */
  export type ClosedTasks$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answers
     */
    select?: AnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answers
     */
    omit?: AnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswersInclude<ExtArgs> | null
    where?: AnswersWhereInput
    orderBy?: AnswersOrderByWithRelationInput | AnswersOrderByWithRelationInput[]
    cursor?: AnswersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswersScalarFieldEnum | AnswersScalarFieldEnum[]
  }

  /**
   * ClosedTasks without action
   */
  export type ClosedTasksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedTasks
     */
    select?: ClosedTasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedTasks
     */
    omit?: ClosedTasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClosedTasksInclude<ExtArgs> | null
  }


  /**
   * Model Answers
   */

  export type AggregateAnswers = {
    _count: AnswersCountAggregateOutputType | null
    _min: AnswersMinAggregateOutputType | null
    _max: AnswersMaxAggregateOutputType | null
  }

  export type AnswersMinAggregateOutputType = {
    id: string | null
    A: string | null
    B: string | null
    C: string | null
    D: string | null
    closedTaskId: string | null
  }

  export type AnswersMaxAggregateOutputType = {
    id: string | null
    A: string | null
    B: string | null
    C: string | null
    D: string | null
    closedTaskId: string | null
  }

  export type AnswersCountAggregateOutputType = {
    id: number
    A: number
    B: number
    C: number
    D: number
    closedTaskId: number
    _all: number
  }


  export type AnswersMinAggregateInputType = {
    id?: true
    A?: true
    B?: true
    C?: true
    D?: true
    closedTaskId?: true
  }

  export type AnswersMaxAggregateInputType = {
    id?: true
    A?: true
    B?: true
    C?: true
    D?: true
    closedTaskId?: true
  }

  export type AnswersCountAggregateInputType = {
    id?: true
    A?: true
    B?: true
    C?: true
    D?: true
    closedTaskId?: true
    _all?: true
  }

  export type AnswersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answers to aggregate.
     */
    where?: AnswersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswersOrderByWithRelationInput | AnswersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnswersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Answers
    **/
    _count?: true | AnswersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnswersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnswersMaxAggregateInputType
  }

  export type GetAnswersAggregateType<T extends AnswersAggregateArgs> = {
        [P in keyof T & keyof AggregateAnswers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswers[P]>
      : GetScalarType<T[P], AggregateAnswers[P]>
  }




  export type AnswersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswersWhereInput
    orderBy?: AnswersOrderByWithAggregationInput | AnswersOrderByWithAggregationInput[]
    by: AnswersScalarFieldEnum[] | AnswersScalarFieldEnum
    having?: AnswersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnswersCountAggregateInputType | true
    _min?: AnswersMinAggregateInputType
    _max?: AnswersMaxAggregateInputType
  }

  export type AnswersGroupByOutputType = {
    id: string
    A: string
    B: string
    C: string
    D: string
    closedTaskId: string
    _count: AnswersCountAggregateOutputType | null
    _min: AnswersMinAggregateOutputType | null
    _max: AnswersMaxAggregateOutputType | null
  }

  type GetAnswersGroupByPayload<T extends AnswersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnswersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnswersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnswersGroupByOutputType[P]>
            : GetScalarType<T[P], AnswersGroupByOutputType[P]>
        }
      >
    >


  export type AnswersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    A?: boolean
    B?: boolean
    C?: boolean
    D?: boolean
    closedTaskId?: boolean
    closedTask?: boolean | ClosedTasksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answers"]>

  export type AnswersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    A?: boolean
    B?: boolean
    C?: boolean
    D?: boolean
    closedTaskId?: boolean
    closedTask?: boolean | ClosedTasksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answers"]>

  export type AnswersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    A?: boolean
    B?: boolean
    C?: boolean
    D?: boolean
    closedTaskId?: boolean
    closedTask?: boolean | ClosedTasksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answers"]>

  export type AnswersSelectScalar = {
    id?: boolean
    A?: boolean
    B?: boolean
    C?: boolean
    D?: boolean
    closedTaskId?: boolean
  }

  export type AnswersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "A" | "B" | "C" | "D" | "closedTaskId", ExtArgs["result"]["answers"]>
  export type AnswersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    closedTask?: boolean | ClosedTasksDefaultArgs<ExtArgs>
  }
  export type AnswersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    closedTask?: boolean | ClosedTasksDefaultArgs<ExtArgs>
  }
  export type AnswersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    closedTask?: boolean | ClosedTasksDefaultArgs<ExtArgs>
  }

  export type $AnswersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Answers"
    objects: {
      closedTask: Prisma.$ClosedTasksPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      A: string
      B: string
      C: string
      D: string
      closedTaskId: string
    }, ExtArgs["result"]["answers"]>
    composites: {}
  }

  type AnswersGetPayload<S extends boolean | null | undefined | AnswersDefaultArgs> = $Result.GetResult<Prisma.$AnswersPayload, S>

  type AnswersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnswersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnswersCountAggregateInputType | true
    }

  export interface AnswersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Answers'], meta: { name: 'Answers' } }
    /**
     * Find zero or one Answers that matches the filter.
     * @param {AnswersFindUniqueArgs} args - Arguments to find a Answers
     * @example
     * // Get one Answers
     * const answers = await prisma.answers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnswersFindUniqueArgs>(args: SelectSubset<T, AnswersFindUniqueArgs<ExtArgs>>): Prisma__AnswersClient<$Result.GetResult<Prisma.$AnswersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Answers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnswersFindUniqueOrThrowArgs} args - Arguments to find a Answers
     * @example
     * // Get one Answers
     * const answers = await prisma.answers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnswersFindUniqueOrThrowArgs>(args: SelectSubset<T, AnswersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnswersClient<$Result.GetResult<Prisma.$AnswersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswersFindFirstArgs} args - Arguments to find a Answers
     * @example
     * // Get one Answers
     * const answers = await prisma.answers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnswersFindFirstArgs>(args?: SelectSubset<T, AnswersFindFirstArgs<ExtArgs>>): Prisma__AnswersClient<$Result.GetResult<Prisma.$AnswersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswersFindFirstOrThrowArgs} args - Arguments to find a Answers
     * @example
     * // Get one Answers
     * const answers = await prisma.answers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnswersFindFirstOrThrowArgs>(args?: SelectSubset<T, AnswersFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnswersClient<$Result.GetResult<Prisma.$AnswersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Answers
     * const answers = await prisma.answers.findMany()
     * 
     * // Get first 10 Answers
     * const answers = await prisma.answers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const answersWithIdOnly = await prisma.answers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnswersFindManyArgs>(args?: SelectSubset<T, AnswersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Answers.
     * @param {AnswersCreateArgs} args - Arguments to create a Answers.
     * @example
     * // Create one Answers
     * const Answers = await prisma.answers.create({
     *   data: {
     *     // ... data to create a Answers
     *   }
     * })
     * 
     */
    create<T extends AnswersCreateArgs>(args: SelectSubset<T, AnswersCreateArgs<ExtArgs>>): Prisma__AnswersClient<$Result.GetResult<Prisma.$AnswersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Answers.
     * @param {AnswersCreateManyArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answers = await prisma.answers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnswersCreateManyArgs>(args?: SelectSubset<T, AnswersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Answers and returns the data saved in the database.
     * @param {AnswersCreateManyAndReturnArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answers = await prisma.answers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Answers and only return the `id`
     * const answersWithIdOnly = await prisma.answers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnswersCreateManyAndReturnArgs>(args?: SelectSubset<T, AnswersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Answers.
     * @param {AnswersDeleteArgs} args - Arguments to delete one Answers.
     * @example
     * // Delete one Answers
     * const Answers = await prisma.answers.delete({
     *   where: {
     *     // ... filter to delete one Answers
     *   }
     * })
     * 
     */
    delete<T extends AnswersDeleteArgs>(args: SelectSubset<T, AnswersDeleteArgs<ExtArgs>>): Prisma__AnswersClient<$Result.GetResult<Prisma.$AnswersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Answers.
     * @param {AnswersUpdateArgs} args - Arguments to update one Answers.
     * @example
     * // Update one Answers
     * const answers = await prisma.answers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnswersUpdateArgs>(args: SelectSubset<T, AnswersUpdateArgs<ExtArgs>>): Prisma__AnswersClient<$Result.GetResult<Prisma.$AnswersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Answers.
     * @param {AnswersDeleteManyArgs} args - Arguments to filter Answers to delete.
     * @example
     * // Delete a few Answers
     * const { count } = await prisma.answers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnswersDeleteManyArgs>(args?: SelectSubset<T, AnswersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Answers
     * const answers = await prisma.answers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnswersUpdateManyArgs>(args: SelectSubset<T, AnswersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers and returns the data updated in the database.
     * @param {AnswersUpdateManyAndReturnArgs} args - Arguments to update many Answers.
     * @example
     * // Update many Answers
     * const answers = await prisma.answers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Answers and only return the `id`
     * const answersWithIdOnly = await prisma.answers.updateManyAndReturn({
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
    updateManyAndReturn<T extends AnswersUpdateManyAndReturnArgs>(args: SelectSubset<T, AnswersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Answers.
     * @param {AnswersUpsertArgs} args - Arguments to update or create a Answers.
     * @example
     * // Update or create a Answers
     * const answers = await prisma.answers.upsert({
     *   create: {
     *     // ... data to create a Answers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Answers we want to update
     *   }
     * })
     */
    upsert<T extends AnswersUpsertArgs>(args: SelectSubset<T, AnswersUpsertArgs<ExtArgs>>): Prisma__AnswersClient<$Result.GetResult<Prisma.$AnswersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswersCountArgs} args - Arguments to filter Answers to count.
     * @example
     * // Count the number of Answers
     * const count = await prisma.answers.count({
     *   where: {
     *     // ... the filter for the Answers we want to count
     *   }
     * })
    **/
    count<T extends AnswersCountArgs>(
      args?: Subset<T, AnswersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnswersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnswersAggregateArgs>(args: Subset<T, AnswersAggregateArgs>): Prisma.PrismaPromise<GetAnswersAggregateType<T>>

    /**
     * Group by Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswersGroupByArgs} args - Group by arguments.
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
      T extends AnswersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnswersGroupByArgs['orderBy'] }
        : { orderBy?: AnswersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnswersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Answers model
   */
  readonly fields: AnswersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Answers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnswersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    closedTask<T extends ClosedTasksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClosedTasksDefaultArgs<ExtArgs>>): Prisma__ClosedTasksClient<$Result.GetResult<Prisma.$ClosedTasksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Answers model
   */
  interface AnswersFieldRefs {
    readonly id: FieldRef<"Answers", 'String'>
    readonly A: FieldRef<"Answers", 'String'>
    readonly B: FieldRef<"Answers", 'String'>
    readonly C: FieldRef<"Answers", 'String'>
    readonly D: FieldRef<"Answers", 'String'>
    readonly closedTaskId: FieldRef<"Answers", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Answers findUnique
   */
  export type AnswersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answers
     */
    select?: AnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answers
     */
    omit?: AnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswersInclude<ExtArgs> | null
    /**
     * Filter, which Answers to fetch.
     */
    where: AnswersWhereUniqueInput
  }

  /**
   * Answers findUniqueOrThrow
   */
  export type AnswersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answers
     */
    select?: AnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answers
     */
    omit?: AnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswersInclude<ExtArgs> | null
    /**
     * Filter, which Answers to fetch.
     */
    where: AnswersWhereUniqueInput
  }

  /**
   * Answers findFirst
   */
  export type AnswersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answers
     */
    select?: AnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answers
     */
    omit?: AnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswersInclude<ExtArgs> | null
    /**
     * Filter, which Answers to fetch.
     */
    where?: AnswersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswersOrderByWithRelationInput | AnswersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswersScalarFieldEnum | AnswersScalarFieldEnum[]
  }

  /**
   * Answers findFirstOrThrow
   */
  export type AnswersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answers
     */
    select?: AnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answers
     */
    omit?: AnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswersInclude<ExtArgs> | null
    /**
     * Filter, which Answers to fetch.
     */
    where?: AnswersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswersOrderByWithRelationInput | AnswersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswersScalarFieldEnum | AnswersScalarFieldEnum[]
  }

  /**
   * Answers findMany
   */
  export type AnswersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answers
     */
    select?: AnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answers
     */
    omit?: AnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswersInclude<ExtArgs> | null
    /**
     * Filter, which Answers to fetch.
     */
    where?: AnswersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswersOrderByWithRelationInput | AnswersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Answers.
     */
    cursor?: AnswersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    distinct?: AnswersScalarFieldEnum | AnswersScalarFieldEnum[]
  }

  /**
   * Answers create
   */
  export type AnswersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answers
     */
    select?: AnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answers
     */
    omit?: AnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswersInclude<ExtArgs> | null
    /**
     * The data needed to create a Answers.
     */
    data: XOR<AnswersCreateInput, AnswersUncheckedCreateInput>
  }

  /**
   * Answers createMany
   */
  export type AnswersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Answers.
     */
    data: AnswersCreateManyInput | AnswersCreateManyInput[]
  }

  /**
   * Answers createManyAndReturn
   */
  export type AnswersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answers
     */
    select?: AnswersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Answers
     */
    omit?: AnswersOmit<ExtArgs> | null
    /**
     * The data used to create many Answers.
     */
    data: AnswersCreateManyInput | AnswersCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answers update
   */
  export type AnswersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answers
     */
    select?: AnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answers
     */
    omit?: AnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswersInclude<ExtArgs> | null
    /**
     * The data needed to update a Answers.
     */
    data: XOR<AnswersUpdateInput, AnswersUncheckedUpdateInput>
    /**
     * Choose, which Answers to update.
     */
    where: AnswersWhereUniqueInput
  }

  /**
   * Answers updateMany
   */
  export type AnswersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswersUpdateManyMutationInput, AnswersUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswersWhereInput
    /**
     * Limit how many Answers to update.
     */
    limit?: number
  }

  /**
   * Answers updateManyAndReturn
   */
  export type AnswersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answers
     */
    select?: AnswersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Answers
     */
    omit?: AnswersOmit<ExtArgs> | null
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswersUpdateManyMutationInput, AnswersUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswersWhereInput
    /**
     * Limit how many Answers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answers upsert
   */
  export type AnswersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answers
     */
    select?: AnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answers
     */
    omit?: AnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswersInclude<ExtArgs> | null
    /**
     * The filter to search for the Answers to update in case it exists.
     */
    where: AnswersWhereUniqueInput
    /**
     * In case the Answers found by the `where` argument doesn't exist, create a new Answers with this data.
     */
    create: XOR<AnswersCreateInput, AnswersUncheckedCreateInput>
    /**
     * In case the Answers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnswersUpdateInput, AnswersUncheckedUpdateInput>
  }

  /**
   * Answers delete
   */
  export type AnswersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answers
     */
    select?: AnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answers
     */
    omit?: AnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswersInclude<ExtArgs> | null
    /**
     * Filter which Answers to delete.
     */
    where: AnswersWhereUniqueInput
  }

  /**
   * Answers deleteMany
   */
  export type AnswersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answers to delete
     */
    where?: AnswersWhereInput
    /**
     * Limit how many Answers to delete.
     */
    limit?: number
  }

  /**
   * Answers without action
   */
  export type AnswersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answers
     */
    select?: AnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answers
     */
    omit?: AnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswersInclude<ExtArgs> | null
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


  export const VideoScalarFieldEnum: {
    id: 'id',
    url: 'url'
  };

  export type VideoScalarFieldEnum = (typeof VideoScalarFieldEnum)[keyof typeof VideoScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    text: 'text',
    videoId: 'videoId',
    time: 'time',
    userId: 'userId'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const AnswerScalarFieldEnum: {
    id: 'id',
    text: 'text',
    questionId: 'questionId'
  };

  export type AnswerScalarFieldEnum = (typeof AnswerScalarFieldEnum)[keyof typeof AnswerScalarFieldEnum]


  export const AlltasksScalarFieldEnum: {
    id: 'id'
  };

  export type AlltasksScalarFieldEnum = (typeof AlltasksScalarFieldEnum)[keyof typeof AlltasksScalarFieldEnum]


  export const SectionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    alltasksId: 'alltasksId'
  };

  export type SectionScalarFieldEnum = (typeof SectionScalarFieldEnum)[keyof typeof SectionScalarFieldEnum]


  export const SubSectionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    sectionId: 'sectionId',
    mustBeShuffle: 'mustBeShuffle',
    closedTasksToShuffle: 'closedTasksToShuffle',
    openTasksToShuffle: 'openTasksToShuffle'
  };

  export type SubSectionScalarFieldEnum = (typeof SubSectionScalarFieldEnum)[keyof typeof SubSectionScalarFieldEnum]


  export const OpenTasksScalarFieldEnum: {
    id: 'id',
    name: 'name',
    content: 'content',
    answer: 'answer',
    subSectionId: 'subSectionId',
    openTaskId: 'openTaskId'
  };

  export type OpenTasksScalarFieldEnum = (typeof OpenTasksScalarFieldEnum)[keyof typeof OpenTasksScalarFieldEnum]


  export const ClosedTasksScalarFieldEnum: {
    id: 'id',
    name: 'name',
    content: 'content',
    correctAnswer: 'correctAnswer',
    subSectionId: 'subSectionId'
  };

  export type ClosedTasksScalarFieldEnum = (typeof ClosedTasksScalarFieldEnum)[keyof typeof ClosedTasksScalarFieldEnum]


  export const AnswersScalarFieldEnum: {
    id: 'id',
    A: 'A',
    B: 'B',
    C: 'C',
    D: 'D',
    closedTaskId: 'closedTaskId'
  };

  export type AnswersScalarFieldEnum = (typeof AnswersScalarFieldEnum)[keyof typeof AnswersScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
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
    questions?: QuestionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
    questions?: QuestionOrderByRelationAggregateInput
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
    questions?: QuestionListRelationFilter
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

  export type VideoWhereInput = {
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    id?: IntFilter<"Video"> | number
    url?: StringFilter<"Video"> | string
    questions?: QuestionListRelationFilter
  }

  export type VideoOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    questions?: QuestionOrderByRelationAggregateInput
  }

  export type VideoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    url?: StringFilter<"Video"> | string
    questions?: QuestionListRelationFilter
  }, "id">

  export type VideoOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    _count?: VideoCountOrderByAggregateInput
    _avg?: VideoAvgOrderByAggregateInput
    _max?: VideoMaxOrderByAggregateInput
    _min?: VideoMinOrderByAggregateInput
    _sum?: VideoSumOrderByAggregateInput
  }

  export type VideoScalarWhereWithAggregatesInput = {
    AND?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    OR?: VideoScalarWhereWithAggregatesInput[]
    NOT?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Video"> | number
    url?: StringWithAggregatesFilter<"Video"> | string
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: IntFilter<"Question"> | number
    title?: StringFilter<"Question"> | string
    text?: StringFilter<"Question"> | string
    videoId?: IntFilter<"Question"> | number
    time?: IntFilter<"Question"> | number
    userId?: StringFilter<"Question"> | string
    answers?: AnswerListRelationFilter
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    videoId?: SortOrder
    time?: SortOrder
    userId?: SortOrder
    answers?: AnswerOrderByRelationAggregateInput
    video?: VideoOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    title?: StringFilter<"Question"> | string
    text?: StringFilter<"Question"> | string
    videoId?: IntFilter<"Question"> | number
    time?: IntFilter<"Question"> | number
    userId?: StringFilter<"Question"> | string
    answers?: AnswerListRelationFilter
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    videoId?: SortOrder
    time?: SortOrder
    userId?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Question"> | number
    title?: StringWithAggregatesFilter<"Question"> | string
    text?: StringWithAggregatesFilter<"Question"> | string
    videoId?: IntWithAggregatesFilter<"Question"> | number
    time?: IntWithAggregatesFilter<"Question"> | number
    userId?: StringWithAggregatesFilter<"Question"> | string
  }

  export type AnswerWhereInput = {
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    id?: IntFilter<"Answer"> | number
    text?: StringFilter<"Answer"> | string
    questionId?: IntFilter<"Answer"> | number
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }

  export type AnswerOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    questionId?: SortOrder
    question?: QuestionOrderByWithRelationInput
  }

  export type AnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    text?: StringFilter<"Answer"> | string
    questionId?: IntFilter<"Answer"> | number
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }, "id">

  export type AnswerOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    questionId?: SortOrder
    _count?: AnswerCountOrderByAggregateInput
    _avg?: AnswerAvgOrderByAggregateInput
    _max?: AnswerMaxOrderByAggregateInput
    _min?: AnswerMinOrderByAggregateInput
    _sum?: AnswerSumOrderByAggregateInput
  }

  export type AnswerScalarWhereWithAggregatesInput = {
    AND?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    OR?: AnswerScalarWhereWithAggregatesInput[]
    NOT?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Answer"> | number
    text?: StringWithAggregatesFilter<"Answer"> | string
    questionId?: IntWithAggregatesFilter<"Answer"> | number
  }

  export type AlltasksWhereInput = {
    AND?: AlltasksWhereInput | AlltasksWhereInput[]
    OR?: AlltasksWhereInput[]
    NOT?: AlltasksWhereInput | AlltasksWhereInput[]
    id?: StringFilter<"Alltasks"> | string
    sections?: SectionListRelationFilter
  }

  export type AlltasksOrderByWithRelationInput = {
    id?: SortOrder
    sections?: SectionOrderByRelationAggregateInput
  }

  export type AlltasksWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AlltasksWhereInput | AlltasksWhereInput[]
    OR?: AlltasksWhereInput[]
    NOT?: AlltasksWhereInput | AlltasksWhereInput[]
    sections?: SectionListRelationFilter
  }, "id">

  export type AlltasksOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: AlltasksCountOrderByAggregateInput
    _max?: AlltasksMaxOrderByAggregateInput
    _min?: AlltasksMinOrderByAggregateInput
  }

  export type AlltasksScalarWhereWithAggregatesInput = {
    AND?: AlltasksScalarWhereWithAggregatesInput | AlltasksScalarWhereWithAggregatesInput[]
    OR?: AlltasksScalarWhereWithAggregatesInput[]
    NOT?: AlltasksScalarWhereWithAggregatesInput | AlltasksScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Alltasks"> | string
  }

  export type SectionWhereInput = {
    AND?: SectionWhereInput | SectionWhereInput[]
    OR?: SectionWhereInput[]
    NOT?: SectionWhereInput | SectionWhereInput[]
    id?: StringFilter<"Section"> | string
    name?: StringFilter<"Section"> | string
    alltasksId?: StringFilter<"Section"> | string
    alltasks?: XOR<AlltasksScalarRelationFilter, AlltasksWhereInput>
    subsections?: SubSectionListRelationFilter
  }

  export type SectionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    alltasksId?: SortOrder
    alltasks?: AlltasksOrderByWithRelationInput
    subsections?: SubSectionOrderByRelationAggregateInput
  }

  export type SectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SectionWhereInput | SectionWhereInput[]
    OR?: SectionWhereInput[]
    NOT?: SectionWhereInput | SectionWhereInput[]
    name?: StringFilter<"Section"> | string
    alltasksId?: StringFilter<"Section"> | string
    alltasks?: XOR<AlltasksScalarRelationFilter, AlltasksWhereInput>
    subsections?: SubSectionListRelationFilter
  }, "id">

  export type SectionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    alltasksId?: SortOrder
    _count?: SectionCountOrderByAggregateInput
    _max?: SectionMaxOrderByAggregateInput
    _min?: SectionMinOrderByAggregateInput
  }

  export type SectionScalarWhereWithAggregatesInput = {
    AND?: SectionScalarWhereWithAggregatesInput | SectionScalarWhereWithAggregatesInput[]
    OR?: SectionScalarWhereWithAggregatesInput[]
    NOT?: SectionScalarWhereWithAggregatesInput | SectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Section"> | string
    name?: StringWithAggregatesFilter<"Section"> | string
    alltasksId?: StringWithAggregatesFilter<"Section"> | string
  }

  export type SubSectionWhereInput = {
    AND?: SubSectionWhereInput | SubSectionWhereInput[]
    OR?: SubSectionWhereInput[]
    NOT?: SubSectionWhereInput | SubSectionWhereInput[]
    id?: StringFilter<"SubSection"> | string
    name?: StringFilter<"SubSection"> | string
    sectionId?: StringFilter<"SubSection"> | string
    mustBeShuffle?: BoolFilter<"SubSection"> | boolean
    closedTasksToShuffle?: IntNullableFilter<"SubSection"> | number | null
    openTasksToShuffle?: IntNullableFilter<"SubSection"> | number | null
    section?: XOR<SectionScalarRelationFilter, SectionWhereInput>
    openTasks?: OpenTasksListRelationFilter
    closedTasks?: ClosedTasksListRelationFilter
  }

  export type SubSectionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    sectionId?: SortOrder
    mustBeShuffle?: SortOrder
    closedTasksToShuffle?: SortOrderInput | SortOrder
    openTasksToShuffle?: SortOrderInput | SortOrder
    section?: SectionOrderByWithRelationInput
    openTasks?: OpenTasksOrderByRelationAggregateInput
    closedTasks?: ClosedTasksOrderByRelationAggregateInput
  }

  export type SubSectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubSectionWhereInput | SubSectionWhereInput[]
    OR?: SubSectionWhereInput[]
    NOT?: SubSectionWhereInput | SubSectionWhereInput[]
    name?: StringFilter<"SubSection"> | string
    sectionId?: StringFilter<"SubSection"> | string
    mustBeShuffle?: BoolFilter<"SubSection"> | boolean
    closedTasksToShuffle?: IntNullableFilter<"SubSection"> | number | null
    openTasksToShuffle?: IntNullableFilter<"SubSection"> | number | null
    section?: XOR<SectionScalarRelationFilter, SectionWhereInput>
    openTasks?: OpenTasksListRelationFilter
    closedTasks?: ClosedTasksListRelationFilter
  }, "id">

  export type SubSectionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    sectionId?: SortOrder
    mustBeShuffle?: SortOrder
    closedTasksToShuffle?: SortOrderInput | SortOrder
    openTasksToShuffle?: SortOrderInput | SortOrder
    _count?: SubSectionCountOrderByAggregateInput
    _avg?: SubSectionAvgOrderByAggregateInput
    _max?: SubSectionMaxOrderByAggregateInput
    _min?: SubSectionMinOrderByAggregateInput
    _sum?: SubSectionSumOrderByAggregateInput
  }

  export type SubSectionScalarWhereWithAggregatesInput = {
    AND?: SubSectionScalarWhereWithAggregatesInput | SubSectionScalarWhereWithAggregatesInput[]
    OR?: SubSectionScalarWhereWithAggregatesInput[]
    NOT?: SubSectionScalarWhereWithAggregatesInput | SubSectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SubSection"> | string
    name?: StringWithAggregatesFilter<"SubSection"> | string
    sectionId?: StringWithAggregatesFilter<"SubSection"> | string
    mustBeShuffle?: BoolWithAggregatesFilter<"SubSection"> | boolean
    closedTasksToShuffle?: IntNullableWithAggregatesFilter<"SubSection"> | number | null
    openTasksToShuffle?: IntNullableWithAggregatesFilter<"SubSection"> | number | null
  }

  export type OpenTasksWhereInput = {
    AND?: OpenTasksWhereInput | OpenTasksWhereInput[]
    OR?: OpenTasksWhereInput[]
    NOT?: OpenTasksWhereInput | OpenTasksWhereInput[]
    id?: StringFilter<"OpenTasks"> | string
    name?: StringFilter<"OpenTasks"> | string
    content?: StringFilter<"OpenTasks"> | string
    answer?: IntFilter<"OpenTasks"> | number
    subSectionId?: StringFilter<"OpenTasks"> | string
    openTaskId?: StringNullableFilter<"OpenTasks"> | string | null
    subSection?: XOR<SubSectionScalarRelationFilter, SubSectionWhereInput>
  }

  export type OpenTasksOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    answer?: SortOrder
    subSectionId?: SortOrder
    openTaskId?: SortOrderInput | SortOrder
    subSection?: SubSectionOrderByWithRelationInput
  }

  export type OpenTasksWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OpenTasksWhereInput | OpenTasksWhereInput[]
    OR?: OpenTasksWhereInput[]
    NOT?: OpenTasksWhereInput | OpenTasksWhereInput[]
    name?: StringFilter<"OpenTasks"> | string
    content?: StringFilter<"OpenTasks"> | string
    answer?: IntFilter<"OpenTasks"> | number
    subSectionId?: StringFilter<"OpenTasks"> | string
    openTaskId?: StringNullableFilter<"OpenTasks"> | string | null
    subSection?: XOR<SubSectionScalarRelationFilter, SubSectionWhereInput>
  }, "id">

  export type OpenTasksOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    answer?: SortOrder
    subSectionId?: SortOrder
    openTaskId?: SortOrderInput | SortOrder
    _count?: OpenTasksCountOrderByAggregateInput
    _avg?: OpenTasksAvgOrderByAggregateInput
    _max?: OpenTasksMaxOrderByAggregateInput
    _min?: OpenTasksMinOrderByAggregateInput
    _sum?: OpenTasksSumOrderByAggregateInput
  }

  export type OpenTasksScalarWhereWithAggregatesInput = {
    AND?: OpenTasksScalarWhereWithAggregatesInput | OpenTasksScalarWhereWithAggregatesInput[]
    OR?: OpenTasksScalarWhereWithAggregatesInput[]
    NOT?: OpenTasksScalarWhereWithAggregatesInput | OpenTasksScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OpenTasks"> | string
    name?: StringWithAggregatesFilter<"OpenTasks"> | string
    content?: StringWithAggregatesFilter<"OpenTasks"> | string
    answer?: IntWithAggregatesFilter<"OpenTasks"> | number
    subSectionId?: StringWithAggregatesFilter<"OpenTasks"> | string
    openTaskId?: StringNullableWithAggregatesFilter<"OpenTasks"> | string | null
  }

  export type ClosedTasksWhereInput = {
    AND?: ClosedTasksWhereInput | ClosedTasksWhereInput[]
    OR?: ClosedTasksWhereInput[]
    NOT?: ClosedTasksWhereInput | ClosedTasksWhereInput[]
    id?: StringFilter<"ClosedTasks"> | string
    name?: StringFilter<"ClosedTasks"> | string
    content?: StringFilter<"ClosedTasks"> | string
    correctAnswer?: StringFilter<"ClosedTasks"> | string
    subSectionId?: StringFilter<"ClosedTasks"> | string
    answers?: AnswersListRelationFilter
    subSection?: XOR<SubSectionScalarRelationFilter, SubSectionWhereInput>
  }

  export type ClosedTasksOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    correctAnswer?: SortOrder
    subSectionId?: SortOrder
    answers?: AnswersOrderByRelationAggregateInput
    subSection?: SubSectionOrderByWithRelationInput
  }

  export type ClosedTasksWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClosedTasksWhereInput | ClosedTasksWhereInput[]
    OR?: ClosedTasksWhereInput[]
    NOT?: ClosedTasksWhereInput | ClosedTasksWhereInput[]
    name?: StringFilter<"ClosedTasks"> | string
    content?: StringFilter<"ClosedTasks"> | string
    correctAnswer?: StringFilter<"ClosedTasks"> | string
    subSectionId?: StringFilter<"ClosedTasks"> | string
    answers?: AnswersListRelationFilter
    subSection?: XOR<SubSectionScalarRelationFilter, SubSectionWhereInput>
  }, "id">

  export type ClosedTasksOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    correctAnswer?: SortOrder
    subSectionId?: SortOrder
    _count?: ClosedTasksCountOrderByAggregateInput
    _max?: ClosedTasksMaxOrderByAggregateInput
    _min?: ClosedTasksMinOrderByAggregateInput
  }

  export type ClosedTasksScalarWhereWithAggregatesInput = {
    AND?: ClosedTasksScalarWhereWithAggregatesInput | ClosedTasksScalarWhereWithAggregatesInput[]
    OR?: ClosedTasksScalarWhereWithAggregatesInput[]
    NOT?: ClosedTasksScalarWhereWithAggregatesInput | ClosedTasksScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClosedTasks"> | string
    name?: StringWithAggregatesFilter<"ClosedTasks"> | string
    content?: StringWithAggregatesFilter<"ClosedTasks"> | string
    correctAnswer?: StringWithAggregatesFilter<"ClosedTasks"> | string
    subSectionId?: StringWithAggregatesFilter<"ClosedTasks"> | string
  }

  export type AnswersWhereInput = {
    AND?: AnswersWhereInput | AnswersWhereInput[]
    OR?: AnswersWhereInput[]
    NOT?: AnswersWhereInput | AnswersWhereInput[]
    id?: StringFilter<"Answers"> | string
    A?: StringFilter<"Answers"> | string
    B?: StringFilter<"Answers"> | string
    C?: StringFilter<"Answers"> | string
    D?: StringFilter<"Answers"> | string
    closedTaskId?: StringFilter<"Answers"> | string
    closedTask?: XOR<ClosedTasksScalarRelationFilter, ClosedTasksWhereInput>
  }

  export type AnswersOrderByWithRelationInput = {
    id?: SortOrder
    A?: SortOrder
    B?: SortOrder
    C?: SortOrder
    D?: SortOrder
    closedTaskId?: SortOrder
    closedTask?: ClosedTasksOrderByWithRelationInput
  }

  export type AnswersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnswersWhereInput | AnswersWhereInput[]
    OR?: AnswersWhereInput[]
    NOT?: AnswersWhereInput | AnswersWhereInput[]
    A?: StringFilter<"Answers"> | string
    B?: StringFilter<"Answers"> | string
    C?: StringFilter<"Answers"> | string
    D?: StringFilter<"Answers"> | string
    closedTaskId?: StringFilter<"Answers"> | string
    closedTask?: XOR<ClosedTasksScalarRelationFilter, ClosedTasksWhereInput>
  }, "id">

  export type AnswersOrderByWithAggregationInput = {
    id?: SortOrder
    A?: SortOrder
    B?: SortOrder
    C?: SortOrder
    D?: SortOrder
    closedTaskId?: SortOrder
    _count?: AnswersCountOrderByAggregateInput
    _max?: AnswersMaxOrderByAggregateInput
    _min?: AnswersMinOrderByAggregateInput
  }

  export type AnswersScalarWhereWithAggregatesInput = {
    AND?: AnswersScalarWhereWithAggregatesInput | AnswersScalarWhereWithAggregatesInput[]
    OR?: AnswersScalarWhereWithAggregatesInput[]
    NOT?: AnswersScalarWhereWithAggregatesInput | AnswersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Answers"> | string
    A?: StringWithAggregatesFilter<"Answers"> | string
    B?: StringWithAggregatesFilter<"Answers"> | string
    C?: StringWithAggregatesFilter<"Answers"> | string
    D?: StringWithAggregatesFilter<"Answers"> | string
    closedTaskId?: StringWithAggregatesFilter<"Answers"> | string
  }

  export type UserCreateInput = {
    id?: string
    clerkId: string
    firstName?: string | null
    lastName?: string | null
    email: string
    createDate?: Date | string
    updateDate?: Date | string
    questions?: QuestionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    clerkId: string
    firstName?: string | null
    lastName?: string | null
    email: string
    createDate?: Date | string
    updateDate?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutUserNestedInput
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

  export type VideoCreateInput = {
    url: string
    questions?: QuestionCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateInput = {
    id?: number
    url: string
    questions?: QuestionUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    questions?: QuestionUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    questions?: QuestionUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type VideoCreateManyInput = {
    id?: number
    url: string
  }

  export type VideoUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type VideoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionCreateInput = {
    title: string
    text: string
    time: number
    answers?: AnswerCreateNestedManyWithoutQuestionInput
    video: VideoCreateNestedOneWithoutQuestionsInput
    user: UserCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: number
    title: string
    text: string
    videoId: number
    time: number
    userId: string
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
    video?: VideoUpdateOneRequiredWithoutQuestionsNestedInput
    user?: UserUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    videoId?: IntFieldUpdateOperationsInput | number
    time?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: number
    title: string
    text: string
    videoId: number
    time: number
    userId: string
  }

  export type QuestionUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    videoId?: IntFieldUpdateOperationsInput | number
    time?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AnswerCreateInput = {
    text: string
    question: QuestionCreateNestedOneWithoutAnswersInput
  }

  export type AnswerUncheckedCreateInput = {
    id?: number
    text: string
    questionId: number
  }

  export type AnswerUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AnswerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    questionId?: IntFieldUpdateOperationsInput | number
  }

  export type AnswerCreateManyInput = {
    id?: number
    text: string
    questionId: number
  }

  export type AnswerUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
  }

  export type AnswerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    questionId?: IntFieldUpdateOperationsInput | number
  }

  export type AlltasksCreateInput = {
    id?: string
    sections?: SectionCreateNestedManyWithoutAlltasksInput
  }

  export type AlltasksUncheckedCreateInput = {
    id?: string
    sections?: SectionUncheckedCreateNestedManyWithoutAlltasksInput
  }

  export type AlltasksUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sections?: SectionUpdateManyWithoutAlltasksNestedInput
  }

  export type AlltasksUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sections?: SectionUncheckedUpdateManyWithoutAlltasksNestedInput
  }

  export type AlltasksCreateManyInput = {
    id?: string
  }

  export type AlltasksUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type AlltasksUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type SectionCreateInput = {
    id?: string
    name: string
    alltasks: AlltasksCreateNestedOneWithoutSectionsInput
    subsections?: SubSectionCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateInput = {
    id?: string
    name: string
    alltasksId: string
    subsections?: SubSectionUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    alltasks?: AlltasksUpdateOneRequiredWithoutSectionsNestedInput
    subsections?: SubSectionUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    alltasksId?: StringFieldUpdateOperationsInput | string
    subsections?: SubSectionUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionCreateManyInput = {
    id?: string
    name: string
    alltasksId: string
  }

  export type SectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    alltasksId?: StringFieldUpdateOperationsInput | string
  }

  export type SubSectionCreateInput = {
    id?: string
    name: string
    mustBeShuffle: boolean
    closedTasksToShuffle?: number | null
    openTasksToShuffle?: number | null
    section: SectionCreateNestedOneWithoutSubsectionsInput
    openTasks?: OpenTasksCreateNestedManyWithoutSubSectionInput
    closedTasks?: ClosedTasksCreateNestedManyWithoutSubSectionInput
  }

  export type SubSectionUncheckedCreateInput = {
    id?: string
    name: string
    sectionId: string
    mustBeShuffle: boolean
    closedTasksToShuffle?: number | null
    openTasksToShuffle?: number | null
    openTasks?: OpenTasksUncheckedCreateNestedManyWithoutSubSectionInput
    closedTasks?: ClosedTasksUncheckedCreateNestedManyWithoutSubSectionInput
  }

  export type SubSectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mustBeShuffle?: BoolFieldUpdateOperationsInput | boolean
    closedTasksToShuffle?: NullableIntFieldUpdateOperationsInput | number | null
    openTasksToShuffle?: NullableIntFieldUpdateOperationsInput | number | null
    section?: SectionUpdateOneRequiredWithoutSubsectionsNestedInput
    openTasks?: OpenTasksUpdateManyWithoutSubSectionNestedInput
    closedTasks?: ClosedTasksUpdateManyWithoutSubSectionNestedInput
  }

  export type SubSectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    mustBeShuffle?: BoolFieldUpdateOperationsInput | boolean
    closedTasksToShuffle?: NullableIntFieldUpdateOperationsInput | number | null
    openTasksToShuffle?: NullableIntFieldUpdateOperationsInput | number | null
    openTasks?: OpenTasksUncheckedUpdateManyWithoutSubSectionNestedInput
    closedTasks?: ClosedTasksUncheckedUpdateManyWithoutSubSectionNestedInput
  }

  export type SubSectionCreateManyInput = {
    id?: string
    name: string
    sectionId: string
    mustBeShuffle: boolean
    closedTasksToShuffle?: number | null
    openTasksToShuffle?: number | null
  }

  export type SubSectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mustBeShuffle?: BoolFieldUpdateOperationsInput | boolean
    closedTasksToShuffle?: NullableIntFieldUpdateOperationsInput | number | null
    openTasksToShuffle?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SubSectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    mustBeShuffle?: BoolFieldUpdateOperationsInput | boolean
    closedTasksToShuffle?: NullableIntFieldUpdateOperationsInput | number | null
    openTasksToShuffle?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OpenTasksCreateInput = {
    id?: string
    name: string
    content: string
    answer: number
    openTaskId?: string | null
    subSection: SubSectionCreateNestedOneWithoutOpenTasksInput
  }

  export type OpenTasksUncheckedCreateInput = {
    id?: string
    name: string
    content: string
    answer: number
    subSectionId: string
    openTaskId?: string | null
  }

  export type OpenTasksUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    answer?: IntFieldUpdateOperationsInput | number
    openTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    subSection?: SubSectionUpdateOneRequiredWithoutOpenTasksNestedInput
  }

  export type OpenTasksUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    answer?: IntFieldUpdateOperationsInput | number
    subSectionId?: StringFieldUpdateOperationsInput | string
    openTaskId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OpenTasksCreateManyInput = {
    id?: string
    name: string
    content: string
    answer: number
    subSectionId: string
    openTaskId?: string | null
  }

  export type OpenTasksUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    answer?: IntFieldUpdateOperationsInput | number
    openTaskId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OpenTasksUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    answer?: IntFieldUpdateOperationsInput | number
    subSectionId?: StringFieldUpdateOperationsInput | string
    openTaskId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClosedTasksCreateInput = {
    id?: string
    name: string
    content: string
    correctAnswer: string
    answers?: AnswersCreateNestedManyWithoutClosedTaskInput
    subSection: SubSectionCreateNestedOneWithoutClosedTasksInput
  }

  export type ClosedTasksUncheckedCreateInput = {
    id?: string
    name: string
    content: string
    correctAnswer: string
    subSectionId: string
    answers?: AnswersUncheckedCreateNestedManyWithoutClosedTaskInput
  }

  export type ClosedTasksUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    answers?: AnswersUpdateManyWithoutClosedTaskNestedInput
    subSection?: SubSectionUpdateOneRequiredWithoutClosedTasksNestedInput
  }

  export type ClosedTasksUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    subSectionId?: StringFieldUpdateOperationsInput | string
    answers?: AnswersUncheckedUpdateManyWithoutClosedTaskNestedInput
  }

  export type ClosedTasksCreateManyInput = {
    id?: string
    name: string
    content: string
    correctAnswer: string
    subSectionId: string
  }

  export type ClosedTasksUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
  }

  export type ClosedTasksUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    subSectionId?: StringFieldUpdateOperationsInput | string
  }

  export type AnswersCreateInput = {
    id?: string
    A: string
    B: string
    C: string
    D: string
    closedTask: ClosedTasksCreateNestedOneWithoutAnswersInput
  }

  export type AnswersUncheckedCreateInput = {
    id?: string
    A: string
    B: string
    C: string
    D: string
    closedTaskId: string
  }

  export type AnswersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    A?: StringFieldUpdateOperationsInput | string
    B?: StringFieldUpdateOperationsInput | string
    C?: StringFieldUpdateOperationsInput | string
    D?: StringFieldUpdateOperationsInput | string
    closedTask?: ClosedTasksUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AnswersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    A?: StringFieldUpdateOperationsInput | string
    B?: StringFieldUpdateOperationsInput | string
    C?: StringFieldUpdateOperationsInput | string
    D?: StringFieldUpdateOperationsInput | string
    closedTaskId?: StringFieldUpdateOperationsInput | string
  }

  export type AnswersCreateManyInput = {
    id?: string
    A: string
    B: string
    C: string
    D: string
    closedTaskId: string
  }

  export type AnswersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    A?: StringFieldUpdateOperationsInput | string
    B?: StringFieldUpdateOperationsInput | string
    C?: StringFieldUpdateOperationsInput | string
    D?: StringFieldUpdateOperationsInput | string
  }

  export type AnswersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    A?: StringFieldUpdateOperationsInput | string
    B?: StringFieldUpdateOperationsInput | string
    C?: StringFieldUpdateOperationsInput | string
    D?: StringFieldUpdateOperationsInput | string
    closedTaskId?: StringFieldUpdateOperationsInput | string
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

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type QuestionOrderByRelationAggregateInput = {
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

  export type VideoCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
  }

  export type VideoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VideoMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
  }

  export type VideoMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
  }

  export type VideoSumOrderByAggregateInput = {
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

  export type AnswerListRelationFilter = {
    every?: AnswerWhereInput
    some?: AnswerWhereInput
    none?: AnswerWhereInput
  }

  export type VideoScalarRelationFilter = {
    is?: VideoWhereInput
    isNot?: VideoWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    videoId?: SortOrder
    time?: SortOrder
    userId?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    id?: SortOrder
    videoId?: SortOrder
    time?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    videoId?: SortOrder
    time?: SortOrder
    userId?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    videoId?: SortOrder
    time?: SortOrder
    userId?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    id?: SortOrder
    videoId?: SortOrder
    time?: SortOrder
  }

  export type QuestionScalarRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type AnswerCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    questionId?: SortOrder
  }

  export type AnswerAvgOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
  }

  export type AnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    questionId?: SortOrder
  }

  export type AnswerMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    questionId?: SortOrder
  }

  export type AnswerSumOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
  }

  export type SectionListRelationFilter = {
    every?: SectionWhereInput
    some?: SectionWhereInput
    none?: SectionWhereInput
  }

  export type SectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlltasksCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AlltasksMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AlltasksMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AlltasksScalarRelationFilter = {
    is?: AlltasksWhereInput
    isNot?: AlltasksWhereInput
  }

  export type SubSectionListRelationFilter = {
    every?: SubSectionWhereInput
    some?: SubSectionWhereInput
    none?: SubSectionWhereInput
  }

  export type SubSectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SectionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    alltasksId?: SortOrder
  }

  export type SectionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    alltasksId?: SortOrder
  }

  export type SectionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    alltasksId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SectionScalarRelationFilter = {
    is?: SectionWhereInput
    isNot?: SectionWhereInput
  }

  export type OpenTasksListRelationFilter = {
    every?: OpenTasksWhereInput
    some?: OpenTasksWhereInput
    none?: OpenTasksWhereInput
  }

  export type ClosedTasksListRelationFilter = {
    every?: ClosedTasksWhereInput
    some?: ClosedTasksWhereInput
    none?: ClosedTasksWhereInput
  }

  export type OpenTasksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClosedTasksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubSectionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sectionId?: SortOrder
    mustBeShuffle?: SortOrder
    closedTasksToShuffle?: SortOrder
    openTasksToShuffle?: SortOrder
  }

  export type SubSectionAvgOrderByAggregateInput = {
    closedTasksToShuffle?: SortOrder
    openTasksToShuffle?: SortOrder
  }

  export type SubSectionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sectionId?: SortOrder
    mustBeShuffle?: SortOrder
    closedTasksToShuffle?: SortOrder
    openTasksToShuffle?: SortOrder
  }

  export type SubSectionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sectionId?: SortOrder
    mustBeShuffle?: SortOrder
    closedTasksToShuffle?: SortOrder
    openTasksToShuffle?: SortOrder
  }

  export type SubSectionSumOrderByAggregateInput = {
    closedTasksToShuffle?: SortOrder
    openTasksToShuffle?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SubSectionScalarRelationFilter = {
    is?: SubSectionWhereInput
    isNot?: SubSectionWhereInput
  }

  export type OpenTasksCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    answer?: SortOrder
    subSectionId?: SortOrder
    openTaskId?: SortOrder
  }

  export type OpenTasksAvgOrderByAggregateInput = {
    answer?: SortOrder
  }

  export type OpenTasksMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    answer?: SortOrder
    subSectionId?: SortOrder
    openTaskId?: SortOrder
  }

  export type OpenTasksMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    answer?: SortOrder
    subSectionId?: SortOrder
    openTaskId?: SortOrder
  }

  export type OpenTasksSumOrderByAggregateInput = {
    answer?: SortOrder
  }

  export type AnswersListRelationFilter = {
    every?: AnswersWhereInput
    some?: AnswersWhereInput
    none?: AnswersWhereInput
  }

  export type AnswersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClosedTasksCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    correctAnswer?: SortOrder
    subSectionId?: SortOrder
  }

  export type ClosedTasksMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    correctAnswer?: SortOrder
    subSectionId?: SortOrder
  }

  export type ClosedTasksMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    correctAnswer?: SortOrder
    subSectionId?: SortOrder
  }

  export type ClosedTasksScalarRelationFilter = {
    is?: ClosedTasksWhereInput
    isNot?: ClosedTasksWhereInput
  }

  export type AnswersCountOrderByAggregateInput = {
    id?: SortOrder
    A?: SortOrder
    B?: SortOrder
    C?: SortOrder
    D?: SortOrder
    closedTaskId?: SortOrder
  }

  export type AnswersMaxOrderByAggregateInput = {
    id?: SortOrder
    A?: SortOrder
    B?: SortOrder
    C?: SortOrder
    D?: SortOrder
    closedTaskId?: SortOrder
  }

  export type AnswersMinOrderByAggregateInput = {
    id?: SortOrder
    A?: SortOrder
    B?: SortOrder
    C?: SortOrder
    D?: SortOrder
    closedTaskId?: SortOrder
  }

  export type QuestionCreateNestedManyWithoutUserInput = {
    create?: XOR<QuestionCreateWithoutUserInput, QuestionUncheckedCreateWithoutUserInput> | QuestionCreateWithoutUserInput[] | QuestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutUserInput | QuestionCreateOrConnectWithoutUserInput[]
    createMany?: QuestionCreateManyUserInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<QuestionCreateWithoutUserInput, QuestionUncheckedCreateWithoutUserInput> | QuestionCreateWithoutUserInput[] | QuestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutUserInput | QuestionCreateOrConnectWithoutUserInput[]
    createMany?: QuestionCreateManyUserInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
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

  export type QuestionUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuestionCreateWithoutUserInput, QuestionUncheckedCreateWithoutUserInput> | QuestionCreateWithoutUserInput[] | QuestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutUserInput | QuestionCreateOrConnectWithoutUserInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutUserInput | QuestionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuestionCreateManyUserInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutUserInput | QuestionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutUserInput | QuestionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuestionCreateWithoutUserInput, QuestionUncheckedCreateWithoutUserInput> | QuestionCreateWithoutUserInput[] | QuestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutUserInput | QuestionCreateOrConnectWithoutUserInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutUserInput | QuestionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuestionCreateManyUserInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutUserInput | QuestionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutUserInput | QuestionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type QuestionCreateNestedManyWithoutVideoInput = {
    create?: XOR<QuestionCreateWithoutVideoInput, QuestionUncheckedCreateWithoutVideoInput> | QuestionCreateWithoutVideoInput[] | QuestionUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutVideoInput | QuestionCreateOrConnectWithoutVideoInput[]
    createMany?: QuestionCreateManyVideoInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutVideoInput = {
    create?: XOR<QuestionCreateWithoutVideoInput, QuestionUncheckedCreateWithoutVideoInput> | QuestionCreateWithoutVideoInput[] | QuestionUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutVideoInput | QuestionCreateOrConnectWithoutVideoInput[]
    createMany?: QuestionCreateManyVideoInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type QuestionUpdateManyWithoutVideoNestedInput = {
    create?: XOR<QuestionCreateWithoutVideoInput, QuestionUncheckedCreateWithoutVideoInput> | QuestionCreateWithoutVideoInput[] | QuestionUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutVideoInput | QuestionCreateOrConnectWithoutVideoInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutVideoInput | QuestionUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: QuestionCreateManyVideoInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutVideoInput | QuestionUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutVideoInput | QuestionUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type QuestionUncheckedUpdateManyWithoutVideoNestedInput = {
    create?: XOR<QuestionCreateWithoutVideoInput, QuestionUncheckedCreateWithoutVideoInput> | QuestionCreateWithoutVideoInput[] | QuestionUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutVideoInput | QuestionCreateOrConnectWithoutVideoInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutVideoInput | QuestionUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: QuestionCreateManyVideoInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutVideoInput | QuestionUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutVideoInput | QuestionUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type AnswerCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type VideoCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<VideoCreateWithoutQuestionsInput, VideoUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: VideoCreateOrConnectWithoutQuestionsInput
    connect?: VideoWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<UserCreateWithoutQuestionsInput, UserUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuestionsInput
    connect?: UserWhereUniqueInput
  }

  export type AnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type AnswerUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQuestionInput | AnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQuestionInput | AnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQuestionInput | AnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type VideoUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<VideoCreateWithoutQuestionsInput, VideoUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: VideoCreateOrConnectWithoutQuestionsInput
    upsert?: VideoUpsertWithoutQuestionsInput
    connect?: VideoWhereUniqueInput
    update?: XOR<XOR<VideoUpdateToOneWithWhereWithoutQuestionsInput, VideoUpdateWithoutQuestionsInput>, VideoUncheckedUpdateWithoutQuestionsInput>
  }

  export type UserUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<UserCreateWithoutQuestionsInput, UserUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuestionsInput
    upsert?: UserUpsertWithoutQuestionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQuestionsInput, UserUpdateWithoutQuestionsInput>, UserUncheckedUpdateWithoutQuestionsInput>
  }

  export type AnswerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQuestionInput | AnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQuestionInput | AnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQuestionInput | AnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type QuestionCreateNestedOneWithoutAnswersInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    connect?: QuestionWhereUniqueInput
  }

  export type QuestionUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    upsert?: QuestionUpsertWithoutAnswersInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutAnswersInput, QuestionUpdateWithoutAnswersInput>, QuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type SectionCreateNestedManyWithoutAlltasksInput = {
    create?: XOR<SectionCreateWithoutAlltasksInput, SectionUncheckedCreateWithoutAlltasksInput> | SectionCreateWithoutAlltasksInput[] | SectionUncheckedCreateWithoutAlltasksInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutAlltasksInput | SectionCreateOrConnectWithoutAlltasksInput[]
    createMany?: SectionCreateManyAlltasksInputEnvelope
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
  }

  export type SectionUncheckedCreateNestedManyWithoutAlltasksInput = {
    create?: XOR<SectionCreateWithoutAlltasksInput, SectionUncheckedCreateWithoutAlltasksInput> | SectionCreateWithoutAlltasksInput[] | SectionUncheckedCreateWithoutAlltasksInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutAlltasksInput | SectionCreateOrConnectWithoutAlltasksInput[]
    createMany?: SectionCreateManyAlltasksInputEnvelope
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
  }

  export type SectionUpdateManyWithoutAlltasksNestedInput = {
    create?: XOR<SectionCreateWithoutAlltasksInput, SectionUncheckedCreateWithoutAlltasksInput> | SectionCreateWithoutAlltasksInput[] | SectionUncheckedCreateWithoutAlltasksInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutAlltasksInput | SectionCreateOrConnectWithoutAlltasksInput[]
    upsert?: SectionUpsertWithWhereUniqueWithoutAlltasksInput | SectionUpsertWithWhereUniqueWithoutAlltasksInput[]
    createMany?: SectionCreateManyAlltasksInputEnvelope
    set?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    disconnect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    delete?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    update?: SectionUpdateWithWhereUniqueWithoutAlltasksInput | SectionUpdateWithWhereUniqueWithoutAlltasksInput[]
    updateMany?: SectionUpdateManyWithWhereWithoutAlltasksInput | SectionUpdateManyWithWhereWithoutAlltasksInput[]
    deleteMany?: SectionScalarWhereInput | SectionScalarWhereInput[]
  }

  export type SectionUncheckedUpdateManyWithoutAlltasksNestedInput = {
    create?: XOR<SectionCreateWithoutAlltasksInput, SectionUncheckedCreateWithoutAlltasksInput> | SectionCreateWithoutAlltasksInput[] | SectionUncheckedCreateWithoutAlltasksInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutAlltasksInput | SectionCreateOrConnectWithoutAlltasksInput[]
    upsert?: SectionUpsertWithWhereUniqueWithoutAlltasksInput | SectionUpsertWithWhereUniqueWithoutAlltasksInput[]
    createMany?: SectionCreateManyAlltasksInputEnvelope
    set?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    disconnect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    delete?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    update?: SectionUpdateWithWhereUniqueWithoutAlltasksInput | SectionUpdateWithWhereUniqueWithoutAlltasksInput[]
    updateMany?: SectionUpdateManyWithWhereWithoutAlltasksInput | SectionUpdateManyWithWhereWithoutAlltasksInput[]
    deleteMany?: SectionScalarWhereInput | SectionScalarWhereInput[]
  }

  export type AlltasksCreateNestedOneWithoutSectionsInput = {
    create?: XOR<AlltasksCreateWithoutSectionsInput, AlltasksUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: AlltasksCreateOrConnectWithoutSectionsInput
    connect?: AlltasksWhereUniqueInput
  }

  export type SubSectionCreateNestedManyWithoutSectionInput = {
    create?: XOR<SubSectionCreateWithoutSectionInput, SubSectionUncheckedCreateWithoutSectionInput> | SubSectionCreateWithoutSectionInput[] | SubSectionUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: SubSectionCreateOrConnectWithoutSectionInput | SubSectionCreateOrConnectWithoutSectionInput[]
    createMany?: SubSectionCreateManySectionInputEnvelope
    connect?: SubSectionWhereUniqueInput | SubSectionWhereUniqueInput[]
  }

  export type SubSectionUncheckedCreateNestedManyWithoutSectionInput = {
    create?: XOR<SubSectionCreateWithoutSectionInput, SubSectionUncheckedCreateWithoutSectionInput> | SubSectionCreateWithoutSectionInput[] | SubSectionUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: SubSectionCreateOrConnectWithoutSectionInput | SubSectionCreateOrConnectWithoutSectionInput[]
    createMany?: SubSectionCreateManySectionInputEnvelope
    connect?: SubSectionWhereUniqueInput | SubSectionWhereUniqueInput[]
  }

  export type AlltasksUpdateOneRequiredWithoutSectionsNestedInput = {
    create?: XOR<AlltasksCreateWithoutSectionsInput, AlltasksUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: AlltasksCreateOrConnectWithoutSectionsInput
    upsert?: AlltasksUpsertWithoutSectionsInput
    connect?: AlltasksWhereUniqueInput
    update?: XOR<XOR<AlltasksUpdateToOneWithWhereWithoutSectionsInput, AlltasksUpdateWithoutSectionsInput>, AlltasksUncheckedUpdateWithoutSectionsInput>
  }

  export type SubSectionUpdateManyWithoutSectionNestedInput = {
    create?: XOR<SubSectionCreateWithoutSectionInput, SubSectionUncheckedCreateWithoutSectionInput> | SubSectionCreateWithoutSectionInput[] | SubSectionUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: SubSectionCreateOrConnectWithoutSectionInput | SubSectionCreateOrConnectWithoutSectionInput[]
    upsert?: SubSectionUpsertWithWhereUniqueWithoutSectionInput | SubSectionUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: SubSectionCreateManySectionInputEnvelope
    set?: SubSectionWhereUniqueInput | SubSectionWhereUniqueInput[]
    disconnect?: SubSectionWhereUniqueInput | SubSectionWhereUniqueInput[]
    delete?: SubSectionWhereUniqueInput | SubSectionWhereUniqueInput[]
    connect?: SubSectionWhereUniqueInput | SubSectionWhereUniqueInput[]
    update?: SubSectionUpdateWithWhereUniqueWithoutSectionInput | SubSectionUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: SubSectionUpdateManyWithWhereWithoutSectionInput | SubSectionUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: SubSectionScalarWhereInput | SubSectionScalarWhereInput[]
  }

  export type SubSectionUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: XOR<SubSectionCreateWithoutSectionInput, SubSectionUncheckedCreateWithoutSectionInput> | SubSectionCreateWithoutSectionInput[] | SubSectionUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: SubSectionCreateOrConnectWithoutSectionInput | SubSectionCreateOrConnectWithoutSectionInput[]
    upsert?: SubSectionUpsertWithWhereUniqueWithoutSectionInput | SubSectionUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: SubSectionCreateManySectionInputEnvelope
    set?: SubSectionWhereUniqueInput | SubSectionWhereUniqueInput[]
    disconnect?: SubSectionWhereUniqueInput | SubSectionWhereUniqueInput[]
    delete?: SubSectionWhereUniqueInput | SubSectionWhereUniqueInput[]
    connect?: SubSectionWhereUniqueInput | SubSectionWhereUniqueInput[]
    update?: SubSectionUpdateWithWhereUniqueWithoutSectionInput | SubSectionUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: SubSectionUpdateManyWithWhereWithoutSectionInput | SubSectionUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: SubSectionScalarWhereInput | SubSectionScalarWhereInput[]
  }

  export type SectionCreateNestedOneWithoutSubsectionsInput = {
    create?: XOR<SectionCreateWithoutSubsectionsInput, SectionUncheckedCreateWithoutSubsectionsInput>
    connectOrCreate?: SectionCreateOrConnectWithoutSubsectionsInput
    connect?: SectionWhereUniqueInput
  }

  export type OpenTasksCreateNestedManyWithoutSubSectionInput = {
    create?: XOR<OpenTasksCreateWithoutSubSectionInput, OpenTasksUncheckedCreateWithoutSubSectionInput> | OpenTasksCreateWithoutSubSectionInput[] | OpenTasksUncheckedCreateWithoutSubSectionInput[]
    connectOrCreate?: OpenTasksCreateOrConnectWithoutSubSectionInput | OpenTasksCreateOrConnectWithoutSubSectionInput[]
    createMany?: OpenTasksCreateManySubSectionInputEnvelope
    connect?: OpenTasksWhereUniqueInput | OpenTasksWhereUniqueInput[]
  }

  export type ClosedTasksCreateNestedManyWithoutSubSectionInput = {
    create?: XOR<ClosedTasksCreateWithoutSubSectionInput, ClosedTasksUncheckedCreateWithoutSubSectionInput> | ClosedTasksCreateWithoutSubSectionInput[] | ClosedTasksUncheckedCreateWithoutSubSectionInput[]
    connectOrCreate?: ClosedTasksCreateOrConnectWithoutSubSectionInput | ClosedTasksCreateOrConnectWithoutSubSectionInput[]
    createMany?: ClosedTasksCreateManySubSectionInputEnvelope
    connect?: ClosedTasksWhereUniqueInput | ClosedTasksWhereUniqueInput[]
  }

  export type OpenTasksUncheckedCreateNestedManyWithoutSubSectionInput = {
    create?: XOR<OpenTasksCreateWithoutSubSectionInput, OpenTasksUncheckedCreateWithoutSubSectionInput> | OpenTasksCreateWithoutSubSectionInput[] | OpenTasksUncheckedCreateWithoutSubSectionInput[]
    connectOrCreate?: OpenTasksCreateOrConnectWithoutSubSectionInput | OpenTasksCreateOrConnectWithoutSubSectionInput[]
    createMany?: OpenTasksCreateManySubSectionInputEnvelope
    connect?: OpenTasksWhereUniqueInput | OpenTasksWhereUniqueInput[]
  }

  export type ClosedTasksUncheckedCreateNestedManyWithoutSubSectionInput = {
    create?: XOR<ClosedTasksCreateWithoutSubSectionInput, ClosedTasksUncheckedCreateWithoutSubSectionInput> | ClosedTasksCreateWithoutSubSectionInput[] | ClosedTasksUncheckedCreateWithoutSubSectionInput[]
    connectOrCreate?: ClosedTasksCreateOrConnectWithoutSubSectionInput | ClosedTasksCreateOrConnectWithoutSubSectionInput[]
    createMany?: ClosedTasksCreateManySubSectionInputEnvelope
    connect?: ClosedTasksWhereUniqueInput | ClosedTasksWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SectionUpdateOneRequiredWithoutSubsectionsNestedInput = {
    create?: XOR<SectionCreateWithoutSubsectionsInput, SectionUncheckedCreateWithoutSubsectionsInput>
    connectOrCreate?: SectionCreateOrConnectWithoutSubsectionsInput
    upsert?: SectionUpsertWithoutSubsectionsInput
    connect?: SectionWhereUniqueInput
    update?: XOR<XOR<SectionUpdateToOneWithWhereWithoutSubsectionsInput, SectionUpdateWithoutSubsectionsInput>, SectionUncheckedUpdateWithoutSubsectionsInput>
  }

  export type OpenTasksUpdateManyWithoutSubSectionNestedInput = {
    create?: XOR<OpenTasksCreateWithoutSubSectionInput, OpenTasksUncheckedCreateWithoutSubSectionInput> | OpenTasksCreateWithoutSubSectionInput[] | OpenTasksUncheckedCreateWithoutSubSectionInput[]
    connectOrCreate?: OpenTasksCreateOrConnectWithoutSubSectionInput | OpenTasksCreateOrConnectWithoutSubSectionInput[]
    upsert?: OpenTasksUpsertWithWhereUniqueWithoutSubSectionInput | OpenTasksUpsertWithWhereUniqueWithoutSubSectionInput[]
    createMany?: OpenTasksCreateManySubSectionInputEnvelope
    set?: OpenTasksWhereUniqueInput | OpenTasksWhereUniqueInput[]
    disconnect?: OpenTasksWhereUniqueInput | OpenTasksWhereUniqueInput[]
    delete?: OpenTasksWhereUniqueInput | OpenTasksWhereUniqueInput[]
    connect?: OpenTasksWhereUniqueInput | OpenTasksWhereUniqueInput[]
    update?: OpenTasksUpdateWithWhereUniqueWithoutSubSectionInput | OpenTasksUpdateWithWhereUniqueWithoutSubSectionInput[]
    updateMany?: OpenTasksUpdateManyWithWhereWithoutSubSectionInput | OpenTasksUpdateManyWithWhereWithoutSubSectionInput[]
    deleteMany?: OpenTasksScalarWhereInput | OpenTasksScalarWhereInput[]
  }

  export type ClosedTasksUpdateManyWithoutSubSectionNestedInput = {
    create?: XOR<ClosedTasksCreateWithoutSubSectionInput, ClosedTasksUncheckedCreateWithoutSubSectionInput> | ClosedTasksCreateWithoutSubSectionInput[] | ClosedTasksUncheckedCreateWithoutSubSectionInput[]
    connectOrCreate?: ClosedTasksCreateOrConnectWithoutSubSectionInput | ClosedTasksCreateOrConnectWithoutSubSectionInput[]
    upsert?: ClosedTasksUpsertWithWhereUniqueWithoutSubSectionInput | ClosedTasksUpsertWithWhereUniqueWithoutSubSectionInput[]
    createMany?: ClosedTasksCreateManySubSectionInputEnvelope
    set?: ClosedTasksWhereUniqueInput | ClosedTasksWhereUniqueInput[]
    disconnect?: ClosedTasksWhereUniqueInput | ClosedTasksWhereUniqueInput[]
    delete?: ClosedTasksWhereUniqueInput | ClosedTasksWhereUniqueInput[]
    connect?: ClosedTasksWhereUniqueInput | ClosedTasksWhereUniqueInput[]
    update?: ClosedTasksUpdateWithWhereUniqueWithoutSubSectionInput | ClosedTasksUpdateWithWhereUniqueWithoutSubSectionInput[]
    updateMany?: ClosedTasksUpdateManyWithWhereWithoutSubSectionInput | ClosedTasksUpdateManyWithWhereWithoutSubSectionInput[]
    deleteMany?: ClosedTasksScalarWhereInput | ClosedTasksScalarWhereInput[]
  }

  export type OpenTasksUncheckedUpdateManyWithoutSubSectionNestedInput = {
    create?: XOR<OpenTasksCreateWithoutSubSectionInput, OpenTasksUncheckedCreateWithoutSubSectionInput> | OpenTasksCreateWithoutSubSectionInput[] | OpenTasksUncheckedCreateWithoutSubSectionInput[]
    connectOrCreate?: OpenTasksCreateOrConnectWithoutSubSectionInput | OpenTasksCreateOrConnectWithoutSubSectionInput[]
    upsert?: OpenTasksUpsertWithWhereUniqueWithoutSubSectionInput | OpenTasksUpsertWithWhereUniqueWithoutSubSectionInput[]
    createMany?: OpenTasksCreateManySubSectionInputEnvelope
    set?: OpenTasksWhereUniqueInput | OpenTasksWhereUniqueInput[]
    disconnect?: OpenTasksWhereUniqueInput | OpenTasksWhereUniqueInput[]
    delete?: OpenTasksWhereUniqueInput | OpenTasksWhereUniqueInput[]
    connect?: OpenTasksWhereUniqueInput | OpenTasksWhereUniqueInput[]
    update?: OpenTasksUpdateWithWhereUniqueWithoutSubSectionInput | OpenTasksUpdateWithWhereUniqueWithoutSubSectionInput[]
    updateMany?: OpenTasksUpdateManyWithWhereWithoutSubSectionInput | OpenTasksUpdateManyWithWhereWithoutSubSectionInput[]
    deleteMany?: OpenTasksScalarWhereInput | OpenTasksScalarWhereInput[]
  }

  export type ClosedTasksUncheckedUpdateManyWithoutSubSectionNestedInput = {
    create?: XOR<ClosedTasksCreateWithoutSubSectionInput, ClosedTasksUncheckedCreateWithoutSubSectionInput> | ClosedTasksCreateWithoutSubSectionInput[] | ClosedTasksUncheckedCreateWithoutSubSectionInput[]
    connectOrCreate?: ClosedTasksCreateOrConnectWithoutSubSectionInput | ClosedTasksCreateOrConnectWithoutSubSectionInput[]
    upsert?: ClosedTasksUpsertWithWhereUniqueWithoutSubSectionInput | ClosedTasksUpsertWithWhereUniqueWithoutSubSectionInput[]
    createMany?: ClosedTasksCreateManySubSectionInputEnvelope
    set?: ClosedTasksWhereUniqueInput | ClosedTasksWhereUniqueInput[]
    disconnect?: ClosedTasksWhereUniqueInput | ClosedTasksWhereUniqueInput[]
    delete?: ClosedTasksWhereUniqueInput | ClosedTasksWhereUniqueInput[]
    connect?: ClosedTasksWhereUniqueInput | ClosedTasksWhereUniqueInput[]
    update?: ClosedTasksUpdateWithWhereUniqueWithoutSubSectionInput | ClosedTasksUpdateWithWhereUniqueWithoutSubSectionInput[]
    updateMany?: ClosedTasksUpdateManyWithWhereWithoutSubSectionInput | ClosedTasksUpdateManyWithWhereWithoutSubSectionInput[]
    deleteMany?: ClosedTasksScalarWhereInput | ClosedTasksScalarWhereInput[]
  }

  export type SubSectionCreateNestedOneWithoutOpenTasksInput = {
    create?: XOR<SubSectionCreateWithoutOpenTasksInput, SubSectionUncheckedCreateWithoutOpenTasksInput>
    connectOrCreate?: SubSectionCreateOrConnectWithoutOpenTasksInput
    connect?: SubSectionWhereUniqueInput
  }

  export type SubSectionUpdateOneRequiredWithoutOpenTasksNestedInput = {
    create?: XOR<SubSectionCreateWithoutOpenTasksInput, SubSectionUncheckedCreateWithoutOpenTasksInput>
    connectOrCreate?: SubSectionCreateOrConnectWithoutOpenTasksInput
    upsert?: SubSectionUpsertWithoutOpenTasksInput
    connect?: SubSectionWhereUniqueInput
    update?: XOR<XOR<SubSectionUpdateToOneWithWhereWithoutOpenTasksInput, SubSectionUpdateWithoutOpenTasksInput>, SubSectionUncheckedUpdateWithoutOpenTasksInput>
  }

  export type AnswersCreateNestedManyWithoutClosedTaskInput = {
    create?: XOR<AnswersCreateWithoutClosedTaskInput, AnswersUncheckedCreateWithoutClosedTaskInput> | AnswersCreateWithoutClosedTaskInput[] | AnswersUncheckedCreateWithoutClosedTaskInput[]
    connectOrCreate?: AnswersCreateOrConnectWithoutClosedTaskInput | AnswersCreateOrConnectWithoutClosedTaskInput[]
    createMany?: AnswersCreateManyClosedTaskInputEnvelope
    connect?: AnswersWhereUniqueInput | AnswersWhereUniqueInput[]
  }

  export type SubSectionCreateNestedOneWithoutClosedTasksInput = {
    create?: XOR<SubSectionCreateWithoutClosedTasksInput, SubSectionUncheckedCreateWithoutClosedTasksInput>
    connectOrCreate?: SubSectionCreateOrConnectWithoutClosedTasksInput
    connect?: SubSectionWhereUniqueInput
  }

  export type AnswersUncheckedCreateNestedManyWithoutClosedTaskInput = {
    create?: XOR<AnswersCreateWithoutClosedTaskInput, AnswersUncheckedCreateWithoutClosedTaskInput> | AnswersCreateWithoutClosedTaskInput[] | AnswersUncheckedCreateWithoutClosedTaskInput[]
    connectOrCreate?: AnswersCreateOrConnectWithoutClosedTaskInput | AnswersCreateOrConnectWithoutClosedTaskInput[]
    createMany?: AnswersCreateManyClosedTaskInputEnvelope
    connect?: AnswersWhereUniqueInput | AnswersWhereUniqueInput[]
  }

  export type AnswersUpdateManyWithoutClosedTaskNestedInput = {
    create?: XOR<AnswersCreateWithoutClosedTaskInput, AnswersUncheckedCreateWithoutClosedTaskInput> | AnswersCreateWithoutClosedTaskInput[] | AnswersUncheckedCreateWithoutClosedTaskInput[]
    connectOrCreate?: AnswersCreateOrConnectWithoutClosedTaskInput | AnswersCreateOrConnectWithoutClosedTaskInput[]
    upsert?: AnswersUpsertWithWhereUniqueWithoutClosedTaskInput | AnswersUpsertWithWhereUniqueWithoutClosedTaskInput[]
    createMany?: AnswersCreateManyClosedTaskInputEnvelope
    set?: AnswersWhereUniqueInput | AnswersWhereUniqueInput[]
    disconnect?: AnswersWhereUniqueInput | AnswersWhereUniqueInput[]
    delete?: AnswersWhereUniqueInput | AnswersWhereUniqueInput[]
    connect?: AnswersWhereUniqueInput | AnswersWhereUniqueInput[]
    update?: AnswersUpdateWithWhereUniqueWithoutClosedTaskInput | AnswersUpdateWithWhereUniqueWithoutClosedTaskInput[]
    updateMany?: AnswersUpdateManyWithWhereWithoutClosedTaskInput | AnswersUpdateManyWithWhereWithoutClosedTaskInput[]
    deleteMany?: AnswersScalarWhereInput | AnswersScalarWhereInput[]
  }

  export type SubSectionUpdateOneRequiredWithoutClosedTasksNestedInput = {
    create?: XOR<SubSectionCreateWithoutClosedTasksInput, SubSectionUncheckedCreateWithoutClosedTasksInput>
    connectOrCreate?: SubSectionCreateOrConnectWithoutClosedTasksInput
    upsert?: SubSectionUpsertWithoutClosedTasksInput
    connect?: SubSectionWhereUniqueInput
    update?: XOR<XOR<SubSectionUpdateToOneWithWhereWithoutClosedTasksInput, SubSectionUpdateWithoutClosedTasksInput>, SubSectionUncheckedUpdateWithoutClosedTasksInput>
  }

  export type AnswersUncheckedUpdateManyWithoutClosedTaskNestedInput = {
    create?: XOR<AnswersCreateWithoutClosedTaskInput, AnswersUncheckedCreateWithoutClosedTaskInput> | AnswersCreateWithoutClosedTaskInput[] | AnswersUncheckedCreateWithoutClosedTaskInput[]
    connectOrCreate?: AnswersCreateOrConnectWithoutClosedTaskInput | AnswersCreateOrConnectWithoutClosedTaskInput[]
    upsert?: AnswersUpsertWithWhereUniqueWithoutClosedTaskInput | AnswersUpsertWithWhereUniqueWithoutClosedTaskInput[]
    createMany?: AnswersCreateManyClosedTaskInputEnvelope
    set?: AnswersWhereUniqueInput | AnswersWhereUniqueInput[]
    disconnect?: AnswersWhereUniqueInput | AnswersWhereUniqueInput[]
    delete?: AnswersWhereUniqueInput | AnswersWhereUniqueInput[]
    connect?: AnswersWhereUniqueInput | AnswersWhereUniqueInput[]
    update?: AnswersUpdateWithWhereUniqueWithoutClosedTaskInput | AnswersUpdateWithWhereUniqueWithoutClosedTaskInput[]
    updateMany?: AnswersUpdateManyWithWhereWithoutClosedTaskInput | AnswersUpdateManyWithWhereWithoutClosedTaskInput[]
    deleteMany?: AnswersScalarWhereInput | AnswersScalarWhereInput[]
  }

  export type ClosedTasksCreateNestedOneWithoutAnswersInput = {
    create?: XOR<ClosedTasksCreateWithoutAnswersInput, ClosedTasksUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: ClosedTasksCreateOrConnectWithoutAnswersInput
    connect?: ClosedTasksWhereUniqueInput
  }

  export type ClosedTasksUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<ClosedTasksCreateWithoutAnswersInput, ClosedTasksUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: ClosedTasksCreateOrConnectWithoutAnswersInput
    upsert?: ClosedTasksUpsertWithoutAnswersInput
    connect?: ClosedTasksWhereUniqueInput
    update?: XOR<XOR<ClosedTasksUpdateToOneWithWhereWithoutAnswersInput, ClosedTasksUpdateWithoutAnswersInput>, ClosedTasksUncheckedUpdateWithoutAnswersInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type QuestionCreateWithoutUserInput = {
    title: string
    text: string
    time: number
    answers?: AnswerCreateNestedManyWithoutQuestionInput
    video: VideoCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    text: string
    videoId: number
    time: number
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutUserInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutUserInput, QuestionUncheckedCreateWithoutUserInput>
  }

  export type QuestionCreateManyUserInputEnvelope = {
    data: QuestionCreateManyUserInput | QuestionCreateManyUserInput[]
  }

  export type QuestionUpsertWithWhereUniqueWithoutUserInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutUserInput, QuestionUncheckedUpdateWithoutUserInput>
    create: XOR<QuestionCreateWithoutUserInput, QuestionUncheckedCreateWithoutUserInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutUserInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutUserInput, QuestionUncheckedUpdateWithoutUserInput>
  }

  export type QuestionUpdateManyWithWhereWithoutUserInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutUserInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: IntFilter<"Question"> | number
    title?: StringFilter<"Question"> | string
    text?: StringFilter<"Question"> | string
    videoId?: IntFilter<"Question"> | number
    time?: IntFilter<"Question"> | number
    userId?: StringFilter<"Question"> | string
  }

  export type QuestionCreateWithoutVideoInput = {
    title: string
    text: string
    time: number
    answers?: AnswerCreateNestedManyWithoutQuestionInput
    user: UserCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionUncheckedCreateWithoutVideoInput = {
    id?: number
    title: string
    text: string
    time: number
    userId: string
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutVideoInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutVideoInput, QuestionUncheckedCreateWithoutVideoInput>
  }

  export type QuestionCreateManyVideoInputEnvelope = {
    data: QuestionCreateManyVideoInput | QuestionCreateManyVideoInput[]
  }

  export type QuestionUpsertWithWhereUniqueWithoutVideoInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutVideoInput, QuestionUncheckedUpdateWithoutVideoInput>
    create: XOR<QuestionCreateWithoutVideoInput, QuestionUncheckedCreateWithoutVideoInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutVideoInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutVideoInput, QuestionUncheckedUpdateWithoutVideoInput>
  }

  export type QuestionUpdateManyWithWhereWithoutVideoInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutVideoInput>
  }

  export type AnswerCreateWithoutQuestionInput = {
    text: string
  }

  export type AnswerUncheckedCreateWithoutQuestionInput = {
    id?: number
    text: string
  }

  export type AnswerCreateOrConnectWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerCreateManyQuestionInputEnvelope = {
    data: AnswerCreateManyQuestionInput | AnswerCreateManyQuestionInput[]
  }

  export type VideoCreateWithoutQuestionsInput = {
    url: string
  }

  export type VideoUncheckedCreateWithoutQuestionsInput = {
    id?: number
    url: string
  }

  export type VideoCreateOrConnectWithoutQuestionsInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutQuestionsInput, VideoUncheckedCreateWithoutQuestionsInput>
  }

  export type UserCreateWithoutQuestionsInput = {
    id?: string
    clerkId: string
    firstName?: string | null
    lastName?: string | null
    email: string
    createDate?: Date | string
    updateDate?: Date | string
  }

  export type UserUncheckedCreateWithoutQuestionsInput = {
    id?: string
    clerkId: string
    firstName?: string | null
    lastName?: string | null
    email: string
    createDate?: Date | string
    updateDate?: Date | string
  }

  export type UserCreateOrConnectWithoutQuestionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQuestionsInput, UserUncheckedCreateWithoutQuestionsInput>
  }

  export type AnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutQuestionInput, AnswerUncheckedUpdateWithoutQuestionInput>
    create: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutQuestionInput, AnswerUncheckedUpdateWithoutQuestionInput>
  }

  export type AnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutQuestionInput>
  }

  export type AnswerScalarWhereInput = {
    AND?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    OR?: AnswerScalarWhereInput[]
    NOT?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    id?: IntFilter<"Answer"> | number
    text?: StringFilter<"Answer"> | string
    questionId?: IntFilter<"Answer"> | number
  }

  export type VideoUpsertWithoutQuestionsInput = {
    update: XOR<VideoUpdateWithoutQuestionsInput, VideoUncheckedUpdateWithoutQuestionsInput>
    create: XOR<VideoCreateWithoutQuestionsInput, VideoUncheckedCreateWithoutQuestionsInput>
    where?: VideoWhereInput
  }

  export type VideoUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: VideoWhereInput
    data: XOR<VideoUpdateWithoutQuestionsInput, VideoUncheckedUpdateWithoutQuestionsInput>
  }

  export type VideoUpdateWithoutQuestionsInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type VideoUncheckedUpdateWithoutQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutQuestionsInput = {
    update: XOR<UserUpdateWithoutQuestionsInput, UserUncheckedUpdateWithoutQuestionsInput>
    create: XOR<UserCreateWithoutQuestionsInput, UserUncheckedCreateWithoutQuestionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQuestionsInput, UserUncheckedUpdateWithoutQuestionsInput>
  }

  export type UserUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateWithoutAnswersInput = {
    title: string
    text: string
    time: number
    video: VideoCreateNestedOneWithoutQuestionsInput
    user: UserCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionUncheckedCreateWithoutAnswersInput = {
    id?: number
    title: string
    text: string
    videoId: number
    time: number
    userId: string
  }

  export type QuestionCreateOrConnectWithoutAnswersInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
  }

  export type QuestionUpsertWithoutAnswersInput = {
    update: XOR<QuestionUpdateWithoutAnswersInput, QuestionUncheckedUpdateWithoutAnswersInput>
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutAnswersInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutAnswersInput, QuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type QuestionUpdateWithoutAnswersInput = {
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    video?: VideoUpdateOneRequiredWithoutQuestionsNestedInput
    user?: UserUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type QuestionUncheckedUpdateWithoutAnswersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    videoId?: IntFieldUpdateOperationsInput | number
    time?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SectionCreateWithoutAlltasksInput = {
    id?: string
    name: string
    subsections?: SubSectionCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateWithoutAlltasksInput = {
    id?: string
    name: string
    subsections?: SubSectionUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionCreateOrConnectWithoutAlltasksInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutAlltasksInput, SectionUncheckedCreateWithoutAlltasksInput>
  }

  export type SectionCreateManyAlltasksInputEnvelope = {
    data: SectionCreateManyAlltasksInput | SectionCreateManyAlltasksInput[]
  }

  export type SectionUpsertWithWhereUniqueWithoutAlltasksInput = {
    where: SectionWhereUniqueInput
    update: XOR<SectionUpdateWithoutAlltasksInput, SectionUncheckedUpdateWithoutAlltasksInput>
    create: XOR<SectionCreateWithoutAlltasksInput, SectionUncheckedCreateWithoutAlltasksInput>
  }

  export type SectionUpdateWithWhereUniqueWithoutAlltasksInput = {
    where: SectionWhereUniqueInput
    data: XOR<SectionUpdateWithoutAlltasksInput, SectionUncheckedUpdateWithoutAlltasksInput>
  }

  export type SectionUpdateManyWithWhereWithoutAlltasksInput = {
    where: SectionScalarWhereInput
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyWithoutAlltasksInput>
  }

  export type SectionScalarWhereInput = {
    AND?: SectionScalarWhereInput | SectionScalarWhereInput[]
    OR?: SectionScalarWhereInput[]
    NOT?: SectionScalarWhereInput | SectionScalarWhereInput[]
    id?: StringFilter<"Section"> | string
    name?: StringFilter<"Section"> | string
    alltasksId?: StringFilter<"Section"> | string
  }

  export type AlltasksCreateWithoutSectionsInput = {
    id?: string
  }

  export type AlltasksUncheckedCreateWithoutSectionsInput = {
    id?: string
  }

  export type AlltasksCreateOrConnectWithoutSectionsInput = {
    where: AlltasksWhereUniqueInput
    create: XOR<AlltasksCreateWithoutSectionsInput, AlltasksUncheckedCreateWithoutSectionsInput>
  }

  export type SubSectionCreateWithoutSectionInput = {
    id?: string
    name: string
    mustBeShuffle: boolean
    closedTasksToShuffle?: number | null
    openTasksToShuffle?: number | null
    openTasks?: OpenTasksCreateNestedManyWithoutSubSectionInput
    closedTasks?: ClosedTasksCreateNestedManyWithoutSubSectionInput
  }

  export type SubSectionUncheckedCreateWithoutSectionInput = {
    id?: string
    name: string
    mustBeShuffle: boolean
    closedTasksToShuffle?: number | null
    openTasksToShuffle?: number | null
    openTasks?: OpenTasksUncheckedCreateNestedManyWithoutSubSectionInput
    closedTasks?: ClosedTasksUncheckedCreateNestedManyWithoutSubSectionInput
  }

  export type SubSectionCreateOrConnectWithoutSectionInput = {
    where: SubSectionWhereUniqueInput
    create: XOR<SubSectionCreateWithoutSectionInput, SubSectionUncheckedCreateWithoutSectionInput>
  }

  export type SubSectionCreateManySectionInputEnvelope = {
    data: SubSectionCreateManySectionInput | SubSectionCreateManySectionInput[]
  }

  export type AlltasksUpsertWithoutSectionsInput = {
    update: XOR<AlltasksUpdateWithoutSectionsInput, AlltasksUncheckedUpdateWithoutSectionsInput>
    create: XOR<AlltasksCreateWithoutSectionsInput, AlltasksUncheckedCreateWithoutSectionsInput>
    where?: AlltasksWhereInput
  }

  export type AlltasksUpdateToOneWithWhereWithoutSectionsInput = {
    where?: AlltasksWhereInput
    data: XOR<AlltasksUpdateWithoutSectionsInput, AlltasksUncheckedUpdateWithoutSectionsInput>
  }

  export type AlltasksUpdateWithoutSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type AlltasksUncheckedUpdateWithoutSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type SubSectionUpsertWithWhereUniqueWithoutSectionInput = {
    where: SubSectionWhereUniqueInput
    update: XOR<SubSectionUpdateWithoutSectionInput, SubSectionUncheckedUpdateWithoutSectionInput>
    create: XOR<SubSectionCreateWithoutSectionInput, SubSectionUncheckedCreateWithoutSectionInput>
  }

  export type SubSectionUpdateWithWhereUniqueWithoutSectionInput = {
    where: SubSectionWhereUniqueInput
    data: XOR<SubSectionUpdateWithoutSectionInput, SubSectionUncheckedUpdateWithoutSectionInput>
  }

  export type SubSectionUpdateManyWithWhereWithoutSectionInput = {
    where: SubSectionScalarWhereInput
    data: XOR<SubSectionUpdateManyMutationInput, SubSectionUncheckedUpdateManyWithoutSectionInput>
  }

  export type SubSectionScalarWhereInput = {
    AND?: SubSectionScalarWhereInput | SubSectionScalarWhereInput[]
    OR?: SubSectionScalarWhereInput[]
    NOT?: SubSectionScalarWhereInput | SubSectionScalarWhereInput[]
    id?: StringFilter<"SubSection"> | string
    name?: StringFilter<"SubSection"> | string
    sectionId?: StringFilter<"SubSection"> | string
    mustBeShuffle?: BoolFilter<"SubSection"> | boolean
    closedTasksToShuffle?: IntNullableFilter<"SubSection"> | number | null
    openTasksToShuffle?: IntNullableFilter<"SubSection"> | number | null
  }

  export type SectionCreateWithoutSubsectionsInput = {
    id?: string
    name: string
    alltasks: AlltasksCreateNestedOneWithoutSectionsInput
  }

  export type SectionUncheckedCreateWithoutSubsectionsInput = {
    id?: string
    name: string
    alltasksId: string
  }

  export type SectionCreateOrConnectWithoutSubsectionsInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutSubsectionsInput, SectionUncheckedCreateWithoutSubsectionsInput>
  }

  export type OpenTasksCreateWithoutSubSectionInput = {
    id?: string
    name: string
    content: string
    answer: number
    openTaskId?: string | null
  }

  export type OpenTasksUncheckedCreateWithoutSubSectionInput = {
    id?: string
    name: string
    content: string
    answer: number
    openTaskId?: string | null
  }

  export type OpenTasksCreateOrConnectWithoutSubSectionInput = {
    where: OpenTasksWhereUniqueInput
    create: XOR<OpenTasksCreateWithoutSubSectionInput, OpenTasksUncheckedCreateWithoutSubSectionInput>
  }

  export type OpenTasksCreateManySubSectionInputEnvelope = {
    data: OpenTasksCreateManySubSectionInput | OpenTasksCreateManySubSectionInput[]
  }

  export type ClosedTasksCreateWithoutSubSectionInput = {
    id?: string
    name: string
    content: string
    correctAnswer: string
    answers?: AnswersCreateNestedManyWithoutClosedTaskInput
  }

  export type ClosedTasksUncheckedCreateWithoutSubSectionInput = {
    id?: string
    name: string
    content: string
    correctAnswer: string
    answers?: AnswersUncheckedCreateNestedManyWithoutClosedTaskInput
  }

  export type ClosedTasksCreateOrConnectWithoutSubSectionInput = {
    where: ClosedTasksWhereUniqueInput
    create: XOR<ClosedTasksCreateWithoutSubSectionInput, ClosedTasksUncheckedCreateWithoutSubSectionInput>
  }

  export type ClosedTasksCreateManySubSectionInputEnvelope = {
    data: ClosedTasksCreateManySubSectionInput | ClosedTasksCreateManySubSectionInput[]
  }

  export type SectionUpsertWithoutSubsectionsInput = {
    update: XOR<SectionUpdateWithoutSubsectionsInput, SectionUncheckedUpdateWithoutSubsectionsInput>
    create: XOR<SectionCreateWithoutSubsectionsInput, SectionUncheckedCreateWithoutSubsectionsInput>
    where?: SectionWhereInput
  }

  export type SectionUpdateToOneWithWhereWithoutSubsectionsInput = {
    where?: SectionWhereInput
    data: XOR<SectionUpdateWithoutSubsectionsInput, SectionUncheckedUpdateWithoutSubsectionsInput>
  }

  export type SectionUpdateWithoutSubsectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    alltasks?: AlltasksUpdateOneRequiredWithoutSectionsNestedInput
  }

  export type SectionUncheckedUpdateWithoutSubsectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    alltasksId?: StringFieldUpdateOperationsInput | string
  }

  export type OpenTasksUpsertWithWhereUniqueWithoutSubSectionInput = {
    where: OpenTasksWhereUniqueInput
    update: XOR<OpenTasksUpdateWithoutSubSectionInput, OpenTasksUncheckedUpdateWithoutSubSectionInput>
    create: XOR<OpenTasksCreateWithoutSubSectionInput, OpenTasksUncheckedCreateWithoutSubSectionInput>
  }

  export type OpenTasksUpdateWithWhereUniqueWithoutSubSectionInput = {
    where: OpenTasksWhereUniqueInput
    data: XOR<OpenTasksUpdateWithoutSubSectionInput, OpenTasksUncheckedUpdateWithoutSubSectionInput>
  }

  export type OpenTasksUpdateManyWithWhereWithoutSubSectionInput = {
    where: OpenTasksScalarWhereInput
    data: XOR<OpenTasksUpdateManyMutationInput, OpenTasksUncheckedUpdateManyWithoutSubSectionInput>
  }

  export type OpenTasksScalarWhereInput = {
    AND?: OpenTasksScalarWhereInput | OpenTasksScalarWhereInput[]
    OR?: OpenTasksScalarWhereInput[]
    NOT?: OpenTasksScalarWhereInput | OpenTasksScalarWhereInput[]
    id?: StringFilter<"OpenTasks"> | string
    name?: StringFilter<"OpenTasks"> | string
    content?: StringFilter<"OpenTasks"> | string
    answer?: IntFilter<"OpenTasks"> | number
    subSectionId?: StringFilter<"OpenTasks"> | string
    openTaskId?: StringNullableFilter<"OpenTasks"> | string | null
  }

  export type ClosedTasksUpsertWithWhereUniqueWithoutSubSectionInput = {
    where: ClosedTasksWhereUniqueInput
    update: XOR<ClosedTasksUpdateWithoutSubSectionInput, ClosedTasksUncheckedUpdateWithoutSubSectionInput>
    create: XOR<ClosedTasksCreateWithoutSubSectionInput, ClosedTasksUncheckedCreateWithoutSubSectionInput>
  }

  export type ClosedTasksUpdateWithWhereUniqueWithoutSubSectionInput = {
    where: ClosedTasksWhereUniqueInput
    data: XOR<ClosedTasksUpdateWithoutSubSectionInput, ClosedTasksUncheckedUpdateWithoutSubSectionInput>
  }

  export type ClosedTasksUpdateManyWithWhereWithoutSubSectionInput = {
    where: ClosedTasksScalarWhereInput
    data: XOR<ClosedTasksUpdateManyMutationInput, ClosedTasksUncheckedUpdateManyWithoutSubSectionInput>
  }

  export type ClosedTasksScalarWhereInput = {
    AND?: ClosedTasksScalarWhereInput | ClosedTasksScalarWhereInput[]
    OR?: ClosedTasksScalarWhereInput[]
    NOT?: ClosedTasksScalarWhereInput | ClosedTasksScalarWhereInput[]
    id?: StringFilter<"ClosedTasks"> | string
    name?: StringFilter<"ClosedTasks"> | string
    content?: StringFilter<"ClosedTasks"> | string
    correctAnswer?: StringFilter<"ClosedTasks"> | string
    subSectionId?: StringFilter<"ClosedTasks"> | string
  }

  export type SubSectionCreateWithoutOpenTasksInput = {
    id?: string
    name: string
    mustBeShuffle: boolean
    closedTasksToShuffle?: number | null
    openTasksToShuffle?: number | null
    section: SectionCreateNestedOneWithoutSubsectionsInput
    closedTasks?: ClosedTasksCreateNestedManyWithoutSubSectionInput
  }

  export type SubSectionUncheckedCreateWithoutOpenTasksInput = {
    id?: string
    name: string
    sectionId: string
    mustBeShuffle: boolean
    closedTasksToShuffle?: number | null
    openTasksToShuffle?: number | null
    closedTasks?: ClosedTasksUncheckedCreateNestedManyWithoutSubSectionInput
  }

  export type SubSectionCreateOrConnectWithoutOpenTasksInput = {
    where: SubSectionWhereUniqueInput
    create: XOR<SubSectionCreateWithoutOpenTasksInput, SubSectionUncheckedCreateWithoutOpenTasksInput>
  }

  export type SubSectionUpsertWithoutOpenTasksInput = {
    update: XOR<SubSectionUpdateWithoutOpenTasksInput, SubSectionUncheckedUpdateWithoutOpenTasksInput>
    create: XOR<SubSectionCreateWithoutOpenTasksInput, SubSectionUncheckedCreateWithoutOpenTasksInput>
    where?: SubSectionWhereInput
  }

  export type SubSectionUpdateToOneWithWhereWithoutOpenTasksInput = {
    where?: SubSectionWhereInput
    data: XOR<SubSectionUpdateWithoutOpenTasksInput, SubSectionUncheckedUpdateWithoutOpenTasksInput>
  }

  export type SubSectionUpdateWithoutOpenTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mustBeShuffle?: BoolFieldUpdateOperationsInput | boolean
    closedTasksToShuffle?: NullableIntFieldUpdateOperationsInput | number | null
    openTasksToShuffle?: NullableIntFieldUpdateOperationsInput | number | null
    section?: SectionUpdateOneRequiredWithoutSubsectionsNestedInput
    closedTasks?: ClosedTasksUpdateManyWithoutSubSectionNestedInput
  }

  export type SubSectionUncheckedUpdateWithoutOpenTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    mustBeShuffle?: BoolFieldUpdateOperationsInput | boolean
    closedTasksToShuffle?: NullableIntFieldUpdateOperationsInput | number | null
    openTasksToShuffle?: NullableIntFieldUpdateOperationsInput | number | null
    closedTasks?: ClosedTasksUncheckedUpdateManyWithoutSubSectionNestedInput
  }

  export type AnswersCreateWithoutClosedTaskInput = {
    id?: string
    A: string
    B: string
    C: string
    D: string
  }

  export type AnswersUncheckedCreateWithoutClosedTaskInput = {
    id?: string
    A: string
    B: string
    C: string
    D: string
  }

  export type AnswersCreateOrConnectWithoutClosedTaskInput = {
    where: AnswersWhereUniqueInput
    create: XOR<AnswersCreateWithoutClosedTaskInput, AnswersUncheckedCreateWithoutClosedTaskInput>
  }

  export type AnswersCreateManyClosedTaskInputEnvelope = {
    data: AnswersCreateManyClosedTaskInput | AnswersCreateManyClosedTaskInput[]
  }

  export type SubSectionCreateWithoutClosedTasksInput = {
    id?: string
    name: string
    mustBeShuffle: boolean
    closedTasksToShuffle?: number | null
    openTasksToShuffle?: number | null
    section: SectionCreateNestedOneWithoutSubsectionsInput
    openTasks?: OpenTasksCreateNestedManyWithoutSubSectionInput
  }

  export type SubSectionUncheckedCreateWithoutClosedTasksInput = {
    id?: string
    name: string
    sectionId: string
    mustBeShuffle: boolean
    closedTasksToShuffle?: number | null
    openTasksToShuffle?: number | null
    openTasks?: OpenTasksUncheckedCreateNestedManyWithoutSubSectionInput
  }

  export type SubSectionCreateOrConnectWithoutClosedTasksInput = {
    where: SubSectionWhereUniqueInput
    create: XOR<SubSectionCreateWithoutClosedTasksInput, SubSectionUncheckedCreateWithoutClosedTasksInput>
  }

  export type AnswersUpsertWithWhereUniqueWithoutClosedTaskInput = {
    where: AnswersWhereUniqueInput
    update: XOR<AnswersUpdateWithoutClosedTaskInput, AnswersUncheckedUpdateWithoutClosedTaskInput>
    create: XOR<AnswersCreateWithoutClosedTaskInput, AnswersUncheckedCreateWithoutClosedTaskInput>
  }

  export type AnswersUpdateWithWhereUniqueWithoutClosedTaskInput = {
    where: AnswersWhereUniqueInput
    data: XOR<AnswersUpdateWithoutClosedTaskInput, AnswersUncheckedUpdateWithoutClosedTaskInput>
  }

  export type AnswersUpdateManyWithWhereWithoutClosedTaskInput = {
    where: AnswersScalarWhereInput
    data: XOR<AnswersUpdateManyMutationInput, AnswersUncheckedUpdateManyWithoutClosedTaskInput>
  }

  export type AnswersScalarWhereInput = {
    AND?: AnswersScalarWhereInput | AnswersScalarWhereInput[]
    OR?: AnswersScalarWhereInput[]
    NOT?: AnswersScalarWhereInput | AnswersScalarWhereInput[]
    id?: StringFilter<"Answers"> | string
    A?: StringFilter<"Answers"> | string
    B?: StringFilter<"Answers"> | string
    C?: StringFilter<"Answers"> | string
    D?: StringFilter<"Answers"> | string
    closedTaskId?: StringFilter<"Answers"> | string
  }

  export type SubSectionUpsertWithoutClosedTasksInput = {
    update: XOR<SubSectionUpdateWithoutClosedTasksInput, SubSectionUncheckedUpdateWithoutClosedTasksInput>
    create: XOR<SubSectionCreateWithoutClosedTasksInput, SubSectionUncheckedCreateWithoutClosedTasksInput>
    where?: SubSectionWhereInput
  }

  export type SubSectionUpdateToOneWithWhereWithoutClosedTasksInput = {
    where?: SubSectionWhereInput
    data: XOR<SubSectionUpdateWithoutClosedTasksInput, SubSectionUncheckedUpdateWithoutClosedTasksInput>
  }

  export type SubSectionUpdateWithoutClosedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mustBeShuffle?: BoolFieldUpdateOperationsInput | boolean
    closedTasksToShuffle?: NullableIntFieldUpdateOperationsInput | number | null
    openTasksToShuffle?: NullableIntFieldUpdateOperationsInput | number | null
    section?: SectionUpdateOneRequiredWithoutSubsectionsNestedInput
    openTasks?: OpenTasksUpdateManyWithoutSubSectionNestedInput
  }

  export type SubSectionUncheckedUpdateWithoutClosedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    mustBeShuffle?: BoolFieldUpdateOperationsInput | boolean
    closedTasksToShuffle?: NullableIntFieldUpdateOperationsInput | number | null
    openTasksToShuffle?: NullableIntFieldUpdateOperationsInput | number | null
    openTasks?: OpenTasksUncheckedUpdateManyWithoutSubSectionNestedInput
  }

  export type ClosedTasksCreateWithoutAnswersInput = {
    id?: string
    name: string
    content: string
    correctAnswer: string
    subSection: SubSectionCreateNestedOneWithoutClosedTasksInput
  }

  export type ClosedTasksUncheckedCreateWithoutAnswersInput = {
    id?: string
    name: string
    content: string
    correctAnswer: string
    subSectionId: string
  }

  export type ClosedTasksCreateOrConnectWithoutAnswersInput = {
    where: ClosedTasksWhereUniqueInput
    create: XOR<ClosedTasksCreateWithoutAnswersInput, ClosedTasksUncheckedCreateWithoutAnswersInput>
  }

  export type ClosedTasksUpsertWithoutAnswersInput = {
    update: XOR<ClosedTasksUpdateWithoutAnswersInput, ClosedTasksUncheckedUpdateWithoutAnswersInput>
    create: XOR<ClosedTasksCreateWithoutAnswersInput, ClosedTasksUncheckedCreateWithoutAnswersInput>
    where?: ClosedTasksWhereInput
  }

  export type ClosedTasksUpdateToOneWithWhereWithoutAnswersInput = {
    where?: ClosedTasksWhereInput
    data: XOR<ClosedTasksUpdateWithoutAnswersInput, ClosedTasksUncheckedUpdateWithoutAnswersInput>
  }

  export type ClosedTasksUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    subSection?: SubSectionUpdateOneRequiredWithoutClosedTasksNestedInput
  }

  export type ClosedTasksUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    subSectionId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionCreateManyUserInput = {
    id?: number
    title: string
    text: string
    videoId: number
    time: number
  }

  export type QuestionUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
    video?: VideoUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type QuestionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    videoId?: IntFieldUpdateOperationsInput | number
    time?: IntFieldUpdateOperationsInput | number
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    videoId?: IntFieldUpdateOperationsInput | number
    time?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionCreateManyVideoInput = {
    id?: number
    title: string
    text: string
    time: number
    userId: string
  }

  export type QuestionUpdateWithoutVideoInput = {
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
    user?: UserUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type QuestionUncheckedUpdateWithoutVideoInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutVideoInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AnswerCreateManyQuestionInput = {
    id?: number
    text: string
  }

  export type AnswerUpdateWithoutQuestionInput = {
    text?: StringFieldUpdateOperationsInput | string
  }

  export type AnswerUncheckedUpdateWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type AnswerUncheckedUpdateManyWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type SectionCreateManyAlltasksInput = {
    id?: string
    name: string
  }

  export type SectionUpdateWithoutAlltasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subsections?: SubSectionUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateWithoutAlltasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subsections?: SubSectionUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateManyWithoutAlltasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SubSectionCreateManySectionInput = {
    id?: string
    name: string
    mustBeShuffle: boolean
    closedTasksToShuffle?: number | null
    openTasksToShuffle?: number | null
  }

  export type SubSectionUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mustBeShuffle?: BoolFieldUpdateOperationsInput | boolean
    closedTasksToShuffle?: NullableIntFieldUpdateOperationsInput | number | null
    openTasksToShuffle?: NullableIntFieldUpdateOperationsInput | number | null
    openTasks?: OpenTasksUpdateManyWithoutSubSectionNestedInput
    closedTasks?: ClosedTasksUpdateManyWithoutSubSectionNestedInput
  }

  export type SubSectionUncheckedUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mustBeShuffle?: BoolFieldUpdateOperationsInput | boolean
    closedTasksToShuffle?: NullableIntFieldUpdateOperationsInput | number | null
    openTasksToShuffle?: NullableIntFieldUpdateOperationsInput | number | null
    openTasks?: OpenTasksUncheckedUpdateManyWithoutSubSectionNestedInput
    closedTasks?: ClosedTasksUncheckedUpdateManyWithoutSubSectionNestedInput
  }

  export type SubSectionUncheckedUpdateManyWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mustBeShuffle?: BoolFieldUpdateOperationsInput | boolean
    closedTasksToShuffle?: NullableIntFieldUpdateOperationsInput | number | null
    openTasksToShuffle?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OpenTasksCreateManySubSectionInput = {
    id?: string
    name: string
    content: string
    answer: number
    openTaskId?: string | null
  }

  export type ClosedTasksCreateManySubSectionInput = {
    id?: string
    name: string
    content: string
    correctAnswer: string
  }

  export type OpenTasksUpdateWithoutSubSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    answer?: IntFieldUpdateOperationsInput | number
    openTaskId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OpenTasksUncheckedUpdateWithoutSubSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    answer?: IntFieldUpdateOperationsInput | number
    openTaskId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OpenTasksUncheckedUpdateManyWithoutSubSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    answer?: IntFieldUpdateOperationsInput | number
    openTaskId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClosedTasksUpdateWithoutSubSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    answers?: AnswersUpdateManyWithoutClosedTaskNestedInput
  }

  export type ClosedTasksUncheckedUpdateWithoutSubSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    answers?: AnswersUncheckedUpdateManyWithoutClosedTaskNestedInput
  }

  export type ClosedTasksUncheckedUpdateManyWithoutSubSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
  }

  export type AnswersCreateManyClosedTaskInput = {
    id?: string
    A: string
    B: string
    C: string
    D: string
  }

  export type AnswersUpdateWithoutClosedTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    A?: StringFieldUpdateOperationsInput | string
    B?: StringFieldUpdateOperationsInput | string
    C?: StringFieldUpdateOperationsInput | string
    D?: StringFieldUpdateOperationsInput | string
  }

  export type AnswersUncheckedUpdateWithoutClosedTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    A?: StringFieldUpdateOperationsInput | string
    B?: StringFieldUpdateOperationsInput | string
    C?: StringFieldUpdateOperationsInput | string
    D?: StringFieldUpdateOperationsInput | string
  }

  export type AnswersUncheckedUpdateManyWithoutClosedTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    A?: StringFieldUpdateOperationsInput | string
    B?: StringFieldUpdateOperationsInput | string
    C?: StringFieldUpdateOperationsInput | string
    D?: StringFieldUpdateOperationsInput | string
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