import {
  checkIfInstanceOf,
  checkIfInstanceOfUsingPrototype,
} from '@/app/2618-check-if-object-instance-of-class'

describe('Problem 2618: Check If Instance Of Class', () => {
  const testCases: {
    name: string
    input: [any, any]
    expected: boolean
  }[] = [
    {
      name: 'Example 1: new Date() is an instance of Date',
      input: [new Date(), Date],
      expected: true,
    },
    {
      name: 'Example 2: Dog is an instance of Animal',
      input: (() => {
        class Animal {}
        class Dog extends Animal {}
        return [new Dog(), Animal] as [any, any]
      })(),
      expected: true,
    },
    {
      name: 'Example 3: Date constructor is not an instance of Date',
      input: [Date, Date],
      expected: false,
    },
    {
      name: 'Example 4: Primitive 5 is an instance of Number (via wrapper)',
      input: [5, Number],
      expected: true,
    },
    {
      name: 'Edge case: null value should return false',
      input: [null, Number],
      expected: false,
    },
    {
      name: 'Edge case: undefined classFunction should return false',
      input: [new Number(5), undefined],
      expected: false,
    },
  ]

  describe.each([
    ['🔍 instanceof version', checkIfInstanceOf],
    ['🔁 prototype-traversal version', checkIfInstanceOfUsingPrototype],
  ])('%s', (_label, fn) => {
    testCases.forEach(({ name, input, expected }) => {
      test(name, () => {
        expect(fn(...input)).toBe(expected)
      })
    })
  })
})
