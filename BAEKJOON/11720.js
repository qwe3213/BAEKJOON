let input = require('fs').readFileSync('inp.txt').toString().split('\n');

let a=input[0].split(' ').map(x => Number(x));
let num=input[1].split("")
let sum=0;

for(let i=0; i<a; i++){
   
    sum=sum+Number(num[i]);
}
console.log(sum);