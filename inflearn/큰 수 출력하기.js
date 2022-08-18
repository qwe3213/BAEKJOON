let fs = require("fs");
const { IncomingMessage } = require("http");
let input = fs.readFileSync("inp.txt").toString().split("\n");

let n = Number(input[0]);
let numbers = input[1].split(" ").map((element) => Number(element)); //배열안에 입력값하나씩 하나씩넣음
let arr =[]
let sum = 0;
for(let i=0; i<n; i++){
    if(numbers[i]>sum){
       sum=+numbers[i]
       arr.push(numbers[i])
    }else if(numbers[i]<sum){
        sum=+numbers[i]
    }
}
console.log(arr);

// let arr =[numbers[0]];

// for(let i =1; i<n; i++){
//     if(numbers[i]>numbers[i-1]){
//         arr.push(numbers[i])
        
//     }
// }console.log(arr);