// 1253
const [N, numbers] = require('fs').readFileSync('/dev/stdin').toString().trim().split(`\n`);
const numberList = numbers.split(` `).map(Number).sort();

if(Number(N) !== numberList.length) return;

let count = 0;

for(const [idx, num] of numberList.entries()) {
     let startIdx = 0, endIdx = Number(N) - 1;

     while(startIdx < endIdx) {
          const sum = numberList[startIdx] + numberList[endIdx];
          
          if(num === sum) {
              if(idx != startIdx && idx != endIdx) {
                    count++;
                    break;
              } else if(startIdx === idx) {
                    startIdx++;
              } else if(endIdx === idx) {
                    endIdx--;
              }
          } else if(num < sum) {
               startIdx++;
          } else {
               endIdx--;
          }
     }
}

console.log(count);