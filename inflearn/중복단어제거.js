let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
 let input = fs.readFileSync ('inp.txt').toString().split('\n')
 let answer = ""
for(let i=1; i<input.length; i++){
    if(input.indexOf(input[i])===i){
      answer +=input[i]
    }
}
console.log(answer);