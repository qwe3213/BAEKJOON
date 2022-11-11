// function solution(n) {
//   let answer = 0;
//   let now = 1,
//     count = 1,
//     plusNum = 0;

//   while (count <= n) {
//     plusNum = plusNum + now;
//     if (plusNum >= n) {
//       if (plusNum === n) answer++;
//       plusNum = 0;
//       count++;
//       now = count;
//     } else {
//       now++;
//     }
//   }

//   return answer;
// }
function solution(n) {
  let nm = Math.ceil(n / 2);
  let answer = 1;
  for (let i = 1; i <= nm; i++) {
    let sum = 0;
    for (let j = i; j <= nm + 1; j++) {
      sum = sum + j;
      if (sum === n) {
        answer++;
        break;
      } else if (sum > n) {
        break;
      }
    }
  }
  return answer;
}
let arrr = 10000;
console.log(solution(arrr));
