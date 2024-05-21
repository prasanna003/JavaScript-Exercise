function checkPalindrome(str) {
  return str === str.split("").reverse().join("");
}
var result3 = checkPalindrome("MOM");
console.log("palindrome", result3);
