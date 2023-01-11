// 11720
const lines = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
const numArr = lines[1].split('');
let answer = 0;

if (Number(lines[0]) !== numArr.length) return;

for (const num of numArr) {
    answer += Number(num);
}

// numArr.reduce(function(acc, a) { return acc + (+a); }, 0))

console.log(answer)

