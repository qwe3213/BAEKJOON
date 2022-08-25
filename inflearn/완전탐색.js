let fs = require("fs");
let input = fs.readFileSync("inp.txt").toString().split("\n");
let n = Number(input[0]);
let result = 0;
let arr = [];
let inputs= input[1].split(" ").map((element)=>String(element))
console.log(inputs[0].split(""));

for(let i =0; i<n; i++){
    result=0;
    for(let j = 0; j < inputs[i].length; j ++){
    result+=Number(inputs[i].split("")[j])
  }arr.push(result)
}
console.log(arr);
let count=0;

for(let i =0; i<1; i++){
   for(let j=1; j<n; j++){
    if(arr[i]<arr[j]){
        arr[i]=arr[j];
        count=Number(inputs[j])
     }
     else if(arr[i]===arr[j]){
      if(inputs[i]>inputs[j]){
        count+=Number(inputs[i])
      }else{
        count+=Number(inputs[j])
      }
      }
     }
   }    
  if(count===0){
    count+=Number(inputs[0])
  }
  console.log(count);
 
