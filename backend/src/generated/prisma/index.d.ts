
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
 * Model MedicalHistory
 * 
 */
export type MedicalHistory = $Result.DefaultSelection<Prisma.$MedicalHistoryPayload>
/**
 * Model Allergies
 * 
 */
export type Allergies = $Result.DefaultSelection<Prisma.$AllergiesPayload>
/**
 * Model Symptoms
 * 
 */
export type Symptoms = $Result.DefaultSelection<Prisma.$SymptomsPayload>
/**
 * Model Hospital
 * 
 */
export type Hospital = $Result.DefaultSelection<Prisma.$HospitalPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more MedicalHistories
 * const medicalHistories = await prisma.medicalHistory.findMany()
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
   * // Fetch zero or more MedicalHistories
   * const medicalHistories = await prisma.medicalHistory.findMany()
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
   * `prisma.medicalHistory`: Exposes CRUD operations for the **MedicalHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MedicalHistories
    * const medicalHistories = await prisma.medicalHistory.findMany()
    * ```
    */
  get medicalHistory(): Prisma.MedicalHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.allergies`: Exposes CRUD operations for the **Allergies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Allergies
    * const allergies = await prisma.allergies.findMany()
    * ```
    */
  get allergies(): Prisma.AllergiesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.symptoms`: Exposes CRUD operations for the **Symptoms** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Symptoms
    * const symptoms = await prisma.symptoms.findMany()
    * ```
    */
  get symptoms(): Prisma.SymptomsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hospital`: Exposes CRUD operations for the **Hospital** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hospitals
    * const hospitals = await prisma.hospital.findMany()
    * ```
    */
  get hospital(): Prisma.HospitalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
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
    MedicalHistory: 'MedicalHistory',
    Allergies: 'Allergies',
    Symptoms: 'Symptoms',
    Hospital: 'Hospital',
    User: 'User'
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
      modelProps: "medicalHistory" | "allergies" | "symptoms" | "hospital" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      MedicalHistory: {
        payload: Prisma.$MedicalHistoryPayload<ExtArgs>
        fields: Prisma.MedicalHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicalHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicalHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalHistoryPayload>
          }
          findFirst: {
            args: Prisma.MedicalHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicalHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalHistoryPayload>
          }
          findMany: {
            args: Prisma.MedicalHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalHistoryPayload>[]
          }
          create: {
            args: Prisma.MedicalHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalHistoryPayload>
          }
          createMany: {
            args: Prisma.MedicalHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicalHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalHistoryPayload>[]
          }
          delete: {
            args: Prisma.MedicalHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalHistoryPayload>
          }
          update: {
            args: Prisma.MedicalHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalHistoryPayload>
          }
          deleteMany: {
            args: Prisma.MedicalHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicalHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicalHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalHistoryPayload>[]
          }
          upsert: {
            args: Prisma.MedicalHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalHistoryPayload>
          }
          aggregate: {
            args: Prisma.MedicalHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicalHistory>
          }
          groupBy: {
            args: Prisma.MedicalHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicalHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicalHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<MedicalHistoryCountAggregateOutputType> | number
          }
        }
      }
      Allergies: {
        payload: Prisma.$AllergiesPayload<ExtArgs>
        fields: Prisma.AllergiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AllergiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllergiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AllergiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllergiesPayload>
          }
          findFirst: {
            args: Prisma.AllergiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllergiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AllergiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllergiesPayload>
          }
          findMany: {
            args: Prisma.AllergiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllergiesPayload>[]
          }
          create: {
            args: Prisma.AllergiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllergiesPayload>
          }
          createMany: {
            args: Prisma.AllergiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AllergiesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllergiesPayload>[]
          }
          delete: {
            args: Prisma.AllergiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllergiesPayload>
          }
          update: {
            args: Prisma.AllergiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllergiesPayload>
          }
          deleteMany: {
            args: Prisma.AllergiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AllergiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AllergiesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllergiesPayload>[]
          }
          upsert: {
            args: Prisma.AllergiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllergiesPayload>
          }
          aggregate: {
            args: Prisma.AllergiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAllergies>
          }
          groupBy: {
            args: Prisma.AllergiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<AllergiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.AllergiesCountArgs<ExtArgs>
            result: $Utils.Optional<AllergiesCountAggregateOutputType> | number
          }
        }
      }
      Symptoms: {
        payload: Prisma.$SymptomsPayload<ExtArgs>
        fields: Prisma.SymptomsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SymptomsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SymptomsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomsPayload>
          }
          findFirst: {
            args: Prisma.SymptomsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SymptomsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomsPayload>
          }
          findMany: {
            args: Prisma.SymptomsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomsPayload>[]
          }
          create: {
            args: Prisma.SymptomsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomsPayload>
          }
          createMany: {
            args: Prisma.SymptomsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SymptomsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomsPayload>[]
          }
          delete: {
            args: Prisma.SymptomsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomsPayload>
          }
          update: {
            args: Prisma.SymptomsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomsPayload>
          }
          deleteMany: {
            args: Prisma.SymptomsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SymptomsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SymptomsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomsPayload>[]
          }
          upsert: {
            args: Prisma.SymptomsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomsPayload>
          }
          aggregate: {
            args: Prisma.SymptomsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSymptoms>
          }
          groupBy: {
            args: Prisma.SymptomsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SymptomsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SymptomsCountArgs<ExtArgs>
            result: $Utils.Optional<SymptomsCountAggregateOutputType> | number
          }
        }
      }
      Hospital: {
        payload: Prisma.$HospitalPayload<ExtArgs>
        fields: Prisma.HospitalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HospitalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HospitalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          findFirst: {
            args: Prisma.HospitalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HospitalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          findMany: {
            args: Prisma.HospitalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>[]
          }
          create: {
            args: Prisma.HospitalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          createMany: {
            args: Prisma.HospitalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HospitalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>[]
          }
          delete: {
            args: Prisma.HospitalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          update: {
            args: Prisma.HospitalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          deleteMany: {
            args: Prisma.HospitalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HospitalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HospitalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>[]
          }
          upsert: {
            args: Prisma.HospitalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          aggregate: {
            args: Prisma.HospitalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHospital>
          }
          groupBy: {
            args: Prisma.HospitalGroupByArgs<ExtArgs>
            result: $Utils.Optional<HospitalGroupByOutputType>[]
          }
          count: {
            args: Prisma.HospitalCountArgs<ExtArgs>
            result: $Utils.Optional<HospitalCountAggregateOutputType> | number
          }
        }
      }
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
    medicalHistory?: MedicalHistoryOmit
    allergies?: AllergiesOmit
    symptoms?: SymptomsOmit
    hospital?: HospitalOmit
    user?: UserOmit
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
   * Count Type MedicalHistoryCountOutputType
   */

  export type MedicalHistoryCountOutputType = {
    symptoms: number
  }

  export type MedicalHistoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    symptoms?: boolean | MedicalHistoryCountOutputTypeCountSymptomsArgs
  }

  // Custom InputTypes
  /**
   * MedicalHistoryCountOutputType without action
   */
  export type MedicalHistoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistoryCountOutputType
     */
    select?: MedicalHistoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MedicalHistoryCountOutputType without action
   */
  export type MedicalHistoryCountOutputTypeCountSymptomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SymptomsWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    symptoms: number
    allergies: number
    medicalHistory: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    symptoms?: boolean | UserCountOutputTypeCountSymptomsArgs
    allergies?: boolean | UserCountOutputTypeCountAllergiesArgs
    medicalHistory?: boolean | UserCountOutputTypeCountMedicalHistoryArgs
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
  export type UserCountOutputTypeCountSymptomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SymptomsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAllergiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AllergiesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMedicalHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model MedicalHistory
   */

  export type AggregateMedicalHistory = {
    _count: MedicalHistoryCountAggregateOutputType | null
    _avg: MedicalHistoryAvgAggregateOutputType | null
    _sum: MedicalHistorySumAggregateOutputType | null
    _min: MedicalHistoryMinAggregateOutputType | null
    _max: MedicalHistoryMaxAggregateOutputType | null
  }

  export type MedicalHistoryAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type MedicalHistorySumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type MedicalHistoryMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
    condition: string | null
    diagnosisDate: Date | null
    medications: string | null
    notes: string | null
  }

  export type MedicalHistoryMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
    condition: string | null
    diagnosisDate: Date | null
    medications: string | null
    notes: string | null
  }

  export type MedicalHistoryCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    userId: number
    condition: number
    diagnosisDate: number
    medications: number
    notes: number
    _all: number
  }


  export type MedicalHistoryAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type MedicalHistorySumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type MedicalHistoryMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    condition?: true
    diagnosisDate?: true
    medications?: true
    notes?: true
  }

  export type MedicalHistoryMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    condition?: true
    diagnosisDate?: true
    medications?: true
    notes?: true
  }

  export type MedicalHistoryCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    condition?: true
    diagnosisDate?: true
    medications?: true
    notes?: true
    _all?: true
  }

  export type MedicalHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalHistory to aggregate.
     */
    where?: MedicalHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalHistories to fetch.
     */
    orderBy?: MedicalHistoryOrderByWithRelationInput | MedicalHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicalHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MedicalHistories
    **/
    _count?: true | MedicalHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicalHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicalHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicalHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicalHistoryMaxAggregateInputType
  }

  export type GetMedicalHistoryAggregateType<T extends MedicalHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicalHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicalHistory[P]>
      : GetScalarType<T[P], AggregateMedicalHistory[P]>
  }




  export type MedicalHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalHistoryWhereInput
    orderBy?: MedicalHistoryOrderByWithAggregationInput | MedicalHistoryOrderByWithAggregationInput[]
    by: MedicalHistoryScalarFieldEnum[] | MedicalHistoryScalarFieldEnum
    having?: MedicalHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicalHistoryCountAggregateInputType | true
    _avg?: MedicalHistoryAvgAggregateInputType
    _sum?: MedicalHistorySumAggregateInputType
    _min?: MedicalHistoryMinAggregateInputType
    _max?: MedicalHistoryMaxAggregateInputType
  }

  export type MedicalHistoryGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    userId: number
    condition: string
    diagnosisDate: Date
    medications: string | null
    notes: string | null
    _count: MedicalHistoryCountAggregateOutputType | null
    _avg: MedicalHistoryAvgAggregateOutputType | null
    _sum: MedicalHistorySumAggregateOutputType | null
    _min: MedicalHistoryMinAggregateOutputType | null
    _max: MedicalHistoryMaxAggregateOutputType | null
  }

  type GetMedicalHistoryGroupByPayload<T extends MedicalHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicalHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicalHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicalHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], MedicalHistoryGroupByOutputType[P]>
        }
      >
    >


  export type MedicalHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    condition?: boolean
    diagnosisDate?: boolean
    medications?: boolean
    notes?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    symptoms?: boolean | MedicalHistory$symptomsArgs<ExtArgs>
    _count?: boolean | MedicalHistoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalHistory"]>

  export type MedicalHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    condition?: boolean
    diagnosisDate?: boolean
    medications?: boolean
    notes?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalHistory"]>

  export type MedicalHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    condition?: boolean
    diagnosisDate?: boolean
    medications?: boolean
    notes?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalHistory"]>

  export type MedicalHistorySelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    condition?: boolean
    diagnosisDate?: boolean
    medications?: boolean
    notes?: boolean
  }

  export type MedicalHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "userId" | "condition" | "diagnosisDate" | "medications" | "notes", ExtArgs["result"]["medicalHistory"]>
  export type MedicalHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    symptoms?: boolean | MedicalHistory$symptomsArgs<ExtArgs>
    _count?: boolean | MedicalHistoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MedicalHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MedicalHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MedicalHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MedicalHistory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      symptoms: Prisma.$SymptomsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      userId: number
      condition: string
      diagnosisDate: Date
      medications: string | null
      notes: string | null
    }, ExtArgs["result"]["medicalHistory"]>
    composites: {}
  }

  type MedicalHistoryGetPayload<S extends boolean | null | undefined | MedicalHistoryDefaultArgs> = $Result.GetResult<Prisma.$MedicalHistoryPayload, S>

  type MedicalHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicalHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicalHistoryCountAggregateInputType | true
    }

  export interface MedicalHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MedicalHistory'], meta: { name: 'MedicalHistory' } }
    /**
     * Find zero or one MedicalHistory that matches the filter.
     * @param {MedicalHistoryFindUniqueArgs} args - Arguments to find a MedicalHistory
     * @example
     * // Get one MedicalHistory
     * const medicalHistory = await prisma.medicalHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicalHistoryFindUniqueArgs>(args: SelectSubset<T, MedicalHistoryFindUniqueArgs<ExtArgs>>): Prisma__MedicalHistoryClient<$Result.GetResult<Prisma.$MedicalHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MedicalHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicalHistoryFindUniqueOrThrowArgs} args - Arguments to find a MedicalHistory
     * @example
     * // Get one MedicalHistory
     * const medicalHistory = await prisma.medicalHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicalHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicalHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicalHistoryClient<$Result.GetResult<Prisma.$MedicalHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicalHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalHistoryFindFirstArgs} args - Arguments to find a MedicalHistory
     * @example
     * // Get one MedicalHistory
     * const medicalHistory = await prisma.medicalHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicalHistoryFindFirstArgs>(args?: SelectSubset<T, MedicalHistoryFindFirstArgs<ExtArgs>>): Prisma__MedicalHistoryClient<$Result.GetResult<Prisma.$MedicalHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicalHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalHistoryFindFirstOrThrowArgs} args - Arguments to find a MedicalHistory
     * @example
     * // Get one MedicalHistory
     * const medicalHistory = await prisma.medicalHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicalHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicalHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicalHistoryClient<$Result.GetResult<Prisma.$MedicalHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MedicalHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MedicalHistories
     * const medicalHistories = await prisma.medicalHistory.findMany()
     * 
     * // Get first 10 MedicalHistories
     * const medicalHistories = await prisma.medicalHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicalHistoryWithIdOnly = await prisma.medicalHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicalHistoryFindManyArgs>(args?: SelectSubset<T, MedicalHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MedicalHistory.
     * @param {MedicalHistoryCreateArgs} args - Arguments to create a MedicalHistory.
     * @example
     * // Create one MedicalHistory
     * const MedicalHistory = await prisma.medicalHistory.create({
     *   data: {
     *     // ... data to create a MedicalHistory
     *   }
     * })
     * 
     */
    create<T extends MedicalHistoryCreateArgs>(args: SelectSubset<T, MedicalHistoryCreateArgs<ExtArgs>>): Prisma__MedicalHistoryClient<$Result.GetResult<Prisma.$MedicalHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MedicalHistories.
     * @param {MedicalHistoryCreateManyArgs} args - Arguments to create many MedicalHistories.
     * @example
     * // Create many MedicalHistories
     * const medicalHistory = await prisma.medicalHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicalHistoryCreateManyArgs>(args?: SelectSubset<T, MedicalHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MedicalHistories and returns the data saved in the database.
     * @param {MedicalHistoryCreateManyAndReturnArgs} args - Arguments to create many MedicalHistories.
     * @example
     * // Create many MedicalHistories
     * const medicalHistory = await prisma.medicalHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MedicalHistories and only return the `id`
     * const medicalHistoryWithIdOnly = await prisma.medicalHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicalHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicalHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MedicalHistory.
     * @param {MedicalHistoryDeleteArgs} args - Arguments to delete one MedicalHistory.
     * @example
     * // Delete one MedicalHistory
     * const MedicalHistory = await prisma.medicalHistory.delete({
     *   where: {
     *     // ... filter to delete one MedicalHistory
     *   }
     * })
     * 
     */
    delete<T extends MedicalHistoryDeleteArgs>(args: SelectSubset<T, MedicalHistoryDeleteArgs<ExtArgs>>): Prisma__MedicalHistoryClient<$Result.GetResult<Prisma.$MedicalHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MedicalHistory.
     * @param {MedicalHistoryUpdateArgs} args - Arguments to update one MedicalHistory.
     * @example
     * // Update one MedicalHistory
     * const medicalHistory = await prisma.medicalHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicalHistoryUpdateArgs>(args: SelectSubset<T, MedicalHistoryUpdateArgs<ExtArgs>>): Prisma__MedicalHistoryClient<$Result.GetResult<Prisma.$MedicalHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MedicalHistories.
     * @param {MedicalHistoryDeleteManyArgs} args - Arguments to filter MedicalHistories to delete.
     * @example
     * // Delete a few MedicalHistories
     * const { count } = await prisma.medicalHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicalHistoryDeleteManyArgs>(args?: SelectSubset<T, MedicalHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicalHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MedicalHistories
     * const medicalHistory = await prisma.medicalHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicalHistoryUpdateManyArgs>(args: SelectSubset<T, MedicalHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicalHistories and returns the data updated in the database.
     * @param {MedicalHistoryUpdateManyAndReturnArgs} args - Arguments to update many MedicalHistories.
     * @example
     * // Update many MedicalHistories
     * const medicalHistory = await prisma.medicalHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MedicalHistories and only return the `id`
     * const medicalHistoryWithIdOnly = await prisma.medicalHistory.updateManyAndReturn({
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
    updateManyAndReturn<T extends MedicalHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicalHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MedicalHistory.
     * @param {MedicalHistoryUpsertArgs} args - Arguments to update or create a MedicalHistory.
     * @example
     * // Update or create a MedicalHistory
     * const medicalHistory = await prisma.medicalHistory.upsert({
     *   create: {
     *     // ... data to create a MedicalHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MedicalHistory we want to update
     *   }
     * })
     */
    upsert<T extends MedicalHistoryUpsertArgs>(args: SelectSubset<T, MedicalHistoryUpsertArgs<ExtArgs>>): Prisma__MedicalHistoryClient<$Result.GetResult<Prisma.$MedicalHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MedicalHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalHistoryCountArgs} args - Arguments to filter MedicalHistories to count.
     * @example
     * // Count the number of MedicalHistories
     * const count = await prisma.medicalHistory.count({
     *   where: {
     *     // ... the filter for the MedicalHistories we want to count
     *   }
     * })
    **/
    count<T extends MedicalHistoryCountArgs>(
      args?: Subset<T, MedicalHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicalHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MedicalHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MedicalHistoryAggregateArgs>(args: Subset<T, MedicalHistoryAggregateArgs>): Prisma.PrismaPromise<GetMedicalHistoryAggregateType<T>>

    /**
     * Group by MedicalHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalHistoryGroupByArgs} args - Group by arguments.
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
      T extends MedicalHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicalHistoryGroupByArgs['orderBy'] }
        : { orderBy?: MedicalHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MedicalHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicalHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MedicalHistory model
   */
  readonly fields: MedicalHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MedicalHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicalHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    symptoms<T extends MedicalHistory$symptomsArgs<ExtArgs> = {}>(args?: Subset<T, MedicalHistory$symptomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SymptomsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the MedicalHistory model
   */
  interface MedicalHistoryFieldRefs {
    readonly id: FieldRef<"MedicalHistory", 'Int'>
    readonly createdAt: FieldRef<"MedicalHistory", 'DateTime'>
    readonly updatedAt: FieldRef<"MedicalHistory", 'DateTime'>
    readonly userId: FieldRef<"MedicalHistory", 'Int'>
    readonly condition: FieldRef<"MedicalHistory", 'String'>
    readonly diagnosisDate: FieldRef<"MedicalHistory", 'DateTime'>
    readonly medications: FieldRef<"MedicalHistory", 'String'>
    readonly notes: FieldRef<"MedicalHistory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MedicalHistory findUnique
   */
  export type MedicalHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryInclude<ExtArgs> | null
    /**
     * Filter, which MedicalHistory to fetch.
     */
    where: MedicalHistoryWhereUniqueInput
  }

  /**
   * MedicalHistory findUniqueOrThrow
   */
  export type MedicalHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryInclude<ExtArgs> | null
    /**
     * Filter, which MedicalHistory to fetch.
     */
    where: MedicalHistoryWhereUniqueInput
  }

  /**
   * MedicalHistory findFirst
   */
  export type MedicalHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryInclude<ExtArgs> | null
    /**
     * Filter, which MedicalHistory to fetch.
     */
    where?: MedicalHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalHistories to fetch.
     */
    orderBy?: MedicalHistoryOrderByWithRelationInput | MedicalHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalHistories.
     */
    cursor?: MedicalHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalHistories.
     */
    distinct?: MedicalHistoryScalarFieldEnum | MedicalHistoryScalarFieldEnum[]
  }

  /**
   * MedicalHistory findFirstOrThrow
   */
  export type MedicalHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryInclude<ExtArgs> | null
    /**
     * Filter, which MedicalHistory to fetch.
     */
    where?: MedicalHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalHistories to fetch.
     */
    orderBy?: MedicalHistoryOrderByWithRelationInput | MedicalHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalHistories.
     */
    cursor?: MedicalHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalHistories.
     */
    distinct?: MedicalHistoryScalarFieldEnum | MedicalHistoryScalarFieldEnum[]
  }

  /**
   * MedicalHistory findMany
   */
  export type MedicalHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryInclude<ExtArgs> | null
    /**
     * Filter, which MedicalHistories to fetch.
     */
    where?: MedicalHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalHistories to fetch.
     */
    orderBy?: MedicalHistoryOrderByWithRelationInput | MedicalHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MedicalHistories.
     */
    cursor?: MedicalHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalHistories.
     */
    skip?: number
    distinct?: MedicalHistoryScalarFieldEnum | MedicalHistoryScalarFieldEnum[]
  }

  /**
   * MedicalHistory create
   */
  export type MedicalHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a MedicalHistory.
     */
    data: XOR<MedicalHistoryCreateInput, MedicalHistoryUncheckedCreateInput>
  }

  /**
   * MedicalHistory createMany
   */
  export type MedicalHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MedicalHistories.
     */
    data: MedicalHistoryCreateManyInput | MedicalHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MedicalHistory createManyAndReturn
   */
  export type MedicalHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many MedicalHistories.
     */
    data: MedicalHistoryCreateManyInput | MedicalHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicalHistory update
   */
  export type MedicalHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a MedicalHistory.
     */
    data: XOR<MedicalHistoryUpdateInput, MedicalHistoryUncheckedUpdateInput>
    /**
     * Choose, which MedicalHistory to update.
     */
    where: MedicalHistoryWhereUniqueInput
  }

  /**
   * MedicalHistory updateMany
   */
  export type MedicalHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MedicalHistories.
     */
    data: XOR<MedicalHistoryUpdateManyMutationInput, MedicalHistoryUncheckedUpdateManyInput>
    /**
     * Filter which MedicalHistories to update
     */
    where?: MedicalHistoryWhereInput
    /**
     * Limit how many MedicalHistories to update.
     */
    limit?: number
  }

  /**
   * MedicalHistory updateManyAndReturn
   */
  export type MedicalHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * The data used to update MedicalHistories.
     */
    data: XOR<MedicalHistoryUpdateManyMutationInput, MedicalHistoryUncheckedUpdateManyInput>
    /**
     * Filter which MedicalHistories to update
     */
    where?: MedicalHistoryWhereInput
    /**
     * Limit how many MedicalHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicalHistory upsert
   */
  export type MedicalHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the MedicalHistory to update in case it exists.
     */
    where: MedicalHistoryWhereUniqueInput
    /**
     * In case the MedicalHistory found by the `where` argument doesn't exist, create a new MedicalHistory with this data.
     */
    create: XOR<MedicalHistoryCreateInput, MedicalHistoryUncheckedCreateInput>
    /**
     * In case the MedicalHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicalHistoryUpdateInput, MedicalHistoryUncheckedUpdateInput>
  }

  /**
   * MedicalHistory delete
   */
  export type MedicalHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryInclude<ExtArgs> | null
    /**
     * Filter which MedicalHistory to delete.
     */
    where: MedicalHistoryWhereUniqueInput
  }

  /**
   * MedicalHistory deleteMany
   */
  export type MedicalHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalHistories to delete
     */
    where?: MedicalHistoryWhereInput
    /**
     * Limit how many MedicalHistories to delete.
     */
    limit?: number
  }

  /**
   * MedicalHistory.symptoms
   */
  export type MedicalHistory$symptomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Symptoms
     */
    select?: SymptomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Symptoms
     */
    omit?: SymptomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomsInclude<ExtArgs> | null
    where?: SymptomsWhereInput
    orderBy?: SymptomsOrderByWithRelationInput | SymptomsOrderByWithRelationInput[]
    cursor?: SymptomsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SymptomsScalarFieldEnum | SymptomsScalarFieldEnum[]
  }

  /**
   * MedicalHistory without action
   */
  export type MedicalHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryInclude<ExtArgs> | null
  }


  /**
   * Model Allergies
   */

  export type AggregateAllergies = {
    _count: AllergiesCountAggregateOutputType | null
    _avg: AllergiesAvgAggregateOutputType | null
    _sum: AllergiesSumAggregateOutputType | null
    _min: AllergiesMinAggregateOutputType | null
    _max: AllergiesMaxAggregateOutputType | null
  }

  export type AllergiesAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    severity: number | null
  }

  export type AllergiesSumAggregateOutputType = {
    id: number | null
    userId: number | null
    severity: number | null
  }

  export type AllergiesMinAggregateOutputType = {
    id: number | null
    userId: number | null
    trigger: string | null
    severity: number | null
    reaction: string | null
    notes: string | null
    date: Date | null
  }

  export type AllergiesMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    trigger: string | null
    severity: number | null
    reaction: string | null
    notes: string | null
    date: Date | null
  }

  export type AllergiesCountAggregateOutputType = {
    id: number
    userId: number
    trigger: number
    severity: number
    reaction: number
    notes: number
    date: number
    _all: number
  }


  export type AllergiesAvgAggregateInputType = {
    id?: true
    userId?: true
    severity?: true
  }

  export type AllergiesSumAggregateInputType = {
    id?: true
    userId?: true
    severity?: true
  }

  export type AllergiesMinAggregateInputType = {
    id?: true
    userId?: true
    trigger?: true
    severity?: true
    reaction?: true
    notes?: true
    date?: true
  }

  export type AllergiesMaxAggregateInputType = {
    id?: true
    userId?: true
    trigger?: true
    severity?: true
    reaction?: true
    notes?: true
    date?: true
  }

  export type AllergiesCountAggregateInputType = {
    id?: true
    userId?: true
    trigger?: true
    severity?: true
    reaction?: true
    notes?: true
    date?: true
    _all?: true
  }

  export type AllergiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Allergies to aggregate.
     */
    where?: AllergiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Allergies to fetch.
     */
    orderBy?: AllergiesOrderByWithRelationInput | AllergiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AllergiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Allergies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Allergies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Allergies
    **/
    _count?: true | AllergiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AllergiesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AllergiesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AllergiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AllergiesMaxAggregateInputType
  }

  export type GetAllergiesAggregateType<T extends AllergiesAggregateArgs> = {
        [P in keyof T & keyof AggregateAllergies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAllergies[P]>
      : GetScalarType<T[P], AggregateAllergies[P]>
  }




  export type AllergiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AllergiesWhereInput
    orderBy?: AllergiesOrderByWithAggregationInput | AllergiesOrderByWithAggregationInput[]
    by: AllergiesScalarFieldEnum[] | AllergiesScalarFieldEnum
    having?: AllergiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AllergiesCountAggregateInputType | true
    _avg?: AllergiesAvgAggregateInputType
    _sum?: AllergiesSumAggregateInputType
    _min?: AllergiesMinAggregateInputType
    _max?: AllergiesMaxAggregateInputType
  }

  export type AllergiesGroupByOutputType = {
    id: number
    userId: number
    trigger: string
    severity: number
    reaction: string
    notes: string | null
    date: Date
    _count: AllergiesCountAggregateOutputType | null
    _avg: AllergiesAvgAggregateOutputType | null
    _sum: AllergiesSumAggregateOutputType | null
    _min: AllergiesMinAggregateOutputType | null
    _max: AllergiesMaxAggregateOutputType | null
  }

  type GetAllergiesGroupByPayload<T extends AllergiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AllergiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AllergiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AllergiesGroupByOutputType[P]>
            : GetScalarType<T[P], AllergiesGroupByOutputType[P]>
        }
      >
    >


  export type AllergiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    trigger?: boolean
    severity?: boolean
    reaction?: boolean
    notes?: boolean
    date?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["allergies"]>

  export type AllergiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    trigger?: boolean
    severity?: boolean
    reaction?: boolean
    notes?: boolean
    date?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["allergies"]>

  export type AllergiesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    trigger?: boolean
    severity?: boolean
    reaction?: boolean
    notes?: boolean
    date?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["allergies"]>

  export type AllergiesSelectScalar = {
    id?: boolean
    userId?: boolean
    trigger?: boolean
    severity?: boolean
    reaction?: boolean
    notes?: boolean
    date?: boolean
  }

  export type AllergiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "trigger" | "severity" | "reaction" | "notes" | "date", ExtArgs["result"]["allergies"]>
  export type AllergiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AllergiesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AllergiesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AllergiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Allergies"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      trigger: string
      severity: number
      reaction: string
      notes: string | null
      date: Date
    }, ExtArgs["result"]["allergies"]>
    composites: {}
  }

  type AllergiesGetPayload<S extends boolean | null | undefined | AllergiesDefaultArgs> = $Result.GetResult<Prisma.$AllergiesPayload, S>

  type AllergiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AllergiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AllergiesCountAggregateInputType | true
    }

  export interface AllergiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Allergies'], meta: { name: 'Allergies' } }
    /**
     * Find zero or one Allergies that matches the filter.
     * @param {AllergiesFindUniqueArgs} args - Arguments to find a Allergies
     * @example
     * // Get one Allergies
     * const allergies = await prisma.allergies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AllergiesFindUniqueArgs>(args: SelectSubset<T, AllergiesFindUniqueArgs<ExtArgs>>): Prisma__AllergiesClient<$Result.GetResult<Prisma.$AllergiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Allergies that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AllergiesFindUniqueOrThrowArgs} args - Arguments to find a Allergies
     * @example
     * // Get one Allergies
     * const allergies = await prisma.allergies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AllergiesFindUniqueOrThrowArgs>(args: SelectSubset<T, AllergiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AllergiesClient<$Result.GetResult<Prisma.$AllergiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Allergies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllergiesFindFirstArgs} args - Arguments to find a Allergies
     * @example
     * // Get one Allergies
     * const allergies = await prisma.allergies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AllergiesFindFirstArgs>(args?: SelectSubset<T, AllergiesFindFirstArgs<ExtArgs>>): Prisma__AllergiesClient<$Result.GetResult<Prisma.$AllergiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Allergies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllergiesFindFirstOrThrowArgs} args - Arguments to find a Allergies
     * @example
     * // Get one Allergies
     * const allergies = await prisma.allergies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AllergiesFindFirstOrThrowArgs>(args?: SelectSubset<T, AllergiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__AllergiesClient<$Result.GetResult<Prisma.$AllergiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Allergies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllergiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Allergies
     * const allergies = await prisma.allergies.findMany()
     * 
     * // Get first 10 Allergies
     * const allergies = await prisma.allergies.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const allergiesWithIdOnly = await prisma.allergies.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AllergiesFindManyArgs>(args?: SelectSubset<T, AllergiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllergiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Allergies.
     * @param {AllergiesCreateArgs} args - Arguments to create a Allergies.
     * @example
     * // Create one Allergies
     * const Allergies = await prisma.allergies.create({
     *   data: {
     *     // ... data to create a Allergies
     *   }
     * })
     * 
     */
    create<T extends AllergiesCreateArgs>(args: SelectSubset<T, AllergiesCreateArgs<ExtArgs>>): Prisma__AllergiesClient<$Result.GetResult<Prisma.$AllergiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Allergies.
     * @param {AllergiesCreateManyArgs} args - Arguments to create many Allergies.
     * @example
     * // Create many Allergies
     * const allergies = await prisma.allergies.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AllergiesCreateManyArgs>(args?: SelectSubset<T, AllergiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Allergies and returns the data saved in the database.
     * @param {AllergiesCreateManyAndReturnArgs} args - Arguments to create many Allergies.
     * @example
     * // Create many Allergies
     * const allergies = await prisma.allergies.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Allergies and only return the `id`
     * const allergiesWithIdOnly = await prisma.allergies.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AllergiesCreateManyAndReturnArgs>(args?: SelectSubset<T, AllergiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllergiesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Allergies.
     * @param {AllergiesDeleteArgs} args - Arguments to delete one Allergies.
     * @example
     * // Delete one Allergies
     * const Allergies = await prisma.allergies.delete({
     *   where: {
     *     // ... filter to delete one Allergies
     *   }
     * })
     * 
     */
    delete<T extends AllergiesDeleteArgs>(args: SelectSubset<T, AllergiesDeleteArgs<ExtArgs>>): Prisma__AllergiesClient<$Result.GetResult<Prisma.$AllergiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Allergies.
     * @param {AllergiesUpdateArgs} args - Arguments to update one Allergies.
     * @example
     * // Update one Allergies
     * const allergies = await prisma.allergies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AllergiesUpdateArgs>(args: SelectSubset<T, AllergiesUpdateArgs<ExtArgs>>): Prisma__AllergiesClient<$Result.GetResult<Prisma.$AllergiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Allergies.
     * @param {AllergiesDeleteManyArgs} args - Arguments to filter Allergies to delete.
     * @example
     * // Delete a few Allergies
     * const { count } = await prisma.allergies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AllergiesDeleteManyArgs>(args?: SelectSubset<T, AllergiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Allergies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllergiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Allergies
     * const allergies = await prisma.allergies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AllergiesUpdateManyArgs>(args: SelectSubset<T, AllergiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Allergies and returns the data updated in the database.
     * @param {AllergiesUpdateManyAndReturnArgs} args - Arguments to update many Allergies.
     * @example
     * // Update many Allergies
     * const allergies = await prisma.allergies.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Allergies and only return the `id`
     * const allergiesWithIdOnly = await prisma.allergies.updateManyAndReturn({
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
    updateManyAndReturn<T extends AllergiesUpdateManyAndReturnArgs>(args: SelectSubset<T, AllergiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllergiesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Allergies.
     * @param {AllergiesUpsertArgs} args - Arguments to update or create a Allergies.
     * @example
     * // Update or create a Allergies
     * const allergies = await prisma.allergies.upsert({
     *   create: {
     *     // ... data to create a Allergies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Allergies we want to update
     *   }
     * })
     */
    upsert<T extends AllergiesUpsertArgs>(args: SelectSubset<T, AllergiesUpsertArgs<ExtArgs>>): Prisma__AllergiesClient<$Result.GetResult<Prisma.$AllergiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Allergies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllergiesCountArgs} args - Arguments to filter Allergies to count.
     * @example
     * // Count the number of Allergies
     * const count = await prisma.allergies.count({
     *   where: {
     *     // ... the filter for the Allergies we want to count
     *   }
     * })
    **/
    count<T extends AllergiesCountArgs>(
      args?: Subset<T, AllergiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AllergiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Allergies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllergiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AllergiesAggregateArgs>(args: Subset<T, AllergiesAggregateArgs>): Prisma.PrismaPromise<GetAllergiesAggregateType<T>>

    /**
     * Group by Allergies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllergiesGroupByArgs} args - Group by arguments.
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
      T extends AllergiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AllergiesGroupByArgs['orderBy'] }
        : { orderBy?: AllergiesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AllergiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAllergiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Allergies model
   */
  readonly fields: AllergiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Allergies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AllergiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Allergies model
   */
  interface AllergiesFieldRefs {
    readonly id: FieldRef<"Allergies", 'Int'>
    readonly userId: FieldRef<"Allergies", 'Int'>
    readonly trigger: FieldRef<"Allergies", 'String'>
    readonly severity: FieldRef<"Allergies", 'Int'>
    readonly reaction: FieldRef<"Allergies", 'String'>
    readonly notes: FieldRef<"Allergies", 'String'>
    readonly date: FieldRef<"Allergies", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Allergies findUnique
   */
  export type AllergiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergies
     */
    select?: AllergiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allergies
     */
    omit?: AllergiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllergiesInclude<ExtArgs> | null
    /**
     * Filter, which Allergies to fetch.
     */
    where: AllergiesWhereUniqueInput
  }

  /**
   * Allergies findUniqueOrThrow
   */
  export type AllergiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergies
     */
    select?: AllergiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allergies
     */
    omit?: AllergiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllergiesInclude<ExtArgs> | null
    /**
     * Filter, which Allergies to fetch.
     */
    where: AllergiesWhereUniqueInput
  }

  /**
   * Allergies findFirst
   */
  export type AllergiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergies
     */
    select?: AllergiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allergies
     */
    omit?: AllergiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllergiesInclude<ExtArgs> | null
    /**
     * Filter, which Allergies to fetch.
     */
    where?: AllergiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Allergies to fetch.
     */
    orderBy?: AllergiesOrderByWithRelationInput | AllergiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Allergies.
     */
    cursor?: AllergiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Allergies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Allergies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Allergies.
     */
    distinct?: AllergiesScalarFieldEnum | AllergiesScalarFieldEnum[]
  }

  /**
   * Allergies findFirstOrThrow
   */
  export type AllergiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergies
     */
    select?: AllergiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allergies
     */
    omit?: AllergiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllergiesInclude<ExtArgs> | null
    /**
     * Filter, which Allergies to fetch.
     */
    where?: AllergiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Allergies to fetch.
     */
    orderBy?: AllergiesOrderByWithRelationInput | AllergiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Allergies.
     */
    cursor?: AllergiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Allergies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Allergies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Allergies.
     */
    distinct?: AllergiesScalarFieldEnum | AllergiesScalarFieldEnum[]
  }

  /**
   * Allergies findMany
   */
  export type AllergiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergies
     */
    select?: AllergiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allergies
     */
    omit?: AllergiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllergiesInclude<ExtArgs> | null
    /**
     * Filter, which Allergies to fetch.
     */
    where?: AllergiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Allergies to fetch.
     */
    orderBy?: AllergiesOrderByWithRelationInput | AllergiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Allergies.
     */
    cursor?: AllergiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Allergies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Allergies.
     */
    skip?: number
    distinct?: AllergiesScalarFieldEnum | AllergiesScalarFieldEnum[]
  }

  /**
   * Allergies create
   */
  export type AllergiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergies
     */
    select?: AllergiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allergies
     */
    omit?: AllergiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllergiesInclude<ExtArgs> | null
    /**
     * The data needed to create a Allergies.
     */
    data: XOR<AllergiesCreateInput, AllergiesUncheckedCreateInput>
  }

  /**
   * Allergies createMany
   */
  export type AllergiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Allergies.
     */
    data: AllergiesCreateManyInput | AllergiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Allergies createManyAndReturn
   */
  export type AllergiesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergies
     */
    select?: AllergiesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Allergies
     */
    omit?: AllergiesOmit<ExtArgs> | null
    /**
     * The data used to create many Allergies.
     */
    data: AllergiesCreateManyInput | AllergiesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllergiesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Allergies update
   */
  export type AllergiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergies
     */
    select?: AllergiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allergies
     */
    omit?: AllergiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllergiesInclude<ExtArgs> | null
    /**
     * The data needed to update a Allergies.
     */
    data: XOR<AllergiesUpdateInput, AllergiesUncheckedUpdateInput>
    /**
     * Choose, which Allergies to update.
     */
    where: AllergiesWhereUniqueInput
  }

  /**
   * Allergies updateMany
   */
  export type AllergiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Allergies.
     */
    data: XOR<AllergiesUpdateManyMutationInput, AllergiesUncheckedUpdateManyInput>
    /**
     * Filter which Allergies to update
     */
    where?: AllergiesWhereInput
    /**
     * Limit how many Allergies to update.
     */
    limit?: number
  }

  /**
   * Allergies updateManyAndReturn
   */
  export type AllergiesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergies
     */
    select?: AllergiesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Allergies
     */
    omit?: AllergiesOmit<ExtArgs> | null
    /**
     * The data used to update Allergies.
     */
    data: XOR<AllergiesUpdateManyMutationInput, AllergiesUncheckedUpdateManyInput>
    /**
     * Filter which Allergies to update
     */
    where?: AllergiesWhereInput
    /**
     * Limit how many Allergies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllergiesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Allergies upsert
   */
  export type AllergiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergies
     */
    select?: AllergiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allergies
     */
    omit?: AllergiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllergiesInclude<ExtArgs> | null
    /**
     * The filter to search for the Allergies to update in case it exists.
     */
    where: AllergiesWhereUniqueInput
    /**
     * In case the Allergies found by the `where` argument doesn't exist, create a new Allergies with this data.
     */
    create: XOR<AllergiesCreateInput, AllergiesUncheckedCreateInput>
    /**
     * In case the Allergies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AllergiesUpdateInput, AllergiesUncheckedUpdateInput>
  }

  /**
   * Allergies delete
   */
  export type AllergiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergies
     */
    select?: AllergiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allergies
     */
    omit?: AllergiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllergiesInclude<ExtArgs> | null
    /**
     * Filter which Allergies to delete.
     */
    where: AllergiesWhereUniqueInput
  }

  /**
   * Allergies deleteMany
   */
  export type AllergiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Allergies to delete
     */
    where?: AllergiesWhereInput
    /**
     * Limit how many Allergies to delete.
     */
    limit?: number
  }

  /**
   * Allergies without action
   */
  export type AllergiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergies
     */
    select?: AllergiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allergies
     */
    omit?: AllergiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllergiesInclude<ExtArgs> | null
  }


  /**
   * Model Symptoms
   */

  export type AggregateSymptoms = {
    _count: SymptomsCountAggregateOutputType | null
    _avg: SymptomsAvgAggregateOutputType | null
    _sum: SymptomsSumAggregateOutputType | null
    _min: SymptomsMinAggregateOutputType | null
    _max: SymptomsMaxAggregateOutputType | null
  }

  export type SymptomsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    severity: number | null
    diagnosisId: number | null
  }

  export type SymptomsSumAggregateOutputType = {
    id: number | null
    userId: number | null
    severity: number | null
    diagnosisId: number | null
  }

  export type SymptomsMinAggregateOutputType = {
    id: number | null
    userId: number | null
    name: string | null
    severity: number | null
    duration: string | null
    notes: string | null
    date: Date | null
    diagnosisId: number | null
  }

  export type SymptomsMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    name: string | null
    severity: number | null
    duration: string | null
    notes: string | null
    date: Date | null
    diagnosisId: number | null
  }

  export type SymptomsCountAggregateOutputType = {
    id: number
    userId: number
    symptoms: number
    name: number
    severity: number
    duration: number
    notes: number
    date: number
    diagnosisId: number
    _all: number
  }


  export type SymptomsAvgAggregateInputType = {
    id?: true
    userId?: true
    severity?: true
    diagnosisId?: true
  }

  export type SymptomsSumAggregateInputType = {
    id?: true
    userId?: true
    severity?: true
    diagnosisId?: true
  }

  export type SymptomsMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    severity?: true
    duration?: true
    notes?: true
    date?: true
    diagnosisId?: true
  }

  export type SymptomsMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    severity?: true
    duration?: true
    notes?: true
    date?: true
    diagnosisId?: true
  }

  export type SymptomsCountAggregateInputType = {
    id?: true
    userId?: true
    symptoms?: true
    name?: true
    severity?: true
    duration?: true
    notes?: true
    date?: true
    diagnosisId?: true
    _all?: true
  }

  export type SymptomsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Symptoms to aggregate.
     */
    where?: SymptomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Symptoms to fetch.
     */
    orderBy?: SymptomsOrderByWithRelationInput | SymptomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SymptomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Symptoms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Symptoms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Symptoms
    **/
    _count?: true | SymptomsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SymptomsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SymptomsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SymptomsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SymptomsMaxAggregateInputType
  }

  export type GetSymptomsAggregateType<T extends SymptomsAggregateArgs> = {
        [P in keyof T & keyof AggregateSymptoms]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSymptoms[P]>
      : GetScalarType<T[P], AggregateSymptoms[P]>
  }




  export type SymptomsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SymptomsWhereInput
    orderBy?: SymptomsOrderByWithAggregationInput | SymptomsOrderByWithAggregationInput[]
    by: SymptomsScalarFieldEnum[] | SymptomsScalarFieldEnum
    having?: SymptomsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SymptomsCountAggregateInputType | true
    _avg?: SymptomsAvgAggregateInputType
    _sum?: SymptomsSumAggregateInputType
    _min?: SymptomsMinAggregateInputType
    _max?: SymptomsMaxAggregateInputType
  }

  export type SymptomsGroupByOutputType = {
    id: number
    userId: number
    symptoms: string[]
    name: string
    severity: number
    duration: string
    notes: string | null
    date: Date
    diagnosisId: number | null
    _count: SymptomsCountAggregateOutputType | null
    _avg: SymptomsAvgAggregateOutputType | null
    _sum: SymptomsSumAggregateOutputType | null
    _min: SymptomsMinAggregateOutputType | null
    _max: SymptomsMaxAggregateOutputType | null
  }

  type GetSymptomsGroupByPayload<T extends SymptomsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SymptomsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SymptomsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SymptomsGroupByOutputType[P]>
            : GetScalarType<T[P], SymptomsGroupByOutputType[P]>
        }
      >
    >


  export type SymptomsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    symptoms?: boolean
    name?: boolean
    severity?: boolean
    duration?: boolean
    notes?: boolean
    date?: boolean
    diagnosisId?: boolean
    diagnosis?: boolean | Symptoms$diagnosisArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["symptoms"]>

  export type SymptomsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    symptoms?: boolean
    name?: boolean
    severity?: boolean
    duration?: boolean
    notes?: boolean
    date?: boolean
    diagnosisId?: boolean
    diagnosis?: boolean | Symptoms$diagnosisArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["symptoms"]>

  export type SymptomsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    symptoms?: boolean
    name?: boolean
    severity?: boolean
    duration?: boolean
    notes?: boolean
    date?: boolean
    diagnosisId?: boolean
    diagnosis?: boolean | Symptoms$diagnosisArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["symptoms"]>

  export type SymptomsSelectScalar = {
    id?: boolean
    userId?: boolean
    symptoms?: boolean
    name?: boolean
    severity?: boolean
    duration?: boolean
    notes?: boolean
    date?: boolean
    diagnosisId?: boolean
  }

  export type SymptomsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "symptoms" | "name" | "severity" | "duration" | "notes" | "date" | "diagnosisId", ExtArgs["result"]["symptoms"]>
  export type SymptomsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnosis?: boolean | Symptoms$diagnosisArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SymptomsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnosis?: boolean | Symptoms$diagnosisArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SymptomsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnosis?: boolean | Symptoms$diagnosisArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SymptomsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Symptoms"
    objects: {
      diagnosis: Prisma.$MedicalHistoryPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      symptoms: string[]
      name: string
      severity: number
      duration: string
      notes: string | null
      date: Date
      diagnosisId: number | null
    }, ExtArgs["result"]["symptoms"]>
    composites: {}
  }

  type SymptomsGetPayload<S extends boolean | null | undefined | SymptomsDefaultArgs> = $Result.GetResult<Prisma.$SymptomsPayload, S>

  type SymptomsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SymptomsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SymptomsCountAggregateInputType | true
    }

  export interface SymptomsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Symptoms'], meta: { name: 'Symptoms' } }
    /**
     * Find zero or one Symptoms that matches the filter.
     * @param {SymptomsFindUniqueArgs} args - Arguments to find a Symptoms
     * @example
     * // Get one Symptoms
     * const symptoms = await prisma.symptoms.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SymptomsFindUniqueArgs>(args: SelectSubset<T, SymptomsFindUniqueArgs<ExtArgs>>): Prisma__SymptomsClient<$Result.GetResult<Prisma.$SymptomsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Symptoms that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SymptomsFindUniqueOrThrowArgs} args - Arguments to find a Symptoms
     * @example
     * // Get one Symptoms
     * const symptoms = await prisma.symptoms.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SymptomsFindUniqueOrThrowArgs>(args: SelectSubset<T, SymptomsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SymptomsClient<$Result.GetResult<Prisma.$SymptomsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Symptoms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SymptomsFindFirstArgs} args - Arguments to find a Symptoms
     * @example
     * // Get one Symptoms
     * const symptoms = await prisma.symptoms.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SymptomsFindFirstArgs>(args?: SelectSubset<T, SymptomsFindFirstArgs<ExtArgs>>): Prisma__SymptomsClient<$Result.GetResult<Prisma.$SymptomsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Symptoms that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SymptomsFindFirstOrThrowArgs} args - Arguments to find a Symptoms
     * @example
     * // Get one Symptoms
     * const symptoms = await prisma.symptoms.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SymptomsFindFirstOrThrowArgs>(args?: SelectSubset<T, SymptomsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SymptomsClient<$Result.GetResult<Prisma.$SymptomsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Symptoms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SymptomsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Symptoms
     * const symptoms = await prisma.symptoms.findMany()
     * 
     * // Get first 10 Symptoms
     * const symptoms = await prisma.symptoms.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const symptomsWithIdOnly = await prisma.symptoms.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SymptomsFindManyArgs>(args?: SelectSubset<T, SymptomsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SymptomsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Symptoms.
     * @param {SymptomsCreateArgs} args - Arguments to create a Symptoms.
     * @example
     * // Create one Symptoms
     * const Symptoms = await prisma.symptoms.create({
     *   data: {
     *     // ... data to create a Symptoms
     *   }
     * })
     * 
     */
    create<T extends SymptomsCreateArgs>(args: SelectSubset<T, SymptomsCreateArgs<ExtArgs>>): Prisma__SymptomsClient<$Result.GetResult<Prisma.$SymptomsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Symptoms.
     * @param {SymptomsCreateManyArgs} args - Arguments to create many Symptoms.
     * @example
     * // Create many Symptoms
     * const symptoms = await prisma.symptoms.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SymptomsCreateManyArgs>(args?: SelectSubset<T, SymptomsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Symptoms and returns the data saved in the database.
     * @param {SymptomsCreateManyAndReturnArgs} args - Arguments to create many Symptoms.
     * @example
     * // Create many Symptoms
     * const symptoms = await prisma.symptoms.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Symptoms and only return the `id`
     * const symptomsWithIdOnly = await prisma.symptoms.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SymptomsCreateManyAndReturnArgs>(args?: SelectSubset<T, SymptomsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SymptomsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Symptoms.
     * @param {SymptomsDeleteArgs} args - Arguments to delete one Symptoms.
     * @example
     * // Delete one Symptoms
     * const Symptoms = await prisma.symptoms.delete({
     *   where: {
     *     // ... filter to delete one Symptoms
     *   }
     * })
     * 
     */
    delete<T extends SymptomsDeleteArgs>(args: SelectSubset<T, SymptomsDeleteArgs<ExtArgs>>): Prisma__SymptomsClient<$Result.GetResult<Prisma.$SymptomsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Symptoms.
     * @param {SymptomsUpdateArgs} args - Arguments to update one Symptoms.
     * @example
     * // Update one Symptoms
     * const symptoms = await prisma.symptoms.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SymptomsUpdateArgs>(args: SelectSubset<T, SymptomsUpdateArgs<ExtArgs>>): Prisma__SymptomsClient<$Result.GetResult<Prisma.$SymptomsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Symptoms.
     * @param {SymptomsDeleteManyArgs} args - Arguments to filter Symptoms to delete.
     * @example
     * // Delete a few Symptoms
     * const { count } = await prisma.symptoms.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SymptomsDeleteManyArgs>(args?: SelectSubset<T, SymptomsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Symptoms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SymptomsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Symptoms
     * const symptoms = await prisma.symptoms.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SymptomsUpdateManyArgs>(args: SelectSubset<T, SymptomsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Symptoms and returns the data updated in the database.
     * @param {SymptomsUpdateManyAndReturnArgs} args - Arguments to update many Symptoms.
     * @example
     * // Update many Symptoms
     * const symptoms = await prisma.symptoms.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Symptoms and only return the `id`
     * const symptomsWithIdOnly = await prisma.symptoms.updateManyAndReturn({
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
    updateManyAndReturn<T extends SymptomsUpdateManyAndReturnArgs>(args: SelectSubset<T, SymptomsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SymptomsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Symptoms.
     * @param {SymptomsUpsertArgs} args - Arguments to update or create a Symptoms.
     * @example
     * // Update or create a Symptoms
     * const symptoms = await prisma.symptoms.upsert({
     *   create: {
     *     // ... data to create a Symptoms
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Symptoms we want to update
     *   }
     * })
     */
    upsert<T extends SymptomsUpsertArgs>(args: SelectSubset<T, SymptomsUpsertArgs<ExtArgs>>): Prisma__SymptomsClient<$Result.GetResult<Prisma.$SymptomsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Symptoms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SymptomsCountArgs} args - Arguments to filter Symptoms to count.
     * @example
     * // Count the number of Symptoms
     * const count = await prisma.symptoms.count({
     *   where: {
     *     // ... the filter for the Symptoms we want to count
     *   }
     * })
    **/
    count<T extends SymptomsCountArgs>(
      args?: Subset<T, SymptomsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SymptomsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Symptoms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SymptomsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SymptomsAggregateArgs>(args: Subset<T, SymptomsAggregateArgs>): Prisma.PrismaPromise<GetSymptomsAggregateType<T>>

    /**
     * Group by Symptoms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SymptomsGroupByArgs} args - Group by arguments.
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
      T extends SymptomsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SymptomsGroupByArgs['orderBy'] }
        : { orderBy?: SymptomsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SymptomsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSymptomsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Symptoms model
   */
  readonly fields: SymptomsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Symptoms.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SymptomsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    diagnosis<T extends Symptoms$diagnosisArgs<ExtArgs> = {}>(args?: Subset<T, Symptoms$diagnosisArgs<ExtArgs>>): Prisma__MedicalHistoryClient<$Result.GetResult<Prisma.$MedicalHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Symptoms model
   */
  interface SymptomsFieldRefs {
    readonly id: FieldRef<"Symptoms", 'Int'>
    readonly userId: FieldRef<"Symptoms", 'Int'>
    readonly symptoms: FieldRef<"Symptoms", 'String[]'>
    readonly name: FieldRef<"Symptoms", 'String'>
    readonly severity: FieldRef<"Symptoms", 'Int'>
    readonly duration: FieldRef<"Symptoms", 'String'>
    readonly notes: FieldRef<"Symptoms", 'String'>
    readonly date: FieldRef<"Symptoms", 'DateTime'>
    readonly diagnosisId: FieldRef<"Symptoms", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Symptoms findUnique
   */
  export type SymptomsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Symptoms
     */
    select?: SymptomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Symptoms
     */
    omit?: SymptomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomsInclude<ExtArgs> | null
    /**
     * Filter, which Symptoms to fetch.
     */
    where: SymptomsWhereUniqueInput
  }

  /**
   * Symptoms findUniqueOrThrow
   */
  export type SymptomsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Symptoms
     */
    select?: SymptomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Symptoms
     */
    omit?: SymptomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomsInclude<ExtArgs> | null
    /**
     * Filter, which Symptoms to fetch.
     */
    where: SymptomsWhereUniqueInput
  }

  /**
   * Symptoms findFirst
   */
  export type SymptomsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Symptoms
     */
    select?: SymptomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Symptoms
     */
    omit?: SymptomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomsInclude<ExtArgs> | null
    /**
     * Filter, which Symptoms to fetch.
     */
    where?: SymptomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Symptoms to fetch.
     */
    orderBy?: SymptomsOrderByWithRelationInput | SymptomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Symptoms.
     */
    cursor?: SymptomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Symptoms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Symptoms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Symptoms.
     */
    distinct?: SymptomsScalarFieldEnum | SymptomsScalarFieldEnum[]
  }

  /**
   * Symptoms findFirstOrThrow
   */
  export type SymptomsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Symptoms
     */
    select?: SymptomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Symptoms
     */
    omit?: SymptomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomsInclude<ExtArgs> | null
    /**
     * Filter, which Symptoms to fetch.
     */
    where?: SymptomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Symptoms to fetch.
     */
    orderBy?: SymptomsOrderByWithRelationInput | SymptomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Symptoms.
     */
    cursor?: SymptomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Symptoms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Symptoms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Symptoms.
     */
    distinct?: SymptomsScalarFieldEnum | SymptomsScalarFieldEnum[]
  }

  /**
   * Symptoms findMany
   */
  export type SymptomsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Symptoms
     */
    select?: SymptomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Symptoms
     */
    omit?: SymptomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomsInclude<ExtArgs> | null
    /**
     * Filter, which Symptoms to fetch.
     */
    where?: SymptomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Symptoms to fetch.
     */
    orderBy?: SymptomsOrderByWithRelationInput | SymptomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Symptoms.
     */
    cursor?: SymptomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Symptoms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Symptoms.
     */
    skip?: number
    distinct?: SymptomsScalarFieldEnum | SymptomsScalarFieldEnum[]
  }

  /**
   * Symptoms create
   */
  export type SymptomsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Symptoms
     */
    select?: SymptomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Symptoms
     */
    omit?: SymptomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomsInclude<ExtArgs> | null
    /**
     * The data needed to create a Symptoms.
     */
    data: XOR<SymptomsCreateInput, SymptomsUncheckedCreateInput>
  }

  /**
   * Symptoms createMany
   */
  export type SymptomsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Symptoms.
     */
    data: SymptomsCreateManyInput | SymptomsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Symptoms createManyAndReturn
   */
  export type SymptomsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Symptoms
     */
    select?: SymptomsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Symptoms
     */
    omit?: SymptomsOmit<ExtArgs> | null
    /**
     * The data used to create many Symptoms.
     */
    data: SymptomsCreateManyInput | SymptomsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Symptoms update
   */
  export type SymptomsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Symptoms
     */
    select?: SymptomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Symptoms
     */
    omit?: SymptomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomsInclude<ExtArgs> | null
    /**
     * The data needed to update a Symptoms.
     */
    data: XOR<SymptomsUpdateInput, SymptomsUncheckedUpdateInput>
    /**
     * Choose, which Symptoms to update.
     */
    where: SymptomsWhereUniqueInput
  }

  /**
   * Symptoms updateMany
   */
  export type SymptomsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Symptoms.
     */
    data: XOR<SymptomsUpdateManyMutationInput, SymptomsUncheckedUpdateManyInput>
    /**
     * Filter which Symptoms to update
     */
    where?: SymptomsWhereInput
    /**
     * Limit how many Symptoms to update.
     */
    limit?: number
  }

  /**
   * Symptoms updateManyAndReturn
   */
  export type SymptomsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Symptoms
     */
    select?: SymptomsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Symptoms
     */
    omit?: SymptomsOmit<ExtArgs> | null
    /**
     * The data used to update Symptoms.
     */
    data: XOR<SymptomsUpdateManyMutationInput, SymptomsUncheckedUpdateManyInput>
    /**
     * Filter which Symptoms to update
     */
    where?: SymptomsWhereInput
    /**
     * Limit how many Symptoms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Symptoms upsert
   */
  export type SymptomsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Symptoms
     */
    select?: SymptomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Symptoms
     */
    omit?: SymptomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomsInclude<ExtArgs> | null
    /**
     * The filter to search for the Symptoms to update in case it exists.
     */
    where: SymptomsWhereUniqueInput
    /**
     * In case the Symptoms found by the `where` argument doesn't exist, create a new Symptoms with this data.
     */
    create: XOR<SymptomsCreateInput, SymptomsUncheckedCreateInput>
    /**
     * In case the Symptoms was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SymptomsUpdateInput, SymptomsUncheckedUpdateInput>
  }

  /**
   * Symptoms delete
   */
  export type SymptomsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Symptoms
     */
    select?: SymptomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Symptoms
     */
    omit?: SymptomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomsInclude<ExtArgs> | null
    /**
     * Filter which Symptoms to delete.
     */
    where: SymptomsWhereUniqueInput
  }

  /**
   * Symptoms deleteMany
   */
  export type SymptomsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Symptoms to delete
     */
    where?: SymptomsWhereInput
    /**
     * Limit how many Symptoms to delete.
     */
    limit?: number
  }

  /**
   * Symptoms.diagnosis
   */
  export type Symptoms$diagnosisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryInclude<ExtArgs> | null
    where?: MedicalHistoryWhereInput
  }

  /**
   * Symptoms without action
   */
  export type SymptomsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Symptoms
     */
    select?: SymptomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Symptoms
     */
    omit?: SymptomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomsInclude<ExtArgs> | null
  }


  /**
   * Model Hospital
   */

  export type AggregateHospital = {
    _count: HospitalCountAggregateOutputType | null
    _avg: HospitalAvgAggregateOutputType | null
    _sum: HospitalSumAggregateOutputType | null
    _min: HospitalMinAggregateOutputType | null
    _max: HospitalMaxAggregateOutputType | null
  }

  export type HospitalAvgAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
  }

  export type HospitalSumAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
  }

  export type HospitalMinAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    region: string | null
    latitude: number | null
    longitude: number | null
    phone: string | null
  }

  export type HospitalMaxAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    region: string | null
    latitude: number | null
    longitude: number | null
    phone: string | null
  }

  export type HospitalCountAggregateOutputType = {
    id: number
    name: number
    address: number
    region: number
    latitude: number
    longitude: number
    phone: number
    specializations: number
    _all: number
  }


  export type HospitalAvgAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
  }

  export type HospitalSumAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
  }

  export type HospitalMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    region?: true
    latitude?: true
    longitude?: true
    phone?: true
  }

  export type HospitalMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    region?: true
    latitude?: true
    longitude?: true
    phone?: true
  }

  export type HospitalCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    region?: true
    latitude?: true
    longitude?: true
    phone?: true
    specializations?: true
    _all?: true
  }

  export type HospitalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hospital to aggregate.
     */
    where?: HospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: HospitalOrderByWithRelationInput | HospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hospitals
    **/
    _count?: true | HospitalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HospitalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HospitalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HospitalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HospitalMaxAggregateInputType
  }

  export type GetHospitalAggregateType<T extends HospitalAggregateArgs> = {
        [P in keyof T & keyof AggregateHospital]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHospital[P]>
      : GetScalarType<T[P], AggregateHospital[P]>
  }




  export type HospitalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HospitalWhereInput
    orderBy?: HospitalOrderByWithAggregationInput | HospitalOrderByWithAggregationInput[]
    by: HospitalScalarFieldEnum[] | HospitalScalarFieldEnum
    having?: HospitalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HospitalCountAggregateInputType | true
    _avg?: HospitalAvgAggregateInputType
    _sum?: HospitalSumAggregateInputType
    _min?: HospitalMinAggregateInputType
    _max?: HospitalMaxAggregateInputType
  }

  export type HospitalGroupByOutputType = {
    id: number
    name: string
    address: string
    region: string
    latitude: number | null
    longitude: number | null
    phone: string | null
    specializations: string[]
    _count: HospitalCountAggregateOutputType | null
    _avg: HospitalAvgAggregateOutputType | null
    _sum: HospitalSumAggregateOutputType | null
    _min: HospitalMinAggregateOutputType | null
    _max: HospitalMaxAggregateOutputType | null
  }

  type GetHospitalGroupByPayload<T extends HospitalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HospitalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HospitalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HospitalGroupByOutputType[P]>
            : GetScalarType<T[P], HospitalGroupByOutputType[P]>
        }
      >
    >


  export type HospitalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    region?: boolean
    latitude?: boolean
    longitude?: boolean
    phone?: boolean
    specializations?: boolean
  }, ExtArgs["result"]["hospital"]>

  export type HospitalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    region?: boolean
    latitude?: boolean
    longitude?: boolean
    phone?: boolean
    specializations?: boolean
  }, ExtArgs["result"]["hospital"]>

  export type HospitalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    region?: boolean
    latitude?: boolean
    longitude?: boolean
    phone?: boolean
    specializations?: boolean
  }, ExtArgs["result"]["hospital"]>

  export type HospitalSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    region?: boolean
    latitude?: boolean
    longitude?: boolean
    phone?: boolean
    specializations?: boolean
  }

  export type HospitalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "region" | "latitude" | "longitude" | "phone" | "specializations", ExtArgs["result"]["hospital"]>

  export type $HospitalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hospital"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      address: string
      region: string
      latitude: number | null
      longitude: number | null
      phone: string | null
      specializations: string[]
    }, ExtArgs["result"]["hospital"]>
    composites: {}
  }

  type HospitalGetPayload<S extends boolean | null | undefined | HospitalDefaultArgs> = $Result.GetResult<Prisma.$HospitalPayload, S>

  type HospitalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HospitalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HospitalCountAggregateInputType | true
    }

  export interface HospitalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hospital'], meta: { name: 'Hospital' } }
    /**
     * Find zero or one Hospital that matches the filter.
     * @param {HospitalFindUniqueArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HospitalFindUniqueArgs>(args: SelectSubset<T, HospitalFindUniqueArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hospital that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HospitalFindUniqueOrThrowArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HospitalFindUniqueOrThrowArgs>(args: SelectSubset<T, HospitalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hospital that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalFindFirstArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HospitalFindFirstArgs>(args?: SelectSubset<T, HospitalFindFirstArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hospital that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalFindFirstOrThrowArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HospitalFindFirstOrThrowArgs>(args?: SelectSubset<T, HospitalFindFirstOrThrowArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hospitals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hospitals
     * const hospitals = await prisma.hospital.findMany()
     * 
     * // Get first 10 Hospitals
     * const hospitals = await prisma.hospital.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hospitalWithIdOnly = await prisma.hospital.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HospitalFindManyArgs>(args?: SelectSubset<T, HospitalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hospital.
     * @param {HospitalCreateArgs} args - Arguments to create a Hospital.
     * @example
     * // Create one Hospital
     * const Hospital = await prisma.hospital.create({
     *   data: {
     *     // ... data to create a Hospital
     *   }
     * })
     * 
     */
    create<T extends HospitalCreateArgs>(args: SelectSubset<T, HospitalCreateArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hospitals.
     * @param {HospitalCreateManyArgs} args - Arguments to create many Hospitals.
     * @example
     * // Create many Hospitals
     * const hospital = await prisma.hospital.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HospitalCreateManyArgs>(args?: SelectSubset<T, HospitalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hospitals and returns the data saved in the database.
     * @param {HospitalCreateManyAndReturnArgs} args - Arguments to create many Hospitals.
     * @example
     * // Create many Hospitals
     * const hospital = await prisma.hospital.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hospitals and only return the `id`
     * const hospitalWithIdOnly = await prisma.hospital.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HospitalCreateManyAndReturnArgs>(args?: SelectSubset<T, HospitalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hospital.
     * @param {HospitalDeleteArgs} args - Arguments to delete one Hospital.
     * @example
     * // Delete one Hospital
     * const Hospital = await prisma.hospital.delete({
     *   where: {
     *     // ... filter to delete one Hospital
     *   }
     * })
     * 
     */
    delete<T extends HospitalDeleteArgs>(args: SelectSubset<T, HospitalDeleteArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hospital.
     * @param {HospitalUpdateArgs} args - Arguments to update one Hospital.
     * @example
     * // Update one Hospital
     * const hospital = await prisma.hospital.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HospitalUpdateArgs>(args: SelectSubset<T, HospitalUpdateArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hospitals.
     * @param {HospitalDeleteManyArgs} args - Arguments to filter Hospitals to delete.
     * @example
     * // Delete a few Hospitals
     * const { count } = await prisma.hospital.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HospitalDeleteManyArgs>(args?: SelectSubset<T, HospitalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hospitals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hospitals
     * const hospital = await prisma.hospital.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HospitalUpdateManyArgs>(args: SelectSubset<T, HospitalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hospitals and returns the data updated in the database.
     * @param {HospitalUpdateManyAndReturnArgs} args - Arguments to update many Hospitals.
     * @example
     * // Update many Hospitals
     * const hospital = await prisma.hospital.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hospitals and only return the `id`
     * const hospitalWithIdOnly = await prisma.hospital.updateManyAndReturn({
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
    updateManyAndReturn<T extends HospitalUpdateManyAndReturnArgs>(args: SelectSubset<T, HospitalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hospital.
     * @param {HospitalUpsertArgs} args - Arguments to update or create a Hospital.
     * @example
     * // Update or create a Hospital
     * const hospital = await prisma.hospital.upsert({
     *   create: {
     *     // ... data to create a Hospital
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hospital we want to update
     *   }
     * })
     */
    upsert<T extends HospitalUpsertArgs>(args: SelectSubset<T, HospitalUpsertArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hospitals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalCountArgs} args - Arguments to filter Hospitals to count.
     * @example
     * // Count the number of Hospitals
     * const count = await prisma.hospital.count({
     *   where: {
     *     // ... the filter for the Hospitals we want to count
     *   }
     * })
    **/
    count<T extends HospitalCountArgs>(
      args?: Subset<T, HospitalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HospitalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hospital.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HospitalAggregateArgs>(args: Subset<T, HospitalAggregateArgs>): Prisma.PrismaPromise<GetHospitalAggregateType<T>>

    /**
     * Group by Hospital.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalGroupByArgs} args - Group by arguments.
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
      T extends HospitalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HospitalGroupByArgs['orderBy'] }
        : { orderBy?: HospitalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HospitalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHospitalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hospital model
   */
  readonly fields: HospitalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hospital.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HospitalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Hospital model
   */
  interface HospitalFieldRefs {
    readonly id: FieldRef<"Hospital", 'Int'>
    readonly name: FieldRef<"Hospital", 'String'>
    readonly address: FieldRef<"Hospital", 'String'>
    readonly region: FieldRef<"Hospital", 'String'>
    readonly latitude: FieldRef<"Hospital", 'Float'>
    readonly longitude: FieldRef<"Hospital", 'Float'>
    readonly phone: FieldRef<"Hospital", 'String'>
    readonly specializations: FieldRef<"Hospital", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * Hospital findUnique
   */
  export type HospitalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Filter, which Hospital to fetch.
     */
    where: HospitalWhereUniqueInput
  }

  /**
   * Hospital findUniqueOrThrow
   */
  export type HospitalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Filter, which Hospital to fetch.
     */
    where: HospitalWhereUniqueInput
  }

  /**
   * Hospital findFirst
   */
  export type HospitalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Filter, which Hospital to fetch.
     */
    where?: HospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: HospitalOrderByWithRelationInput | HospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hospitals.
     */
    cursor?: HospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hospitals.
     */
    distinct?: HospitalScalarFieldEnum | HospitalScalarFieldEnum[]
  }

  /**
   * Hospital findFirstOrThrow
   */
  export type HospitalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Filter, which Hospital to fetch.
     */
    where?: HospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: HospitalOrderByWithRelationInput | HospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hospitals.
     */
    cursor?: HospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hospitals.
     */
    distinct?: HospitalScalarFieldEnum | HospitalScalarFieldEnum[]
  }

  /**
   * Hospital findMany
   */
  export type HospitalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Filter, which Hospitals to fetch.
     */
    where?: HospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: HospitalOrderByWithRelationInput | HospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hospitals.
     */
    cursor?: HospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitals.
     */
    skip?: number
    distinct?: HospitalScalarFieldEnum | HospitalScalarFieldEnum[]
  }

  /**
   * Hospital create
   */
  export type HospitalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * The data needed to create a Hospital.
     */
    data: XOR<HospitalCreateInput, HospitalUncheckedCreateInput>
  }

  /**
   * Hospital createMany
   */
  export type HospitalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hospitals.
     */
    data: HospitalCreateManyInput | HospitalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hospital createManyAndReturn
   */
  export type HospitalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * The data used to create many Hospitals.
     */
    data: HospitalCreateManyInput | HospitalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hospital update
   */
  export type HospitalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * The data needed to update a Hospital.
     */
    data: XOR<HospitalUpdateInput, HospitalUncheckedUpdateInput>
    /**
     * Choose, which Hospital to update.
     */
    where: HospitalWhereUniqueInput
  }

  /**
   * Hospital updateMany
   */
  export type HospitalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hospitals.
     */
    data: XOR<HospitalUpdateManyMutationInput, HospitalUncheckedUpdateManyInput>
    /**
     * Filter which Hospitals to update
     */
    where?: HospitalWhereInput
    /**
     * Limit how many Hospitals to update.
     */
    limit?: number
  }

  /**
   * Hospital updateManyAndReturn
   */
  export type HospitalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * The data used to update Hospitals.
     */
    data: XOR<HospitalUpdateManyMutationInput, HospitalUncheckedUpdateManyInput>
    /**
     * Filter which Hospitals to update
     */
    where?: HospitalWhereInput
    /**
     * Limit how many Hospitals to update.
     */
    limit?: number
  }

  /**
   * Hospital upsert
   */
  export type HospitalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * The filter to search for the Hospital to update in case it exists.
     */
    where: HospitalWhereUniqueInput
    /**
     * In case the Hospital found by the `where` argument doesn't exist, create a new Hospital with this data.
     */
    create: XOR<HospitalCreateInput, HospitalUncheckedCreateInput>
    /**
     * In case the Hospital was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HospitalUpdateInput, HospitalUncheckedUpdateInput>
  }

  /**
   * Hospital delete
   */
  export type HospitalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Filter which Hospital to delete.
     */
    where: HospitalWhereUniqueInput
  }

  /**
   * Hospital deleteMany
   */
  export type HospitalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hospitals to delete
     */
    where?: HospitalWhereInput
    /**
     * Limit how many Hospitals to delete.
     */
    limit?: number
  }

  /**
   * Hospital without action
   */
  export type HospitalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    age: number | null
    weight: number | null
    height: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    age: number | null
    weight: number | null
    height: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    username: string | null
    password: string | null
    email: string | null
    location: string | null
    age: number | null
    gender: string | null
    weight: number | null
    height: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    username: string | null
    password: string | null
    email: string | null
    location: string | null
    age: number | null
    gender: string | null
    weight: number | null
    height: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    username: number
    password: number
    email: number
    location: number
    age: number
    gender: number
    weight: number
    height: number
    preExistingConditions: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    age?: true
    weight?: true
    height?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    age?: true
    weight?: true
    height?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    username?: true
    password?: true
    email?: true
    location?: true
    age?: true
    gender?: true
    weight?: true
    height?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    username?: true
    password?: true
    email?: true
    location?: true
    age?: true
    gender?: true
    weight?: true
    height?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    username?: true
    password?: true
    email?: true
    location?: true
    age?: true
    gender?: true
    weight?: true
    height?: true
    preExistingConditions?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    username: string
    password: string
    email: string | null
    location: string | null
    age: number | null
    gender: string | null
    weight: number | null
    height: number | null
    preExistingConditions: string[]
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    createdAt?: boolean
    updatedAt?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    location?: boolean
    age?: boolean
    gender?: boolean
    weight?: boolean
    height?: boolean
    preExistingConditions?: boolean
    symptoms?: boolean | User$symptomsArgs<ExtArgs>
    allergies?: boolean | User$allergiesArgs<ExtArgs>
    medicalHistory?: boolean | User$medicalHistoryArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    location?: boolean
    age?: boolean
    gender?: boolean
    weight?: boolean
    height?: boolean
    preExistingConditions?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    location?: boolean
    age?: boolean
    gender?: boolean
    weight?: boolean
    height?: boolean
    preExistingConditions?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    location?: boolean
    age?: boolean
    gender?: boolean
    weight?: boolean
    height?: boolean
    preExistingConditions?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "username" | "password" | "email" | "location" | "age" | "gender" | "weight" | "height" | "preExistingConditions", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    symptoms?: boolean | User$symptomsArgs<ExtArgs>
    allergies?: boolean | User$allergiesArgs<ExtArgs>
    medicalHistory?: boolean | User$medicalHistoryArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      symptoms: Prisma.$SymptomsPayload<ExtArgs>[]
      allergies: Prisma.$AllergiesPayload<ExtArgs>[]
      medicalHistory: Prisma.$MedicalHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      username: string
      password: string
      email: string | null
      location: string | null
      age: number | null
      gender: string | null
      weight: number | null
      height: number | null
      preExistingConditions: string[]
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
    symptoms<T extends User$symptomsArgs<ExtArgs> = {}>(args?: Subset<T, User$symptomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SymptomsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    allergies<T extends User$allergiesArgs<ExtArgs> = {}>(args?: Subset<T, User$allergiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllergiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    medicalHistory<T extends User$medicalHistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$medicalHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly location: FieldRef<"User", 'String'>
    readonly age: FieldRef<"User", 'Int'>
    readonly gender: FieldRef<"User", 'String'>
    readonly weight: FieldRef<"User", 'Int'>
    readonly height: FieldRef<"User", 'Int'>
    readonly preExistingConditions: FieldRef<"User", 'String[]'>
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
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
   * User.symptoms
   */
  export type User$symptomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Symptoms
     */
    select?: SymptomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Symptoms
     */
    omit?: SymptomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomsInclude<ExtArgs> | null
    where?: SymptomsWhereInput
    orderBy?: SymptomsOrderByWithRelationInput | SymptomsOrderByWithRelationInput[]
    cursor?: SymptomsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SymptomsScalarFieldEnum | SymptomsScalarFieldEnum[]
  }

  /**
   * User.allergies
   */
  export type User$allergiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergies
     */
    select?: AllergiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allergies
     */
    omit?: AllergiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllergiesInclude<ExtArgs> | null
    where?: AllergiesWhereInput
    orderBy?: AllergiesOrderByWithRelationInput | AllergiesOrderByWithRelationInput[]
    cursor?: AllergiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AllergiesScalarFieldEnum | AllergiesScalarFieldEnum[]
  }

  /**
   * User.medicalHistory
   */
  export type User$medicalHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryInclude<ExtArgs> | null
    where?: MedicalHistoryWhereInput
    orderBy?: MedicalHistoryOrderByWithRelationInput | MedicalHistoryOrderByWithRelationInput[]
    cursor?: MedicalHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicalHistoryScalarFieldEnum | MedicalHistoryScalarFieldEnum[]
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
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MedicalHistoryScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    condition: 'condition',
    diagnosisDate: 'diagnosisDate',
    medications: 'medications',
    notes: 'notes'
  };

  export type MedicalHistoryScalarFieldEnum = (typeof MedicalHistoryScalarFieldEnum)[keyof typeof MedicalHistoryScalarFieldEnum]


  export const AllergiesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    trigger: 'trigger',
    severity: 'severity',
    reaction: 'reaction',
    notes: 'notes',
    date: 'date'
  };

  export type AllergiesScalarFieldEnum = (typeof AllergiesScalarFieldEnum)[keyof typeof AllergiesScalarFieldEnum]


  export const SymptomsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    symptoms: 'symptoms',
    name: 'name',
    severity: 'severity',
    duration: 'duration',
    notes: 'notes',
    date: 'date',
    diagnosisId: 'diagnosisId'
  };

  export type SymptomsScalarFieldEnum = (typeof SymptomsScalarFieldEnum)[keyof typeof SymptomsScalarFieldEnum]


  export const HospitalScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    region: 'region',
    latitude: 'latitude',
    longitude: 'longitude',
    phone: 'phone',
    specializations: 'specializations'
  };

  export type HospitalScalarFieldEnum = (typeof HospitalScalarFieldEnum)[keyof typeof HospitalScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    username: 'username',
    password: 'password',
    email: 'email',
    location: 'location',
    age: 'age',
    gender: 'gender',
    weight: 'weight',
    height: 'height',
    preExistingConditions: 'preExistingConditions'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


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
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type MedicalHistoryWhereInput = {
    AND?: MedicalHistoryWhereInput | MedicalHistoryWhereInput[]
    OR?: MedicalHistoryWhereInput[]
    NOT?: MedicalHistoryWhereInput | MedicalHistoryWhereInput[]
    id?: IntFilter<"MedicalHistory"> | number
    createdAt?: DateTimeFilter<"MedicalHistory"> | Date | string
    updatedAt?: DateTimeFilter<"MedicalHistory"> | Date | string
    userId?: IntFilter<"MedicalHistory"> | number
    condition?: StringFilter<"MedicalHistory"> | string
    diagnosisDate?: DateTimeFilter<"MedicalHistory"> | Date | string
    medications?: StringNullableFilter<"MedicalHistory"> | string | null
    notes?: StringNullableFilter<"MedicalHistory"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    symptoms?: SymptomsListRelationFilter
  }

  export type MedicalHistoryOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    condition?: SortOrder
    diagnosisDate?: SortOrder
    medications?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    symptoms?: SymptomsOrderByRelationAggregateInput
  }

  export type MedicalHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MedicalHistoryWhereInput | MedicalHistoryWhereInput[]
    OR?: MedicalHistoryWhereInput[]
    NOT?: MedicalHistoryWhereInput | MedicalHistoryWhereInput[]
    createdAt?: DateTimeFilter<"MedicalHistory"> | Date | string
    updatedAt?: DateTimeFilter<"MedicalHistory"> | Date | string
    userId?: IntFilter<"MedicalHistory"> | number
    condition?: StringFilter<"MedicalHistory"> | string
    diagnosisDate?: DateTimeFilter<"MedicalHistory"> | Date | string
    medications?: StringNullableFilter<"MedicalHistory"> | string | null
    notes?: StringNullableFilter<"MedicalHistory"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    symptoms?: SymptomsListRelationFilter
  }, "id">

  export type MedicalHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    condition?: SortOrder
    diagnosisDate?: SortOrder
    medications?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: MedicalHistoryCountOrderByAggregateInput
    _avg?: MedicalHistoryAvgOrderByAggregateInput
    _max?: MedicalHistoryMaxOrderByAggregateInput
    _min?: MedicalHistoryMinOrderByAggregateInput
    _sum?: MedicalHistorySumOrderByAggregateInput
  }

  export type MedicalHistoryScalarWhereWithAggregatesInput = {
    AND?: MedicalHistoryScalarWhereWithAggregatesInput | MedicalHistoryScalarWhereWithAggregatesInput[]
    OR?: MedicalHistoryScalarWhereWithAggregatesInput[]
    NOT?: MedicalHistoryScalarWhereWithAggregatesInput | MedicalHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MedicalHistory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MedicalHistory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MedicalHistory"> | Date | string
    userId?: IntWithAggregatesFilter<"MedicalHistory"> | number
    condition?: StringWithAggregatesFilter<"MedicalHistory"> | string
    diagnosisDate?: DateTimeWithAggregatesFilter<"MedicalHistory"> | Date | string
    medications?: StringNullableWithAggregatesFilter<"MedicalHistory"> | string | null
    notes?: StringNullableWithAggregatesFilter<"MedicalHistory"> | string | null
  }

  export type AllergiesWhereInput = {
    AND?: AllergiesWhereInput | AllergiesWhereInput[]
    OR?: AllergiesWhereInput[]
    NOT?: AllergiesWhereInput | AllergiesWhereInput[]
    id?: IntFilter<"Allergies"> | number
    userId?: IntFilter<"Allergies"> | number
    trigger?: StringFilter<"Allergies"> | string
    severity?: IntFilter<"Allergies"> | number
    reaction?: StringFilter<"Allergies"> | string
    notes?: StringNullableFilter<"Allergies"> | string | null
    date?: DateTimeFilter<"Allergies"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AllergiesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    trigger?: SortOrder
    severity?: SortOrder
    reaction?: SortOrder
    notes?: SortOrderInput | SortOrder
    date?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AllergiesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AllergiesWhereInput | AllergiesWhereInput[]
    OR?: AllergiesWhereInput[]
    NOT?: AllergiesWhereInput | AllergiesWhereInput[]
    userId?: IntFilter<"Allergies"> | number
    trigger?: StringFilter<"Allergies"> | string
    severity?: IntFilter<"Allergies"> | number
    reaction?: StringFilter<"Allergies"> | string
    notes?: StringNullableFilter<"Allergies"> | string | null
    date?: DateTimeFilter<"Allergies"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AllergiesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    trigger?: SortOrder
    severity?: SortOrder
    reaction?: SortOrder
    notes?: SortOrderInput | SortOrder
    date?: SortOrder
    _count?: AllergiesCountOrderByAggregateInput
    _avg?: AllergiesAvgOrderByAggregateInput
    _max?: AllergiesMaxOrderByAggregateInput
    _min?: AllergiesMinOrderByAggregateInput
    _sum?: AllergiesSumOrderByAggregateInput
  }

  export type AllergiesScalarWhereWithAggregatesInput = {
    AND?: AllergiesScalarWhereWithAggregatesInput | AllergiesScalarWhereWithAggregatesInput[]
    OR?: AllergiesScalarWhereWithAggregatesInput[]
    NOT?: AllergiesScalarWhereWithAggregatesInput | AllergiesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Allergies"> | number
    userId?: IntWithAggregatesFilter<"Allergies"> | number
    trigger?: StringWithAggregatesFilter<"Allergies"> | string
    severity?: IntWithAggregatesFilter<"Allergies"> | number
    reaction?: StringWithAggregatesFilter<"Allergies"> | string
    notes?: StringNullableWithAggregatesFilter<"Allergies"> | string | null
    date?: DateTimeWithAggregatesFilter<"Allergies"> | Date | string
  }

  export type SymptomsWhereInput = {
    AND?: SymptomsWhereInput | SymptomsWhereInput[]
    OR?: SymptomsWhereInput[]
    NOT?: SymptomsWhereInput | SymptomsWhereInput[]
    id?: IntFilter<"Symptoms"> | number
    userId?: IntFilter<"Symptoms"> | number
    symptoms?: StringNullableListFilter<"Symptoms">
    name?: StringFilter<"Symptoms"> | string
    severity?: IntFilter<"Symptoms"> | number
    duration?: StringFilter<"Symptoms"> | string
    notes?: StringNullableFilter<"Symptoms"> | string | null
    date?: DateTimeFilter<"Symptoms"> | Date | string
    diagnosisId?: IntNullableFilter<"Symptoms"> | number | null
    diagnosis?: XOR<MedicalHistoryNullableScalarRelationFilter, MedicalHistoryWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SymptomsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    symptoms?: SortOrder
    name?: SortOrder
    severity?: SortOrder
    duration?: SortOrder
    notes?: SortOrderInput | SortOrder
    date?: SortOrder
    diagnosisId?: SortOrderInput | SortOrder
    diagnosis?: MedicalHistoryOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type SymptomsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SymptomsWhereInput | SymptomsWhereInput[]
    OR?: SymptomsWhereInput[]
    NOT?: SymptomsWhereInput | SymptomsWhereInput[]
    userId?: IntFilter<"Symptoms"> | number
    symptoms?: StringNullableListFilter<"Symptoms">
    name?: StringFilter<"Symptoms"> | string
    severity?: IntFilter<"Symptoms"> | number
    duration?: StringFilter<"Symptoms"> | string
    notes?: StringNullableFilter<"Symptoms"> | string | null
    date?: DateTimeFilter<"Symptoms"> | Date | string
    diagnosisId?: IntNullableFilter<"Symptoms"> | number | null
    diagnosis?: XOR<MedicalHistoryNullableScalarRelationFilter, MedicalHistoryWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SymptomsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    symptoms?: SortOrder
    name?: SortOrder
    severity?: SortOrder
    duration?: SortOrder
    notes?: SortOrderInput | SortOrder
    date?: SortOrder
    diagnosisId?: SortOrderInput | SortOrder
    _count?: SymptomsCountOrderByAggregateInput
    _avg?: SymptomsAvgOrderByAggregateInput
    _max?: SymptomsMaxOrderByAggregateInput
    _min?: SymptomsMinOrderByAggregateInput
    _sum?: SymptomsSumOrderByAggregateInput
  }

  export type SymptomsScalarWhereWithAggregatesInput = {
    AND?: SymptomsScalarWhereWithAggregatesInput | SymptomsScalarWhereWithAggregatesInput[]
    OR?: SymptomsScalarWhereWithAggregatesInput[]
    NOT?: SymptomsScalarWhereWithAggregatesInput | SymptomsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Symptoms"> | number
    userId?: IntWithAggregatesFilter<"Symptoms"> | number
    symptoms?: StringNullableListFilter<"Symptoms">
    name?: StringWithAggregatesFilter<"Symptoms"> | string
    severity?: IntWithAggregatesFilter<"Symptoms"> | number
    duration?: StringWithAggregatesFilter<"Symptoms"> | string
    notes?: StringNullableWithAggregatesFilter<"Symptoms"> | string | null
    date?: DateTimeWithAggregatesFilter<"Symptoms"> | Date | string
    diagnosisId?: IntNullableWithAggregatesFilter<"Symptoms"> | number | null
  }

  export type HospitalWhereInput = {
    AND?: HospitalWhereInput | HospitalWhereInput[]
    OR?: HospitalWhereInput[]
    NOT?: HospitalWhereInput | HospitalWhereInput[]
    id?: IntFilter<"Hospital"> | number
    name?: StringFilter<"Hospital"> | string
    address?: StringFilter<"Hospital"> | string
    region?: StringFilter<"Hospital"> | string
    latitude?: FloatNullableFilter<"Hospital"> | number | null
    longitude?: FloatNullableFilter<"Hospital"> | number | null
    phone?: StringNullableFilter<"Hospital"> | string | null
    specializations?: StringNullableListFilter<"Hospital">
  }

  export type HospitalOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    region?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    specializations?: SortOrder
  }

  export type HospitalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HospitalWhereInput | HospitalWhereInput[]
    OR?: HospitalWhereInput[]
    NOT?: HospitalWhereInput | HospitalWhereInput[]
    name?: StringFilter<"Hospital"> | string
    address?: StringFilter<"Hospital"> | string
    region?: StringFilter<"Hospital"> | string
    latitude?: FloatNullableFilter<"Hospital"> | number | null
    longitude?: FloatNullableFilter<"Hospital"> | number | null
    phone?: StringNullableFilter<"Hospital"> | string | null
    specializations?: StringNullableListFilter<"Hospital">
  }, "id">

  export type HospitalOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    region?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    specializations?: SortOrder
    _count?: HospitalCountOrderByAggregateInput
    _avg?: HospitalAvgOrderByAggregateInput
    _max?: HospitalMaxOrderByAggregateInput
    _min?: HospitalMinOrderByAggregateInput
    _sum?: HospitalSumOrderByAggregateInput
  }

  export type HospitalScalarWhereWithAggregatesInput = {
    AND?: HospitalScalarWhereWithAggregatesInput | HospitalScalarWhereWithAggregatesInput[]
    OR?: HospitalScalarWhereWithAggregatesInput[]
    NOT?: HospitalScalarWhereWithAggregatesInput | HospitalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Hospital"> | number
    name?: StringWithAggregatesFilter<"Hospital"> | string
    address?: StringWithAggregatesFilter<"Hospital"> | string
    region?: StringWithAggregatesFilter<"Hospital"> | string
    latitude?: FloatNullableWithAggregatesFilter<"Hospital"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"Hospital"> | number | null
    phone?: StringNullableWithAggregatesFilter<"Hospital"> | string | null
    specializations?: StringNullableListFilter<"Hospital">
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    location?: StringNullableFilter<"User"> | string | null
    age?: IntNullableFilter<"User"> | number | null
    gender?: StringNullableFilter<"User"> | string | null
    weight?: IntNullableFilter<"User"> | number | null
    height?: IntNullableFilter<"User"> | number | null
    preExistingConditions?: StringNullableListFilter<"User">
    symptoms?: SymptomsListRelationFilter
    allergies?: AllergiesListRelationFilter
    medicalHistory?: MedicalHistoryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    preExistingConditions?: SortOrder
    symptoms?: SymptomsOrderByRelationAggregateInput
    allergies?: AllergiesOrderByRelationAggregateInput
    medicalHistory?: MedicalHistoryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    password?: StringFilter<"User"> | string
    location?: StringNullableFilter<"User"> | string | null
    age?: IntNullableFilter<"User"> | number | null
    gender?: StringNullableFilter<"User"> | string | null
    weight?: IntNullableFilter<"User"> | number | null
    height?: IntNullableFilter<"User"> | number | null
    preExistingConditions?: StringNullableListFilter<"User">
    symptoms?: SymptomsListRelationFilter
    allergies?: AllergiesListRelationFilter
    medicalHistory?: MedicalHistoryListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    preExistingConditions?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    location?: StringNullableWithAggregatesFilter<"User"> | string | null
    age?: IntNullableWithAggregatesFilter<"User"> | number | null
    gender?: StringNullableWithAggregatesFilter<"User"> | string | null
    weight?: IntNullableWithAggregatesFilter<"User"> | number | null
    height?: IntNullableWithAggregatesFilter<"User"> | number | null
    preExistingConditions?: StringNullableListFilter<"User">
  }

  export type MedicalHistoryCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    condition: string
    diagnosisDate: Date | string
    medications?: string | null
    notes?: string | null
    user: UserCreateNestedOneWithoutMedicalHistoryInput
    symptoms?: SymptomsCreateNestedManyWithoutDiagnosisInput
  }

  export type MedicalHistoryUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    condition: string
    diagnosisDate: Date | string
    medications?: string | null
    notes?: string | null
    symptoms?: SymptomsUncheckedCreateNestedManyWithoutDiagnosisInput
  }

  export type MedicalHistoryUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    condition?: StringFieldUpdateOperationsInput | string
    diagnosisDate?: DateTimeFieldUpdateOperationsInput | Date | string
    medications?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutMedicalHistoryNestedInput
    symptoms?: SymptomsUpdateManyWithoutDiagnosisNestedInput
  }

  export type MedicalHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    condition?: StringFieldUpdateOperationsInput | string
    diagnosisDate?: DateTimeFieldUpdateOperationsInput | Date | string
    medications?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    symptoms?: SymptomsUncheckedUpdateManyWithoutDiagnosisNestedInput
  }

  export type MedicalHistoryCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    condition: string
    diagnosisDate: Date | string
    medications?: string | null
    notes?: string | null
  }

  export type MedicalHistoryUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    condition?: StringFieldUpdateOperationsInput | string
    diagnosisDate?: DateTimeFieldUpdateOperationsInput | Date | string
    medications?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MedicalHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    condition?: StringFieldUpdateOperationsInput | string
    diagnosisDate?: DateTimeFieldUpdateOperationsInput | Date | string
    medications?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AllergiesCreateInput = {
    trigger: string
    severity: number
    reaction: string
    notes?: string | null
    date?: Date | string
    user: UserCreateNestedOneWithoutAllergiesInput
  }

  export type AllergiesUncheckedCreateInput = {
    id?: number
    userId: number
    trigger: string
    severity: number
    reaction: string
    notes?: string | null
    date?: Date | string
  }

  export type AllergiesUpdateInput = {
    trigger?: StringFieldUpdateOperationsInput | string
    severity?: IntFieldUpdateOperationsInput | number
    reaction?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAllergiesNestedInput
  }

  export type AllergiesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    trigger?: StringFieldUpdateOperationsInput | string
    severity?: IntFieldUpdateOperationsInput | number
    reaction?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AllergiesCreateManyInput = {
    id?: number
    userId: number
    trigger: string
    severity: number
    reaction: string
    notes?: string | null
    date?: Date | string
  }

  export type AllergiesUpdateManyMutationInput = {
    trigger?: StringFieldUpdateOperationsInput | string
    severity?: IntFieldUpdateOperationsInput | number
    reaction?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AllergiesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    trigger?: StringFieldUpdateOperationsInput | string
    severity?: IntFieldUpdateOperationsInput | number
    reaction?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SymptomsCreateInput = {
    symptoms?: SymptomsCreatesymptomsInput | string[]
    name: string
    severity: number
    duration: string
    notes?: string | null
    date?: Date | string
    diagnosis?: MedicalHistoryCreateNestedOneWithoutSymptomsInput
    user: UserCreateNestedOneWithoutSymptomsInput
  }

  export type SymptomsUncheckedCreateInput = {
    id?: number
    userId: number
    symptoms?: SymptomsCreatesymptomsInput | string[]
    name: string
    severity: number
    duration: string
    notes?: string | null
    date?: Date | string
    diagnosisId?: number | null
  }

  export type SymptomsUpdateInput = {
    symptoms?: SymptomsUpdatesymptomsInput | string[]
    name?: StringFieldUpdateOperationsInput | string
    severity?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnosis?: MedicalHistoryUpdateOneWithoutSymptomsNestedInput
    user?: UserUpdateOneRequiredWithoutSymptomsNestedInput
  }

  export type SymptomsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    symptoms?: SymptomsUpdatesymptomsInput | string[]
    name?: StringFieldUpdateOperationsInput | string
    severity?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnosisId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SymptomsCreateManyInput = {
    id?: number
    userId: number
    symptoms?: SymptomsCreatesymptomsInput | string[]
    name: string
    severity: number
    duration: string
    notes?: string | null
    date?: Date | string
    diagnosisId?: number | null
  }

  export type SymptomsUpdateManyMutationInput = {
    symptoms?: SymptomsUpdatesymptomsInput | string[]
    name?: StringFieldUpdateOperationsInput | string
    severity?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SymptomsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    symptoms?: SymptomsUpdatesymptomsInput | string[]
    name?: StringFieldUpdateOperationsInput | string
    severity?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnosisId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type HospitalCreateInput = {
    name: string
    address: string
    region: string
    latitude?: number | null
    longitude?: number | null
    phone?: string | null
    specializations?: HospitalCreatespecializationsInput | string[]
  }

  export type HospitalUncheckedCreateInput = {
    id?: number
    name: string
    address: string
    region: string
    latitude?: number | null
    longitude?: number | null
    phone?: string | null
    specializations?: HospitalCreatespecializationsInput | string[]
  }

  export type HospitalUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    specializations?: HospitalUpdatespecializationsInput | string[]
  }

  export type HospitalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    specializations?: HospitalUpdatespecializationsInput | string[]
  }

  export type HospitalCreateManyInput = {
    id?: number
    name: string
    address: string
    region: string
    latitude?: number | null
    longitude?: number | null
    phone?: string | null
    specializations?: HospitalCreatespecializationsInput | string[]
  }

  export type HospitalUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    specializations?: HospitalUpdatespecializationsInput | string[]
  }

  export type HospitalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    specializations?: HospitalUpdatespecializationsInput | string[]
  }

  export type UserCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    password: string
    email?: string | null
    location?: string | null
    age?: number | null
    gender?: string | null
    weight?: number | null
    height?: number | null
    preExistingConditions?: UserCreatepreExistingConditionsInput | string[]
    symptoms?: SymptomsCreateNestedManyWithoutUserInput
    allergies?: AllergiesCreateNestedManyWithoutUserInput
    medicalHistory?: MedicalHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    password: string
    email?: string | null
    location?: string | null
    age?: number | null
    gender?: string | null
    weight?: number | null
    height?: number | null
    preExistingConditions?: UserCreatepreExistingConditionsInput | string[]
    symptoms?: SymptomsUncheckedCreateNestedManyWithoutUserInput
    allergies?: AllergiesUncheckedCreateNestedManyWithoutUserInput
    medicalHistory?: MedicalHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    preExistingConditions?: UserUpdatepreExistingConditionsInput | string[]
    symptoms?: SymptomsUpdateManyWithoutUserNestedInput
    allergies?: AllergiesUpdateManyWithoutUserNestedInput
    medicalHistory?: MedicalHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    preExistingConditions?: UserUpdatepreExistingConditionsInput | string[]
    symptoms?: SymptomsUncheckedUpdateManyWithoutUserNestedInput
    allergies?: AllergiesUncheckedUpdateManyWithoutUserNestedInput
    medicalHistory?: MedicalHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    password: string
    email?: string | null
    location?: string | null
    age?: number | null
    gender?: string | null
    weight?: number | null
    height?: number | null
    preExistingConditions?: UserCreatepreExistingConditionsInput | string[]
  }

  export type UserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    preExistingConditions?: UserUpdatepreExistingConditionsInput | string[]
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    preExistingConditions?: UserUpdatepreExistingConditionsInput | string[]
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SymptomsListRelationFilter = {
    every?: SymptomsWhereInput
    some?: SymptomsWhereInput
    none?: SymptomsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SymptomsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedicalHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    condition?: SortOrder
    diagnosisDate?: SortOrder
    medications?: SortOrder
    notes?: SortOrder
  }

  export type MedicalHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type MedicalHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    condition?: SortOrder
    diagnosisDate?: SortOrder
    medications?: SortOrder
    notes?: SortOrder
  }

  export type MedicalHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    condition?: SortOrder
    diagnosisDate?: SortOrder
    medications?: SortOrder
    notes?: SortOrder
  }

  export type MedicalHistorySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type AllergiesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    trigger?: SortOrder
    severity?: SortOrder
    reaction?: SortOrder
    notes?: SortOrder
    date?: SortOrder
  }

  export type AllergiesAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    severity?: SortOrder
  }

  export type AllergiesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    trigger?: SortOrder
    severity?: SortOrder
    reaction?: SortOrder
    notes?: SortOrder
    date?: SortOrder
  }

  export type AllergiesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    trigger?: SortOrder
    severity?: SortOrder
    reaction?: SortOrder
    notes?: SortOrder
    date?: SortOrder
  }

  export type AllergiesSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    severity?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type MedicalHistoryNullableScalarRelationFilter = {
    is?: MedicalHistoryWhereInput | null
    isNot?: MedicalHistoryWhereInput | null
  }

  export type SymptomsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    symptoms?: SortOrder
    name?: SortOrder
    severity?: SortOrder
    duration?: SortOrder
    notes?: SortOrder
    date?: SortOrder
    diagnosisId?: SortOrder
  }

  export type SymptomsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    severity?: SortOrder
    diagnosisId?: SortOrder
  }

  export type SymptomsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    severity?: SortOrder
    duration?: SortOrder
    notes?: SortOrder
    date?: SortOrder
    diagnosisId?: SortOrder
  }

  export type SymptomsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    severity?: SortOrder
    duration?: SortOrder
    notes?: SortOrder
    date?: SortOrder
    diagnosisId?: SortOrder
  }

  export type SymptomsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    severity?: SortOrder
    diagnosisId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type HospitalCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    region?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    phone?: SortOrder
    specializations?: SortOrder
  }

  export type HospitalAvgOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type HospitalMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    region?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    phone?: SortOrder
  }

  export type HospitalMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    region?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    phone?: SortOrder
  }

  export type HospitalSumOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type AllergiesListRelationFilter = {
    every?: AllergiesWhereInput
    some?: AllergiesWhereInput
    none?: AllergiesWhereInput
  }

  export type MedicalHistoryListRelationFilter = {
    every?: MedicalHistoryWhereInput
    some?: MedicalHistoryWhereInput
    none?: MedicalHistoryWhereInput
  }

  export type AllergiesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedicalHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    location?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    preExistingConditions?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    weight?: SortOrder
    height?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    location?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    weight?: SortOrder
    height?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    location?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    weight?: SortOrder
    height?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    weight?: SortOrder
    height?: SortOrder
  }

  export type UserCreateNestedOneWithoutMedicalHistoryInput = {
    create?: XOR<UserCreateWithoutMedicalHistoryInput, UserUncheckedCreateWithoutMedicalHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutMedicalHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type SymptomsCreateNestedManyWithoutDiagnosisInput = {
    create?: XOR<SymptomsCreateWithoutDiagnosisInput, SymptomsUncheckedCreateWithoutDiagnosisInput> | SymptomsCreateWithoutDiagnosisInput[] | SymptomsUncheckedCreateWithoutDiagnosisInput[]
    connectOrCreate?: SymptomsCreateOrConnectWithoutDiagnosisInput | SymptomsCreateOrConnectWithoutDiagnosisInput[]
    createMany?: SymptomsCreateManyDiagnosisInputEnvelope
    connect?: SymptomsWhereUniqueInput | SymptomsWhereUniqueInput[]
  }

  export type SymptomsUncheckedCreateNestedManyWithoutDiagnosisInput = {
    create?: XOR<SymptomsCreateWithoutDiagnosisInput, SymptomsUncheckedCreateWithoutDiagnosisInput> | SymptomsCreateWithoutDiagnosisInput[] | SymptomsUncheckedCreateWithoutDiagnosisInput[]
    connectOrCreate?: SymptomsCreateOrConnectWithoutDiagnosisInput | SymptomsCreateOrConnectWithoutDiagnosisInput[]
    createMany?: SymptomsCreateManyDiagnosisInputEnvelope
    connect?: SymptomsWhereUniqueInput | SymptomsWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutMedicalHistoryNestedInput = {
    create?: XOR<UserCreateWithoutMedicalHistoryInput, UserUncheckedCreateWithoutMedicalHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutMedicalHistoryInput
    upsert?: UserUpsertWithoutMedicalHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMedicalHistoryInput, UserUpdateWithoutMedicalHistoryInput>, UserUncheckedUpdateWithoutMedicalHistoryInput>
  }

  export type SymptomsUpdateManyWithoutDiagnosisNestedInput = {
    create?: XOR<SymptomsCreateWithoutDiagnosisInput, SymptomsUncheckedCreateWithoutDiagnosisInput> | SymptomsCreateWithoutDiagnosisInput[] | SymptomsUncheckedCreateWithoutDiagnosisInput[]
    connectOrCreate?: SymptomsCreateOrConnectWithoutDiagnosisInput | SymptomsCreateOrConnectWithoutDiagnosisInput[]
    upsert?: SymptomsUpsertWithWhereUniqueWithoutDiagnosisInput | SymptomsUpsertWithWhereUniqueWithoutDiagnosisInput[]
    createMany?: SymptomsCreateManyDiagnosisInputEnvelope
    set?: SymptomsWhereUniqueInput | SymptomsWhereUniqueInput[]
    disconnect?: SymptomsWhereUniqueInput | SymptomsWhereUniqueInput[]
    delete?: SymptomsWhereUniqueInput | SymptomsWhereUniqueInput[]
    connect?: SymptomsWhereUniqueInput | SymptomsWhereUniqueInput[]
    update?: SymptomsUpdateWithWhereUniqueWithoutDiagnosisInput | SymptomsUpdateWithWhereUniqueWithoutDiagnosisInput[]
    updateMany?: SymptomsUpdateManyWithWhereWithoutDiagnosisInput | SymptomsUpdateManyWithWhereWithoutDiagnosisInput[]
    deleteMany?: SymptomsScalarWhereInput | SymptomsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SymptomsUncheckedUpdateManyWithoutDiagnosisNestedInput = {
    create?: XOR<SymptomsCreateWithoutDiagnosisInput, SymptomsUncheckedCreateWithoutDiagnosisInput> | SymptomsCreateWithoutDiagnosisInput[] | SymptomsUncheckedCreateWithoutDiagnosisInput[]
    connectOrCreate?: SymptomsCreateOrConnectWithoutDiagnosisInput | SymptomsCreateOrConnectWithoutDiagnosisInput[]
    upsert?: SymptomsUpsertWithWhereUniqueWithoutDiagnosisInput | SymptomsUpsertWithWhereUniqueWithoutDiagnosisInput[]
    createMany?: SymptomsCreateManyDiagnosisInputEnvelope
    set?: SymptomsWhereUniqueInput | SymptomsWhereUniqueInput[]
    disconnect?: SymptomsWhereUniqueInput | SymptomsWhereUniqueInput[]
    delete?: SymptomsWhereUniqueInput | SymptomsWhereUniqueInput[]
    connect?: SymptomsWhereUniqueInput | SymptomsWhereUniqueInput[]
    update?: SymptomsUpdateWithWhereUniqueWithoutDiagnosisInput | SymptomsUpdateWithWhereUniqueWithoutDiagnosisInput[]
    updateMany?: SymptomsUpdateManyWithWhereWithoutDiagnosisInput | SymptomsUpdateManyWithWhereWithoutDiagnosisInput[]
    deleteMany?: SymptomsScalarWhereInput | SymptomsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAllergiesInput = {
    create?: XOR<UserCreateWithoutAllergiesInput, UserUncheckedCreateWithoutAllergiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAllergiesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAllergiesNestedInput = {
    create?: XOR<UserCreateWithoutAllergiesInput, UserUncheckedCreateWithoutAllergiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAllergiesInput
    upsert?: UserUpsertWithoutAllergiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAllergiesInput, UserUpdateWithoutAllergiesInput>, UserUncheckedUpdateWithoutAllergiesInput>
  }

  export type SymptomsCreatesymptomsInput = {
    set: string[]
  }

  export type MedicalHistoryCreateNestedOneWithoutSymptomsInput = {
    create?: XOR<MedicalHistoryCreateWithoutSymptomsInput, MedicalHistoryUncheckedCreateWithoutSymptomsInput>
    connectOrCreate?: MedicalHistoryCreateOrConnectWithoutSymptomsInput
    connect?: MedicalHistoryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSymptomsInput = {
    create?: XOR<UserCreateWithoutSymptomsInput, UserUncheckedCreateWithoutSymptomsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSymptomsInput
    connect?: UserWhereUniqueInput
  }

  export type SymptomsUpdatesymptomsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MedicalHistoryUpdateOneWithoutSymptomsNestedInput = {
    create?: XOR<MedicalHistoryCreateWithoutSymptomsInput, MedicalHistoryUncheckedCreateWithoutSymptomsInput>
    connectOrCreate?: MedicalHistoryCreateOrConnectWithoutSymptomsInput
    upsert?: MedicalHistoryUpsertWithoutSymptomsInput
    disconnect?: MedicalHistoryWhereInput | boolean
    delete?: MedicalHistoryWhereInput | boolean
    connect?: MedicalHistoryWhereUniqueInput
    update?: XOR<XOR<MedicalHistoryUpdateToOneWithWhereWithoutSymptomsInput, MedicalHistoryUpdateWithoutSymptomsInput>, MedicalHistoryUncheckedUpdateWithoutSymptomsInput>
  }

  export type UserUpdateOneRequiredWithoutSymptomsNestedInput = {
    create?: XOR<UserCreateWithoutSymptomsInput, UserUncheckedCreateWithoutSymptomsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSymptomsInput
    upsert?: UserUpsertWithoutSymptomsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSymptomsInput, UserUpdateWithoutSymptomsInput>, UserUncheckedUpdateWithoutSymptomsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type HospitalCreatespecializationsInput = {
    set: string[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type HospitalUpdatespecializationsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserCreatepreExistingConditionsInput = {
    set: string[]
  }

  export type SymptomsCreateNestedManyWithoutUserInput = {
    create?: XOR<SymptomsCreateWithoutUserInput, SymptomsUncheckedCreateWithoutUserInput> | SymptomsCreateWithoutUserInput[] | SymptomsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SymptomsCreateOrConnectWithoutUserInput | SymptomsCreateOrConnectWithoutUserInput[]
    createMany?: SymptomsCreateManyUserInputEnvelope
    connect?: SymptomsWhereUniqueInput | SymptomsWhereUniqueInput[]
  }

  export type AllergiesCreateNestedManyWithoutUserInput = {
    create?: XOR<AllergiesCreateWithoutUserInput, AllergiesUncheckedCreateWithoutUserInput> | AllergiesCreateWithoutUserInput[] | AllergiesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AllergiesCreateOrConnectWithoutUserInput | AllergiesCreateOrConnectWithoutUserInput[]
    createMany?: AllergiesCreateManyUserInputEnvelope
    connect?: AllergiesWhereUniqueInput | AllergiesWhereUniqueInput[]
  }

  export type MedicalHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<MedicalHistoryCreateWithoutUserInput, MedicalHistoryUncheckedCreateWithoutUserInput> | MedicalHistoryCreateWithoutUserInput[] | MedicalHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MedicalHistoryCreateOrConnectWithoutUserInput | MedicalHistoryCreateOrConnectWithoutUserInput[]
    createMany?: MedicalHistoryCreateManyUserInputEnvelope
    connect?: MedicalHistoryWhereUniqueInput | MedicalHistoryWhereUniqueInput[]
  }

  export type SymptomsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SymptomsCreateWithoutUserInput, SymptomsUncheckedCreateWithoutUserInput> | SymptomsCreateWithoutUserInput[] | SymptomsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SymptomsCreateOrConnectWithoutUserInput | SymptomsCreateOrConnectWithoutUserInput[]
    createMany?: SymptomsCreateManyUserInputEnvelope
    connect?: SymptomsWhereUniqueInput | SymptomsWhereUniqueInput[]
  }

  export type AllergiesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AllergiesCreateWithoutUserInput, AllergiesUncheckedCreateWithoutUserInput> | AllergiesCreateWithoutUserInput[] | AllergiesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AllergiesCreateOrConnectWithoutUserInput | AllergiesCreateOrConnectWithoutUserInput[]
    createMany?: AllergiesCreateManyUserInputEnvelope
    connect?: AllergiesWhereUniqueInput | AllergiesWhereUniqueInput[]
  }

  export type MedicalHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MedicalHistoryCreateWithoutUserInput, MedicalHistoryUncheckedCreateWithoutUserInput> | MedicalHistoryCreateWithoutUserInput[] | MedicalHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MedicalHistoryCreateOrConnectWithoutUserInput | MedicalHistoryCreateOrConnectWithoutUserInput[]
    createMany?: MedicalHistoryCreateManyUserInputEnvelope
    connect?: MedicalHistoryWhereUniqueInput | MedicalHistoryWhereUniqueInput[]
  }

  export type UserUpdatepreExistingConditionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SymptomsUpdateManyWithoutUserNestedInput = {
    create?: XOR<SymptomsCreateWithoutUserInput, SymptomsUncheckedCreateWithoutUserInput> | SymptomsCreateWithoutUserInput[] | SymptomsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SymptomsCreateOrConnectWithoutUserInput | SymptomsCreateOrConnectWithoutUserInput[]
    upsert?: SymptomsUpsertWithWhereUniqueWithoutUserInput | SymptomsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SymptomsCreateManyUserInputEnvelope
    set?: SymptomsWhereUniqueInput | SymptomsWhereUniqueInput[]
    disconnect?: SymptomsWhereUniqueInput | SymptomsWhereUniqueInput[]
    delete?: SymptomsWhereUniqueInput | SymptomsWhereUniqueInput[]
    connect?: SymptomsWhereUniqueInput | SymptomsWhereUniqueInput[]
    update?: SymptomsUpdateWithWhereUniqueWithoutUserInput | SymptomsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SymptomsUpdateManyWithWhereWithoutUserInput | SymptomsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SymptomsScalarWhereInput | SymptomsScalarWhereInput[]
  }

  export type AllergiesUpdateManyWithoutUserNestedInput = {
    create?: XOR<AllergiesCreateWithoutUserInput, AllergiesUncheckedCreateWithoutUserInput> | AllergiesCreateWithoutUserInput[] | AllergiesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AllergiesCreateOrConnectWithoutUserInput | AllergiesCreateOrConnectWithoutUserInput[]
    upsert?: AllergiesUpsertWithWhereUniqueWithoutUserInput | AllergiesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AllergiesCreateManyUserInputEnvelope
    set?: AllergiesWhereUniqueInput | AllergiesWhereUniqueInput[]
    disconnect?: AllergiesWhereUniqueInput | AllergiesWhereUniqueInput[]
    delete?: AllergiesWhereUniqueInput | AllergiesWhereUniqueInput[]
    connect?: AllergiesWhereUniqueInput | AllergiesWhereUniqueInput[]
    update?: AllergiesUpdateWithWhereUniqueWithoutUserInput | AllergiesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AllergiesUpdateManyWithWhereWithoutUserInput | AllergiesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AllergiesScalarWhereInput | AllergiesScalarWhereInput[]
  }

  export type MedicalHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<MedicalHistoryCreateWithoutUserInput, MedicalHistoryUncheckedCreateWithoutUserInput> | MedicalHistoryCreateWithoutUserInput[] | MedicalHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MedicalHistoryCreateOrConnectWithoutUserInput | MedicalHistoryCreateOrConnectWithoutUserInput[]
    upsert?: MedicalHistoryUpsertWithWhereUniqueWithoutUserInput | MedicalHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MedicalHistoryCreateManyUserInputEnvelope
    set?: MedicalHistoryWhereUniqueInput | MedicalHistoryWhereUniqueInput[]
    disconnect?: MedicalHistoryWhereUniqueInput | MedicalHistoryWhereUniqueInput[]
    delete?: MedicalHistoryWhereUniqueInput | MedicalHistoryWhereUniqueInput[]
    connect?: MedicalHistoryWhereUniqueInput | MedicalHistoryWhereUniqueInput[]
    update?: MedicalHistoryUpdateWithWhereUniqueWithoutUserInput | MedicalHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MedicalHistoryUpdateManyWithWhereWithoutUserInput | MedicalHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MedicalHistoryScalarWhereInput | MedicalHistoryScalarWhereInput[]
  }

  export type SymptomsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SymptomsCreateWithoutUserInput, SymptomsUncheckedCreateWithoutUserInput> | SymptomsCreateWithoutUserInput[] | SymptomsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SymptomsCreateOrConnectWithoutUserInput | SymptomsCreateOrConnectWithoutUserInput[]
    upsert?: SymptomsUpsertWithWhereUniqueWithoutUserInput | SymptomsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SymptomsCreateManyUserInputEnvelope
    set?: SymptomsWhereUniqueInput | SymptomsWhereUniqueInput[]
    disconnect?: SymptomsWhereUniqueInput | SymptomsWhereUniqueInput[]
    delete?: SymptomsWhereUniqueInput | SymptomsWhereUniqueInput[]
    connect?: SymptomsWhereUniqueInput | SymptomsWhereUniqueInput[]
    update?: SymptomsUpdateWithWhereUniqueWithoutUserInput | SymptomsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SymptomsUpdateManyWithWhereWithoutUserInput | SymptomsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SymptomsScalarWhereInput | SymptomsScalarWhereInput[]
  }

  export type AllergiesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AllergiesCreateWithoutUserInput, AllergiesUncheckedCreateWithoutUserInput> | AllergiesCreateWithoutUserInput[] | AllergiesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AllergiesCreateOrConnectWithoutUserInput | AllergiesCreateOrConnectWithoutUserInput[]
    upsert?: AllergiesUpsertWithWhereUniqueWithoutUserInput | AllergiesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AllergiesCreateManyUserInputEnvelope
    set?: AllergiesWhereUniqueInput | AllergiesWhereUniqueInput[]
    disconnect?: AllergiesWhereUniqueInput | AllergiesWhereUniqueInput[]
    delete?: AllergiesWhereUniqueInput | AllergiesWhereUniqueInput[]
    connect?: AllergiesWhereUniqueInput | AllergiesWhereUniqueInput[]
    update?: AllergiesUpdateWithWhereUniqueWithoutUserInput | AllergiesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AllergiesUpdateManyWithWhereWithoutUserInput | AllergiesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AllergiesScalarWhereInput | AllergiesScalarWhereInput[]
  }

  export type MedicalHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MedicalHistoryCreateWithoutUserInput, MedicalHistoryUncheckedCreateWithoutUserInput> | MedicalHistoryCreateWithoutUserInput[] | MedicalHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MedicalHistoryCreateOrConnectWithoutUserInput | MedicalHistoryCreateOrConnectWithoutUserInput[]
    upsert?: MedicalHistoryUpsertWithWhereUniqueWithoutUserInput | MedicalHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MedicalHistoryCreateManyUserInputEnvelope
    set?: MedicalHistoryWhereUniqueInput | MedicalHistoryWhereUniqueInput[]
    disconnect?: MedicalHistoryWhereUniqueInput | MedicalHistoryWhereUniqueInput[]
    delete?: MedicalHistoryWhereUniqueInput | MedicalHistoryWhereUniqueInput[]
    connect?: MedicalHistoryWhereUniqueInput | MedicalHistoryWhereUniqueInput[]
    update?: MedicalHistoryUpdateWithWhereUniqueWithoutUserInput | MedicalHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MedicalHistoryUpdateManyWithWhereWithoutUserInput | MedicalHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MedicalHistoryScalarWhereInput | MedicalHistoryScalarWhereInput[]
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type UserCreateWithoutMedicalHistoryInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    password: string
    email?: string | null
    location?: string | null
    age?: number | null
    gender?: string | null
    weight?: number | null
    height?: number | null
    preExistingConditions?: UserCreatepreExistingConditionsInput | string[]
    symptoms?: SymptomsCreateNestedManyWithoutUserInput
    allergies?: AllergiesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMedicalHistoryInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    password: string
    email?: string | null
    location?: string | null
    age?: number | null
    gender?: string | null
    weight?: number | null
    height?: number | null
    preExistingConditions?: UserCreatepreExistingConditionsInput | string[]
    symptoms?: SymptomsUncheckedCreateNestedManyWithoutUserInput
    allergies?: AllergiesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMedicalHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMedicalHistoryInput, UserUncheckedCreateWithoutMedicalHistoryInput>
  }

  export type SymptomsCreateWithoutDiagnosisInput = {
    symptoms?: SymptomsCreatesymptomsInput | string[]
    name: string
    severity: number
    duration: string
    notes?: string | null
    date?: Date | string
    user: UserCreateNestedOneWithoutSymptomsInput
  }

  export type SymptomsUncheckedCreateWithoutDiagnosisInput = {
    id?: number
    userId: number
    symptoms?: SymptomsCreatesymptomsInput | string[]
    name: string
    severity: number
    duration: string
    notes?: string | null
    date?: Date | string
  }

  export type SymptomsCreateOrConnectWithoutDiagnosisInput = {
    where: SymptomsWhereUniqueInput
    create: XOR<SymptomsCreateWithoutDiagnosisInput, SymptomsUncheckedCreateWithoutDiagnosisInput>
  }

  export type SymptomsCreateManyDiagnosisInputEnvelope = {
    data: SymptomsCreateManyDiagnosisInput | SymptomsCreateManyDiagnosisInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMedicalHistoryInput = {
    update: XOR<UserUpdateWithoutMedicalHistoryInput, UserUncheckedUpdateWithoutMedicalHistoryInput>
    create: XOR<UserCreateWithoutMedicalHistoryInput, UserUncheckedCreateWithoutMedicalHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMedicalHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMedicalHistoryInput, UserUncheckedUpdateWithoutMedicalHistoryInput>
  }

  export type UserUpdateWithoutMedicalHistoryInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    preExistingConditions?: UserUpdatepreExistingConditionsInput | string[]
    symptoms?: SymptomsUpdateManyWithoutUserNestedInput
    allergies?: AllergiesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMedicalHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    preExistingConditions?: UserUpdatepreExistingConditionsInput | string[]
    symptoms?: SymptomsUncheckedUpdateManyWithoutUserNestedInput
    allergies?: AllergiesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SymptomsUpsertWithWhereUniqueWithoutDiagnosisInput = {
    where: SymptomsWhereUniqueInput
    update: XOR<SymptomsUpdateWithoutDiagnosisInput, SymptomsUncheckedUpdateWithoutDiagnosisInput>
    create: XOR<SymptomsCreateWithoutDiagnosisInput, SymptomsUncheckedCreateWithoutDiagnosisInput>
  }

  export type SymptomsUpdateWithWhereUniqueWithoutDiagnosisInput = {
    where: SymptomsWhereUniqueInput
    data: XOR<SymptomsUpdateWithoutDiagnosisInput, SymptomsUncheckedUpdateWithoutDiagnosisInput>
  }

  export type SymptomsUpdateManyWithWhereWithoutDiagnosisInput = {
    where: SymptomsScalarWhereInput
    data: XOR<SymptomsUpdateManyMutationInput, SymptomsUncheckedUpdateManyWithoutDiagnosisInput>
  }

  export type SymptomsScalarWhereInput = {
    AND?: SymptomsScalarWhereInput | SymptomsScalarWhereInput[]
    OR?: SymptomsScalarWhereInput[]
    NOT?: SymptomsScalarWhereInput | SymptomsScalarWhereInput[]
    id?: IntFilter<"Symptoms"> | number
    userId?: IntFilter<"Symptoms"> | number
    symptoms?: StringNullableListFilter<"Symptoms">
    name?: StringFilter<"Symptoms"> | string
    severity?: IntFilter<"Symptoms"> | number
    duration?: StringFilter<"Symptoms"> | string
    notes?: StringNullableFilter<"Symptoms"> | string | null
    date?: DateTimeFilter<"Symptoms"> | Date | string
    diagnosisId?: IntNullableFilter<"Symptoms"> | number | null
  }

  export type UserCreateWithoutAllergiesInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    password: string
    email?: string | null
    location?: string | null
    age?: number | null
    gender?: string | null
    weight?: number | null
    height?: number | null
    preExistingConditions?: UserCreatepreExistingConditionsInput | string[]
    symptoms?: SymptomsCreateNestedManyWithoutUserInput
    medicalHistory?: MedicalHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAllergiesInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    password: string
    email?: string | null
    location?: string | null
    age?: number | null
    gender?: string | null
    weight?: number | null
    height?: number | null
    preExistingConditions?: UserCreatepreExistingConditionsInput | string[]
    symptoms?: SymptomsUncheckedCreateNestedManyWithoutUserInput
    medicalHistory?: MedicalHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAllergiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAllergiesInput, UserUncheckedCreateWithoutAllergiesInput>
  }

  export type UserUpsertWithoutAllergiesInput = {
    update: XOR<UserUpdateWithoutAllergiesInput, UserUncheckedUpdateWithoutAllergiesInput>
    create: XOR<UserCreateWithoutAllergiesInput, UserUncheckedCreateWithoutAllergiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAllergiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAllergiesInput, UserUncheckedUpdateWithoutAllergiesInput>
  }

  export type UserUpdateWithoutAllergiesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    preExistingConditions?: UserUpdatepreExistingConditionsInput | string[]
    symptoms?: SymptomsUpdateManyWithoutUserNestedInput
    medicalHistory?: MedicalHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAllergiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    preExistingConditions?: UserUpdatepreExistingConditionsInput | string[]
    symptoms?: SymptomsUncheckedUpdateManyWithoutUserNestedInput
    medicalHistory?: MedicalHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MedicalHistoryCreateWithoutSymptomsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    condition: string
    diagnosisDate: Date | string
    medications?: string | null
    notes?: string | null
    user: UserCreateNestedOneWithoutMedicalHistoryInput
  }

  export type MedicalHistoryUncheckedCreateWithoutSymptomsInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    condition: string
    diagnosisDate: Date | string
    medications?: string | null
    notes?: string | null
  }

  export type MedicalHistoryCreateOrConnectWithoutSymptomsInput = {
    where: MedicalHistoryWhereUniqueInput
    create: XOR<MedicalHistoryCreateWithoutSymptomsInput, MedicalHistoryUncheckedCreateWithoutSymptomsInput>
  }

  export type UserCreateWithoutSymptomsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    password: string
    email?: string | null
    location?: string | null
    age?: number | null
    gender?: string | null
    weight?: number | null
    height?: number | null
    preExistingConditions?: UserCreatepreExistingConditionsInput | string[]
    allergies?: AllergiesCreateNestedManyWithoutUserInput
    medicalHistory?: MedicalHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSymptomsInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    password: string
    email?: string | null
    location?: string | null
    age?: number | null
    gender?: string | null
    weight?: number | null
    height?: number | null
    preExistingConditions?: UserCreatepreExistingConditionsInput | string[]
    allergies?: AllergiesUncheckedCreateNestedManyWithoutUserInput
    medicalHistory?: MedicalHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSymptomsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSymptomsInput, UserUncheckedCreateWithoutSymptomsInput>
  }

  export type MedicalHistoryUpsertWithoutSymptomsInput = {
    update: XOR<MedicalHistoryUpdateWithoutSymptomsInput, MedicalHistoryUncheckedUpdateWithoutSymptomsInput>
    create: XOR<MedicalHistoryCreateWithoutSymptomsInput, MedicalHistoryUncheckedCreateWithoutSymptomsInput>
    where?: MedicalHistoryWhereInput
  }

  export type MedicalHistoryUpdateToOneWithWhereWithoutSymptomsInput = {
    where?: MedicalHistoryWhereInput
    data: XOR<MedicalHistoryUpdateWithoutSymptomsInput, MedicalHistoryUncheckedUpdateWithoutSymptomsInput>
  }

  export type MedicalHistoryUpdateWithoutSymptomsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    condition?: StringFieldUpdateOperationsInput | string
    diagnosisDate?: DateTimeFieldUpdateOperationsInput | Date | string
    medications?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutMedicalHistoryNestedInput
  }

  export type MedicalHistoryUncheckedUpdateWithoutSymptomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    condition?: StringFieldUpdateOperationsInput | string
    diagnosisDate?: DateTimeFieldUpdateOperationsInput | Date | string
    medications?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpsertWithoutSymptomsInput = {
    update: XOR<UserUpdateWithoutSymptomsInput, UserUncheckedUpdateWithoutSymptomsInput>
    create: XOR<UserCreateWithoutSymptomsInput, UserUncheckedCreateWithoutSymptomsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSymptomsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSymptomsInput, UserUncheckedUpdateWithoutSymptomsInput>
  }

  export type UserUpdateWithoutSymptomsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    preExistingConditions?: UserUpdatepreExistingConditionsInput | string[]
    allergies?: AllergiesUpdateManyWithoutUserNestedInput
    medicalHistory?: MedicalHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSymptomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    preExistingConditions?: UserUpdatepreExistingConditionsInput | string[]
    allergies?: AllergiesUncheckedUpdateManyWithoutUserNestedInput
    medicalHistory?: MedicalHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SymptomsCreateWithoutUserInput = {
    symptoms?: SymptomsCreatesymptomsInput | string[]
    name: string
    severity: number
    duration: string
    notes?: string | null
    date?: Date | string
    diagnosis?: MedicalHistoryCreateNestedOneWithoutSymptomsInput
  }

  export type SymptomsUncheckedCreateWithoutUserInput = {
    id?: number
    symptoms?: SymptomsCreatesymptomsInput | string[]
    name: string
    severity: number
    duration: string
    notes?: string | null
    date?: Date | string
    diagnosisId?: number | null
  }

  export type SymptomsCreateOrConnectWithoutUserInput = {
    where: SymptomsWhereUniqueInput
    create: XOR<SymptomsCreateWithoutUserInput, SymptomsUncheckedCreateWithoutUserInput>
  }

  export type SymptomsCreateManyUserInputEnvelope = {
    data: SymptomsCreateManyUserInput | SymptomsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AllergiesCreateWithoutUserInput = {
    trigger: string
    severity: number
    reaction: string
    notes?: string | null
    date?: Date | string
  }

  export type AllergiesUncheckedCreateWithoutUserInput = {
    id?: number
    trigger: string
    severity: number
    reaction: string
    notes?: string | null
    date?: Date | string
  }

  export type AllergiesCreateOrConnectWithoutUserInput = {
    where: AllergiesWhereUniqueInput
    create: XOR<AllergiesCreateWithoutUserInput, AllergiesUncheckedCreateWithoutUserInput>
  }

  export type AllergiesCreateManyUserInputEnvelope = {
    data: AllergiesCreateManyUserInput | AllergiesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MedicalHistoryCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    condition: string
    diagnosisDate: Date | string
    medications?: string | null
    notes?: string | null
    symptoms?: SymptomsCreateNestedManyWithoutDiagnosisInput
  }

  export type MedicalHistoryUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    condition: string
    diagnosisDate: Date | string
    medications?: string | null
    notes?: string | null
    symptoms?: SymptomsUncheckedCreateNestedManyWithoutDiagnosisInput
  }

  export type MedicalHistoryCreateOrConnectWithoutUserInput = {
    where: MedicalHistoryWhereUniqueInput
    create: XOR<MedicalHistoryCreateWithoutUserInput, MedicalHistoryUncheckedCreateWithoutUserInput>
  }

  export type MedicalHistoryCreateManyUserInputEnvelope = {
    data: MedicalHistoryCreateManyUserInput | MedicalHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SymptomsUpsertWithWhereUniqueWithoutUserInput = {
    where: SymptomsWhereUniqueInput
    update: XOR<SymptomsUpdateWithoutUserInput, SymptomsUncheckedUpdateWithoutUserInput>
    create: XOR<SymptomsCreateWithoutUserInput, SymptomsUncheckedCreateWithoutUserInput>
  }

  export type SymptomsUpdateWithWhereUniqueWithoutUserInput = {
    where: SymptomsWhereUniqueInput
    data: XOR<SymptomsUpdateWithoutUserInput, SymptomsUncheckedUpdateWithoutUserInput>
  }

  export type SymptomsUpdateManyWithWhereWithoutUserInput = {
    where: SymptomsScalarWhereInput
    data: XOR<SymptomsUpdateManyMutationInput, SymptomsUncheckedUpdateManyWithoutUserInput>
  }

  export type AllergiesUpsertWithWhereUniqueWithoutUserInput = {
    where: AllergiesWhereUniqueInput
    update: XOR<AllergiesUpdateWithoutUserInput, AllergiesUncheckedUpdateWithoutUserInput>
    create: XOR<AllergiesCreateWithoutUserInput, AllergiesUncheckedCreateWithoutUserInput>
  }

  export type AllergiesUpdateWithWhereUniqueWithoutUserInput = {
    where: AllergiesWhereUniqueInput
    data: XOR<AllergiesUpdateWithoutUserInput, AllergiesUncheckedUpdateWithoutUserInput>
  }

  export type AllergiesUpdateManyWithWhereWithoutUserInput = {
    where: AllergiesScalarWhereInput
    data: XOR<AllergiesUpdateManyMutationInput, AllergiesUncheckedUpdateManyWithoutUserInput>
  }

  export type AllergiesScalarWhereInput = {
    AND?: AllergiesScalarWhereInput | AllergiesScalarWhereInput[]
    OR?: AllergiesScalarWhereInput[]
    NOT?: AllergiesScalarWhereInput | AllergiesScalarWhereInput[]
    id?: IntFilter<"Allergies"> | number
    userId?: IntFilter<"Allergies"> | number
    trigger?: StringFilter<"Allergies"> | string
    severity?: IntFilter<"Allergies"> | number
    reaction?: StringFilter<"Allergies"> | string
    notes?: StringNullableFilter<"Allergies"> | string | null
    date?: DateTimeFilter<"Allergies"> | Date | string
  }

  export type MedicalHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: MedicalHistoryWhereUniqueInput
    update: XOR<MedicalHistoryUpdateWithoutUserInput, MedicalHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<MedicalHistoryCreateWithoutUserInput, MedicalHistoryUncheckedCreateWithoutUserInput>
  }

  export type MedicalHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: MedicalHistoryWhereUniqueInput
    data: XOR<MedicalHistoryUpdateWithoutUserInput, MedicalHistoryUncheckedUpdateWithoutUserInput>
  }

  export type MedicalHistoryUpdateManyWithWhereWithoutUserInput = {
    where: MedicalHistoryScalarWhereInput
    data: XOR<MedicalHistoryUpdateManyMutationInput, MedicalHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type MedicalHistoryScalarWhereInput = {
    AND?: MedicalHistoryScalarWhereInput | MedicalHistoryScalarWhereInput[]
    OR?: MedicalHistoryScalarWhereInput[]
    NOT?: MedicalHistoryScalarWhereInput | MedicalHistoryScalarWhereInput[]
    id?: IntFilter<"MedicalHistory"> | number
    createdAt?: DateTimeFilter<"MedicalHistory"> | Date | string
    updatedAt?: DateTimeFilter<"MedicalHistory"> | Date | string
    userId?: IntFilter<"MedicalHistory"> | number
    condition?: StringFilter<"MedicalHistory"> | string
    diagnosisDate?: DateTimeFilter<"MedicalHistory"> | Date | string
    medications?: StringNullableFilter<"MedicalHistory"> | string | null
    notes?: StringNullableFilter<"MedicalHistory"> | string | null
  }

  export type SymptomsCreateManyDiagnosisInput = {
    id?: number
    userId: number
    symptoms?: SymptomsCreatesymptomsInput | string[]
    name: string
    severity: number
    duration: string
    notes?: string | null
    date?: Date | string
  }

  export type SymptomsUpdateWithoutDiagnosisInput = {
    symptoms?: SymptomsUpdatesymptomsInput | string[]
    name?: StringFieldUpdateOperationsInput | string
    severity?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSymptomsNestedInput
  }

  export type SymptomsUncheckedUpdateWithoutDiagnosisInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    symptoms?: SymptomsUpdatesymptomsInput | string[]
    name?: StringFieldUpdateOperationsInput | string
    severity?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SymptomsUncheckedUpdateManyWithoutDiagnosisInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    symptoms?: SymptomsUpdatesymptomsInput | string[]
    name?: StringFieldUpdateOperationsInput | string
    severity?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SymptomsCreateManyUserInput = {
    id?: number
    symptoms?: SymptomsCreatesymptomsInput | string[]
    name: string
    severity: number
    duration: string
    notes?: string | null
    date?: Date | string
    diagnosisId?: number | null
  }

  export type AllergiesCreateManyUserInput = {
    id?: number
    trigger: string
    severity: number
    reaction: string
    notes?: string | null
    date?: Date | string
  }

  export type MedicalHistoryCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    condition: string
    diagnosisDate: Date | string
    medications?: string | null
    notes?: string | null
  }

  export type SymptomsUpdateWithoutUserInput = {
    symptoms?: SymptomsUpdatesymptomsInput | string[]
    name?: StringFieldUpdateOperationsInput | string
    severity?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnosis?: MedicalHistoryUpdateOneWithoutSymptomsNestedInput
  }

  export type SymptomsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    symptoms?: SymptomsUpdatesymptomsInput | string[]
    name?: StringFieldUpdateOperationsInput | string
    severity?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnosisId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SymptomsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    symptoms?: SymptomsUpdatesymptomsInput | string[]
    name?: StringFieldUpdateOperationsInput | string
    severity?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnosisId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AllergiesUpdateWithoutUserInput = {
    trigger?: StringFieldUpdateOperationsInput | string
    severity?: IntFieldUpdateOperationsInput | number
    reaction?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AllergiesUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    trigger?: StringFieldUpdateOperationsInput | string
    severity?: IntFieldUpdateOperationsInput | number
    reaction?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AllergiesUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    trigger?: StringFieldUpdateOperationsInput | string
    severity?: IntFieldUpdateOperationsInput | number
    reaction?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalHistoryUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    condition?: StringFieldUpdateOperationsInput | string
    diagnosisDate?: DateTimeFieldUpdateOperationsInput | Date | string
    medications?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    symptoms?: SymptomsUpdateManyWithoutDiagnosisNestedInput
  }

  export type MedicalHistoryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    condition?: StringFieldUpdateOperationsInput | string
    diagnosisDate?: DateTimeFieldUpdateOperationsInput | Date | string
    medications?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    symptoms?: SymptomsUncheckedUpdateManyWithoutDiagnosisNestedInput
  }

  export type MedicalHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    condition?: StringFieldUpdateOperationsInput | string
    diagnosisDate?: DateTimeFieldUpdateOperationsInput | Date | string
    medications?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
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