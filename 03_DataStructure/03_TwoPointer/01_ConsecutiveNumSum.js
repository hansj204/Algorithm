// 2018
const N = Number(require('fs').readFileSync('/dev/stdin').toString().trim().split(`\n`));
let count = 1;
let sum = 0;
let startIdx = 1, endIdx = 1;

do {
    if(sum < N) {
        sum += endIdx;
        endIdx++;
    } else {
        if(sum === N) count++;

        sum = 0;
        startIdx++;
        endIdx = startIdx;
    }    
} while(startIdx <= N / 2);

console.log(count);