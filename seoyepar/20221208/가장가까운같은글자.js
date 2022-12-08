function solution(s) {
  var answer = Array(s.length).fill(-1);
  for (let i = s.length - 1; i > 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (s[i] == s[j]) {
        answer[i] = i - j;
        break;
      }
    }
  }
  return answer;
}
