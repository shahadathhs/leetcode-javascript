import { TimeLimitedCache } from '@/app/2622-cache-with-time-limit';

describe('Problem 2622: Cache With Time Limit', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.useRealTimers();
  });

  test('set, get, count basic operations', () => {
    const cache = new TimeLimitedCache();
    // set new key → false
    expect(cache.set(1, 100, 500)).toBe(false);
    // get existing before expiry
    expect(cache.get(1)).toBe(100);
    // count = 1
    expect(cache.count()).toBe(1);
    // expire key
    jest.advanceTimersByTime(500);
    expect(cache.get(1)).toBe(-1);
    expect(cache.count()).toBe(0);
  });

  test('Example 1 sequence', () => {
    const cache = new TimeLimitedCache();
    // t=0: construct
    // t=0: set → false
    expect(cache.set(1, 42, 100)).toBe(false);

    // t=50: get → 42
    jest.advanceTimersByTime(50);
    expect(cache.get(1)).toBe(42);

    // t=50: count → 1
    expect(cache.count()).toBe(1);

    // t=100: key expires
    jest.advanceTimersByTime(50);

    // t=150: get → -1
    jest.advanceTimersByTime(50);
    expect(cache.get(1)).toBe(-1);
  });

  test('Example 2 sequence', () => {
    const cache = new TimeLimitedCache();

    // t=0: set(1,42,50) → false
    expect(cache.set(1, 42, 50)).toBe(false);

    // t=40: before first expiry, overwrite set(1,50,100) → true
    jest.advanceTimersByTime(40);
    expect(cache.set(1, 50, 100)).toBe(true);

    // t=50: get → 50
    jest.advanceTimersByTime(10);
    expect(cache.get(1)).toBe(50);

    // t=120: get → 50
    jest.advanceTimersByTime(70);
    expect(cache.get(1)).toBe(50);

    // t=140: expiry (100ms after overwrite at t=40)
    jest.advanceTimersByTime(20);

    // t=200: get → -1
    jest.advanceTimersByTime(60);
    expect(cache.get(1)).toBe(-1);

    // t=250: count → 0
    jest.advanceTimersByTime(50);
    expect(cache.count()).toBe(0);
  });

  test('overwriting clears previous timeout', () => {
    const cache = new TimeLimitedCache();
    expect(cache.set(2, 10, 100)).toBe(false);
    // overwrite before expiry
    jest.advanceTimersByTime(50);
    expect(cache.set(2, 20, 100)).toBe(true);
    // advance original expiry (would have fired at t=100)
    jest.advanceTimersByTime(50);
    expect(cache.get(2)).toBe(20);
    // advance new expiry at t=150
    jest.advanceTimersByTime(50);
    expect(cache.get(2)).toBe(-1);
  });
});
