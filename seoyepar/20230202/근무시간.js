const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line){
    input.push(line);
}).on('close', function (){
    let all_time = 0;
    input.map((t)=>{
        let [start, end] = t.split(' ');
        let [s_hour, s_min] = start.split(':');
        let [e_hour, e_min] = end.split(':');

        all_time += (Number(e_hour) - Number(s_hour)) * 60;
        e_min = Number(e_min);
        s_min = Number(s_min);
        e_min >= s_min ?  (all_time += e_min - s_min) : (all_time -= s_min - e_min);
    });  
    console.log(all_time);
    process.exit();
});
