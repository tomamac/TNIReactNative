// Declaring an array of products
var products = [
    { name: "Laptop", price: 50000, category: "Electronics" },
    { name: "Shirt", price: 1200, category: "Apparel" },
    { name: "Coffee Maker", price: 2500, category: "Appliances" },
];
function FilterAndDiscountProduct(_products) {
    //filtering product price and discount for n%
    var discount = 0.1;
    _products = _products.filter(function (_products) { return _products.price > 1200; });
    for (var _i = 0, _products_1 = _products; _i < _products_1.length; _i++) {
        var _product = _products_1[_i];
        _product.price -= _product.price * discount;
    }
    return _products;
}
console.log(FilterAndDiscountProduct(products));
