let fs = require("fs");
let input = fs.readFileSync("inp.txt").toString().split("");
let count=1;
let result= ""
for(let i=0; i<input.length; i++){
    if(input[i]===input[i+1]){
        count++
    }else{
        result+=input[i]
        if(count>1){
            result+=String(count)
        }
        count=1;
    }
}console.log(result);