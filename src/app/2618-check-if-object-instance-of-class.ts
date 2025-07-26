// * Title
// 2618. Check if Object Instance of Class

// * Description
/**
 *
 * Write a function that checks if a given value is an instance of a given class
 * or superclass. For this problem, an object is considered an instance of a
 * given class if that object has access to that class's methods.
 *
 * There are no constraints on the data types that can be passed to the
 * function. For example, the value or the class could be undefined.
 **/

// * Hints
/**
 * 1. In Javascript, inheritance is achieved with the prototype chain.
 * 2. You can get the prototype of an object with the Object.getPrototypeOf(obj)
 *    function. Alternatively, you can code obj['__proto__'].
 * 3. You can compare an object's __proto__ with classFunction.prototype.
 * 4. Traverse the entire prototype chain until you find a match.
 */

// * Link to the problem:
//   https://leetcode.com/problems/check-if-object-instance-of-class/description

// * Solution
function checkIfInstanceOf(obj: any, classFunction: any): boolean {
  if (obj === null || obj === undefined) return false

  if (typeof classFunction !== 'function') return false

  if (obj instanceof classFunction) return true

  try {
    return Object(obj) instanceof classFunction
  } catch {
    return false
  }
}

// * Export the function
export { checkIfInstanceOf }
