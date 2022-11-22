/*
    paths를 돌면서 연결된 것들을 찾기
    connect = [[1번과 연결되어 있는 지점들],[2번과 연결된 지점들],...]; -> tree로 만들면 좋을듯? 산봉우리를 root로 두려 했는데, 산봉우리가 여러개일 수 있구나. tree에 그런 트리가 있나?? 일단 재귀로 풀어보자.
    */
/*gates를 돌면서 체크
    {
        1. connect[gates - 1]부터 타고들어가며 시간 체크 -> tree 탐색 방법 사용 -> 아니다 재귀함수 사용으로 가자
        2. 산봉우리를 만난 경우 다른 산봉우리들은 지나치도록 하며, 시작한 gate로 다시 올라가는 방법 탐색
        3. 시작한 gate를 만나면 answer에 값을 저장했다가, 다른 값이 나오면 값을 비교하여 더 작은 값을 다시 저장.
        4. answer에 있는 산봉우리와 다른 산봉우리일 경우, 해당 값이 같거나 작을때까지 변동 없음.
        5. 만일 값이 같으면 더 작은 숫자의 산봉우리의 내용을 저장.
        6. 값이 작으면 해당 산봉우리 내용으로 저장.
    }
    */
function solution(n, paths, gates, summits) {
  var answer = [0, 0];
  var connect = [];
  var tmp = [];
  var cnt = 0;
  var check = 0;
  var tmp_j = 0;
  for (let i = 0; i <= n; i++) {
    tmp.push([0, -1]);
  }
  for (let i = 0; i < paths.length; i++) {
    cnt = 0;
    check = 0;
    for (let j = 0; j < tmp.length; ) {
      cnt++;
      tmp_j = j;
      j = j + tmp[j][0] + 1;
      //console.log("tmp = " + tmp, "tmp[j] = " + tmp[j], "j = " + j);
      if (tmp.length <= j) tmp.push([paths[i][1], paths[i][2]]);
      else if (cnt == paths[i][0]) {
        tmp.splice(j, 0, [paths[i][1], paths[i][2]]);
        tmp[tmp_j][0]++;
        j++;
        check++;
      } else if (cnt == paths[i][1]) {
        tmp.splice(j, 0, [paths[i][0], paths[i][2]]);
        tmp[tmp_j][0]++;
        j++;
        check++;
      }
      if (check == 2) break;
    }
  }
  // console.log(paths.length, tmp.length);
  let i = 0;
  while (tmp[i][0] != 0) {
    connect.push(tmp.splice(i + 1, tmp[i][0]));
    i++;
  }
  for (let i = 0; i < gates.length; i++) {
    let j = 0;
    console.log('gates = ' + gates[i]);
    while (connect[gates[i] - 1][j]) {
      var re = time_check(
        connect,
        connect[gates[i] - 1][j],
        gates[i],
        summits,
        -1,
        0,
      );
      if (re[0] > 0) {
        if (answer[0] == 0 || answer[1] > re[1]) answer = re.slice();
        if (answer[1] == re[1] && answer[0] > re[0]) answer = re.slice();
      }

      j++;
      console.log('answer = ' + answer, ' re = ' + re);
    }
  }
  return answer;
}

function time_check(connect, path, gate, summits, check, dep) {
  if (dep != 0) console.log('-');
  console.log(path[0]);
  if (dep >= connect.length * 2) return [-2, -2];
  for (let s = 0; s < summits.length; s++) {
    if (check == -1) {
      if (path[0] == summits[s]) check = summits[s];
    } else if (path[0] == summits[s]) {
      return [-1, path[1]];
    }
  }
  if (path[0] == gate) return [check, path[1]];
  else {
    var j = 0;
    var p = path[0] - 1;
    var re = 0;
    //console.log(connect[p].length);
    while (connect[p][j]) {
      //console.log(connect[p][j]);
      //if (connect[p][j][0] != gate) //gate가 아니면서
      //{
      //check != -1일때 산봉우리도 아니어야 재귀.
      if (check != -1) {
        for (s = 0; s < summits.length; s++)
          if (connect[p][j] == summits[s]) return [-1, connect[p][j][1]];
      }
      re = time_check(
        connect,
        connect[p][j],
        gate,
        summits,
        check,
        ++dep,
      ).slice();
      if (re[0] > 0) {
        // issue : 여기서 return이 나오면 전체 탐색이 안됨. 근데도 무한 재귀중이네
        if (re[1] > path[1]) return [re[0], path[1]];
        else return [re[0], re[1]];
      } else {
        if (re[1] > path[1]) return [-1, path[1]];
        else return [-1, re[1]];
      }
      //}
      j++;
    }
    return [-1, -1];
  }
}
