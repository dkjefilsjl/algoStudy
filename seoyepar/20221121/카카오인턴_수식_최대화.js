function solution(expression) {
  var answer = 0;
  var pri = [0, 1, 2];
  var num = [];
  var oper = [];
  var tmp = 0;
  var cnt = 0;

  for (let i = 0; i < expression.length; i++) {
    if (
      expression[i] == '*' ||
      expression[i] == '+' ||
      expression[i] == '-' ||
      i + 1 == expression.length
    ) {
      if (i + 1 != expression.length) {
        oper.push(expression[i]);
        num.push(Number(expression.substr(tmp, cnt)));
      } else num.push(Number(expression.substr(tmp, cnt + 1)));
      tmp = i + 1;
      cnt = -1;
    }
    cnt++;
  }
  var numTmp;
  var operTmp;
  cnt = 0;
  for (let i = 0; i < 3; i++) {
    if (i == 0) {
      numTmp = num.slice();
      operTmp = oper.slice();
    }
    for (let j = 0; j < operTmp.length; j++) {
      var tmp = 0;
      if (pri[i] == 0 && operTmp[j] == '*') {
        tmp = numTmp[j] * numTmp[j + 1];
        numTmp.splice(j, 2, tmp);
        operTmp.splice(j, 1);
        j--;
      } else if (pri[i] == 1 && operTmp[j] == '+') {
        tmp = numTmp[j] + numTmp[j + 1];
        numTmp.splice(j, 2, tmp);
        operTmp.splice(j, 1);
        j--;
      } else if (pri[i] == 2 && operTmp[j] == '-') {
        tmp = numTmp[j] - numTmp[j + 1];
        numTmp.splice(j, 2, tmp);
        operTmp.splice(j, 1);
        j--;
      }
      if (answer < Math.abs(numTmp)) answer = Math.abs(numTmp);
    }
    if (cnt == 7) break;
    if (i == 2) {
      cnt++;
      if (cnt % 2 == 0) {
        var tmp = pri[2];
        pri[2] = pri[1];
        pri[1] = tmp;
      } else {
        var tmp = pri[0];
        pri[0] = pri[1];
        pri[1] = tmp;
      }
      i = -1;
    }
  }
  return answer;
}
