// * Title
// 2621. Sleep

// * Concepts Asynchronous Programming, Promises, setTimeout

// * Description
/**
 * Given a positive integer millis, write an asynchronous function that sleeps
   for millis milliseconds. It can resolve any value.

Note that minor deviation from millis in the actual sleep duration is
acceptable.
*/

// * Hints
/**
 * 1. In Javascript, you can execute code after some delay with the
 *    setTimeout(fn, sleepTime) function.
 * 2. An async function is defined as function which returns a Promise.
 * 3. To create a Promise, you can code new Promise((resolve, reject) => {}).
 *    When you want the function to return a value, code resolve(value) inside
 *    the callback.
 */

// * Link to the problem: https://leetcode.com/problems/sleep/description

// * Solution
export type SleepFunction = (millis: number) => Promise<void>;

async function sleep(millis: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, millis));
}

// * Export the function
export { sleep };
