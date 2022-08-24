let fs = require("fs");

let input = fs.readFileSync("inp.txt").toString().split("");
let str = ""
for(let i= 0; i<input.length; i++){
    str+=input[i]
}

str=str.toLocaleLowerCase().replace(/[^0-9]/g,'');
let Num=Number(str)
console.log(Num);