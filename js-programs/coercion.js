// Write a function `compare` that demonstrates type coercion with `==` and `===`.
function compare(a, b) {
  console.log(a === b); // Strict equality check (===)
  console.log(a == b); // Loose equality check (==)
}
console.log(compare(2, "2")); // false (if using ===)
console.log(compare(2, "2")); // true (if using ==)
