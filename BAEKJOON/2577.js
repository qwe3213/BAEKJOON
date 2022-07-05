let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let A=input[0].split(' ').map(x => Number(x));
let B=input[1].split(' ').map(x => Number(x));
let C=input[2].split(' ').map(x => Number(x));

let mut =String(A*B*C);
//입력값 3개의 값을구하고 문자로 바꾼다.
for(let i=0; i<=9; i++){
   let count =0;
 
   for(let j=0; j<mut.length; j++){
      if(Number(mut[j])===i){
        count++   
     //숫자로 바꾸면서 i=0일때 1,7,0,3,7,3,0,0 이런식으로 나오면서 같을때마다 카운트 증가 를 10번한다.
      } 
      
   }
   console.log(count);
}