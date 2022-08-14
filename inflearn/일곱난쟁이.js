let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
 let input = fs.readFileSync ('inp.txt').toString().split(' ').map(Number);

 let answer = input
 let sum = input.reduce((a,b)=>a+b,0);
 
for(let i=0; i<input.length-1; i++){
    for(let j=i+1; j<input.length; j++){
     if(sum-(input[i]+input[j])===100){
         input.splice(j,1);
         input.splice(i,1)
     }
}
}console.log(input);