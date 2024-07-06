var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Declaring an array of products
var products = [
    { name: "Laptop", price: 50000, category: "Electronics" },
    { name: "Shirt", price: 1200, category: "Apparel" },
    { name: "Coffee Maker", price: 2500, category: "Appliances" },
];
//filtering product price and discount for n%
// function FilterAndDiscountProduct(_products: Product[]): Product[] {
//   let discount: number = 0.1;
//   _products = _products.filter((_products) => _products.price > 1200);
//   for (let _product of _products) {
//     _product.price -= _product.price * discount;
//   }
//   return _products;
// }
// console.log(FilterAndDiscountProduct(products));
//Create a function for filtering products by price
function filterProductByPrice(products, filtPrice) {
    return products.filter(function (products) { return products.price > filtPrice; });
}
//Create a function for discounting product
function discountProduct(products) {
    return products.map(function (product) { return (__assign(__assign({}, product), { price: product.price * 0.9 })); });
}
//call function
var filterProduct = filterProductByPrice(products, 2000);
var discountProducts = discountProduct(filterProduct);
//display result
//console.log(filterProduct);
console.log(discountProducts);
