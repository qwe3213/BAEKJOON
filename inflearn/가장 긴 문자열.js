let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
 let input = fs.readFileSync ('inp.txt').toString().split('\n')
let sum= 0;

for(let i=1; i<input[0]; i++){
    if(input[i].length>sum)
      sum=input[i].length
      
}
for(let i =1; i<input[0]; i++){
    if(input[i].length===sum){
        console.log(input[i]);
    }
}



// let sum= 0;
// let answer = ""
// for(let i=1; i<input[0]; i++){
//     if(input[i].length>sum)
//       sum=input[i].length
//       answer=input[i]
// }console.log(answer);

//위의 코드는 더줄인것