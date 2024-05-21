// Create a function `createMultiplier` that takes a number and returns a function that
// multiplies its input by that number.

function createMultiplier(number) {
  console.log(number, "number");
  return function (x) {
    console.log(x, "x");
    return x * number;
  };
}
let multiplyByTwo = createMultiplier(2);
console.log(typeof multiplyByTwo);
console.log(multiplyByTwo(5)); // 10
