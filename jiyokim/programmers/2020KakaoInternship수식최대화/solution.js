function solution(expression) {
    const prior = [
        ['-', '*', '+'],
        ['-', '+', '*'],
        ['*', '+', '-'],
        ['*', '-', '+'],
        ['+', '*', '-'],
        ['+', '-', '*'],
    ];
    let answer = [];
    for (let op of prior){
        const tmp = expression.split(/(\D)/);
        for (let exp of op) {
            while(tmp.includes(exp)){
                const idx = tmp.indexOf(exp);
                tmp.splice(idx - 1, 3, eval(tmp.slice(idx-1, idx+2).join('')));
                console.log(tmp);
            }
        }
        answer.push(Math.abs(tmp[0]));
    }
    return Math.max(...answer);
}
