function checkPalindrome(str: string) {
  return str === str.split("").reverse().join("");
}

const result3 = checkPalindrome("MOM");
console.log("palindrome", result3);
