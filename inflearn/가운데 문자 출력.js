let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
 let input = fs.readFileSync ('inp.txt').toString().split('')

 let length= input.length

 if(length%2===0){
    let c =length/2
    let d = c-1
  console.log(input[c]+input[d]);
 }else{
    let e =Math.floor(length/2)
    console.log(input[e]);
 }

