
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {

    var [a, b] = (input[0].split(' '));
    a = Number(a);
    b = Number(b);

    if (a > b)
        console.log("A");
    else if (a < b)
        console.log("B");
    else
        console.log("same");
    process.exit();
});
