let fs = require('fs');
let input = fs.readFileSync('inp.txt').toString().trim(); 

let regExp = /c\=|c\-|dz\=|d\-|lj|nj|s\=|z\=/g;;

let result = input.replace(regExp,' ');

console.log(result.length);

