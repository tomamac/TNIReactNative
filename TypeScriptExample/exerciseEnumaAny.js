// Declaring enum for product status
var ProductStatus;
(function (ProductStatus) {
    ProductStatus["Available"] = "Available";
    ProductStatus["OutOfStock"] = "Out of Stock";
    ProductStatus["Discontinued"] = "Discontinued";
})(ProductStatus || (ProductStatus = {}));
// Declaring array for products using type "any"
var products = [
    { name: "Laptop", status: ProductStatus.Available, price: 1200 },
    { name: "Smartphone", status: ProductStatus.OutOfStock, price: 700 },
    { name: "Tablet", status: ProductStatus.Discontinued, price: 300 },
];
//function for displaying product info
function displayProductDetails(productDetail) {
    productDetail.forEach(function (product) {
        console.log("Product: ".concat(product.name, ", Status: ").concat(product.status, ", Price: ").concat(product.price));
    });
    //   for (let product of products) {
    //     console.log(
    //       "Product: " +
    //         product.name +
    //         ", Status: " +
    //         product.status +
    //         ", Price: " +
    //         product.price
    //     );
    //   }
}
displayProductDetails(products);
