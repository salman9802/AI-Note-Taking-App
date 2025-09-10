
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
 * Model UserSession
 * 
 */
export type UserSession = $Result.DefaultSelection<Prisma.$UserSessionPayload>
/**
 * Model UserNote
 * 
 */
export type UserNote = $Result.DefaultSelection<Prisma.$UserNotePayload>
/**
 * Model UserNoteTag
 * 
 */
export type UserNoteTag = $Result.DefaultSelection<Prisma.$UserNoteTagPayload>

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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

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
   * `prisma.userSession`: Exposes CRUD operations for the **UserSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSessions
    * const userSessions = await prisma.userSession.findMany()
    * ```
    */
  get userSession(): Prisma.UserSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userNote`: Exposes CRUD operations for the **UserNote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserNotes
    * const userNotes = await prisma.userNote.findMany()
    * ```
    */
  get userNote(): Prisma.UserNoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userNoteTag`: Exposes CRUD operations for the **UserNoteTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserNoteTags
    * const userNoteTags = await prisma.userNoteTag.findMany()
    * ```
    */
  get userNoteTag(): Prisma.UserNoteTagDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
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
    UserSession: 'UserSession',
    UserNote: 'UserNote',
    UserNoteTag: 'UserNoteTag'
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
      modelProps: "user" | "userSession" | "userNote" | "userNoteTag"
      txIsolationLevel: never
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
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserSession: {
        payload: Prisma.$UserSessionPayload<ExtArgs>
        fields: Prisma.UserSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          findFirst: {
            args: Prisma.UserSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          findMany: {
            args: Prisma.UserSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>[]
          }
          create: {
            args: Prisma.UserSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          createMany: {
            args: Prisma.UserSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          update: {
            args: Prisma.UserSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          deleteMany: {
            args: Prisma.UserSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          aggregate: {
            args: Prisma.UserSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSession>
          }
          groupBy: {
            args: Prisma.UserSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSessionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserSessionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserSessionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserSessionCountArgs<ExtArgs>
            result: $Utils.Optional<UserSessionCountAggregateOutputType> | number
          }
        }
      }
      UserNote: {
        payload: Prisma.$UserNotePayload<ExtArgs>
        fields: Prisma.UserNoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserNoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserNoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNotePayload>
          }
          findFirst: {
            args: Prisma.UserNoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserNoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNotePayload>
          }
          findMany: {
            args: Prisma.UserNoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNotePayload>[]
          }
          create: {
            args: Prisma.UserNoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNotePayload>
          }
          createMany: {
            args: Prisma.UserNoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserNoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNotePayload>
          }
          update: {
            args: Prisma.UserNoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNotePayload>
          }
          deleteMany: {
            args: Prisma.UserNoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserNoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserNoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNotePayload>
          }
          aggregate: {
            args: Prisma.UserNoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserNote>
          }
          groupBy: {
            args: Prisma.UserNoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserNoteGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserNoteFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserNoteAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserNoteCountArgs<ExtArgs>
            result: $Utils.Optional<UserNoteCountAggregateOutputType> | number
          }
        }
      }
      UserNoteTag: {
        payload: Prisma.$UserNoteTagPayload<ExtArgs>
        fields: Prisma.UserNoteTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserNoteTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNoteTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserNoteTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNoteTagPayload>
          }
          findFirst: {
            args: Prisma.UserNoteTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNoteTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserNoteTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNoteTagPayload>
          }
          findMany: {
            args: Prisma.UserNoteTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNoteTagPayload>[]
          }
          create: {
            args: Prisma.UserNoteTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNoteTagPayload>
          }
          createMany: {
            args: Prisma.UserNoteTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserNoteTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNoteTagPayload>
          }
          update: {
            args: Prisma.UserNoteTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNoteTagPayload>
          }
          deleteMany: {
            args: Prisma.UserNoteTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserNoteTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserNoteTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNoteTagPayload>
          }
          aggregate: {
            args: Prisma.UserNoteTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserNoteTag>
          }
          groupBy: {
            args: Prisma.UserNoteTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserNoteTagGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserNoteTagFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserNoteTagAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserNoteTagCountArgs<ExtArgs>
            result: $Utils.Optional<UserNoteTagCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
    user?: UserOmit
    userSession?: UserSessionOmit
    userNote?: UserNoteOmit
    userNoteTag?: UserNoteTagOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    userNotes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userNotes?: boolean | UserCountOutputTypeCountUserNotesArgs
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
  export type UserCountOutputTypeCountUserNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserNoteWhereInput
  }


  /**
   * Count Type UserNoteCountOutputType
   */

  export type UserNoteCountOutputType = {
    noteTags: number
  }

  export type UserNoteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    noteTags?: boolean | UserNoteCountOutputTypeCountNoteTagsArgs
  }

  // Custom InputTypes
  /**
   * UserNoteCountOutputType without action
   */
  export type UserNoteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNoteCountOutputType
     */
    select?: UserNoteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserNoteCountOutputType without action
   */
  export type UserNoteCountOutputTypeCountNoteTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserNoteTagWhereInput
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
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
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
    email: string
    password: string
    createdAt: Date
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
    email?: boolean
    password?: boolean
    createdAt?: boolean
    UserSession?: boolean | User$UserSessionArgs<ExtArgs>
    userNotes?: boolean | User$userNotesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserSession?: boolean | User$UserSessionArgs<ExtArgs>
    userNotes?: boolean | User$userNotesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      UserSession: Prisma.$UserSessionPayload<ExtArgs> | null
      userNotes: Prisma.$UserNotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      createdAt: Date
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
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


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
    UserSession<T extends User$UserSessionArgs<ExtArgs> = {}>(args?: Subset<T, User$UserSessionArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    userNotes<T extends User$userNotesArgs<ExtArgs> = {}>(args?: Subset<T, User$userNotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
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
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.UserSession
   */
  export type User$UserSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    where?: UserSessionWhereInput
  }

  /**
   * User.userNotes
   */
  export type User$userNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNote
     */
    select?: UserNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserNote
     */
    omit?: UserNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNoteInclude<ExtArgs> | null
    where?: UserNoteWhereInput
    orderBy?: UserNoteOrderByWithRelationInput | UserNoteOrderByWithRelationInput[]
    cursor?: UserNoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserNoteScalarFieldEnum | UserNoteScalarFieldEnum[]
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
   * Model UserSession
   */

  export type AggregateUserSession = {
    _count: UserSessionCountAggregateOutputType | null
    _min: UserSessionMinAggregateOutputType | null
    _max: UserSessionMaxAggregateOutputType | null
  }

  export type UserSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type UserSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type UserSessionCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    expiresAt: number
    _all: number
  }


  export type UserSessionMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    expiresAt?: true
  }

  export type UserSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    expiresAt?: true
  }

  export type UserSessionCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    expiresAt?: true
    _all?: true
  }

  export type UserSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSession to aggregate.
     */
    where?: UserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessions to fetch.
     */
    orderBy?: UserSessionOrderByWithRelationInput | UserSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSessions
    **/
    _count?: true | UserSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSessionMaxAggregateInputType
  }

  export type GetUserSessionAggregateType<T extends UserSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSession[P]>
      : GetScalarType<T[P], AggregateUserSession[P]>
  }




  export type UserSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSessionWhereInput
    orderBy?: UserSessionOrderByWithAggregationInput | UserSessionOrderByWithAggregationInput[]
    by: UserSessionScalarFieldEnum[] | UserSessionScalarFieldEnum
    having?: UserSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSessionCountAggregateInputType | true
    _min?: UserSessionMinAggregateInputType
    _max?: UserSessionMaxAggregateInputType
  }

  export type UserSessionGroupByOutputType = {
    id: string
    userId: string
    createdAt: Date
    expiresAt: Date
    _count: UserSessionCountAggregateOutputType | null
    _min: UserSessionMinAggregateOutputType | null
    _max: UserSessionMaxAggregateOutputType | null
  }

  type GetUserSessionGroupByPayload<T extends UserSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSessionGroupByOutputType[P]>
            : GetScalarType<T[P], UserSessionGroupByOutputType[P]>
        }
      >
    >


  export type UserSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSession"]>



  export type UserSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }

  export type UserSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "createdAt" | "expiresAt", ExtArgs["result"]["userSession"]>
  export type UserSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      createdAt: Date
      expiresAt: Date
    }, ExtArgs["result"]["userSession"]>
    composites: {}
  }

  type UserSessionGetPayload<S extends boolean | null | undefined | UserSessionDefaultArgs> = $Result.GetResult<Prisma.$UserSessionPayload, S>

  type UserSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSessionCountAggregateInputType | true
    }

  export interface UserSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSession'], meta: { name: 'UserSession' } }
    /**
     * Find zero or one UserSession that matches the filter.
     * @param {UserSessionFindUniqueArgs} args - Arguments to find a UserSession
     * @example
     * // Get one UserSession
     * const userSession = await prisma.userSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSessionFindUniqueArgs>(args: SelectSubset<T, UserSessionFindUniqueArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSessionFindUniqueOrThrowArgs} args - Arguments to find a UserSession
     * @example
     * // Get one UserSession
     * const userSession = await prisma.userSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionFindFirstArgs} args - Arguments to find a UserSession
     * @example
     * // Get one UserSession
     * const userSession = await prisma.userSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSessionFindFirstArgs>(args?: SelectSubset<T, UserSessionFindFirstArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionFindFirstOrThrowArgs} args - Arguments to find a UserSession
     * @example
     * // Get one UserSession
     * const userSession = await prisma.userSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSessions
     * const userSessions = await prisma.userSession.findMany()
     * 
     * // Get first 10 UserSessions
     * const userSessions = await prisma.userSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSessionWithIdOnly = await prisma.userSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSessionFindManyArgs>(args?: SelectSubset<T, UserSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSession.
     * @param {UserSessionCreateArgs} args - Arguments to create a UserSession.
     * @example
     * // Create one UserSession
     * const UserSession = await prisma.userSession.create({
     *   data: {
     *     // ... data to create a UserSession
     *   }
     * })
     * 
     */
    create<T extends UserSessionCreateArgs>(args: SelectSubset<T, UserSessionCreateArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSessions.
     * @param {UserSessionCreateManyArgs} args - Arguments to create many UserSessions.
     * @example
     * // Create many UserSessions
     * const userSession = await prisma.userSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSessionCreateManyArgs>(args?: SelectSubset<T, UserSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserSession.
     * @param {UserSessionDeleteArgs} args - Arguments to delete one UserSession.
     * @example
     * // Delete one UserSession
     * const UserSession = await prisma.userSession.delete({
     *   where: {
     *     // ... filter to delete one UserSession
     *   }
     * })
     * 
     */
    delete<T extends UserSessionDeleteArgs>(args: SelectSubset<T, UserSessionDeleteArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSession.
     * @param {UserSessionUpdateArgs} args - Arguments to update one UserSession.
     * @example
     * // Update one UserSession
     * const userSession = await prisma.userSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSessionUpdateArgs>(args: SelectSubset<T, UserSessionUpdateArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSessions.
     * @param {UserSessionDeleteManyArgs} args - Arguments to filter UserSessions to delete.
     * @example
     * // Delete a few UserSessions
     * const { count } = await prisma.userSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSessionDeleteManyArgs>(args?: SelectSubset<T, UserSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSessions
     * const userSession = await prisma.userSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSessionUpdateManyArgs>(args: SelectSubset<T, UserSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserSession.
     * @param {UserSessionUpsertArgs} args - Arguments to update or create a UserSession.
     * @example
     * // Update or create a UserSession
     * const userSession = await prisma.userSession.upsert({
     *   create: {
     *     // ... data to create a UserSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSession we want to update
     *   }
     * })
     */
    upsert<T extends UserSessionUpsertArgs>(args: SelectSubset<T, UserSessionUpsertArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSessions that matches the filter.
     * @param {UserSessionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userSession = await prisma.userSession.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserSessionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserSession.
     * @param {UserSessionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userSession = await prisma.userSession.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserSessionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of UserSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionCountArgs} args - Arguments to filter UserSessions to count.
     * @example
     * // Count the number of UserSessions
     * const count = await prisma.userSession.count({
     *   where: {
     *     // ... the filter for the UserSessions we want to count
     *   }
     * })
    **/
    count<T extends UserSessionCountArgs>(
      args?: Subset<T, UserSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserSessionAggregateArgs>(args: Subset<T, UserSessionAggregateArgs>): Prisma.PrismaPromise<GetUserSessionAggregateType<T>>

    /**
     * Group by UserSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionGroupByArgs} args - Group by arguments.
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
      T extends UserSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSessionGroupByArgs['orderBy'] }
        : { orderBy?: UserSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSession model
   */
  readonly fields: UserSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the UserSession model
   */
  interface UserSessionFieldRefs {
    readonly id: FieldRef<"UserSession", 'String'>
    readonly userId: FieldRef<"UserSession", 'String'>
    readonly createdAt: FieldRef<"UserSession", 'DateTime'>
    readonly expiresAt: FieldRef<"UserSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSession findUnique
   */
  export type UserSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter, which UserSession to fetch.
     */
    where: UserSessionWhereUniqueInput
  }

  /**
   * UserSession findUniqueOrThrow
   */
  export type UserSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter, which UserSession to fetch.
     */
    where: UserSessionWhereUniqueInput
  }

  /**
   * UserSession findFirst
   */
  export type UserSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter, which UserSession to fetch.
     */
    where?: UserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessions to fetch.
     */
    orderBy?: UserSessionOrderByWithRelationInput | UserSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSessions.
     */
    cursor?: UserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSessions.
     */
    distinct?: UserSessionScalarFieldEnum | UserSessionScalarFieldEnum[]
  }

  /**
   * UserSession findFirstOrThrow
   */
  export type UserSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter, which UserSession to fetch.
     */
    where?: UserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessions to fetch.
     */
    orderBy?: UserSessionOrderByWithRelationInput | UserSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSessions.
     */
    cursor?: UserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSessions.
     */
    distinct?: UserSessionScalarFieldEnum | UserSessionScalarFieldEnum[]
  }

  /**
   * UserSession findMany
   */
  export type UserSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter, which UserSessions to fetch.
     */
    where?: UserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessions to fetch.
     */
    orderBy?: UserSessionOrderByWithRelationInput | UserSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSessions.
     */
    cursor?: UserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessions.
     */
    skip?: number
    distinct?: UserSessionScalarFieldEnum | UserSessionScalarFieldEnum[]
  }

  /**
   * UserSession create
   */
  export type UserSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSession.
     */
    data: XOR<UserSessionCreateInput, UserSessionUncheckedCreateInput>
  }

  /**
   * UserSession createMany
   */
  export type UserSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSessions.
     */
    data: UserSessionCreateManyInput | UserSessionCreateManyInput[]
  }

  /**
   * UserSession update
   */
  export type UserSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSession.
     */
    data: XOR<UserSessionUpdateInput, UserSessionUncheckedUpdateInput>
    /**
     * Choose, which UserSession to update.
     */
    where: UserSessionWhereUniqueInput
  }

  /**
   * UserSession updateMany
   */
  export type UserSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSessions.
     */
    data: XOR<UserSessionUpdateManyMutationInput, UserSessionUncheckedUpdateManyInput>
    /**
     * Filter which UserSessions to update
     */
    where?: UserSessionWhereInput
    /**
     * Limit how many UserSessions to update.
     */
    limit?: number
  }

  /**
   * UserSession upsert
   */
  export type UserSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSession to update in case it exists.
     */
    where: UserSessionWhereUniqueInput
    /**
     * In case the UserSession found by the `where` argument doesn't exist, create a new UserSession with this data.
     */
    create: XOR<UserSessionCreateInput, UserSessionUncheckedCreateInput>
    /**
     * In case the UserSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSessionUpdateInput, UserSessionUncheckedUpdateInput>
  }

  /**
   * UserSession delete
   */
  export type UserSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter which UserSession to delete.
     */
    where: UserSessionWhereUniqueInput
  }

  /**
   * UserSession deleteMany
   */
  export type UserSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSessions to delete
     */
    where?: UserSessionWhereInput
    /**
     * Limit how many UserSessions to delete.
     */
    limit?: number
  }

  /**
   * UserSession findRaw
   */
  export type UserSessionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserSession aggregateRaw
   */
  export type UserSessionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserSession without action
   */
  export type UserSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
  }


  /**
   * Model UserNote
   */

  export type AggregateUserNote = {
    _count: UserNoteCountAggregateOutputType | null
    _min: UserNoteMinAggregateOutputType | null
    _max: UserNoteMaxAggregateOutputType | null
  }

  export type UserNoteMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type UserNoteMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type UserNoteCountAggregateOutputType = {
    id: number
    title: number
    content: number
    createdAt: number
    userId: number
    _all: number
  }


  export type UserNoteMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    createdAt?: true
    userId?: true
  }

  export type UserNoteMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    createdAt?: true
    userId?: true
  }

  export type UserNoteCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type UserNoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserNote to aggregate.
     */
    where?: UserNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserNotes to fetch.
     */
    orderBy?: UserNoteOrderByWithRelationInput | UserNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserNotes
    **/
    _count?: true | UserNoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserNoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserNoteMaxAggregateInputType
  }

  export type GetUserNoteAggregateType<T extends UserNoteAggregateArgs> = {
        [P in keyof T & keyof AggregateUserNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserNote[P]>
      : GetScalarType<T[P], AggregateUserNote[P]>
  }




  export type UserNoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserNoteWhereInput
    orderBy?: UserNoteOrderByWithAggregationInput | UserNoteOrderByWithAggregationInput[]
    by: UserNoteScalarFieldEnum[] | UserNoteScalarFieldEnum
    having?: UserNoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserNoteCountAggregateInputType | true
    _min?: UserNoteMinAggregateInputType
    _max?: UserNoteMaxAggregateInputType
  }

  export type UserNoteGroupByOutputType = {
    id: string
    title: string
    content: string
    createdAt: Date
    userId: string
    _count: UserNoteCountAggregateOutputType | null
    _min: UserNoteMinAggregateOutputType | null
    _max: UserNoteMaxAggregateOutputType | null
  }

  type GetUserNoteGroupByPayload<T extends UserNoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserNoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserNoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserNoteGroupByOutputType[P]>
            : GetScalarType<T[P], UserNoteGroupByOutputType[P]>
        }
      >
    >


  export type UserNoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    userId?: boolean
    noteTags?: boolean | UserNote$noteTagsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | UserNoteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userNote"]>



  export type UserNoteSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type UserNoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "createdAt" | "userId", ExtArgs["result"]["userNote"]>
  export type UserNoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    noteTags?: boolean | UserNote$noteTagsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | UserNoteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserNotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserNote"
    objects: {
      noteTags: Prisma.$UserNoteTagPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      createdAt: Date
      userId: string
    }, ExtArgs["result"]["userNote"]>
    composites: {}
  }

  type UserNoteGetPayload<S extends boolean | null | undefined | UserNoteDefaultArgs> = $Result.GetResult<Prisma.$UserNotePayload, S>

  type UserNoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserNoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserNoteCountAggregateInputType | true
    }

  export interface UserNoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserNote'], meta: { name: 'UserNote' } }
    /**
     * Find zero or one UserNote that matches the filter.
     * @param {UserNoteFindUniqueArgs} args - Arguments to find a UserNote
     * @example
     * // Get one UserNote
     * const userNote = await prisma.userNote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserNoteFindUniqueArgs>(args: SelectSubset<T, UserNoteFindUniqueArgs<ExtArgs>>): Prisma__UserNoteClient<$Result.GetResult<Prisma.$UserNotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserNote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserNoteFindUniqueOrThrowArgs} args - Arguments to find a UserNote
     * @example
     * // Get one UserNote
     * const userNote = await prisma.userNote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserNoteFindUniqueOrThrowArgs>(args: SelectSubset<T, UserNoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserNoteClient<$Result.GetResult<Prisma.$UserNotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserNote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserNoteFindFirstArgs} args - Arguments to find a UserNote
     * @example
     * // Get one UserNote
     * const userNote = await prisma.userNote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserNoteFindFirstArgs>(args?: SelectSubset<T, UserNoteFindFirstArgs<ExtArgs>>): Prisma__UserNoteClient<$Result.GetResult<Prisma.$UserNotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserNote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserNoteFindFirstOrThrowArgs} args - Arguments to find a UserNote
     * @example
     * // Get one UserNote
     * const userNote = await prisma.userNote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserNoteFindFirstOrThrowArgs>(args?: SelectSubset<T, UserNoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserNoteClient<$Result.GetResult<Prisma.$UserNotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserNotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserNoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserNotes
     * const userNotes = await prisma.userNote.findMany()
     * 
     * // Get first 10 UserNotes
     * const userNotes = await prisma.userNote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userNoteWithIdOnly = await prisma.userNote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserNoteFindManyArgs>(args?: SelectSubset<T, UserNoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserNote.
     * @param {UserNoteCreateArgs} args - Arguments to create a UserNote.
     * @example
     * // Create one UserNote
     * const UserNote = await prisma.userNote.create({
     *   data: {
     *     // ... data to create a UserNote
     *   }
     * })
     * 
     */
    create<T extends UserNoteCreateArgs>(args: SelectSubset<T, UserNoteCreateArgs<ExtArgs>>): Prisma__UserNoteClient<$Result.GetResult<Prisma.$UserNotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserNotes.
     * @param {UserNoteCreateManyArgs} args - Arguments to create many UserNotes.
     * @example
     * // Create many UserNotes
     * const userNote = await prisma.userNote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserNoteCreateManyArgs>(args?: SelectSubset<T, UserNoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserNote.
     * @param {UserNoteDeleteArgs} args - Arguments to delete one UserNote.
     * @example
     * // Delete one UserNote
     * const UserNote = await prisma.userNote.delete({
     *   where: {
     *     // ... filter to delete one UserNote
     *   }
     * })
     * 
     */
    delete<T extends UserNoteDeleteArgs>(args: SelectSubset<T, UserNoteDeleteArgs<ExtArgs>>): Prisma__UserNoteClient<$Result.GetResult<Prisma.$UserNotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserNote.
     * @param {UserNoteUpdateArgs} args - Arguments to update one UserNote.
     * @example
     * // Update one UserNote
     * const userNote = await prisma.userNote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserNoteUpdateArgs>(args: SelectSubset<T, UserNoteUpdateArgs<ExtArgs>>): Prisma__UserNoteClient<$Result.GetResult<Prisma.$UserNotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserNotes.
     * @param {UserNoteDeleteManyArgs} args - Arguments to filter UserNotes to delete.
     * @example
     * // Delete a few UserNotes
     * const { count } = await prisma.userNote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserNoteDeleteManyArgs>(args?: SelectSubset<T, UserNoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserNoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserNotes
     * const userNote = await prisma.userNote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserNoteUpdateManyArgs>(args: SelectSubset<T, UserNoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserNote.
     * @param {UserNoteUpsertArgs} args - Arguments to update or create a UserNote.
     * @example
     * // Update or create a UserNote
     * const userNote = await prisma.userNote.upsert({
     *   create: {
     *     // ... data to create a UserNote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserNote we want to update
     *   }
     * })
     */
    upsert<T extends UserNoteUpsertArgs>(args: SelectSubset<T, UserNoteUpsertArgs<ExtArgs>>): Prisma__UserNoteClient<$Result.GetResult<Prisma.$UserNotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserNotes that matches the filter.
     * @param {UserNoteFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userNote = await prisma.userNote.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserNoteFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserNote.
     * @param {UserNoteAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userNote = await prisma.userNote.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserNoteAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of UserNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserNoteCountArgs} args - Arguments to filter UserNotes to count.
     * @example
     * // Count the number of UserNotes
     * const count = await prisma.userNote.count({
     *   where: {
     *     // ... the filter for the UserNotes we want to count
     *   }
     * })
    **/
    count<T extends UserNoteCountArgs>(
      args?: Subset<T, UserNoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserNoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserNoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserNoteAggregateArgs>(args: Subset<T, UserNoteAggregateArgs>): Prisma.PrismaPromise<GetUserNoteAggregateType<T>>

    /**
     * Group by UserNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserNoteGroupByArgs} args - Group by arguments.
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
      T extends UserNoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserNoteGroupByArgs['orderBy'] }
        : { orderBy?: UserNoteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserNoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserNote model
   */
  readonly fields: UserNoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserNote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserNoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    noteTags<T extends UserNote$noteTagsArgs<ExtArgs> = {}>(args?: Subset<T, UserNote$noteTagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserNoteTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the UserNote model
   */
  interface UserNoteFieldRefs {
    readonly id: FieldRef<"UserNote", 'String'>
    readonly title: FieldRef<"UserNote", 'String'>
    readonly content: FieldRef<"UserNote", 'String'>
    readonly createdAt: FieldRef<"UserNote", 'DateTime'>
    readonly userId: FieldRef<"UserNote", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserNote findUnique
   */
  export type UserNoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNote
     */
    select?: UserNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserNote
     */
    omit?: UserNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNoteInclude<ExtArgs> | null
    /**
     * Filter, which UserNote to fetch.
     */
    where: UserNoteWhereUniqueInput
  }

  /**
   * UserNote findUniqueOrThrow
   */
  export type UserNoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNote
     */
    select?: UserNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserNote
     */
    omit?: UserNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNoteInclude<ExtArgs> | null
    /**
     * Filter, which UserNote to fetch.
     */
    where: UserNoteWhereUniqueInput
  }

  /**
   * UserNote findFirst
   */
  export type UserNoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNote
     */
    select?: UserNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserNote
     */
    omit?: UserNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNoteInclude<ExtArgs> | null
    /**
     * Filter, which UserNote to fetch.
     */
    where?: UserNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserNotes to fetch.
     */
    orderBy?: UserNoteOrderByWithRelationInput | UserNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserNotes.
     */
    cursor?: UserNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserNotes.
     */
    distinct?: UserNoteScalarFieldEnum | UserNoteScalarFieldEnum[]
  }

  /**
   * UserNote findFirstOrThrow
   */
  export type UserNoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNote
     */
    select?: UserNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserNote
     */
    omit?: UserNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNoteInclude<ExtArgs> | null
    /**
     * Filter, which UserNote to fetch.
     */
    where?: UserNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserNotes to fetch.
     */
    orderBy?: UserNoteOrderByWithRelationInput | UserNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserNotes.
     */
    cursor?: UserNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserNotes.
     */
    distinct?: UserNoteScalarFieldEnum | UserNoteScalarFieldEnum[]
  }

  /**
   * UserNote findMany
   */
  export type UserNoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNote
     */
    select?: UserNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserNote
     */
    omit?: UserNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNoteInclude<ExtArgs> | null
    /**
     * Filter, which UserNotes to fetch.
     */
    where?: UserNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserNotes to fetch.
     */
    orderBy?: UserNoteOrderByWithRelationInput | UserNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserNotes.
     */
    cursor?: UserNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserNotes.
     */
    skip?: number
    distinct?: UserNoteScalarFieldEnum | UserNoteScalarFieldEnum[]
  }

  /**
   * UserNote create
   */
  export type UserNoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNote
     */
    select?: UserNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserNote
     */
    omit?: UserNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNoteInclude<ExtArgs> | null
    /**
     * The data needed to create a UserNote.
     */
    data: XOR<UserNoteCreateInput, UserNoteUncheckedCreateInput>
  }

  /**
   * UserNote createMany
   */
  export type UserNoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserNotes.
     */
    data: UserNoteCreateManyInput | UserNoteCreateManyInput[]
  }

  /**
   * UserNote update
   */
  export type UserNoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNote
     */
    select?: UserNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserNote
     */
    omit?: UserNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNoteInclude<ExtArgs> | null
    /**
     * The data needed to update a UserNote.
     */
    data: XOR<UserNoteUpdateInput, UserNoteUncheckedUpdateInput>
    /**
     * Choose, which UserNote to update.
     */
    where: UserNoteWhereUniqueInput
  }

  /**
   * UserNote updateMany
   */
  export type UserNoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserNotes.
     */
    data: XOR<UserNoteUpdateManyMutationInput, UserNoteUncheckedUpdateManyInput>
    /**
     * Filter which UserNotes to update
     */
    where?: UserNoteWhereInput
    /**
     * Limit how many UserNotes to update.
     */
    limit?: number
  }

  /**
   * UserNote upsert
   */
  export type UserNoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNote
     */
    select?: UserNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserNote
     */
    omit?: UserNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNoteInclude<ExtArgs> | null
    /**
     * The filter to search for the UserNote to update in case it exists.
     */
    where: UserNoteWhereUniqueInput
    /**
     * In case the UserNote found by the `where` argument doesn't exist, create a new UserNote with this data.
     */
    create: XOR<UserNoteCreateInput, UserNoteUncheckedCreateInput>
    /**
     * In case the UserNote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserNoteUpdateInput, UserNoteUncheckedUpdateInput>
  }

  /**
   * UserNote delete
   */
  export type UserNoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNote
     */
    select?: UserNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserNote
     */
    omit?: UserNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNoteInclude<ExtArgs> | null
    /**
     * Filter which UserNote to delete.
     */
    where: UserNoteWhereUniqueInput
  }

  /**
   * UserNote deleteMany
   */
  export type UserNoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserNotes to delete
     */
    where?: UserNoteWhereInput
    /**
     * Limit how many UserNotes to delete.
     */
    limit?: number
  }

  /**
   * UserNote findRaw
   */
  export type UserNoteFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserNote aggregateRaw
   */
  export type UserNoteAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserNote.noteTags
   */
  export type UserNote$noteTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNoteTag
     */
    select?: UserNoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserNoteTag
     */
    omit?: UserNoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNoteTagInclude<ExtArgs> | null
    where?: UserNoteTagWhereInput
    orderBy?: UserNoteTagOrderByWithRelationInput | UserNoteTagOrderByWithRelationInput[]
    cursor?: UserNoteTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserNoteTagScalarFieldEnum | UserNoteTagScalarFieldEnum[]
  }

  /**
   * UserNote without action
   */
  export type UserNoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNote
     */
    select?: UserNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserNote
     */
    omit?: UserNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNoteInclude<ExtArgs> | null
  }


  /**
   * Model UserNoteTag
   */

  export type AggregateUserNoteTag = {
    _count: UserNoteTagCountAggregateOutputType | null
    _min: UserNoteTagMinAggregateOutputType | null
    _max: UserNoteTagMaxAggregateOutputType | null
  }

  export type UserNoteTagMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    noteId: string | null
  }

  export type UserNoteTagMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    noteId: string | null
  }

  export type UserNoteTagCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    noteId: number
    _all: number
  }


  export type UserNoteTagMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    noteId?: true
  }

  export type UserNoteTagMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    noteId?: true
  }

  export type UserNoteTagCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    noteId?: true
    _all?: true
  }

  export type UserNoteTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserNoteTag to aggregate.
     */
    where?: UserNoteTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserNoteTags to fetch.
     */
    orderBy?: UserNoteTagOrderByWithRelationInput | UserNoteTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserNoteTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserNoteTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserNoteTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserNoteTags
    **/
    _count?: true | UserNoteTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserNoteTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserNoteTagMaxAggregateInputType
  }

  export type GetUserNoteTagAggregateType<T extends UserNoteTagAggregateArgs> = {
        [P in keyof T & keyof AggregateUserNoteTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserNoteTag[P]>
      : GetScalarType<T[P], AggregateUserNoteTag[P]>
  }




  export type UserNoteTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserNoteTagWhereInput
    orderBy?: UserNoteTagOrderByWithAggregationInput | UserNoteTagOrderByWithAggregationInput[]
    by: UserNoteTagScalarFieldEnum[] | UserNoteTagScalarFieldEnum
    having?: UserNoteTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserNoteTagCountAggregateInputType | true
    _min?: UserNoteTagMinAggregateInputType
    _max?: UserNoteTagMaxAggregateInputType
  }

  export type UserNoteTagGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    noteId: string
    _count: UserNoteTagCountAggregateOutputType | null
    _min: UserNoteTagMinAggregateOutputType | null
    _max: UserNoteTagMaxAggregateOutputType | null
  }

  type GetUserNoteTagGroupByPayload<T extends UserNoteTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserNoteTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserNoteTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserNoteTagGroupByOutputType[P]>
            : GetScalarType<T[P], UserNoteTagGroupByOutputType[P]>
        }
      >
    >


  export type UserNoteTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    noteId?: boolean
    userNote?: boolean | UserNoteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userNoteTag"]>



  export type UserNoteTagSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    noteId?: boolean
  }

  export type UserNoteTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "noteId", ExtArgs["result"]["userNoteTag"]>
  export type UserNoteTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userNote?: boolean | UserNoteDefaultArgs<ExtArgs>
  }

  export type $UserNoteTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserNoteTag"
    objects: {
      userNote: Prisma.$UserNotePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      noteId: string
    }, ExtArgs["result"]["userNoteTag"]>
    composites: {}
  }

  type UserNoteTagGetPayload<S extends boolean | null | undefined | UserNoteTagDefaultArgs> = $Result.GetResult<Prisma.$UserNoteTagPayload, S>

  type UserNoteTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserNoteTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserNoteTagCountAggregateInputType | true
    }

  export interface UserNoteTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserNoteTag'], meta: { name: 'UserNoteTag' } }
    /**
     * Find zero or one UserNoteTag that matches the filter.
     * @param {UserNoteTagFindUniqueArgs} args - Arguments to find a UserNoteTag
     * @example
     * // Get one UserNoteTag
     * const userNoteTag = await prisma.userNoteTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserNoteTagFindUniqueArgs>(args: SelectSubset<T, UserNoteTagFindUniqueArgs<ExtArgs>>): Prisma__UserNoteTagClient<$Result.GetResult<Prisma.$UserNoteTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserNoteTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserNoteTagFindUniqueOrThrowArgs} args - Arguments to find a UserNoteTag
     * @example
     * // Get one UserNoteTag
     * const userNoteTag = await prisma.userNoteTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserNoteTagFindUniqueOrThrowArgs>(args: SelectSubset<T, UserNoteTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserNoteTagClient<$Result.GetResult<Prisma.$UserNoteTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserNoteTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserNoteTagFindFirstArgs} args - Arguments to find a UserNoteTag
     * @example
     * // Get one UserNoteTag
     * const userNoteTag = await prisma.userNoteTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserNoteTagFindFirstArgs>(args?: SelectSubset<T, UserNoteTagFindFirstArgs<ExtArgs>>): Prisma__UserNoteTagClient<$Result.GetResult<Prisma.$UserNoteTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserNoteTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserNoteTagFindFirstOrThrowArgs} args - Arguments to find a UserNoteTag
     * @example
     * // Get one UserNoteTag
     * const userNoteTag = await prisma.userNoteTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserNoteTagFindFirstOrThrowArgs>(args?: SelectSubset<T, UserNoteTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserNoteTagClient<$Result.GetResult<Prisma.$UserNoteTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserNoteTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserNoteTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserNoteTags
     * const userNoteTags = await prisma.userNoteTag.findMany()
     * 
     * // Get first 10 UserNoteTags
     * const userNoteTags = await prisma.userNoteTag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userNoteTagWithIdOnly = await prisma.userNoteTag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserNoteTagFindManyArgs>(args?: SelectSubset<T, UserNoteTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserNoteTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserNoteTag.
     * @param {UserNoteTagCreateArgs} args - Arguments to create a UserNoteTag.
     * @example
     * // Create one UserNoteTag
     * const UserNoteTag = await prisma.userNoteTag.create({
     *   data: {
     *     // ... data to create a UserNoteTag
     *   }
     * })
     * 
     */
    create<T extends UserNoteTagCreateArgs>(args: SelectSubset<T, UserNoteTagCreateArgs<ExtArgs>>): Prisma__UserNoteTagClient<$Result.GetResult<Prisma.$UserNoteTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserNoteTags.
     * @param {UserNoteTagCreateManyArgs} args - Arguments to create many UserNoteTags.
     * @example
     * // Create many UserNoteTags
     * const userNoteTag = await prisma.userNoteTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserNoteTagCreateManyArgs>(args?: SelectSubset<T, UserNoteTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserNoteTag.
     * @param {UserNoteTagDeleteArgs} args - Arguments to delete one UserNoteTag.
     * @example
     * // Delete one UserNoteTag
     * const UserNoteTag = await prisma.userNoteTag.delete({
     *   where: {
     *     // ... filter to delete one UserNoteTag
     *   }
     * })
     * 
     */
    delete<T extends UserNoteTagDeleteArgs>(args: SelectSubset<T, UserNoteTagDeleteArgs<ExtArgs>>): Prisma__UserNoteTagClient<$Result.GetResult<Prisma.$UserNoteTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserNoteTag.
     * @param {UserNoteTagUpdateArgs} args - Arguments to update one UserNoteTag.
     * @example
     * // Update one UserNoteTag
     * const userNoteTag = await prisma.userNoteTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserNoteTagUpdateArgs>(args: SelectSubset<T, UserNoteTagUpdateArgs<ExtArgs>>): Prisma__UserNoteTagClient<$Result.GetResult<Prisma.$UserNoteTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserNoteTags.
     * @param {UserNoteTagDeleteManyArgs} args - Arguments to filter UserNoteTags to delete.
     * @example
     * // Delete a few UserNoteTags
     * const { count } = await prisma.userNoteTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserNoteTagDeleteManyArgs>(args?: SelectSubset<T, UserNoteTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserNoteTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserNoteTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserNoteTags
     * const userNoteTag = await prisma.userNoteTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserNoteTagUpdateManyArgs>(args: SelectSubset<T, UserNoteTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserNoteTag.
     * @param {UserNoteTagUpsertArgs} args - Arguments to update or create a UserNoteTag.
     * @example
     * // Update or create a UserNoteTag
     * const userNoteTag = await prisma.userNoteTag.upsert({
     *   create: {
     *     // ... data to create a UserNoteTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserNoteTag we want to update
     *   }
     * })
     */
    upsert<T extends UserNoteTagUpsertArgs>(args: SelectSubset<T, UserNoteTagUpsertArgs<ExtArgs>>): Prisma__UserNoteTagClient<$Result.GetResult<Prisma.$UserNoteTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserNoteTags that matches the filter.
     * @param {UserNoteTagFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userNoteTag = await prisma.userNoteTag.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserNoteTagFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserNoteTag.
     * @param {UserNoteTagAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userNoteTag = await prisma.userNoteTag.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserNoteTagAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of UserNoteTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserNoteTagCountArgs} args - Arguments to filter UserNoteTags to count.
     * @example
     * // Count the number of UserNoteTags
     * const count = await prisma.userNoteTag.count({
     *   where: {
     *     // ... the filter for the UserNoteTags we want to count
     *   }
     * })
    **/
    count<T extends UserNoteTagCountArgs>(
      args?: Subset<T, UserNoteTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserNoteTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserNoteTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserNoteTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserNoteTagAggregateArgs>(args: Subset<T, UserNoteTagAggregateArgs>): Prisma.PrismaPromise<GetUserNoteTagAggregateType<T>>

    /**
     * Group by UserNoteTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserNoteTagGroupByArgs} args - Group by arguments.
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
      T extends UserNoteTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserNoteTagGroupByArgs['orderBy'] }
        : { orderBy?: UserNoteTagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserNoteTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserNoteTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserNoteTag model
   */
  readonly fields: UserNoteTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserNoteTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserNoteTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userNote<T extends UserNoteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserNoteDefaultArgs<ExtArgs>>): Prisma__UserNoteClient<$Result.GetResult<Prisma.$UserNotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserNoteTag model
   */
  interface UserNoteTagFieldRefs {
    readonly id: FieldRef<"UserNoteTag", 'String'>
    readonly name: FieldRef<"UserNoteTag", 'String'>
    readonly createdAt: FieldRef<"UserNoteTag", 'DateTime'>
    readonly noteId: FieldRef<"UserNoteTag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserNoteTag findUnique
   */
  export type UserNoteTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNoteTag
     */
    select?: UserNoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserNoteTag
     */
    omit?: UserNoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNoteTagInclude<ExtArgs> | null
    /**
     * Filter, which UserNoteTag to fetch.
     */
    where: UserNoteTagWhereUniqueInput
  }

  /**
   * UserNoteTag findUniqueOrThrow
   */
  export type UserNoteTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNoteTag
     */
    select?: UserNoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserNoteTag
     */
    omit?: UserNoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNoteTagInclude<ExtArgs> | null
    /**
     * Filter, which UserNoteTag to fetch.
     */
    where: UserNoteTagWhereUniqueInput
  }

  /**
   * UserNoteTag findFirst
   */
  export type UserNoteTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNoteTag
     */
    select?: UserNoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserNoteTag
     */
    omit?: UserNoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNoteTagInclude<ExtArgs> | null
    /**
     * Filter, which UserNoteTag to fetch.
     */
    where?: UserNoteTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserNoteTags to fetch.
     */
    orderBy?: UserNoteTagOrderByWithRelationInput | UserNoteTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserNoteTags.
     */
    cursor?: UserNoteTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserNoteTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserNoteTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserNoteTags.
     */
    distinct?: UserNoteTagScalarFieldEnum | UserNoteTagScalarFieldEnum[]
  }

  /**
   * UserNoteTag findFirstOrThrow
   */
  export type UserNoteTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNoteTag
     */
    select?: UserNoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserNoteTag
     */
    omit?: UserNoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNoteTagInclude<ExtArgs> | null
    /**
     * Filter, which UserNoteTag to fetch.
     */
    where?: UserNoteTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserNoteTags to fetch.
     */
    orderBy?: UserNoteTagOrderByWithRelationInput | UserNoteTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserNoteTags.
     */
    cursor?: UserNoteTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserNoteTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserNoteTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserNoteTags.
     */
    distinct?: UserNoteTagScalarFieldEnum | UserNoteTagScalarFieldEnum[]
  }

  /**
   * UserNoteTag findMany
   */
  export type UserNoteTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNoteTag
     */
    select?: UserNoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserNoteTag
     */
    omit?: UserNoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNoteTagInclude<ExtArgs> | null
    /**
     * Filter, which UserNoteTags to fetch.
     */
    where?: UserNoteTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserNoteTags to fetch.
     */
    orderBy?: UserNoteTagOrderByWithRelationInput | UserNoteTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserNoteTags.
     */
    cursor?: UserNoteTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserNoteTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserNoteTags.
     */
    skip?: number
    distinct?: UserNoteTagScalarFieldEnum | UserNoteTagScalarFieldEnum[]
  }

  /**
   * UserNoteTag create
   */
  export type UserNoteTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNoteTag
     */
    select?: UserNoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserNoteTag
     */
    omit?: UserNoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNoteTagInclude<ExtArgs> | null
    /**
     * The data needed to create a UserNoteTag.
     */
    data: XOR<UserNoteTagCreateInput, UserNoteTagUncheckedCreateInput>
  }

  /**
   * UserNoteTag createMany
   */
  export type UserNoteTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserNoteTags.
     */
    data: UserNoteTagCreateManyInput | UserNoteTagCreateManyInput[]
  }

  /**
   * UserNoteTag update
   */
  export type UserNoteTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNoteTag
     */
    select?: UserNoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserNoteTag
     */
    omit?: UserNoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNoteTagInclude<ExtArgs> | null
    /**
     * The data needed to update a UserNoteTag.
     */
    data: XOR<UserNoteTagUpdateInput, UserNoteTagUncheckedUpdateInput>
    /**
     * Choose, which UserNoteTag to update.
     */
    where: UserNoteTagWhereUniqueInput
  }

  /**
   * UserNoteTag updateMany
   */
  export type UserNoteTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserNoteTags.
     */
    data: XOR<UserNoteTagUpdateManyMutationInput, UserNoteTagUncheckedUpdateManyInput>
    /**
     * Filter which UserNoteTags to update
     */
    where?: UserNoteTagWhereInput
    /**
     * Limit how many UserNoteTags to update.
     */
    limit?: number
  }

  /**
   * UserNoteTag upsert
   */
  export type UserNoteTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNoteTag
     */
    select?: UserNoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserNoteTag
     */
    omit?: UserNoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNoteTagInclude<ExtArgs> | null
    /**
     * The filter to search for the UserNoteTag to update in case it exists.
     */
    where: UserNoteTagWhereUniqueInput
    /**
     * In case the UserNoteTag found by the `where` argument doesn't exist, create a new UserNoteTag with this data.
     */
    create: XOR<UserNoteTagCreateInput, UserNoteTagUncheckedCreateInput>
    /**
     * In case the UserNoteTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserNoteTagUpdateInput, UserNoteTagUncheckedUpdateInput>
  }

  /**
   * UserNoteTag delete
   */
  export type UserNoteTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNoteTag
     */
    select?: UserNoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserNoteTag
     */
    omit?: UserNoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNoteTagInclude<ExtArgs> | null
    /**
     * Filter which UserNoteTag to delete.
     */
    where: UserNoteTagWhereUniqueInput
  }

  /**
   * UserNoteTag deleteMany
   */
  export type UserNoteTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserNoteTags to delete
     */
    where?: UserNoteTagWhereInput
    /**
     * Limit how many UserNoteTags to delete.
     */
    limit?: number
  }

  /**
   * UserNoteTag findRaw
   */
  export type UserNoteTagFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserNoteTag aggregateRaw
   */
  export type UserNoteTagAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserNoteTag without action
   */
  export type UserNoteTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNoteTag
     */
    select?: UserNoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserNoteTag
     */
    omit?: UserNoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNoteTagInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt'
  };

  export type UserSessionScalarFieldEnum = (typeof UserSessionScalarFieldEnum)[keyof typeof UserSessionScalarFieldEnum]


  export const UserNoteScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type UserNoteScalarFieldEnum = (typeof UserNoteScalarFieldEnum)[keyof typeof UserNoteScalarFieldEnum]


  export const UserNoteTagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    noteId: 'noteId'
  };

  export type UserNoteTagScalarFieldEnum = (typeof UserNoteTagScalarFieldEnum)[keyof typeof UserNoteTagScalarFieldEnum]


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    UserSession?: XOR<UserSessionNullableScalarRelationFilter, UserSessionWhereInput> | null
    userNotes?: UserNoteListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    UserSession?: UserSessionOrderByWithRelationInput
    userNotes?: UserNoteOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    UserSession?: XOR<UserSessionNullableScalarRelationFilter, UserSessionWhereInput> | null
    userNotes?: UserNoteListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserSessionWhereInput = {
    AND?: UserSessionWhereInput | UserSessionWhereInput[]
    OR?: UserSessionWhereInput[]
    NOT?: UserSessionWhereInput | UserSessionWhereInput[]
    id?: StringFilter<"UserSession"> | string
    userId?: StringFilter<"UserSession"> | string
    createdAt?: DateTimeFilter<"UserSession"> | Date | string
    expiresAt?: DateTimeFilter<"UserSession"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserSessionWhereInput | UserSessionWhereInput[]
    OR?: UserSessionWhereInput[]
    NOT?: UserSessionWhereInput | UserSessionWhereInput[]
    createdAt?: DateTimeFilter<"UserSession"> | Date | string
    expiresAt?: DateTimeFilter<"UserSession"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    _count?: UserSessionCountOrderByAggregateInput
    _max?: UserSessionMaxOrderByAggregateInput
    _min?: UserSessionMinOrderByAggregateInput
  }

  export type UserSessionScalarWhereWithAggregatesInput = {
    AND?: UserSessionScalarWhereWithAggregatesInput | UserSessionScalarWhereWithAggregatesInput[]
    OR?: UserSessionScalarWhereWithAggregatesInput[]
    NOT?: UserSessionScalarWhereWithAggregatesInput | UserSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserSession"> | string
    userId?: StringWithAggregatesFilter<"UserSession"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserSession"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"UserSession"> | Date | string
  }

  export type UserNoteWhereInput = {
    AND?: UserNoteWhereInput | UserNoteWhereInput[]
    OR?: UserNoteWhereInput[]
    NOT?: UserNoteWhereInput | UserNoteWhereInput[]
    id?: StringFilter<"UserNote"> | string
    title?: StringFilter<"UserNote"> | string
    content?: StringFilter<"UserNote"> | string
    createdAt?: DateTimeFilter<"UserNote"> | Date | string
    userId?: StringFilter<"UserNote"> | string
    noteTags?: UserNoteTagListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserNoteOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    noteTags?: UserNoteTagOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type UserNoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserNoteWhereInput | UserNoteWhereInput[]
    OR?: UserNoteWhereInput[]
    NOT?: UserNoteWhereInput | UserNoteWhereInput[]
    title?: StringFilter<"UserNote"> | string
    content?: StringFilter<"UserNote"> | string
    createdAt?: DateTimeFilter<"UserNote"> | Date | string
    userId?: StringFilter<"UserNote"> | string
    noteTags?: UserNoteTagListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserNoteOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: UserNoteCountOrderByAggregateInput
    _max?: UserNoteMaxOrderByAggregateInput
    _min?: UserNoteMinOrderByAggregateInput
  }

  export type UserNoteScalarWhereWithAggregatesInput = {
    AND?: UserNoteScalarWhereWithAggregatesInput | UserNoteScalarWhereWithAggregatesInput[]
    OR?: UserNoteScalarWhereWithAggregatesInput[]
    NOT?: UserNoteScalarWhereWithAggregatesInput | UserNoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserNote"> | string
    title?: StringWithAggregatesFilter<"UserNote"> | string
    content?: StringWithAggregatesFilter<"UserNote"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserNote"> | Date | string
    userId?: StringWithAggregatesFilter<"UserNote"> | string
  }

  export type UserNoteTagWhereInput = {
    AND?: UserNoteTagWhereInput | UserNoteTagWhereInput[]
    OR?: UserNoteTagWhereInput[]
    NOT?: UserNoteTagWhereInput | UserNoteTagWhereInput[]
    id?: StringFilter<"UserNoteTag"> | string
    name?: StringFilter<"UserNoteTag"> | string
    createdAt?: DateTimeFilter<"UserNoteTag"> | Date | string
    noteId?: StringFilter<"UserNoteTag"> | string
    userNote?: XOR<UserNoteScalarRelationFilter, UserNoteWhereInput>
  }

  export type UserNoteTagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    noteId?: SortOrder
    userNote?: UserNoteOrderByWithRelationInput
  }

  export type UserNoteTagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserNoteTagWhereInput | UserNoteTagWhereInput[]
    OR?: UserNoteTagWhereInput[]
    NOT?: UserNoteTagWhereInput | UserNoteTagWhereInput[]
    name?: StringFilter<"UserNoteTag"> | string
    createdAt?: DateTimeFilter<"UserNoteTag"> | Date | string
    noteId?: StringFilter<"UserNoteTag"> | string
    userNote?: XOR<UserNoteScalarRelationFilter, UserNoteWhereInput>
  }, "id">

  export type UserNoteTagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    noteId?: SortOrder
    _count?: UserNoteTagCountOrderByAggregateInput
    _max?: UserNoteTagMaxOrderByAggregateInput
    _min?: UserNoteTagMinOrderByAggregateInput
  }

  export type UserNoteTagScalarWhereWithAggregatesInput = {
    AND?: UserNoteTagScalarWhereWithAggregatesInput | UserNoteTagScalarWhereWithAggregatesInput[]
    OR?: UserNoteTagScalarWhereWithAggregatesInput[]
    NOT?: UserNoteTagScalarWhereWithAggregatesInput | UserNoteTagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserNoteTag"> | string
    name?: StringWithAggregatesFilter<"UserNoteTag"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserNoteTag"> | Date | string
    noteId?: StringWithAggregatesFilter<"UserNoteTag"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    UserSession?: UserSessionCreateNestedOneWithoutUserInput
    userNotes?: UserNoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    UserSession?: UserSessionUncheckedCreateNestedOneWithoutUserInput
    userNotes?: UserNoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserSession?: UserSessionUpdateOneWithoutUserNestedInput
    userNotes?: UserNoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserSession?: UserSessionUncheckedUpdateOneWithoutUserNestedInput
    userNotes?: UserNoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSessionCreateInput = {
    id?: string
    createdAt?: Date | string
    expiresAt: Date | string
    user: UserCreateNestedOneWithoutUserSessionInput
  }

  export type UserSessionUncheckedCreateInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type UserSessionUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserSessionNestedInput
  }

  export type UserSessionUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSessionCreateManyInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type UserSessionUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSessionUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserNoteCreateInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    noteTags?: UserNoteTagCreateNestedManyWithoutUserNoteInput
    user: UserCreateNestedOneWithoutUserNotesInput
  }

  export type UserNoteUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    userId: string
    noteTags?: UserNoteTagUncheckedCreateNestedManyWithoutUserNoteInput
  }

  export type UserNoteUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    noteTags?: UserNoteTagUpdateManyWithoutUserNoteNestedInput
    user?: UserUpdateOneRequiredWithoutUserNotesNestedInput
  }

  export type UserNoteUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    noteTags?: UserNoteTagUncheckedUpdateManyWithoutUserNoteNestedInput
  }

  export type UserNoteCreateManyInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    userId: string
  }

  export type UserNoteUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserNoteUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserNoteTagCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    userNote: UserNoteCreateNestedOneWithoutNoteTagsInput
  }

  export type UserNoteTagUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    noteId: string
  }

  export type UserNoteTagUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userNote?: UserNoteUpdateOneRequiredWithoutNoteTagsNestedInput
  }

  export type UserNoteTagUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    noteId?: StringFieldUpdateOperationsInput | string
  }

  export type UserNoteTagCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    noteId: string
  }

  export type UserNoteTagUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserNoteTagUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    noteId?: StringFieldUpdateOperationsInput | string
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

  export type UserSessionNullableScalarRelationFilter = {
    is?: UserSessionWhereInput | null
    isNot?: UserSessionWhereInput | null
  }

  export type UserNoteListRelationFilter = {
    every?: UserNoteWhereInput
    some?: UserNoteWhereInput
    none?: UserNoteWhereInput
  }

  export type UserNoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type UserSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type UserSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type UserNoteTagListRelationFilter = {
    every?: UserNoteTagWhereInput
    some?: UserNoteTagWhereInput
    none?: UserNoteTagWhereInput
  }

  export type UserNoteTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserNoteCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type UserNoteMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type UserNoteMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type UserNoteScalarRelationFilter = {
    is?: UserNoteWhereInput
    isNot?: UserNoteWhereInput
  }

  export type UserNoteTagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    noteId?: SortOrder
  }

  export type UserNoteTagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    noteId?: SortOrder
  }

  export type UserNoteTagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    noteId?: SortOrder
  }

  export type UserSessionCreateNestedOneWithoutUserInput = {
    create?: XOR<UserSessionCreateWithoutUserInput, UserSessionUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSessionCreateOrConnectWithoutUserInput
    connect?: UserSessionWhereUniqueInput
  }

  export type UserNoteCreateNestedManyWithoutUserInput = {
    create?: XOR<UserNoteCreateWithoutUserInput, UserNoteUncheckedCreateWithoutUserInput> | UserNoteCreateWithoutUserInput[] | UserNoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserNoteCreateOrConnectWithoutUserInput | UserNoteCreateOrConnectWithoutUserInput[]
    createMany?: UserNoteCreateManyUserInputEnvelope
    connect?: UserNoteWhereUniqueInput | UserNoteWhereUniqueInput[]
  }

  export type UserSessionUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserSessionCreateWithoutUserInput, UserSessionUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSessionCreateOrConnectWithoutUserInput
    connect?: UserSessionWhereUniqueInput
  }

  export type UserNoteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserNoteCreateWithoutUserInput, UserNoteUncheckedCreateWithoutUserInput> | UserNoteCreateWithoutUserInput[] | UserNoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserNoteCreateOrConnectWithoutUserInput | UserNoteCreateOrConnectWithoutUserInput[]
    createMany?: UserNoteCreateManyUserInputEnvelope
    connect?: UserNoteWhereUniqueInput | UserNoteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserSessionUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserSessionCreateWithoutUserInput, UserSessionUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSessionCreateOrConnectWithoutUserInput
    upsert?: UserSessionUpsertWithoutUserInput
    disconnect?: UserSessionWhereInput | boolean
    delete?: UserSessionWhereInput | boolean
    connect?: UserSessionWhereUniqueInput
    update?: XOR<XOR<UserSessionUpdateToOneWithWhereWithoutUserInput, UserSessionUpdateWithoutUserInput>, UserSessionUncheckedUpdateWithoutUserInput>
  }

  export type UserNoteUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserNoteCreateWithoutUserInput, UserNoteUncheckedCreateWithoutUserInput> | UserNoteCreateWithoutUserInput[] | UserNoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserNoteCreateOrConnectWithoutUserInput | UserNoteCreateOrConnectWithoutUserInput[]
    upsert?: UserNoteUpsertWithWhereUniqueWithoutUserInput | UserNoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserNoteCreateManyUserInputEnvelope
    set?: UserNoteWhereUniqueInput | UserNoteWhereUniqueInput[]
    disconnect?: UserNoteWhereUniqueInput | UserNoteWhereUniqueInput[]
    delete?: UserNoteWhereUniqueInput | UserNoteWhereUniqueInput[]
    connect?: UserNoteWhereUniqueInput | UserNoteWhereUniqueInput[]
    update?: UserNoteUpdateWithWhereUniqueWithoutUserInput | UserNoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserNoteUpdateManyWithWhereWithoutUserInput | UserNoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserNoteScalarWhereInput | UserNoteScalarWhereInput[]
  }

  export type UserSessionUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserSessionCreateWithoutUserInput, UserSessionUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSessionCreateOrConnectWithoutUserInput
    upsert?: UserSessionUpsertWithoutUserInput
    disconnect?: UserSessionWhereInput | boolean
    delete?: UserSessionWhereInput | boolean
    connect?: UserSessionWhereUniqueInput
    update?: XOR<XOR<UserSessionUpdateToOneWithWhereWithoutUserInput, UserSessionUpdateWithoutUserInput>, UserSessionUncheckedUpdateWithoutUserInput>
  }

  export type UserNoteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserNoteCreateWithoutUserInput, UserNoteUncheckedCreateWithoutUserInput> | UserNoteCreateWithoutUserInput[] | UserNoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserNoteCreateOrConnectWithoutUserInput | UserNoteCreateOrConnectWithoutUserInput[]
    upsert?: UserNoteUpsertWithWhereUniqueWithoutUserInput | UserNoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserNoteCreateManyUserInputEnvelope
    set?: UserNoteWhereUniqueInput | UserNoteWhereUniqueInput[]
    disconnect?: UserNoteWhereUniqueInput | UserNoteWhereUniqueInput[]
    delete?: UserNoteWhereUniqueInput | UserNoteWhereUniqueInput[]
    connect?: UserNoteWhereUniqueInput | UserNoteWhereUniqueInput[]
    update?: UserNoteUpdateWithWhereUniqueWithoutUserInput | UserNoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserNoteUpdateManyWithWhereWithoutUserInput | UserNoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserNoteScalarWhereInput | UserNoteScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserSessionInput = {
    create?: XOR<UserCreateWithoutUserSessionInput, UserUncheckedCreateWithoutUserSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserSessionInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserSessionNestedInput = {
    create?: XOR<UserCreateWithoutUserSessionInput, UserUncheckedCreateWithoutUserSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserSessionInput
    upsert?: UserUpsertWithoutUserSessionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserSessionInput, UserUpdateWithoutUserSessionInput>, UserUncheckedUpdateWithoutUserSessionInput>
  }

  export type UserNoteTagCreateNestedManyWithoutUserNoteInput = {
    create?: XOR<UserNoteTagCreateWithoutUserNoteInput, UserNoteTagUncheckedCreateWithoutUserNoteInput> | UserNoteTagCreateWithoutUserNoteInput[] | UserNoteTagUncheckedCreateWithoutUserNoteInput[]
    connectOrCreate?: UserNoteTagCreateOrConnectWithoutUserNoteInput | UserNoteTagCreateOrConnectWithoutUserNoteInput[]
    createMany?: UserNoteTagCreateManyUserNoteInputEnvelope
    connect?: UserNoteTagWhereUniqueInput | UserNoteTagWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutUserNotesInput = {
    create?: XOR<UserCreateWithoutUserNotesInput, UserUncheckedCreateWithoutUserNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserNotesInput
    connect?: UserWhereUniqueInput
  }

  export type UserNoteTagUncheckedCreateNestedManyWithoutUserNoteInput = {
    create?: XOR<UserNoteTagCreateWithoutUserNoteInput, UserNoteTagUncheckedCreateWithoutUserNoteInput> | UserNoteTagCreateWithoutUserNoteInput[] | UserNoteTagUncheckedCreateWithoutUserNoteInput[]
    connectOrCreate?: UserNoteTagCreateOrConnectWithoutUserNoteInput | UserNoteTagCreateOrConnectWithoutUserNoteInput[]
    createMany?: UserNoteTagCreateManyUserNoteInputEnvelope
    connect?: UserNoteTagWhereUniqueInput | UserNoteTagWhereUniqueInput[]
  }

  export type UserNoteTagUpdateManyWithoutUserNoteNestedInput = {
    create?: XOR<UserNoteTagCreateWithoutUserNoteInput, UserNoteTagUncheckedCreateWithoutUserNoteInput> | UserNoteTagCreateWithoutUserNoteInput[] | UserNoteTagUncheckedCreateWithoutUserNoteInput[]
    connectOrCreate?: UserNoteTagCreateOrConnectWithoutUserNoteInput | UserNoteTagCreateOrConnectWithoutUserNoteInput[]
    upsert?: UserNoteTagUpsertWithWhereUniqueWithoutUserNoteInput | UserNoteTagUpsertWithWhereUniqueWithoutUserNoteInput[]
    createMany?: UserNoteTagCreateManyUserNoteInputEnvelope
    set?: UserNoteTagWhereUniqueInput | UserNoteTagWhereUniqueInput[]
    disconnect?: UserNoteTagWhereUniqueInput | UserNoteTagWhereUniqueInput[]
    delete?: UserNoteTagWhereUniqueInput | UserNoteTagWhereUniqueInput[]
    connect?: UserNoteTagWhereUniqueInput | UserNoteTagWhereUniqueInput[]
    update?: UserNoteTagUpdateWithWhereUniqueWithoutUserNoteInput | UserNoteTagUpdateWithWhereUniqueWithoutUserNoteInput[]
    updateMany?: UserNoteTagUpdateManyWithWhereWithoutUserNoteInput | UserNoteTagUpdateManyWithWhereWithoutUserNoteInput[]
    deleteMany?: UserNoteTagScalarWhereInput | UserNoteTagScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutUserNotesNestedInput = {
    create?: XOR<UserCreateWithoutUserNotesInput, UserUncheckedCreateWithoutUserNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserNotesInput
    upsert?: UserUpsertWithoutUserNotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserNotesInput, UserUpdateWithoutUserNotesInput>, UserUncheckedUpdateWithoutUserNotesInput>
  }

  export type UserNoteTagUncheckedUpdateManyWithoutUserNoteNestedInput = {
    create?: XOR<UserNoteTagCreateWithoutUserNoteInput, UserNoteTagUncheckedCreateWithoutUserNoteInput> | UserNoteTagCreateWithoutUserNoteInput[] | UserNoteTagUncheckedCreateWithoutUserNoteInput[]
    connectOrCreate?: UserNoteTagCreateOrConnectWithoutUserNoteInput | UserNoteTagCreateOrConnectWithoutUserNoteInput[]
    upsert?: UserNoteTagUpsertWithWhereUniqueWithoutUserNoteInput | UserNoteTagUpsertWithWhereUniqueWithoutUserNoteInput[]
    createMany?: UserNoteTagCreateManyUserNoteInputEnvelope
    set?: UserNoteTagWhereUniqueInput | UserNoteTagWhereUniqueInput[]
    disconnect?: UserNoteTagWhereUniqueInput | UserNoteTagWhereUniqueInput[]
    delete?: UserNoteTagWhereUniqueInput | UserNoteTagWhereUniqueInput[]
    connect?: UserNoteTagWhereUniqueInput | UserNoteTagWhereUniqueInput[]
    update?: UserNoteTagUpdateWithWhereUniqueWithoutUserNoteInput | UserNoteTagUpdateWithWhereUniqueWithoutUserNoteInput[]
    updateMany?: UserNoteTagUpdateManyWithWhereWithoutUserNoteInput | UserNoteTagUpdateManyWithWhereWithoutUserNoteInput[]
    deleteMany?: UserNoteTagScalarWhereInput | UserNoteTagScalarWhereInput[]
  }

  export type UserNoteCreateNestedOneWithoutNoteTagsInput = {
    create?: XOR<UserNoteCreateWithoutNoteTagsInput, UserNoteUncheckedCreateWithoutNoteTagsInput>
    connectOrCreate?: UserNoteCreateOrConnectWithoutNoteTagsInput
    connect?: UserNoteWhereUniqueInput
  }

  export type UserNoteUpdateOneRequiredWithoutNoteTagsNestedInput = {
    create?: XOR<UserNoteCreateWithoutNoteTagsInput, UserNoteUncheckedCreateWithoutNoteTagsInput>
    connectOrCreate?: UserNoteCreateOrConnectWithoutNoteTagsInput
    upsert?: UserNoteUpsertWithoutNoteTagsInput
    connect?: UserNoteWhereUniqueInput
    update?: XOR<XOR<UserNoteUpdateToOneWithWhereWithoutNoteTagsInput, UserNoteUpdateWithoutNoteTagsInput>, UserNoteUncheckedUpdateWithoutNoteTagsInput>
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

  export type UserSessionCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type UserSessionUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type UserSessionCreateOrConnectWithoutUserInput = {
    where: UserSessionWhereUniqueInput
    create: XOR<UserSessionCreateWithoutUserInput, UserSessionUncheckedCreateWithoutUserInput>
  }

  export type UserNoteCreateWithoutUserInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    noteTags?: UserNoteTagCreateNestedManyWithoutUserNoteInput
  }

  export type UserNoteUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    noteTags?: UserNoteTagUncheckedCreateNestedManyWithoutUserNoteInput
  }

  export type UserNoteCreateOrConnectWithoutUserInput = {
    where: UserNoteWhereUniqueInput
    create: XOR<UserNoteCreateWithoutUserInput, UserNoteUncheckedCreateWithoutUserInput>
  }

  export type UserNoteCreateManyUserInputEnvelope = {
    data: UserNoteCreateManyUserInput | UserNoteCreateManyUserInput[]
  }

  export type UserSessionUpsertWithoutUserInput = {
    update: XOR<UserSessionUpdateWithoutUserInput, UserSessionUncheckedUpdateWithoutUserInput>
    create: XOR<UserSessionCreateWithoutUserInput, UserSessionUncheckedCreateWithoutUserInput>
    where?: UserSessionWhereInput
  }

  export type UserSessionUpdateToOneWithWhereWithoutUserInput = {
    where?: UserSessionWhereInput
    data: XOR<UserSessionUpdateWithoutUserInput, UserSessionUncheckedUpdateWithoutUserInput>
  }

  export type UserSessionUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSessionUncheckedUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserNoteUpsertWithWhereUniqueWithoutUserInput = {
    where: UserNoteWhereUniqueInput
    update: XOR<UserNoteUpdateWithoutUserInput, UserNoteUncheckedUpdateWithoutUserInput>
    create: XOR<UserNoteCreateWithoutUserInput, UserNoteUncheckedCreateWithoutUserInput>
  }

  export type UserNoteUpdateWithWhereUniqueWithoutUserInput = {
    where: UserNoteWhereUniqueInput
    data: XOR<UserNoteUpdateWithoutUserInput, UserNoteUncheckedUpdateWithoutUserInput>
  }

  export type UserNoteUpdateManyWithWhereWithoutUserInput = {
    where: UserNoteScalarWhereInput
    data: XOR<UserNoteUpdateManyMutationInput, UserNoteUncheckedUpdateManyWithoutUserInput>
  }

  export type UserNoteScalarWhereInput = {
    AND?: UserNoteScalarWhereInput | UserNoteScalarWhereInput[]
    OR?: UserNoteScalarWhereInput[]
    NOT?: UserNoteScalarWhereInput | UserNoteScalarWhereInput[]
    id?: StringFilter<"UserNote"> | string
    title?: StringFilter<"UserNote"> | string
    content?: StringFilter<"UserNote"> | string
    createdAt?: DateTimeFilter<"UserNote"> | Date | string
    userId?: StringFilter<"UserNote"> | string
  }

  export type UserCreateWithoutUserSessionInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    userNotes?: UserNoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserSessionInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    userNotes?: UserNoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserSessionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserSessionInput, UserUncheckedCreateWithoutUserSessionInput>
  }

  export type UserUpsertWithoutUserSessionInput = {
    update: XOR<UserUpdateWithoutUserSessionInput, UserUncheckedUpdateWithoutUserSessionInput>
    create: XOR<UserCreateWithoutUserSessionInput, UserUncheckedCreateWithoutUserSessionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserSessionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserSessionInput, UserUncheckedUpdateWithoutUserSessionInput>
  }

  export type UserUpdateWithoutUserSessionInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userNotes?: UserNoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserSessionInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userNotes?: UserNoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserNoteTagCreateWithoutUserNoteInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type UserNoteTagUncheckedCreateWithoutUserNoteInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type UserNoteTagCreateOrConnectWithoutUserNoteInput = {
    where: UserNoteTagWhereUniqueInput
    create: XOR<UserNoteTagCreateWithoutUserNoteInput, UserNoteTagUncheckedCreateWithoutUserNoteInput>
  }

  export type UserNoteTagCreateManyUserNoteInputEnvelope = {
    data: UserNoteTagCreateManyUserNoteInput | UserNoteTagCreateManyUserNoteInput[]
  }

  export type UserCreateWithoutUserNotesInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    UserSession?: UserSessionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserNotesInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    UserSession?: UserSessionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserNotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserNotesInput, UserUncheckedCreateWithoutUserNotesInput>
  }

  export type UserNoteTagUpsertWithWhereUniqueWithoutUserNoteInput = {
    where: UserNoteTagWhereUniqueInput
    update: XOR<UserNoteTagUpdateWithoutUserNoteInput, UserNoteTagUncheckedUpdateWithoutUserNoteInput>
    create: XOR<UserNoteTagCreateWithoutUserNoteInput, UserNoteTagUncheckedCreateWithoutUserNoteInput>
  }

  export type UserNoteTagUpdateWithWhereUniqueWithoutUserNoteInput = {
    where: UserNoteTagWhereUniqueInput
    data: XOR<UserNoteTagUpdateWithoutUserNoteInput, UserNoteTagUncheckedUpdateWithoutUserNoteInput>
  }

  export type UserNoteTagUpdateManyWithWhereWithoutUserNoteInput = {
    where: UserNoteTagScalarWhereInput
    data: XOR<UserNoteTagUpdateManyMutationInput, UserNoteTagUncheckedUpdateManyWithoutUserNoteInput>
  }

  export type UserNoteTagScalarWhereInput = {
    AND?: UserNoteTagScalarWhereInput | UserNoteTagScalarWhereInput[]
    OR?: UserNoteTagScalarWhereInput[]
    NOT?: UserNoteTagScalarWhereInput | UserNoteTagScalarWhereInput[]
    id?: StringFilter<"UserNoteTag"> | string
    name?: StringFilter<"UserNoteTag"> | string
    createdAt?: DateTimeFilter<"UserNoteTag"> | Date | string
    noteId?: StringFilter<"UserNoteTag"> | string
  }

  export type UserUpsertWithoutUserNotesInput = {
    update: XOR<UserUpdateWithoutUserNotesInput, UserUncheckedUpdateWithoutUserNotesInput>
    create: XOR<UserCreateWithoutUserNotesInput, UserUncheckedCreateWithoutUserNotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserNotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserNotesInput, UserUncheckedUpdateWithoutUserNotesInput>
  }

  export type UserUpdateWithoutUserNotesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserSession?: UserSessionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserNotesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserSession?: UserSessionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserNoteCreateWithoutNoteTagsInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserNotesInput
  }

  export type UserNoteUncheckedCreateWithoutNoteTagsInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    userId: string
  }

  export type UserNoteCreateOrConnectWithoutNoteTagsInput = {
    where: UserNoteWhereUniqueInput
    create: XOR<UserNoteCreateWithoutNoteTagsInput, UserNoteUncheckedCreateWithoutNoteTagsInput>
  }

  export type UserNoteUpsertWithoutNoteTagsInput = {
    update: XOR<UserNoteUpdateWithoutNoteTagsInput, UserNoteUncheckedUpdateWithoutNoteTagsInput>
    create: XOR<UserNoteCreateWithoutNoteTagsInput, UserNoteUncheckedCreateWithoutNoteTagsInput>
    where?: UserNoteWhereInput
  }

  export type UserNoteUpdateToOneWithWhereWithoutNoteTagsInput = {
    where?: UserNoteWhereInput
    data: XOR<UserNoteUpdateWithoutNoteTagsInput, UserNoteUncheckedUpdateWithoutNoteTagsInput>
  }

  export type UserNoteUpdateWithoutNoteTagsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserNotesNestedInput
  }

  export type UserNoteUncheckedUpdateWithoutNoteTagsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserNoteCreateManyUserInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
  }

  export type UserNoteUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    noteTags?: UserNoteTagUpdateManyWithoutUserNoteNestedInput
  }

  export type UserNoteUncheckedUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    noteTags?: UserNoteTagUncheckedUpdateManyWithoutUserNoteNestedInput
  }

  export type UserNoteUncheckedUpdateManyWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserNoteTagCreateManyUserNoteInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type UserNoteTagUpdateWithoutUserNoteInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserNoteTagUncheckedUpdateWithoutUserNoteInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserNoteTagUncheckedUpdateManyWithoutUserNoteInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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