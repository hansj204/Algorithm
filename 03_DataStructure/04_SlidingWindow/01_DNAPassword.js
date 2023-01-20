// 12891 => 메모리 초과
const lines = require('fs').readFileSync(`testData.txt`).toString().trim().split(`\r\n`); //dev/stdin
const [strLength, subStrLength] = lines[0].split(` `).map(Number);
const DNA = [`A`, `C`, `G`, `T`];
const includeDNACnt = lines[2].split(` `).map(Number);
const includeDNA = {};
let dnaStr= null, idx = 0, gooNum = 0;

if(strLength !== lines[1].length) return;

includeDNACnt.forEach((cnt, idx) => {
    if(0 === cnt) return;
    includeDNA[DNA[idx]] = cnt;
})

while(true) {
    dnaStr = lines[1].substring(idx, idx + subStrLength);

    if(dnaStr.length !== subStrLength) break;

    let pass = true;

    for(const letter in includeDNA) {
        if(dnaStr.split(letter).length > includeDNA[letter]) continue;
        pass = false;
        break;
    }

    idx++;

    if(!pass) continue;

    gooNum++;

}

console.log(gooNum)