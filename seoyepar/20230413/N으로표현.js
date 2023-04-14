function solution(N, number) {
    let cnt = 2;
    const cal_memo = Array.from(new Array(10), () => new Array());
    
    if (number === N) return 1;
    cal_memo[1].push(N);
    
    function calN(cnt, obj1, obj2){
        for(let i = 0; i < obj1.length; i++){
            for (let j = 0; j < obj2.length; j++){
                let nN = Number(cal_memo[cnt - 1][0] + "" + N);
                if ((nN === number) || (obj1[i] + obj2[j] === number) || (obj1[i] - obj2[j] === number) || (obj1[i] * obj2[j] === number) || (parseInt(obj1[i] / obj2[j]) === number)) return cnt;
                cal_memo[cnt].push(nN);
                cal_memo[cnt].push(obj1[i] + obj2[j]);
                cal_memo[cnt].push(obj1[i] - obj2[j]);
                cal_memo[cnt].push(obj1[i] * obj2[j]);
                cal_memo[cnt].push(parseInt(obj1[i] / obj2[j]));   
            }
        }
        return -1;
    }
    
    let re = 0;
    re = calN(cnt, cal_memo[1], cal_memo[1]);
    if (re > 0) return re;
    while (cnt < 8){
        cnt++;
        for (let j = 1; j < cnt; j++){
            for (let i = cnt - 1; i > 0; i--){
                if ((cnt - j) + (cnt - i) === cnt){
                    re = calN(cnt, cal_memo[cnt - j], cal_memo[cnt - i]);
                }
                if (re > 0) return re;
            }
        }
    }

    
    return -1;
}



