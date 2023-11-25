export function assertNonUndefined<T>(value: T): asserts value is NonNullable<T> {
  if (value == null) throw new Error(`The value ${String(value)} is nullable, but it must not be`);
}

export function assertNonUndefinedDevOnly<T>(value: T): asserts value is NonNullable<T> {
  if (process.env.NODE_ENV === "development") assertNonUndefined(value);
}

export function assertDevOnly<T>(value: T): asserts value {
  if (process.env.NODE_ENV === "development" && !value) {
    throw new Error("The assertion of boolean condition failed");
  }
}

export const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2);