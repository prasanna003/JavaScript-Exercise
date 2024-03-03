function sayHello() {
  return "Hello " + this.name;
}

var obj = { name: "Sandy" };

var ans = sayHello.call(obj);
console.log(ans);
// Returns "Hello Sandy"

var person = {
  age: 23,
  getAge: function () {
    return this.age;
  },
};
var person2 = { age: 54 };
var ans = person.getAge.call(person2);
console.log(ans);
// Returns 54

function saySomething(message) {
  return this.name + " is " + message;
}
var person4 = { name: "John" };
var ans = saySomething.call(person4, "awesome");
console.log(ans);
// Returns "John is awesome"


//Apply Example
function saySomething(message){
  return this.name + " is " + message;
}        
var person4 = {name:  "John"};
var ans =saySomething.apply(person4, ["awesome"]);
console.log(ans)


//Bind Example
var bikeDetails = {
  displayDetails: function (registrationNumber, brandName) {
    return (
      this.name +
      " , " +
      "bike details: " +
      registrationNumber +
      " , " +
      brandName
    );
  },
};

var person1 = { name: "Vivek" };

var detailsOfPerson1 = bikeDetails.displayDetails.bind(
  person1,
  "TS0122",
  "Bullet"
);

// Binds the displayDetails function to the person1 object

var ans =detailsOfPerson1();
console.log(ans)
//Returns Vivek, bike details: TS0122, Bullet
