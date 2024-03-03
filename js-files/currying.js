function multiply(a, b) {
  return a * b;
}

function currying(fn) {
  return function (a) {
    return function (b) {
      return fn(a, b);
    };
  };
}

var curriedMultiply = currying(multiply);

var ans = multiply(4, 3); // Returns 12
console.log(ans)

var ans =curriedMultiply(4)(3); // Also returns 12
console.log(ans)

