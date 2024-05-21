var phone = '7885025909';
// Function to count occurrences of each character in a string
function countOccurrences(str) {
    var occurrences = {};
    // Iterate over each character of the string using for...of loop
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        occurrences[char] = (occurrences[char] || 0) + 1;
    }
    // Print the occurrences for each unique character
    for (var char in occurrences) {
        if (occurrences.hasOwnProperty(char)) {
            console.log("".concat(char, ", ").concat(occurrences[char]));
        }
    }
}
// Get occurrences of each character in the phone number
countOccurrences(phone);
