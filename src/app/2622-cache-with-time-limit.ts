// * Title
// 2622. Cache With Time Limit

// * Concepts Caching, Time Limit, Map, Set, Expiration

// *
/**
 * Write a class that allows getting and setting key-value pairs, however a time
   until expiration is associated with each key.

 * The class has three public methods:

 * set(key, value, duration): accepts an integer key, an integer value, and a
   duration in milliseconds. Once the duration has elapsed, the key should be
   inaccessible. The method should return true if the same un-expired key
   already exists and false otherwise. Both the value and duration should be
   overwritten if the key already exists.

 * get(key): if an un-expired key exists, it should return the associated value.
   Otherwise it should return -1.

 * count(): returns the count of un-expired keys.
 */

// * Hints
/**
 * 1. You can delay execution of code with "ref = setTimeout(fn, delay)". You
 *    can abort the execution with "clearTimeout(ref)"
 * 2. When storing the values in the cache, also store a reference to the
 *    timeout. The timeout should clear the key from the cache after the
 *    expiration has elapsed.
 * 3. When you set a key that already exists, clear the existing timeout.
 */

// * Link to the problem:
//   https://leetcode.com/problems/cache-with-time-limit/description

// * Constraints:
/**
 * 0 <= key, value <= 109
 * 0 <= duration <= 1000
 * 1 <= actions.length <= 100
 * actions.length === values.length
 * actions.length === timeDelays.length
 * 0 <= timeDelays[i] <= 1450
 * actions[i] is one of "TimeLimitedCache", "set", "get" and "count"
 * First action is always "TimeLimitedCache" and must be executed immediately,
 * with a 0-millisecond delay
 **/

// * Solution
export class TimeLimitedCache {
  private cache: Map<number, { value: number; timerId: any }>;

  constructor() {
    this.cache = new Map();
  }

  set(key: number, value: number, duration: number): boolean {
    const isExist = this.cache.has(key);

    if (isExist) {
      const cacheValue = this.cache.get(key);
      if (cacheValue) {
        clearTimeout(cacheValue.timerId);
      }
    }

    this.cache.set(key, {
      value,
      timerId: setTimeout(() => {
        this.cache.delete(key);
      }, duration),
    });

    return isExist;
  }

  get(key: number): number {
    const isExist = this.cache.has(key);
    if (!isExist) return -1;

    const cacheValue = this.cache.get(key);
    if (cacheValue) return cacheValue.value;

    return -1;
  }

  count(): number {
    return this.cache.size;
  }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
