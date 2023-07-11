//https://www.acmicpc.net/problem/1920
const filePath = `linux` === process.platform ? `dev/stdin` : 'input.txt';
const lines = require('fs').readFileSync(filePath).toString().trim().split(`\n`);
const [N, findNumbers, M, numbers] = lines.map(line => line.split(` `).map(Number));

findNumbers.sort((a, b) => a - b);

const binarySearch = (list, target, left = 0, right = N - 1, mid) => {
    mid = Math.floor((left + right) / 2);

    if(left > right) {
        return findNumbers[mid] === target ? 1 : 0;
    } 
    
    if(list[mid] > target) {
        right = mid - 1;
    } else {
        left = mid + 1;
    }

    return binarySearch(list, target, left, right, mid);
}

console.log(numbers.map(num => binarySearch(findNumbers, num)).join(`\n`));