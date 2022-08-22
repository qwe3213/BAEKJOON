// let fs = require("fs");
// let input = fs.readFileSync("inp.txt").toString().split("")
// let arr =[]
// let arr1 =[]
// let arr2 =[]
// let C= ""
// for(let i=0; i<input.length; i++){
//  arr.push(input[i].toUpperCase())
// }

// for(let i=0; i<input.length; i++){
//       arr1.push(arr[i])
// }

// for(let i=input.length-1; i>=0; i--){
//     arr2.push(arr[i])
// }

// for(let i=0; i<input.length; i++){
//     if(arr1[i]!==arr2[i]){
//          C= "NO"
//         break;
//     }else if(arr1[i]===arr2[i]){
//         C ="YES"
//     }
// }
// console.log(C);

//반복문을 여러개 사용해서 풀어봄

// let fs = require("fs");
// let input = fs.readFileSync("inp.txt").toString().split("")
// let arr=[]
// let C= ""
// for(let i=0; i<input.length; i++){
//  arr.push(input[i].toUpperCase())
// }
// for(let i=0; i<Math.floor(input.length/2); i++){
//     if(arr[i]!==arr[input.length-1-i]){
//       C="NO"
//     }else{
//         C="YES"
//     }
// }
// console.log(C);
//식을 사용하여 풀어봄

let fs = require("fs");
let input = fs.readFileSync("inp.txt").toString().split('')
let arr=[]
let C=""
for(let i=0; i<input.length; i++){
 arr.push(input[i].toUpperCase())
}
let sum=""
for(let i=0; i<input.length; i++){
   sum+=arr[i]
}console.log(sum);
console.log(arr.join(""));
console.log(arr.reverse().join(""));
if(sum.split('').reverse().join("")===sum){
    C="YES";
}else{
    C="NO"
}
console.log(C);
//reveese() 함수사용해서푼식