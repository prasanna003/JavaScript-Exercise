function higherOrder2() {
  return function () {
    console.log("Do something");
  };
}
var x = higherOrder2();
x(); // Returns "Do something"
