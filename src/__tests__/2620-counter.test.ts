import { createCounter, CounterFunction } from '@/app/2620-counter';

describe('Problem 2620: Counter', () => {
  describe('Correctness Tests', () => {
    test.each([
      [0, [0, 1, 2, 3, 4]],
      [5, [5, 6, 7, 8, 9]],
      [-3, [-3, -2, -1, 0, 1]],
      [10, [10, 11, 12]], // Example 1: n=10, three calls
      [-2, [-2, -1, 0, 1, 2]], // Example 2: n=-2, five calls
    ])('counter starting at %i produces sequence %j', (start, expectedSequence) => {
      const counter = createCounter(start);
      const results = Array.from({ length: expectedSequence.length }, () => counter());
      expect(results).toEqual(expectedSequence);
    });
  });

  describe('Multiple counters & Type Tests', () => {
    it('multiple counters operate independently', () => {
      const c1 = createCounter(10);
      const c2 = createCounter(20);
      expect(c1()).toBe(10);
      expect(c1()).toBe(11);
      expect(c2()).toBe(20);
      expect(c1()).toBe(12);
      expect(c2()).toBe(21);
    });

    test('createCounter returns a function', () => {
      const counter = createCounter(0);
      expect(typeof counter).toBe('function');
    });

    test('type signature matches CounterFunction', () => {
      const fn: CounterFunction = createCounter(1);
      expect(typeof fn).toBe('function');
      expect(fn()).toBe(1);
    });
  });
});
