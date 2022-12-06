/*
N개의 마을로 이루어진 나라, 각 마을에는 1~N까지의 번호가 각각 하나씩 부여됨.
N개의 마을 중 K시간 이하로 배달 가능한 마을에서만 주문 받음.
N : 마을 개수, road : 마을 연결하는 도로 정보, K : 음식 배달이 가능한 시간
1번 마을에 있는 음식점이 음식 주문을 받을 수 있는 마을 개수를 return
*/

function solution(N, road, K) {
  let answer = 0;
  let visited = Array(N + 1).fill(0);
  let min = Array(N + 1).fill(Number.MAX_SAFE_INTEGER);
  let checkRoad = Array.from(Array(N + 1), () => []);

  road.forEach((data) => {
    let [s, t, d] = data;
    if (t != 1) checkRoad[s].push([t, d]);
    if (s != 1) checkRoad[t].push([s, d]);
  });
  min[1] = 0;
  visited[1] = 1;
  let now = [1, 0];
  let maxmin = [];
  for (let i = 0; i < N; i++) {
    //해당 정점(시작은 1)일때 쭉 돌면서 maxmin배열에 [v, d] 값 넣기 (visited[v] == 0인 경우만)
    checkRoad[now[0]].forEach((data) => {
      if (visited[data[0]] == 0) maxmin.push([data[0], data[1] + now[1]]);
    });
    //maxmin배열 내림차순 정렬
    maxmin.sort(function (a, b) {
      return b[1] - a[1];
    });
    //console.log(maxmin);
    //제일 뒤에 값을 pop해서 다음 정점으로 결정 (visited[v] == 0인 경우만)
    if (maxmin.length == 0) break;
    now = maxmin.pop();
    while (visited[now[0]] == 1) {
      if (maxmin.length == 0) {
        now = [-1, -1];
        break;
      }
      now = maxmin.pop();
    }
    if (now[0] == -1) break;
    min[now[0]] = now[1];
    visited[now[0]] = 1;
  }
  return min.filter((data) => data <= K).length;
}
