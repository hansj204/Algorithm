//2752
const filePath = `linux` === process.platform ? `dev/stdin` : 'input.txt';
const numbers = require('fs').readFileSync(filePath).toString().trim().split(` `).map(Number);

for(let i = 0; i < numbers.length - 1; i++) {
    for(let j = 0; j < numbers.length - 1 - i; j++) {
        if(numbers[j] > numbers[j+1]) {
            let swap = numbers[j]
            numbers[j] = numbers[j+1]
            numbers[j+1] = swap;
        }
    }   
}

console.log(numbers.join(` `))