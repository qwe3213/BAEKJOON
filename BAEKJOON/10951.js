let fs = require('fs');
let input = fs.readFileSync('inp.txt').toString()
//let input = fs.readFileSync('/dev/stdin').toString()
    .split('\n').map(e => e.trim()).join(' ').split(' ');
let num = input.map(e => Number(e));
for (let i = 0; i<input.length-1 ; i=i+2) {

    const A = num[i];
    const B = num[i+1];
   
    console.log(A + B);
}