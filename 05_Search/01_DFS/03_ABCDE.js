// https://www.acmicpc.net/problem/13023
const filePath = `linux` === process.platform ? `dev/stdin` : 'input.txt';
const lines = require('fs').readFileSync(filePath).toString().trim().split(`\n`);

const numbers = lines.map(line => line.split(` `).map(Number));
const [N, M] = numbers.splice(0, 1)[0];

const arr = Array.from(Array(N), () => Array());
const visited = Array(N).fill(false);
let isArrive = false;

for(let i = 0; i < M; i++) {
    const [s, e] = numbers[i];
    
    arr[s].push(e);
    arr[e].push(s);
}

for(let i = 0; i < N; i++) {
    dfs(i, 1);    
    if(isArrive) break;
}

console.log(isArrive? 1 : 0);

function dfs(v, depth) {
    if(depth === 5 || isArrive) {
        isArrive = true;
        return;
    }

    // 현재 노드 방문 처리
    visited[v] = true;

    // 연관 노드 방문 처리
    for(const next of arr[v]) {
        if(visited[next]) continue;
        dfs(next, depth + 1);
    }
    
    visited[v] = false;
}