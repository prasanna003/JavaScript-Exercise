function generateFibonacci(n) {
  let a = 0,
    b = 1,
    temp;
  let fibSeries = [a, b];

  for (let i = 0; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
    fibSeries.push(temp);
  }9

  return fibSeries;
}

console.log(generateFibonacci(20));
 