let fs = require("fs");

let input = fs.readFileSync("inp.txt").toString().split("\n");

let n = Number(input[0]);
let A = input[1].split(" ").map((element) => Number(element))
let B = input[2].split(" ").map((element) => Number(element))
let D="D"
let F="A"
let W="B"
for(let i=0; i<n; i++){
    if(A[i]===B[i]){
     console.log(D);
    }else if(A[i]>B[i]&&A[i]-B[i]===1){
     console.log(F);
   }else if(A[i]>B[i]&&A[i]-B[i]===2){
    console.log(W);
   }else if(A[i]<B[i]&&B[i]-A[i]===1){
    console.log(W);
   }else if(A[i]<B[i]&&B[i]-A[i]===2){
    console.log(F);
   }
}