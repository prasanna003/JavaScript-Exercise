// Write a function `getValue` that takes an object and a key, and returns the value associated with that key.
function getValue(obj, key) {
  return obj[key];
}

let obj = { a: 1, b: 2, c: 3 };
console.log(getValue(obj, "b")); // Output: 2
