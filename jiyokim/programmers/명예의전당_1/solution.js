function solution(k, score) {
    var answer = [];
    var tmp = [];
    answer.push(score[0]);
    tmp.push(score[0]);
    for (var i = 1 ; i < score.length ; i++)
    {
        tmp.push(score[i]);
        tmp.sort(function(a, b) { return b - a; });
        if (k - 1 < i)
            answer.push(tmp[k - 1]);
        else 
            answer.push(tmp[i]);
    }
    return answer;
}
