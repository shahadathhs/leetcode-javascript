import {
  checkIfInstanceOf,
  checkIfInstanceOfUsingPrototype,
  InstanceOfFunction,
} from '@/app/2618-check-if-object-instance-of-class';

describe('Problem 2618: Check If Instance Of Class', () => {
  const testCases: {
    name: string;
    input: [any, any];
    expected: boolean;
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
        return [new Dog(), Animal] as [any, any];
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
  ];

  // ✅ Correctness Tests
  describe.each([
    ['🔍 instanceof version', checkIfInstanceOf],
    ['🔁 prototype-traversal version', checkIfInstanceOfUsingPrototype],
  ])('%s - Correctness', (_label, fn) => {
    testCases.forEach(({ name, input, expected }) => {
      test(name, () => {
        expect(fn(...input)).toBe(expected);
      });
    });
  });

  // ✅ Dynamic Fuzzing
  describe.each([
    ['🔍 instanceof version', checkIfInstanceOf],
    ['🔁 prototype-traversal version', checkIfInstanceOfUsingPrototype],
  ])('%s - Dynamic Fuzzing', (_label, fn) => {
    const constructors = [
      Date,
      Number,
      String,
      Boolean,
      Object,
      Array,
      Map,
      Set,
      WeakMap,
      WeakSet,
      RegExp,
      Error,
    ];

    test('Run 500 random fuzzing tests', () => {
      for (let i = 0; i < 500; i++) {
        const randomClass = constructors[Math.floor(Math.random() * constructors.length)];
        const instance = new (randomClass as any)();
        const expected = instance instanceof randomClass;
        const result = fn(instance, randomClass);
        expect(result).toBe(expected);
      }
    });
  });

  // ✅ Benchmarking
  describe('🚀 Benchmarking Performance', () => {
    const iterations = 100_000;
    const Dog = class extends Object {};
    const input: [any, any] = [new Dog(), Object];

    const benchmark = (label: string, fn: InstanceOfFunction) => {
      const start = performance.now();
      for (let i = 0; i < iterations; i++) {
        fn(...input);
      }
      const end = performance.now();
      console.log(`${label} took ${(end - start).toFixed(2)}ms for ${iterations} iterations`);
    };

    test('Compare performance', () => {
      benchmark('checkIfInstanceOf', checkIfInstanceOf);
      benchmark('checkIfInstanceOfUsingPrototype', checkIfInstanceOfUsingPrototype);
    });
  });
});
