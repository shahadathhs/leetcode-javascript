// * Title
// 2619. Array Prototype Last

// * Concepts Array Methods, Prototype, Last Element Access

//  * Description
/**
 * Write code that enhances all arrays such that you can call the array.last()
   method on any array and it will return the last element. If there are no
   elements in the array, it should return -1. You may assume the array is the
   output of JSON.parse.
 */

// * Hints
/**
 * 1. Use the array.length property to get the length of the array.
 * 2. Use the array[array.length - 1] property to access the last element of the
 *    array.
 * 3. If the array is empty, return -1.
 * 4. Inside the Array.prototype.last function body, you have access to the
 *    "this" keyword. "this" is equal to the contents of the array in this case.
 * 5. You can access elements in the array via this[0], this[1], etc. You can
 *    also access properties and method like this.length, this.forEach, etc.
 */

// * Link to the problem:
//   https://leetcode.com/problems/array-prototype-last/description

// * Solution
interface Array<T> {
  last(): T | -1;
}

Array.prototype.last = function () {
  return this.length > 0 ? this[this.length - 1] : -1;
};

// * Usage
const arr: Array<number> = [1, 2, 3];

console.log(arr.last()); // 3
console.log(arr.last()); // -1
