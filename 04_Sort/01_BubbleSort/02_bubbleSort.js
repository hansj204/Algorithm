//1377
const filePath = `linux` === process.platform ? `dev/stdin` : 'input.txt';
const [N, ...origin] = require('fs').readFileSync(filePath).toString().trim().split(`\n`).map(Number);
let numObj = [], idxDiffer = 0, max = 0;

for(let idx = 0; idx < N; idx++) {
    numObj[idx] = {
        idx: idx,
        value: origin[idx]
    };
}

numObj.sort((a, b) => {
    return a.value < b.value ? -1 : a.value > b.value ? 1 : 0;
});

for(let curIdx = 0; curIdx < N; curIdx++) {
    idxDiffer = numObj[curIdx].idx - curIdx;
    if (max < idxDiffer) max = idxDiffer;
}

console.log(max + 1)