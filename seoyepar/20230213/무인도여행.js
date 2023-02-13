function solution(maps) {
    let answer = [];
    let move = [[0, 1], [1, 0], [-1, 0], [0, -1]];
    let y_len = maps.length;
    let x_len = maps[0].length;
    let X = 'X';
    let visited = Array.from(Array(y_len), () => new Array(x_len).fill(0));
    
    const stack = [];

    for (let y = 0; y < y_len; y++){
        for (let x = 0; x < x_len; x++){ //전체 map 한번 돌기
            let maxDay = 0;
            if (visited[y][x] === 0){ //해당 map을 방문하지 않은 경우
                visited[y][x] = 1;
                if (maps[y][x] !== X){ // 'X'가 아닌 1~9사이의 숫자이면
                    maxDay += Number(maps[y][x]);
                    stack.push([y, x]);
                    while (stack.length){
                        let [sy, sx] = stack.pop();
                        for (let i = 0; i < 4; i++){ //상, 하, 좌, 우로 이동하기 위함
                            let posy = move[i][0] + sy; 
                            let posx = move[i][1] + sx;
                            if ((posy >= 0) && (posy < y_len) && (posx >= 0) && (posx < x_len)){ //map 크기를 벗어나지 않는 상황에서
                                if ((visited[posy][posx] === 0) && (maps[posy][posx] !== X)){ //방문해야 하는 좌표인 경우
                                    visited[posy][posx] = 1;
                                    stack.push([posy, posx]); //stack에 해당 좌표 넣어주기
                                    maxDay += Number(maps[posy][posx]);
                                }
                            }
                        };
                    }
                }
            }
            if (maxDay !== 0) answer.push(maxDay);
            
        }
    }

    return (answer.length === 0) ? [-1] : answer.sort((a, b)=> a - b);
}
