//11399
const filePath = `linux` === process.platform ? `dev/stdin` : 'input.txt';
const [N, numbers] = require('fs').readFileSync(filePath).toString().trim().split(`\n`);

const numArr = numbers.split(` `).map(Number).sort((a,b) => a - b);
const sumArr = Array.from(Array(numArr.length).fill(0));

sumArr[0] = numArr[0];

for (let idx = 1; idx < N; idx++) {
    sumArr[idx] = sumArr[idx - 1] + numArr[idx];
}

console.log(sumArr.reduce((a,b) => a + b))