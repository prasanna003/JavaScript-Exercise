// Create a function `createCounter` that returns another function which increments a counter.
function createCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}
const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
