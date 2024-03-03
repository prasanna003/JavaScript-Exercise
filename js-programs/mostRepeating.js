function findMostRepeated(arr) {
  let counts = {}; // Object to store counts of each element
  let mostRepeated = null;
  let maxCount = 0;

  // Count occurrences of each element
  for (let i = 0; i < arr.length; i++) {
    if (counts[arr[i]] === undefined) {
      counts[arr[i]] = 1;
    } else {
      counts[arr[i]]++;
    }
    // Update most repeated element if needed
    if (counts[arr[i]] > maxCount) {
      mostRepeated = arr[i];
      maxCount = counts[arr[i]];
    }
  }

  return mostRepeated;
}

let myArr = [1, 1, 2, 2, 2];
let mostRepeatedValue = findMostRepeated(myArr);
console.log(mostRepeatedValue); // Output: 2
