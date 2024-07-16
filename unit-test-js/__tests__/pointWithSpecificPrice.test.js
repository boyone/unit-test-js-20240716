import calculatePoint from '../src/point';

let conversionRate;

beforeEach(() => {
  conversionRate = 200;
});

afterEach(() => {
  conversionRate = 0;
});

beforeAll(() => {
});

afterAll(() => {
});

it('ถ้าราคาสินค้าที่สั่งซื้อเท่ากันกับ 200.00 บาท จำนวนแต้มสะสมที่จะได้รับ ต้องเท่ากันกับ 1 แต้ม', () => {
  // Arrange
  const expectedPoint = 1;
  const productPrice = 200.0;
  //   const conversionRate = 200;

  // Act
  const actualPoint = calculatePoint(productPrice, conversionRate);

  // Assert
  expect(actualPoint).toBe(expectedPoint);
});

it('ถ้าราคาสินค้าที่สั่งซื้อเท่ากันกับ 400.00 บาท จำนวนแต้มสะสมที่จะได้รับ ต้องเท่ากันกับ 2 แต้ม', () => {
  // Arrange
  const expectedPoint = 2;
  const productPrice = 400.0;
  // const conversionRate = 200;

  // Act
  const actualPoint = calculatePoint(productPrice, conversionRate);

  // Assert
  expect(actualPoint).toBe(expectedPoint);
});
