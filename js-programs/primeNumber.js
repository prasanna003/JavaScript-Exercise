function findPrime(num) {
    if (num <= 1)
        return false;
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0)
            return false;
    }
    return true;
}
var result7 = findPrime(4);
console.log(result7, "Prime or not");
