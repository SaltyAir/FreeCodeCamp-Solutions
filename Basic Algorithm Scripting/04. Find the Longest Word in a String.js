function findLongestWord(str) {
  var arr = str.split(" ").sort(function (a, b) {
    return b.length - a.length;
  });
  return arr[0].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");



// Second solution
//
// function findLongestWord(str) {
//   var longestWord = [];
//   str = str.split(" ").forEach(function(word) {
//     if (longestWord.length < word.length) {
//       longestWord = word;
//     }
//   });
//   return longestWord.length;
// }
//
// findLongestWord("The quick brown fox jumped over the lazy dog");



// Third solution
//
// function findLongestWord(str) {
//  var arr = str.split(" ");
//  var longestWord = 0;
//  for (var i = 0; i < arr.length; i++) {
//      if (arr[i].length > longestWord) {
//          longestWord = arr[i].length;
//      }
//  }
//  return longestWord;
// }
//
// findLongestWord("The quick brown fox jumped over the lazy dog");