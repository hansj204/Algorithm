// https://www.acmicpc.net/problem/1747
const filePath = `linux` === process.platform ? `dev/stdin` : 'input.txt';
const N = Number(require('fs').readFileSync(filePath));

let num = N;

while(true) {
    if(isPrime(num) && isPalindrome(num)) break;
    
    num++;
}

console.log(num)

function isPrime(N) {
  for (let i = 2; i <= Math.sqrt(N); i++) {
    if (N % i === 0) return false;
  }
  
  return true;
}

function isPalindrome(N) {
  const numStr = N.toString();

  let start = 0, end = numStr.length - 1;

  while(start < end) {
    if(N[start] !== N[end]) return false;

    start++;
    end--;
  }

  return true;
}