function solution(n, computers) {
    let visited = new Array(n).fill(0);
    let cnt = 0;
    
    function dfs(pos) {
        if (!visited[pos]){
            visited[pos] = 1;
            computers[pos].forEach((data, i)=>{
                if (data === 1) dfs(i);
            });
        }
    }
    for (let i = 0; i < n; i++){
        if(!visited[i]){
            dfs(i);
            cnt++;
        }
    }
       
    return cnt;
}
