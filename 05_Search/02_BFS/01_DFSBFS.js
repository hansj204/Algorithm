// https://www.acmicpc.net/problem/1260
const filePath = `linux` === process.platform ? `dev/stdin` : 'input.txt';
const lines = require('fs').readFileSync(filePath).toString().trim().split(`\n`);

const [ [N, M, V], ...numbers ] = lines.map(line => line.split(` `).map(Number));

let arr = Array.from(Array(N + 1), () => Array());
let visited = Array(N + 1).fill(false);

for(let i = 0; i < M; i++) {
    const [s, e] = numbers[i];
    
    arr[s].push(e);
    arr[e].push(s);
}

arr = arr.map(a => a.sort((a, b) => a - b));

dfs(V);

console.log()
visited = Array(N + 1).fill(false);

bfs(V);

function dfs(v) {
    if(visited[v]) return;

    process.stdout.write(v + ` `);

    visited[v] = true;

    for(const next of arr[v]) {
        if(visited[next]) continue;
        dfs(next);
    }
}

function bfs(v) {
    const queue = [v];

    visited[v] = true;

    while(queue.length != 0) {
        const nowNode = queue.shift();

        process.stdout.write(nowNode + ` `);

        for(const next of arr[nowNode]) {
            if(visited[next]) continue;
            
            visited[next] = true;
            queue.push(next)
        }
    }
}