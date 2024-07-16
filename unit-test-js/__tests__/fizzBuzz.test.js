import fizzBuzz from '../src/fizzBuzz';

describe('คำพูดถูกต้อง', () => {
  it.each([
    { inputNumber: 1, expectedString: '1' },
    { inputNumber: 2, expectedString: '2' },
    { inputNumber: 3, expectedString: 'Fizz' },
    { inputNumber: 4, expectedString: '4' },
    { inputNumber: 5, expectedString: 'Buzz' },
    { inputNumber: 15, expectedString: 'FizzBuzz' },
  ])(
    'input number เท่ากับ $inputNumber จะต้องตอบกลับมา $expectedString',
    ({ inputNumber, expectedString }) => {
      // Act
      const actualString = fizzBuzz(inputNumber);

      // Assert
      expect(actualString).toEqual(expectedString);
    }
  );
});

describe('ตัวเลขถูกต้อง', () => {
    it.each([
      { inputNumber: 0, expectedError: 'ตัวเลขต้องไม่ต่ำกว่า 1', error: RangeError },
      { inputNumber: 0.9, expectedError: 'ตัวเลขต้องไม่ต่ำกว่า 1', error: RangeError },
      { inputNumber: -1, expectedError: 'ตัวเลขต้องไม่ต่ำกว่า 1', error: RangeError },
      { inputNumber: 1.9, expectedError: 'ตัวเลขต้องเป็นจำนวนนับ', error: TypeError },
      { inputNumber: 'หนึ่ง', expectedError: 'ตัวเลขต้องเป็นจำนวนนับ', error: TypeError },
    ])(
      'input number เท่ากับ $inputNumber จะต้องตอบกลับมา $expectedError',
      ({ inputNumber, expectedError, error }) => {
        // Assert
        expect(() => fizzBuzz(inputNumber)).toThrow(error);
        expect(() => fizzBuzz(inputNumber)).toThrow(expectedError);
      }
    );
  });