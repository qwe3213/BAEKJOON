let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let a=input[0].split(' ').map(x => Number(x));
let b=input[1].split(' ').map(x => Number(x));
let c=input[2].split(' ').map(x => Number(x));
let d=input[3].split(' ').map(x => Number(x));
let e=input[4].split(' ').map(x => Number(x));
let f=input[5].split(' ').map(x => Number(x));
let g=input[6].split(' ').map(x => Number(x));
let h=input[7].split(' ').map(x => Number(x));
let i=input[8].split(' ').map(x => Number(x));
//입력값 구하기
const first= a.shift();
const second =b.shift();
const th =c.shift();
const fr =d.shift();
const fi =e.shift();
const si =f.shift();
const se =g.shift();
const ei =h.shift();
const ni =i.shift();
//배열지우기


const arr= [first,second,th,fr,fi,si,se,ei,ni];


//지운배열 숫자 배열에넣기

var m= Math.max(...arr);
console.log(m); //최대값
console.log(arr.indexOf(m)+1); //최대값 위치



/*
 또다른 식
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(x=> Number(x));

let max = input[0];
let maxIdx = 0;

for (let i = 1; i < 9; i++) {
  if (max < input[i]) {
    max = input[i];
    maxIdx = i;
  }
}

console.log(max);
console.log(maxIdx + 1);
*/