let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString()
 let input = fs.readFileSync ('inp.txt').toString()

 let input0 =input.trim().split('')
 console.log(input0);
 let count = 0;
for(let i=0; i<input0.length; i++){
   if(input0[i]!==''){
    count++
   }
}
console.log(count);