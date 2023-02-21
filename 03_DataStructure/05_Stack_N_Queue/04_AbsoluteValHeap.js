//11286 => 틀림
const filePath = `linux` === process.platform ? `dev/stdin` : 'input.txt';
const [N , ...numbers] = require('fs').readFileSync(filePath).toString().trim().split(`\n`).map(Number);
//const queue = [];

class MinHeap {
    constructor() {
        this.heap = [ null ];
    }
    
    size() {
        return this.heap.length - 1;
    }
    
    getMin() {
        return this.heap[1] ? this.heap[1] : null;
    }
    
    swap(a, b) {
        [ this.heap[a], this.heap[b] ] = [ this.heap[b], this.heap[a] ];
    }
    
    push(value) {
        this.heap.push(value);
        let curIdx = this.heap.length - 1;
        let parIdx = (curIdx / 2) >> 0;
        
        while(curIdx > 1 && this.heap[parIdx] > this.heap[curIdx]) {
            this.swap(parIdx, curIdx)
            curIdx = parIdx;
            parIdx = (curIdx / 2) >> 0;
        }
    }
    
    pop() {
        const min = this.heap[1];	
        if(this.heap.length <= 2) this.heap = [ null ];
        else this.heap[1] = this.heap.pop();   
        
        let curIdx = 1;
        let leftIdx = curIdx * 2;
        let rightIdx = curIdx * 2 + 1; 
        
        if(!this.heap[leftIdx]) return min;
        if(!this.heap[rightIdx]) {
            if(this.heap[leftIdx] < this.heap[curIdx]) {
                this.swap(leftIdx, curIdx);
            }
            return min;
        }

        while(this.heap[leftIdx] < this.heap[curIdx] || this.heap[rightIdx] < this.heap[curIdx]) {
            const minIdx = this.heap[leftIdx] > this.heap[rightIdx] ? rightIdx : leftIdx;
            this.swap(minIdx, curIdx);
            curIdx = minIdx;
            leftIdx = curIdx * 2;
            rightIdx = curIdx * 2 + 1;
        }

        return min;
    }
}

if(N !== numbers.length) return;

const heap = new MinHeap();

for(const num of numbers) {
    if(0 !== num) {
        heap.push(num);
        //queue.push(num);
    } else {
        if(0 === heap.length) {        
            console.log(0);
        } else {
            heap.sort((a,b) => {
                const a_abs = Math.abs(a)
                const b_abs = Math.abs(b)
                if(a_abs === b_abs) return a > b ?  -1 : 1
                else return b_abs - a_abs; 
            })
    
            console.log(heap.pop())
            //console.log(queue.pop())
        }
    }
}