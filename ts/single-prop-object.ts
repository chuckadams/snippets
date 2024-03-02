// https://stackoverflow.com/questions/77049858/typescript-object-with-exactly-one-property

type IsNever<T> = [T] extends [never] ? true : false;

type IsUnion<T, U = T> = IsNever<T> extends true ? false : T extends U ? IsNever<Exclude<U, T>> extends true ? false : true : false;

type SingleKeyObject<T, K = keyof T> = IsNever<K> extends true ? never : IsUnion<K> extends true ? never : T;
