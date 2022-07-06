const input = require('fs').readFileSync('inp.txt').toString().trim().split('\n').map(Number);

let arr = input.map(input => input % 42);

const set = new Set(arr);
arr = [...set];

console.log(arr.length);