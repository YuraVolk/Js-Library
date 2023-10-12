export function assertNonUndefined<T>(value: T): asserts value is NonNullable<T> {
  if (value == null) throw new Error(`The value ${value} is nullable, but it must not be`);
}

export function assertNonUndefinedDevOnly<T>(value: T): asserts value is NonNullable<T> {
  if (process.env.NODE_ENV === "development") assertNonUndefined(value);
}
