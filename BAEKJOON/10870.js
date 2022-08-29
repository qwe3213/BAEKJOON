const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let n = Number(input[0]);
let arr = [0,1];

function R(n,arr) {
    let len = arr.length;
    if(len === n+1) {
        console.log(sum);
        return 1;
    } else {
        sum = arr[len-1] + arr[len-2];
        arr.push(sum);
        return R(n, arr);
    }
}
R(n,arr);