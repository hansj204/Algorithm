//17298 => 틀림
const filePath = `linux` === process.platform ? `dev/stdin` : 'input.txt';
const lines = require('fs').readFileSync(filePath).toString().trim().split(`\n`);
const N = Number(lines[0])
const A = lines[1].split(' ').map(Number), result = new Array(N).fill(-1);

for (let idx = 0; idx < A.length; idx++) {  

  const rightNumList = A.slice(idx + 1);

  if(A[idx] > Math.max(...rightNumList)) continue;

  for(const rigntNum of rightNumList) {
    if(rigntNum > A[idx]) result[idx] = rigntNum;
  }
}

console.log(result.join(' '))