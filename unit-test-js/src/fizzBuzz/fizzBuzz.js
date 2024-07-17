const fizzBuzz = (inputNumber) => {
  if (inputNumber < 1) {
    throw new RangeError('ตัวเลขต้องไม่ต่ำกว่า 1');
  }
  if (!Number.isInteger(inputNumber)) {
    throw new TypeError('ตัวเลขต้องเป็นจำนวนนับ');
  }

  if (inputNumber % 15 === 0) {
    return 'FizzBuzz';
  }
  if (inputNumber % 3 === 0) {
    return 'Fizz';
  }
  if (inputNumber % 5 === 0) {
    return 'Buzz';
  }
  return inputNumber.toString();
};

export default fizzBuzz;
