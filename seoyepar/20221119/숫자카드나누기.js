function solution(arrayA, arrayB) {
  var answer = 0;
  var num = [];
  var max = 0;

  num = getNum(arrayA);
  answer = find_max(num, arrayB);
  num = getNum(arrayB);
  max = find_max(num, arrayA);

  if (max > answer) answer = max;

  return answer;
}

function find_max(num, arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let n = 0; n < num.length; n++) {
      if (arr[i] % num[n] == 0) {
        num.splice(n, 1);
        n--;
      }
    }
  }
  if (num.length < 1) return 0;
  else return Math.max.apply(null, num);
}

function getNum(arrayC) {
  var num = [];
  let count = 0;
  for (let j = 2; j <= arrayC[0]; j++) {
    if (arrayC[0] % j == 0) {
      num.push(j);
    }
  }
  for (let j = 0; j < arrayC.length; j++) {
    for (let n = 0; n < num.length; n++) {
      if (arrayC[j] % num[n] != 0) {
        num.splice(n, 1);
        n--;
      }
    }
  }
  return num;
}
