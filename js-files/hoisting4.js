function hoistingExample() {
  console.log(a);
  var a = 10;
  console.log(b);
  let b = 20;
}
hoistingExample();
