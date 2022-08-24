let fs = require('fs');

// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
 let input = fs.readFileSync ('inp.txt').toString().split('')
 let str =""
 let lasts = input.pop();
 for(let i =0; i<input.length; i++){
    str+=input[i];
 }
  let arr = str.trim().split('')
  console.log(arr.length);
  let P =arr.length+1 ;
  let arrs=[];
  let arrss=[];
  let ar =[];
  for(let i=0; i<arr.length; i++){
    if(arr[i]!==lasts){
     P++;
     arrs.push(P)
    }else if(arr[i]===lasts){
        P=0;
        arrs.push(P)
    }
  }
  for(let j=arr.length-1; j>=0; j--){
    if(arr[j]!==lasts){
    P++;
    arrss.push(P)
    }else if(arr[j]===lasts){
        P=0;
        arrss.push(P)
    }
  }
  const arrre=arrss.reverse();
  console.log(arrs);
  console.log(arrre);
  for(let i=0; i<arr.length; i++){
    if(arrs[i]>=arrre[i]){
             ar.push(arrre[i]);
    }else if(arrs[i]<=arrre[i]){
        ar.push(arrs[i])
    }
  }
   console.log(ar);
