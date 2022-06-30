
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let InNum=input[0].split(' ').map(x => Number(x));
let InNumm=input[1].split(' ').map(x => Number(x));

const answer= [];

for(let i=0; i <=InNum[0]; i++){
    if(InNum[1]>InNumm[i]) {
        answer.push(InNumm[i]);
    }
}

console.log(answer.join(' '));