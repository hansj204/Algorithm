//10773(LIFO)
const filePath = `linux` === process.platform ? `dev/stdin` : 'input.txt';
const [N , ...numbers] = require('fs').readFileSync(filePath).toString().trim().split(`\n`).map(Number);
const result = [];

for(const num of numbers) {
    if(0 === num) result.pop();
    else          result.push(num);
}

console.log(0 === result.length? 0 : result.reduce((a,b) => (a+b)))
