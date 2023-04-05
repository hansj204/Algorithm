//11004
const filePath = `linux` === process.platform ? `dev/stdin` : 'input.txt';
const lines = require('fs').readFileSync(filePath).toString().trim().split(`\n`);

const [N, K] = lines[0].split(` `).map(Number);
const numbers = lines[1].split(` `).map(Number);

if(N !== numbers.length) return;

quickSort(numbers);

console.log(numbers[K - 1])

function quickSort (array, start = 0, end = array.length - 1) {
    if (start >= end) return;
   
    const pivot = partition(array, start, end);

    if(pivot === K - 1) return;
    else if(pivot < K - 1) quickSort(array, start, pivot - 1);
    else if(pivot < K - 1) quickSort(array, pivot + 1, end);
}

function partition (array, start, end) {
  if(start + 1 == end) {
    if(array[start] > array[end]) {
      swap(array, start, end);  
      return end;
    }    
  }

  const mid = Math.floor((start + end) / 2);
  swap(array, start, mid);

  const pivot = array[start];
  let left = start + 1, right = end;
  
  while (left <= right) {    
    while (array[right] > pivot && right > 0) right--;
    while (array[left] < pivot && left < array.length - 1) left++;

    if (left <= right) {
      swap(array, left++, right--);
    }
  }

  array[start] = array[right];
  array[right] = pivot;

  return right;
}

function swap(array, left, right) {
  [array[right], array[left]] =   [array[left], array[right]];
}