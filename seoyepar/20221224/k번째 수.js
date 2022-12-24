function solution(array, commands) {
  var answer = [];
  commands.forEach((c) => {
    answer.push(
      array
        .filter((a, i) => {
          return i >= c[0] - 1 && i < c[1];
        })
        .sort((a, b) => a - b)[c[2] - 1],
    );
  });
  return answer;
}
