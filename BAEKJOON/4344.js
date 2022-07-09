const input = require('fs').readFileSync('inp.txt').toString().split('\n');

const a = Number(input[0]);



for(let i=1; i<=a; i++){
   let sum=0;
   let count=0;
    score= input[i].split(' ').map(Number);
  
    const n =score[0];

   for(let j=1; j<=n; j++){
    sum+=score[j]
    
   }
     const avg=sum/n;
     for(let g=1; g<=n; g++){
        if(score[g]>avg){
            count++
        }
     }
     console.log(((count/n)*100).toFixed(3)+"%");
}
  
   
