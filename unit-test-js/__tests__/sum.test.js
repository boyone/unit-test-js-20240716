import sum from '../src/sum';

it('[0001] should adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
