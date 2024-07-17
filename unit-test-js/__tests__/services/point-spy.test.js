import { jest } from '@jest/globals';
import cal from '../../src/services/point-db';
import conversion from '../../src/repository/conversionRate';


it('ถ้าราคาสินค้าที่สั่งซื้อเท่ากันกับ 100.00 บาท จำนวนแต้มสะสมที่จะได้รับ ต้องเท่ากันกับ 0 แต้ม with spy', () => {
  // Arrange
  const expectedPoint = 0;
  const productPrice = 100.0;

  const spy = jest.spyOn(conversion, 'getConversionRate').mockReturnValue(200);

  // Act
  const actualPoint = cal.calculatePoint(productPrice);
  cal.calculatePoint(productPrice);

  // Assert
  expect(actualPoint).toBe(expectedPoint);
  expect(spy).toHaveBeenCalled();
  expect(spy).toHaveBeenCalledTimes(2);
});
