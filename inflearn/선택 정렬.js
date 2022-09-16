// function solution(arr) {
//   let answer = arr;
//   for (let i = 0; i < arr.length; i++) {
//     let idx = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[idx]) idx = j;
//     }
//     [arr[i], arr[idx]] = [arr[idx], arr[i]];
//   }
//   return answer;
// }

// let arr = [13, 5, 11, 7, 23, 15];
// console.log(solution(arr));

function solution(arr) {
let arrr= []
 for(let i = 0; i<6; i++){
    let min = Math.min(...arr);
    let idx = arr.indexOf(min);
    arr.splice(idx, 1);
    arrr.push(min)
 }console.log(arrr);
} 
  
  let arr = [13, 5, 11, 7, 23, 15];
  console.log(solution(arr));

  
// function solution(arr){
//    arr.sort(function(a,b){
//        return a-b;
//    })
//    console.log(arr);
// }
// let arr = [13, 5, 11, 7, 23, 15];
// console.log(solution(arr));