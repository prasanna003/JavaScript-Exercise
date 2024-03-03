function higherOrder(fn) {
  fn();
} //A function taking fn as input param and returning the same fn

//Now while calling higherOrder(), we sending fn as args
higherOrder(function () {
  console.log("Hello world");
});
