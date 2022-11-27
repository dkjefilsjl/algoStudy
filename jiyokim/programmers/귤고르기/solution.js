function solution(k, tangerine) {
    var answer = 0;
    let size = new Set(tangerine);
    size = Array.from(size);
    var info = {};
    for(var i = 0; i < size.length; i++)
        info[ size[i] ] = 0; 
    for (var i = 0; i < tangerine.length ; i++)
        info[ tangerine[i] ] += 1;
    let num = Object.values(info);
    num.sort((a, b) => b - a);
    let tang = 0;
    for (const n of num) {
    answer++;
    if (k > n) k -= n;
    else break;
  }
    return answer;
}
