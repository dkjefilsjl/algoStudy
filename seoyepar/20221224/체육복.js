function solution(n, lost, reserve) {
  var answer = n - lost.length;
  var j = 0;
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);
  for (let i = 0; i < lost.length; i++) {
    while (j < reserve.length || lost[i] < reserve[j]) {
      if (lost[i] === reserve[j]) {
        lost.splice(i--, 1);
        reserve.splice(j, 1);
        answer++;
      } else if (lost[i] >= reserve[j]) j++;
      else break;
    }
  }
  //console.log(lost, reserve);
  j = 0;
  lost.forEach((l) => {
    if (j >= reserve.length) return;
    while (j < reserve.length) {
      if (l === reserve[j] - 1 || l === reserve[j] + 1) {
        j++;
        answer++;
        break;
      }
      if (reserve[j] - 1 > l) break;
      j++;
    }
  });
  return answer;
}
