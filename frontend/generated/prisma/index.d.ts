
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
 * Model Matura
 * 
 */
export type Matura = $Result.DefaultSelection<Prisma.$MaturaPayload>
/**
 * Model UserMatura
 * 
 */
export type UserMatura = $Result.DefaultSelection<Prisma.$UserMaturaPayload>
/**
 * Model UserClosedAnswer
 * 
 */
export type UserClosedAnswer = $Result.DefaultSelection<Prisma.$UserClosedAnswerPayload>
/**
 * Model UserOpenAnswer
 * 
 */
export type UserOpenAnswer = $Result.DefaultSelection<Prisma.$UserOpenAnswerPayload>

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

  /**
   * `prisma.matura`: Exposes CRUD operations for the **Matura** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Maturas
    * const maturas = await prisma.matura.findMany()
    * ```
    */
  get matura(): Prisma.MaturaDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.userClosedAnswer`: Exposes CRUD operations for the **UserClosedAnswer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserClosedAnswers
    * const userClosedAnswers = await prisma.userClosedAnswer.findMany()
    * ```
    */
  get userClosedAnswer(): Prisma.UserClosedAnswerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userOpenAnswer`: Exposes CRUD operations for the **UserOpenAnswer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserOpenAnswers
    * const userOpenAnswers = await prisma.userOpenAnswer.findMany()
    * ```
    */
  get userOpenAnswer(): Prisma.UserOpenAnswerDelegate<ExtArgs, ClientOptions>;
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
    Video: 'Video',
    Question: 'Question',
    Answer: 'Answer',
    Alltasks: 'Alltasks',
    Section: 'Section',
    SubSection: 'SubSection',
    OpenTasks: 'OpenTasks',
    ClosedTasks: 'ClosedTasks',
    Answers: 'Answers',
    Matura: 'Matura',
    UserMatura: 'UserMatura',
    UserClosedAnswer: 'UserClosedAnswer',
    UserOpenAnswer: 'UserOpenAnswer'
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
      modelProps: "user" | "video" | "question" | "answer" | "alltasks" | "section" | "subSection" | "openTasks" | "closedTasks" | "answers" | "matura" | "userMatura" | "userClosedAnswer" | "userOpenAnswer"
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
      UserClosedAnswer: {
        payload: Prisma.$UserClosedAnswerPayload<ExtArgs>
        fields: Prisma.UserClosedAnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserClosedAnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserClosedAnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserClosedAnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserClosedAnswerPayload>
          }
          findFirst: {
            args: Prisma.UserClosedAnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserClosedAnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserClosedAnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserClosedAnswerPayload>
          }
          findMany: {
            args: Prisma.UserClosedAnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserClosedAnswerPayload>[]
          }
          create: {
            args: Prisma.UserClosedAnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserClosedAnswerPayload>
          }
          createMany: {
            args: Prisma.UserClosedAnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserClosedAnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserClosedAnswerPayload>[]
          }
          delete: {
            args: Prisma.UserClosedAnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserClosedAnswerPayload>
          }
          update: {
            args: Prisma.UserClosedAnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserClosedAnswerPayload>
          }
          deleteMany: {
            args: Prisma.UserClosedAnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserClosedAnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserClosedAnswerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserClosedAnswerPayload>[]
          }
          upsert: {
            args: Prisma.UserClosedAnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserClosedAnswerPayload>
          }
          aggregate: {
            args: Prisma.UserClosedAnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserClosedAnswer>
          }
          groupBy: {
            args: Prisma.UserClosedAnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserClosedAnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserClosedAnswerCountArgs<ExtArgs>
            result: $Utils.Optional<UserClosedAnswerCountAggregateOutputType> | number
          }
        }
      }
      UserOpenAnswer: {
        payload: Prisma.$UserOpenAnswerPayload<ExtArgs>
        fields: Prisma.UserOpenAnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserOpenAnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOpenAnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserOpenAnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOpenAnswerPayload>
          }
          findFirst: {
            args: Prisma.UserOpenAnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOpenAnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserOpenAnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOpenAnswerPayload>
          }
          findMany: {
            args: Prisma.UserOpenAnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOpenAnswerPayload>[]
          }
          create: {
            args: Prisma.UserOpenAnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOpenAnswerPayload>
          }
          createMany: {
            args: Prisma.UserOpenAnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserOpenAnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOpenAnswerPayload>[]
          }
          delete: {
            args: Prisma.UserOpenAnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOpenAnswerPayload>
          }
          update: {
            args: Prisma.UserOpenAnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOpenAnswerPayload>
          }
          deleteMany: {
            args: Prisma.UserOpenAnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserOpenAnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserOpenAnswerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOpenAnswerPayload>[]
          }
          upsert: {
            args: Prisma.UserOpenAnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOpenAnswerPayload>
          }
          aggregate: {
            args: Prisma.UserOpenAnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserOpenAnswer>
          }
          groupBy: {
            args: Prisma.UserOpenAnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserOpenAnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserOpenAnswerCountArgs<ExtArgs>
            result: $Utils.Optional<UserOpenAnswerCountAggregateOutputType> | number
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
    matura?: MaturaOmit
    userMatura?: UserMaturaOmit
    userClosedAnswer?: UserClosedAnswerOmit
    userOpenAnswer?: UserOpenAnswerOmit
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
    answers: number
    userMaturas: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | UserCountOutputTypeCountQuestionsArgs
    answers?: boolean | UserCountOutputTypeCountAnswersArgs
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
  export type UserCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserMaturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserMaturaWhereInput
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
   * Count Type OpenTasksCountOutputType
   */

  export type OpenTasksCountOutputType = {
    maturas: number
    userAnswers: number
  }

  export type OpenTasksCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    maturas?: boolean | OpenTasksCountOutputTypeCountMaturasArgs
    userAnswers?: boolean | OpenTasksCountOutputTypeCountUserAnswersArgs
  }

  // Custom InputTypes
  /**
   * OpenTasksCountOutputType without action
   */
  export type OpenTasksCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpenTasksCountOutputType
     */
    select?: OpenTasksCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OpenTasksCountOutputType without action
   */
  export type OpenTasksCountOutputTypeCountMaturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaturaWhereInput
  }

  /**
   * OpenTasksCountOutputType without action
   */
  export type OpenTasksCountOutputTypeCountUserAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserOpenAnswerWhereInput
  }


  /**
   * Count Type ClosedTasksCountOutputType
   */

  export type ClosedTasksCountOutputType = {
    answers: number
    maturas: number
    userAnswers: number
  }

  export type ClosedTasksCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | ClosedTasksCountOutputTypeCountAnswersArgs
    maturas?: boolean | ClosedTasksCountOutputTypeCountMaturasArgs
    userAnswers?: boolean | ClosedTasksCountOutputTypeCountUserAnswersArgs
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
   * ClosedTasksCountOutputType without action
   */
  export type ClosedTasksCountOutputTypeCountMaturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaturaWhereInput
  }

  /**
   * ClosedTasksCountOutputType without action
   */
  export type ClosedTasksCountOutputTypeCountUserAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserClosedAnswerWhereInput
  }


  /**
   * Count Type MaturaCountOutputType
   */

  export type MaturaCountOutputType = {
    closedTasks: number
    openTasks: number
    userMaturas: number
  }

  export type MaturaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    closedTasks?: boolean | MaturaCountOutputTypeCountClosedTasksArgs
    openTasks?: boolean | MaturaCountOutputTypeCountOpenTasksArgs
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
  export type MaturaCountOutputTypeCountClosedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClosedTasksWhereInput
  }

  /**
   * MaturaCountOutputType without action
   */
  export type MaturaCountOutputTypeCountOpenTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpenTasksWhereInput
  }

  /**
   * MaturaCountOutputType without action
   */
  export type MaturaCountOutputTypeCountUserMaturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserMaturaWhereInput
  }


  /**
   * Count Type UserMaturaCountOutputType
   */

  export type UserMaturaCountOutputType = {
    closedAnswers: number
    openAnswers: number
  }

  export type UserMaturaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    closedAnswers?: boolean | UserMaturaCountOutputTypeCountClosedAnswersArgs
    openAnswers?: boolean | UserMaturaCountOutputTypeCountOpenAnswersArgs
  }

  // Custom InputTypes
  /**
   * UserMaturaCountOutputType without action
   */
  export type UserMaturaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMaturaCountOutputType
     */
    select?: UserMaturaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserMaturaCountOutputType without action
   */
  export type UserMaturaCountOutputTypeCountClosedAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserClosedAnswerWhereInput
  }

  /**
   * UserMaturaCountOutputType without action
   */
  export type UserMaturaCountOutputTypeCountOpenAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserOpenAnswerWhereInput
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
    answers?: boolean | User$answersArgs<ExtArgs>
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
    questions?: boolean | User$questionsArgs<ExtArgs>
    answers?: boolean | User$answersArgs<ExtArgs>
    userMaturas?: boolean | User$userMaturasArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      questions: Prisma.$QuestionPayload<ExtArgs>[]
      answers: Prisma.$AnswerPayload<ExtArgs>[]
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
    questions<T extends User$questionsArgs<ExtArgs> = {}>(args?: Subset<T, User$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    answers<T extends User$answersArgs<ExtArgs> = {}>(args?: Subset<T, User$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * User.answers
   */
  export type User$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    description: string | null
  }

  export type VideoMaxAggregateOutputType = {
    id: number | null
    url: string | null
    description: string | null
  }

  export type VideoCountAggregateOutputType = {
    id: number
    url: number
    description: number
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
    description?: true
  }

  export type VideoMaxAggregateInputType = {
    id?: true
    url?: true
    description?: true
  }

  export type VideoCountAggregateInputType = {
    id?: true
    url?: true
    description?: true
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
    description: string | null
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
    description?: boolean
    questions?: boolean | Video$questionsArgs<ExtArgs>
    _count?: boolean | VideoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type VideoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    description?: boolean
  }, ExtArgs["result"]["video"]>

  export type VideoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    description?: boolean
  }, ExtArgs["result"]["video"]>

  export type VideoSelectScalar = {
    id?: boolean
    url?: boolean
    description?: boolean
  }

  export type VideoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "description", ExtArgs["result"]["video"]>
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
      description: string | null
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
    readonly description: FieldRef<"Video", 'String'>
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
    isPublic: boolean | null
    userName: string | null
    lastName: string | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: number | null
    title: string | null
    text: string | null
    videoId: number | null
    time: number | null
    userId: string | null
    isPublic: boolean | null
    userName: string | null
    lastName: string | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    title: number
    text: number
    videoId: number
    time: number
    userId: number
    isPublic: number
    userName: number
    lastName: number
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
    isPublic?: true
    userName?: true
    lastName?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    title?: true
    text?: true
    videoId?: true
    time?: true
    userId?: true
    isPublic?: true
    userName?: true
    lastName?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    title?: true
    text?: true
    videoId?: true
    time?: true
    userId?: true
    isPublic?: true
    userName?: true
    lastName?: true
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
    isPublic: boolean
    userName: string
    lastName: string
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
    isPublic?: boolean
    userName?: boolean
    lastName?: boolean
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
    isPublic?: boolean
    userName?: boolean
    lastName?: boolean
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
    isPublic?: boolean
    userName?: boolean
    lastName?: boolean
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
    isPublic?: boolean
    userName?: boolean
    lastName?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "text" | "videoId" | "time" | "userId" | "isPublic" | "userName" | "lastName", ExtArgs["result"]["question"]>
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
      isPublic: boolean
      userName: string
      lastName: string
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
    readonly isPublic: FieldRef<"Question", 'Boolean'>
    readonly userName: FieldRef<"Question", 'String'>
    readonly lastName: FieldRef<"Question", 'String'>
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
    userId: string | null
    userName: string | null
    lastName: string | null
  }

  export type AnswerMaxAggregateOutputType = {
    id: number | null
    text: string | null
    questionId: number | null
    userId: string | null
    userName: string | null
    lastName: string | null
  }

  export type AnswerCountAggregateOutputType = {
    id: number
    text: number
    questionId: number
    userId: number
    userName: number
    lastName: number
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
    userId?: true
    userName?: true
    lastName?: true
  }

  export type AnswerMaxAggregateInputType = {
    id?: true
    text?: true
    questionId?: true
    userId?: true
    userName?: true
    lastName?: true
  }

  export type AnswerCountAggregateInputType = {
    id?: true
    text?: true
    questionId?: true
    userId?: true
    userName?: true
    lastName?: true
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
    userId: string
    userName: string
    lastName: string
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
    userId?: boolean
    userName?: boolean
    lastName?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    questionId?: boolean
    userId?: boolean
    userName?: boolean
    lastName?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    questionId?: boolean
    userId?: boolean
    userName?: boolean
    lastName?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectScalar = {
    id?: boolean
    text?: boolean
    questionId?: boolean
    userId?: boolean
    userName?: boolean
    lastName?: boolean
  }

  export type AnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "questionId" | "userId" | "userName" | "lastName", ExtArgs["result"]["answer"]>
  export type AnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AnswerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Answer"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      text: string
      questionId: number
      userId: string
      userName: string
      lastName: string
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
   * Fields of the Answer model
   */
  interface AnswerFieldRefs {
    readonly id: FieldRef<"Answer", 'Int'>
    readonly text: FieldRef<"Answer", 'String'>
    readonly questionId: FieldRef<"Answer", 'Int'>
    readonly userId: FieldRef<"Answer", 'String'>
    readonly userName: FieldRef<"Answer", 'String'>
    readonly lastName: FieldRef<"Answer", 'String'>
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
    maxPoints: number | null
  }

  export type OpenTasksSumAggregateOutputType = {
    maxPoints: number | null
  }

  export type OpenTasksMinAggregateOutputType = {
    id: string | null
    name: string | null
    content: string | null
    rubric: string | null
    referenceAnswer: string | null
    maxPoints: number | null
    subSectionId: string | null
    openTaskId: string | null
  }

  export type OpenTasksMaxAggregateOutputType = {
    id: string | null
    name: string | null
    content: string | null
    rubric: string | null
    referenceAnswer: string | null
    maxPoints: number | null
    subSectionId: string | null
    openTaskId: string | null
  }

  export type OpenTasksCountAggregateOutputType = {
    id: number
    name: number
    content: number
    rubric: number
    referenceAnswer: number
    maxPoints: number
    subSectionId: number
    openTaskId: number
    _all: number
  }


  export type OpenTasksAvgAggregateInputType = {
    maxPoints?: true
  }

  export type OpenTasksSumAggregateInputType = {
    maxPoints?: true
  }

  export type OpenTasksMinAggregateInputType = {
    id?: true
    name?: true
    content?: true
    rubric?: true
    referenceAnswer?: true
    maxPoints?: true
    subSectionId?: true
    openTaskId?: true
  }

  export type OpenTasksMaxAggregateInputType = {
    id?: true
    name?: true
    content?: true
    rubric?: true
    referenceAnswer?: true
    maxPoints?: true
    subSectionId?: true
    openTaskId?: true
  }

  export type OpenTasksCountAggregateInputType = {
    id?: true
    name?: true
    content?: true
    rubric?: true
    referenceAnswer?: true
    maxPoints?: true
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
    rubric: string
    referenceAnswer: string | null
    maxPoints: number
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
    rubric?: boolean
    referenceAnswer?: boolean
    maxPoints?: boolean
    subSectionId?: boolean
    openTaskId?: boolean
    subSection?: boolean | SubSectionDefaultArgs<ExtArgs>
    maturas?: boolean | OpenTasks$maturasArgs<ExtArgs>
    userAnswers?: boolean | OpenTasks$userAnswersArgs<ExtArgs>
    _count?: boolean | OpenTasksCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["openTasks"]>

  export type OpenTasksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    content?: boolean
    rubric?: boolean
    referenceAnswer?: boolean
    maxPoints?: boolean
    subSectionId?: boolean
    openTaskId?: boolean
    subSection?: boolean | SubSectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["openTasks"]>

  export type OpenTasksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    content?: boolean
    rubric?: boolean
    referenceAnswer?: boolean
    maxPoints?: boolean
    subSectionId?: boolean
    openTaskId?: boolean
    subSection?: boolean | SubSectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["openTasks"]>

  export type OpenTasksSelectScalar = {
    id?: boolean
    name?: boolean
    content?: boolean
    rubric?: boolean
    referenceAnswer?: boolean
    maxPoints?: boolean
    subSectionId?: boolean
    openTaskId?: boolean
  }

  export type OpenTasksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "content" | "rubric" | "referenceAnswer" | "maxPoints" | "subSectionId" | "openTaskId", ExtArgs["result"]["openTasks"]>
  export type OpenTasksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subSection?: boolean | SubSectionDefaultArgs<ExtArgs>
    maturas?: boolean | OpenTasks$maturasArgs<ExtArgs>
    userAnswers?: boolean | OpenTasks$userAnswersArgs<ExtArgs>
    _count?: boolean | OpenTasksCountOutputTypeDefaultArgs<ExtArgs>
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
      maturas: Prisma.$MaturaPayload<ExtArgs>[]
      userAnswers: Prisma.$UserOpenAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      content: string
      rubric: string
      referenceAnswer: string | null
      maxPoints: number
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
    maturas<T extends OpenTasks$maturasArgs<ExtArgs> = {}>(args?: Subset<T, OpenTasks$maturasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userAnswers<T extends OpenTasks$userAnswersArgs<ExtArgs> = {}>(args?: Subset<T, OpenTasks$userAnswersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOpenAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly rubric: FieldRef<"OpenTasks", 'String'>
    readonly referenceAnswer: FieldRef<"OpenTasks", 'String'>
    readonly maxPoints: FieldRef<"OpenTasks", 'Int'>
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
   * OpenTasks.maturas
   */
  export type OpenTasks$maturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: MaturaWhereInput
    orderBy?: MaturaOrderByWithRelationInput | MaturaOrderByWithRelationInput[]
    cursor?: MaturaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaturaScalarFieldEnum | MaturaScalarFieldEnum[]
  }

  /**
   * OpenTasks.userAnswers
   */
  export type OpenTasks$userAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOpenAnswer
     */
    select?: UserOpenAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOpenAnswer
     */
    omit?: UserOpenAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOpenAnswerInclude<ExtArgs> | null
    where?: UserOpenAnswerWhereInput
    orderBy?: UserOpenAnswerOrderByWithRelationInput | UserOpenAnswerOrderByWithRelationInput[]
    cursor?: UserOpenAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserOpenAnswerScalarFieldEnum | UserOpenAnswerScalarFieldEnum[]
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
    _avg: ClosedTasksAvgAggregateOutputType | null
    _sum: ClosedTasksSumAggregateOutputType | null
    _min: ClosedTasksMinAggregateOutputType | null
    _max: ClosedTasksMaxAggregateOutputType | null
  }

  export type ClosedTasksAvgAggregateOutputType = {
    points: number | null
  }

  export type ClosedTasksSumAggregateOutputType = {
    points: number | null
  }

  export type ClosedTasksMinAggregateOutputType = {
    id: string | null
    name: string | null
    content: string | null
    correctAnswer: string | null
    points: number | null
    subSectionId: string | null
  }

  export type ClosedTasksMaxAggregateOutputType = {
    id: string | null
    name: string | null
    content: string | null
    correctAnswer: string | null
    points: number | null
    subSectionId: string | null
  }

  export type ClosedTasksCountAggregateOutputType = {
    id: number
    name: number
    content: number
    correctAnswer: number
    points: number
    subSectionId: number
    _all: number
  }


  export type ClosedTasksAvgAggregateInputType = {
    points?: true
  }

  export type ClosedTasksSumAggregateInputType = {
    points?: true
  }

  export type ClosedTasksMinAggregateInputType = {
    id?: true
    name?: true
    content?: true
    correctAnswer?: true
    points?: true
    subSectionId?: true
  }

  export type ClosedTasksMaxAggregateInputType = {
    id?: true
    name?: true
    content?: true
    correctAnswer?: true
    points?: true
    subSectionId?: true
  }

  export type ClosedTasksCountAggregateInputType = {
    id?: true
    name?: true
    content?: true
    correctAnswer?: true
    points?: true
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
     * Select which fields to average
    **/
    _avg?: ClosedTasksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClosedTasksSumAggregateInputType
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
    _avg?: ClosedTasksAvgAggregateInputType
    _sum?: ClosedTasksSumAggregateInputType
    _min?: ClosedTasksMinAggregateInputType
    _max?: ClosedTasksMaxAggregateInputType
  }

  export type ClosedTasksGroupByOutputType = {
    id: string
    name: string
    content: string
    correctAnswer: string
    points: number
    subSectionId: string
    _count: ClosedTasksCountAggregateOutputType | null
    _avg: ClosedTasksAvgAggregateOutputType | null
    _sum: ClosedTasksSumAggregateOutputType | null
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
    points?: boolean
    subSectionId?: boolean
    answers?: boolean | ClosedTasks$answersArgs<ExtArgs>
    subSection?: boolean | SubSectionDefaultArgs<ExtArgs>
    maturas?: boolean | ClosedTasks$maturasArgs<ExtArgs>
    userAnswers?: boolean | ClosedTasks$userAnswersArgs<ExtArgs>
    _count?: boolean | ClosedTasksCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["closedTasks"]>

  export type ClosedTasksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    content?: boolean
    correctAnswer?: boolean
    points?: boolean
    subSectionId?: boolean
    subSection?: boolean | SubSectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["closedTasks"]>

  export type ClosedTasksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    content?: boolean
    correctAnswer?: boolean
    points?: boolean
    subSectionId?: boolean
    subSection?: boolean | SubSectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["closedTasks"]>

  export type ClosedTasksSelectScalar = {
    id?: boolean
    name?: boolean
    content?: boolean
    correctAnswer?: boolean
    points?: boolean
    subSectionId?: boolean
  }

  export type ClosedTasksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "content" | "correctAnswer" | "points" | "subSectionId", ExtArgs["result"]["closedTasks"]>
  export type ClosedTasksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | ClosedTasks$answersArgs<ExtArgs>
    subSection?: boolean | SubSectionDefaultArgs<ExtArgs>
    maturas?: boolean | ClosedTasks$maturasArgs<ExtArgs>
    userAnswers?: boolean | ClosedTasks$userAnswersArgs<ExtArgs>
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
      maturas: Prisma.$MaturaPayload<ExtArgs>[]
      userAnswers: Prisma.$UserClosedAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      content: string
      correctAnswer: string
      points: number
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
    maturas<T extends ClosedTasks$maturasArgs<ExtArgs> = {}>(args?: Subset<T, ClosedTasks$maturasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userAnswers<T extends ClosedTasks$userAnswersArgs<ExtArgs> = {}>(args?: Subset<T, ClosedTasks$userAnswersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserClosedAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly points: FieldRef<"ClosedTasks", 'Int'>
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
   * ClosedTasks.maturas
   */
  export type ClosedTasks$maturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: MaturaWhereInput
    orderBy?: MaturaOrderByWithRelationInput | MaturaOrderByWithRelationInput[]
    cursor?: MaturaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaturaScalarFieldEnum | MaturaScalarFieldEnum[]
  }

  /**
   * ClosedTasks.userAnswers
   */
  export type ClosedTasks$userAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserClosedAnswer
     */
    select?: UserClosedAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserClosedAnswer
     */
    omit?: UserClosedAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserClosedAnswerInclude<ExtArgs> | null
    where?: UserClosedAnswerWhereInput
    orderBy?: UserClosedAnswerOrderByWithRelationInput | UserClosedAnswerOrderByWithRelationInput[]
    cursor?: UserClosedAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserClosedAnswerScalarFieldEnum | UserClosedAnswerScalarFieldEnum[]
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
   * Model Matura
   */

  export type AggregateMatura = {
    _count: MaturaCountAggregateOutputType | null
    _min: MaturaMinAggregateOutputType | null
    _max: MaturaMaxAggregateOutputType | null
  }

  export type MaturaMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type MaturaMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type MaturaCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type MaturaMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type MaturaMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type MaturaCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
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
    name: string
    createdAt: Date
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
    name?: boolean
    createdAt?: boolean
    closedTasks?: boolean | Matura$closedTasksArgs<ExtArgs>
    openTasks?: boolean | Matura$openTasksArgs<ExtArgs>
    userMaturas?: boolean | Matura$userMaturasArgs<ExtArgs>
    _count?: boolean | MaturaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matura"]>

  export type MaturaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["matura"]>

  export type MaturaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["matura"]>

  export type MaturaSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type MaturaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt", ExtArgs["result"]["matura"]>
  export type MaturaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    closedTasks?: boolean | Matura$closedTasksArgs<ExtArgs>
    openTasks?: boolean | Matura$openTasksArgs<ExtArgs>
    userMaturas?: boolean | Matura$userMaturasArgs<ExtArgs>
    _count?: boolean | MaturaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MaturaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MaturaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MaturaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Matura"
    objects: {
      closedTasks: Prisma.$ClosedTasksPayload<ExtArgs>[]
      openTasks: Prisma.$OpenTasksPayload<ExtArgs>[]
      userMaturas: Prisma.$UserMaturaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
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
    closedTasks<T extends Matura$closedTasksArgs<ExtArgs> = {}>(args?: Subset<T, Matura$closedTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClosedTasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    openTasks<T extends Matura$openTasksArgs<ExtArgs> = {}>(args?: Subset<T, Matura$openTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpenTasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"Matura", 'String'>
    readonly createdAt: FieldRef<"Matura", 'DateTime'>
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
   * Matura.closedTasks
   */
  export type Matura$closedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Matura.openTasks
   */
  export type Matura$openTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Model UserMatura
   */

  export type AggregateUserMatura = {
    _count: UserMaturaCountAggregateOutputType | null
    _avg: UserMaturaAvgAggregateOutputType | null
    _sum: UserMaturaSumAggregateOutputType | null
    _min: UserMaturaMinAggregateOutputType | null
    _max: UserMaturaMaxAggregateOutputType | null
  }

  export type UserMaturaAvgAggregateOutputType = {
    earnedPoints: number | null
  }

  export type UserMaturaSumAggregateOutputType = {
    earnedPoints: number | null
  }

  export type UserMaturaMinAggregateOutputType = {
    id: string | null
    userId: string | null
    maturaId: string | null
    status: boolean | null
    earnedPoints: number | null
    createdAt: Date | null
  }

  export type UserMaturaMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    maturaId: string | null
    status: boolean | null
    earnedPoints: number | null
    createdAt: Date | null
  }

  export type UserMaturaCountAggregateOutputType = {
    id: number
    userId: number
    maturaId: number
    status: number
    earnedPoints: number
    createdAt: number
    _all: number
  }


  export type UserMaturaAvgAggregateInputType = {
    earnedPoints?: true
  }

  export type UserMaturaSumAggregateInputType = {
    earnedPoints?: true
  }

  export type UserMaturaMinAggregateInputType = {
    id?: true
    userId?: true
    maturaId?: true
    status?: true
    earnedPoints?: true
    createdAt?: true
  }

  export type UserMaturaMaxAggregateInputType = {
    id?: true
    userId?: true
    maturaId?: true
    status?: true
    earnedPoints?: true
    createdAt?: true
  }

  export type UserMaturaCountAggregateInputType = {
    id?: true
    userId?: true
    maturaId?: true
    status?: true
    earnedPoints?: true
    createdAt?: true
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
     * Select which fields to average
    **/
    _avg?: UserMaturaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserMaturaSumAggregateInputType
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
    _avg?: UserMaturaAvgAggregateInputType
    _sum?: UserMaturaSumAggregateInputType
    _min?: UserMaturaMinAggregateInputType
    _max?: UserMaturaMaxAggregateInputType
  }

  export type UserMaturaGroupByOutputType = {
    id: string
    userId: string
    maturaId: string
    status: boolean
    earnedPoints: number
    createdAt: Date
    _count: UserMaturaCountAggregateOutputType | null
    _avg: UserMaturaAvgAggregateOutputType | null
    _sum: UserMaturaSumAggregateOutputType | null
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
    status?: boolean
    earnedPoints?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    matura?: boolean | MaturaDefaultArgs<ExtArgs>
    closedAnswers?: boolean | UserMatura$closedAnswersArgs<ExtArgs>
    openAnswers?: boolean | UserMatura$openAnswersArgs<ExtArgs>
    _count?: boolean | UserMaturaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userMatura"]>

  export type UserMaturaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    maturaId?: boolean
    status?: boolean
    earnedPoints?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    matura?: boolean | MaturaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userMatura"]>

  export type UserMaturaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    maturaId?: boolean
    status?: boolean
    earnedPoints?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    matura?: boolean | MaturaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userMatura"]>

  export type UserMaturaSelectScalar = {
    id?: boolean
    userId?: boolean
    maturaId?: boolean
    status?: boolean
    earnedPoints?: boolean
    createdAt?: boolean
  }

  export type UserMaturaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "maturaId" | "status" | "earnedPoints" | "createdAt", ExtArgs["result"]["userMatura"]>
  export type UserMaturaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    matura?: boolean | MaturaDefaultArgs<ExtArgs>
    closedAnswers?: boolean | UserMatura$closedAnswersArgs<ExtArgs>
    openAnswers?: boolean | UserMatura$openAnswersArgs<ExtArgs>
    _count?: boolean | UserMaturaCountOutputTypeDefaultArgs<ExtArgs>
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
      closedAnswers: Prisma.$UserClosedAnswerPayload<ExtArgs>[]
      openAnswers: Prisma.$UserOpenAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      maturaId: string
      status: boolean
      earnedPoints: number
      createdAt: Date
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
    closedAnswers<T extends UserMatura$closedAnswersArgs<ExtArgs> = {}>(args?: Subset<T, UserMatura$closedAnswersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserClosedAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    openAnswers<T extends UserMatura$openAnswersArgs<ExtArgs> = {}>(args?: Subset<T, UserMatura$openAnswersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOpenAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly status: FieldRef<"UserMatura", 'Boolean'>
    readonly earnedPoints: FieldRef<"UserMatura", 'Int'>
    readonly createdAt: FieldRef<"UserMatura", 'DateTime'>
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
   * UserMatura.closedAnswers
   */
  export type UserMatura$closedAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserClosedAnswer
     */
    select?: UserClosedAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserClosedAnswer
     */
    omit?: UserClosedAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserClosedAnswerInclude<ExtArgs> | null
    where?: UserClosedAnswerWhereInput
    orderBy?: UserClosedAnswerOrderByWithRelationInput | UserClosedAnswerOrderByWithRelationInput[]
    cursor?: UserClosedAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserClosedAnswerScalarFieldEnum | UserClosedAnswerScalarFieldEnum[]
  }

  /**
   * UserMatura.openAnswers
   */
  export type UserMatura$openAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOpenAnswer
     */
    select?: UserOpenAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOpenAnswer
     */
    omit?: UserOpenAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOpenAnswerInclude<ExtArgs> | null
    where?: UserOpenAnswerWhereInput
    orderBy?: UserOpenAnswerOrderByWithRelationInput | UserOpenAnswerOrderByWithRelationInput[]
    cursor?: UserOpenAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserOpenAnswerScalarFieldEnum | UserOpenAnswerScalarFieldEnum[]
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
   * Model UserClosedAnswer
   */

  export type AggregateUserClosedAnswer = {
    _count: UserClosedAnswerCountAggregateOutputType | null
    _min: UserClosedAnswerMinAggregateOutputType | null
    _max: UserClosedAnswerMaxAggregateOutputType | null
  }

  export type UserClosedAnswerMinAggregateOutputType = {
    id: string | null
    userMaturaId: string | null
    closedTaskId: string | null
    answer: string | null
    isCorrect: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserClosedAnswerMaxAggregateOutputType = {
    id: string | null
    userMaturaId: string | null
    closedTaskId: string | null
    answer: string | null
    isCorrect: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserClosedAnswerCountAggregateOutputType = {
    id: number
    userMaturaId: number
    closedTaskId: number
    answer: number
    isCorrect: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserClosedAnswerMinAggregateInputType = {
    id?: true
    userMaturaId?: true
    closedTaskId?: true
    answer?: true
    isCorrect?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserClosedAnswerMaxAggregateInputType = {
    id?: true
    userMaturaId?: true
    closedTaskId?: true
    answer?: true
    isCorrect?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserClosedAnswerCountAggregateInputType = {
    id?: true
    userMaturaId?: true
    closedTaskId?: true
    answer?: true
    isCorrect?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserClosedAnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserClosedAnswer to aggregate.
     */
    where?: UserClosedAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserClosedAnswers to fetch.
     */
    orderBy?: UserClosedAnswerOrderByWithRelationInput | UserClosedAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserClosedAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserClosedAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserClosedAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserClosedAnswers
    **/
    _count?: true | UserClosedAnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserClosedAnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserClosedAnswerMaxAggregateInputType
  }

  export type GetUserClosedAnswerAggregateType<T extends UserClosedAnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateUserClosedAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserClosedAnswer[P]>
      : GetScalarType<T[P], AggregateUserClosedAnswer[P]>
  }




  export type UserClosedAnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserClosedAnswerWhereInput
    orderBy?: UserClosedAnswerOrderByWithAggregationInput | UserClosedAnswerOrderByWithAggregationInput[]
    by: UserClosedAnswerScalarFieldEnum[] | UserClosedAnswerScalarFieldEnum
    having?: UserClosedAnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserClosedAnswerCountAggregateInputType | true
    _min?: UserClosedAnswerMinAggregateInputType
    _max?: UserClosedAnswerMaxAggregateInputType
  }

  export type UserClosedAnswerGroupByOutputType = {
    id: string
    userMaturaId: string
    closedTaskId: string
    answer: string | null
    isCorrect: boolean | null
    createdAt: Date
    updatedAt: Date
    _count: UserClosedAnswerCountAggregateOutputType | null
    _min: UserClosedAnswerMinAggregateOutputType | null
    _max: UserClosedAnswerMaxAggregateOutputType | null
  }

  type GetUserClosedAnswerGroupByPayload<T extends UserClosedAnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserClosedAnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserClosedAnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserClosedAnswerGroupByOutputType[P]>
            : GetScalarType<T[P], UserClosedAnswerGroupByOutputType[P]>
        }
      >
    >


  export type UserClosedAnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userMaturaId?: boolean
    closedTaskId?: boolean
    answer?: boolean
    isCorrect?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userMatura?: boolean | UserMaturaDefaultArgs<ExtArgs>
    closedTask?: boolean | ClosedTasksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userClosedAnswer"]>

  export type UserClosedAnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userMaturaId?: boolean
    closedTaskId?: boolean
    answer?: boolean
    isCorrect?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userMatura?: boolean | UserMaturaDefaultArgs<ExtArgs>
    closedTask?: boolean | ClosedTasksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userClosedAnswer"]>

  export type UserClosedAnswerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userMaturaId?: boolean
    closedTaskId?: boolean
    answer?: boolean
    isCorrect?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userMatura?: boolean | UserMaturaDefaultArgs<ExtArgs>
    closedTask?: boolean | ClosedTasksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userClosedAnswer"]>

  export type UserClosedAnswerSelectScalar = {
    id?: boolean
    userMaturaId?: boolean
    closedTaskId?: boolean
    answer?: boolean
    isCorrect?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserClosedAnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userMaturaId" | "closedTaskId" | "answer" | "isCorrect" | "createdAt" | "updatedAt", ExtArgs["result"]["userClosedAnswer"]>
  export type UserClosedAnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userMatura?: boolean | UserMaturaDefaultArgs<ExtArgs>
    closedTask?: boolean | ClosedTasksDefaultArgs<ExtArgs>
  }
  export type UserClosedAnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userMatura?: boolean | UserMaturaDefaultArgs<ExtArgs>
    closedTask?: boolean | ClosedTasksDefaultArgs<ExtArgs>
  }
  export type UserClosedAnswerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userMatura?: boolean | UserMaturaDefaultArgs<ExtArgs>
    closedTask?: boolean | ClosedTasksDefaultArgs<ExtArgs>
  }

  export type $UserClosedAnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserClosedAnswer"
    objects: {
      userMatura: Prisma.$UserMaturaPayload<ExtArgs>
      closedTask: Prisma.$ClosedTasksPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userMaturaId: string
      closedTaskId: string
      answer: string | null
      isCorrect: boolean | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userClosedAnswer"]>
    composites: {}
  }

  type UserClosedAnswerGetPayload<S extends boolean | null | undefined | UserClosedAnswerDefaultArgs> = $Result.GetResult<Prisma.$UserClosedAnswerPayload, S>

  type UserClosedAnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserClosedAnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserClosedAnswerCountAggregateInputType | true
    }

  export interface UserClosedAnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserClosedAnswer'], meta: { name: 'UserClosedAnswer' } }
    /**
     * Find zero or one UserClosedAnswer that matches the filter.
     * @param {UserClosedAnswerFindUniqueArgs} args - Arguments to find a UserClosedAnswer
     * @example
     * // Get one UserClosedAnswer
     * const userClosedAnswer = await prisma.userClosedAnswer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserClosedAnswerFindUniqueArgs>(args: SelectSubset<T, UserClosedAnswerFindUniqueArgs<ExtArgs>>): Prisma__UserClosedAnswerClient<$Result.GetResult<Prisma.$UserClosedAnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserClosedAnswer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserClosedAnswerFindUniqueOrThrowArgs} args - Arguments to find a UserClosedAnswer
     * @example
     * // Get one UserClosedAnswer
     * const userClosedAnswer = await prisma.userClosedAnswer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserClosedAnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, UserClosedAnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClosedAnswerClient<$Result.GetResult<Prisma.$UserClosedAnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserClosedAnswer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserClosedAnswerFindFirstArgs} args - Arguments to find a UserClosedAnswer
     * @example
     * // Get one UserClosedAnswer
     * const userClosedAnswer = await prisma.userClosedAnswer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserClosedAnswerFindFirstArgs>(args?: SelectSubset<T, UserClosedAnswerFindFirstArgs<ExtArgs>>): Prisma__UserClosedAnswerClient<$Result.GetResult<Prisma.$UserClosedAnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserClosedAnswer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserClosedAnswerFindFirstOrThrowArgs} args - Arguments to find a UserClosedAnswer
     * @example
     * // Get one UserClosedAnswer
     * const userClosedAnswer = await prisma.userClosedAnswer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserClosedAnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, UserClosedAnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClosedAnswerClient<$Result.GetResult<Prisma.$UserClosedAnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserClosedAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserClosedAnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserClosedAnswers
     * const userClosedAnswers = await prisma.userClosedAnswer.findMany()
     * 
     * // Get first 10 UserClosedAnswers
     * const userClosedAnswers = await prisma.userClosedAnswer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userClosedAnswerWithIdOnly = await prisma.userClosedAnswer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserClosedAnswerFindManyArgs>(args?: SelectSubset<T, UserClosedAnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserClosedAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserClosedAnswer.
     * @param {UserClosedAnswerCreateArgs} args - Arguments to create a UserClosedAnswer.
     * @example
     * // Create one UserClosedAnswer
     * const UserClosedAnswer = await prisma.userClosedAnswer.create({
     *   data: {
     *     // ... data to create a UserClosedAnswer
     *   }
     * })
     * 
     */
    create<T extends UserClosedAnswerCreateArgs>(args: SelectSubset<T, UserClosedAnswerCreateArgs<ExtArgs>>): Prisma__UserClosedAnswerClient<$Result.GetResult<Prisma.$UserClosedAnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserClosedAnswers.
     * @param {UserClosedAnswerCreateManyArgs} args - Arguments to create many UserClosedAnswers.
     * @example
     * // Create many UserClosedAnswers
     * const userClosedAnswer = await prisma.userClosedAnswer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserClosedAnswerCreateManyArgs>(args?: SelectSubset<T, UserClosedAnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserClosedAnswers and returns the data saved in the database.
     * @param {UserClosedAnswerCreateManyAndReturnArgs} args - Arguments to create many UserClosedAnswers.
     * @example
     * // Create many UserClosedAnswers
     * const userClosedAnswer = await prisma.userClosedAnswer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserClosedAnswers and only return the `id`
     * const userClosedAnswerWithIdOnly = await prisma.userClosedAnswer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserClosedAnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, UserClosedAnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserClosedAnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserClosedAnswer.
     * @param {UserClosedAnswerDeleteArgs} args - Arguments to delete one UserClosedAnswer.
     * @example
     * // Delete one UserClosedAnswer
     * const UserClosedAnswer = await prisma.userClosedAnswer.delete({
     *   where: {
     *     // ... filter to delete one UserClosedAnswer
     *   }
     * })
     * 
     */
    delete<T extends UserClosedAnswerDeleteArgs>(args: SelectSubset<T, UserClosedAnswerDeleteArgs<ExtArgs>>): Prisma__UserClosedAnswerClient<$Result.GetResult<Prisma.$UserClosedAnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserClosedAnswer.
     * @param {UserClosedAnswerUpdateArgs} args - Arguments to update one UserClosedAnswer.
     * @example
     * // Update one UserClosedAnswer
     * const userClosedAnswer = await prisma.userClosedAnswer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserClosedAnswerUpdateArgs>(args: SelectSubset<T, UserClosedAnswerUpdateArgs<ExtArgs>>): Prisma__UserClosedAnswerClient<$Result.GetResult<Prisma.$UserClosedAnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserClosedAnswers.
     * @param {UserClosedAnswerDeleteManyArgs} args - Arguments to filter UserClosedAnswers to delete.
     * @example
     * // Delete a few UserClosedAnswers
     * const { count } = await prisma.userClosedAnswer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserClosedAnswerDeleteManyArgs>(args?: SelectSubset<T, UserClosedAnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserClosedAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserClosedAnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserClosedAnswers
     * const userClosedAnswer = await prisma.userClosedAnswer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserClosedAnswerUpdateManyArgs>(args: SelectSubset<T, UserClosedAnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserClosedAnswers and returns the data updated in the database.
     * @param {UserClosedAnswerUpdateManyAndReturnArgs} args - Arguments to update many UserClosedAnswers.
     * @example
     * // Update many UserClosedAnswers
     * const userClosedAnswer = await prisma.userClosedAnswer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserClosedAnswers and only return the `id`
     * const userClosedAnswerWithIdOnly = await prisma.userClosedAnswer.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserClosedAnswerUpdateManyAndReturnArgs>(args: SelectSubset<T, UserClosedAnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserClosedAnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserClosedAnswer.
     * @param {UserClosedAnswerUpsertArgs} args - Arguments to update or create a UserClosedAnswer.
     * @example
     * // Update or create a UserClosedAnswer
     * const userClosedAnswer = await prisma.userClosedAnswer.upsert({
     *   create: {
     *     // ... data to create a UserClosedAnswer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserClosedAnswer we want to update
     *   }
     * })
     */
    upsert<T extends UserClosedAnswerUpsertArgs>(args: SelectSubset<T, UserClosedAnswerUpsertArgs<ExtArgs>>): Prisma__UserClosedAnswerClient<$Result.GetResult<Prisma.$UserClosedAnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserClosedAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserClosedAnswerCountArgs} args - Arguments to filter UserClosedAnswers to count.
     * @example
     * // Count the number of UserClosedAnswers
     * const count = await prisma.userClosedAnswer.count({
     *   where: {
     *     // ... the filter for the UserClosedAnswers we want to count
     *   }
     * })
    **/
    count<T extends UserClosedAnswerCountArgs>(
      args?: Subset<T, UserClosedAnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserClosedAnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserClosedAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserClosedAnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserClosedAnswerAggregateArgs>(args: Subset<T, UserClosedAnswerAggregateArgs>): Prisma.PrismaPromise<GetUserClosedAnswerAggregateType<T>>

    /**
     * Group by UserClosedAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserClosedAnswerGroupByArgs} args - Group by arguments.
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
      T extends UserClosedAnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserClosedAnswerGroupByArgs['orderBy'] }
        : { orderBy?: UserClosedAnswerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserClosedAnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserClosedAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserClosedAnswer model
   */
  readonly fields: UserClosedAnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserClosedAnswer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClosedAnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userMatura<T extends UserMaturaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserMaturaDefaultArgs<ExtArgs>>): Prisma__UserMaturaClient<$Result.GetResult<Prisma.$UserMaturaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserClosedAnswer model
   */
  interface UserClosedAnswerFieldRefs {
    readonly id: FieldRef<"UserClosedAnswer", 'String'>
    readonly userMaturaId: FieldRef<"UserClosedAnswer", 'String'>
    readonly closedTaskId: FieldRef<"UserClosedAnswer", 'String'>
    readonly answer: FieldRef<"UserClosedAnswer", 'String'>
    readonly isCorrect: FieldRef<"UserClosedAnswer", 'Boolean'>
    readonly createdAt: FieldRef<"UserClosedAnswer", 'DateTime'>
    readonly updatedAt: FieldRef<"UserClosedAnswer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserClosedAnswer findUnique
   */
  export type UserClosedAnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserClosedAnswer
     */
    select?: UserClosedAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserClosedAnswer
     */
    omit?: UserClosedAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserClosedAnswerInclude<ExtArgs> | null
    /**
     * Filter, which UserClosedAnswer to fetch.
     */
    where: UserClosedAnswerWhereUniqueInput
  }

  /**
   * UserClosedAnswer findUniqueOrThrow
   */
  export type UserClosedAnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserClosedAnswer
     */
    select?: UserClosedAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserClosedAnswer
     */
    omit?: UserClosedAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserClosedAnswerInclude<ExtArgs> | null
    /**
     * Filter, which UserClosedAnswer to fetch.
     */
    where: UserClosedAnswerWhereUniqueInput
  }

  /**
   * UserClosedAnswer findFirst
   */
  export type UserClosedAnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserClosedAnswer
     */
    select?: UserClosedAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserClosedAnswer
     */
    omit?: UserClosedAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserClosedAnswerInclude<ExtArgs> | null
    /**
     * Filter, which UserClosedAnswer to fetch.
     */
    where?: UserClosedAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserClosedAnswers to fetch.
     */
    orderBy?: UserClosedAnswerOrderByWithRelationInput | UserClosedAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserClosedAnswers.
     */
    cursor?: UserClosedAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserClosedAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserClosedAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserClosedAnswers.
     */
    distinct?: UserClosedAnswerScalarFieldEnum | UserClosedAnswerScalarFieldEnum[]
  }

  /**
   * UserClosedAnswer findFirstOrThrow
   */
  export type UserClosedAnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserClosedAnswer
     */
    select?: UserClosedAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserClosedAnswer
     */
    omit?: UserClosedAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserClosedAnswerInclude<ExtArgs> | null
    /**
     * Filter, which UserClosedAnswer to fetch.
     */
    where?: UserClosedAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserClosedAnswers to fetch.
     */
    orderBy?: UserClosedAnswerOrderByWithRelationInput | UserClosedAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserClosedAnswers.
     */
    cursor?: UserClosedAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserClosedAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserClosedAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserClosedAnswers.
     */
    distinct?: UserClosedAnswerScalarFieldEnum | UserClosedAnswerScalarFieldEnum[]
  }

  /**
   * UserClosedAnswer findMany
   */
  export type UserClosedAnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserClosedAnswer
     */
    select?: UserClosedAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserClosedAnswer
     */
    omit?: UserClosedAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserClosedAnswerInclude<ExtArgs> | null
    /**
     * Filter, which UserClosedAnswers to fetch.
     */
    where?: UserClosedAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserClosedAnswers to fetch.
     */
    orderBy?: UserClosedAnswerOrderByWithRelationInput | UserClosedAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserClosedAnswers.
     */
    cursor?: UserClosedAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserClosedAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserClosedAnswers.
     */
    skip?: number
    distinct?: UserClosedAnswerScalarFieldEnum | UserClosedAnswerScalarFieldEnum[]
  }

  /**
   * UserClosedAnswer create
   */
  export type UserClosedAnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserClosedAnswer
     */
    select?: UserClosedAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserClosedAnswer
     */
    omit?: UserClosedAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserClosedAnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a UserClosedAnswer.
     */
    data: XOR<UserClosedAnswerCreateInput, UserClosedAnswerUncheckedCreateInput>
  }

  /**
   * UserClosedAnswer createMany
   */
  export type UserClosedAnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserClosedAnswers.
     */
    data: UserClosedAnswerCreateManyInput | UserClosedAnswerCreateManyInput[]
  }

  /**
   * UserClosedAnswer createManyAndReturn
   */
  export type UserClosedAnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserClosedAnswer
     */
    select?: UserClosedAnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserClosedAnswer
     */
    omit?: UserClosedAnswerOmit<ExtArgs> | null
    /**
     * The data used to create many UserClosedAnswers.
     */
    data: UserClosedAnswerCreateManyInput | UserClosedAnswerCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserClosedAnswerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserClosedAnswer update
   */
  export type UserClosedAnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserClosedAnswer
     */
    select?: UserClosedAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserClosedAnswer
     */
    omit?: UserClosedAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserClosedAnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a UserClosedAnswer.
     */
    data: XOR<UserClosedAnswerUpdateInput, UserClosedAnswerUncheckedUpdateInput>
    /**
     * Choose, which UserClosedAnswer to update.
     */
    where: UserClosedAnswerWhereUniqueInput
  }

  /**
   * UserClosedAnswer updateMany
   */
  export type UserClosedAnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserClosedAnswers.
     */
    data: XOR<UserClosedAnswerUpdateManyMutationInput, UserClosedAnswerUncheckedUpdateManyInput>
    /**
     * Filter which UserClosedAnswers to update
     */
    where?: UserClosedAnswerWhereInput
    /**
     * Limit how many UserClosedAnswers to update.
     */
    limit?: number
  }

  /**
   * UserClosedAnswer updateManyAndReturn
   */
  export type UserClosedAnswerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserClosedAnswer
     */
    select?: UserClosedAnswerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserClosedAnswer
     */
    omit?: UserClosedAnswerOmit<ExtArgs> | null
    /**
     * The data used to update UserClosedAnswers.
     */
    data: XOR<UserClosedAnswerUpdateManyMutationInput, UserClosedAnswerUncheckedUpdateManyInput>
    /**
     * Filter which UserClosedAnswers to update
     */
    where?: UserClosedAnswerWhereInput
    /**
     * Limit how many UserClosedAnswers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserClosedAnswerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserClosedAnswer upsert
   */
  export type UserClosedAnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserClosedAnswer
     */
    select?: UserClosedAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserClosedAnswer
     */
    omit?: UserClosedAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserClosedAnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the UserClosedAnswer to update in case it exists.
     */
    where: UserClosedAnswerWhereUniqueInput
    /**
     * In case the UserClosedAnswer found by the `where` argument doesn't exist, create a new UserClosedAnswer with this data.
     */
    create: XOR<UserClosedAnswerCreateInput, UserClosedAnswerUncheckedCreateInput>
    /**
     * In case the UserClosedAnswer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserClosedAnswerUpdateInput, UserClosedAnswerUncheckedUpdateInput>
  }

  /**
   * UserClosedAnswer delete
   */
  export type UserClosedAnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserClosedAnswer
     */
    select?: UserClosedAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserClosedAnswer
     */
    omit?: UserClosedAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserClosedAnswerInclude<ExtArgs> | null
    /**
     * Filter which UserClosedAnswer to delete.
     */
    where: UserClosedAnswerWhereUniqueInput
  }

  /**
   * UserClosedAnswer deleteMany
   */
  export type UserClosedAnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserClosedAnswers to delete
     */
    where?: UserClosedAnswerWhereInput
    /**
     * Limit how many UserClosedAnswers to delete.
     */
    limit?: number
  }

  /**
   * UserClosedAnswer without action
   */
  export type UserClosedAnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserClosedAnswer
     */
    select?: UserClosedAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserClosedAnswer
     */
    omit?: UserClosedAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserClosedAnswerInclude<ExtArgs> | null
  }


  /**
   * Model UserOpenAnswer
   */

  export type AggregateUserOpenAnswer = {
    _count: UserOpenAnswerCountAggregateOutputType | null
    _avg: UserOpenAnswerAvgAggregateOutputType | null
    _sum: UserOpenAnswerSumAggregateOutputType | null
    _min: UserOpenAnswerMinAggregateOutputType | null
    _max: UserOpenAnswerMaxAggregateOutputType | null
  }

  export type UserOpenAnswerAvgAggregateOutputType = {
    awardedPoints: number | null
  }

  export type UserOpenAnswerSumAggregateOutputType = {
    awardedPoints: number | null
  }

  export type UserOpenAnswerMinAggregateOutputType = {
    id: string | null
    userMaturaId: string | null
    openTaskId: string | null
    answer: string | null
    screenshotUrl: string | null
    awardedPoints: number | null
    feedback: string | null
    gradingJson: string | null
    gradedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserOpenAnswerMaxAggregateOutputType = {
    id: string | null
    userMaturaId: string | null
    openTaskId: string | null
    answer: string | null
    screenshotUrl: string | null
    awardedPoints: number | null
    feedback: string | null
    gradingJson: string | null
    gradedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserOpenAnswerCountAggregateOutputType = {
    id: number
    userMaturaId: number
    openTaskId: number
    answer: number
    screenshotUrl: number
    awardedPoints: number
    feedback: number
    gradingJson: number
    gradedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserOpenAnswerAvgAggregateInputType = {
    awardedPoints?: true
  }

  export type UserOpenAnswerSumAggregateInputType = {
    awardedPoints?: true
  }

  export type UserOpenAnswerMinAggregateInputType = {
    id?: true
    userMaturaId?: true
    openTaskId?: true
    answer?: true
    screenshotUrl?: true
    awardedPoints?: true
    feedback?: true
    gradingJson?: true
    gradedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserOpenAnswerMaxAggregateInputType = {
    id?: true
    userMaturaId?: true
    openTaskId?: true
    answer?: true
    screenshotUrl?: true
    awardedPoints?: true
    feedback?: true
    gradingJson?: true
    gradedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserOpenAnswerCountAggregateInputType = {
    id?: true
    userMaturaId?: true
    openTaskId?: true
    answer?: true
    screenshotUrl?: true
    awardedPoints?: true
    feedback?: true
    gradingJson?: true
    gradedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserOpenAnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserOpenAnswer to aggregate.
     */
    where?: UserOpenAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOpenAnswers to fetch.
     */
    orderBy?: UserOpenAnswerOrderByWithRelationInput | UserOpenAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserOpenAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOpenAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOpenAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserOpenAnswers
    **/
    _count?: true | UserOpenAnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserOpenAnswerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserOpenAnswerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserOpenAnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserOpenAnswerMaxAggregateInputType
  }

  export type GetUserOpenAnswerAggregateType<T extends UserOpenAnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateUserOpenAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserOpenAnswer[P]>
      : GetScalarType<T[P], AggregateUserOpenAnswer[P]>
  }




  export type UserOpenAnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserOpenAnswerWhereInput
    orderBy?: UserOpenAnswerOrderByWithAggregationInput | UserOpenAnswerOrderByWithAggregationInput[]
    by: UserOpenAnswerScalarFieldEnum[] | UserOpenAnswerScalarFieldEnum
    having?: UserOpenAnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserOpenAnswerCountAggregateInputType | true
    _avg?: UserOpenAnswerAvgAggregateInputType
    _sum?: UserOpenAnswerSumAggregateInputType
    _min?: UserOpenAnswerMinAggregateInputType
    _max?: UserOpenAnswerMaxAggregateInputType
  }

  export type UserOpenAnswerGroupByOutputType = {
    id: string
    userMaturaId: string
    openTaskId: string
    answer: string | null
    screenshotUrl: string | null
    awardedPoints: number | null
    feedback: string | null
    gradingJson: string | null
    gradedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserOpenAnswerCountAggregateOutputType | null
    _avg: UserOpenAnswerAvgAggregateOutputType | null
    _sum: UserOpenAnswerSumAggregateOutputType | null
    _min: UserOpenAnswerMinAggregateOutputType | null
    _max: UserOpenAnswerMaxAggregateOutputType | null
  }

  type GetUserOpenAnswerGroupByPayload<T extends UserOpenAnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserOpenAnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserOpenAnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserOpenAnswerGroupByOutputType[P]>
            : GetScalarType<T[P], UserOpenAnswerGroupByOutputType[P]>
        }
      >
    >


  export type UserOpenAnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userMaturaId?: boolean
    openTaskId?: boolean
    answer?: boolean
    screenshotUrl?: boolean
    awardedPoints?: boolean
    feedback?: boolean
    gradingJson?: boolean
    gradedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userMatura?: boolean | UserMaturaDefaultArgs<ExtArgs>
    openTask?: boolean | OpenTasksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userOpenAnswer"]>

  export type UserOpenAnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userMaturaId?: boolean
    openTaskId?: boolean
    answer?: boolean
    screenshotUrl?: boolean
    awardedPoints?: boolean
    feedback?: boolean
    gradingJson?: boolean
    gradedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userMatura?: boolean | UserMaturaDefaultArgs<ExtArgs>
    openTask?: boolean | OpenTasksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userOpenAnswer"]>

  export type UserOpenAnswerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userMaturaId?: boolean
    openTaskId?: boolean
    answer?: boolean
    screenshotUrl?: boolean
    awardedPoints?: boolean
    feedback?: boolean
    gradingJson?: boolean
    gradedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userMatura?: boolean | UserMaturaDefaultArgs<ExtArgs>
    openTask?: boolean | OpenTasksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userOpenAnswer"]>

  export type UserOpenAnswerSelectScalar = {
    id?: boolean
    userMaturaId?: boolean
    openTaskId?: boolean
    answer?: boolean
    screenshotUrl?: boolean
    awardedPoints?: boolean
    feedback?: boolean
    gradingJson?: boolean
    gradedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOpenAnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userMaturaId" | "openTaskId" | "answer" | "screenshotUrl" | "awardedPoints" | "feedback" | "gradingJson" | "gradedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["userOpenAnswer"]>
  export type UserOpenAnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userMatura?: boolean | UserMaturaDefaultArgs<ExtArgs>
    openTask?: boolean | OpenTasksDefaultArgs<ExtArgs>
  }
  export type UserOpenAnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userMatura?: boolean | UserMaturaDefaultArgs<ExtArgs>
    openTask?: boolean | OpenTasksDefaultArgs<ExtArgs>
  }
  export type UserOpenAnswerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userMatura?: boolean | UserMaturaDefaultArgs<ExtArgs>
    openTask?: boolean | OpenTasksDefaultArgs<ExtArgs>
  }

  export type $UserOpenAnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserOpenAnswer"
    objects: {
      userMatura: Prisma.$UserMaturaPayload<ExtArgs>
      openTask: Prisma.$OpenTasksPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userMaturaId: string
      openTaskId: string
      answer: string | null
      screenshotUrl: string | null
      awardedPoints: number | null
      feedback: string | null
      gradingJson: string | null
      gradedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userOpenAnswer"]>
    composites: {}
  }

  type UserOpenAnswerGetPayload<S extends boolean | null | undefined | UserOpenAnswerDefaultArgs> = $Result.GetResult<Prisma.$UserOpenAnswerPayload, S>

  type UserOpenAnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserOpenAnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserOpenAnswerCountAggregateInputType | true
    }

  export interface UserOpenAnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserOpenAnswer'], meta: { name: 'UserOpenAnswer' } }
    /**
     * Find zero or one UserOpenAnswer that matches the filter.
     * @param {UserOpenAnswerFindUniqueArgs} args - Arguments to find a UserOpenAnswer
     * @example
     * // Get one UserOpenAnswer
     * const userOpenAnswer = await prisma.userOpenAnswer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserOpenAnswerFindUniqueArgs>(args: SelectSubset<T, UserOpenAnswerFindUniqueArgs<ExtArgs>>): Prisma__UserOpenAnswerClient<$Result.GetResult<Prisma.$UserOpenAnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserOpenAnswer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserOpenAnswerFindUniqueOrThrowArgs} args - Arguments to find a UserOpenAnswer
     * @example
     * // Get one UserOpenAnswer
     * const userOpenAnswer = await prisma.userOpenAnswer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserOpenAnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, UserOpenAnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserOpenAnswerClient<$Result.GetResult<Prisma.$UserOpenAnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserOpenAnswer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOpenAnswerFindFirstArgs} args - Arguments to find a UserOpenAnswer
     * @example
     * // Get one UserOpenAnswer
     * const userOpenAnswer = await prisma.userOpenAnswer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserOpenAnswerFindFirstArgs>(args?: SelectSubset<T, UserOpenAnswerFindFirstArgs<ExtArgs>>): Prisma__UserOpenAnswerClient<$Result.GetResult<Prisma.$UserOpenAnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserOpenAnswer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOpenAnswerFindFirstOrThrowArgs} args - Arguments to find a UserOpenAnswer
     * @example
     * // Get one UserOpenAnswer
     * const userOpenAnswer = await prisma.userOpenAnswer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserOpenAnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, UserOpenAnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserOpenAnswerClient<$Result.GetResult<Prisma.$UserOpenAnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserOpenAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOpenAnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserOpenAnswers
     * const userOpenAnswers = await prisma.userOpenAnswer.findMany()
     * 
     * // Get first 10 UserOpenAnswers
     * const userOpenAnswers = await prisma.userOpenAnswer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userOpenAnswerWithIdOnly = await prisma.userOpenAnswer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserOpenAnswerFindManyArgs>(args?: SelectSubset<T, UserOpenAnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOpenAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserOpenAnswer.
     * @param {UserOpenAnswerCreateArgs} args - Arguments to create a UserOpenAnswer.
     * @example
     * // Create one UserOpenAnswer
     * const UserOpenAnswer = await prisma.userOpenAnswer.create({
     *   data: {
     *     // ... data to create a UserOpenAnswer
     *   }
     * })
     * 
     */
    create<T extends UserOpenAnswerCreateArgs>(args: SelectSubset<T, UserOpenAnswerCreateArgs<ExtArgs>>): Prisma__UserOpenAnswerClient<$Result.GetResult<Prisma.$UserOpenAnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserOpenAnswers.
     * @param {UserOpenAnswerCreateManyArgs} args - Arguments to create many UserOpenAnswers.
     * @example
     * // Create many UserOpenAnswers
     * const userOpenAnswer = await prisma.userOpenAnswer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserOpenAnswerCreateManyArgs>(args?: SelectSubset<T, UserOpenAnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserOpenAnswers and returns the data saved in the database.
     * @param {UserOpenAnswerCreateManyAndReturnArgs} args - Arguments to create many UserOpenAnswers.
     * @example
     * // Create many UserOpenAnswers
     * const userOpenAnswer = await prisma.userOpenAnswer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserOpenAnswers and only return the `id`
     * const userOpenAnswerWithIdOnly = await prisma.userOpenAnswer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserOpenAnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, UserOpenAnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOpenAnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserOpenAnswer.
     * @param {UserOpenAnswerDeleteArgs} args - Arguments to delete one UserOpenAnswer.
     * @example
     * // Delete one UserOpenAnswer
     * const UserOpenAnswer = await prisma.userOpenAnswer.delete({
     *   where: {
     *     // ... filter to delete one UserOpenAnswer
     *   }
     * })
     * 
     */
    delete<T extends UserOpenAnswerDeleteArgs>(args: SelectSubset<T, UserOpenAnswerDeleteArgs<ExtArgs>>): Prisma__UserOpenAnswerClient<$Result.GetResult<Prisma.$UserOpenAnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserOpenAnswer.
     * @param {UserOpenAnswerUpdateArgs} args - Arguments to update one UserOpenAnswer.
     * @example
     * // Update one UserOpenAnswer
     * const userOpenAnswer = await prisma.userOpenAnswer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserOpenAnswerUpdateArgs>(args: SelectSubset<T, UserOpenAnswerUpdateArgs<ExtArgs>>): Prisma__UserOpenAnswerClient<$Result.GetResult<Prisma.$UserOpenAnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserOpenAnswers.
     * @param {UserOpenAnswerDeleteManyArgs} args - Arguments to filter UserOpenAnswers to delete.
     * @example
     * // Delete a few UserOpenAnswers
     * const { count } = await prisma.userOpenAnswer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserOpenAnswerDeleteManyArgs>(args?: SelectSubset<T, UserOpenAnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserOpenAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOpenAnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserOpenAnswers
     * const userOpenAnswer = await prisma.userOpenAnswer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserOpenAnswerUpdateManyArgs>(args: SelectSubset<T, UserOpenAnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserOpenAnswers and returns the data updated in the database.
     * @param {UserOpenAnswerUpdateManyAndReturnArgs} args - Arguments to update many UserOpenAnswers.
     * @example
     * // Update many UserOpenAnswers
     * const userOpenAnswer = await prisma.userOpenAnswer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserOpenAnswers and only return the `id`
     * const userOpenAnswerWithIdOnly = await prisma.userOpenAnswer.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserOpenAnswerUpdateManyAndReturnArgs>(args: SelectSubset<T, UserOpenAnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOpenAnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserOpenAnswer.
     * @param {UserOpenAnswerUpsertArgs} args - Arguments to update or create a UserOpenAnswer.
     * @example
     * // Update or create a UserOpenAnswer
     * const userOpenAnswer = await prisma.userOpenAnswer.upsert({
     *   create: {
     *     // ... data to create a UserOpenAnswer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserOpenAnswer we want to update
     *   }
     * })
     */
    upsert<T extends UserOpenAnswerUpsertArgs>(args: SelectSubset<T, UserOpenAnswerUpsertArgs<ExtArgs>>): Prisma__UserOpenAnswerClient<$Result.GetResult<Prisma.$UserOpenAnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserOpenAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOpenAnswerCountArgs} args - Arguments to filter UserOpenAnswers to count.
     * @example
     * // Count the number of UserOpenAnswers
     * const count = await prisma.userOpenAnswer.count({
     *   where: {
     *     // ... the filter for the UserOpenAnswers we want to count
     *   }
     * })
    **/
    count<T extends UserOpenAnswerCountArgs>(
      args?: Subset<T, UserOpenAnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserOpenAnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserOpenAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOpenAnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserOpenAnswerAggregateArgs>(args: Subset<T, UserOpenAnswerAggregateArgs>): Prisma.PrismaPromise<GetUserOpenAnswerAggregateType<T>>

    /**
     * Group by UserOpenAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOpenAnswerGroupByArgs} args - Group by arguments.
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
      T extends UserOpenAnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserOpenAnswerGroupByArgs['orderBy'] }
        : { orderBy?: UserOpenAnswerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserOpenAnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserOpenAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserOpenAnswer model
   */
  readonly fields: UserOpenAnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserOpenAnswer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserOpenAnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userMatura<T extends UserMaturaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserMaturaDefaultArgs<ExtArgs>>): Prisma__UserMaturaClient<$Result.GetResult<Prisma.$UserMaturaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    openTask<T extends OpenTasksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OpenTasksDefaultArgs<ExtArgs>>): Prisma__OpenTasksClient<$Result.GetResult<Prisma.$OpenTasksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserOpenAnswer model
   */
  interface UserOpenAnswerFieldRefs {
    readonly id: FieldRef<"UserOpenAnswer", 'String'>
    readonly userMaturaId: FieldRef<"UserOpenAnswer", 'String'>
    readonly openTaskId: FieldRef<"UserOpenAnswer", 'String'>
    readonly answer: FieldRef<"UserOpenAnswer", 'String'>
    readonly screenshotUrl: FieldRef<"UserOpenAnswer", 'String'>
    readonly awardedPoints: FieldRef<"UserOpenAnswer", 'Int'>
    readonly feedback: FieldRef<"UserOpenAnswer", 'String'>
    readonly gradingJson: FieldRef<"UserOpenAnswer", 'String'>
    readonly gradedAt: FieldRef<"UserOpenAnswer", 'DateTime'>
    readonly createdAt: FieldRef<"UserOpenAnswer", 'DateTime'>
    readonly updatedAt: FieldRef<"UserOpenAnswer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserOpenAnswer findUnique
   */
  export type UserOpenAnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOpenAnswer
     */
    select?: UserOpenAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOpenAnswer
     */
    omit?: UserOpenAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOpenAnswerInclude<ExtArgs> | null
    /**
     * Filter, which UserOpenAnswer to fetch.
     */
    where: UserOpenAnswerWhereUniqueInput
  }

  /**
   * UserOpenAnswer findUniqueOrThrow
   */
  export type UserOpenAnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOpenAnswer
     */
    select?: UserOpenAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOpenAnswer
     */
    omit?: UserOpenAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOpenAnswerInclude<ExtArgs> | null
    /**
     * Filter, which UserOpenAnswer to fetch.
     */
    where: UserOpenAnswerWhereUniqueInput
  }

  /**
   * UserOpenAnswer findFirst
   */
  export type UserOpenAnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOpenAnswer
     */
    select?: UserOpenAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOpenAnswer
     */
    omit?: UserOpenAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOpenAnswerInclude<ExtArgs> | null
    /**
     * Filter, which UserOpenAnswer to fetch.
     */
    where?: UserOpenAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOpenAnswers to fetch.
     */
    orderBy?: UserOpenAnswerOrderByWithRelationInput | UserOpenAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserOpenAnswers.
     */
    cursor?: UserOpenAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOpenAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOpenAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserOpenAnswers.
     */
    distinct?: UserOpenAnswerScalarFieldEnum | UserOpenAnswerScalarFieldEnum[]
  }

  /**
   * UserOpenAnswer findFirstOrThrow
   */
  export type UserOpenAnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOpenAnswer
     */
    select?: UserOpenAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOpenAnswer
     */
    omit?: UserOpenAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOpenAnswerInclude<ExtArgs> | null
    /**
     * Filter, which UserOpenAnswer to fetch.
     */
    where?: UserOpenAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOpenAnswers to fetch.
     */
    orderBy?: UserOpenAnswerOrderByWithRelationInput | UserOpenAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserOpenAnswers.
     */
    cursor?: UserOpenAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOpenAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOpenAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserOpenAnswers.
     */
    distinct?: UserOpenAnswerScalarFieldEnum | UserOpenAnswerScalarFieldEnum[]
  }

  /**
   * UserOpenAnswer findMany
   */
  export type UserOpenAnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOpenAnswer
     */
    select?: UserOpenAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOpenAnswer
     */
    omit?: UserOpenAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOpenAnswerInclude<ExtArgs> | null
    /**
     * Filter, which UserOpenAnswers to fetch.
     */
    where?: UserOpenAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOpenAnswers to fetch.
     */
    orderBy?: UserOpenAnswerOrderByWithRelationInput | UserOpenAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserOpenAnswers.
     */
    cursor?: UserOpenAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOpenAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOpenAnswers.
     */
    skip?: number
    distinct?: UserOpenAnswerScalarFieldEnum | UserOpenAnswerScalarFieldEnum[]
  }

  /**
   * UserOpenAnswer create
   */
  export type UserOpenAnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOpenAnswer
     */
    select?: UserOpenAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOpenAnswer
     */
    omit?: UserOpenAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOpenAnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a UserOpenAnswer.
     */
    data: XOR<UserOpenAnswerCreateInput, UserOpenAnswerUncheckedCreateInput>
  }

  /**
   * UserOpenAnswer createMany
   */
  export type UserOpenAnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserOpenAnswers.
     */
    data: UserOpenAnswerCreateManyInput | UserOpenAnswerCreateManyInput[]
  }

  /**
   * UserOpenAnswer createManyAndReturn
   */
  export type UserOpenAnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOpenAnswer
     */
    select?: UserOpenAnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserOpenAnswer
     */
    omit?: UserOpenAnswerOmit<ExtArgs> | null
    /**
     * The data used to create many UserOpenAnswers.
     */
    data: UserOpenAnswerCreateManyInput | UserOpenAnswerCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOpenAnswerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserOpenAnswer update
   */
  export type UserOpenAnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOpenAnswer
     */
    select?: UserOpenAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOpenAnswer
     */
    omit?: UserOpenAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOpenAnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a UserOpenAnswer.
     */
    data: XOR<UserOpenAnswerUpdateInput, UserOpenAnswerUncheckedUpdateInput>
    /**
     * Choose, which UserOpenAnswer to update.
     */
    where: UserOpenAnswerWhereUniqueInput
  }

  /**
   * UserOpenAnswer updateMany
   */
  export type UserOpenAnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserOpenAnswers.
     */
    data: XOR<UserOpenAnswerUpdateManyMutationInput, UserOpenAnswerUncheckedUpdateManyInput>
    /**
     * Filter which UserOpenAnswers to update
     */
    where?: UserOpenAnswerWhereInput
    /**
     * Limit how many UserOpenAnswers to update.
     */
    limit?: number
  }

  /**
   * UserOpenAnswer updateManyAndReturn
   */
  export type UserOpenAnswerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOpenAnswer
     */
    select?: UserOpenAnswerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserOpenAnswer
     */
    omit?: UserOpenAnswerOmit<ExtArgs> | null
    /**
     * The data used to update UserOpenAnswers.
     */
    data: XOR<UserOpenAnswerUpdateManyMutationInput, UserOpenAnswerUncheckedUpdateManyInput>
    /**
     * Filter which UserOpenAnswers to update
     */
    where?: UserOpenAnswerWhereInput
    /**
     * Limit how many UserOpenAnswers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOpenAnswerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserOpenAnswer upsert
   */
  export type UserOpenAnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOpenAnswer
     */
    select?: UserOpenAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOpenAnswer
     */
    omit?: UserOpenAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOpenAnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the UserOpenAnswer to update in case it exists.
     */
    where: UserOpenAnswerWhereUniqueInput
    /**
     * In case the UserOpenAnswer found by the `where` argument doesn't exist, create a new UserOpenAnswer with this data.
     */
    create: XOR<UserOpenAnswerCreateInput, UserOpenAnswerUncheckedCreateInput>
    /**
     * In case the UserOpenAnswer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserOpenAnswerUpdateInput, UserOpenAnswerUncheckedUpdateInput>
  }

  /**
   * UserOpenAnswer delete
   */
  export type UserOpenAnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOpenAnswer
     */
    select?: UserOpenAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOpenAnswer
     */
    omit?: UserOpenAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOpenAnswerInclude<ExtArgs> | null
    /**
     * Filter which UserOpenAnswer to delete.
     */
    where: UserOpenAnswerWhereUniqueInput
  }

  /**
   * UserOpenAnswer deleteMany
   */
  export type UserOpenAnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserOpenAnswers to delete
     */
    where?: UserOpenAnswerWhereInput
    /**
     * Limit how many UserOpenAnswers to delete.
     */
    limit?: number
  }

  /**
   * UserOpenAnswer without action
   */
  export type UserOpenAnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOpenAnswer
     */
    select?: UserOpenAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOpenAnswer
     */
    omit?: UserOpenAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOpenAnswerInclude<ExtArgs> | null
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
    url: 'url',
    description: 'description'
  };

  export type VideoScalarFieldEnum = (typeof VideoScalarFieldEnum)[keyof typeof VideoScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    text: 'text',
    videoId: 'videoId',
    time: 'time',
    userId: 'userId',
    isPublic: 'isPublic',
    userName: 'userName',
    lastName: 'lastName'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const AnswerScalarFieldEnum: {
    id: 'id',
    text: 'text',
    questionId: 'questionId',
    userId: 'userId',
    userName: 'userName',
    lastName: 'lastName'
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
    rubric: 'rubric',
    referenceAnswer: 'referenceAnswer',
    maxPoints: 'maxPoints',
    subSectionId: 'subSectionId',
    openTaskId: 'openTaskId'
  };

  export type OpenTasksScalarFieldEnum = (typeof OpenTasksScalarFieldEnum)[keyof typeof OpenTasksScalarFieldEnum]


  export const ClosedTasksScalarFieldEnum: {
    id: 'id',
    name: 'name',
    content: 'content',
    correctAnswer: 'correctAnswer',
    points: 'points',
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


  export const MaturaScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type MaturaScalarFieldEnum = (typeof MaturaScalarFieldEnum)[keyof typeof MaturaScalarFieldEnum]


  export const UserMaturaScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    maturaId: 'maturaId',
    status: 'status',
    earnedPoints: 'earnedPoints',
    createdAt: 'createdAt'
  };

  export type UserMaturaScalarFieldEnum = (typeof UserMaturaScalarFieldEnum)[keyof typeof UserMaturaScalarFieldEnum]


  export const UserClosedAnswerScalarFieldEnum: {
    id: 'id',
    userMaturaId: 'userMaturaId',
    closedTaskId: 'closedTaskId',
    answer: 'answer',
    isCorrect: 'isCorrect',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserClosedAnswerScalarFieldEnum = (typeof UserClosedAnswerScalarFieldEnum)[keyof typeof UserClosedAnswerScalarFieldEnum]


  export const UserOpenAnswerScalarFieldEnum: {
    id: 'id',
    userMaturaId: 'userMaturaId',
    openTaskId: 'openTaskId',
    answer: 'answer',
    screenshotUrl: 'screenshotUrl',
    awardedPoints: 'awardedPoints',
    feedback: 'feedback',
    gradingJson: 'gradingJson',
    gradedAt: 'gradedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserOpenAnswerScalarFieldEnum = (typeof UserOpenAnswerScalarFieldEnum)[keyof typeof UserOpenAnswerScalarFieldEnum]


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
    answers?: AnswerListRelationFilter
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
    questions?: QuestionOrderByRelationAggregateInput
    answers?: AnswerOrderByRelationAggregateInput
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
    questions?: QuestionListRelationFilter
    answers?: AnswerListRelationFilter
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

  export type VideoWhereInput = {
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    id?: IntFilter<"Video"> | number
    url?: StringFilter<"Video"> | string
    description?: StringNullableFilter<"Video"> | string | null
    questions?: QuestionListRelationFilter
  }

  export type VideoOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    description?: SortOrderInput | SortOrder
    questions?: QuestionOrderByRelationAggregateInput
  }

  export type VideoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    url?: StringFilter<"Video"> | string
    description?: StringNullableFilter<"Video"> | string | null
    questions?: QuestionListRelationFilter
  }, "id">

  export type VideoOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    description?: SortOrderInput | SortOrder
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
    description?: StringNullableWithAggregatesFilter<"Video"> | string | null
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
    isPublic?: BoolFilter<"Question"> | boolean
    userName?: StringFilter<"Question"> | string
    lastName?: StringFilter<"Question"> | string
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
    isPublic?: SortOrder
    userName?: SortOrder
    lastName?: SortOrder
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
    isPublic?: BoolFilter<"Question"> | boolean
    userName?: StringFilter<"Question"> | string
    lastName?: StringFilter<"Question"> | string
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
    isPublic?: SortOrder
    userName?: SortOrder
    lastName?: SortOrder
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
    isPublic?: BoolWithAggregatesFilter<"Question"> | boolean
    userName?: StringWithAggregatesFilter<"Question"> | string
    lastName?: StringWithAggregatesFilter<"Question"> | string
  }

  export type AnswerWhereInput = {
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    id?: IntFilter<"Answer"> | number
    text?: StringFilter<"Answer"> | string
    questionId?: IntFilter<"Answer"> | number
    userId?: StringFilter<"Answer"> | string
    userName?: StringFilter<"Answer"> | string
    lastName?: StringFilter<"Answer"> | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AnswerOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    questionId?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    lastName?: SortOrder
    question?: QuestionOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type AnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    text?: StringFilter<"Answer"> | string
    questionId?: IntFilter<"Answer"> | number
    userId?: StringFilter<"Answer"> | string
    userName?: StringFilter<"Answer"> | string
    lastName?: StringFilter<"Answer"> | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AnswerOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    questionId?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    lastName?: SortOrder
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
    userId?: StringWithAggregatesFilter<"Answer"> | string
    userName?: StringWithAggregatesFilter<"Answer"> | string
    lastName?: StringWithAggregatesFilter<"Answer"> | string
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
    rubric?: StringFilter<"OpenTasks"> | string
    referenceAnswer?: StringNullableFilter<"OpenTasks"> | string | null
    maxPoints?: IntFilter<"OpenTasks"> | number
    subSectionId?: StringFilter<"OpenTasks"> | string
    openTaskId?: StringNullableFilter<"OpenTasks"> | string | null
    subSection?: XOR<SubSectionScalarRelationFilter, SubSectionWhereInput>
    maturas?: MaturaListRelationFilter
    userAnswers?: UserOpenAnswerListRelationFilter
  }

  export type OpenTasksOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    rubric?: SortOrder
    referenceAnswer?: SortOrderInput | SortOrder
    maxPoints?: SortOrder
    subSectionId?: SortOrder
    openTaskId?: SortOrderInput | SortOrder
    subSection?: SubSectionOrderByWithRelationInput
    maturas?: MaturaOrderByRelationAggregateInput
    userAnswers?: UserOpenAnswerOrderByRelationAggregateInput
  }

  export type OpenTasksWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OpenTasksWhereInput | OpenTasksWhereInput[]
    OR?: OpenTasksWhereInput[]
    NOT?: OpenTasksWhereInput | OpenTasksWhereInput[]
    name?: StringFilter<"OpenTasks"> | string
    content?: StringFilter<"OpenTasks"> | string
    rubric?: StringFilter<"OpenTasks"> | string
    referenceAnswer?: StringNullableFilter<"OpenTasks"> | string | null
    maxPoints?: IntFilter<"OpenTasks"> | number
    subSectionId?: StringFilter<"OpenTasks"> | string
    openTaskId?: StringNullableFilter<"OpenTasks"> | string | null
    subSection?: XOR<SubSectionScalarRelationFilter, SubSectionWhereInput>
    maturas?: MaturaListRelationFilter
    userAnswers?: UserOpenAnswerListRelationFilter
  }, "id">

  export type OpenTasksOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    rubric?: SortOrder
    referenceAnswer?: SortOrderInput | SortOrder
    maxPoints?: SortOrder
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
    rubric?: StringWithAggregatesFilter<"OpenTasks"> | string
    referenceAnswer?: StringNullableWithAggregatesFilter<"OpenTasks"> | string | null
    maxPoints?: IntWithAggregatesFilter<"OpenTasks"> | number
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
    points?: IntFilter<"ClosedTasks"> | number
    subSectionId?: StringFilter<"ClosedTasks"> | string
    answers?: AnswersListRelationFilter
    subSection?: XOR<SubSectionScalarRelationFilter, SubSectionWhereInput>
    maturas?: MaturaListRelationFilter
    userAnswers?: UserClosedAnswerListRelationFilter
  }

  export type ClosedTasksOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    correctAnswer?: SortOrder
    points?: SortOrder
    subSectionId?: SortOrder
    answers?: AnswersOrderByRelationAggregateInput
    subSection?: SubSectionOrderByWithRelationInput
    maturas?: MaturaOrderByRelationAggregateInput
    userAnswers?: UserClosedAnswerOrderByRelationAggregateInput
  }

  export type ClosedTasksWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClosedTasksWhereInput | ClosedTasksWhereInput[]
    OR?: ClosedTasksWhereInput[]
    NOT?: ClosedTasksWhereInput | ClosedTasksWhereInput[]
    name?: StringFilter<"ClosedTasks"> | string
    content?: StringFilter<"ClosedTasks"> | string
    correctAnswer?: StringFilter<"ClosedTasks"> | string
    points?: IntFilter<"ClosedTasks"> | number
    subSectionId?: StringFilter<"ClosedTasks"> | string
    answers?: AnswersListRelationFilter
    subSection?: XOR<SubSectionScalarRelationFilter, SubSectionWhereInput>
    maturas?: MaturaListRelationFilter
    userAnswers?: UserClosedAnswerListRelationFilter
  }, "id">

  export type ClosedTasksOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    correctAnswer?: SortOrder
    points?: SortOrder
    subSectionId?: SortOrder
    _count?: ClosedTasksCountOrderByAggregateInput
    _avg?: ClosedTasksAvgOrderByAggregateInput
    _max?: ClosedTasksMaxOrderByAggregateInput
    _min?: ClosedTasksMinOrderByAggregateInput
    _sum?: ClosedTasksSumOrderByAggregateInput
  }

  export type ClosedTasksScalarWhereWithAggregatesInput = {
    AND?: ClosedTasksScalarWhereWithAggregatesInput | ClosedTasksScalarWhereWithAggregatesInput[]
    OR?: ClosedTasksScalarWhereWithAggregatesInput[]
    NOT?: ClosedTasksScalarWhereWithAggregatesInput | ClosedTasksScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClosedTasks"> | string
    name?: StringWithAggregatesFilter<"ClosedTasks"> | string
    content?: StringWithAggregatesFilter<"ClosedTasks"> | string
    correctAnswer?: StringWithAggregatesFilter<"ClosedTasks"> | string
    points?: IntWithAggregatesFilter<"ClosedTasks"> | number
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

  export type MaturaWhereInput = {
    AND?: MaturaWhereInput | MaturaWhereInput[]
    OR?: MaturaWhereInput[]
    NOT?: MaturaWhereInput | MaturaWhereInput[]
    id?: StringFilter<"Matura"> | string
    name?: StringFilter<"Matura"> | string
    createdAt?: DateTimeFilter<"Matura"> | Date | string
    closedTasks?: ClosedTasksListRelationFilter
    openTasks?: OpenTasksListRelationFilter
    userMaturas?: UserMaturaListRelationFilter
  }

  export type MaturaOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    closedTasks?: ClosedTasksOrderByRelationAggregateInput
    openTasks?: OpenTasksOrderByRelationAggregateInput
    userMaturas?: UserMaturaOrderByRelationAggregateInput
  }

  export type MaturaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MaturaWhereInput | MaturaWhereInput[]
    OR?: MaturaWhereInput[]
    NOT?: MaturaWhereInput | MaturaWhereInput[]
    name?: StringFilter<"Matura"> | string
    createdAt?: DateTimeFilter<"Matura"> | Date | string
    closedTasks?: ClosedTasksListRelationFilter
    openTasks?: OpenTasksListRelationFilter
    userMaturas?: UserMaturaListRelationFilter
  }, "id">

  export type MaturaOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: MaturaCountOrderByAggregateInput
    _max?: MaturaMaxOrderByAggregateInput
    _min?: MaturaMinOrderByAggregateInput
  }

  export type MaturaScalarWhereWithAggregatesInput = {
    AND?: MaturaScalarWhereWithAggregatesInput | MaturaScalarWhereWithAggregatesInput[]
    OR?: MaturaScalarWhereWithAggregatesInput[]
    NOT?: MaturaScalarWhereWithAggregatesInput | MaturaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Matura"> | string
    name?: StringWithAggregatesFilter<"Matura"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Matura"> | Date | string
  }

  export type UserMaturaWhereInput = {
    AND?: UserMaturaWhereInput | UserMaturaWhereInput[]
    OR?: UserMaturaWhereInput[]
    NOT?: UserMaturaWhereInput | UserMaturaWhereInput[]
    id?: StringFilter<"UserMatura"> | string
    userId?: StringFilter<"UserMatura"> | string
    maturaId?: StringFilter<"UserMatura"> | string
    status?: BoolFilter<"UserMatura"> | boolean
    earnedPoints?: IntFilter<"UserMatura"> | number
    createdAt?: DateTimeFilter<"UserMatura"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    matura?: XOR<MaturaScalarRelationFilter, MaturaWhereInput>
    closedAnswers?: UserClosedAnswerListRelationFilter
    openAnswers?: UserOpenAnswerListRelationFilter
  }

  export type UserMaturaOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    maturaId?: SortOrder
    status?: SortOrder
    earnedPoints?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    matura?: MaturaOrderByWithRelationInput
    closedAnswers?: UserClosedAnswerOrderByRelationAggregateInput
    openAnswers?: UserOpenAnswerOrderByRelationAggregateInput
  }

  export type UserMaturaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_maturaId?: UserMaturaUserIdMaturaIdCompoundUniqueInput
    AND?: UserMaturaWhereInput | UserMaturaWhereInput[]
    OR?: UserMaturaWhereInput[]
    NOT?: UserMaturaWhereInput | UserMaturaWhereInput[]
    userId?: StringFilter<"UserMatura"> | string
    maturaId?: StringFilter<"UserMatura"> | string
    status?: BoolFilter<"UserMatura"> | boolean
    earnedPoints?: IntFilter<"UserMatura"> | number
    createdAt?: DateTimeFilter<"UserMatura"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    matura?: XOR<MaturaScalarRelationFilter, MaturaWhereInput>
    closedAnswers?: UserClosedAnswerListRelationFilter
    openAnswers?: UserOpenAnswerListRelationFilter
  }, "id" | "userId_maturaId">

  export type UserMaturaOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    maturaId?: SortOrder
    status?: SortOrder
    earnedPoints?: SortOrder
    createdAt?: SortOrder
    _count?: UserMaturaCountOrderByAggregateInput
    _avg?: UserMaturaAvgOrderByAggregateInput
    _max?: UserMaturaMaxOrderByAggregateInput
    _min?: UserMaturaMinOrderByAggregateInput
    _sum?: UserMaturaSumOrderByAggregateInput
  }

  export type UserMaturaScalarWhereWithAggregatesInput = {
    AND?: UserMaturaScalarWhereWithAggregatesInput | UserMaturaScalarWhereWithAggregatesInput[]
    OR?: UserMaturaScalarWhereWithAggregatesInput[]
    NOT?: UserMaturaScalarWhereWithAggregatesInput | UserMaturaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserMatura"> | string
    userId?: StringWithAggregatesFilter<"UserMatura"> | string
    maturaId?: StringWithAggregatesFilter<"UserMatura"> | string
    status?: BoolWithAggregatesFilter<"UserMatura"> | boolean
    earnedPoints?: IntWithAggregatesFilter<"UserMatura"> | number
    createdAt?: DateTimeWithAggregatesFilter<"UserMatura"> | Date | string
  }

  export type UserClosedAnswerWhereInput = {
    AND?: UserClosedAnswerWhereInput | UserClosedAnswerWhereInput[]
    OR?: UserClosedAnswerWhereInput[]
    NOT?: UserClosedAnswerWhereInput | UserClosedAnswerWhereInput[]
    id?: StringFilter<"UserClosedAnswer"> | string
    userMaturaId?: StringFilter<"UserClosedAnswer"> | string
    closedTaskId?: StringFilter<"UserClosedAnswer"> | string
    answer?: StringNullableFilter<"UserClosedAnswer"> | string | null
    isCorrect?: BoolNullableFilter<"UserClosedAnswer"> | boolean | null
    createdAt?: DateTimeFilter<"UserClosedAnswer"> | Date | string
    updatedAt?: DateTimeFilter<"UserClosedAnswer"> | Date | string
    userMatura?: XOR<UserMaturaScalarRelationFilter, UserMaturaWhereInput>
    closedTask?: XOR<ClosedTasksScalarRelationFilter, ClosedTasksWhereInput>
  }

  export type UserClosedAnswerOrderByWithRelationInput = {
    id?: SortOrder
    userMaturaId?: SortOrder
    closedTaskId?: SortOrder
    answer?: SortOrderInput | SortOrder
    isCorrect?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userMatura?: UserMaturaOrderByWithRelationInput
    closedTask?: ClosedTasksOrderByWithRelationInput
  }

  export type UserClosedAnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userMaturaId_closedTaskId?: UserClosedAnswerUserMaturaIdClosedTaskIdCompoundUniqueInput
    AND?: UserClosedAnswerWhereInput | UserClosedAnswerWhereInput[]
    OR?: UserClosedAnswerWhereInput[]
    NOT?: UserClosedAnswerWhereInput | UserClosedAnswerWhereInput[]
    userMaturaId?: StringFilter<"UserClosedAnswer"> | string
    closedTaskId?: StringFilter<"UserClosedAnswer"> | string
    answer?: StringNullableFilter<"UserClosedAnswer"> | string | null
    isCorrect?: BoolNullableFilter<"UserClosedAnswer"> | boolean | null
    createdAt?: DateTimeFilter<"UserClosedAnswer"> | Date | string
    updatedAt?: DateTimeFilter<"UserClosedAnswer"> | Date | string
    userMatura?: XOR<UserMaturaScalarRelationFilter, UserMaturaWhereInput>
    closedTask?: XOR<ClosedTasksScalarRelationFilter, ClosedTasksWhereInput>
  }, "id" | "userMaturaId_closedTaskId">

  export type UserClosedAnswerOrderByWithAggregationInput = {
    id?: SortOrder
    userMaturaId?: SortOrder
    closedTaskId?: SortOrder
    answer?: SortOrderInput | SortOrder
    isCorrect?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserClosedAnswerCountOrderByAggregateInput
    _max?: UserClosedAnswerMaxOrderByAggregateInput
    _min?: UserClosedAnswerMinOrderByAggregateInput
  }

  export type UserClosedAnswerScalarWhereWithAggregatesInput = {
    AND?: UserClosedAnswerScalarWhereWithAggregatesInput | UserClosedAnswerScalarWhereWithAggregatesInput[]
    OR?: UserClosedAnswerScalarWhereWithAggregatesInput[]
    NOT?: UserClosedAnswerScalarWhereWithAggregatesInput | UserClosedAnswerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserClosedAnswer"> | string
    userMaturaId?: StringWithAggregatesFilter<"UserClosedAnswer"> | string
    closedTaskId?: StringWithAggregatesFilter<"UserClosedAnswer"> | string
    answer?: StringNullableWithAggregatesFilter<"UserClosedAnswer"> | string | null
    isCorrect?: BoolNullableWithAggregatesFilter<"UserClosedAnswer"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"UserClosedAnswer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserClosedAnswer"> | Date | string
  }

  export type UserOpenAnswerWhereInput = {
    AND?: UserOpenAnswerWhereInput | UserOpenAnswerWhereInput[]
    OR?: UserOpenAnswerWhereInput[]
    NOT?: UserOpenAnswerWhereInput | UserOpenAnswerWhereInput[]
    id?: StringFilter<"UserOpenAnswer"> | string
    userMaturaId?: StringFilter<"UserOpenAnswer"> | string
    openTaskId?: StringFilter<"UserOpenAnswer"> | string
    answer?: StringNullableFilter<"UserOpenAnswer"> | string | null
    screenshotUrl?: StringNullableFilter<"UserOpenAnswer"> | string | null
    awardedPoints?: IntNullableFilter<"UserOpenAnswer"> | number | null
    feedback?: StringNullableFilter<"UserOpenAnswer"> | string | null
    gradingJson?: StringNullableFilter<"UserOpenAnswer"> | string | null
    gradedAt?: DateTimeNullableFilter<"UserOpenAnswer"> | Date | string | null
    createdAt?: DateTimeFilter<"UserOpenAnswer"> | Date | string
    updatedAt?: DateTimeFilter<"UserOpenAnswer"> | Date | string
    userMatura?: XOR<UserMaturaScalarRelationFilter, UserMaturaWhereInput>
    openTask?: XOR<OpenTasksScalarRelationFilter, OpenTasksWhereInput>
  }

  export type UserOpenAnswerOrderByWithRelationInput = {
    id?: SortOrder
    userMaturaId?: SortOrder
    openTaskId?: SortOrder
    answer?: SortOrderInput | SortOrder
    screenshotUrl?: SortOrderInput | SortOrder
    awardedPoints?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    gradingJson?: SortOrderInput | SortOrder
    gradedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userMatura?: UserMaturaOrderByWithRelationInput
    openTask?: OpenTasksOrderByWithRelationInput
  }

  export type UserOpenAnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userMaturaId_openTaskId?: UserOpenAnswerUserMaturaIdOpenTaskIdCompoundUniqueInput
    AND?: UserOpenAnswerWhereInput | UserOpenAnswerWhereInput[]
    OR?: UserOpenAnswerWhereInput[]
    NOT?: UserOpenAnswerWhereInput | UserOpenAnswerWhereInput[]
    userMaturaId?: StringFilter<"UserOpenAnswer"> | string
    openTaskId?: StringFilter<"UserOpenAnswer"> | string
    answer?: StringNullableFilter<"UserOpenAnswer"> | string | null
    screenshotUrl?: StringNullableFilter<"UserOpenAnswer"> | string | null
    awardedPoints?: IntNullableFilter<"UserOpenAnswer"> | number | null
    feedback?: StringNullableFilter<"UserOpenAnswer"> | string | null
    gradingJson?: StringNullableFilter<"UserOpenAnswer"> | string | null
    gradedAt?: DateTimeNullableFilter<"UserOpenAnswer"> | Date | string | null
    createdAt?: DateTimeFilter<"UserOpenAnswer"> | Date | string
    updatedAt?: DateTimeFilter<"UserOpenAnswer"> | Date | string
    userMatura?: XOR<UserMaturaScalarRelationFilter, UserMaturaWhereInput>
    openTask?: XOR<OpenTasksScalarRelationFilter, OpenTasksWhereInput>
  }, "id" | "userMaturaId_openTaskId">

  export type UserOpenAnswerOrderByWithAggregationInput = {
    id?: SortOrder
    userMaturaId?: SortOrder
    openTaskId?: SortOrder
    answer?: SortOrderInput | SortOrder
    screenshotUrl?: SortOrderInput | SortOrder
    awardedPoints?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    gradingJson?: SortOrderInput | SortOrder
    gradedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserOpenAnswerCountOrderByAggregateInput
    _avg?: UserOpenAnswerAvgOrderByAggregateInput
    _max?: UserOpenAnswerMaxOrderByAggregateInput
    _min?: UserOpenAnswerMinOrderByAggregateInput
    _sum?: UserOpenAnswerSumOrderByAggregateInput
  }

  export type UserOpenAnswerScalarWhereWithAggregatesInput = {
    AND?: UserOpenAnswerScalarWhereWithAggregatesInput | UserOpenAnswerScalarWhereWithAggregatesInput[]
    OR?: UserOpenAnswerScalarWhereWithAggregatesInput[]
    NOT?: UserOpenAnswerScalarWhereWithAggregatesInput | UserOpenAnswerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserOpenAnswer"> | string
    userMaturaId?: StringWithAggregatesFilter<"UserOpenAnswer"> | string
    openTaskId?: StringWithAggregatesFilter<"UserOpenAnswer"> | string
    answer?: StringNullableWithAggregatesFilter<"UserOpenAnswer"> | string | null
    screenshotUrl?: StringNullableWithAggregatesFilter<"UserOpenAnswer"> | string | null
    awardedPoints?: IntNullableWithAggregatesFilter<"UserOpenAnswer"> | number | null
    feedback?: StringNullableWithAggregatesFilter<"UserOpenAnswer"> | string | null
    gradingJson?: StringNullableWithAggregatesFilter<"UserOpenAnswer"> | string | null
    gradedAt?: DateTimeNullableWithAggregatesFilter<"UserOpenAnswer"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserOpenAnswer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserOpenAnswer"> | Date | string
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
    answers?: AnswerCreateNestedManyWithoutUserInput
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
    questions?: QuestionUncheckedCreateNestedManyWithoutUserInput
    answers?: AnswerUncheckedCreateNestedManyWithoutUserInput
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
    questions?: QuestionUpdateManyWithoutUserNestedInput
    answers?: AnswerUpdateManyWithoutUserNestedInput
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
    questions?: QuestionUncheckedUpdateManyWithoutUserNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutUserNestedInput
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

  export type VideoCreateInput = {
    url: string
    description?: string | null
    questions?: QuestionCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateInput = {
    id?: number
    url: string
    description?: string | null
    questions?: QuestionUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: QuestionUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: QuestionUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type VideoCreateManyInput = {
    id?: number
    url: string
    description?: string | null
  }

  export type VideoUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VideoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuestionCreateInput = {
    title: string
    text: string
    time: number
    isPublic?: boolean
    userName: string
    lastName: string
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
    isPublic?: boolean
    userName: string
    lastName: string
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    userName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
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
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    userName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: number
    title: string
    text: string
    videoId: number
    time: number
    userId: string
    isPublic?: boolean
    userName: string
    lastName: string
  }

  export type QuestionUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    userName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    videoId?: IntFieldUpdateOperationsInput | number
    time?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    userName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
  }

  export type AnswerCreateInput = {
    text: string
    userName: string
    lastName: string
    question: QuestionCreateNestedOneWithoutAnswersInput
    user: UserCreateNestedOneWithoutAnswersInput
  }

  export type AnswerUncheckedCreateInput = {
    id?: number
    text: string
    questionId: number
    userId: string
    userName: string
    lastName: string
  }

  export type AnswerUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
    user?: UserUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AnswerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    questionId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
  }

  export type AnswerCreateManyInput = {
    id?: number
    text: string
    questionId: number
    userId: string
    userName: string
    lastName: string
  }

  export type AnswerUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
  }

  export type AnswerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    questionId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
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
    rubric: string
    referenceAnswer?: string | null
    maxPoints?: number
    openTaskId?: string | null
    subSection: SubSectionCreateNestedOneWithoutOpenTasksInput
    maturas?: MaturaCreateNestedManyWithoutOpenTasksInput
    userAnswers?: UserOpenAnswerCreateNestedManyWithoutOpenTaskInput
  }

  export type OpenTasksUncheckedCreateInput = {
    id?: string
    name: string
    content: string
    rubric: string
    referenceAnswer?: string | null
    maxPoints?: number
    subSectionId: string
    openTaskId?: string | null
    maturas?: MaturaUncheckedCreateNestedManyWithoutOpenTasksInput
    userAnswers?: UserOpenAnswerUncheckedCreateNestedManyWithoutOpenTaskInput
  }

  export type OpenTasksUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    rubric?: StringFieldUpdateOperationsInput | string
    referenceAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    maxPoints?: IntFieldUpdateOperationsInput | number
    openTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    subSection?: SubSectionUpdateOneRequiredWithoutOpenTasksNestedInput
    maturas?: MaturaUpdateManyWithoutOpenTasksNestedInput
    userAnswers?: UserOpenAnswerUpdateManyWithoutOpenTaskNestedInput
  }

  export type OpenTasksUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    rubric?: StringFieldUpdateOperationsInput | string
    referenceAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    maxPoints?: IntFieldUpdateOperationsInput | number
    subSectionId?: StringFieldUpdateOperationsInput | string
    openTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    maturas?: MaturaUncheckedUpdateManyWithoutOpenTasksNestedInput
    userAnswers?: UserOpenAnswerUncheckedUpdateManyWithoutOpenTaskNestedInput
  }

  export type OpenTasksCreateManyInput = {
    id?: string
    name: string
    content: string
    rubric: string
    referenceAnswer?: string | null
    maxPoints?: number
    subSectionId: string
    openTaskId?: string | null
  }

  export type OpenTasksUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    rubric?: StringFieldUpdateOperationsInput | string
    referenceAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    maxPoints?: IntFieldUpdateOperationsInput | number
    openTaskId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OpenTasksUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    rubric?: StringFieldUpdateOperationsInput | string
    referenceAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    maxPoints?: IntFieldUpdateOperationsInput | number
    subSectionId?: StringFieldUpdateOperationsInput | string
    openTaskId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClosedTasksCreateInput = {
    id?: string
    name: string
    content: string
    correctAnswer: string
    points?: number
    answers?: AnswersCreateNestedManyWithoutClosedTaskInput
    subSection: SubSectionCreateNestedOneWithoutClosedTasksInput
    maturas?: MaturaCreateNestedManyWithoutClosedTasksInput
    userAnswers?: UserClosedAnswerCreateNestedManyWithoutClosedTaskInput
  }

  export type ClosedTasksUncheckedCreateInput = {
    id?: string
    name: string
    content: string
    correctAnswer: string
    points?: number
    subSectionId: string
    answers?: AnswersUncheckedCreateNestedManyWithoutClosedTaskInput
    maturas?: MaturaUncheckedCreateNestedManyWithoutClosedTasksInput
    userAnswers?: UserClosedAnswerUncheckedCreateNestedManyWithoutClosedTaskInput
  }

  export type ClosedTasksUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    answers?: AnswersUpdateManyWithoutClosedTaskNestedInput
    subSection?: SubSectionUpdateOneRequiredWithoutClosedTasksNestedInput
    maturas?: MaturaUpdateManyWithoutClosedTasksNestedInput
    userAnswers?: UserClosedAnswerUpdateManyWithoutClosedTaskNestedInput
  }

  export type ClosedTasksUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    subSectionId?: StringFieldUpdateOperationsInput | string
    answers?: AnswersUncheckedUpdateManyWithoutClosedTaskNestedInput
    maturas?: MaturaUncheckedUpdateManyWithoutClosedTasksNestedInput
    userAnswers?: UserClosedAnswerUncheckedUpdateManyWithoutClosedTaskNestedInput
  }

  export type ClosedTasksCreateManyInput = {
    id?: string
    name: string
    content: string
    correctAnswer: string
    points?: number
    subSectionId: string
  }

  export type ClosedTasksUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
  }

  export type ClosedTasksUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
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

  export type MaturaCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    closedTasks?: ClosedTasksCreateNestedManyWithoutMaturasInput
    openTasks?: OpenTasksCreateNestedManyWithoutMaturasInput
    userMaturas?: UserMaturaCreateNestedManyWithoutMaturaInput
  }

  export type MaturaUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    closedTasks?: ClosedTasksUncheckedCreateNestedManyWithoutMaturasInput
    openTasks?: OpenTasksUncheckedCreateNestedManyWithoutMaturasInput
    userMaturas?: UserMaturaUncheckedCreateNestedManyWithoutMaturaInput
  }

  export type MaturaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedTasks?: ClosedTasksUpdateManyWithoutMaturasNestedInput
    openTasks?: OpenTasksUpdateManyWithoutMaturasNestedInput
    userMaturas?: UserMaturaUpdateManyWithoutMaturaNestedInput
  }

  export type MaturaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedTasks?: ClosedTasksUncheckedUpdateManyWithoutMaturasNestedInput
    openTasks?: OpenTasksUncheckedUpdateManyWithoutMaturasNestedInput
    userMaturas?: UserMaturaUncheckedUpdateManyWithoutMaturaNestedInput
  }

  export type MaturaCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type MaturaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaturaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMaturaCreateInput = {
    id?: string
    status?: boolean
    earnedPoints?: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserMaturasInput
    matura: MaturaCreateNestedOneWithoutUserMaturasInput
    closedAnswers?: UserClosedAnswerCreateNestedManyWithoutUserMaturaInput
    openAnswers?: UserOpenAnswerCreateNestedManyWithoutUserMaturaInput
  }

  export type UserMaturaUncheckedCreateInput = {
    id?: string
    userId: string
    maturaId: string
    status?: boolean
    earnedPoints?: number
    createdAt?: Date | string
    closedAnswers?: UserClosedAnswerUncheckedCreateNestedManyWithoutUserMaturaInput
    openAnswers?: UserOpenAnswerUncheckedCreateNestedManyWithoutUserMaturaInput
  }

  export type UserMaturaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    earnedPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserMaturasNestedInput
    matura?: MaturaUpdateOneRequiredWithoutUserMaturasNestedInput
    closedAnswers?: UserClosedAnswerUpdateManyWithoutUserMaturaNestedInput
    openAnswers?: UserOpenAnswerUpdateManyWithoutUserMaturaNestedInput
  }

  export type UserMaturaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    maturaId?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    earnedPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAnswers?: UserClosedAnswerUncheckedUpdateManyWithoutUserMaturaNestedInput
    openAnswers?: UserOpenAnswerUncheckedUpdateManyWithoutUserMaturaNestedInput
  }

  export type UserMaturaCreateManyInput = {
    id?: string
    userId: string
    maturaId: string
    status?: boolean
    earnedPoints?: number
    createdAt?: Date | string
  }

  export type UserMaturaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    earnedPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMaturaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    maturaId?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    earnedPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserClosedAnswerCreateInput = {
    id?: string
    answer?: string | null
    isCorrect?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userMatura: UserMaturaCreateNestedOneWithoutClosedAnswersInput
    closedTask: ClosedTasksCreateNestedOneWithoutUserAnswersInput
  }

  export type UserClosedAnswerUncheckedCreateInput = {
    id?: string
    userMaturaId: string
    closedTaskId: string
    answer?: string | null
    isCorrect?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserClosedAnswerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userMatura?: UserMaturaUpdateOneRequiredWithoutClosedAnswersNestedInput
    closedTask?: ClosedTasksUpdateOneRequiredWithoutUserAnswersNestedInput
  }

  export type UserClosedAnswerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userMaturaId?: StringFieldUpdateOperationsInput | string
    closedTaskId?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserClosedAnswerCreateManyInput = {
    id?: string
    userMaturaId: string
    closedTaskId: string
    answer?: string | null
    isCorrect?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserClosedAnswerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserClosedAnswerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userMaturaId?: StringFieldUpdateOperationsInput | string
    closedTaskId?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOpenAnswerCreateInput = {
    id?: string
    answer?: string | null
    screenshotUrl?: string | null
    awardedPoints?: number | null
    feedback?: string | null
    gradingJson?: string | null
    gradedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userMatura: UserMaturaCreateNestedOneWithoutOpenAnswersInput
    openTask: OpenTasksCreateNestedOneWithoutUserAnswersInput
  }

  export type UserOpenAnswerUncheckedCreateInput = {
    id?: string
    userMaturaId: string
    openTaskId: string
    answer?: string | null
    screenshotUrl?: string | null
    awardedPoints?: number | null
    feedback?: string | null
    gradingJson?: string | null
    gradedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserOpenAnswerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    screenshotUrl?: NullableStringFieldUpdateOperationsInput | string | null
    awardedPoints?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    gradingJson?: NullableStringFieldUpdateOperationsInput | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userMatura?: UserMaturaUpdateOneRequiredWithoutOpenAnswersNestedInput
    openTask?: OpenTasksUpdateOneRequiredWithoutUserAnswersNestedInput
  }

  export type UserOpenAnswerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userMaturaId?: StringFieldUpdateOperationsInput | string
    openTaskId?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    screenshotUrl?: NullableStringFieldUpdateOperationsInput | string | null
    awardedPoints?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    gradingJson?: NullableStringFieldUpdateOperationsInput | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOpenAnswerCreateManyInput = {
    id?: string
    userMaturaId: string
    openTaskId: string
    answer?: string | null
    screenshotUrl?: string | null
    awardedPoints?: number | null
    feedback?: string | null
    gradingJson?: string | null
    gradedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserOpenAnswerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    screenshotUrl?: NullableStringFieldUpdateOperationsInput | string | null
    awardedPoints?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    gradingJson?: NullableStringFieldUpdateOperationsInput | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOpenAnswerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userMaturaId?: StringFieldUpdateOperationsInput | string
    openTaskId?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    screenshotUrl?: NullableStringFieldUpdateOperationsInput | string | null
    awardedPoints?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    gradingJson?: NullableStringFieldUpdateOperationsInput | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type AnswerListRelationFilter = {
    every?: AnswerWhereInput
    some?: AnswerWhereInput
    none?: AnswerWhereInput
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

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
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
    description?: SortOrder
  }

  export type VideoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VideoMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    description?: SortOrder
  }

  export type VideoMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    description?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type VideoScalarRelationFilter = {
    is?: VideoWhereInput
    isNot?: VideoWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    videoId?: SortOrder
    time?: SortOrder
    userId?: SortOrder
    isPublic?: SortOrder
    userName?: SortOrder
    lastName?: SortOrder
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
    isPublic?: SortOrder
    userName?: SortOrder
    lastName?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    videoId?: SortOrder
    time?: SortOrder
    userId?: SortOrder
    isPublic?: SortOrder
    userName?: SortOrder
    lastName?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    id?: SortOrder
    videoId?: SortOrder
    time?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type QuestionScalarRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type AnswerCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    questionId?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    lastName?: SortOrder
  }

  export type AnswerAvgOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
  }

  export type AnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    questionId?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    lastName?: SortOrder
  }

  export type AnswerMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    questionId?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    lastName?: SortOrder
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

  export type MaturaListRelationFilter = {
    every?: MaturaWhereInput
    some?: MaturaWhereInput
    none?: MaturaWhereInput
  }

  export type UserOpenAnswerListRelationFilter = {
    every?: UserOpenAnswerWhereInput
    some?: UserOpenAnswerWhereInput
    none?: UserOpenAnswerWhereInput
  }

  export type MaturaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOpenAnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OpenTasksCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    rubric?: SortOrder
    referenceAnswer?: SortOrder
    maxPoints?: SortOrder
    subSectionId?: SortOrder
    openTaskId?: SortOrder
  }

  export type OpenTasksAvgOrderByAggregateInput = {
    maxPoints?: SortOrder
  }

  export type OpenTasksMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    rubric?: SortOrder
    referenceAnswer?: SortOrder
    maxPoints?: SortOrder
    subSectionId?: SortOrder
    openTaskId?: SortOrder
  }

  export type OpenTasksMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    rubric?: SortOrder
    referenceAnswer?: SortOrder
    maxPoints?: SortOrder
    subSectionId?: SortOrder
    openTaskId?: SortOrder
  }

  export type OpenTasksSumOrderByAggregateInput = {
    maxPoints?: SortOrder
  }

  export type AnswersListRelationFilter = {
    every?: AnswersWhereInput
    some?: AnswersWhereInput
    none?: AnswersWhereInput
  }

  export type UserClosedAnswerListRelationFilter = {
    every?: UserClosedAnswerWhereInput
    some?: UserClosedAnswerWhereInput
    none?: UserClosedAnswerWhereInput
  }

  export type AnswersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserClosedAnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClosedTasksCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    correctAnswer?: SortOrder
    points?: SortOrder
    subSectionId?: SortOrder
  }

  export type ClosedTasksAvgOrderByAggregateInput = {
    points?: SortOrder
  }

  export type ClosedTasksMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    correctAnswer?: SortOrder
    points?: SortOrder
    subSectionId?: SortOrder
  }

  export type ClosedTasksMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    correctAnswer?: SortOrder
    points?: SortOrder
    subSectionId?: SortOrder
  }

  export type ClosedTasksSumOrderByAggregateInput = {
    points?: SortOrder
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

  export type MaturaCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type MaturaMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type MaturaMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type MaturaScalarRelationFilter = {
    is?: MaturaWhereInput
    isNot?: MaturaWhereInput
  }

  export type UserMaturaUserIdMaturaIdCompoundUniqueInput = {
    userId: string
    maturaId: string
  }

  export type UserMaturaCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    maturaId?: SortOrder
    status?: SortOrder
    earnedPoints?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaturaAvgOrderByAggregateInput = {
    earnedPoints?: SortOrder
  }

  export type UserMaturaMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    maturaId?: SortOrder
    status?: SortOrder
    earnedPoints?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaturaMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    maturaId?: SortOrder
    status?: SortOrder
    earnedPoints?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaturaSumOrderByAggregateInput = {
    earnedPoints?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type UserMaturaScalarRelationFilter = {
    is?: UserMaturaWhereInput
    isNot?: UserMaturaWhereInput
  }

  export type UserClosedAnswerUserMaturaIdClosedTaskIdCompoundUniqueInput = {
    userMaturaId: string
    closedTaskId: string
  }

  export type UserClosedAnswerCountOrderByAggregateInput = {
    id?: SortOrder
    userMaturaId?: SortOrder
    closedTaskId?: SortOrder
    answer?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserClosedAnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    userMaturaId?: SortOrder
    closedTaskId?: SortOrder
    answer?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserClosedAnswerMinOrderByAggregateInput = {
    id?: SortOrder
    userMaturaId?: SortOrder
    closedTaskId?: SortOrder
    answer?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type OpenTasksScalarRelationFilter = {
    is?: OpenTasksWhereInput
    isNot?: OpenTasksWhereInput
  }

  export type UserOpenAnswerUserMaturaIdOpenTaskIdCompoundUniqueInput = {
    userMaturaId: string
    openTaskId: string
  }

  export type UserOpenAnswerCountOrderByAggregateInput = {
    id?: SortOrder
    userMaturaId?: SortOrder
    openTaskId?: SortOrder
    answer?: SortOrder
    screenshotUrl?: SortOrder
    awardedPoints?: SortOrder
    feedback?: SortOrder
    gradingJson?: SortOrder
    gradedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserOpenAnswerAvgOrderByAggregateInput = {
    awardedPoints?: SortOrder
  }

  export type UserOpenAnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    userMaturaId?: SortOrder
    openTaskId?: SortOrder
    answer?: SortOrder
    screenshotUrl?: SortOrder
    awardedPoints?: SortOrder
    feedback?: SortOrder
    gradingJson?: SortOrder
    gradedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserOpenAnswerMinOrderByAggregateInput = {
    id?: SortOrder
    userMaturaId?: SortOrder
    openTaskId?: SortOrder
    answer?: SortOrder
    screenshotUrl?: SortOrder
    awardedPoints?: SortOrder
    feedback?: SortOrder
    gradingJson?: SortOrder
    gradedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserOpenAnswerSumOrderByAggregateInput = {
    awardedPoints?: SortOrder
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

  export type QuestionCreateNestedManyWithoutUserInput = {
    create?: XOR<QuestionCreateWithoutUserInput, QuestionUncheckedCreateWithoutUserInput> | QuestionCreateWithoutUserInput[] | QuestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutUserInput | QuestionCreateOrConnectWithoutUserInput[]
    createMany?: QuestionCreateManyUserInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type AnswerCreateNestedManyWithoutUserInput = {
    create?: XOR<AnswerCreateWithoutUserInput, AnswerUncheckedCreateWithoutUserInput> | AnswerCreateWithoutUserInput[] | AnswerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutUserInput | AnswerCreateOrConnectWithoutUserInput[]
    createMany?: AnswerCreateManyUserInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type UserMaturaCreateNestedManyWithoutUserInput = {
    create?: XOR<UserMaturaCreateWithoutUserInput, UserMaturaUncheckedCreateWithoutUserInput> | UserMaturaCreateWithoutUserInput[] | UserMaturaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMaturaCreateOrConnectWithoutUserInput | UserMaturaCreateOrConnectWithoutUserInput[]
    createMany?: UserMaturaCreateManyUserInputEnvelope
    connect?: UserMaturaWhereUniqueInput | UserMaturaWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<QuestionCreateWithoutUserInput, QuestionUncheckedCreateWithoutUserInput> | QuestionCreateWithoutUserInput[] | QuestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutUserInput | QuestionCreateOrConnectWithoutUserInput[]
    createMany?: QuestionCreateManyUserInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type AnswerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AnswerCreateWithoutUserInput, AnswerUncheckedCreateWithoutUserInput> | AnswerCreateWithoutUserInput[] | AnswerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutUserInput | AnswerCreateOrConnectWithoutUserInput[]
    createMany?: AnswerCreateManyUserInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
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

  export type AnswerUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnswerCreateWithoutUserInput, AnswerUncheckedCreateWithoutUserInput> | AnswerCreateWithoutUserInput[] | AnswerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutUserInput | AnswerCreateOrConnectWithoutUserInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutUserInput | AnswerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnswerCreateManyUserInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutUserInput | AnswerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutUserInput | AnswerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
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

  export type AnswerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnswerCreateWithoutUserInput, AnswerUncheckedCreateWithoutUserInput> | AnswerCreateWithoutUserInput[] | AnswerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutUserInput | AnswerCreateOrConnectWithoutUserInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutUserInput | AnswerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnswerCreateManyUserInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutUserInput | AnswerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutUserInput | AnswerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
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

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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

  export type UserCreateNestedOneWithoutAnswersInput = {
    create?: XOR<UserCreateWithoutAnswersInput, UserUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnswersInput
    connect?: UserWhereUniqueInput
  }

  export type QuestionUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    upsert?: QuestionUpsertWithoutAnswersInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutAnswersInput, QuestionUpdateWithoutAnswersInput>, QuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type UserUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<UserCreateWithoutAnswersInput, UserUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnswersInput
    upsert?: UserUpsertWithoutAnswersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAnswersInput, UserUpdateWithoutAnswersInput>, UserUncheckedUpdateWithoutAnswersInput>
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

  export type MaturaCreateNestedManyWithoutOpenTasksInput = {
    create?: XOR<MaturaCreateWithoutOpenTasksInput, MaturaUncheckedCreateWithoutOpenTasksInput> | MaturaCreateWithoutOpenTasksInput[] | MaturaUncheckedCreateWithoutOpenTasksInput[]
    connectOrCreate?: MaturaCreateOrConnectWithoutOpenTasksInput | MaturaCreateOrConnectWithoutOpenTasksInput[]
    connect?: MaturaWhereUniqueInput | MaturaWhereUniqueInput[]
  }

  export type UserOpenAnswerCreateNestedManyWithoutOpenTaskInput = {
    create?: XOR<UserOpenAnswerCreateWithoutOpenTaskInput, UserOpenAnswerUncheckedCreateWithoutOpenTaskInput> | UserOpenAnswerCreateWithoutOpenTaskInput[] | UserOpenAnswerUncheckedCreateWithoutOpenTaskInput[]
    connectOrCreate?: UserOpenAnswerCreateOrConnectWithoutOpenTaskInput | UserOpenAnswerCreateOrConnectWithoutOpenTaskInput[]
    createMany?: UserOpenAnswerCreateManyOpenTaskInputEnvelope
    connect?: UserOpenAnswerWhereUniqueInput | UserOpenAnswerWhereUniqueInput[]
  }

  export type MaturaUncheckedCreateNestedManyWithoutOpenTasksInput = {
    create?: XOR<MaturaCreateWithoutOpenTasksInput, MaturaUncheckedCreateWithoutOpenTasksInput> | MaturaCreateWithoutOpenTasksInput[] | MaturaUncheckedCreateWithoutOpenTasksInput[]
    connectOrCreate?: MaturaCreateOrConnectWithoutOpenTasksInput | MaturaCreateOrConnectWithoutOpenTasksInput[]
    connect?: MaturaWhereUniqueInput | MaturaWhereUniqueInput[]
  }

  export type UserOpenAnswerUncheckedCreateNestedManyWithoutOpenTaskInput = {
    create?: XOR<UserOpenAnswerCreateWithoutOpenTaskInput, UserOpenAnswerUncheckedCreateWithoutOpenTaskInput> | UserOpenAnswerCreateWithoutOpenTaskInput[] | UserOpenAnswerUncheckedCreateWithoutOpenTaskInput[]
    connectOrCreate?: UserOpenAnswerCreateOrConnectWithoutOpenTaskInput | UserOpenAnswerCreateOrConnectWithoutOpenTaskInput[]
    createMany?: UserOpenAnswerCreateManyOpenTaskInputEnvelope
    connect?: UserOpenAnswerWhereUniqueInput | UserOpenAnswerWhereUniqueInput[]
  }

  export type SubSectionUpdateOneRequiredWithoutOpenTasksNestedInput = {
    create?: XOR<SubSectionCreateWithoutOpenTasksInput, SubSectionUncheckedCreateWithoutOpenTasksInput>
    connectOrCreate?: SubSectionCreateOrConnectWithoutOpenTasksInput
    upsert?: SubSectionUpsertWithoutOpenTasksInput
    connect?: SubSectionWhereUniqueInput
    update?: XOR<XOR<SubSectionUpdateToOneWithWhereWithoutOpenTasksInput, SubSectionUpdateWithoutOpenTasksInput>, SubSectionUncheckedUpdateWithoutOpenTasksInput>
  }

  export type MaturaUpdateManyWithoutOpenTasksNestedInput = {
    create?: XOR<MaturaCreateWithoutOpenTasksInput, MaturaUncheckedCreateWithoutOpenTasksInput> | MaturaCreateWithoutOpenTasksInput[] | MaturaUncheckedCreateWithoutOpenTasksInput[]
    connectOrCreate?: MaturaCreateOrConnectWithoutOpenTasksInput | MaturaCreateOrConnectWithoutOpenTasksInput[]
    upsert?: MaturaUpsertWithWhereUniqueWithoutOpenTasksInput | MaturaUpsertWithWhereUniqueWithoutOpenTasksInput[]
    set?: MaturaWhereUniqueInput | MaturaWhereUniqueInput[]
    disconnect?: MaturaWhereUniqueInput | MaturaWhereUniqueInput[]
    delete?: MaturaWhereUniqueInput | MaturaWhereUniqueInput[]
    connect?: MaturaWhereUniqueInput | MaturaWhereUniqueInput[]
    update?: MaturaUpdateWithWhereUniqueWithoutOpenTasksInput | MaturaUpdateWithWhereUniqueWithoutOpenTasksInput[]
    updateMany?: MaturaUpdateManyWithWhereWithoutOpenTasksInput | MaturaUpdateManyWithWhereWithoutOpenTasksInput[]
    deleteMany?: MaturaScalarWhereInput | MaturaScalarWhereInput[]
  }

  export type UserOpenAnswerUpdateManyWithoutOpenTaskNestedInput = {
    create?: XOR<UserOpenAnswerCreateWithoutOpenTaskInput, UserOpenAnswerUncheckedCreateWithoutOpenTaskInput> | UserOpenAnswerCreateWithoutOpenTaskInput[] | UserOpenAnswerUncheckedCreateWithoutOpenTaskInput[]
    connectOrCreate?: UserOpenAnswerCreateOrConnectWithoutOpenTaskInput | UserOpenAnswerCreateOrConnectWithoutOpenTaskInput[]
    upsert?: UserOpenAnswerUpsertWithWhereUniqueWithoutOpenTaskInput | UserOpenAnswerUpsertWithWhereUniqueWithoutOpenTaskInput[]
    createMany?: UserOpenAnswerCreateManyOpenTaskInputEnvelope
    set?: UserOpenAnswerWhereUniqueInput | UserOpenAnswerWhereUniqueInput[]
    disconnect?: UserOpenAnswerWhereUniqueInput | UserOpenAnswerWhereUniqueInput[]
    delete?: UserOpenAnswerWhereUniqueInput | UserOpenAnswerWhereUniqueInput[]
    connect?: UserOpenAnswerWhereUniqueInput | UserOpenAnswerWhereUniqueInput[]
    update?: UserOpenAnswerUpdateWithWhereUniqueWithoutOpenTaskInput | UserOpenAnswerUpdateWithWhereUniqueWithoutOpenTaskInput[]
    updateMany?: UserOpenAnswerUpdateManyWithWhereWithoutOpenTaskInput | UserOpenAnswerUpdateManyWithWhereWithoutOpenTaskInput[]
    deleteMany?: UserOpenAnswerScalarWhereInput | UserOpenAnswerScalarWhereInput[]
  }

  export type MaturaUncheckedUpdateManyWithoutOpenTasksNestedInput = {
    create?: XOR<MaturaCreateWithoutOpenTasksInput, MaturaUncheckedCreateWithoutOpenTasksInput> | MaturaCreateWithoutOpenTasksInput[] | MaturaUncheckedCreateWithoutOpenTasksInput[]
    connectOrCreate?: MaturaCreateOrConnectWithoutOpenTasksInput | MaturaCreateOrConnectWithoutOpenTasksInput[]
    upsert?: MaturaUpsertWithWhereUniqueWithoutOpenTasksInput | MaturaUpsertWithWhereUniqueWithoutOpenTasksInput[]
    set?: MaturaWhereUniqueInput | MaturaWhereUniqueInput[]
    disconnect?: MaturaWhereUniqueInput | MaturaWhereUniqueInput[]
    delete?: MaturaWhereUniqueInput | MaturaWhereUniqueInput[]
    connect?: MaturaWhereUniqueInput | MaturaWhereUniqueInput[]
    update?: MaturaUpdateWithWhereUniqueWithoutOpenTasksInput | MaturaUpdateWithWhereUniqueWithoutOpenTasksInput[]
    updateMany?: MaturaUpdateManyWithWhereWithoutOpenTasksInput | MaturaUpdateManyWithWhereWithoutOpenTasksInput[]
    deleteMany?: MaturaScalarWhereInput | MaturaScalarWhereInput[]
  }

  export type UserOpenAnswerUncheckedUpdateManyWithoutOpenTaskNestedInput = {
    create?: XOR<UserOpenAnswerCreateWithoutOpenTaskInput, UserOpenAnswerUncheckedCreateWithoutOpenTaskInput> | UserOpenAnswerCreateWithoutOpenTaskInput[] | UserOpenAnswerUncheckedCreateWithoutOpenTaskInput[]
    connectOrCreate?: UserOpenAnswerCreateOrConnectWithoutOpenTaskInput | UserOpenAnswerCreateOrConnectWithoutOpenTaskInput[]
    upsert?: UserOpenAnswerUpsertWithWhereUniqueWithoutOpenTaskInput | UserOpenAnswerUpsertWithWhereUniqueWithoutOpenTaskInput[]
    createMany?: UserOpenAnswerCreateManyOpenTaskInputEnvelope
    set?: UserOpenAnswerWhereUniqueInput | UserOpenAnswerWhereUniqueInput[]
    disconnect?: UserOpenAnswerWhereUniqueInput | UserOpenAnswerWhereUniqueInput[]
    delete?: UserOpenAnswerWhereUniqueInput | UserOpenAnswerWhereUniqueInput[]
    connect?: UserOpenAnswerWhereUniqueInput | UserOpenAnswerWhereUniqueInput[]
    update?: UserOpenAnswerUpdateWithWhereUniqueWithoutOpenTaskInput | UserOpenAnswerUpdateWithWhereUniqueWithoutOpenTaskInput[]
    updateMany?: UserOpenAnswerUpdateManyWithWhereWithoutOpenTaskInput | UserOpenAnswerUpdateManyWithWhereWithoutOpenTaskInput[]
    deleteMany?: UserOpenAnswerScalarWhereInput | UserOpenAnswerScalarWhereInput[]
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

  export type MaturaCreateNestedManyWithoutClosedTasksInput = {
    create?: XOR<MaturaCreateWithoutClosedTasksInput, MaturaUncheckedCreateWithoutClosedTasksInput> | MaturaCreateWithoutClosedTasksInput[] | MaturaUncheckedCreateWithoutClosedTasksInput[]
    connectOrCreate?: MaturaCreateOrConnectWithoutClosedTasksInput | MaturaCreateOrConnectWithoutClosedTasksInput[]
    connect?: MaturaWhereUniqueInput | MaturaWhereUniqueInput[]
  }

  export type UserClosedAnswerCreateNestedManyWithoutClosedTaskInput = {
    create?: XOR<UserClosedAnswerCreateWithoutClosedTaskInput, UserClosedAnswerUncheckedCreateWithoutClosedTaskInput> | UserClosedAnswerCreateWithoutClosedTaskInput[] | UserClosedAnswerUncheckedCreateWithoutClosedTaskInput[]
    connectOrCreate?: UserClosedAnswerCreateOrConnectWithoutClosedTaskInput | UserClosedAnswerCreateOrConnectWithoutClosedTaskInput[]
    createMany?: UserClosedAnswerCreateManyClosedTaskInputEnvelope
    connect?: UserClosedAnswerWhereUniqueInput | UserClosedAnswerWhereUniqueInput[]
  }

  export type AnswersUncheckedCreateNestedManyWithoutClosedTaskInput = {
    create?: XOR<AnswersCreateWithoutClosedTaskInput, AnswersUncheckedCreateWithoutClosedTaskInput> | AnswersCreateWithoutClosedTaskInput[] | AnswersUncheckedCreateWithoutClosedTaskInput[]
    connectOrCreate?: AnswersCreateOrConnectWithoutClosedTaskInput | AnswersCreateOrConnectWithoutClosedTaskInput[]
    createMany?: AnswersCreateManyClosedTaskInputEnvelope
    connect?: AnswersWhereUniqueInput | AnswersWhereUniqueInput[]
  }

  export type MaturaUncheckedCreateNestedManyWithoutClosedTasksInput = {
    create?: XOR<MaturaCreateWithoutClosedTasksInput, MaturaUncheckedCreateWithoutClosedTasksInput> | MaturaCreateWithoutClosedTasksInput[] | MaturaUncheckedCreateWithoutClosedTasksInput[]
    connectOrCreate?: MaturaCreateOrConnectWithoutClosedTasksInput | MaturaCreateOrConnectWithoutClosedTasksInput[]
    connect?: MaturaWhereUniqueInput | MaturaWhereUniqueInput[]
  }

  export type UserClosedAnswerUncheckedCreateNestedManyWithoutClosedTaskInput = {
    create?: XOR<UserClosedAnswerCreateWithoutClosedTaskInput, UserClosedAnswerUncheckedCreateWithoutClosedTaskInput> | UserClosedAnswerCreateWithoutClosedTaskInput[] | UserClosedAnswerUncheckedCreateWithoutClosedTaskInput[]
    connectOrCreate?: UserClosedAnswerCreateOrConnectWithoutClosedTaskInput | UserClosedAnswerCreateOrConnectWithoutClosedTaskInput[]
    createMany?: UserClosedAnswerCreateManyClosedTaskInputEnvelope
    connect?: UserClosedAnswerWhereUniqueInput | UserClosedAnswerWhereUniqueInput[]
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

  export type MaturaUpdateManyWithoutClosedTasksNestedInput = {
    create?: XOR<MaturaCreateWithoutClosedTasksInput, MaturaUncheckedCreateWithoutClosedTasksInput> | MaturaCreateWithoutClosedTasksInput[] | MaturaUncheckedCreateWithoutClosedTasksInput[]
    connectOrCreate?: MaturaCreateOrConnectWithoutClosedTasksInput | MaturaCreateOrConnectWithoutClosedTasksInput[]
    upsert?: MaturaUpsertWithWhereUniqueWithoutClosedTasksInput | MaturaUpsertWithWhereUniqueWithoutClosedTasksInput[]
    set?: MaturaWhereUniqueInput | MaturaWhereUniqueInput[]
    disconnect?: MaturaWhereUniqueInput | MaturaWhereUniqueInput[]
    delete?: MaturaWhereUniqueInput | MaturaWhereUniqueInput[]
    connect?: MaturaWhereUniqueInput | MaturaWhereUniqueInput[]
    update?: MaturaUpdateWithWhereUniqueWithoutClosedTasksInput | MaturaUpdateWithWhereUniqueWithoutClosedTasksInput[]
    updateMany?: MaturaUpdateManyWithWhereWithoutClosedTasksInput | MaturaUpdateManyWithWhereWithoutClosedTasksInput[]
    deleteMany?: MaturaScalarWhereInput | MaturaScalarWhereInput[]
  }

  export type UserClosedAnswerUpdateManyWithoutClosedTaskNestedInput = {
    create?: XOR<UserClosedAnswerCreateWithoutClosedTaskInput, UserClosedAnswerUncheckedCreateWithoutClosedTaskInput> | UserClosedAnswerCreateWithoutClosedTaskInput[] | UserClosedAnswerUncheckedCreateWithoutClosedTaskInput[]
    connectOrCreate?: UserClosedAnswerCreateOrConnectWithoutClosedTaskInput | UserClosedAnswerCreateOrConnectWithoutClosedTaskInput[]
    upsert?: UserClosedAnswerUpsertWithWhereUniqueWithoutClosedTaskInput | UserClosedAnswerUpsertWithWhereUniqueWithoutClosedTaskInput[]
    createMany?: UserClosedAnswerCreateManyClosedTaskInputEnvelope
    set?: UserClosedAnswerWhereUniqueInput | UserClosedAnswerWhereUniqueInput[]
    disconnect?: UserClosedAnswerWhereUniqueInput | UserClosedAnswerWhereUniqueInput[]
    delete?: UserClosedAnswerWhereUniqueInput | UserClosedAnswerWhereUniqueInput[]
    connect?: UserClosedAnswerWhereUniqueInput | UserClosedAnswerWhereUniqueInput[]
    update?: UserClosedAnswerUpdateWithWhereUniqueWithoutClosedTaskInput | UserClosedAnswerUpdateWithWhereUniqueWithoutClosedTaskInput[]
    updateMany?: UserClosedAnswerUpdateManyWithWhereWithoutClosedTaskInput | UserClosedAnswerUpdateManyWithWhereWithoutClosedTaskInput[]
    deleteMany?: UserClosedAnswerScalarWhereInput | UserClosedAnswerScalarWhereInput[]
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

  export type MaturaUncheckedUpdateManyWithoutClosedTasksNestedInput = {
    create?: XOR<MaturaCreateWithoutClosedTasksInput, MaturaUncheckedCreateWithoutClosedTasksInput> | MaturaCreateWithoutClosedTasksInput[] | MaturaUncheckedCreateWithoutClosedTasksInput[]
    connectOrCreate?: MaturaCreateOrConnectWithoutClosedTasksInput | MaturaCreateOrConnectWithoutClosedTasksInput[]
    upsert?: MaturaUpsertWithWhereUniqueWithoutClosedTasksInput | MaturaUpsertWithWhereUniqueWithoutClosedTasksInput[]
    set?: MaturaWhereUniqueInput | MaturaWhereUniqueInput[]
    disconnect?: MaturaWhereUniqueInput | MaturaWhereUniqueInput[]
    delete?: MaturaWhereUniqueInput | MaturaWhereUniqueInput[]
    connect?: MaturaWhereUniqueInput | MaturaWhereUniqueInput[]
    update?: MaturaUpdateWithWhereUniqueWithoutClosedTasksInput | MaturaUpdateWithWhereUniqueWithoutClosedTasksInput[]
    updateMany?: MaturaUpdateManyWithWhereWithoutClosedTasksInput | MaturaUpdateManyWithWhereWithoutClosedTasksInput[]
    deleteMany?: MaturaScalarWhereInput | MaturaScalarWhereInput[]
  }

  export type UserClosedAnswerUncheckedUpdateManyWithoutClosedTaskNestedInput = {
    create?: XOR<UserClosedAnswerCreateWithoutClosedTaskInput, UserClosedAnswerUncheckedCreateWithoutClosedTaskInput> | UserClosedAnswerCreateWithoutClosedTaskInput[] | UserClosedAnswerUncheckedCreateWithoutClosedTaskInput[]
    connectOrCreate?: UserClosedAnswerCreateOrConnectWithoutClosedTaskInput | UserClosedAnswerCreateOrConnectWithoutClosedTaskInput[]
    upsert?: UserClosedAnswerUpsertWithWhereUniqueWithoutClosedTaskInput | UserClosedAnswerUpsertWithWhereUniqueWithoutClosedTaskInput[]
    createMany?: UserClosedAnswerCreateManyClosedTaskInputEnvelope
    set?: UserClosedAnswerWhereUniqueInput | UserClosedAnswerWhereUniqueInput[]
    disconnect?: UserClosedAnswerWhereUniqueInput | UserClosedAnswerWhereUniqueInput[]
    delete?: UserClosedAnswerWhereUniqueInput | UserClosedAnswerWhereUniqueInput[]
    connect?: UserClosedAnswerWhereUniqueInput | UserClosedAnswerWhereUniqueInput[]
    update?: UserClosedAnswerUpdateWithWhereUniqueWithoutClosedTaskInput | UserClosedAnswerUpdateWithWhereUniqueWithoutClosedTaskInput[]
    updateMany?: UserClosedAnswerUpdateManyWithWhereWithoutClosedTaskInput | UserClosedAnswerUpdateManyWithWhereWithoutClosedTaskInput[]
    deleteMany?: UserClosedAnswerScalarWhereInput | UserClosedAnswerScalarWhereInput[]
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

  export type ClosedTasksCreateNestedManyWithoutMaturasInput = {
    create?: XOR<ClosedTasksCreateWithoutMaturasInput, ClosedTasksUncheckedCreateWithoutMaturasInput> | ClosedTasksCreateWithoutMaturasInput[] | ClosedTasksUncheckedCreateWithoutMaturasInput[]
    connectOrCreate?: ClosedTasksCreateOrConnectWithoutMaturasInput | ClosedTasksCreateOrConnectWithoutMaturasInput[]
    connect?: ClosedTasksWhereUniqueInput | ClosedTasksWhereUniqueInput[]
  }

  export type OpenTasksCreateNestedManyWithoutMaturasInput = {
    create?: XOR<OpenTasksCreateWithoutMaturasInput, OpenTasksUncheckedCreateWithoutMaturasInput> | OpenTasksCreateWithoutMaturasInput[] | OpenTasksUncheckedCreateWithoutMaturasInput[]
    connectOrCreate?: OpenTasksCreateOrConnectWithoutMaturasInput | OpenTasksCreateOrConnectWithoutMaturasInput[]
    connect?: OpenTasksWhereUniqueInput | OpenTasksWhereUniqueInput[]
  }

  export type UserMaturaCreateNestedManyWithoutMaturaInput = {
    create?: XOR<UserMaturaCreateWithoutMaturaInput, UserMaturaUncheckedCreateWithoutMaturaInput> | UserMaturaCreateWithoutMaturaInput[] | UserMaturaUncheckedCreateWithoutMaturaInput[]
    connectOrCreate?: UserMaturaCreateOrConnectWithoutMaturaInput | UserMaturaCreateOrConnectWithoutMaturaInput[]
    createMany?: UserMaturaCreateManyMaturaInputEnvelope
    connect?: UserMaturaWhereUniqueInput | UserMaturaWhereUniqueInput[]
  }

  export type ClosedTasksUncheckedCreateNestedManyWithoutMaturasInput = {
    create?: XOR<ClosedTasksCreateWithoutMaturasInput, ClosedTasksUncheckedCreateWithoutMaturasInput> | ClosedTasksCreateWithoutMaturasInput[] | ClosedTasksUncheckedCreateWithoutMaturasInput[]
    connectOrCreate?: ClosedTasksCreateOrConnectWithoutMaturasInput | ClosedTasksCreateOrConnectWithoutMaturasInput[]
    connect?: ClosedTasksWhereUniqueInput | ClosedTasksWhereUniqueInput[]
  }

  export type OpenTasksUncheckedCreateNestedManyWithoutMaturasInput = {
    create?: XOR<OpenTasksCreateWithoutMaturasInput, OpenTasksUncheckedCreateWithoutMaturasInput> | OpenTasksCreateWithoutMaturasInput[] | OpenTasksUncheckedCreateWithoutMaturasInput[]
    connectOrCreate?: OpenTasksCreateOrConnectWithoutMaturasInput | OpenTasksCreateOrConnectWithoutMaturasInput[]
    connect?: OpenTasksWhereUniqueInput | OpenTasksWhereUniqueInput[]
  }

  export type UserMaturaUncheckedCreateNestedManyWithoutMaturaInput = {
    create?: XOR<UserMaturaCreateWithoutMaturaInput, UserMaturaUncheckedCreateWithoutMaturaInput> | UserMaturaCreateWithoutMaturaInput[] | UserMaturaUncheckedCreateWithoutMaturaInput[]
    connectOrCreate?: UserMaturaCreateOrConnectWithoutMaturaInput | UserMaturaCreateOrConnectWithoutMaturaInput[]
    createMany?: UserMaturaCreateManyMaturaInputEnvelope
    connect?: UserMaturaWhereUniqueInput | UserMaturaWhereUniqueInput[]
  }

  export type ClosedTasksUpdateManyWithoutMaturasNestedInput = {
    create?: XOR<ClosedTasksCreateWithoutMaturasInput, ClosedTasksUncheckedCreateWithoutMaturasInput> | ClosedTasksCreateWithoutMaturasInput[] | ClosedTasksUncheckedCreateWithoutMaturasInput[]
    connectOrCreate?: ClosedTasksCreateOrConnectWithoutMaturasInput | ClosedTasksCreateOrConnectWithoutMaturasInput[]
    upsert?: ClosedTasksUpsertWithWhereUniqueWithoutMaturasInput | ClosedTasksUpsertWithWhereUniqueWithoutMaturasInput[]
    set?: ClosedTasksWhereUniqueInput | ClosedTasksWhereUniqueInput[]
    disconnect?: ClosedTasksWhereUniqueInput | ClosedTasksWhereUniqueInput[]
    delete?: ClosedTasksWhereUniqueInput | ClosedTasksWhereUniqueInput[]
    connect?: ClosedTasksWhereUniqueInput | ClosedTasksWhereUniqueInput[]
    update?: ClosedTasksUpdateWithWhereUniqueWithoutMaturasInput | ClosedTasksUpdateWithWhereUniqueWithoutMaturasInput[]
    updateMany?: ClosedTasksUpdateManyWithWhereWithoutMaturasInput | ClosedTasksUpdateManyWithWhereWithoutMaturasInput[]
    deleteMany?: ClosedTasksScalarWhereInput | ClosedTasksScalarWhereInput[]
  }

  export type OpenTasksUpdateManyWithoutMaturasNestedInput = {
    create?: XOR<OpenTasksCreateWithoutMaturasInput, OpenTasksUncheckedCreateWithoutMaturasInput> | OpenTasksCreateWithoutMaturasInput[] | OpenTasksUncheckedCreateWithoutMaturasInput[]
    connectOrCreate?: OpenTasksCreateOrConnectWithoutMaturasInput | OpenTasksCreateOrConnectWithoutMaturasInput[]
    upsert?: OpenTasksUpsertWithWhereUniqueWithoutMaturasInput | OpenTasksUpsertWithWhereUniqueWithoutMaturasInput[]
    set?: OpenTasksWhereUniqueInput | OpenTasksWhereUniqueInput[]
    disconnect?: OpenTasksWhereUniqueInput | OpenTasksWhereUniqueInput[]
    delete?: OpenTasksWhereUniqueInput | OpenTasksWhereUniqueInput[]
    connect?: OpenTasksWhereUniqueInput | OpenTasksWhereUniqueInput[]
    update?: OpenTasksUpdateWithWhereUniqueWithoutMaturasInput | OpenTasksUpdateWithWhereUniqueWithoutMaturasInput[]
    updateMany?: OpenTasksUpdateManyWithWhereWithoutMaturasInput | OpenTasksUpdateManyWithWhereWithoutMaturasInput[]
    deleteMany?: OpenTasksScalarWhereInput | OpenTasksScalarWhereInput[]
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

  export type ClosedTasksUncheckedUpdateManyWithoutMaturasNestedInput = {
    create?: XOR<ClosedTasksCreateWithoutMaturasInput, ClosedTasksUncheckedCreateWithoutMaturasInput> | ClosedTasksCreateWithoutMaturasInput[] | ClosedTasksUncheckedCreateWithoutMaturasInput[]
    connectOrCreate?: ClosedTasksCreateOrConnectWithoutMaturasInput | ClosedTasksCreateOrConnectWithoutMaturasInput[]
    upsert?: ClosedTasksUpsertWithWhereUniqueWithoutMaturasInput | ClosedTasksUpsertWithWhereUniqueWithoutMaturasInput[]
    set?: ClosedTasksWhereUniqueInput | ClosedTasksWhereUniqueInput[]
    disconnect?: ClosedTasksWhereUniqueInput | ClosedTasksWhereUniqueInput[]
    delete?: ClosedTasksWhereUniqueInput | ClosedTasksWhereUniqueInput[]
    connect?: ClosedTasksWhereUniqueInput | ClosedTasksWhereUniqueInput[]
    update?: ClosedTasksUpdateWithWhereUniqueWithoutMaturasInput | ClosedTasksUpdateWithWhereUniqueWithoutMaturasInput[]
    updateMany?: ClosedTasksUpdateManyWithWhereWithoutMaturasInput | ClosedTasksUpdateManyWithWhereWithoutMaturasInput[]
    deleteMany?: ClosedTasksScalarWhereInput | ClosedTasksScalarWhereInput[]
  }

  export type OpenTasksUncheckedUpdateManyWithoutMaturasNestedInput = {
    create?: XOR<OpenTasksCreateWithoutMaturasInput, OpenTasksUncheckedCreateWithoutMaturasInput> | OpenTasksCreateWithoutMaturasInput[] | OpenTasksUncheckedCreateWithoutMaturasInput[]
    connectOrCreate?: OpenTasksCreateOrConnectWithoutMaturasInput | OpenTasksCreateOrConnectWithoutMaturasInput[]
    upsert?: OpenTasksUpsertWithWhereUniqueWithoutMaturasInput | OpenTasksUpsertWithWhereUniqueWithoutMaturasInput[]
    set?: OpenTasksWhereUniqueInput | OpenTasksWhereUniqueInput[]
    disconnect?: OpenTasksWhereUniqueInput | OpenTasksWhereUniqueInput[]
    delete?: OpenTasksWhereUniqueInput | OpenTasksWhereUniqueInput[]
    connect?: OpenTasksWhereUniqueInput | OpenTasksWhereUniqueInput[]
    update?: OpenTasksUpdateWithWhereUniqueWithoutMaturasInput | OpenTasksUpdateWithWhereUniqueWithoutMaturasInput[]
    updateMany?: OpenTasksUpdateManyWithWhereWithoutMaturasInput | OpenTasksUpdateManyWithWhereWithoutMaturasInput[]
    deleteMany?: OpenTasksScalarWhereInput | OpenTasksScalarWhereInput[]
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

  export type UserClosedAnswerCreateNestedManyWithoutUserMaturaInput = {
    create?: XOR<UserClosedAnswerCreateWithoutUserMaturaInput, UserClosedAnswerUncheckedCreateWithoutUserMaturaInput> | UserClosedAnswerCreateWithoutUserMaturaInput[] | UserClosedAnswerUncheckedCreateWithoutUserMaturaInput[]
    connectOrCreate?: UserClosedAnswerCreateOrConnectWithoutUserMaturaInput | UserClosedAnswerCreateOrConnectWithoutUserMaturaInput[]
    createMany?: UserClosedAnswerCreateManyUserMaturaInputEnvelope
    connect?: UserClosedAnswerWhereUniqueInput | UserClosedAnswerWhereUniqueInput[]
  }

  export type UserOpenAnswerCreateNestedManyWithoutUserMaturaInput = {
    create?: XOR<UserOpenAnswerCreateWithoutUserMaturaInput, UserOpenAnswerUncheckedCreateWithoutUserMaturaInput> | UserOpenAnswerCreateWithoutUserMaturaInput[] | UserOpenAnswerUncheckedCreateWithoutUserMaturaInput[]
    connectOrCreate?: UserOpenAnswerCreateOrConnectWithoutUserMaturaInput | UserOpenAnswerCreateOrConnectWithoutUserMaturaInput[]
    createMany?: UserOpenAnswerCreateManyUserMaturaInputEnvelope
    connect?: UserOpenAnswerWhereUniqueInput | UserOpenAnswerWhereUniqueInput[]
  }

  export type UserClosedAnswerUncheckedCreateNestedManyWithoutUserMaturaInput = {
    create?: XOR<UserClosedAnswerCreateWithoutUserMaturaInput, UserClosedAnswerUncheckedCreateWithoutUserMaturaInput> | UserClosedAnswerCreateWithoutUserMaturaInput[] | UserClosedAnswerUncheckedCreateWithoutUserMaturaInput[]
    connectOrCreate?: UserClosedAnswerCreateOrConnectWithoutUserMaturaInput | UserClosedAnswerCreateOrConnectWithoutUserMaturaInput[]
    createMany?: UserClosedAnswerCreateManyUserMaturaInputEnvelope
    connect?: UserClosedAnswerWhereUniqueInput | UserClosedAnswerWhereUniqueInput[]
  }

  export type UserOpenAnswerUncheckedCreateNestedManyWithoutUserMaturaInput = {
    create?: XOR<UserOpenAnswerCreateWithoutUserMaturaInput, UserOpenAnswerUncheckedCreateWithoutUserMaturaInput> | UserOpenAnswerCreateWithoutUserMaturaInput[] | UserOpenAnswerUncheckedCreateWithoutUserMaturaInput[]
    connectOrCreate?: UserOpenAnswerCreateOrConnectWithoutUserMaturaInput | UserOpenAnswerCreateOrConnectWithoutUserMaturaInput[]
    createMany?: UserOpenAnswerCreateManyUserMaturaInputEnvelope
    connect?: UserOpenAnswerWhereUniqueInput | UserOpenAnswerWhereUniqueInput[]
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

  export type UserClosedAnswerUpdateManyWithoutUserMaturaNestedInput = {
    create?: XOR<UserClosedAnswerCreateWithoutUserMaturaInput, UserClosedAnswerUncheckedCreateWithoutUserMaturaInput> | UserClosedAnswerCreateWithoutUserMaturaInput[] | UserClosedAnswerUncheckedCreateWithoutUserMaturaInput[]
    connectOrCreate?: UserClosedAnswerCreateOrConnectWithoutUserMaturaInput | UserClosedAnswerCreateOrConnectWithoutUserMaturaInput[]
    upsert?: UserClosedAnswerUpsertWithWhereUniqueWithoutUserMaturaInput | UserClosedAnswerUpsertWithWhereUniqueWithoutUserMaturaInput[]
    createMany?: UserClosedAnswerCreateManyUserMaturaInputEnvelope
    set?: UserClosedAnswerWhereUniqueInput | UserClosedAnswerWhereUniqueInput[]
    disconnect?: UserClosedAnswerWhereUniqueInput | UserClosedAnswerWhereUniqueInput[]
    delete?: UserClosedAnswerWhereUniqueInput | UserClosedAnswerWhereUniqueInput[]
    connect?: UserClosedAnswerWhereUniqueInput | UserClosedAnswerWhereUniqueInput[]
    update?: UserClosedAnswerUpdateWithWhereUniqueWithoutUserMaturaInput | UserClosedAnswerUpdateWithWhereUniqueWithoutUserMaturaInput[]
    updateMany?: UserClosedAnswerUpdateManyWithWhereWithoutUserMaturaInput | UserClosedAnswerUpdateManyWithWhereWithoutUserMaturaInput[]
    deleteMany?: UserClosedAnswerScalarWhereInput | UserClosedAnswerScalarWhereInput[]
  }

  export type UserOpenAnswerUpdateManyWithoutUserMaturaNestedInput = {
    create?: XOR<UserOpenAnswerCreateWithoutUserMaturaInput, UserOpenAnswerUncheckedCreateWithoutUserMaturaInput> | UserOpenAnswerCreateWithoutUserMaturaInput[] | UserOpenAnswerUncheckedCreateWithoutUserMaturaInput[]
    connectOrCreate?: UserOpenAnswerCreateOrConnectWithoutUserMaturaInput | UserOpenAnswerCreateOrConnectWithoutUserMaturaInput[]
    upsert?: UserOpenAnswerUpsertWithWhereUniqueWithoutUserMaturaInput | UserOpenAnswerUpsertWithWhereUniqueWithoutUserMaturaInput[]
    createMany?: UserOpenAnswerCreateManyUserMaturaInputEnvelope
    set?: UserOpenAnswerWhereUniqueInput | UserOpenAnswerWhereUniqueInput[]
    disconnect?: UserOpenAnswerWhereUniqueInput | UserOpenAnswerWhereUniqueInput[]
    delete?: UserOpenAnswerWhereUniqueInput | UserOpenAnswerWhereUniqueInput[]
    connect?: UserOpenAnswerWhereUniqueInput | UserOpenAnswerWhereUniqueInput[]
    update?: UserOpenAnswerUpdateWithWhereUniqueWithoutUserMaturaInput | UserOpenAnswerUpdateWithWhereUniqueWithoutUserMaturaInput[]
    updateMany?: UserOpenAnswerUpdateManyWithWhereWithoutUserMaturaInput | UserOpenAnswerUpdateManyWithWhereWithoutUserMaturaInput[]
    deleteMany?: UserOpenAnswerScalarWhereInput | UserOpenAnswerScalarWhereInput[]
  }

  export type UserClosedAnswerUncheckedUpdateManyWithoutUserMaturaNestedInput = {
    create?: XOR<UserClosedAnswerCreateWithoutUserMaturaInput, UserClosedAnswerUncheckedCreateWithoutUserMaturaInput> | UserClosedAnswerCreateWithoutUserMaturaInput[] | UserClosedAnswerUncheckedCreateWithoutUserMaturaInput[]
    connectOrCreate?: UserClosedAnswerCreateOrConnectWithoutUserMaturaInput | UserClosedAnswerCreateOrConnectWithoutUserMaturaInput[]
    upsert?: UserClosedAnswerUpsertWithWhereUniqueWithoutUserMaturaInput | UserClosedAnswerUpsertWithWhereUniqueWithoutUserMaturaInput[]
    createMany?: UserClosedAnswerCreateManyUserMaturaInputEnvelope
    set?: UserClosedAnswerWhereUniqueInput | UserClosedAnswerWhereUniqueInput[]
    disconnect?: UserClosedAnswerWhereUniqueInput | UserClosedAnswerWhereUniqueInput[]
    delete?: UserClosedAnswerWhereUniqueInput | UserClosedAnswerWhereUniqueInput[]
    connect?: UserClosedAnswerWhereUniqueInput | UserClosedAnswerWhereUniqueInput[]
    update?: UserClosedAnswerUpdateWithWhereUniqueWithoutUserMaturaInput | UserClosedAnswerUpdateWithWhereUniqueWithoutUserMaturaInput[]
    updateMany?: UserClosedAnswerUpdateManyWithWhereWithoutUserMaturaInput | UserClosedAnswerUpdateManyWithWhereWithoutUserMaturaInput[]
    deleteMany?: UserClosedAnswerScalarWhereInput | UserClosedAnswerScalarWhereInput[]
  }

  export type UserOpenAnswerUncheckedUpdateManyWithoutUserMaturaNestedInput = {
    create?: XOR<UserOpenAnswerCreateWithoutUserMaturaInput, UserOpenAnswerUncheckedCreateWithoutUserMaturaInput> | UserOpenAnswerCreateWithoutUserMaturaInput[] | UserOpenAnswerUncheckedCreateWithoutUserMaturaInput[]
    connectOrCreate?: UserOpenAnswerCreateOrConnectWithoutUserMaturaInput | UserOpenAnswerCreateOrConnectWithoutUserMaturaInput[]
    upsert?: UserOpenAnswerUpsertWithWhereUniqueWithoutUserMaturaInput | UserOpenAnswerUpsertWithWhereUniqueWithoutUserMaturaInput[]
    createMany?: UserOpenAnswerCreateManyUserMaturaInputEnvelope
    set?: UserOpenAnswerWhereUniqueInput | UserOpenAnswerWhereUniqueInput[]
    disconnect?: UserOpenAnswerWhereUniqueInput | UserOpenAnswerWhereUniqueInput[]
    delete?: UserOpenAnswerWhereUniqueInput | UserOpenAnswerWhereUniqueInput[]
    connect?: UserOpenAnswerWhereUniqueInput | UserOpenAnswerWhereUniqueInput[]
    update?: UserOpenAnswerUpdateWithWhereUniqueWithoutUserMaturaInput | UserOpenAnswerUpdateWithWhereUniqueWithoutUserMaturaInput[]
    updateMany?: UserOpenAnswerUpdateManyWithWhereWithoutUserMaturaInput | UserOpenAnswerUpdateManyWithWhereWithoutUserMaturaInput[]
    deleteMany?: UserOpenAnswerScalarWhereInput | UserOpenAnswerScalarWhereInput[]
  }

  export type UserMaturaCreateNestedOneWithoutClosedAnswersInput = {
    create?: XOR<UserMaturaCreateWithoutClosedAnswersInput, UserMaturaUncheckedCreateWithoutClosedAnswersInput>
    connectOrCreate?: UserMaturaCreateOrConnectWithoutClosedAnswersInput
    connect?: UserMaturaWhereUniqueInput
  }

  export type ClosedTasksCreateNestedOneWithoutUserAnswersInput = {
    create?: XOR<ClosedTasksCreateWithoutUserAnswersInput, ClosedTasksUncheckedCreateWithoutUserAnswersInput>
    connectOrCreate?: ClosedTasksCreateOrConnectWithoutUserAnswersInput
    connect?: ClosedTasksWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type UserMaturaUpdateOneRequiredWithoutClosedAnswersNestedInput = {
    create?: XOR<UserMaturaCreateWithoutClosedAnswersInput, UserMaturaUncheckedCreateWithoutClosedAnswersInput>
    connectOrCreate?: UserMaturaCreateOrConnectWithoutClosedAnswersInput
    upsert?: UserMaturaUpsertWithoutClosedAnswersInput
    connect?: UserMaturaWhereUniqueInput
    update?: XOR<XOR<UserMaturaUpdateToOneWithWhereWithoutClosedAnswersInput, UserMaturaUpdateWithoutClosedAnswersInput>, UserMaturaUncheckedUpdateWithoutClosedAnswersInput>
  }

  export type ClosedTasksUpdateOneRequiredWithoutUserAnswersNestedInput = {
    create?: XOR<ClosedTasksCreateWithoutUserAnswersInput, ClosedTasksUncheckedCreateWithoutUserAnswersInput>
    connectOrCreate?: ClosedTasksCreateOrConnectWithoutUserAnswersInput
    upsert?: ClosedTasksUpsertWithoutUserAnswersInput
    connect?: ClosedTasksWhereUniqueInput
    update?: XOR<XOR<ClosedTasksUpdateToOneWithWhereWithoutUserAnswersInput, ClosedTasksUpdateWithoutUserAnswersInput>, ClosedTasksUncheckedUpdateWithoutUserAnswersInput>
  }

  export type UserMaturaCreateNestedOneWithoutOpenAnswersInput = {
    create?: XOR<UserMaturaCreateWithoutOpenAnswersInput, UserMaturaUncheckedCreateWithoutOpenAnswersInput>
    connectOrCreate?: UserMaturaCreateOrConnectWithoutOpenAnswersInput
    connect?: UserMaturaWhereUniqueInput
  }

  export type OpenTasksCreateNestedOneWithoutUserAnswersInput = {
    create?: XOR<OpenTasksCreateWithoutUserAnswersInput, OpenTasksUncheckedCreateWithoutUserAnswersInput>
    connectOrCreate?: OpenTasksCreateOrConnectWithoutUserAnswersInput
    connect?: OpenTasksWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserMaturaUpdateOneRequiredWithoutOpenAnswersNestedInput = {
    create?: XOR<UserMaturaCreateWithoutOpenAnswersInput, UserMaturaUncheckedCreateWithoutOpenAnswersInput>
    connectOrCreate?: UserMaturaCreateOrConnectWithoutOpenAnswersInput
    upsert?: UserMaturaUpsertWithoutOpenAnswersInput
    connect?: UserMaturaWhereUniqueInput
    update?: XOR<XOR<UserMaturaUpdateToOneWithWhereWithoutOpenAnswersInput, UserMaturaUpdateWithoutOpenAnswersInput>, UserMaturaUncheckedUpdateWithoutOpenAnswersInput>
  }

  export type OpenTasksUpdateOneRequiredWithoutUserAnswersNestedInput = {
    create?: XOR<OpenTasksCreateWithoutUserAnswersInput, OpenTasksUncheckedCreateWithoutUserAnswersInput>
    connectOrCreate?: OpenTasksCreateOrConnectWithoutUserAnswersInput
    upsert?: OpenTasksUpsertWithoutUserAnswersInput
    connect?: OpenTasksWhereUniqueInput
    update?: XOR<XOR<OpenTasksUpdateToOneWithWhereWithoutUserAnswersInput, OpenTasksUpdateWithoutUserAnswersInput>, OpenTasksUncheckedUpdateWithoutUserAnswersInput>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type QuestionCreateWithoutUserInput = {
    title: string
    text: string
    time: number
    isPublic?: boolean
    userName: string
    lastName: string
    answers?: AnswerCreateNestedManyWithoutQuestionInput
    video: VideoCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    text: string
    videoId: number
    time: number
    isPublic?: boolean
    userName: string
    lastName: string
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutUserInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutUserInput, QuestionUncheckedCreateWithoutUserInput>
  }

  export type QuestionCreateManyUserInputEnvelope = {
    data: QuestionCreateManyUserInput | QuestionCreateManyUserInput[]
  }

  export type AnswerCreateWithoutUserInput = {
    text: string
    userName: string
    lastName: string
    question: QuestionCreateNestedOneWithoutAnswersInput
  }

  export type AnswerUncheckedCreateWithoutUserInput = {
    id?: number
    text: string
    questionId: number
    userName: string
    lastName: string
  }

  export type AnswerCreateOrConnectWithoutUserInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutUserInput, AnswerUncheckedCreateWithoutUserInput>
  }

  export type AnswerCreateManyUserInputEnvelope = {
    data: AnswerCreateManyUserInput | AnswerCreateManyUserInput[]
  }

  export type UserMaturaCreateWithoutUserInput = {
    id?: string
    status?: boolean
    earnedPoints?: number
    createdAt?: Date | string
    matura: MaturaCreateNestedOneWithoutUserMaturasInput
    closedAnswers?: UserClosedAnswerCreateNestedManyWithoutUserMaturaInput
    openAnswers?: UserOpenAnswerCreateNestedManyWithoutUserMaturaInput
  }

  export type UserMaturaUncheckedCreateWithoutUserInput = {
    id?: string
    maturaId: string
    status?: boolean
    earnedPoints?: number
    createdAt?: Date | string
    closedAnswers?: UserClosedAnswerUncheckedCreateNestedManyWithoutUserMaturaInput
    openAnswers?: UserOpenAnswerUncheckedCreateNestedManyWithoutUserMaturaInput
  }

  export type UserMaturaCreateOrConnectWithoutUserInput = {
    where: UserMaturaWhereUniqueInput
    create: XOR<UserMaturaCreateWithoutUserInput, UserMaturaUncheckedCreateWithoutUserInput>
  }

  export type UserMaturaCreateManyUserInputEnvelope = {
    data: UserMaturaCreateManyUserInput | UserMaturaCreateManyUserInput[]
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
    isPublic?: BoolFilter<"Question"> | boolean
    userName?: StringFilter<"Question"> | string
    lastName?: StringFilter<"Question"> | string
  }

  export type AnswerUpsertWithWhereUniqueWithoutUserInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutUserInput, AnswerUncheckedUpdateWithoutUserInput>
    create: XOR<AnswerCreateWithoutUserInput, AnswerUncheckedCreateWithoutUserInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutUserInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutUserInput, AnswerUncheckedUpdateWithoutUserInput>
  }

  export type AnswerUpdateManyWithWhereWithoutUserInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutUserInput>
  }

  export type AnswerScalarWhereInput = {
    AND?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    OR?: AnswerScalarWhereInput[]
    NOT?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    id?: IntFilter<"Answer"> | number
    text?: StringFilter<"Answer"> | string
    questionId?: IntFilter<"Answer"> | number
    userId?: StringFilter<"Answer"> | string
    userName?: StringFilter<"Answer"> | string
    lastName?: StringFilter<"Answer"> | string
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
    status?: BoolFilter<"UserMatura"> | boolean
    earnedPoints?: IntFilter<"UserMatura"> | number
    createdAt?: DateTimeFilter<"UserMatura"> | Date | string
  }

  export type QuestionCreateWithoutVideoInput = {
    title: string
    text: string
    time: number
    isPublic?: boolean
    userName: string
    lastName: string
    answers?: AnswerCreateNestedManyWithoutQuestionInput
    user: UserCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionUncheckedCreateWithoutVideoInput = {
    id?: number
    title: string
    text: string
    time: number
    userId: string
    isPublic?: boolean
    userName: string
    lastName: string
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
    userName: string
    lastName: string
    user: UserCreateNestedOneWithoutAnswersInput
  }

  export type AnswerUncheckedCreateWithoutQuestionInput = {
    id?: number
    text: string
    userId: string
    userName: string
    lastName: string
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
    description?: string | null
  }

  export type VideoUncheckedCreateWithoutQuestionsInput = {
    id?: number
    url: string
    description?: string | null
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
    answers?: AnswerCreateNestedManyWithoutUserInput
    userMaturas?: UserMaturaCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutQuestionsInput = {
    id?: string
    clerkId: string
    firstName?: string | null
    lastName?: string | null
    email: string
    createDate?: Date | string
    updateDate?: Date | string
    answers?: AnswerUncheckedCreateNestedManyWithoutUserInput
    userMaturas?: UserMaturaUncheckedCreateNestedManyWithoutUserInput
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
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VideoUncheckedUpdateWithoutQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
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
    answers?: AnswerUpdateManyWithoutUserNestedInput
    userMaturas?: UserMaturaUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AnswerUncheckedUpdateManyWithoutUserNestedInput
    userMaturas?: UserMaturaUncheckedUpdateManyWithoutUserNestedInput
  }

  export type QuestionCreateWithoutAnswersInput = {
    title: string
    text: string
    time: number
    isPublic?: boolean
    userName: string
    lastName: string
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
    isPublic?: boolean
    userName: string
    lastName: string
  }

  export type QuestionCreateOrConnectWithoutAnswersInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
  }

  export type UserCreateWithoutAnswersInput = {
    id?: string
    clerkId: string
    firstName?: string | null
    lastName?: string | null
    email: string
    createDate?: Date | string
    updateDate?: Date | string
    questions?: QuestionCreateNestedManyWithoutUserInput
    userMaturas?: UserMaturaCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAnswersInput = {
    id?: string
    clerkId: string
    firstName?: string | null
    lastName?: string | null
    email: string
    createDate?: Date | string
    updateDate?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutUserInput
    userMaturas?: UserMaturaUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAnswersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnswersInput, UserUncheckedCreateWithoutAnswersInput>
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
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    userName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
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
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    userName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutAnswersInput = {
    update: XOR<UserUpdateWithoutAnswersInput, UserUncheckedUpdateWithoutAnswersInput>
    create: XOR<UserCreateWithoutAnswersInput, UserUncheckedCreateWithoutAnswersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAnswersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAnswersInput, UserUncheckedUpdateWithoutAnswersInput>
  }

  export type UserUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutUserNestedInput
    userMaturas?: UserMaturaUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutUserNestedInput
    userMaturas?: UserMaturaUncheckedUpdateManyWithoutUserNestedInput
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
    rubric: string
    referenceAnswer?: string | null
    maxPoints?: number
    openTaskId?: string | null
    maturas?: MaturaCreateNestedManyWithoutOpenTasksInput
    userAnswers?: UserOpenAnswerCreateNestedManyWithoutOpenTaskInput
  }

  export type OpenTasksUncheckedCreateWithoutSubSectionInput = {
    id?: string
    name: string
    content: string
    rubric: string
    referenceAnswer?: string | null
    maxPoints?: number
    openTaskId?: string | null
    maturas?: MaturaUncheckedCreateNestedManyWithoutOpenTasksInput
    userAnswers?: UserOpenAnswerUncheckedCreateNestedManyWithoutOpenTaskInput
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
    points?: number
    answers?: AnswersCreateNestedManyWithoutClosedTaskInput
    maturas?: MaturaCreateNestedManyWithoutClosedTasksInput
    userAnswers?: UserClosedAnswerCreateNestedManyWithoutClosedTaskInput
  }

  export type ClosedTasksUncheckedCreateWithoutSubSectionInput = {
    id?: string
    name: string
    content: string
    correctAnswer: string
    points?: number
    answers?: AnswersUncheckedCreateNestedManyWithoutClosedTaskInput
    maturas?: MaturaUncheckedCreateNestedManyWithoutClosedTasksInput
    userAnswers?: UserClosedAnswerUncheckedCreateNestedManyWithoutClosedTaskInput
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
    rubric?: StringFilter<"OpenTasks"> | string
    referenceAnswer?: StringNullableFilter<"OpenTasks"> | string | null
    maxPoints?: IntFilter<"OpenTasks"> | number
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
    points?: IntFilter<"ClosedTasks"> | number
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

  export type MaturaCreateWithoutOpenTasksInput = {
    id?: string
    name: string
    createdAt?: Date | string
    closedTasks?: ClosedTasksCreateNestedManyWithoutMaturasInput
    userMaturas?: UserMaturaCreateNestedManyWithoutMaturaInput
  }

  export type MaturaUncheckedCreateWithoutOpenTasksInput = {
    id?: string
    name: string
    createdAt?: Date | string
    closedTasks?: ClosedTasksUncheckedCreateNestedManyWithoutMaturasInput
    userMaturas?: UserMaturaUncheckedCreateNestedManyWithoutMaturaInput
  }

  export type MaturaCreateOrConnectWithoutOpenTasksInput = {
    where: MaturaWhereUniqueInput
    create: XOR<MaturaCreateWithoutOpenTasksInput, MaturaUncheckedCreateWithoutOpenTasksInput>
  }

  export type UserOpenAnswerCreateWithoutOpenTaskInput = {
    id?: string
    answer?: string | null
    screenshotUrl?: string | null
    awardedPoints?: number | null
    feedback?: string | null
    gradingJson?: string | null
    gradedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userMatura: UserMaturaCreateNestedOneWithoutOpenAnswersInput
  }

  export type UserOpenAnswerUncheckedCreateWithoutOpenTaskInput = {
    id?: string
    userMaturaId: string
    answer?: string | null
    screenshotUrl?: string | null
    awardedPoints?: number | null
    feedback?: string | null
    gradingJson?: string | null
    gradedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserOpenAnswerCreateOrConnectWithoutOpenTaskInput = {
    where: UserOpenAnswerWhereUniqueInput
    create: XOR<UserOpenAnswerCreateWithoutOpenTaskInput, UserOpenAnswerUncheckedCreateWithoutOpenTaskInput>
  }

  export type UserOpenAnswerCreateManyOpenTaskInputEnvelope = {
    data: UserOpenAnswerCreateManyOpenTaskInput | UserOpenAnswerCreateManyOpenTaskInput[]
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

  export type MaturaUpsertWithWhereUniqueWithoutOpenTasksInput = {
    where: MaturaWhereUniqueInput
    update: XOR<MaturaUpdateWithoutOpenTasksInput, MaturaUncheckedUpdateWithoutOpenTasksInput>
    create: XOR<MaturaCreateWithoutOpenTasksInput, MaturaUncheckedCreateWithoutOpenTasksInput>
  }

  export type MaturaUpdateWithWhereUniqueWithoutOpenTasksInput = {
    where: MaturaWhereUniqueInput
    data: XOR<MaturaUpdateWithoutOpenTasksInput, MaturaUncheckedUpdateWithoutOpenTasksInput>
  }

  export type MaturaUpdateManyWithWhereWithoutOpenTasksInput = {
    where: MaturaScalarWhereInput
    data: XOR<MaturaUpdateManyMutationInput, MaturaUncheckedUpdateManyWithoutOpenTasksInput>
  }

  export type MaturaScalarWhereInput = {
    AND?: MaturaScalarWhereInput | MaturaScalarWhereInput[]
    OR?: MaturaScalarWhereInput[]
    NOT?: MaturaScalarWhereInput | MaturaScalarWhereInput[]
    id?: StringFilter<"Matura"> | string
    name?: StringFilter<"Matura"> | string
    createdAt?: DateTimeFilter<"Matura"> | Date | string
  }

  export type UserOpenAnswerUpsertWithWhereUniqueWithoutOpenTaskInput = {
    where: UserOpenAnswerWhereUniqueInput
    update: XOR<UserOpenAnswerUpdateWithoutOpenTaskInput, UserOpenAnswerUncheckedUpdateWithoutOpenTaskInput>
    create: XOR<UserOpenAnswerCreateWithoutOpenTaskInput, UserOpenAnswerUncheckedCreateWithoutOpenTaskInput>
  }

  export type UserOpenAnswerUpdateWithWhereUniqueWithoutOpenTaskInput = {
    where: UserOpenAnswerWhereUniqueInput
    data: XOR<UserOpenAnswerUpdateWithoutOpenTaskInput, UserOpenAnswerUncheckedUpdateWithoutOpenTaskInput>
  }

  export type UserOpenAnswerUpdateManyWithWhereWithoutOpenTaskInput = {
    where: UserOpenAnswerScalarWhereInput
    data: XOR<UserOpenAnswerUpdateManyMutationInput, UserOpenAnswerUncheckedUpdateManyWithoutOpenTaskInput>
  }

  export type UserOpenAnswerScalarWhereInput = {
    AND?: UserOpenAnswerScalarWhereInput | UserOpenAnswerScalarWhereInput[]
    OR?: UserOpenAnswerScalarWhereInput[]
    NOT?: UserOpenAnswerScalarWhereInput | UserOpenAnswerScalarWhereInput[]
    id?: StringFilter<"UserOpenAnswer"> | string
    userMaturaId?: StringFilter<"UserOpenAnswer"> | string
    openTaskId?: StringFilter<"UserOpenAnswer"> | string
    answer?: StringNullableFilter<"UserOpenAnswer"> | string | null
    screenshotUrl?: StringNullableFilter<"UserOpenAnswer"> | string | null
    awardedPoints?: IntNullableFilter<"UserOpenAnswer"> | number | null
    feedback?: StringNullableFilter<"UserOpenAnswer"> | string | null
    gradingJson?: StringNullableFilter<"UserOpenAnswer"> | string | null
    gradedAt?: DateTimeNullableFilter<"UserOpenAnswer"> | Date | string | null
    createdAt?: DateTimeFilter<"UserOpenAnswer"> | Date | string
    updatedAt?: DateTimeFilter<"UserOpenAnswer"> | Date | string
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

  export type MaturaCreateWithoutClosedTasksInput = {
    id?: string
    name: string
    createdAt?: Date | string
    openTasks?: OpenTasksCreateNestedManyWithoutMaturasInput
    userMaturas?: UserMaturaCreateNestedManyWithoutMaturaInput
  }

  export type MaturaUncheckedCreateWithoutClosedTasksInput = {
    id?: string
    name: string
    createdAt?: Date | string
    openTasks?: OpenTasksUncheckedCreateNestedManyWithoutMaturasInput
    userMaturas?: UserMaturaUncheckedCreateNestedManyWithoutMaturaInput
  }

  export type MaturaCreateOrConnectWithoutClosedTasksInput = {
    where: MaturaWhereUniqueInput
    create: XOR<MaturaCreateWithoutClosedTasksInput, MaturaUncheckedCreateWithoutClosedTasksInput>
  }

  export type UserClosedAnswerCreateWithoutClosedTaskInput = {
    id?: string
    answer?: string | null
    isCorrect?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userMatura: UserMaturaCreateNestedOneWithoutClosedAnswersInput
  }

  export type UserClosedAnswerUncheckedCreateWithoutClosedTaskInput = {
    id?: string
    userMaturaId: string
    answer?: string | null
    isCorrect?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserClosedAnswerCreateOrConnectWithoutClosedTaskInput = {
    where: UserClosedAnswerWhereUniqueInput
    create: XOR<UserClosedAnswerCreateWithoutClosedTaskInput, UserClosedAnswerUncheckedCreateWithoutClosedTaskInput>
  }

  export type UserClosedAnswerCreateManyClosedTaskInputEnvelope = {
    data: UserClosedAnswerCreateManyClosedTaskInput | UserClosedAnswerCreateManyClosedTaskInput[]
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

  export type MaturaUpsertWithWhereUniqueWithoutClosedTasksInput = {
    where: MaturaWhereUniqueInput
    update: XOR<MaturaUpdateWithoutClosedTasksInput, MaturaUncheckedUpdateWithoutClosedTasksInput>
    create: XOR<MaturaCreateWithoutClosedTasksInput, MaturaUncheckedCreateWithoutClosedTasksInput>
  }

  export type MaturaUpdateWithWhereUniqueWithoutClosedTasksInput = {
    where: MaturaWhereUniqueInput
    data: XOR<MaturaUpdateWithoutClosedTasksInput, MaturaUncheckedUpdateWithoutClosedTasksInput>
  }

  export type MaturaUpdateManyWithWhereWithoutClosedTasksInput = {
    where: MaturaScalarWhereInput
    data: XOR<MaturaUpdateManyMutationInput, MaturaUncheckedUpdateManyWithoutClosedTasksInput>
  }

  export type UserClosedAnswerUpsertWithWhereUniqueWithoutClosedTaskInput = {
    where: UserClosedAnswerWhereUniqueInput
    update: XOR<UserClosedAnswerUpdateWithoutClosedTaskInput, UserClosedAnswerUncheckedUpdateWithoutClosedTaskInput>
    create: XOR<UserClosedAnswerCreateWithoutClosedTaskInput, UserClosedAnswerUncheckedCreateWithoutClosedTaskInput>
  }

  export type UserClosedAnswerUpdateWithWhereUniqueWithoutClosedTaskInput = {
    where: UserClosedAnswerWhereUniqueInput
    data: XOR<UserClosedAnswerUpdateWithoutClosedTaskInput, UserClosedAnswerUncheckedUpdateWithoutClosedTaskInput>
  }

  export type UserClosedAnswerUpdateManyWithWhereWithoutClosedTaskInput = {
    where: UserClosedAnswerScalarWhereInput
    data: XOR<UserClosedAnswerUpdateManyMutationInput, UserClosedAnswerUncheckedUpdateManyWithoutClosedTaskInput>
  }

  export type UserClosedAnswerScalarWhereInput = {
    AND?: UserClosedAnswerScalarWhereInput | UserClosedAnswerScalarWhereInput[]
    OR?: UserClosedAnswerScalarWhereInput[]
    NOT?: UserClosedAnswerScalarWhereInput | UserClosedAnswerScalarWhereInput[]
    id?: StringFilter<"UserClosedAnswer"> | string
    userMaturaId?: StringFilter<"UserClosedAnswer"> | string
    closedTaskId?: StringFilter<"UserClosedAnswer"> | string
    answer?: StringNullableFilter<"UserClosedAnswer"> | string | null
    isCorrect?: BoolNullableFilter<"UserClosedAnswer"> | boolean | null
    createdAt?: DateTimeFilter<"UserClosedAnswer"> | Date | string
    updatedAt?: DateTimeFilter<"UserClosedAnswer"> | Date | string
  }

  export type ClosedTasksCreateWithoutAnswersInput = {
    id?: string
    name: string
    content: string
    correctAnswer: string
    points?: number
    subSection: SubSectionCreateNestedOneWithoutClosedTasksInput
    maturas?: MaturaCreateNestedManyWithoutClosedTasksInput
    userAnswers?: UserClosedAnswerCreateNestedManyWithoutClosedTaskInput
  }

  export type ClosedTasksUncheckedCreateWithoutAnswersInput = {
    id?: string
    name: string
    content: string
    correctAnswer: string
    points?: number
    subSectionId: string
    maturas?: MaturaUncheckedCreateNestedManyWithoutClosedTasksInput
    userAnswers?: UserClosedAnswerUncheckedCreateNestedManyWithoutClosedTaskInput
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
    points?: IntFieldUpdateOperationsInput | number
    subSection?: SubSectionUpdateOneRequiredWithoutClosedTasksNestedInput
    maturas?: MaturaUpdateManyWithoutClosedTasksNestedInput
    userAnswers?: UserClosedAnswerUpdateManyWithoutClosedTaskNestedInput
  }

  export type ClosedTasksUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    subSectionId?: StringFieldUpdateOperationsInput | string
    maturas?: MaturaUncheckedUpdateManyWithoutClosedTasksNestedInput
    userAnswers?: UserClosedAnswerUncheckedUpdateManyWithoutClosedTaskNestedInput
  }

  export type ClosedTasksCreateWithoutMaturasInput = {
    id?: string
    name: string
    content: string
    correctAnswer: string
    points?: number
    answers?: AnswersCreateNestedManyWithoutClosedTaskInput
    subSection: SubSectionCreateNestedOneWithoutClosedTasksInput
    userAnswers?: UserClosedAnswerCreateNestedManyWithoutClosedTaskInput
  }

  export type ClosedTasksUncheckedCreateWithoutMaturasInput = {
    id?: string
    name: string
    content: string
    correctAnswer: string
    points?: number
    subSectionId: string
    answers?: AnswersUncheckedCreateNestedManyWithoutClosedTaskInput
    userAnswers?: UserClosedAnswerUncheckedCreateNestedManyWithoutClosedTaskInput
  }

  export type ClosedTasksCreateOrConnectWithoutMaturasInput = {
    where: ClosedTasksWhereUniqueInput
    create: XOR<ClosedTasksCreateWithoutMaturasInput, ClosedTasksUncheckedCreateWithoutMaturasInput>
  }

  export type OpenTasksCreateWithoutMaturasInput = {
    id?: string
    name: string
    content: string
    rubric: string
    referenceAnswer?: string | null
    maxPoints?: number
    openTaskId?: string | null
    subSection: SubSectionCreateNestedOneWithoutOpenTasksInput
    userAnswers?: UserOpenAnswerCreateNestedManyWithoutOpenTaskInput
  }

  export type OpenTasksUncheckedCreateWithoutMaturasInput = {
    id?: string
    name: string
    content: string
    rubric: string
    referenceAnswer?: string | null
    maxPoints?: number
    subSectionId: string
    openTaskId?: string | null
    userAnswers?: UserOpenAnswerUncheckedCreateNestedManyWithoutOpenTaskInput
  }

  export type OpenTasksCreateOrConnectWithoutMaturasInput = {
    where: OpenTasksWhereUniqueInput
    create: XOR<OpenTasksCreateWithoutMaturasInput, OpenTasksUncheckedCreateWithoutMaturasInput>
  }

  export type UserMaturaCreateWithoutMaturaInput = {
    id?: string
    status?: boolean
    earnedPoints?: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserMaturasInput
    closedAnswers?: UserClosedAnswerCreateNestedManyWithoutUserMaturaInput
    openAnswers?: UserOpenAnswerCreateNestedManyWithoutUserMaturaInput
  }

  export type UserMaturaUncheckedCreateWithoutMaturaInput = {
    id?: string
    userId: string
    status?: boolean
    earnedPoints?: number
    createdAt?: Date | string
    closedAnswers?: UserClosedAnswerUncheckedCreateNestedManyWithoutUserMaturaInput
    openAnswers?: UserOpenAnswerUncheckedCreateNestedManyWithoutUserMaturaInput
  }

  export type UserMaturaCreateOrConnectWithoutMaturaInput = {
    where: UserMaturaWhereUniqueInput
    create: XOR<UserMaturaCreateWithoutMaturaInput, UserMaturaUncheckedCreateWithoutMaturaInput>
  }

  export type UserMaturaCreateManyMaturaInputEnvelope = {
    data: UserMaturaCreateManyMaturaInput | UserMaturaCreateManyMaturaInput[]
  }

  export type ClosedTasksUpsertWithWhereUniqueWithoutMaturasInput = {
    where: ClosedTasksWhereUniqueInput
    update: XOR<ClosedTasksUpdateWithoutMaturasInput, ClosedTasksUncheckedUpdateWithoutMaturasInput>
    create: XOR<ClosedTasksCreateWithoutMaturasInput, ClosedTasksUncheckedCreateWithoutMaturasInput>
  }

  export type ClosedTasksUpdateWithWhereUniqueWithoutMaturasInput = {
    where: ClosedTasksWhereUniqueInput
    data: XOR<ClosedTasksUpdateWithoutMaturasInput, ClosedTasksUncheckedUpdateWithoutMaturasInput>
  }

  export type ClosedTasksUpdateManyWithWhereWithoutMaturasInput = {
    where: ClosedTasksScalarWhereInput
    data: XOR<ClosedTasksUpdateManyMutationInput, ClosedTasksUncheckedUpdateManyWithoutMaturasInput>
  }

  export type OpenTasksUpsertWithWhereUniqueWithoutMaturasInput = {
    where: OpenTasksWhereUniqueInput
    update: XOR<OpenTasksUpdateWithoutMaturasInput, OpenTasksUncheckedUpdateWithoutMaturasInput>
    create: XOR<OpenTasksCreateWithoutMaturasInput, OpenTasksUncheckedCreateWithoutMaturasInput>
  }

  export type OpenTasksUpdateWithWhereUniqueWithoutMaturasInput = {
    where: OpenTasksWhereUniqueInput
    data: XOR<OpenTasksUpdateWithoutMaturasInput, OpenTasksUncheckedUpdateWithoutMaturasInput>
  }

  export type OpenTasksUpdateManyWithWhereWithoutMaturasInput = {
    where: OpenTasksScalarWhereInput
    data: XOR<OpenTasksUpdateManyMutationInput, OpenTasksUncheckedUpdateManyWithoutMaturasInput>
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

  export type UserCreateWithoutUserMaturasInput = {
    id?: string
    clerkId: string
    firstName?: string | null
    lastName?: string | null
    email: string
    createDate?: Date | string
    updateDate?: Date | string
    questions?: QuestionCreateNestedManyWithoutUserInput
    answers?: AnswerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserMaturasInput = {
    id?: string
    clerkId: string
    firstName?: string | null
    lastName?: string | null
    email: string
    createDate?: Date | string
    updateDate?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutUserInput
    answers?: AnswerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserMaturasInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserMaturasInput, UserUncheckedCreateWithoutUserMaturasInput>
  }

  export type MaturaCreateWithoutUserMaturasInput = {
    id?: string
    name: string
    createdAt?: Date | string
    closedTasks?: ClosedTasksCreateNestedManyWithoutMaturasInput
    openTasks?: OpenTasksCreateNestedManyWithoutMaturasInput
  }

  export type MaturaUncheckedCreateWithoutUserMaturasInput = {
    id?: string
    name: string
    createdAt?: Date | string
    closedTasks?: ClosedTasksUncheckedCreateNestedManyWithoutMaturasInput
    openTasks?: OpenTasksUncheckedCreateNestedManyWithoutMaturasInput
  }

  export type MaturaCreateOrConnectWithoutUserMaturasInput = {
    where: MaturaWhereUniqueInput
    create: XOR<MaturaCreateWithoutUserMaturasInput, MaturaUncheckedCreateWithoutUserMaturasInput>
  }

  export type UserClosedAnswerCreateWithoutUserMaturaInput = {
    id?: string
    answer?: string | null
    isCorrect?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    closedTask: ClosedTasksCreateNestedOneWithoutUserAnswersInput
  }

  export type UserClosedAnswerUncheckedCreateWithoutUserMaturaInput = {
    id?: string
    closedTaskId: string
    answer?: string | null
    isCorrect?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserClosedAnswerCreateOrConnectWithoutUserMaturaInput = {
    where: UserClosedAnswerWhereUniqueInput
    create: XOR<UserClosedAnswerCreateWithoutUserMaturaInput, UserClosedAnswerUncheckedCreateWithoutUserMaturaInput>
  }

  export type UserClosedAnswerCreateManyUserMaturaInputEnvelope = {
    data: UserClosedAnswerCreateManyUserMaturaInput | UserClosedAnswerCreateManyUserMaturaInput[]
  }

  export type UserOpenAnswerCreateWithoutUserMaturaInput = {
    id?: string
    answer?: string | null
    screenshotUrl?: string | null
    awardedPoints?: number | null
    feedback?: string | null
    gradingJson?: string | null
    gradedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    openTask: OpenTasksCreateNestedOneWithoutUserAnswersInput
  }

  export type UserOpenAnswerUncheckedCreateWithoutUserMaturaInput = {
    id?: string
    openTaskId: string
    answer?: string | null
    screenshotUrl?: string | null
    awardedPoints?: number | null
    feedback?: string | null
    gradingJson?: string | null
    gradedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserOpenAnswerCreateOrConnectWithoutUserMaturaInput = {
    where: UserOpenAnswerWhereUniqueInput
    create: XOR<UserOpenAnswerCreateWithoutUserMaturaInput, UserOpenAnswerUncheckedCreateWithoutUserMaturaInput>
  }

  export type UserOpenAnswerCreateManyUserMaturaInputEnvelope = {
    data: UserOpenAnswerCreateManyUserMaturaInput | UserOpenAnswerCreateManyUserMaturaInput[]
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
    questions?: QuestionUpdateManyWithoutUserNestedInput
    answers?: AnswerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserMaturasInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutUserNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutUserNestedInput
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
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedTasks?: ClosedTasksUpdateManyWithoutMaturasNestedInput
    openTasks?: OpenTasksUpdateManyWithoutMaturasNestedInput
  }

  export type MaturaUncheckedUpdateWithoutUserMaturasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedTasks?: ClosedTasksUncheckedUpdateManyWithoutMaturasNestedInput
    openTasks?: OpenTasksUncheckedUpdateManyWithoutMaturasNestedInput
  }

  export type UserClosedAnswerUpsertWithWhereUniqueWithoutUserMaturaInput = {
    where: UserClosedAnswerWhereUniqueInput
    update: XOR<UserClosedAnswerUpdateWithoutUserMaturaInput, UserClosedAnswerUncheckedUpdateWithoutUserMaturaInput>
    create: XOR<UserClosedAnswerCreateWithoutUserMaturaInput, UserClosedAnswerUncheckedCreateWithoutUserMaturaInput>
  }

  export type UserClosedAnswerUpdateWithWhereUniqueWithoutUserMaturaInput = {
    where: UserClosedAnswerWhereUniqueInput
    data: XOR<UserClosedAnswerUpdateWithoutUserMaturaInput, UserClosedAnswerUncheckedUpdateWithoutUserMaturaInput>
  }

  export type UserClosedAnswerUpdateManyWithWhereWithoutUserMaturaInput = {
    where: UserClosedAnswerScalarWhereInput
    data: XOR<UserClosedAnswerUpdateManyMutationInput, UserClosedAnswerUncheckedUpdateManyWithoutUserMaturaInput>
  }

  export type UserOpenAnswerUpsertWithWhereUniqueWithoutUserMaturaInput = {
    where: UserOpenAnswerWhereUniqueInput
    update: XOR<UserOpenAnswerUpdateWithoutUserMaturaInput, UserOpenAnswerUncheckedUpdateWithoutUserMaturaInput>
    create: XOR<UserOpenAnswerCreateWithoutUserMaturaInput, UserOpenAnswerUncheckedCreateWithoutUserMaturaInput>
  }

  export type UserOpenAnswerUpdateWithWhereUniqueWithoutUserMaturaInput = {
    where: UserOpenAnswerWhereUniqueInput
    data: XOR<UserOpenAnswerUpdateWithoutUserMaturaInput, UserOpenAnswerUncheckedUpdateWithoutUserMaturaInput>
  }

  export type UserOpenAnswerUpdateManyWithWhereWithoutUserMaturaInput = {
    where: UserOpenAnswerScalarWhereInput
    data: XOR<UserOpenAnswerUpdateManyMutationInput, UserOpenAnswerUncheckedUpdateManyWithoutUserMaturaInput>
  }

  export type UserMaturaCreateWithoutClosedAnswersInput = {
    id?: string
    status?: boolean
    earnedPoints?: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserMaturasInput
    matura: MaturaCreateNestedOneWithoutUserMaturasInput
    openAnswers?: UserOpenAnswerCreateNestedManyWithoutUserMaturaInput
  }

  export type UserMaturaUncheckedCreateWithoutClosedAnswersInput = {
    id?: string
    userId: string
    maturaId: string
    status?: boolean
    earnedPoints?: number
    createdAt?: Date | string
    openAnswers?: UserOpenAnswerUncheckedCreateNestedManyWithoutUserMaturaInput
  }

  export type UserMaturaCreateOrConnectWithoutClosedAnswersInput = {
    where: UserMaturaWhereUniqueInput
    create: XOR<UserMaturaCreateWithoutClosedAnswersInput, UserMaturaUncheckedCreateWithoutClosedAnswersInput>
  }

  export type ClosedTasksCreateWithoutUserAnswersInput = {
    id?: string
    name: string
    content: string
    correctAnswer: string
    points?: number
    answers?: AnswersCreateNestedManyWithoutClosedTaskInput
    subSection: SubSectionCreateNestedOneWithoutClosedTasksInput
    maturas?: MaturaCreateNestedManyWithoutClosedTasksInput
  }

  export type ClosedTasksUncheckedCreateWithoutUserAnswersInput = {
    id?: string
    name: string
    content: string
    correctAnswer: string
    points?: number
    subSectionId: string
    answers?: AnswersUncheckedCreateNestedManyWithoutClosedTaskInput
    maturas?: MaturaUncheckedCreateNestedManyWithoutClosedTasksInput
  }

  export type ClosedTasksCreateOrConnectWithoutUserAnswersInput = {
    where: ClosedTasksWhereUniqueInput
    create: XOR<ClosedTasksCreateWithoutUserAnswersInput, ClosedTasksUncheckedCreateWithoutUserAnswersInput>
  }

  export type UserMaturaUpsertWithoutClosedAnswersInput = {
    update: XOR<UserMaturaUpdateWithoutClosedAnswersInput, UserMaturaUncheckedUpdateWithoutClosedAnswersInput>
    create: XOR<UserMaturaCreateWithoutClosedAnswersInput, UserMaturaUncheckedCreateWithoutClosedAnswersInput>
    where?: UserMaturaWhereInput
  }

  export type UserMaturaUpdateToOneWithWhereWithoutClosedAnswersInput = {
    where?: UserMaturaWhereInput
    data: XOR<UserMaturaUpdateWithoutClosedAnswersInput, UserMaturaUncheckedUpdateWithoutClosedAnswersInput>
  }

  export type UserMaturaUpdateWithoutClosedAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    earnedPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserMaturasNestedInput
    matura?: MaturaUpdateOneRequiredWithoutUserMaturasNestedInput
    openAnswers?: UserOpenAnswerUpdateManyWithoutUserMaturaNestedInput
  }

  export type UserMaturaUncheckedUpdateWithoutClosedAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    maturaId?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    earnedPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    openAnswers?: UserOpenAnswerUncheckedUpdateManyWithoutUserMaturaNestedInput
  }

  export type ClosedTasksUpsertWithoutUserAnswersInput = {
    update: XOR<ClosedTasksUpdateWithoutUserAnswersInput, ClosedTasksUncheckedUpdateWithoutUserAnswersInput>
    create: XOR<ClosedTasksCreateWithoutUserAnswersInput, ClosedTasksUncheckedCreateWithoutUserAnswersInput>
    where?: ClosedTasksWhereInput
  }

  export type ClosedTasksUpdateToOneWithWhereWithoutUserAnswersInput = {
    where?: ClosedTasksWhereInput
    data: XOR<ClosedTasksUpdateWithoutUserAnswersInput, ClosedTasksUncheckedUpdateWithoutUserAnswersInput>
  }

  export type ClosedTasksUpdateWithoutUserAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    answers?: AnswersUpdateManyWithoutClosedTaskNestedInput
    subSection?: SubSectionUpdateOneRequiredWithoutClosedTasksNestedInput
    maturas?: MaturaUpdateManyWithoutClosedTasksNestedInput
  }

  export type ClosedTasksUncheckedUpdateWithoutUserAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    subSectionId?: StringFieldUpdateOperationsInput | string
    answers?: AnswersUncheckedUpdateManyWithoutClosedTaskNestedInput
    maturas?: MaturaUncheckedUpdateManyWithoutClosedTasksNestedInput
  }

  export type UserMaturaCreateWithoutOpenAnswersInput = {
    id?: string
    status?: boolean
    earnedPoints?: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserMaturasInput
    matura: MaturaCreateNestedOneWithoutUserMaturasInput
    closedAnswers?: UserClosedAnswerCreateNestedManyWithoutUserMaturaInput
  }

  export type UserMaturaUncheckedCreateWithoutOpenAnswersInput = {
    id?: string
    userId: string
    maturaId: string
    status?: boolean
    earnedPoints?: number
    createdAt?: Date | string
    closedAnswers?: UserClosedAnswerUncheckedCreateNestedManyWithoutUserMaturaInput
  }

  export type UserMaturaCreateOrConnectWithoutOpenAnswersInput = {
    where: UserMaturaWhereUniqueInput
    create: XOR<UserMaturaCreateWithoutOpenAnswersInput, UserMaturaUncheckedCreateWithoutOpenAnswersInput>
  }

  export type OpenTasksCreateWithoutUserAnswersInput = {
    id?: string
    name: string
    content: string
    rubric: string
    referenceAnswer?: string | null
    maxPoints?: number
    openTaskId?: string | null
    subSection: SubSectionCreateNestedOneWithoutOpenTasksInput
    maturas?: MaturaCreateNestedManyWithoutOpenTasksInput
  }

  export type OpenTasksUncheckedCreateWithoutUserAnswersInput = {
    id?: string
    name: string
    content: string
    rubric: string
    referenceAnswer?: string | null
    maxPoints?: number
    subSectionId: string
    openTaskId?: string | null
    maturas?: MaturaUncheckedCreateNestedManyWithoutOpenTasksInput
  }

  export type OpenTasksCreateOrConnectWithoutUserAnswersInput = {
    where: OpenTasksWhereUniqueInput
    create: XOR<OpenTasksCreateWithoutUserAnswersInput, OpenTasksUncheckedCreateWithoutUserAnswersInput>
  }

  export type UserMaturaUpsertWithoutOpenAnswersInput = {
    update: XOR<UserMaturaUpdateWithoutOpenAnswersInput, UserMaturaUncheckedUpdateWithoutOpenAnswersInput>
    create: XOR<UserMaturaCreateWithoutOpenAnswersInput, UserMaturaUncheckedCreateWithoutOpenAnswersInput>
    where?: UserMaturaWhereInput
  }

  export type UserMaturaUpdateToOneWithWhereWithoutOpenAnswersInput = {
    where?: UserMaturaWhereInput
    data: XOR<UserMaturaUpdateWithoutOpenAnswersInput, UserMaturaUncheckedUpdateWithoutOpenAnswersInput>
  }

  export type UserMaturaUpdateWithoutOpenAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    earnedPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserMaturasNestedInput
    matura?: MaturaUpdateOneRequiredWithoutUserMaturasNestedInput
    closedAnswers?: UserClosedAnswerUpdateManyWithoutUserMaturaNestedInput
  }

  export type UserMaturaUncheckedUpdateWithoutOpenAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    maturaId?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    earnedPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAnswers?: UserClosedAnswerUncheckedUpdateManyWithoutUserMaturaNestedInput
  }

  export type OpenTasksUpsertWithoutUserAnswersInput = {
    update: XOR<OpenTasksUpdateWithoutUserAnswersInput, OpenTasksUncheckedUpdateWithoutUserAnswersInput>
    create: XOR<OpenTasksCreateWithoutUserAnswersInput, OpenTasksUncheckedCreateWithoutUserAnswersInput>
    where?: OpenTasksWhereInput
  }

  export type OpenTasksUpdateToOneWithWhereWithoutUserAnswersInput = {
    where?: OpenTasksWhereInput
    data: XOR<OpenTasksUpdateWithoutUserAnswersInput, OpenTasksUncheckedUpdateWithoutUserAnswersInput>
  }

  export type OpenTasksUpdateWithoutUserAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    rubric?: StringFieldUpdateOperationsInput | string
    referenceAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    maxPoints?: IntFieldUpdateOperationsInput | number
    openTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    subSection?: SubSectionUpdateOneRequiredWithoutOpenTasksNestedInput
    maturas?: MaturaUpdateManyWithoutOpenTasksNestedInput
  }

  export type OpenTasksUncheckedUpdateWithoutUserAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    rubric?: StringFieldUpdateOperationsInput | string
    referenceAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    maxPoints?: IntFieldUpdateOperationsInput | number
    subSectionId?: StringFieldUpdateOperationsInput | string
    openTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    maturas?: MaturaUncheckedUpdateManyWithoutOpenTasksNestedInput
  }

  export type QuestionCreateManyUserInput = {
    id?: number
    title: string
    text: string
    videoId: number
    time: number
    isPublic?: boolean
    userName: string
    lastName: string
  }

  export type AnswerCreateManyUserInput = {
    id?: number
    text: string
    questionId: number
    userName: string
    lastName: string
  }

  export type UserMaturaCreateManyUserInput = {
    id?: string
    maturaId: string
    status?: boolean
    earnedPoints?: number
    createdAt?: Date | string
  }

  export type QuestionUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    userName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
    video?: VideoUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type QuestionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    videoId?: IntFieldUpdateOperationsInput | number
    time?: IntFieldUpdateOperationsInput | number
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    userName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    videoId?: IntFieldUpdateOperationsInput | number
    time?: IntFieldUpdateOperationsInput | number
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    userName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
  }

  export type AnswerUpdateWithoutUserInput = {
    text?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AnswerUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    questionId?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
  }

  export type AnswerUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    questionId?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
  }

  export type UserMaturaUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    earnedPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matura?: MaturaUpdateOneRequiredWithoutUserMaturasNestedInput
    closedAnswers?: UserClosedAnswerUpdateManyWithoutUserMaturaNestedInput
    openAnswers?: UserOpenAnswerUpdateManyWithoutUserMaturaNestedInput
  }

  export type UserMaturaUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    maturaId?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    earnedPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAnswers?: UserClosedAnswerUncheckedUpdateManyWithoutUserMaturaNestedInput
    openAnswers?: UserOpenAnswerUncheckedUpdateManyWithoutUserMaturaNestedInput
  }

  export type UserMaturaUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    maturaId?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    earnedPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateManyVideoInput = {
    id?: number
    title: string
    text: string
    time: number
    userId: string
    isPublic?: boolean
    userName: string
    lastName: string
  }

  export type QuestionUpdateWithoutVideoInput = {
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    userName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
    user?: UserUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type QuestionUncheckedUpdateWithoutVideoInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    userName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutVideoInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    userName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
  }

  export type AnswerCreateManyQuestionInput = {
    id?: number
    text: string
    userId: string
    userName: string
    lastName: string
  }

  export type AnswerUpdateWithoutQuestionInput = {
    text?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AnswerUncheckedUpdateWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
  }

  export type AnswerUncheckedUpdateManyWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
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
    rubric: string
    referenceAnswer?: string | null
    maxPoints?: number
    openTaskId?: string | null
  }

  export type ClosedTasksCreateManySubSectionInput = {
    id?: string
    name: string
    content: string
    correctAnswer: string
    points?: number
  }

  export type OpenTasksUpdateWithoutSubSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    rubric?: StringFieldUpdateOperationsInput | string
    referenceAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    maxPoints?: IntFieldUpdateOperationsInput | number
    openTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    maturas?: MaturaUpdateManyWithoutOpenTasksNestedInput
    userAnswers?: UserOpenAnswerUpdateManyWithoutOpenTaskNestedInput
  }

  export type OpenTasksUncheckedUpdateWithoutSubSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    rubric?: StringFieldUpdateOperationsInput | string
    referenceAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    maxPoints?: IntFieldUpdateOperationsInput | number
    openTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    maturas?: MaturaUncheckedUpdateManyWithoutOpenTasksNestedInput
    userAnswers?: UserOpenAnswerUncheckedUpdateManyWithoutOpenTaskNestedInput
  }

  export type OpenTasksUncheckedUpdateManyWithoutSubSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    rubric?: StringFieldUpdateOperationsInput | string
    referenceAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    maxPoints?: IntFieldUpdateOperationsInput | number
    openTaskId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClosedTasksUpdateWithoutSubSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    answers?: AnswersUpdateManyWithoutClosedTaskNestedInput
    maturas?: MaturaUpdateManyWithoutClosedTasksNestedInput
    userAnswers?: UserClosedAnswerUpdateManyWithoutClosedTaskNestedInput
  }

  export type ClosedTasksUncheckedUpdateWithoutSubSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    answers?: AnswersUncheckedUpdateManyWithoutClosedTaskNestedInput
    maturas?: MaturaUncheckedUpdateManyWithoutClosedTasksNestedInput
    userAnswers?: UserClosedAnswerUncheckedUpdateManyWithoutClosedTaskNestedInput
  }

  export type ClosedTasksUncheckedUpdateManyWithoutSubSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
  }

  export type UserOpenAnswerCreateManyOpenTaskInput = {
    id?: string
    userMaturaId: string
    answer?: string | null
    screenshotUrl?: string | null
    awardedPoints?: number | null
    feedback?: string | null
    gradingJson?: string | null
    gradedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaturaUpdateWithoutOpenTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedTasks?: ClosedTasksUpdateManyWithoutMaturasNestedInput
    userMaturas?: UserMaturaUpdateManyWithoutMaturaNestedInput
  }

  export type MaturaUncheckedUpdateWithoutOpenTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedTasks?: ClosedTasksUncheckedUpdateManyWithoutMaturasNestedInput
    userMaturas?: UserMaturaUncheckedUpdateManyWithoutMaturaNestedInput
  }

  export type MaturaUncheckedUpdateManyWithoutOpenTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOpenAnswerUpdateWithoutOpenTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    screenshotUrl?: NullableStringFieldUpdateOperationsInput | string | null
    awardedPoints?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    gradingJson?: NullableStringFieldUpdateOperationsInput | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userMatura?: UserMaturaUpdateOneRequiredWithoutOpenAnswersNestedInput
  }

  export type UserOpenAnswerUncheckedUpdateWithoutOpenTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    userMaturaId?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    screenshotUrl?: NullableStringFieldUpdateOperationsInput | string | null
    awardedPoints?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    gradingJson?: NullableStringFieldUpdateOperationsInput | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOpenAnswerUncheckedUpdateManyWithoutOpenTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    userMaturaId?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    screenshotUrl?: NullableStringFieldUpdateOperationsInput | string | null
    awardedPoints?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    gradingJson?: NullableStringFieldUpdateOperationsInput | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswersCreateManyClosedTaskInput = {
    id?: string
    A: string
    B: string
    C: string
    D: string
  }

  export type UserClosedAnswerCreateManyClosedTaskInput = {
    id?: string
    userMaturaId: string
    answer?: string | null
    isCorrect?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
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

  export type MaturaUpdateWithoutClosedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    openTasks?: OpenTasksUpdateManyWithoutMaturasNestedInput
    userMaturas?: UserMaturaUpdateManyWithoutMaturaNestedInput
  }

  export type MaturaUncheckedUpdateWithoutClosedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    openTasks?: OpenTasksUncheckedUpdateManyWithoutMaturasNestedInput
    userMaturas?: UserMaturaUncheckedUpdateManyWithoutMaturaNestedInput
  }

  export type MaturaUncheckedUpdateManyWithoutClosedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserClosedAnswerUpdateWithoutClosedTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userMatura?: UserMaturaUpdateOneRequiredWithoutClosedAnswersNestedInput
  }

  export type UserClosedAnswerUncheckedUpdateWithoutClosedTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    userMaturaId?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserClosedAnswerUncheckedUpdateManyWithoutClosedTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    userMaturaId?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMaturaCreateManyMaturaInput = {
    id?: string
    userId: string
    status?: boolean
    earnedPoints?: number
    createdAt?: Date | string
  }

  export type ClosedTasksUpdateWithoutMaturasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    answers?: AnswersUpdateManyWithoutClosedTaskNestedInput
    subSection?: SubSectionUpdateOneRequiredWithoutClosedTasksNestedInput
    userAnswers?: UserClosedAnswerUpdateManyWithoutClosedTaskNestedInput
  }

  export type ClosedTasksUncheckedUpdateWithoutMaturasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    subSectionId?: StringFieldUpdateOperationsInput | string
    answers?: AnswersUncheckedUpdateManyWithoutClosedTaskNestedInput
    userAnswers?: UserClosedAnswerUncheckedUpdateManyWithoutClosedTaskNestedInput
  }

  export type ClosedTasksUncheckedUpdateManyWithoutMaturasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    subSectionId?: StringFieldUpdateOperationsInput | string
  }

  export type OpenTasksUpdateWithoutMaturasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    rubric?: StringFieldUpdateOperationsInput | string
    referenceAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    maxPoints?: IntFieldUpdateOperationsInput | number
    openTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    subSection?: SubSectionUpdateOneRequiredWithoutOpenTasksNestedInput
    userAnswers?: UserOpenAnswerUpdateManyWithoutOpenTaskNestedInput
  }

  export type OpenTasksUncheckedUpdateWithoutMaturasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    rubric?: StringFieldUpdateOperationsInput | string
    referenceAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    maxPoints?: IntFieldUpdateOperationsInput | number
    subSectionId?: StringFieldUpdateOperationsInput | string
    openTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    userAnswers?: UserOpenAnswerUncheckedUpdateManyWithoutOpenTaskNestedInput
  }

  export type OpenTasksUncheckedUpdateManyWithoutMaturasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    rubric?: StringFieldUpdateOperationsInput | string
    referenceAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    maxPoints?: IntFieldUpdateOperationsInput | number
    subSectionId?: StringFieldUpdateOperationsInput | string
    openTaskId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserMaturaUpdateWithoutMaturaInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    earnedPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserMaturasNestedInput
    closedAnswers?: UserClosedAnswerUpdateManyWithoutUserMaturaNestedInput
    openAnswers?: UserOpenAnswerUpdateManyWithoutUserMaturaNestedInput
  }

  export type UserMaturaUncheckedUpdateWithoutMaturaInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    earnedPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAnswers?: UserClosedAnswerUncheckedUpdateManyWithoutUserMaturaNestedInput
    openAnswers?: UserOpenAnswerUncheckedUpdateManyWithoutUserMaturaNestedInput
  }

  export type UserMaturaUncheckedUpdateManyWithoutMaturaInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    earnedPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserClosedAnswerCreateManyUserMaturaInput = {
    id?: string
    closedTaskId: string
    answer?: string | null
    isCorrect?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserOpenAnswerCreateManyUserMaturaInput = {
    id?: string
    openTaskId: string
    answer?: string | null
    screenshotUrl?: string | null
    awardedPoints?: number | null
    feedback?: string | null
    gradingJson?: string | null
    gradedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserClosedAnswerUpdateWithoutUserMaturaInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedTask?: ClosedTasksUpdateOneRequiredWithoutUserAnswersNestedInput
  }

  export type UserClosedAnswerUncheckedUpdateWithoutUserMaturaInput = {
    id?: StringFieldUpdateOperationsInput | string
    closedTaskId?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserClosedAnswerUncheckedUpdateManyWithoutUserMaturaInput = {
    id?: StringFieldUpdateOperationsInput | string
    closedTaskId?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOpenAnswerUpdateWithoutUserMaturaInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    screenshotUrl?: NullableStringFieldUpdateOperationsInput | string | null
    awardedPoints?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    gradingJson?: NullableStringFieldUpdateOperationsInput | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    openTask?: OpenTasksUpdateOneRequiredWithoutUserAnswersNestedInput
  }

  export type UserOpenAnswerUncheckedUpdateWithoutUserMaturaInput = {
    id?: StringFieldUpdateOperationsInput | string
    openTaskId?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    screenshotUrl?: NullableStringFieldUpdateOperationsInput | string | null
    awardedPoints?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    gradingJson?: NullableStringFieldUpdateOperationsInput | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOpenAnswerUncheckedUpdateManyWithoutUserMaturaInput = {
    id?: StringFieldUpdateOperationsInput | string
    openTaskId?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    screenshotUrl?: NullableStringFieldUpdateOperationsInput | string | null
    awardedPoints?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    gradingJson?: NullableStringFieldUpdateOperationsInput | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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