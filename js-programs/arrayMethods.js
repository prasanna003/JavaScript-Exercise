// Use the `map` method to create a new array that doubles each number in an array.
let numbers = [1, 2, 3, 4];
let doubled = numbers.map((item) => item * 2);
console.log(doubled); // [2, 4, 6, 8]
console.log(numbers); //map does not modifies the original array
