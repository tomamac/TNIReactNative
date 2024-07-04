enum OrderStatus {
  Pending = "Pending",
  Shipped = "Shipped",
  Cancelled = "Cancelled",
}
//Creating a function
function displayOrderStatus(status) {
  switch (status) {
    case OrderStatus.Pending:
      console.log("Your order is pending,");
      break;
    case OrderStatus.Shipped:
      console.log("Your order has been shipped.");
      break;
    case OrderStatus.Cancelled:
      console.log("Your order has been cancelled.");
      break;
    default:
      console.log("Unknown order status.");
  }
} //End of function

//Testing the function
displayOrderStatus(OrderStatus.Shipped);
displayOrderStatus(OrderStatus.Cancelled);
