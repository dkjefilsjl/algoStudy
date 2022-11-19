function solution(food) {
    var answer = '';
    for (var i = 1 ; i < food.length ; i++)
    {
        var num = parseInt(food[i] / 2);
        answer += String(i).repeat(num);
    }
    answer = answer + '0' + answer.split('').reverse().join('');
    return answer;
}
