let input = Number(require('fs').readFileSync('inp.txt').toString());

let Inputnumber=input;
let sum;
let i = 0;

while(true){
    i++;
    
    sum= Math.floor(Inputnumber/10)+Inputnumber%10;
    Inputnumber=(Inputnumber%10)*10+ sum%10;
    if(input===Inputnumber){
        break;
    }
}console.log(i);