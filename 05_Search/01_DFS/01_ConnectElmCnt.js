//https://www.acmicpc.net/problem/11724
const filePath = `linux` === process.platform ? `dev/stdin` : 'input.txt';
const lines = require('fs').readFileSync(filePath).toString().trim().split(`\n`);

const numbers = lines.map(line => line.split(` `).map(Number));
const [N, M] = numbers.splice(0, 1)[0];

const arr = Array.from(Array(N + 1), () => Array());
const visited = Array(N + 1).fill(false);
let count = 0;

for(let i = 0; i < M; i++) {
    const [s, e] = numbers[i];
    
    arr[s].push(e);
    arr[e].push(s);
}

for(let i = 1; i < N + 1; i++) {
    if(visited[i]) continue;

    dfs(i);
    count++;
}

console.log(count)

function dfs(v) {
    if(visited[v]) return;

     // 현재 노드 방문 처리
    visited[v] = true;

    // 연관 노드 방문 처리
    for(const next of arr[v]) {
        if(visited[next]) continue;        
        dfs(next);
    }
}