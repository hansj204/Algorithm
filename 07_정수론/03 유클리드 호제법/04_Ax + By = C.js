// https://www.acmicpc.net/problem/1850
const filePath = `linux` === process.platform ? `dev/stdin` : 'input.txt';
const [a, b, c] = require('fs').readFileSync(filePath).toString().trim().split(` `).map(Number);

const gcd = gcdFunc(a, b);

if(0 === c % gcd) {
    const mok = parseInt(c / gcd);
    const [x, y] = execute(a, b);

    console.log(x * mok + ' ' + y * mok);
} else {
    console.log(-1)
}

function execute(A, B) {
    const rtnArr = [];

    if(B == 0) {
        rtnArr.push(1);
        rtnArr.push(0);
    } else {
        const q = parseInt(A / B);
        const [x, y] = execute(B, A % B);

        rtnArr.push(y);
        rtnArr.push(x - y * q);
    }

    return rtnArr;
}

function gcdFunc(A, B) {
    if(A % B === 0) return B;    
    else            return gcdFunc(B, A % B);
}