function solution(begin, target, words) {
    let len = begin.length;
    let map = new Map();
    let min_cnt = 0;
    let visited = new Array(0);
    if (!words.includes(target))
        return 0;
    
    function setMap(now){
        for (let i = 0; i < len; i++){
            let tmp_begin = now.substr(0, i);
            let tmp_last = now.substr(i + 1);
            words.forEach((word)=>{
                if((word !== now) && word.includes(tmp_begin) && word.includes(tmp_last)){
                    !map.has(now) ? map.set(now, [word]) : map.get(now).push(word);
                };
            });
        }
    }
    setMap(begin);
    words.forEach((word)=>{setMap(word);});
    
    function dfs(now, visited){
        if ((min_cnt !== 0) && (min_cnt < visited.length - 1)) return ;
        if(visited.includes(now)) return ;
        visited.push(now);
        if ((now === target) && ((min_cnt === 0) || (min_cnt > visited.length - 1))) min_cnt = visited.length - 1;
        map.has(now) && map.get(now).forEach((data)=>{dfs(data, [...visited]);});
    }
    dfs(begin, visited);
    return min_cnt;
}
