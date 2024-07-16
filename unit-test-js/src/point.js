export default calculatePoint = (productPrice) => {
    if (productPrice <= 0) {
        throw new RangeError(`ราคาสินค้าต้องไม่ตำ่กว่า 0 บาท: ราคาสินค้าที่ได้รับเท่ากับ ${productPrice} บาท`);
    }

    return Math.floor(productPrice/100);
}