// Write a pure function `doubleArray` that takes an array and returns a new array with
// all elements doubled, without modifying the original array.
let nums = [1, 2, 3];

function doubleArray(arr) {
  return arr.map((item) => item * 2);
}
console.log(doubleArray(nums)); // [2, 4, 6]
console.log(nums); // [1, 2, 3] // original array is not modified.

//impure version of that.

function doubleArray2(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 2;
  }
  return arr;
}

let nums2 = [1, 2, 3];
console.log(doubleArray2(nums2)); // [2, 4, 6]
console.log(nums2); // [2, 4, 6] (original array is modified)
