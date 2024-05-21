// Given an array of objects, write a function `pluck` that returns an array of a specific property from each object.

let users = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];
const pluck = (arr, property) => {
  return arr.map((item) => item[property]);
};
console.log(pluck(users, "name")); // ['Alice', 'Bob', 'Charlie']
