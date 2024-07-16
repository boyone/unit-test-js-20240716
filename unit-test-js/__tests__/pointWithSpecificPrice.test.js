import calculatePoint from '../src/point';

it('ถ้าราคาสินค้าที่สั่งซื้อเท่ากันกับ 200.00 บาท จำนวนแต้มสะสมที่จะได้รับ ต้องเท่ากันกับ 1 แต้ม', () => {
  // Arrange
  const expectedPoint = 1;
  const productPrice = 200.0;
  const conversionRate = 200;

  // Act
  const actualPoint = calculatePoint(productPrice, conversionRate);

  // Assert
  expect(actualPoint).toBe(expectedPoint);
});
