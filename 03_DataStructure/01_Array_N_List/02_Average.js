// 1546
const [n, input] = require('fs').readFileSync(`/dev/stdin`).toString().trim().split(`\n`);
const inputArr = input.trim().split(` `);

const subjectCnt = Number(n);
const scoreArr = inputArr.map(score => Number(score));
const M = Math.max(...scoreArr);
let SUM = 0;

for (let idx = 0; idx < scoreArr.length; idx++) {
    SUM += scoreArr[idx] / M * 100;
}

console.log(SUM / subjectCnt)