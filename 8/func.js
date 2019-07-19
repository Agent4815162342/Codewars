function shortestStepsToNum(num) {
let steps = 0;
  while (num > 1) {
    if (num%2 == 0) {
      steps++;
      num/=2;
    } else {
      steps++;
      num--;
    }
  }
  return steps;
}