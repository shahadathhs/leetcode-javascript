import { checkIfInstanceOf } from '@/app/2618-check-if-object-instance-of-class'

describe('checkIfInstanceOf', () => {
  test('Example 1: new Date() is an instance of Date', () => {
    expect(checkIfInstanceOf(new Date(), Date)).toBe(true)
  })

  test('Example 2: Dog is an instance of Animal', () => {
    class Animal {}
    class Dog extends Animal {}
    expect(checkIfInstanceOf(new Dog(), Animal)).toBe(true)
  })

  test('Example 3: Date constructor is not an instance of Date', () => {
    expect(checkIfInstanceOf(Date, Date)).toBe(false)
  })

  test('Example 4: Primitive 5 is an instance of Number (via wrapper)', () => {
    expect(checkIfInstanceOf(5, Number)).toBe(true)
  })
})
