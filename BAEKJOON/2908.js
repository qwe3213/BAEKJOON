let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
 let input = fs.readFileSync ('inp.txt').toString().split(' ');
let num = input.map(e => Number(e));


if((num[0]%10*100)+(Math.floor(num[0]/10)%10)*10+(Math.floor(num[0]/100))<(num[1]%10*100)+(Math.floor(num[1]/10)%10)*10+(Math.floor(num[1]/100))){
    console.log((num[1]%10*100)+(Math.floor(num[1]/10)%10)*10+(Math.floor(num[1]/100)));
} else{
    console.log((num[0]%10*100)+(Math.floor(num[0]/10)%10)*10+(Math.floor(num[0]/100)));
}
