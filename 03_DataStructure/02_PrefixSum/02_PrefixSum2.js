// 11660
const lines = require('fs').readFileSync(`/dev/stdin`).toString().trim().split(`\n`);
const [arrSize, questionCnt] = lines[0].trim().split(` `).map(Number);
const answer = [];

const numArr = lines.slice(1, arrSize + 1).map(line => line.split(` `).map(Number));
const questionArr = lines.slice(arrSize + 1).map(line => line.split(` `).map(Number));
const sumArr = Array.from(Array(arrSize + 1), () => new Array(arrSize + 1).fill(0));

if (arrSize !== numArr.length || questionCnt !== questionArr.length) return;

for (let i = 0; i < arrSize; i++) {
    for (let j = 0; j < arrSize; j++) {
        sumArr[i + 1][j + 1] = numArr[i][j] + sumArr[i][j + 1] + sumArr[i + 1][j] - sumArr[i][j];
    }
}

for (const question of questionArr) {
    const [x1, y1, x2, y2] = question;
    answer.push(sumArr[x2][y2] - (sumArr[x1 - 1][y2] + sumArr[x2][y1 - 1]) + sumArr[x1 - 1][y1 - 1]);
}

console.log(answer.join(`\n`))