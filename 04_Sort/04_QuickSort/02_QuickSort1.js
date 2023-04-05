//24090
const filePath = `linux` === process.platform ? `dev/stdin` : 'input.txt';
const lines = require('fs').readFileSync(filePath).toString().trim().split(`\n`);

const [N, K] = lines[0].split(` `).map(Number);
const numbers = lines[1].split(` `).map(Number);

if(N !== numbers.length) return;

function quickSort(array, left, right) {
  if (left >= right) return;

  const pivot = partition(array, left, right);
  quickSort(array, left, pivot - 1);
  quickSort(array, pivot + 1, right);
}

function swapElements(myList, index1, index2) {
  const temp = myList[index1];
  myList[index1] = myList[index2];
  myList[index2] = temp;
}

const temp_list = [];

function printFunction(tpl) {
  if (tpl[0] >= tpl[1]) {
    console.log(`${tpl[1]} ${tpl[0]}`);
  } else {
    console.log(`${tpl[0]} ${tpl[1]}`);
  }
}

function partition(list, p, r) {
  const pivot = list[r];
  let i = p - 1;
  
  for (let j = p; j < r; j++) {
    if (list[j] <= pivot) {
      i++;
      swapElements(list, i, j);
      temp_list.push([list[i], list[j]]);
    } else {
      temp_list.push(-1);
    }
  }

  if (i+1 !== r) {
    swapElements(list, i+1, r);
    temp_list.push([list[i+1], list[r]]);
  }

  return i+1;
}

if (N < K) {
  console.log(-1);
} else {
  quickSort(numbers, 0, numbers.length - 1);
  printFunction(temp_list[K-1]);
}