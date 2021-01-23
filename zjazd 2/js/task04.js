let wordA = prompt("podaj słowo nr 1");
  let wordB = prompt("podaj słowo nr 2");
  const areAnagrams = () => {
    if (wordA.length != wordB.length) return false;
    wordA = wordA.split("").sort().join("");
    wordB = wordB.split("").sort().join("");
    for (let i = 0; i < wordA.length; i++) {
      if ((wordA.charAt(i)) != (wordB.charAt(i))) {
          console.log("to nie anagramy");
          return false;
      }
    }
    console.log("to anagramy");
    return true;
  }
  areAnagrams(wordA, wordB);