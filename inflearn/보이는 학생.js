let fs = require("fs");
let input = fs.readFileSync("inp.txt").toString().split("\n");

let n = Number(input[0]);
let numbers = input[1].split(" ").map((element) => Number(element))
let count =0;
let sum=0;
for(let i=0; i<n; i++){
    if(numbers[i]>sum){
        sum=numbers[i]
        count++
    }
}console.log(count);