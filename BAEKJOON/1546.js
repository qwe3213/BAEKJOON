let input = require('fs').readFileSync('inp.txt').toString().split('\n');

let a=input[0].split(' ').map(x => Number(x));
let b=input[1].split(' ').map(x => Number(x));

let sum =0;
const arr =new Array();
for(let i=0; i<a; i++){
    arr.push(b[i]);
    sum+=b[i]
    var m=Math.max(...arr)
}
console.log(sum/a/m*100);
