// 10986
const lines = require('fs').readFileSync(`/dev/stdin`).toString().trim().split(`\n`);

const [N, M] = lines[0].trim().split(` `).map(Number);
let answer = 0;

const numArr = lines[1].trim().split(` `).map(Number);
let sumArr = Array.from(Array(N).fill(0));

for(let idx = 0; idx < N; idx++) {
    sumArr[idx+1] = sumArr[idx] + numArr[idx];
}

answer = sumArr.map(sum => sum % M).filter(rest => 0 === rest);

console.log(answer)