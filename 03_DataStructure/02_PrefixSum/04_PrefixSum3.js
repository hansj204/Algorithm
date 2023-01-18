// 11658
const lines = require('fs').readFileSync(`/dev/stdin`).toString().trim().split(`\n`);
const [arrSize, questionCnt] = lines[0].trim().split(` `).map(Number);
const answer = [];

const numArr = lines.slice(1, arrSize + 1).map(line => line.split(` `).map(Number));
const questionArr = lines.slice(arrSize + 1).map(line => line.split(` `).map(Number));
const sumArr = Array.from(Array(arrSize + 1), () => new Array(arrSize + 1).fill(0));

if (arrSize !== numArr.length || questionCnt !== questionArr.length) return;

changePrefixSum(0, 0);

for (const question of questionArr) {
    if (0 === question[0]) {
        const [x, y, c] = question.slice(1);
        numArr[x - 1][y - 1] = c;
        changePrefixSum(x - 1, y - 1);
    } else {
        const [x1, y1, x2, y2] = question.slice(1);
        answer.push(sumArr[x2][y2] - (sumArr[x1 - 1][y2] + sumArr[x2][y1 - 1]) + sumArr[x1 - 1][y1 - 1]);
    }
}

console.log(answer.join(`\n`))

function changePrefixSum(startI, startJ) {
    for (let i = startI; i < arrSize; i++) {
        for (let j = startJ; j < arrSize; j++) {
            sumArr[i + 1][j + 1] = numArr[i][j] + sumArr[i][j + 1] + sumArr[i + 1][j] - sumArr[i][j];
        }
    }
}