let fs = require("fs");
let input = fs.readFileSync("inp.txt").toString().split(" ")
let str = ""
let C = ""
for(let i=0; i<input.length; i++){
    str+=input[i]
}
str=str.toLocaleLowerCase().replace(/[^a-z]/g,'');
if(str.split('').reverse().join('')!==str){
    C="NO"
}else{
    C="YES"
}
console.log(C);

// replace() 함수가 중요하게 사용해짐 a-z말고는다 지워서 reverse 해서 문제풀이 회문 문자열 복습 문제