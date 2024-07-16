it('ถ้าราคาสินค้าที่สั่งซื้อเท่ากันกับ 100.00 บาท จำนวนแต้มสะสมที่จะได้รับ ต้องเท่ากันกับ 1 แต้ม', () => {
  // Arrange
  const expectedPoint = 1;
  const productPrice = 100.0;

  // Act
  const actualPoint = calculatePoint(productPrice);

  // Assert
  expect(actualPoint).toBe(expectedPoint);
});
