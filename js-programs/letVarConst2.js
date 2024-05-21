function test() {
  console.log(a);
  var a = 1; //a is undefined
  console.log(b); //undefined
  if (true) {
    var b = 2;
  }
  console.log(b); //2
}
test();
