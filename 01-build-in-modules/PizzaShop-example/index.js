const PizzaShop = require("./pizzaShop");

const pizzaShop = new PizzaShop();

pizzaShop.on("order-pizza", (size, toppings) => {
  console.log(`Order received! Baking a ${size} pizza with ${toppings}`);
  if (size === "large") {
    console.log("Adding a complimentary drink.");
  }
});

pizzaShop.order("large", "panini and beef");
pizzaShop.displayOrders();
