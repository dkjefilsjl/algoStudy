function solution(k, ranges) {
    var answer = [];
    let x = 0;
    let tmp = k;
    let area = [];
    while (k != 1) {
        tmp = k;
        if (k % 2) k = k * 3 + 1;
        else k /= 2;
        area.push((k - tmp) / 2 + tmp);
        x++;
    }
    for (r of ranges) {
        tmp = 0;
        for (let i = r[0] ; i < x + r[1] ; i++)
            tmp += area[i];
        if (r[0] > x + r[1])
            tmp = -1;
        answer.push(tmp);
    }
    return answer;
}
