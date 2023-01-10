// 10986
const lines = require('fs').readFileSync(`/dev/stdin`).toString().trim().split(`\n`);

const [N, M] = lines[0].trim().split(` `).map(Number);
let answer = 0;

const numArr = lines[1].trim().split(` `).map(Number);
const sumArr = Array.from(Array(N).fill(0));
const mod = Array.from(Array(M).fill(0));

for (let idx = 0; idx < N; idx++) {
    sumArr[idx] = 0 === idx ? numArr[idx] : sumArr[idx - 1] + numArr[idx];

    const rest = sumArr[idx] % M;
    mod[rest]++;

    if (0 === rest) answer++;
}

for (let idx = 0; idx < M; idx++) {
    answer += (mod[idx] * (mod[idx] - 1)) / 2;
}

console.log(answer)