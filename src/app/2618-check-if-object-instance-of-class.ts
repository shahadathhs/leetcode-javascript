// * Title
// 2618. Check if Object Instance of Class

// * Concepts
// Prototype Chain, Inheritance, instanceof, Type Checking

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
  // If obj is null or undefined, it can't be an instance of anything
  if (obj === null || obj === undefined) return false

  // If classFunction is not a function (i.e., not a constructor), return false
  if (typeof classFunction !== 'function') return false

  // If the object is already an instance of the class, return true
  if (obj instanceof classFunction) return true

  // Try converting the value to an object and check again using instanceof
  // This handles edge cases like primitives (e.g., number, string)
  try {
    return Object(obj) instanceof classFunction
  } catch {
    // If conversion or check fails (e.g., invalid input), return false
    return false
  }
}

function checkIfInstanceOfUsingPrototype(obj: any, classFunction: any): boolean {
  // Return false if the input value is null or undefined
  if (obj === null || obj === undefined) return false

  // Return false if the classFunction is not a function (constructor)
  if (typeof classFunction !== 'function') return false

  // Get the prototype that we're trying to match
  const targetPrototype = classFunction.prototype

  // Convert obj to an object (handles primitives like numbers, strings, etc.)
  let currentProto = Object(obj)

  // Traverse up the prototype chain
  while (currentProto !== null) {
    // If the prototype matches the target, return true
    if (Object.getPrototypeOf(currentProto) === targetPrototype) {
      return true
    }

    // Move one level up the prototype chain
    currentProto = Object.getPrototypeOf(currentProto)
  }

  // If we reach the end of the chain without a match, return false
  return false
}

// * Export the function
export { checkIfInstanceOf, checkIfInstanceOfUsingPrototype }
