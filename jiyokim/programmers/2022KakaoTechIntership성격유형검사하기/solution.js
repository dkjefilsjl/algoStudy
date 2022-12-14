function findType (e) {
    if (e === 'R') return 0;
    if (e === 'T') return 1;
    if (e === 'C') return 2;
    if (e === 'F') return 3;
    if (e === 'J') return 4;
    if (e === 'M') return 5;
    if (e === 'A') return 6;
    if (e === 'N') return 7;
    return -1;
}

function solution(survey, choices) {
    let answer = '';
    let n = 4;
    let arr = Array.from({length: 8}, () => 0);
    survey.forEach((e, i) => {
        (choices[i] - n < 0 ) ? 
            arr[findType(e[0])] += n - choices[i]
        : arr[findType(e[1])] += choices[i] - n ;
    });
    (arr[0] < arr[1]) ? answer += 'T' : answer += 'R';
    (arr[2] < arr[3]) ? answer += 'F' : answer += 'C';
    (arr[4] < arr[5]) ? answer += 'M' : answer += 'J';
    (arr[6] < arr[7]) ? answer += 'N' : answer += 'A';
    return answer;
}
