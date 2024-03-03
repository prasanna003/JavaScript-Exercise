function extractingArgs(...args) {
  return args[1];
}

// extractingArgs(8,9,1); // Returns 9

function addAllArgs(...args) {
  let sumOfArgs = 0;
  let i = 0;
  while (i < args.length) {
    sumOfArgs += args[i];
    i++;
  }
  return sumOfArgs;
}

console.log(addAllArgs(6, 5, 7, 99)); // Returns 117
console.log(addAllArgs(1, 3, 4)); // Returns 8


/**Note- Rest parameter should always be used at the last parameter of a function:*/

