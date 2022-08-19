let fs = require("fs");
let input = fs.readFileSync("inp.txt").toString().split("\n");

let n = Number(input[0]);
let numbers = input[1].split(" ").map((element) => Number(element))

for(i=0; i<n; i++){
    let count=1;
    for( j=0; j<n; j++){
        if(numbers[i]<numbers[j]){
            count++
        }
    }console.log(count);
}