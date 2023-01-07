// 1940 => 틀림
const [N, M, ingredient] = require('fs').readFileSync('/dev/stdin').toString().trim().split(`\n`);
const ingredients = ingredient.split(` `).map(Number).sort();

if(Number(N) !== ingredients.length) return;

let count = 0;
let startIdx = 0, endIdx = Number(N) - 1;

do {
    const sum = ingredients[startIdx] + ingredients[endIdx];
   if(Number(M) > sum) {
        startIdx++;
   } else if(Number(M) < sum) {
        endIdx--;  
    } else {
        count++;
        startIdx++;
        endIdx--;       
   }
} while(startIdx < endIdx);

console.log(count);