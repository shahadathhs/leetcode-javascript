import '@/app/2619-array-prototype-last';

describe('Problem 2619: Array.prototype.last', () => {
  test('last returns last element for non-empty arrays', () => {
    expect([1, 2, 3].last()).toBe(3);
    expect(['a', 'b', 'c'].last()).toBe('c');
    expect([true, false].last()).toBe(false);
  });

  test('last returns -1 for empty arrays', () => {
    expect([].last()).toBe(-1);
    expect(([] as number[]).last()).toBe(-1);
  });

  test('last works after array mutations', () => {
    const arr = [10, 20];
    expect(arr.last()).toBe(20);
    arr.push(30);
    expect(arr.last()).toBe(30);
    arr.pop();
    expect(arr.last()).toBe(20);
    arr.splice(0, arr.length);
    expect(arr.last()).toBe(-1);
  });

  test('last does not modify the array', () => {
    const arr = [5, 6, 7];
    const before = [...arr];
    arr.last();
    expect(arr).toEqual(before);
  });

  test('last is available on all array instances', () => {
    class MyArray extends Array<number> {}
    const myArr = new MyArray(1, 2, 3);
    expect(myArr.last()).toBe(3);
  });
});
