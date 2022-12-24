function solution(answers) {
  var answer = [0, 0, 0];
  var supo = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  var max = 0;
  answers.forEach((data, i) => {
    var check = [0, 0, 0];
    supo.forEach((s, si) => {
      i !== 0 && (check[si] = i % s.length);
      data === supo[si][check[si]] && answer[si]++;
      max < answer[si] && (max = answer[si]);
    });
  });
  return answer.reduce((re, a, i) => {
    if (a === max) re.push(i + 1);
    return re;
  }, []);
}
