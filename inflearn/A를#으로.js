let fs = require('fs');
//let input = fs.readFileSync('/dev/stdin').toString().split(' ');
 let input = fs.readFileSync ('inp.txt').toString().split(' ')
 let arr= []
 let A= "A"
 let answer = ""
 for(let i=0; i<input.length; i++){
    if(input[i]===A){
        input[i]="#"
        arr.push(input[i])
    }else{
        arr.push(input[i])
    }
 }
 for(let i=0; i<arr.length; i++){
    answer+=arr[i]    
 }console.log(answer);


input[0] =input[0].replace(/A/g,'#');
console.log(input[0]);