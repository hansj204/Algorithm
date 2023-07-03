// https://www.acmicpc.net/problem/2178
const filePath = `linux` === process.platform ? `dev/stdin` : 'input.txt';
const lines = require('fs').readFileSync(filePath).toString().trim().split(`\n`);

const [ [N, M], ...numbers ] = lines.map(line => line.split(` `).map(Number));
const visited = Array.from(Array(M), () => Array(M).fill(false));
const maze = numbers.map(line => String(line).split(``).map(Number));
const dx = [-1, 1, 0, 0]; //x방향배열-상하
const dy = [0, 0, -1, 1]; //y방향배열-좌우

bfs(0, 0);

console.log(maze[N - 1][M - 1]);

function bfs(x, y) {
    const queue = [[x, y]];
    
    visited[x][y] = true;

    while(queue.length != 0) {
        const cell = queue.pop();

        for(let k = 0; k < 4; k++) {
            const x = cell[0] + dx[k];
            const y = cell[1] + dy[k];

            if(x < 0 || x >= N || y < 0 || y >= M) continue;

            if(maze[x][y] === 0 || visited[x][y]) continue;

            visited[x][y] = true;

            maze[x][y] = maze[cell[0]][cell[1]] + 1;

            queue.push([x, y]);
        }
    }
}