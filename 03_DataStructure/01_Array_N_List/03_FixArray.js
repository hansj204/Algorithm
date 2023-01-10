// 1465
const lines = require('fs').readFileSync(`/dev/stdin`).toString().trim().split(`\n`);

const [N, low, high] = lines[0].split(` `).map(Number);

const A = lines[1].split(` `).map(Number);
const B = Array.from({length: N}, (v, i) => i + low)

for (const [idx, num] of B) {
    console.log(num.toString(2), A[idx].toString(2))
}