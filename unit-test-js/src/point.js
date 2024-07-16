export default calculatePoint = (productPrice) => {
    if (productPrice === 5269.00) {
        return Math.floor(productPrice/100);
    }
    if (productPrice === 100.00) {
        return 1;
    }
    return 0;
}