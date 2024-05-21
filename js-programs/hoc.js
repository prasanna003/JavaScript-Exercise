//Write a function invokeFunction that takes another function and a number, and returns the result of calling that function with the number.

function invokeFunction() {
  return function (x) {
    return x * 2;
  };
}

const mainFunction = invokeFunction();
console.log(mainFunction(2));
