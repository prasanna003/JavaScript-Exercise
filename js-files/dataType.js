var log = console.log;

/*The following are examples of primitive dataTypes*/

var str = "Vivek Singh Bisht"; //using double quotes
var str2 = "John Doe"; //using single quotes
var x = 3; //without decimal
var y = 3.6; //with decimal
log(x, y);
var bigInteger = 234567890123456789012345678901234567890;
var a = 2;
var b = 3;
var c = 2;

/*now we are using x,y again. so it will be updated in runtime. 
Because js is dynamically typed language.*/

var x; // value of x is undefined
var y = undefined; // we can also set the value of a variable as undefined
var z = null;

log(a == b); // returns false
log(a == c); //returns true

var symbol1 = Symbol("symbol");
log(symbol1);

log(typeof "John Doe"); // Returns "string"
log(typeof 3.14); // Returns "number"
log(typeof true); // Returns "boolean"
log(typeof 234567890123456789012345678901234567890n); // Returns bigint
log(typeof undefined); // Returns "undefined"
log(typeof null); // Returns "object" (kind of a bug in JavaScript)
log(typeof Symbol("symbol")); // Returns Symbol

/*The following are examples of non-primitive dataTypes*/

var obj1 = {
  x: 43,
  y: "Hello world!",
  z: function () {
    return this.x;
  },
};
log(obj1);

// Collection of data as an ordered list

var array1 = [5, "Hello", true, 4.1];

log("Array:", array1);
log("Sorted Array:", array1.sort());
