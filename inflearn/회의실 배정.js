// // function solution(arr){
// let arrr = []
// for(let i = 0; i<arr.length; i++){
//     let count = 1;
//   for(let j = i+1; j<arr.length; j++){
//     if(arr[i][1]<=arr[j][0]){
//         count++
//         arr[i][1]= arr[j][1];
//       arrr.push(count)
//     }
//   }
// }console.log(arrr);
// //console.log(Math.max(...arrr));
// }

// // let arr=[[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]];
// // console.log(solution(arr));

 function solution(arr){
    arr.sort((a,b)=>{
        if(a[1]===b[1]) return a[0]-b[0]
        else  return a[1]-b[1]
    })
    let arrr =[];
for(let i = 0; i<arr.length; i++){
    let count = 1;
  for(let j = 1; j<arr.length; j++){
    if(arr[i][1]<=arr[j][0]){
        count++
        arr[i][1]= arr[j][1];
      arrr.push(count)
    }
  }
} console.log(Math.max(...arrr))
}

 let arr=[[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]];
 console.log(solution(arr));

function solution(meeting) {
  let answer = 0;
  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  let et = 0;
  for (let x of meeting) {
    if (x[0] >= et) {
      answer++;
      et = x[1];
    }
  }
  return answer;
}

let arrr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
console.log(solution(arrr));
