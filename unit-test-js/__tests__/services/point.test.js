import { jest } from '@jest/globals';
import calculatePoint from '../../src/services/point-db2';
import cal from '../../src/services/point-db';
import conversion from '../../src/repository/conversionRate';

jest.mock('../../src/repository/conversionRate');

it('ถ้าราคาสินค้าที่สั่งซื้อเท่ากันกับ 100.00 บาท จำนวนแต้มสะสมที่จะได้รับ ต้องเท่ากันกับ 0 แต้ม', () => {
  // Arrange
  const expectedPoint = 0;
  const productPrice = 100.0;
  const mockGetConversionRate = jest.fn();
  mockGetConversionRate.mockReturnValue(200);

  // Act
  const actualPoint = calculatePoint(mockGetConversionRate)(productPrice);

  // Assert
  expect(actualPoint).toBe(expectedPoint);
});

it('ถ้าราคาสินค้าที่สั่งซื้อเท่ากันกับ 100.00 บาท จำนวนแต้มสะสมที่จะได้รับ ต้องเท่ากันกับ 0 แต้ม without curry', () => {
  // Arrange
  const expectedPoint = 0;
  const productPrice = 100.0;

  conversion.getConversionRate = jest.fn().mockReturnValue(200);

  // Act
  const actualPoint = cal.calculatePoint(productPrice);

  // Assert
  expect(actualPoint).toBe(expectedPoint);
});
