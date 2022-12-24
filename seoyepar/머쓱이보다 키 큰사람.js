function solution(array, height) {
    var answer = 0;
    array.forEach((data)=>{
        if (data > height)
            answer++;
    });
    return answer;          
}
