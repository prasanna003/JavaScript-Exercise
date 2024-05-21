//Write a function that logs a variable before it's declared and initialized using var.

function logValue() {
  console.log("X is:", x);
  var x = 20; //same variable if let used means give referenceError.
  //var gives undefined Error
}

logValue();
