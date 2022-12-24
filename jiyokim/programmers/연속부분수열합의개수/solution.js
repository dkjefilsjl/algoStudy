function solution(elements) {
    let len = elements.length;
    var sum = new Set(elements);
    elements.push(...elements);
    for (let i = 2 ; i <= len ; i++) {
        for (let j = 0 ; j < len ; j++) {
            let tmp = 0;
            for (let k = j ; k < j + i ; k++)
                tmp += elements[k];
            sum.add(tmp);
        }
    }
    return sum.size;
}
