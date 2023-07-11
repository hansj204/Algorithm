//https://www.acmicpc.net/problem/2343
const filePath = `linux` === process.platform ? `dev/stdin` : 'input.txt';
const [cnt, ...[length]] = require('fs').readFileSync(filePath).toString().trim().split(`\n`);

const [N, M] = cnt.split(` `).map(Number);
const arr = length.split(` `).map(Number);
let ans = Infinity;

let left = Math.max(...arr);
let right = arr.reduce((acc, cur) => acc + cur, 0);

while (left <= right) {
    let mid = parseInt((left + right) / 2);
    console.log(left, right)
    let cnt = 1;
    let sum = 0;

    arr.forEach((num) => {
        if (num > mid) {
            cnt = Infinity;
            return;
          }
          if (sum + num <= mid) {
            sum += num;
          } else {
            cnt++;
            sum = num;
          }
    });

    if (cnt <= M) {
        right = mid - 1;
        ans = Math.min(ans, mid);
    } else {
        left = mid + 1;
    }
}

console.log(ans);