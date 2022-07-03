let input = require('fs').readFileSync('inp.txt').toString().split('\n');

let InNum=input[0].split(' ').map(x => Number(x));
let InNumm=input[1].split(' ').map(x => Number(x));
const answer = [];


for(let i=0; i<InNum[0]; i++){
       answer.push(InNumm[i])
    
    
}
   const arr =answer;


const min = Math.min(...arr);
const max = Math.max(...arr);

console.log(min,max);

  