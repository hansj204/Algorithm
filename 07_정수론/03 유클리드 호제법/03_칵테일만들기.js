// https://www.acmicpc.net/problem/1033
const filePath = `linux` === process.platform ? `dev/stdin` : 'input.txt';
const [N, ...lines] = require('fs').readFileSync(filePath).toString().trim().split(`\r\n`);

const infoList = lines.map(line => line.split(` `).map(Number));
const visited = Array(Number(N)).fill(false);
const nodes = [];
let lcm = 1;
const D = [];

for(const info of infoList) {
    const [a, b, p ,q] = info;

    if (!nodes[a])  nodes[a] = [];
    if (!nodes[b])  nodes[b] = [];

    nodes[a].push({ ingre : b, p : p, q : q });
    nodes[b].push({ ingre : a, q : q, p : p})

    lcm *= (p * q) / gcd(p, q);
}

D[0] = lcm;
dfs(0);
let mgcd = D[0];

for(let i = 1; i < N; i++) {
    mgcd = gcd(mgcd, D[i]);
}

for(let i = 0; i < N; i++) {
    console.log(D[i] / mgcd + ' ')
}

function dfs(v) {
    visited[v] = true;

    for(const node of nodes[v]) {
        const next = node.ingre;

        if(visited[next]) continue;

        D[next] = D[v] * node.q / node.p;

        dfs(next);
    }
}

function gcd(A, B) {
    if(A % B === 0) return B;    
    else            return gcd(B, A % B);
}