//1427
const filePath = `linux` === process.platform ? `dev/stdin` : 'input.txt';
const numbers = require('fs').readFileSync(filePath).toString().trim().split(``).map(Number);

let max;

for(let i = 0; i < numbers.length; i++) {

    max = Math.max(...numbers.slice(i));

    if(numbers[i] === max) continue;

    let swap = max;
    numbers[numbers.lastIndexOf(max)] = numbers[i];
    numbers[i] = swap;
}

console.log(numbers.join(``))