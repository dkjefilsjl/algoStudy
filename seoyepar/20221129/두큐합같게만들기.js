function solution(queue1, queue2) {
  var answer = 0;
  var q = [...queue1, ...queue2];
  var len = queue1.length;
  var q1 = 0;
  var q2 = len;
  var sum = queue1.reduce((sum, cur) => {
    return sum + cur;
  });
  var goal =
    q.reduce((sum, cur) => {
      return sum + cur;
    }) / 2;

  for (let i = 0; i < len * 3; i++) {
    if (sum == goal) {
      return answer;
    }
    if (sum < goal) {
      sum += q[q2];
      q2++;
    } else if (sum > goal) {
      sum -= q[q1];
      q1++;
    }
    answer++;
  }
  return -1;
}
