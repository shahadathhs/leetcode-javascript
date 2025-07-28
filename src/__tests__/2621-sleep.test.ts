import { sleep, SleepFunction } from '@/app/2621-sleep';

describe('Problem 2621: Sleep', () => {
  // Fake timers for all tests in this suite
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.useRealTimers();
  });

  // [ test name, millis ]
  const examples: Array<[string, number]> = [
    ['sleep(100) resolves after ~100ms', 100],
    ['sleep(200) resolves after ~200ms', 200],
  ];

  test.each(examples)('%s', async (_desc, millis) => {
    const callback = jest.fn();
    const promise = sleep(millis).then(callback);

    // advance all but the last millisecond
    jest.advanceTimersByTime(millis - 1);
    await Promise.resolve(); // flush microtasks
    expect(callback).not.toHaveBeenCalled();

    // advance the final millisecond
    jest.advanceTimersByTime(1);
    await promise;
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test('SleepFunction has correct type signature', () => {
    const fn: SleepFunction = sleep;
    expect(typeof fn).toBe('function');
  });
});
