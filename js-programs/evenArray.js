function evenArray(arr) {
  return arr.filter(function (nu) {
    return nu % 2 == 0;
  });
}
var myArrr = [2, 1, 4, 565, 5454];
var result4 = evenArray(myArrr);
console.log(result4, "Result");
