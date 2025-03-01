import calculatePoint from '../src/point';

describe('คำนวณแต้มสำเร็จ', () => {
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
    const productPrice = 5269.0;

    // Act
    const actualPoint = calculatePoint(productPrice);

    // Assert
    expect(actualPoint).toBe(expectedPoint);
  });
});

describe('คำนวณแต้มไม่สำเร็จ', () => {
  it('ถ้าราคาสินค้าที่สั่งซื้อมีค่าเท่ากันกับ 0 ต้องโยน RangeError', () => {
    // Arrange
    const productPrice = 0;

    // Assert
    expect(() => calculatePoint(productPrice)).toThrow(RangeError);
    expect(() => calculatePoint(productPrice)).toThrow(
      'ราคาสินค้าต้องไม่ตำ่กว่า 0 บาท: ราคาสินค้าที่ได้รับเท่ากับ 0 บาท'
    );
  });

  it('ถ้าราคาสินค้าที่สั่งซื้อมีค่าเท่ากันกับ -1 ต้องโยน RangeError', () => {
    // Arrange
    const productPrice = -1;

    // Assert
    expect(() => calculatePoint(productPrice)).toThrow(RangeError);
    expect(() => calculatePoint(productPrice)).toThrow(
      'ราคาสินค้าต้องไม่ตำ่กว่า 0 บาท: ราคาสินค้าที่ได้รับเท่ากับ -1 บาท'
    );
  });

  it('ถ้าราคาสินค้าที่สั่งซื้อมีค่าเท่ากันกับ -100 ต้องโยน RangeError', () => {
    // Arrange
    const productPrice = -100;

    // Assert
    expect(() => calculatePoint(productPrice)).toThrow(RangeError);
    expect(() => calculatePoint(productPrice)).toThrow(
      'ราคาสินค้าต้องไม่ตำ่กว่า 0 บาท: ราคาสินค้าที่ได้รับเท่ากับ -100 บาท'
    );
  });
});

describe('table test', () => {
  it.each([
    { productPrice: 100.0, expectedPoint: 1 },
    { productPrice: 99.0, expectedPoint: 0 },
    { productPrice: 5269.0, expectedPoint: 52 },
  ])(
    'ถ้าราคาสินค้าที่สั่งซื้อเท่ากันกับ $productPrice บาท จำนวนแต้มสะสมที่จะได้รับ ต้องเท่ากันกับ $expectedPoint แต้ม',
    ({ productPrice, expectedPoint }) => {
      // Act
      const actualPoint = calculatePoint(productPrice);

      // Assert
      expect(actualPoint).toBe(expectedPoint);
    }
  );
});

describe('table alternative test', () => {
  it.each([
    { productPrice: 0.0, error: RangeError },
    { productPrice: -1.0, error: RangeError },
    { productPrice: -100.0, error: RangeError },
  ])(
    'ถ้าราคาสินค้าที่สั่งซื้อมีค่าเท่ากันกับ $productPrice ต้องโยน RangeError',
    ({ productPrice, error }) => {
      // Assert
      expect(() => calculatePoint(productPrice)).toThrow(error);
      expect(() => calculatePoint(productPrice)).toThrow(
        `ราคาสินค้าต้องไม่ตำ่กว่า 0 บาท: ราคาสินค้าที่ได้รับเท่ากับ ${productPrice} บาท`
      );
    }
  );
});
