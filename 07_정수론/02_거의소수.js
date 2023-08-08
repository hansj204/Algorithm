// https://www.acmicpc.net/problem/1456
const filePath = `linux` === process.platform ? `dev/stdin` : 'input.txt';
const [A, B] = require('fs').readFileSync(filePath).toString().trim().split(` `).map(Number);

let count = 0;

for(let i = 2; i <= Math.sqrt(B); i++) {

    if(!isPrime(i)) continue;

    for(let j = i * i; j <= B; j *= i) {
        count++;
    }
}

function isPrime(N) {
  for (let i = 2; i <= Math.sqrt(N); i++) {
    if (N % i === 0) return false;
  }

  return true;
}