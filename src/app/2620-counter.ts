// * Title
// 2620. Counter

// * Concepts Counter, Increment, Decrement, Reset

// * Description
/**
 * Given an integer n, return a counter function. This counter function
 * initially returns n and then returns 1 more than the previous value every
 * subsequent time it is called (n, n + 1, n + 2, etc).
 */

// * Hints
/**
 * 1. In JavaScript, a function can return a closure. A closure is defined as a
 *    function and the variables declared around it (it's lexical environment).
 * 2. A count variable can be initialized in the outer function and mutated in
 *    the inner function.
 */

// * Link to the problem: https://leetcode.com/problems/counter/description

// * Solution
export type CounterFunction = () => number;

function createCounter(n: number): () => number {
  let current = n; // start from n
  return function (): number {
    return current++; // return then increment
  };
}

// * EXport the function
export { createCounter };

// * A Counter class implementation
// This class provides methods to increment, decrement, and reset the counter.
export class Counter {
  private count: number;

  constructor(n: number) {
    this.count = n; // initialize count with n
  }

  increment(): number {
    this.count++; // increment count
    return this.count; // return the incremented value
  }

  decrement(): number {
    this.count--; // decrement count
    return this.count; // return the decremented value
  }

  reset(): void {
    this.count = 0; // reset count to zero
  }
}
