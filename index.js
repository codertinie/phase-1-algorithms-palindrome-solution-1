function reverseString(word) {
  // TODO: implement string reversing functionality
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  // Write your algorithm here
  // reverse the input string
  const reversedWord = reverseString(word);
  // compare the reversed string to the input
  return word === reversedWord;
}

/* 
  Add your pseudocode here
  if the reversed string is same as the input
  return true else return false
*/

/*
  Add written explanation of your solution here
  the function is palindrome takes one argument and checks whether it's a
  palindrome. it does so by reversing the input then compares the reversed input
  to the original input. If they are equal, it returns true and returns false if otherwise.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");
}

module.exports = isPalindrome;
