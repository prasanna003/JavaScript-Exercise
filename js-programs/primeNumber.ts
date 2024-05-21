function findPrime(num: number) {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

const result7 = findPrime(4);
console.log(result7, "Prime or not");
