//23882
const filePath = `linux` === process.platform ? `dev/stdin` : 'input.txt';
const lines = require('fs').readFileSync(filePath).toString().trim().split(`\n`);

const [A, K] = lines[0].split(` `).map(Number);
const numbers = lines[1].split(` `).map(Number);
let max, swapCnt = 0;

if(A !== numbers.length) return;

for(let i = numbers.length - 1; i >= 0; i--) {

    max = Math.max(...numbers.slice(0, i));

    if(numbers[i] >= max) continue;

    let swap = max;
    numbers[numbers.lastIndexOf(max)] = numbers[i];
    numbers[i] = swap;

    swapCnt++;

    if(swapCnt === K) break;
}

console.log(K > swapCnt ? -1 : numbers.join(` `))
