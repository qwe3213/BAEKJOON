const fs = require("fs");
const input = fs.readFileSync('inp.txt').toString().trim().split(" ").map((num) => Number(num));
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let startNum = input[0]
let endNum = input[1]
let arr= []

  outer:for(let i= startNum; i<=endNum; i++){  
    if(i===1){
        continue;
    } 
    inner: for(let j=2; j*j<=i; j++){
            if(i % j===0){
                continue outer;
                 }console.log(i);
            }
            arr.push(i)
        }if(arr.length!==0){
            for(let i=0; i<arr.length; i++){
               console.log(arr[i])
            }
        } 