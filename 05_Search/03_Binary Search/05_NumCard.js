//https://www.acmicpc.net/problem/10816
const filePath = `linux` === process.platform ? `dev/stdin` : 'input.txt';
const lines = require('fs').readFileSync(filePath).toString().trim().split(`\n`);
const [N, N_cards, M, M_cards] = lines.map(line => line.split(` `).map(Number));
let answer = [], card_arr = {};

N_cards.sort((a,b)=> a - b);

N_cards.forEach(card => {
    if(card_arr[card]) {
        card_arr[card] = card_arr[card]+ 1;
    } else {
        card_arr[card] = 1;
    }
});

console.log(card_arr)

for(let i = 0; i < M; i++) {
    const num = card_arr[M_cards[i]]
    answer.push(num? num : 0)
}

console.log(answer.join(" "))