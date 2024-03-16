const callbackFn = (x, y) => {
    const sum = x + y / 34;
    console.log(sum)
}

// A function that is passed to another function as argument is called a callback function
// The function recieving it is called higher order function
const higherOrderFn = (callback, x, y) => {
    console.log("This is the higher order function running...")
    callback(x, y);
}

higherOrderFn(callbackFn, 23, 84)