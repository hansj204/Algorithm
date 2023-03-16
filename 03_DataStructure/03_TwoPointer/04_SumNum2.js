//2003 => 틀림
const lines = require('fs').readFileSync(`/dev/stdin`).toString().trim().split(`\n`);
const [N, M] = lines[0].split(` `).map(Number);
const A = [...lines[1].split(` `).map(Number)];
let startIdx = 0, endIdx = 1;
let sum = A[startIdx];
let count = 0;

if(N !== A.length) return;

while(startIdx <= endIdx && endIdx <= A.length - 1) {
    if(sum < M) {
        sum += A[endIdx];
        endIdx++;
    } else {
        if(sum === M) count++;

        sum -= A[startIdx];
        startIdx++;
    }
}

console.log(count)