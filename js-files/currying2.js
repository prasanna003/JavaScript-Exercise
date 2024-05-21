function curryingFunction(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(curryingFunction(1)(2)(4));
