const { sign } = require("crypto");
let fs = require("fs");
let input = fs.readFileSync("inp.txt").toString().split("\n");
let n = Number(input[0]);
let arr = [];
for(let i =1; i<n+1; i++){
    arr.push(input[i].split(" ").map((element) => Number(element)))
}

let answer = 0;
let sum=0;
let sum2=0;
for (let i =0; i<n; i++){
    sum=0;
    sum2=0;
    for( let j=0; j<n; j++){
       sum+=arr[i][j];
       sum2+=arr[j][i];
    }
    answer= Math.max(answer,sum,sum2);
   
}
    sum=0;
    sum2=0;
for(let i=0; i<n; i++){
    sum+=arr[i][i];
    sum2+=arr[i][n-i-1]
}
 answer=Math.max(answer,sum,sum2)
 console.log(answer);