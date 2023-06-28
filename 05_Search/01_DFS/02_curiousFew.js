// https://www.acmicpc.net/problem/2023 => 메모리초과
const filePath = `linux` === process.platform ? `dev/stdin` : 'input.txt';
const N = Number(require('fs').readFileSync(filePath).toString().trim());

for(let idx of [2, 3, 5, 7]) {
    dfs(idx, 1);
}

function dfs(v, digit) {
    if(digit === N) {
        if(isPrime(v)) console.log(v);

        return;
    }

    for(let i = 1; i < 10; i++) {
        if(i % 2 === 0) continue;

        // 2 => 20 + 3 => 23
        // 자리수 올림 & 홀수 붙이기 => 소수 판별
        if(isPrime(v * 10 + i)) dfs(v * 10 + i, digit + 1);
    }
}

function isPrime(num) {
    if(num === 2) return true;

    for(let i = 2; i<num; i++){
        if(num % i === 0){
        return false;
        }
    }
    return true;
}