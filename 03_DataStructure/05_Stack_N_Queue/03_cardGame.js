//2164
const filePath = `linux` === process.platform ? `dev/stdin` : 'input.txt';
const number = require('fs').readFileSync(filePath).toString().trim();

class Node {
    constructor(data) {
        this.prev = null;
        this.data = data;
        this.next = null;      
    }
}

class LinkedList {
    constructor() {
      this.size = 0;
      this.head = null;
      this.tail = null;
    }
  
    add(data) {
        const newNode = new Node(data);
  
        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }
  
        this.tail = newNode;
        this.size++;
    
        return newNode;
    }
  
    getHead() {
      return this.head.data;
    }
  
    removeHead() {
      this.head = this.head.next;
      this.head.prev = null;
      this.size--;
    }
  
    getSize() {
      return this.size;
    }
} 

const linkedList = new LinkedList();

for(let idx = 1; idx <= Number(number); idx++) {
    linkedList.add(idx);
    // queue.push(idx)
}
while(1 < linkedList.getSize()) { // 1 < queue.length
    linkedList.removeHead();
    linkedList.add(linkedList.getHead());
    linkedList.removeHead();
    // queue.shift()
    // queue.push(queue.pop());
}

console.log(linkedList.getHead())
// console.log(queue.pop())