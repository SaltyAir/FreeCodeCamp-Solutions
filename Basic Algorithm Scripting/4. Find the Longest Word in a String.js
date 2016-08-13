function findLongestWord(str) {
  var temp = "";
  str = str.split(" ");

  str.forEach(function(word) {
    if (word.length > temp.length) {
      temp = word;
    }
  });
  return temp.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
