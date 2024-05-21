// Write a function and use `call`, `apply`, and `bind` to change its context and invoke it.
function greetings(greet, punctuation) {
  return `${greet} ${this.name}${punctuation}`;
}

let personName = { name: "Prasanna" };
console.log(greetings.call(personName, "Hello", "!"));
console.log(greetings.apply(personName, ["Hello", "?"]));
let boundGreet = greetings.bind(personName);
console.log(boundGreet("Hello", "!!"));
console.log(boundGreet("Hey", "?")); // "Hey, Alice?"
