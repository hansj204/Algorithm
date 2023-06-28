// https://www.acmicpc.net/problem/24480
const filePath = `linux` === process.platform ? `dev/stdin` : 'input.txt';
const lines = require('fs').readFileSync(filePath).toString().trim().split(`\n`);

const [ [N, M, V], ...numbers ] = lines.map(line => line.split(` `).map(Number));

let arr = Array.from(Array(N + 1), () => Array());
const visited = Array(N + 1).fill(0);
let count = 1;

for(let i = 0; i < M; i++) {
    const [s, e] = numbers[i];
    
    arr[s].push(e);
    arr[e].push(s);
}

arr = arr.map(a => a.sort((a, b) => b - a));

for(let i = V; i < N + 1; i++) {
    if(visited[i]) continue;
    dfs(V);
}

console.log(visited.slice(1).join(`\n`));

function dfs(v) {
    if(visited[v]) return;

    // 현재 노드 방문 처리
    visited[v] = count++;

    // 연관 노드 방문 처리
    for(const next of arr[v]) {
        if(visited[next]) continue;        
        dfs(next);
    }
}