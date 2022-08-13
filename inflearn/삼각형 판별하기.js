let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
 let input = fs.readFileSync ('inp.txt').toString().split(' ').map(Number);
let answers = 0
let answer= "Yes";
if(input[0]>input[1]){
    answers=input[0]
}else{
    answers=input[1]
}
if(answers>input[2]){
    answers
}else{
    answers=input[2]
}



if((input[0]+input[1]+input[2])-answers>answers){
    answer
}else{
    answer= "NO"
}console.log(answer);
