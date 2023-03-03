//2750
const filePath = `linux` === process.platform ? `dev/stdin` : 'input.txt';
const [N, ...A] = require('fs').readFileSync(filePath).toString().trim().split(`\n`).map(Number);

for(let i = 0; i < N - 1; i++) {
    for(let j = 0; j < N - 1 - i; j++) {
        if(A[j] > A[j+1]) {
          let swap = A[j];
          A[j] = A[j+1];
          A[j+1] = swap;
        }

        console.log(A)
    }
}

console.log(A.join('\n'))