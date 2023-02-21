//10828(LIFO)
/*  push X: 정수 X를 스택에 넣는 연산이다.
    pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
    size: 스택에 들어있는 정수의 개수를 출력한다.
   empty: 스택이 비어있으면 1, 아니면 0을 출력한다.
   top: 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다. */
const filePath = `linux` === process.platform ? `dev/stdin` : 'input.txt';
const lines = require('fs').readFileSync(filePath).toString().trim().split(`\n`);

const stack = [], result = [];

for(const commandLine of lines.slice(1)) {
    const [command, data] = commandLine.trim().split(' ');

    switch(command) {
        case 'push': stack.push(data); break;
        case 'pop': result.push(stack.pop() || -1); break;
        case 'size': result.push(stack.length); break;
        case 'empty': result.push(0 === stack.length? 1 : 0); break;
        case 'top': result.push(stack[stack.length - 1] || -1); break;
    }
}

console.log(result.join('\n'))