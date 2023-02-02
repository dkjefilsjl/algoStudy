const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on('line', function (line){
    input.push(line);
}).on('close', function (){
    
    let [n, k] = input[0].split(' ');
    let s = input[1].split(' ').map(Number);
    let sum = 0;
    for (let i = 0; i < k; i++)
    {
        let [a, b] = input[i + 2].split(' ');
        for (let k = a - 1; k < b; k++)
            sum += s[k];
        console.log((Math.ceil(sum)/(b - a + 1)).toFixed(2));
        sum = 0;
    }
});
