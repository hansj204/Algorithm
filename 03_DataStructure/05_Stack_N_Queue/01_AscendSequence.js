//1874
const filePath = `linux` === process.platform ? `dev/stdin` : 'input.txt';
const lines = require('fs').readFileSync(filePath).toString().trim().split(`\n`).map(Number);
const A = lines.slice(1), stack = [];
let number = 1, popNum = null, result = [];

for(let idx = 0; idx < lines[0]; idx++) {
    while(A[idx] >= number) {
        stack.push(number++)
        result.push('+')
    }

    popNum = stack.pop()
    result.push('-')

    if(popNum != A[idx]) {
      result = ['NO'];
      break;
    }
}

console.log(result.join('\n'))