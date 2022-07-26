let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
 let input = fs.readFileSync ('inp.txt').toString().trim();
let X = Number(input)
let Counter =0;
const O =[];
const N =[];
while (X>0){
  Counter++;
  X=X-Counter
} 

for(let i=0; i<Counter; i++){
    O.push(i+1);
    N.push(Counter-i);
    
} 
// if(Counter%2===0){
//     console.log(`${O[0]}/${N[0]}`);
// } else{
//     console.log(`${N[0]}/${O[0]}`);
// }

if(Counter%2===0){
    console.log(`${O[X+Counter-1]}/${N[X+Counter-1]}`);
}else {
    console.log(`${N[X+Counter-1]}/${O[X+Counter-1]}`)
}