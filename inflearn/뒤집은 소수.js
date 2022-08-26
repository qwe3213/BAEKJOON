let fs = require("fs");
const { isPrimitive } = require("util");
let input = fs.readFileSync("inp.txt").toString().split("\n");
let n= Number(input[0])
let inputs= input[1].split(" ").map((element)=>Number(element))
//let inputs = input[1].split(" ").map((elemnet)=>Number(elemnet))
function isPrime(n) {
    if (n < 2) return false;
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

let result = 0;
let arr = [];
for(let x of inputs){
    let res=0;
    while(x){
        let t=x%10;
        res=res*10+t;
        x=Math.floor(x/10);
    }if(isPrime(res)){
        arr.push(res)
    }console.log(arr);
}
