//https://www.acmicpc.net/problem/1300
const filePath = `linux` === process.platform ? `dev/stdin` : 'input.txt';
const [N, K] = require('fs').readFileSync(filePath).toString().trim().split(`\n`).map(Number);

let start = 1, end = K;
let result = 0;

while(start <= end) {
    let mid = Math.floor((start + end) / 2);
    console.log(mid)
    let count = 0;

    for(let i = 1; i <= N; i++) {
        count += Math.min(Math.floor(mid / i), N);
    }

    if(count < K) {
        start = mid + 1; 
    } else {
        result = mid;
        end = mid - 1;
    }
}

console.log(result);
