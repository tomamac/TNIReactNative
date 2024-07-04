type Product = {
  name: string;
  price: number;
  category: string;
};

// Declaring an array of products
let products: Product[] = [
  { name: "Laptop", price: 50000, category: "Electronics" },
  { name: "Shirt", price: 1200, category: "Apparel" },
  { name: "Coffee Maker", price: 2500, category: "Appliances" },
];

function FilterAndDiscountProduct(_products: Product[]): Product[] {
  //filtering product price and discount for n%
  let discount: number = 0.1;
  _products = _products.filter((_products) => _products.price > 1200);
  for (let _product of _products) {
    _product.price -= _product.price * discount;
  }
  return _products;
}

console.log(FilterAndDiscountProduct(products));
