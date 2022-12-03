function solution(queue1, queue2) {
    let answer = 0;
    let que = [...queue1, ...queue2];
    let sum1 = queue1.reduce((sum, cur) => (sum + cur));
    let goal = que.reduce((sum, cur) => sum + cur) / 2;
    let start1 = 0;
    let start2 = queue1.length;
    if ((goal) % 1) return -1;
    for (let i = 0 ; i < que.length * 2 ; i++)
    {
        if (sum1 == goal) return answer;
        else if (sum1 < goal) {
            sum1 += que[start2];
            start2++;
        }
        else {
            sum1 -= que[start1];
            start1++;
        }
        answer++;
    }
    return -1;
}

