//Write a function factorial that returns the factorial of a number.

function factorial(number) {
  let fact = 1;
  for (let i = 2; i < number; i++) {
    return (fact = fact * i);
  }
}

console.log(factorial(5)); // 120
