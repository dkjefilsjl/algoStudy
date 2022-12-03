function solution(survey, choices) {
  let answer = '';
  const num = [0, 3, 2, 1, 0, 1, 2, 3];
  const mbti = {
    R: 0,
    T: 1,
    C: 2,
    F: 3,
    J: 4,
    M: 5,
    A: 6,
    N: 7,
  };
  let cnt = [
    ['R', 0],
    ['T', 0],
    ['C', 0],
    ['F', 0],
    ['J', 0],
    ['M', 0],
    ['A', 0],
    ['N', 0],
  ];
  survey.map((cur, i) => {
    if (choices[i] <= 3) cnt[mbti[cur[0]]][1] += num[choices[i]];
    if (choices[i] >= 5) cnt[mbti[cur[1]]][1] += num[choices[i]];
  });
  for (let i = 0; i < 8; i += 2) {
    if (cnt[i][1] > cnt[i + 1][1]) answer += cnt[i][0];
    else if (cnt[i][1] == cnt[i + 1][1]) {
      if (cnt[i][0] > cnt[i + 1][0]) answer += cnt[i + 1][0];
      else answer += cnt[i][0];
    } else answer += cnt[i + 1][0];
  }
  return answer;
}
