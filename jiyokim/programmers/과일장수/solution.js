function solution(k, m, score) {
    var answer = 0;
    let arr = [];
    score.sort().reverse();
    for (let i = 0; i < score.length; i += m)
        arr.push(score.slice(i, i + m));
    arr = arr.filter(e => e.length === m);
    arr.map((e)=> { answer+= m * e.pop(); })
    return answer;
}
