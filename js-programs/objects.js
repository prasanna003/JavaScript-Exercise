// Create an object `person` with properties for `name`, `age`, and a method `greet`
// that returns a greeting message using the name.
let person = {
  name: "Prasanna",
  age: "26",
  greet: function () {
    return `Hello, my name is ${person.name} and i'm ${person.age} years old.`;
  },
};
console.log(person.greet()); // "Hello, my name is <name>"
