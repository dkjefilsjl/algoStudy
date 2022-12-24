function solution(sizes) {
  var answer = [0, 0];
  sizes.forEach((s) => {
    var w = s[0],
      h = s[1];
    w < h && (w = s[1]) && (h = s[0]);
    answer[0] = Math.max(answer[0], w);
    answer[1] = Math.max(answer[1], h);
  });

  return answer[0] * answer[1];
}
