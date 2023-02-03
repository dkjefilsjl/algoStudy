const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on('line', function(line){
    input.push(line);
}).on('close', function(){
    const [n, m] = input[0].split(' ').map(Number);
    const w = input[1].split(' ').map(Number);
    let cnt = 0;
    let map = new Map();
    let max_w = Array(n).fill(0);
    for (let i = 0; i < m; i++){
        const [a, b] = input[i+2].split(' ').map(Number);
        if (max_w[a - 1] < w[b - 1]){
            max_w[a - 1] = w[b - 1];
        }
        if (max_w[b - 1] < w[a - 1]){
            max_w[b - 1] = w[a - 1];
        }
    }
    for (let i = 0; i < n; i++){
        if (max_w[i] === 0)
            cnt++;
        else if (w[i] > max_w[i])
            cnt++;
    }
    console.log(cnt);
});
