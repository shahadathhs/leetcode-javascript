import { checkIfInstanceOf } from '@/app/2618-check-if-object-instance-of-class'

// * Example 1
const func1 = () => checkIfInstanceOf(new Date(), Date)
const output1 = func1()
console.log('Example 1:', output1 === true ? 'Passed ✅' : 'Failed ❌')
// Explanation: The object returned by the Date constructor is, by definition,
// an instance of Date.

// * Example 2
const func2 = () => {
  class Animal {}
  class Dog extends Animal {}
  return checkIfInstanceOf(new Dog(), Animal)
}
const output2 = func2()
console.log('Example 2:', output2 === true ? 'Passed ✅' : 'Failed ❌')
// Explanation: Dog is a subclass of Animal. Therefore, a Dog object is an
// instance of both Dog and Animal.

// * Example 3
const func3 = () => checkIfInstanceOf(Date, Date)
const output3 = func3()
console.log('Example 3:', output3 === false ? 'Passed ✅' : 'Failed ❌')
// Explanation: A constructor function (Date) is not an instance of itself.

// * Example 4
const func4 = () => checkIfInstanceOf(5, Number)
const output4 = func4()
console.log('Example 4:', output4 === true ? 'Passed ✅' : 'Failed ❌')
// Explanation: 5 is a Number. Even though `instanceof` returns false, it's
// still considered a Number because it accesses Number methods like toFixed().
