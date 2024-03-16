const EventEmitter = require("node:events");

// a class can extend from the eventEmitter
// and emit to their own custom events
class PizzaShop extends EventEmitter {
    constructor() {
        super()
        this.orderNumber = 0;
    }

    order(size, toppings) {
        this.orderNumber++;
        this.emit('order-pizza', size, toppings);
    }

    displayOrders() {
        console.log('Current order number: ', this.orderNumber)
    }
};

module.exports = PizzaShop