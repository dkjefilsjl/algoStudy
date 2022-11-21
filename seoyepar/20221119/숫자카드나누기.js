function getNum(arrayC) {
  var num = [];
  let count = 0;
  for (let j = 2; j <= arrayC[0]; j++) {
    if (arrayC[0] % j == 0) {
      num.push(j);
    }
  }
  /*for (let j = 1; j * j <= arrayC[0]; j++) {
        if (j * j == arrayC[0]) num.push(j);
        else if (arrayC[0] % j == 0)
            {
                if (j != 1)
                num.push(j);
                num.push(arrayC[0]/j);
            }
      }*/
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

function solution(arrayA, arrayB) {
  var answer = 0;
  var check = 0;
  var num = [];
  var check = [];

  num = getNum(arrayA);
  for (let i = 0; i < arrayB.length; i++) {
    for (let n = 0; n < num.length; n++) {
      if (arrayB[i] % num[n] == 0) {
        num.splice(n, 1);
        n--;
      }
    }
  }
  if (num.length < 1) answer = 0;
  else answer = Math.max.apply(null, num);
  /*for (let i = 0; i < num.length; i++)
              if (answer < num[i])
                  answer = num[i];*/
  return answer;
}
