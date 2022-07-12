let input = require('fs').readFileSync('inp.txt').toString().split('\n');

let a=input[0].split(' ').map(x => Number(x));

let count=0;

for(let i=0; i<=a; i++){
 if(0<i&&i<100){
    count++
    console.log(count);
 }
 else if(99<i&&(i%10)-(Math.floor((i%100)/10))===(Math.floor((i%100)/10))-(Math.floor(i/100)) ) {
    count++
 }

  } console.log(count);