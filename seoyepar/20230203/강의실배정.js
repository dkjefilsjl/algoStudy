const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function(line){
    input.push(line);
}).on('close', function(){
    const n = Number(input[0]);
    let time = [];
    let prev_end = 0;
    let cnt = 1;
    for (let i = 1; i <= n; i++){
        let [s, f] = input[i].split(' ');
        time.push([Number(s), Number(f)]);
    }
    time.sort(function(a, b){
        return a[1] - b[1];
    });
    time.forEach((data, i)=>{
        if (i === 0)
            prev_end = data[1];
        else if (prev_end <= data[0])
        {
            prev_end = data[1];
            cnt++;
        }
    });
    console.log(cnt);
})
