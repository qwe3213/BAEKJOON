let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
 let input = fs.readFileSync ('inp.txt').toString().split(' ').map(Number);
let answer =0

 if(input[0]>input[1]){
    answer=input[1]
   
 }else{
   answer=input[0]
 } 
  if(answer>input[2]){
    answer=input[2]
  }else{
    answer
  }
  console.log(answer);