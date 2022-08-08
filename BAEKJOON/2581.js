
const fs = require("fs");
const input = fs.readFileSync("inp.txt").toString().trim().split("\n").map((num) => Number(num));
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let startNum = input[0]
let endNum = input[1]
let arr= []
let sum=0;

  outer:for(let i= startNum; i<=endNum; i++){  
    if(i===1){
        continue;
    } 
    inner: for(let j=2; j*j<=i; j++){
            if(i % j===0){
                continue outer;
                 }
            }
            arr.push(i)
        } 
        if(arr.length===0){
            console.log(-1);
        }else{
           for (let i=0; i<arr.length; i++){
            sum=sum+arr[i]
           }
            console.log(sum);
            console.log(Math.min(...arr));
        }