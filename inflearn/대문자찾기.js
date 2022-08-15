let fs = require('fs');
//let input = fs.readFileSync('/dev/stdin').toString().split(' ');
 //let input = fs.readFileSync ('inp.txt').toString().split('')
 let count =0;
console.log(input);
for(let i=0; i<input.length; i++){
    if(input[i]===input[i].toUpperCase()){
        count++
    }
}
console.log(count);
//기본 방식


let fs = require('fs');
//let input = fs.readFileSync('/dev/stdin').toString().split(' ');
 let input = fs.readFileSync ('inp.txt').toString().split('')

 let answer = 0;
 for(let i=0; i<input.length; i++){
    let num = input[i].charCodeAt();
    if( num >= 65 && num <=90){
        answer++
    }
 }console.log(answer);

 //아스키코드 방식
