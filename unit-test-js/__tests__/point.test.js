import calculatePoint from '../src/point';

it('ถ้าราคาสินค้าที่สั่งซื้อเท่ากันกับ 100.00 บาท จำนวนแต้มสะสมที่จะได้รับ ต้องเท่ากันกับ 1 แต้ม', () => {
  // Arrange
  const expectedPoint = 1;
  const productPrice = 100.0;

  // Act
  const actualPoint = calculatePoint(productPrice);

  // Assert
  expect(actualPoint).toBe(expectedPoint);
});

it('ถ้าราคาสินค้าที่สั่งซื้อเท่ากันกับ 99.00 บาท จำนวนแต้มสะสมที่จะได้รับ ต้องเท่ากันกับ 0 แต้ม', () => {
  // Arrange
  const expectedPoint = 0;
  const productPrice = 99.0;

  // Act
  const actualPoint = calculatePoint(productPrice);

  // Assert
  expect(actualPoint).toBe(expectedPoint);
});

it('ถ้าราคาสินค้าที่สั่งซื้อเท่ากันกับ 5269.00 บาท จำนวนแต้มสะสมที่จะได้รับ ต้องเท่ากันกับ 52 แต้ม', () => {
  // Arrange
  const expectedPoint = 52;
  const productPrice = 5269.00;

  // Act
  const actualPoint = calculatePoint(productPrice);

  // Assert
  expect(actualPoint).toBe(expectedPoint);
});
