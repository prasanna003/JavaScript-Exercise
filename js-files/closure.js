var Person = function (pName) {
  var name = pName;

  this.getName = function () {
    return name;
  };
};

var person = new Person("Neelesh");
console.log(person.getName());
