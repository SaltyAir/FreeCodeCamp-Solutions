function titleCase(str) {
  var tmp;
  var newStr = [];

  str = str.toLowerCase().split(" ");

  for (var i = 0; i < str.length; i++) {
        tmp = str[i];
        newStr[i] = tmp.charAt(0).toUpperCase() + tmp.slice(1);
  }
  return newStr.join(" ");

}

titleCase("I'm a little tea pot");
