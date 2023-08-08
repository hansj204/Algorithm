// https://www.acmicpc.net/problem/1929
const filePath = `linux` === process.platform ? `dev/stdin` : 'input.txt';
const [M, N] = require('fs').readFileSync(filePath).toString().trim().split(` `).map(Number);

const arr = [];

for(let idx = M; idx <= N; idx++) {
    arr[idx] = idx;
}

for(let i = 2; i <= Math.sqrt(N); i++) {
    
    if(0 === arr[i]) continue;

    for(let j = i + i; j <= N; j += i) {
        arr[j] = 0;
    }
}

console.log(arr.filter(num => 0 != num).join(`\n`))