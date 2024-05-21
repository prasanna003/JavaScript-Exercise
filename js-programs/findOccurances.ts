const phone = "7885025909";

// Function to count occurrences of each character in a string
function countOccurrences(str: string): void {
  const occurrences: { [char: string]: number } = {};

  // Iterate over each character of the string using for...of loop
  for (const char of str) {
    occurrences[char] = (occurrences[char] || 0) + 1;
  }

  // Print the occurrences for each unique character
  for (const char in occurrences) {
    if (occurrences.hasOwnProperty(char)) {
      console.log(`${char}, ${occurrences[char]}`);
    }
  }
}

// Get occurrences of each character in the phone number
countOccurrences(phone);
