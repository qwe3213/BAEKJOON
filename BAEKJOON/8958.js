let input = require('fs').readFileSync('inp.txt').toString().split('\n');

let a=input[0].split(' ').map(x => Number(x));



for(let i=1; i<=a; i++){
    let count=0;
    let sum =0;
    for(let j=0; j<input[i].length-1; j++){
       
        if(input[i][j]==="O"){
           count++
        } else{
            count=0;
        }
        sum=sum+count;
        
    }
    console.log(sum);
}
