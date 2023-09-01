// https://www.acmicpc.net/problem/1850
const filePath = `linux` === process.platform ? `dev/stdin` : 'input.txt';
const [A, B] = require('fs').readFileSync(filePath).toString().trim().split(` `);

let result = gcd(A, B);

while(result > 0) {
    process.stdout.write('1');
    result--;
}

function gcd(A, B) {
    if(A % B === 0) return B;    
    else            return gcd(B, A % B);
}