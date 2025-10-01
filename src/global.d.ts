export {}; // To ensure this file is treated as a module.

declare global {
  /**
   * DeepReadonly<T> is a recursive utility type that makes all properties
   * of an object or array, including nested properties, read-only.
   * This enforces deep immutability at the type level.
   *
   * Explanation
   * If T is an array, return a ReadonlyArray of the deep-readonly element type.
   * If T is an object (but not a primitive), iterate over its keys and make each property readonly and deeply immutable.
   * If T is a primitive (the base case), simply return the type.
   *
   * Explanation using examples:
   * ReadonlyArray<TravelTrip> tells TypeScript that the array itself cannot be modified (no push, pop, etc.),
   * but it doesn't prevent changes to the TravelTrip objects contained within it.
   * The custom DeepReadonly<TravelTrip[]> type explicitly tells TypeScript that every single property of every object in the array is also read-only.
   */
  type DeepReadonly<T> = T extends (infer R)[]
    ? ReadonlyArray<DeepReadonly<R>>
    : T extends object
    ? {
        readonly [P in keyof T]: DeepReadonly<T[P]>;
      }
    : T;
}
