//https://www.acmicpc.net/problem/22968
const filePath = `linux` === process.platform ? `dev/stdin` : 'input.txt';
const [N, ...nodeCnt] = require('fs').readFileSync(filePath).toString().trim().split(`\n`).map(Number);

const nodeCntList = nodeCnt.map((v) => Number(v));

for (const node of nodeCntList) {
  let graph = [0, 1];
  let depth = 0;

  while(true) {
    if(node <= 1) break;
    else {
      let num = graph[depth + 1] + graph[depth] + 1;

      if (num > node) break;
      
      graph.push(num);

      if (graph[depth + 2] >= node) break;
      
      depth++;
    }
  }
  console.log(graph.length - 1);
}
