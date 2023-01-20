// 1253 => 틀림
const [N, numbers] = require('fs').readFileSync(`/dev/stdin`).toString().trim().split(`\n`);
const numberList = numbers.split(` `).map(Number).sort((a,b) => a - b);

if(Number(N) !== numberList.length) return;

let count = 0;

for(const [idx, findNum] of numberList.entries()) {
     let startIdx = 0, endIdx = idx - 1;

     while(startIdx < endIdx) {
          if(startIdx === idx) {
               startIdx++;
          } else if(endIdx === idx) {
               endIdx--;
          } else {
               const sum = numberList[startIdx] + numberList[endIdx];

               if(findNum > sum) {
                    endIdx--;
               } else if(findNum < sum) {
                    startIdx++;
               } else { 
                    count++; 
                    break; 
               }
          } 
     }
}

console.log(count);