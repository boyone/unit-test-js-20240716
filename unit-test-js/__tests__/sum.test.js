import sum from '../src/sum';

it('[0001] should adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

it.each([
  { name: '[xx001]', left: 1, right: 2, expectedValue: 3 },
  { name: '[xx002]', left: 1, right: 3, expectedValue: 4 },
  { name: '[xx003]', left: 1, right: 4, expectedValue: 5 },
])(
  '$name should adds $left + $right to equal $expectedValue',
  ({ left, right, expectedValue }) => {
    expect(sum(left, right)).toEqual(expectedValue);
  }
);
