// 9012
const filePath = `linux` === process.platform ? `dev/stdin` : 'input.txt';
const lines = require('fs').readFileSync(filePath).toString().trim().split(`\n`);

let stack = [];
const result = [];

for(const line of lines.slice(1)) {
    for(const vps of line.trim().split('')) {
    
        if('(' === vps) {
            stack.push(vps);
        } else if(')' === vps) {

            if('(' === stack[stack.length - 1]) stack.pop();
            else stack.push(vps);
        }
        
    }

    result.push(0 === stack.length? 'YES' : 'NO')
    stack = [];
}

console.log(result.join('\n'))