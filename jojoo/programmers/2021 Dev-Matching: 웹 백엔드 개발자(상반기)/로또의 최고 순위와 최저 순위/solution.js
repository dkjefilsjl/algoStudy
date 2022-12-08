function solution(lottos, win_nums) {
  var answer = [];

  let zeroC = 0;
  for (let i = 0; i < lottos.length; i++) {
    if (lottos.at(i) == 0) zeroC += 1;
  }

  let collect = win_nums.filter((num) => lottos.includes(num));
  let topRank = 7 - collect.length - zeroC;
  let lowRank = 7 - collect.length;
  if (topRank >= 6) topRank = 6;
  answer.push(topRank);
  if (lowRank >= 6) lowRank = 6;
  answer.push(lowRank);

  return answer;
}
