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
function filterProductByPrice(products: Product[], filtPrice: number): Product[] {
  return products.filter((products) => products.price > filtPrice);
}

//Create a function for discounting product
function discountProduct(products: Product[]): Product[] {
  return products.map((product) => ({
    ...product,
    price: product.price * 0.9,
  }));
}
//call function
let filterProduct = filterProductByPrice(products,2000);
let discountProducts = discountProduct(filterProduct);

//display result
//console.log(filterProduct);
console.log(discountProducts);
