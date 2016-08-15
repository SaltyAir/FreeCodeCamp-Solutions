function findLongestWord(str) {
  var longestWord = [];
  str = str.split(" ").forEach(function(word) {
    if (longestWord.length < word.length) {
      longestWord = word;
    }
  });
  return longestWord.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
