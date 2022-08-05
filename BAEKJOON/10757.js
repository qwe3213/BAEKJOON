let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
 let input = fs.readFileSync ('inp.txt').toString().split(' ');

 const a =BigInt(input[0]);
 const b =BigInt(input[1]);

 console.log((a+b).toString());