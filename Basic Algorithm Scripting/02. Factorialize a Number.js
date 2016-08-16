function factorialize(num) {
  var answer = 1;

  for (var i = 1; i <= num; i++) {
    answer = answer * i;
  }
  return answer;
}

factorialize(5);
