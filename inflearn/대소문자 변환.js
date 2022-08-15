let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
 let input = fs.readFileSync ('inp.txt').toString().split('')
let answer= ""
 for(let i=0; i<input.length; i++){
    if(input[i]===input[i].toUpperCase()){
      answer+=input[i].toLowerCase()
    }else if(input[i]===input[i].toLowerCase()){
      answer+=input[i].toUpperCase()
    }
 }
 console.log(answer);