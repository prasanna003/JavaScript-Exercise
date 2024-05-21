//Write a function sumArray that returns the sum of all numbers in an array.
function sumArray(arr) {
  return arr.reduce((acc, currentValue) => acc + currentValue, 0);
}
console.log(sumArray([1, 2, 3, 4])); // 10
