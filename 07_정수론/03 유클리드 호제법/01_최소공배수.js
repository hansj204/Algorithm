// https://www.acmicpc.net/problem/1934
const filePath = `linux` === process.platform ? `dev/stdin` : 'input.txt';
const [T, ...lines] = require('fs').readFileSync(filePath).toString().trim().split(`\r\n`);

const numberList = lines.map(line => line.split(` `).map(Number).sort((a, b)=> b - a));

for(const numbers of numberList) {
    const [A, B] = numbers;
    console.log(A * B / gcd(A, B))
}

function gcd(A, B) {
    if(A % B === 0) return B;    
    else            return gcd(B, A % B);
}