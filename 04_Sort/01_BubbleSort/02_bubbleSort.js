//1377 => 틀림
const filePath = `linux` === process.platform ? `dev/stdin` : 'input.txt';
const [N, ...origin] = require('fs').readFileSync(filePath).toString().trim().split(`\n`).map(Number);
const A = [...origin].sort((a,b) => a - b);
const numObj = {};
let idxDiffer = 0, max = 0;

for(let idx = 0; idx < origin.length; idx++) {
    numObj[origin[idx]] = idx;
}

for(let curIdx = 0; curIdx < N; curIdx++) {
    idxDiffer = numObj[A[curIdx]] - curIdx;

    if (max < idxDiffer) max = idxDiffer;
}

console.log(max + 1)