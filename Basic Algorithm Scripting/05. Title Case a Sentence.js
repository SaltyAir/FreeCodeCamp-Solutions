function titleCase(str) {
  var newString = [];
  str = str.toLowerCase().split(" ");
  newString = str.map(charToUpperCase).join(" ");
  return newString;
}

function charToUpperCase(x) {
  var origLetter = x.charAt(0);
  var capital = origLetter.toUpperCase();
  x = x.replace(origLetter, capital);
  return x;
}

console.log(titleCase("I'm a little tea pot"));


// 2nd solution:

// function titleCase(str) {
//   var tmp;
//   var neueWoerter = [];
//
//   str = str.toLowerCase().split(" ");
//
//   for (var i = 0; i < str.length; i++) {
//         tmp = str[i];
//         neueWoerter[i] = tmp.charAt(0).toUpperCase() + tmp.slice(1);
//   }
//   return neueWoerter.join(" ");
//
// }
//
// console.log(titleCase("I'm a little tea pot"));
