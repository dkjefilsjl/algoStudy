const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function(line){
    input.push(line);
}).on('close', function(){
    const [n, m, k] = input[0].split(' ').map(Number);
    const w = input[1].split(' ').map(Number);
    const getPermutations = function (arr, selectNumber) {
        const results = [];
        if (selectNumber === 1) return arr.map((el) => [el]); 
        arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index+1)] 
        const permutations = getPermutations(rest, selectNumber - 1); 
        const attached = permutations.map((el) => [fixed, ...el]); 
        results.push(...attached); 
        });

        return results;
    }
    const list = getPermutations(w, n);
    let min_sum = 0;
    list.forEach((data)=>{
        let i = 0;
        let day = 1;
        let sum_tmp = 0;
        let sum = 0;
        while (day <= k)
        {
            if (sum_tmp + data[i] <= m){
                sum_tmp += data[i];
            }
            else{
                sum += sum_tmp;
                sum_tmp = data[i];
                if (day === k){
                    if (min_sum === 0 || sum < min_sum)
                        min_sum = sum;
                }
                day++;
            }
           (i < data.length - 1 ) ? i++ : i = 0;
        }
    });
    
    
    console.log(min_sum);
});
