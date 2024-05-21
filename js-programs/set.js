// Write a function `uniqueNumbers` that takes an array of numbers and returns a set with unique numbers.
let numbers = [1, 2, 2, 3, 4, 4, 5];
function uniqueNumbers(arr) {
  return Array.from(new Set(arr));
}
console.log(uniqueNumbers(numbers)); // Set {1, 2, 3, 4, 5}
