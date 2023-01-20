// 11003 => 메모리초과
const lines = require('fs').readFileSync(`/dev/stdin`).toString().trim().split(`\n`);
const [N, L] = lines[0].split(` `).map(Number);
const A = lines[1].split(` `).map(Number).filter(num => num / L);
const answer = [];
let i, j = 0;

for(let idx = 0; idx < N; idx++) {
    i = idx - L < -1 ? 0 : idx - L + 1;
    j = idx + 1;

    answer.push(Math.min(...A.slice(i, j)));
}

console.log(answer.join(` `))