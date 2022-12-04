function solution(dots) {
  var tmp = [];
  for (let i = 0; i < dots.length - 1; i++) {
    for (let j = i + 1; j < dots.length; j++)
      tmp.push((dots[i][1] - dots[j][1]) / (dots[i][0] - dots[j][0]));
  }
  const set = new Set(tmp);
  if (tmp.length != set.size) return 1;
  return 0;
}
