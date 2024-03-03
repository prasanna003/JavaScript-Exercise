var log = console.log;
var x = 3;
var y = "3";
log(x + y, typeof (x + y)); // Returns "33"

var x = 24;
var y = "Hello";
log(x + y, typeof (x + y)); // Returns "24Hello";

var name = "Vivek";
var surname = " Bisht";
log(name + surname); // Returns "Vivek Bisht"

var x = 3;
var y = "3";
log(x - y); //Returns 0 since the variable y (string type) is converted to a number type

//Boolean Coersion
//A
var x = 0;
var y = 23;

if (x) {
  console.log("Not run", x);
} // The code inside this block will not run since the value of x is 0(Falsy)

if (y) {
  console.log("run", y);
} // The code inside this block will run since the value of y is 23 (Truthy)ll values except false, 0, 0n, -0, “”, null, undefined, and NaN are truthy values.

var x = 220;
var y = "Hello";
var z = undefined;

if (x && y) {
  console.log("Code runs"); // This block runs because x && y returns "Hello" (Truthy)
}

if (x || z) {
  console.log("Code runs"); // This block runs because x || y returns 220(Truthy)
}
