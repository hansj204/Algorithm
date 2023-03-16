//24054
const filePath = `linux` === process.platform ? `dev/stdin` : 'input.txt';
const lines = require('fs').readFileSync(filePath).toString().trim().split(`\n`);

const numbers = lines[1].split(` `).map(Number);

for(let idx = 0; idx < numbers.length; idx++) {
    console.log(numbers.slice(idx, idx + 2))
}


