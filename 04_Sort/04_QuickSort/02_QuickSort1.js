const filePath = `linux` === process.platform ? `dev/stdin` : 'input.txt';
const [NK, ...nums] = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [N, K] = NK.trim().split(' ').map(Number);
const numbers = nums[0].trim().split(' ').map(Number);
let cnt = 0;

quickSort(numbers);

if (K > cnt) console.log(-1);

function quickSort(numbers, start = 0, end = N - 1) {
  if (start >= end) return;

  const pivot = partition(numbers, start, end);
  quickSort(numbers, start, pivot - 1);
  quickSort(numbers, pivot + 1, end);
}

function partition(numbers, start, end) {
  let pivot = numbers[end];
  let i = start - 1;

  for (let j = start; j < end; j++) {
    if (numbers[j] <= pivot) {
      i++;
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
      cnt++;

      console.log(i, j)

      if (cnt === K) {
        console.log(`${numbers[i]} ${numbers[j]}`);
        process.exit(0);
      }
    }
  }

  if (i + 1 !== end) {
    [numbers[i + 1], numbers[end]] = [numbers[end], numbers[i + 1]];

    cnt++;
    if (cnt === K) {
      console.log(`${numbers[i + 1]} ${numbers[end]}`); 
      process.exit(0);
    }
  }

  return i + 1;
}

