// 24054
const filePath = `linux` === process.platform ? `dev/stdin` : 'input.txt';
const lines = require('fs').readFileSync(filePath).toString().trim().split(`\n`);
const [N, K] = lines[0].split(` `).map(Number);
let numbers = lines[1].split(` `).map(Number);
let insertCnt = 0, i = 1, j, target;

for (i = 1; i < N; i++) {
  target = numbers[i];

  for (j = i - 1; j >= 0 && target < numbers[j]; j--) {
    numbers[j + 1] = numbers[j];
    ++insertCnt;

    if (insertCnt === K) {
      console.log(numbers[j]);
      return;
    }
  }

  if(j === i - 1) continue;
    
  numbers[j + 1] = target;

  ++insertCnt;
  
  if (insertCnt === K) {
    console.log(target);
    return;
  }
}

if(K > insertCnt) console.log(-1);