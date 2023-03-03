//23881
const filePath = `linux` === process.platform ? `dev/stdin` : 'input.txt';
const lines = require('fs').readFileSync(filePath).toString().trim().split(`\n`);

const [A, K] = lines[0].split(` `).map(Number);
const numbers = lines[1].split(` `).map(Number);
let max, maxIdx, swapCnt = 0;

if(A !== numbers.length) return;

for(let i = numbers.length - 1; i >= 0; i--) {

    max = Math.max(...numbers.slice(0, i));

    if(numbers[i] >= max) continue;

    maxIdx = numbers.lastIndexOf(max);

    let swap = numbers[maxIdx];
    numbers[maxIdx] = numbers[i];
    numbers[i] = swap;

    swapCnt++;

    if(swapCnt === K) {
        console.log(numbers[maxIdx], numbers[i]);
        break;
    }
}

if(K > swapCnt) console.log(-1)