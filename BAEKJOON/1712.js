let input = require('fs').readFileSync('inp.txt').toString().split(' ');

 

 const A=input[0] *1;
 const B=input[1] *1;
 const C=input[2] *1;

 const margin =C-B;
 const count=Math.floor(A/margin)+1
 console.log(C<=B ? -1 : count);