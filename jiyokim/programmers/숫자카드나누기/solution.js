function isAnswer (n, arr1, arr2)
{
    for (let a of arr1)
        if (a % n != 0)
            return false;
    for (let b of arr2)
        if (b % n == 0)
            return false;
    return true ;
}

function divisorWithout1(num)
{
    arr = [];
    for (let i = 2 ; i <= num ; i++)
        if (num % i == 0)
            arr.push(i);
    return arr;
}

function solution(arrayA, arrayB) {
    let answer = [];
    arrayA.sort((a, b) => a - b);
    arrayB.sort((a, b) => a - b);
    answer.push(...divisorWithout1(arrayA[0]));
    answer.push(...divisorWithout1(arrayB[0]));
    answer = new Set(answer);
    answer = Array.from(answer);
    answer.sort((a,b) => b - a);
    for (let a of answer)
    {
        let A = isAnswer(a, arrayA, arrayB);
        let B = isAnswer(a, arrayB, arrayA);
        if (A || B) {
            return a;
        }
    }
    return 0;
}
