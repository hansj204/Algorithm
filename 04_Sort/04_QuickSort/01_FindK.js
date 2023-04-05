//11004
const filePath = `linux` === process.platform ? `dev/stdin` : 'input.txt';
const lines = require('fs').readFileSync(filePath).toString().trim().split(`\n`);

const [N, K] = lines[0].split(` `).map(Number);
const numbers = lines[1].split(` `).map(Number);

if(N !== numbers.length) return;

function quickSort (array, left = 0, right = array.length - 1) {
    if (left >= right) return;
   
    const mid = Math.floor((left + right) / 2);
    const pivot = array[mid];
    const partition = divide(array, left, right, pivot);

    quickSort(array, left, partition - 1);
    quickSort(array, partition, right);
   
    function divide (array, left, right, pivot) {
      while (left <= right) {
        while (array[left] < pivot) left++;
       
        while (array[right] > pivot) right--;
        
        if (left <= right) {
          let swap = array[left];
          array[left] = array[right];
          array[right] = swap;
          left++;
          right--;
        }
      }
      return left;
    }
   
    return array;
}

quickSort(numbers);

console.log(numbers[K - 1])