var findFactorial = function (number) {
    if (number == 0 || number == 1)
        return 1;
    else
        return number * findFactorial(number - 1);
};
var result6 = findFactorial(5);
console.log(result6, "Result");
