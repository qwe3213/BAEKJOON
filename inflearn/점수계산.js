let fs = require("fs");
let input = fs.readFileSync("inp.txt").toString().split("\n");
let n = Number(input[0]);
let inputs= input[1].split(" ").map((element)=>Number(element))
let sum=0;
let count =0;
for(let i=0; i<n; i++){
    if(inputs[i]===1){
      sum=sum+1;
      count=count+sum;
    }else if(inputs[i]===0){
        sum=0;
    }
}console.log(count);