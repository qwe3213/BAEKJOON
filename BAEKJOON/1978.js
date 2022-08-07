let fs = require('fs');
let input = fs.readFileSync('inp.txt').toString().split('\n');

let n= Number(input[0])
let numbers = input[1].split(" ").map((element) => Number(element)); //배열안에 입력값하나씩 하나씩넣어줌
let answer=0;
for(let i=0; i<n; i++){
   if(numbers[i]===1){
    continue;
   }else{
    let count =0;
     for(let j=2; j<numbers[i]; j++){
        if(numbers[i]%j===0){
            count ++
        }
     }if(count===0){
        answer++ ;
     }
  }
}console.log(answer);
