// letsc create an event and an event listner
// Events let us write non blocking code
const eventEmitter = require("node:events");

const emitter = new eventEmitter();

// Registering event listners
emitter.on("order-pizza", (num, size, topping) =>
  console.log(`order placed: ${num} ${size} pizza with ${topping}`)
);

// we can add multiple event listeners to the same event
emitter.on('order-pizza', (_, size) => {
    if (size === 'large'){
        console.log("Adding a complementary drink to the order!")
    }
})

// emitting an event
// first argument is the event name, other arguments are the parameters to the event callback
emitter.emit("order-pizza", 2, "large", "mushroom and chicken");
