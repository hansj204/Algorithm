// 2096
const lines = require('fs').readFileSync(`testData.txt`).toString().trim().split(`\n`);
const N = Number(lines[0]);
const scoreBoard = lines.splice(1);
const sortBoard = Array.from(Array(N), () => new Array(3).fill(0));

scoreBoard.forEach((boardLine, i) => {
    boardLine = boardLine.split(` `).map(Number);
    const sortBoardLine = [...boardLine].sort((a, b) => b - a);

    sortBoardLine.forEach((num, j) => {
        sortBoard[i][j] = boardLine.indexOf(num);
    })
})

let maxX = 1, maxScore = 0;
let minX = 1, minScore = 0;

sortBoard.forEach((row, i) => {
    if(0 === maxX) {
        maxX = 1 !== row.indexOf(0) ? row.indexOf(0) : row.indexOf(1);
        minX = 1 !== row.indexOf(2) ? row.indexOf(2) : row.indexOf(1);
    } else if(2 === i) {
        maxX = 0 !== row.indexOf(0) ? row.indexOf(0) : row.indexOf(1);
        minX = 0 !== row.indexOf(2) ? row.indexOf(2) : row.indexOf(1);
    } else {
        maxX = row.indexOf(0)
        minX = row.indexOf(2)
    }

    console.log(minX)

    maxScore += scoreBoard[i].split(` `).map(Number)[maxX];
    minScore += scoreBoard[i].split(` `).map(Number)[minX];
})

console.log(maxScore, minScore)