let word = prompt("podaj słowo");
const checkIfPalindrome = () => {
  word = word.toLowerCase().replace(/[^a-z]+/g,"");
  word2 =  word.split("").reverse().join("");
    if (word === word2) {
      console.log("słowa to palindromy")
    } else {
      console.log("słowa to nie palindromy")
    }
  }
checkIfPalindrome(word);