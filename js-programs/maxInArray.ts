function findMax(arr: any) {
  console.log("spreaded", ...arr);
  return Math.max(...arr);
}
let myArr = [1, 2, 3, 4, 5];
const resultt = findMax(myArr);
console.log(resultt, "result");
