//1377 => 틀림
const filePath = `linux` === process.platform ? `dev/stdin` : 'input.txt';
const [N, ...Origin] = require('fs').readFileSync(filePath).toString().trim().split(`\n`).map(Number);

const A = [...Origin].sort((a,b) => a - b);
let idxDiffer = 0, max = 0;

for(let curIdx = 0; curIdx < N; curIdx++) {
    if (max < Origin.indexOf(A[curIdx]) - curIdx) {
        max = idxDiffer;
    }
}

console.log(max + 1)