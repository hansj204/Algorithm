// 24054
const filePath = `linux` === process.platform ? `dev/stdin` : 'input.txt';
const lines = require('fs').readFileSync(filePath).toString().trim().split(`\n`);

const [N, K] = lines[0].split(` `).map(Number);
let numbers = lines[1].split(` `).map(Number);
let insertCnt = 0;

outer: for (let i = 1; i < N; i++) {
  let target = numbers[i];
  let j = i - 1;
	
  while(j >= 0 && target < numbers[j]) {
    if(stopInsert(numbers[j])) break outer;

    numbers[j + 1] = numbers[j];
    j--;
  }

  if(stopInsert(target)) break outer;

  numbers[j + 1] = target;
}

function stopInsert(val) {
  const isContinue = insertCnt <= K;

  if(isContinue) console.log(val) 

  if(insertCnt < K)  insertCnt++; 

  return isContinue;
}

console.log(K, insertCnt)

if(K > insertCnt)   console.log(-1);