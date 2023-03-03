//1083
const filePath = `linux` === process.platform ? `dev/stdin` : 'input.txt';
const [N, numList, Cnt] = require('fs').readFileSync(filePath).toString().trim().split(`\n`);
const numbers = numList.split(` `).map(Number), S = Number(Cnt);
let swapCnt = 0, range, max, maxIdx;

if(Number(N) !== numbers.length) return;

for(let i = 0; i < N - 1; i++) {

    if(swapCnt === S) break;

    range = 1;
    max = Math.max(...numbers.slice(i, i + S + range));
    maxIdx = numbers.indexOf(max);

    while(S < maxIdx - i + swapCnt) {
        range--;
        max = Math.max(...numbers.slice(i, i + S + range));
        maxIdx = numbers.indexOf(max);
    }

    if(numbers[i] >= max) continue;

    const swap = numbers[maxIdx];
    numbers.splice(maxIdx, 1)
    numbers.splice(i, 0, swap)

    swapCnt += maxIdx - i;
}

console.log(numbers.join(` `))
