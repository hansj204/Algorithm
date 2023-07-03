// https://www.acmicpc.net/problem/24444
const filePath = `linux` === process.platform ? `dev/stdin` : 'input.txt';
const lines = require('fs').readFileSync(filePath).toString().trim().split(`\n`);

const [ [N, M, V], ...numbers ] = lines.map(line => line.split(` `).map(Number));

let arr = Array.from(Array(N + 1), () => Array());
let visited = Array(N + 1).fill(0);
let count = 1;

for(let i = 0; i < M; i++) {
    const [s, e] = numbers[i];
    
    arr[s].push(e);
    arr[e].push(s);
}

arr = arr.map(a => a.sort((a, b) => a - b));

bfs(V);

console.log(visited.slice(1).join(`\n`));

function bfs(v) {
    const queue = [v];

    visited[v] = count++;

    while(queue.length != 0) {
        const nowNode = queue.shift();

        for(const next of arr[nowNode]) {
            if(visited[next]) continue;
            
            visited[next] = count++;
            queue.push(next)
        }
    }
}